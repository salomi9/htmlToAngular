import { Component, OnInit } from '@angular/core';
import { Label, MultiDataSet, Color } from 'ng2-charts';
import { ChartType } from 'chart.js';
@Component({
  selector: 'app-doughnutchart',
  templateUrl: './doughnutchart.component.html',
  styleUrls: ['./doughnutchart.component.css']
})
export class DoughnutchartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  doughnutChartLabels: Label[] = ['PUBG', 'Call of Duty', 'Fortnite'];
  doughnutChartData: MultiDataSet = [
    [53, 30, 17]
  ];
  doughnutChartType: ChartType = 'doughnut';

}
