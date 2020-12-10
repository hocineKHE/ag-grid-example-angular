import {Component} from '@angular/core';
import {ColumnApi, GridApi} from 'ag-grid-community';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {UsersInfoService} from './user-services/users-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  gridApi!: GridApi;
  gridColumnApi!: ColumnApi;
  columnDefs: any[];
  sortingOrder: any;

  constructor(private usersInfoService: UsersInfoService) {
    this.columnDefs  =  [{
      headerName: 'Athlete',
      field: 'athlete',
      width: 150,
      sortable: true,
      filter: true,
      sortingOrder: ['asc', 'desc']
    },
      {
        headerName: 'age',
        field: 'age',
        sortable: true,
        filter: true,
        width: 90,
        sortingOrder: ['desc', 'asc']
      },
      {
        headerName: 'Country',
        field: 'country',
        sortable: true,
        width: 150,
        filter: true,
        sortingOrder: ['desc', null]
      },
      {
        headerName: 'Year',
        field: 'year',
        sortable: true,
        width: 150,
        filter: true,
        sortingOrder: ['asc']
      },
      {
        headerName: 'Sport',
        field: 'sport',
        sortable: true,
        width: 150,
        filter: true
      },
      {
        headerName: 'Gold',
        field: 'gold',
        width: 100
      },
      {
        headerName: 'Silver',
        field: 'silver',
        width: 100
      },
      {
        headerName: 'Bronze',
        field: 'bronze',
        width: 100
      },
      {
        headerName: 'Total',
        field: 'total',
        width: 100
      }];
  }

  onGridReady(params: any) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.usersInfoService.getUsersData()
      .subscribe(data => {
        console.log(data);
        params.api.setRowData(data);

      }, error => {
        console.log(error);
      });

  }
}
