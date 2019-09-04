import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from './modules/material/material.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegistroComponent } from './components/registro/registro.component';
import { TablaRegistrosComponent } from './components/tabla-registros/tabla-registros.component';
import { HistoricoMedicionesChartComponent } from './components/historico-mediciones-chart/historico-mediciones-chart.component';
import { ComparativoSemanalChartComponent } from './components/comparativo-semanal-chart/comparativo-semanal-chart.component';
import { GlobalNivelesChartComponent } from './components/global-niveles-chart/global-niveles-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashboardComponent,
    RegistroComponent,
    TablaRegistrosComponent,
    HistoricoMedicionesChartComponent,
    ComparativoSemanalChartComponent,
    GlobalNivelesChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
