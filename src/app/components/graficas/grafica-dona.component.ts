import { Component, OnInit, Input } from '@angular/core';
import { MultiDataSet, Label } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-grafica-dona',
  templateUrl: './grafica-dona.component.html',
  styles: [
  ],
})
export class GraficaDonaComponent implements OnInit {

  @Input() data: MultiDataSet;
  @Input() labels: Label[];
  @Input() titulo: string;
  @Input() chartType: ChartType;

  constructor() { }

  ngOnInit(): void {
  }

}
