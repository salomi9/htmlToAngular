import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { LinechartService } from '../../services/linechart.service';
@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css']
})
export class LinechartComponent implements OnInit {

  constructor(private lineService : LinechartService) { }

  ngOnInit(): void {
    let param = {}
      this.lineService.lineChart(param).subscribe(data => {
          console.log("Harmonics data", data)
          this.lineChartData[0].data = data.AvgArr;
          this.lineChartLabels = data.axis
      })
  }

  // Array of different segments in chart
  lineChartData: ChartDataSets[] = [
    { data: [], label: 'Harmonics' },
    
  ];

  //Labels shown on the x-axis
  lineChartLabels: Label[] = [
    // 'January', 'February', 'March', 'April', 'May', 'June', 'July'
  ];

  // Define chart options
  lineChartOptions: ChartOptions = {
    responsive: true
  };

  // Define colors of chart segments
  lineChartColors: Color[] = [

    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
    },
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
    }
  ];

  // Set true to show legends
  lineChartLegend = true;

  // Define type of chart
  lineChartType = 'line';

  lineChartPlugins = [];

  // events
  chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
