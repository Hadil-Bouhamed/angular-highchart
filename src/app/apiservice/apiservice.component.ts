import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import {webSocket, WebSocketSubject} from 'rxjs/webSocket';
import { Observable } from 'rxjs';
import { SensorData } from 'src/app/sensorData';

@Component({
  selector: 'app-apiservice',
  templateUrl: './apiservice.component.html',
  styleUrls: ['./apiservice.component.css']
})



@Injectable({
providedIn: 'root'
})
export class SocketService {
    data: any=[];
    connection$: WebSocketSubject<SensorData> ;
    constructor() { }

connect():Observable<any>{
  this.connection$ = webSocket ({
   url: `${webSocket}/localhost:8080/clientside`,
   // serializer: ({SensorData}) => this.data,
   
    });
  this.connection$.subscribe(msg=> console.log("msg reçu : "+msg));
  return this.connection$;
}

send(data: any):void{
  if (this.connection$){
      this.connection$.next(data);
  } else {
      console.log('Did not send a data');
  }
}

closeConnection():void{
  if (this.connection$) {
      this.connection$.complete();
      this.connection$ = null;
  }
}

ngOnDestroy(){
  this.closeConnection();
}
}