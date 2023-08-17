import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Chart } from "angular-highcharts";

@Component({
  selector: 'app-humidity',
  templateUrl: './humidity.component.html',
  styleUrls: ['./humidity.component.css']
})

export class HumidityComponent implements OnInit{
  @Input() dataHum = 0;
  
  Highcharts = Highcharts;
  chartHumidityOptions: any = {
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
      text: 'Humidity Level',
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
    max: 100,
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
        to: 20,
        color: '#55BF3B', // green
        thickness: 20
    }, {
        from: 20,
        to: 40,
        color: '#DDDF0D', // yellow
        thickness: 20
    }, 
    {
      from: 40,
      to: 60,
      color: '#fa5705', // red
      thickness: 20
  },{
        from: 60,
        to: 100,
        color: '#fa0505', // red
        thickness: 20
    }]
},
series: [{
  name: 'Humidity',
  data: [27],
  tooltip: {
      valueSuffix: '%'
  },
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
  
  HumidityChart = new Chart(this.chartHumidityOptions);

  ngOnInit(): void {
    
  }
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    
    if (!changes['dataHum'].firstChange) {
      console.log('La valeur a changé de', changes['dataHum'].previousValue, 'à', changes['dataHum'].currentValue);
   
  }
}
}

