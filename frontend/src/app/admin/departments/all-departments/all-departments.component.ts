import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DepartmentService } from './department.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { Department } from './department.model';
import { DataSource } from '@angular/cdk/collections';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { BehaviorSubject, fromEvent, merge, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormDialogComponent } from './dialogs/form-dialog/form-dialog.component';
import { DeleteDialogComponent } from './dialogs/delete/delete.component';
import { MatMenuTrigger, MatMenuModule } from '@angular/material/menu';
import { SelectionModel } from '@angular/cdk/collections';
import { Direction } from '@angular/cdk/bidi';
import { TableExportUtil, TableElement, UnsubscribeOnDestroyAdapter } from '@shared';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRippleModule } from '@angular/material/core';
import { FeatherIconsComponent } from '@shared/components/feather-icons/feather-icons.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgClass } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-all-departments',
  templateUrl: './all-departments.component.html',
  styleUrls: ['./all-departments.component.scss'],
  standalone: true,
  imports: [
    BreadcrumbComponent,
    MatTooltipModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    NgClass,
    MatCheckboxModule,
    FeatherIconsComponent,
    MatRippleModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatPaginatorModule,
  ],
})
export class AllDepartmentsComponent extends UnsubscribeOnDestroyAdapter implements OnInit {
  displayedColumns = ['select', 'dName', 'hod', 'phone', 'email', 'sYear', 'sCapacity', 'actions'];
  exampleDatabase?: DepartmentService;
  dataSource!: ExampleDataSource;
  selection = new SelectionModel<Department>(true, []);
  id?: number;
  department?: Department;
  breadscrums = [
    {
      title: 'All Departments',
      items: ['Department'],
      active: 'All',
    },
  ];

  constructor(
    public httpClient: HttpClient,
    public dialog: MatDialog,
    public departmentService: DepartmentService,
    private snackBar: MatSnackBar
  ) {
    super();
  }

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild('filter', { static: true }) filter!: ElementRef;
  @ViewChild(MatMenuTrigger) contextMenu?: MatMenuTrigger;

  contextMenuPosition = { x: '0px', y: '0px' };

  ngOnInit() {
    this.loadData();
  }

  refresh() {
    this.loadData();
  }

  addNew() {
    let tempDirection: Direction = localStorage.getItem('isRtl') === 'true' ? 'rtl' : 'ltr';
    const dialogRef = this.dialog.open(FormDialogComponent, {
      data: { department: this.department, action: 'add' },
      direction: tempDirection,
    });

    this.subs.sink = dialogRef.afterClosed().subscribe((result) => {
      if (result === 1 && this.exampleDatabase) {
        this.exampleDatabase.dataChange.value.unshift(this.departmentService.getDialogData());
        this.refreshTable();
        this.showNotification('snackbar-success', 'Add Record Successfully...!!!', 'bottom', 'center');
      }
    });
  }

  editCall(row: Department) {
    this.id = row.id;
    let tempDirection: Direction = localStorage.getItem('isRtl') === 'true' ? 'rtl' : 'ltr';
    const dialogRef = this.dialog.open(FormDialogComponent, {
      data: { department: row, action: 'edit' },
      direction: tempDirection,
    });

    this.subs.sink = dialogRef.afterClosed().subscribe((result) => {
      if (result === 1 && this.exampleDatabase) {
        const foundIndex = this.exampleDatabase.dataChange.value.findIndex((x) => x.id === this.id);
        if (foundIndex != null) {
          this.exampleDatabase.dataChange.value[foundIndex] = this.departmentService.getDialogData();
          this.refreshTable();
          this.showNotification('black', 'Edit Record Successfully...!!!', 'bottom', 'center');
        }
      }
    });
  }

