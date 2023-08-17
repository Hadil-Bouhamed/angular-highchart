import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighchartsChartModule } from 'highcharts-angular';
import { ChartModule } from "angular-highcharts";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocketService } from 'src/app/apiservice/apiservice.component';
import { TemperatureComponent } from './dashboard/temperature/temperature.component';
import { LuminosityComponent } from './dashboard/luminosity/luminosity.component';
import { HumidityComponent } from './dashboard/humidity/humidity.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    SocketService,
    TemperatureComponent,
    LuminosityComponent,
    HumidityComponent,
    DashboardComponent
  ],
  imports: [
    HighchartsChartModule,
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
