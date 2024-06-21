import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { ColorPickerComponent } from 'ngx-editor/lib/modules/menu/color-picker/color-picker.component';
@Component({
  selector: 'app-contact-grid',
  templateUrl: './contact-grid.component.html',
  styleUrls: ['./contact-grid.component.scss'],
  standalone: true,
  imports: [BreadcrumbComponent, MatButtonModule
  
  ],
})
export class ContactGridComponent {
  breadscrums = [
    {
      title: 'Contact Grid',
      items: ['Apps'],
      active: 'Contact Grid',
    },
  ];
  constructor() {
    // constructor
  }
}
