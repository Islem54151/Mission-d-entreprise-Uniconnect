import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ExamScheduleService } from './exam-schedule.service';
import { HttpClient } from '@angular/common/http';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { ExamSchedule } from './exam-schedule.model';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, fromEvent, merge, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SelectionModel } from '@angular/cdk/collections';
import { UnsubscribeOnDestroyAdapter } from '@shared';
import { DatePipe } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRippleModule } from '@angular/material/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-exam-schedule',
  templateUrl: './exam-schedule.component.html',
  styleUrls: ['./exam-schedule.component.scss'],
  standalone: true,
  providers: [DatePipe], // Add this line
  imports: [
    BreadcrumbComponent,
    MatTableModule,
    MatSortModule,
    MatRippleModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    DatePipe,
  ],
})
export class ExamScheduleComponent
  extends UnsubscribeOnDestroyAdapter
  implements OnInit {
  displayedColumns = [
    'subject',
    'class',
    'date',
    'time',
    'duration',
    'roomNo',
    'totalMarks',
    'reqMarks',
  ];
  exampleDatabase?: ExamScheduleService;
  dataSource!: ExampleDataSource;
  selection = new SelectionModel<ExamSchedule>(true, []);
  index?: number;
  id?: number;
  examSchedule?: ExamSchedule;

  breadscrums = [
    {
      title: 'Schedule',
      items: ['Teacher'],
      active: 'Exam Schedule',
    },
  ];

  constructor(
    public httpClient: HttpClient,
    public examScheduleService: ExamScheduleService,
    private datePipe: DatePipe
  ) {
    super();
  }

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild('filter', { static: true }) filter!: ElementRef;

  ngOnInit() {
    this.loadData();
  }

  public loadData() {
    this.exampleDatabase = new ExamScheduleService(this.httpClient);
    this.dataSource = new ExampleDataSource(
      this.exampleDatabase,
      this.paginator,
      this.sort,
      this.datePipe
    );
    this.subs.sink = fromEvent(this.filter?.nativeElement, 'keyup').subscribe(
      () => {
        if (!this.dataSource) {
          return;
        }
        this.applyFilter(this.filter?.nativeElement?.value || '');
      }
    );
  }

  applyFilter(filterValue: string) {
    if (this.dataSource) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  }
}

export class ExampleDataSource extends DataSource<ExamSchedule> {
  filterChange = new BehaviorSubject('');
  get filter(): string {
    return this.filterChange.value;
  }
  set filter(filter: string) {
    this.filterChange.next(filter);
  }
  filteredData: ExamSchedule[] = [];
  renderedData: ExamSchedule[] = [];

  constructor(
    public exampleDatabase: ExamScheduleService,
    public paginator: MatPaginator,
    public _sort: MatSort,
    private datePipe: DatePipe
  ) {
    super();
    // Reset to the first page when the user changes the filter.
    this.filterChange.subscribe(() => {
      if (this.paginator) {
        this.paginator.pageIndex = 0;
      }
    });
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<ExamSchedule[]> {
    // Listen for any changes in the base data, sorting, filtering, or pagination
    const displayDataChanges = [
      this.exampleDatabase.dataChange,
      this._sort.sortChange,
      this.filterChange,
      this.paginator.page,
    ];
    this.exampleDatabase.getAllExamSchedule();
    return merge(...displayDataChanges).pipe(
      map(() => {
        // Filter data
        this.filteredData = this.exampleDatabase.data
          .slice()
          .filter((examSchedule: ExamSchedule) => {
            const searchStr = (
              examSchedule.subject +
              examSchedule.classe +
              this.datePipe.transform(examSchedule.date, 'yyyy-MM-dd') +
              examSchedule.time +
              examSchedule.duration +
              examSchedule.totalMarks
            ).toLowerCase();
            return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
          });
        // Sort filtered data
        const sortedData = this.sortData(this.filteredData.slice());
        // Grab the page's slice of the filtered sorted data.
        const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        this.renderedData = sortedData.splice(
          startIndex,
          this.paginator.pageSize
        );
        return this.renderedData;
      })
    );
  }

  disconnect() {
    // disconnect
  }

  /** Returns a sorted copy of the database data. */
  sortData(data: ExamSchedule[]): ExamSchedule[] {
    if (!this._sort.active || this._sort.direction === '') {
      return data;
    }
    return data.sort((a, b) => {
      let propertyA: number | string = '';
      let propertyB: number | string = '';
      switch (this._sort.active) {
        case 'id':
          [propertyA, propertyB] = [a.id, b.id];
          break;
        case 'subject':
          [propertyA, propertyB] = [a.subject, b.subject];
          break;
        case 'class':
          [propertyA, propertyB] = [a.classe, b.classe];
          break;
        case 'date':
          [propertyA, propertyB] = [
            a.date.getTime(),
            b.date.getTime()
          ]; // compare dates as numbers
          break;
      }
      const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      const valueB = isNaN(+propertyB) ? propertyB : +propertyB;
      return (
        (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1)
      );
    });
  }
}
