import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule, UntypedFormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgScrollbar } from 'ngx-scrollbar';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';
import { PickerComponent } from '@ctrl/ngx-emoji-mart';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    PickerComponent,
    BreadcrumbComponent,
    NgScrollbar,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers:[
    ChatService
  ]
})
export class ChatComponent implements OnInit   {

  @ViewChild('chatContainer') private chatContainerRef!: ElementRef;

  hideRequiredControl = new UntypedFormControl(false);
  inputMessage:any = ""
  showEmoji:boolean = false

  messages: any[] = [];

  breadscrums = [
    {
      title: 'Chat',
      items: ['Apps'],
      active: 'Chat',
    },
  ];

  constructor(private socket:ChatService, private cdr:ChangeDetectorRef) {
    //constructor
  }

  ngOnInit(): void {
    console.log('"dddd');
    //this.chatService.connect()
    
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.socket.connect()
    this.handleReceiveMessage()
    
  }

  scrollToBottom(): void {
    try {
      this.chatContainerRef.nativeElement.scrollTop = this.chatContainerRef.nativeElement.scrollHeight;
    } catch(err) { }
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  addEmoji(event:any) {
    console.log(event.emoji.native);
    this.inputMessage = this.inputMessage+event.emoji.native
    this.showEmoji = false
  }

  handleShowEmoji() {
    this.showEmoji = !this.showEmoji
  }

  handleReceiveMessage() {
    this.socket.fromEvent('receiveMessage').subscribe(
      (data:any)=>{
        console.log(data);
        this.cdr.markForCheck()
        this.messages.push(data.message.data)
        console.log(this.messages.length);
        
        this.cdr.detectChanges()
      }
    )
    this.cdr.detectChanges()
  }

  handleSendMessage(event:any) {
    if (event.key === "Enter") {

      let message = {
        from:'me',
        name:'john doe',
        date: new Date(),
        message:this.inputMessage,
        isRead:false
      }
      this.socket.emit('sendMessage',{data:{...message, from:'other'}})
      this.messages.push(message)
      this.inputMessage = ""
    }
    
    //this.socket.emit('sendMessage',{data:'test Message'})
  }
}