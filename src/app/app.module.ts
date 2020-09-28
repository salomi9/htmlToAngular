import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { IconsComponent } from './icons/icons.component';
import { FormsComponent } from './forms/forms.component';
import { ChartsComponent } from './charts/charts.component';
import { TablesComponent } from './tables/tables.component';
import { ChartsModule } from 'ng2-charts';
import { LinechartComponent } from './chartsjs/linechart/linechart.component';
import { BarchartComponent } from './chartsjs/barchart/barchart.component';
import { DoughnutchartComponent } from './chartsjs/doughnutchart/doughnutchart.component';
import { PiechartComponent } from './chartsjs/piechart/piechart.component';
import { BubblechartComponent } from './chartsjs/bubblechart/bubblechart.component';
import { ScatterchartComponent } from './chartsjs/scatterchart/scatterchart.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    FooterComponent,
    IconsComponent,
    FormsComponent,
    ChartsComponent,
    TablesComponent,
    LinechartComponent,
    BarchartComponent,
    DoughnutchartComponent,
    PiechartComponent,
    BubblechartComponent,
    ScatterchartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
