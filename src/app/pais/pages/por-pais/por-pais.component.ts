import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pais } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {



  termino: string = ""
  hayError: boolean = false
  paises: Pais[] = []
  paisesSugeridos : Pais[] = []
  mostrarSugerencias: boolean = false

  constructor(private paisService: PaisService) {

  }
 
  buscar( terminoPARAMETRO: string ){
    this.mostrarSugerencias = false
    this.hayError = false
    this.termino = terminoPARAMETRO

    this.paisService.buscarPais(terminoPARAMETRO)
    .subscribe(resp/*next */ => {
      this.paises = resp
    }, (err) => { 

      this.hayError = true
      console.log("ERROR!: ",err)
      this.paises = []
    
    })

  }

  sugerencias(termino:string){
    this.termino = termino
    this.hayError = false;
    this.mostrarSugerencias = true

    this.paisService.buscarPais(termino).subscribe(
      paises => this.paisesSugeridos = paises.splice(0,5),
    
    (err) => {this.paisesSugeridos = []} )
}

buscarSugerido(termino:string) {
  this.buscar(termino)
  
}
}
