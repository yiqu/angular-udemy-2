import { AfterViewInit, Component, EventEmitter, Input,
  OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Exercise } from 'src/app/admin/store/admin.state';
import { TableActionButtonData } from '../models/general.model';
import { DialogConfirmService } from '../services/confirm.service';

@Component({
  selector: 'app-shared-table',
  templateUrl: 'table.component.html',
  styleUrls: ['table.component.scss']
})

export class TableComponent implements OnInit, OnChanges, AfterViewInit {

  @Input()
  columns: string[] = [];

  @Input()
  columnsData: any[] = [];

  @Input()
  displayBorder?: boolean;

  @Input()
  hasOptions?: boolean;

  @Input()
  optionButtons: string[] = [];

  @Output()
  actionBtnClick: EventEmitter<TableActionButtonData> = new EventEmitter<TableActionButtonData>();

  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;
  @ViewChild(MatSort) sort: MatSort | null = null;

  cols: string[] = [];

  constructor(private cs: DialogConfirmService) {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.columnsData);
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.cols = [...this.columns];
    if (this.hasOptions) {
      this.cols = this.addOptionsColumn(this.cols);
    }
    this.dataSource = new MatTableDataSource(this.columnsData);

    console.log(this.cols, this.columnsData);
  }

  ngAfterViewInit() {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  addOptionsColumn(cols: string[]): string[] {
    return [...cols, 'options'];
  }

  onActionBtnClick(btn: string, data: Exercise) {
    this.actionBtnClick.emit({
      btnAction: btn,
      data: data
    });
  }

}
