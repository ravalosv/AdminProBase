import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css'],
})
export class IncrementadorComponent implements OnInit {
  @Input('valor') progreso: number = 30;
  @Input() btnClass: string = 'btn-primary';

  @Output('valor') valorSalida: EventEmitter<number> = new EventEmitter();

  cambiarValor(valor: number) {
    this.progreso = this.progreso + valor;

    if (this.progreso <= 0) this.progreso = 0;

    if (this.progreso >= 100) this.progreso = 100;

    this.valorSalida.emit(this.progreso);
  }

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }

  onChange(nuevoValor: number) {
    this.progreso = nuevoValor;

    if (nuevoValor >= 100) this.progreso = 100;
    if (nuevoValor <= 0) this.progreso = 0;

    this.valorSalida.emit(this.progreso);
  }
}
