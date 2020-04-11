import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ],
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {
    
    this.subscription = this.regresaObservable().pipe(
      
    )
      .subscribe(
        numero => console.log('Subs', numero),
        error => console.error('Error en el obs', error),
        () => console.info("El observador terminó")
      );
  }

  ngOnInit(): void {

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  regresaObservable(): Observable<any> {
    const obs : Observable<any> = new Observable(
      observer => {

        let contador = 0;
        let intervalo = setInterval(() => {

          contador += 1;

          const objeto = {
            valor: contador
          }

          observer.next(objeto);

          if (contador === 3) {
            clearInterval(intervalo);
            observer.complete();
          }

          // if (contador === 2) {
          //   clearInterval(intervalo);
          //   observer.error("Falló");
          // }

        }, 1000);
      }).pipe(
        map( (resp: any) => {
          return resp.valor;
        }),
        filter( (valor, index) => valor % 2 === 1)
      );

    return obs;
  }

}
