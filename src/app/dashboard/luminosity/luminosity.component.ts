import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Chart } from "angular-highcharts";

@Component({
  selector: 'app-luminosity',
  templateUrl: './luminosity.component.html',
  styleUrls: ['./luminosity.component.css']
})
export class LuminosityComponent implements OnInit{
@Input() dataLum = 0;
  
  Highcharts = Highcharts;
  chartLuminosityOptions: any = {
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
      text: 'Luminosity Level',
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
    max: 1000,
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
        to: 200,
        color: '#55BF3B', // green
        thickness: 20
    }, {
        from: 200,
        to: 400,
        color: '#DDDF0D', // yellow
        thickness: 20
    }, {
        from: 400,
        to: 1000,
        color: '#fa0505', // red
        thickness: 20
    }]
},
series: [{
  name: 'Luminosity',
  data: [500],
 
  dataLabels: {
     
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
  TemperatureChart = new Chart(this.chartLuminosityOptions);

  ngOnInit(): void {}
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes['dataLum'].firstChange) {
      console.log('La valeur a changé de', changes['dataLum'].previousValue, 'à', changes['dataLum'].currentValue);

    }
  }

}

