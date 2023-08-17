import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { SocketService } from 'src/app/apiservice/apiservice.component';
import {SensorData} from 'src/app/sensorData';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
   data: SensorData;
   dataTemp: number;
   dataHum: number;
   dataLum: number;
  destroyed$ = new Subject();
  
  

constructor(private socketService : SocketService) {}
ngOnInit(): void {

   
    const chatSub$ = this.socketService.connect().pipe(
            takeUntil(this.destroyed$)
    );

    chatSub$.subscribe(response1 => {
       console.log("ressss",response1);
       this.data = response1 ;
       this.dataTemp = this.data.Temperature;
       this.dataLum = this.data.Luminosity;
       this.dataHum = this.data.Humidity;
    })
}

}
