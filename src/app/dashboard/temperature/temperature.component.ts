import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Chart } from "angular-highcharts";

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent implements OnInit {
  @Input()  dataTemp = 0;
  
  Highcharts = Highcharts;
  TemperatureChartOptions: any = {
    chart: {
      //type: 'gauge',
      backgroundColor: 'none',
      plotBackgroundColor: null,
      plotBackgroundImage: null,
      plotBorderWidth: 0,
      plotShadow: false,
      height: '80%'
  },
    title: {
      text: 'Temperature Level',
    },
    pane: {
      startAngle: -50,
      endAngle: 50,
      background: null,
      center: ['50%', '75%'],
      size: '110%'
  },
    
  yAxis: {
    min: 0,
    max: 60,
   // tickPixelInterval: 72,
    //tickPosition: 'inside',
    //tickColor: Highcharts.defaultOptions.chart.backgroundColor || '#FFFFFF',
    //tickLength: 20,
    //tickWidth: 2,
   // minorTickInterval: null,
    labels: {
        distance: 20,
        style: {
            fontSize: '14px'
        }
    },
    lineWidth: 0,
    plotBands: [{
        from: 0,
        to: 25,
        color: '#55BF3B', // green
        thickness: 20
    }, {
        from: 25,
        to: 40,
        color: '#DDDF0D', // yellow
        thickness: 20
    }, {
        from: 40,
        to: 60,
        color: '#fa0505', // red
        thickness: 20
    }]
},
series: [{
  name: 'Temperature',
  data: [27],
  tooltip: {
      valueSuffix: ' km/h'
  },
  dataLabels: {
      format: '{y} km/h',
      borderWidth: 0,
      /*color: (
          Highcharts.defaultOptions.title &&
          Highcharts.defaultOptions.title.style &&
          Highcharts.defaultOptions.title.style.color
      ) || '#333333',*/
      style: {
          fontSize: '16px'
      },
      dial: {
        radius: '80%',
        backgroundColor: 'gray',
        baseWidth: 12,
        baseLength: '0%',
        rearLength: '0%'
    },
    pivot: {
        backgroundColor: 'gray',
        radius: 6
  },
  },
 

}]
  };
  
    TempChart = new Chart(this.TemperatureChartOptions);
    
  ngOnInit(): void {
  
  }
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    
    if (!changes['dataTemp'].firstChange) {
      console.log('La valeur a changé de', changes['dataTemp'].previousValue, 'à', changes['dataTemp'].currentValue);
      

    }
  }
}
