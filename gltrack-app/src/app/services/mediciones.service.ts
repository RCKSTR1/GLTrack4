import { Injectable, OnInit } from '@angular/core';
import { MedicionGlucosa } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class MedicionesService {
  debugMode = true;
  storageKey = 'mediciones';

  constructor() {
    if (localStorage.getItem(this.storageKey) === null) {
      localStorage.setItem(this.storageKey, JSON.stringify([] as MedicionGlucosa[]));
    }

    if (this.debugMode) {
      this.CrearDatosDePrueba();
    }
  }

  GetAll() {
    const medicionesString = localStorage.getItem(this.storageKey);
    return JSON.parse(medicionesString) as MedicionGlucosa[];
  }

  Create(mc: MedicionGlucosa) {
    mc.Id = this.NewGuid();
    mc.Timestamp = new Date();

    const mediciones = this.GetAll();
    mediciones.push(mc);
    localStorage.setItem(this.storageKey, JSON.stringify(mediciones));
  }

  Delete(id: string) {
    const mediciones = this.GetAll();
    const i = mediciones.findIndex(f => f.Id === id);
    if (i > -1) {
      mediciones.splice(i, 1);
      localStorage.setItem(this.storageKey, JSON.stringify(mediciones));
    }
  }

  private NewGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  private CrearDatosDePrueba() {
    if (this.GetAll().length < 6000) {
      localStorage.setItem(this.storageKey, JSON.stringify([] as MedicionGlucosa[]));
      const fechaA = new Date();
      const fechaB = new Date();
      fechaA.setMonth(fechaA.getMonth() - 24);

      while (fechaA < fechaB) {
        let medicion = this.CrearMedicionRandom('Desayuno', fechaA);
        this.Create(medicion);
        medicion = this.CrearMedicionRandom('Comida', fechaA);
        this.Create(medicion);
        medicion = this.CrearMedicionRandom('Cena', fechaA);
        this.Create(medicion);
        fechaA.setDate(fechaA.getDate() + 1);
      }
    }
  }

  private CrearMedicionRandom(comida: string, fecha: Date) {
    let rnd = (Math.random() * 130) + 60;
    const nivelGlucosa = rnd;

    rnd = (Math.floor(Math.random() * 100) % 2);
    const antesODespues = rnd === 0 ? 'Antes' : 'Despues';

    const medicion: MedicionGlucosa = {
      Id: this.NewGuid(),
      Timestamp: new Date(),
      Nivel: nivelGlucosa,
      Comida: comida,
      AntesDespues: antesODespues,
      Fecha: fecha
    };

    return medicion;
  }
}
