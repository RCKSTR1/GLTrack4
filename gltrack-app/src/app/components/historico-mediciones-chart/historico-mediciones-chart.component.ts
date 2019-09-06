import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { MedicionGlucosa } from 'src/app/models/models';

@Component({
  selector: 'app-historico-mediciones-chart',
  templateUrl: './historico-mediciones-chart.component.html',
  styleUrls: ['./historico-mediciones-chart.component.css']
})
export class HistoricoMedicionesChartComponent implements OnInit {

  public lineChartData: ChartDataSets[] = [
    { data: [], label: 'Nivel de glucosa' },
  ];
  public lineChartLabels: Label[] = [];
  public lineChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{
        display: false
      }]
    }
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  constructor() { }

  ngOnInit() {
  }

  @Input()
  set mediciones(datos: MedicionGlucosa[]) {
    const fechaInicial = new Date();
    fechaInicial.setMonth(fechaInicial.getMonth() - 1);

    const ultimoMes = datos.filter(f => new Date(Date.parse(f.Fecha.toString())) >= fechaInicial);

    this.lineChartData[0].data = ultimoMes.map(m => m.Nivel);
    this.lineChartLabels = ultimoMes.map(m => `${m.Comida} ${m.AntesDespues} ${new Date(Date.parse(m.Fecha.toString())).toDateString()}`);
  }
}
