import { Component, OnInit, Input, ɵChangeDetectorStatus } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';
import { MedicionGlucosa } from 'src/app/models/models';

@Component({
  selector: 'app-global-niveles-chart',
  templateUrl: './global-niveles-chart.component.html',
  styleUrls: ['./global-niveles-chart.component.css']
})
export class GlobalNivelesChartComponent implements OnInit {

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = ['Hipoglucemia', 'Normal', 'Nivel elevado', 'Altamente elevado'];
  public pieChartData: SingleDataSet = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  @Input()
  set mediciones(datos: MedicionGlucosa[]) {
    let hipoglucemia = 0;
    let normal = 0;
    let elevado = 0;
    let altamenteElevado = 0;

    datos.forEach(m => {
      if (m.Nivel <= 70) {
        hipoglucemia++;
      } else {
        if (m.Nivel <= 115) {
          normal++;
        } else {
          if (m.Nivel <= 180) {
            elevado++;
          } else {
            altamenteElevado++;
          }
        }
      }
    });
    this.pieChartData = [hipoglucemia, normal, elevado, altamenteElevado];
  }

  constructor() { }

  ngOnInit() {
  }

}
