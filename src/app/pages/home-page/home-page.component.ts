import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { RestApiService } from 'src/app/service/rest-api.service';

export interface TableElement {
  id: string;
  name: string;
  email: string;
  website: string;
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  col: string[] = ['id', 'name', 'email', 'website'];
  dataSource = new MatTableDataSource;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private restApiService: RestApiService) {
    this.restApiService.getUsers().subscribe((res) => {
      this.dataSource = new MatTableDataSource<TableElement>(res);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    })
}

  ngOnInit(): void {
  }

}
