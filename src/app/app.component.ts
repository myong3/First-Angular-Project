import { Component, OnInit } from '@angular/core';
import { stationList } from './station-list.const';
import { DatePipe } from '@angular/common';
import { ExponentialStrengthPipe } from './app.exponentialStrengthPipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  datePipeString: string;
  title = 'HelloAngular';
  lists = stationList;
  pow: number;
  // pow = 5 | exponentialStrength: 5;
  // a = 2020-09-26T14:23:06.96 | date:
  color = 'orange';

  constructor(
    private datePipe: DatePipe,
    private exponentialStrengthPipe: ExponentialStrengthPipe
  ) {
    this.datePipeString = datePipe.transform(Date.now(), 'yyyy-MM-dd');
    this.pow = exponentialStrengthPipe.transform(5, '1');
    console.log(this.pow);
  }

  // tslint:disable-next-line: typedef
  ngOnInit() {}
  // tslint:disable-next-line: typedef
  changecoloe() {
    this.color = 'red';
  }
}
