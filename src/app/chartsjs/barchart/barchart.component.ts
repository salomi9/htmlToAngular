import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { DemoServiceService } from '../../services/demo-service.service';
@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {

  

  constructor(private demoServiceObject : DemoServiceService) { }

  ngOnInit(): void {
    // console.log("INITED")
    
  }

  // Array of different segments in chart
  barChartData: ChartDataSets[] = [
    { data: [2500, 5900, 6000, 8100, 8600, 8050, 1200], label: 'Company A' },
    { data: [2800, 4800, 4000, 7900, 9600, 8870, 1400], label: 'Company B' }
  ];

  //Labels shown on the x-axis
  barChartLabels: Label[] = ['2013', '2014', '2015', '2016', '2017', '2018'];

  // Define chart options
  barChartOptions: ChartOptions = {
    responsive: true
  };

  // Define colors of chart segments
  barChartColors: Color[] = [

    { // dark grey
      backgroundColor: 'blue',
      borderColor: 'blue',
    },
    { // red
      backgroundColor: 'red',
      borderColor: 'red',
    }
  ];

  // Set true to show legends
  barChartLegend = true;

  // Define type of chart
  barChartType = 'bar';

  barChartPlugins = [];

  // events
  chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
