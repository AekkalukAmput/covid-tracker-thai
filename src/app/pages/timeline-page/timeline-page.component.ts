import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TimeLineData } from 'src/app/service/models/timeline-data.model';
import { TimeLine } from '../../service/models/timeline.model';
import { RestApiService } from '../../service/rest-api.service';

@Component({
  selector: 'app-timeline-page',
  templateUrl: './timeline-page.component.html',
  styleUrls: ['./timeline-page.component.css']
})
export class TimelinePageComponent implements OnInit {

  displayedColumns: string[] = ['no', 'NewConfirmed', 'NewRecovered', 'NewHospitalized', 'NewDeaths', 'Confirmed', 'Recovered', 'Hospitalized', 'Deaths', 'Date'];
  timelineData: TimeLine = {
    UpdateDate: '',
    Source: '',
    DevBy: '',
    SeverBy: '',
    Data: []
  };
  dataSource = new MatTableDataSource<TimeLineData>([]);

  constructor(
    private http: RestApiService
  ) { }

  ngOnInit(): void {
    this.http.getTimeLine().subscribe((data) => {
      this.timelineData = data
      this.dataSource = new MatTableDataSource<TimeLineData>(data.Data);
      this.dataSource.paginator = this.paginator;
    })
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

}