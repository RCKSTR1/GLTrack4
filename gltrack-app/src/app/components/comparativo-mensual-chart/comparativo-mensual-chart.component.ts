import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { MedicionGlucosa } from 'src/app/models/models';

@Component({
  selector: 'app-comparativo-mensual-chart',
  templateUrl: './comparativo-mensual-chart.component.html',
  styleUrls: ['./comparativo-mensual-chart.component.css']
})
export class ComparativoMensualChartComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];

  nombreMeses = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio',
    'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  @Input()
  set mediciones(datos: MedicionGlucosa[]) {
    // Ordenar los datos por fecha
    datos.sort((a, b) => {
      return Date.parse(a.Fecha.toString()) - Date.parse(b.Fecha.toString());
    });

    let anos = datos.map(m => new Date(m.Fecha.toString()).getFullYear());
    anos = anos.filter((val, i) => anos.indexOf(val) === i);

    const anoActual = new Date().getFullYear();
    const anoAnterior = anoActual - 1;
    this.barChartData = [{ label: anoAnterior.toString(), data: [] }, { label: anoActual.toString(), data: [] }];

    this.barChartLabels = [];
    const mesActual = new Date().getMonth();
    let iMes = 0;

    while (iMes <= mesActual) {
      this.barChartLabels.push(this.nombreMeses[iMes]);

      this.barChartData[0].data.push(this.getPromedioMediciones(anoAnterior, iMes, datos));
      this.barChartData[1].data.push(this.getPromedioMediciones(anoActual, iMes, datos));

      iMes++;
    }
  }

  getPromedioMediciones(ano: number, mes: number, datos: MedicionGlucosa[]) {
    let promedio = 0;
    let datosFiltrados: MedicionGlucosa[] = [];
    let cantidadMediciones = 0;
    let suma = 0;

    datosFiltrados = datos.filter(f =>
      new Date(f.Fecha.toString()).getFullYear() === ano
      && new Date(f.Fecha.toString()).getMonth() === mes
    );

    if (datosFiltrados.length > 0) {
      suma = datosFiltrados.map(m => m.Nivel).reduce((a, b) => a + b);
      cantidadMediciones = datosFiltrados.length;
      promedio = suma / cantidadMediciones;
    }

    return promedio;
  }


  constructor() { }

  ngOnInit() {
  }

}
