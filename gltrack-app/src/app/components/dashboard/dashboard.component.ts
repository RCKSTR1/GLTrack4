import { Component, OnInit } from '@angular/core';
import { MedicionGlucosa } from 'src/app/models/models';
import { MedicionesService } from 'src/app/services/mediciones.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  registros = [] as MedicionGlucosa[];

  constructor(private mediciones: MedicionesService) {
  }

  ngOnInit() {
    this.registros = this.mediciones.GetAll();
  }

}