  deleteItem(row: Department) {
    this.id = row.id;
    let tempDirection: Direction = localStorage.getItem('isRtl') === 'true' ? 'rtl' : 'ltr';
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: row,
      direction: tempDirection,
    });

    this.subs.sink = dialogRef.afterClosed().subscribe((result) => {
      if (result === 1 && this.exampleDatabase) {
        const foundIndex = this.exampleDatabase.dataChange.value.findIndex((x) => x.id === this.id);
        if (foundIndex != null) {
          this.exampleDatabase.dataChange.value.splice(foundIndex, 1);
          this.refreshTable();
          this.showNotification('snackbar-danger', 'Delete Record Successfully...!!!', 'bottom', 'center');
        }
      }
    });
  }

  private refreshTable() {
    this.paginator._changePageSize(this.paginator.pageSize);
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.renderedData.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ? this.selection.clear() : this.dataSource.renderedData.forEach((row) => this.selection.select(row));
  }

  removeSelectedRows() {
    const totalSelect = this.selection.selected.length;
    this.selection.selected.forEach((item) => {
      const index: number = this.dataSource.renderedData.findIndex((d) => d === item);
      if (this.exampleDatabase) {
        this.exampleDatabase.dataChange.value.splice(index, 1);
        this.refreshTable();
      }
      this.selection = new SelectionModel<Department>(true, []);
    });
    this.showNotification('snackbar-danger', totalSelect + ' Record Delete Successfully...!!!', 'bottom', 'center');
  }

  public loadData() {
    this.exampleDatabase = new DepartmentService(this.httpClient);
    this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.sort);
    this.subs.sink = fromEvent(this.filter.nativeElement, 'keyup').subscribe(() => {
      if (!this.dataSource) {
        return;
      }
      this.dataSource.filter = this.filter.nativeElement.value;
    });
  }

  exportExcel() {
    const exportData: Partial<TableElement>[] = this.dataSource.filteredData.map((x) => ({
      'Department Name': x.dName || 'N/A',
      'Head Of Department': x.hod || 'N/A',
      Phone: x.phone || 'N/A',
      Email: x.email || 'N/A',
      'Start Year': x.sYear ? x.sYear.toString() : 'N/A',
      'Students Capacity': x.sCapacity || 'N/A',
    }));

    TableExportUtil.exportToExcel(exportData, 'excel');
  }

  showNotification(colorName: string, text: string, placementFrom: MatSnackBarVerticalPosition, placementAlign: MatSnackBarHorizontalPosition) {
    this.snackBar.open(text, '', {
      duration: 2000,
      verticalPosition: placementFrom,
      horizontalPosition: placementAlign,
      panelClass: colorName,
    });
  }

  onContextMenu(event: MouseEvent, item: Department) {
    event.preventDefault();
    this.contextMenuPosition.x = event.clientX + 'px';
    this.contextMenuPosition.y = event.clientY + 'px';
    if (this.contextMenu && this.contextMenu.menu) {
      this.contextMenu.menuData = { item: item };
      this.contextMenu.menu.focusFirstItem('mouse');
      this.contextMenu.openMenu();
    }
  }
}

export class ExampleDataSource extends DataSource<Department> {
  filterChange = new BehaviorSubject('');
  get filter(): string {
    return this.filterChange.value;
  }
  set filter(filter: string) {
    this.filterChange.next(filter);
  }

  filteredData: Department[] = [];
  renderedData: Department[] = [];

  constructor(public exampleDatabase: DepartmentService, public paginator: MatPaginator, public sort: MatSort) {
    super();
    this.filterChange.subscribe(() => (this.paginator.pageIndex = 0));
  }

  connect(): Observable<Department[]> {
    const displayDataChanges = [
      this.exampleDatabase.dataChange,
      this.sort.sortChange,
      this.filterChange,
      this.paginator.page,
    ];

    this.exampleDatabase.getAllDepartments();

    return merge(...displayDataChanges).pipe(
      map(() => {
        this.filteredData = this.exampleDatabase.data.slice().filter((department: Department) => {
          const searchStr = (
            (department.dName || '') +
            (department.hod || '') +
            (department.phone ? department.phone.toString() : '') +
            (department.email || '') +
            (department.sYear ? department.sYear.toString() : '') +
            (department.sCapacity >= 0  ? department.sCapacity.toString() : '')
          ).toLowerCase();

          return searchStr.includes(this.filter.toLowerCase());
        });

        const sortedData = this.sortData(this.filteredData.slice());
        const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        this.renderedData = sortedData.splice(startIndex, this.paginator.pageSize);
        return this.renderedData;
      })
    );
  }

  disconnect() {}

  sortData(data: Department[]): Department[] {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }
    return data.sort((a, b) => {
      let propertyA: number | string = '';
      let propertyB: number | string = '';
      switch (this.sort.active) {
        case 'id':
          [propertyA, propertyB] = [a.id, b.id];
          break;
        case 'dName':
          [propertyA, propertyB] = [a.dName, b.dName];
          break;
        case 'hod':
          [propertyA, propertyB] = [a.hod, b.hod];
          break;
        case 'phone':
          [propertyA, propertyB] = [a.phone, b.phone];
          break;
        case 'email':
          [propertyA, propertyB] = [a.email, b.email];
          break;
      }
      const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      const valueB = isNaN(+propertyB) ? propertyB : +propertyB;
      return (valueA < valueB ? -1 : 1) * (this.sort.direction === 'asc' ? 1 : -1);
    });
  }
}
