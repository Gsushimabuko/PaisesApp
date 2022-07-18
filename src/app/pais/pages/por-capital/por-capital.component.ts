import { Component, OnInit, Input } from '@angular/core';
import { Pais } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
 
})
export class PorCapitalComponent implements OnInit {

 

  constructor(private paisService: PaisService) {

  }

  ngOnInit(): void {
  }

  termino: string = ""
  hayError: boolean = false
  paises: Pais[] = []


  buscar( terminoPARAMETRO: string ){
    this.hayError = false
    this.termino = terminoPARAMETRO


  this.paisService.buscarCapital(terminoPARAMETRO).
    subscribe(resp =>{
      this.paises = resp
    }, (err) => { 

      this.hayError = true
      console.log("ERROR!: ",err)
      this.paises = []
    
    } )
  }
  sugerencias(termino:string){
    this.hayError = false;
  }

  
}
