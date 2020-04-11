import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: [
  ],
})
export class Graficas1Component implements OnInit {

  graficas: string[] = ["grafico1", "grafico2", "grafico3", "grafico4"];
  data1: MultiDataSet;
  data2: MultiDataSet;
  data3: MultiDataSet;
  data4: MultiDataSet;

  labels1: Label[];
  labels2: Label[];
  labels3: Label[];
  labels4: Label[];

  titulo1: string;
  titulo2: string;
  titulo3: string;
  titulo4: string;

  chartType1: ChartType;
  chartType2: ChartType;
  chartType3: ChartType;
  chartType4: ChartType;

  graficos: any = {
    'grafico1': {
      'labels': ['Con Frijoles', 'Con Natilla', 'Con tocino'],
      'data':  [24, 30, 46],
      'type': 'doughnut',
      'leyenda': 'El pan se come con'
    },
    'grafico2': {
      'labels': ['Hombres', 'Mujeres'],
      'data':  [4500, 6000],
      'type': 'doughnut',
      'leyenda': 'Entrevistados'
    },
    'grafico3': {
      'labels': ['Si', 'No'],
      'data':  [95, 5],
      'type': 'doughnut',
      'leyenda': '¿Le dan gases los frijoles?'
    },
    'grafico4': {
      'labels': ['No', 'Si'],
      'data':  [85, 15],
      'type': 'doughnut',
      'leyenda': '¿Le importa que le den gases?'
    },
  };

  constructor() { 

    this.titulo1 = this.graficos.grafico1.leyenda;
    this.titulo2 = this.graficos.grafico2.leyenda;
    this.titulo3 = this.graficos.grafico3.leyenda;
    this.titulo4 = this.graficos.grafico4.leyenda;

    this.data1 = this.graficos.grafico1.data;
    this.data2 = this.graficos.grafico2.data;
    this.data3 = this.graficos.grafico3.data;
    this.data4 = this.graficos.grafico4.data;

    this.labels1 = this.graficos.grafico1.labels;
    this.labels2 = this.graficos.grafico2.labels;
    this.labels3 = this.graficos.grafico3.labels;
    this.labels4 = this.graficos.grafico4.labels;

    this.chartType1 = this.graficos.grafico1.type;
    this.chartType2 = this.graficos.grafico2.type;
    this.chartType3 = this.graficos.grafico3.type;
    this.chartType4 = this.graficos.grafico4.type;
  }

  ngOnInit(): void {
  }

}
