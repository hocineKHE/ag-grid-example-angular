import {Component} from '@angular/core';
import {ColumnApi, GridApi} from 'ag-grid-community';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {UsersInfoService} from './user-services/users-info.service';
import {Config} from './aggrid-configuration/config';

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

  constructor(private usersInfoService: UsersInfoService, private config: Config) {
    this.columnDefs = config.columnDefs;
  }

  onGridReady(params: any) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.usersInfoService.getUsersData()
      .subscribe(data => {
        params.api.setRowData(data);

      }, error => {
        console.log(error);
      });

  }
}
