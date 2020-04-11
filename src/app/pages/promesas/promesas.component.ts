import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ],
})
export class PromesasComponent implements OnInit {

  constructor() {

    this.contarTres().then(
      mensaje => console.log("Terminó", mensaje)
    ).catch(error => console.error("error en la promesa", error));
  }

  ngOnInit(): void {
  }

  contarTres(): Promise<boolean> {
    let promesa: Promise<boolean> = new Promise((resolve, reject) => {
      let contador = 0;
      let intervalo = setInterval(() => {
        contador += 1;
        console.log(contador);
        if (contador === 3) {
          resolve(true);
          //reject('Ocurrió un error')
          clearInterval(intervalo);
        }

      }, 1000)
    });
    return promesa;
  }
}
