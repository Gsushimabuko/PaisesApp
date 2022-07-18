import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
    button{
      margin-right: 5px;
    }
    `
  ]
})
export class PorRegionComponent implements OnInit {

  paises : Pais[] = []

  regiones: string[] = [
    'EU','EFTA','CARICOM','PA','AU','USAN','EEU','AL','ASEAN',
    'CAIS', 'CEFTA', 'NAFTA','SAARC' 
]
  
  regionActiva: string = ""

  constructor(private servicio: PaisService) { }

  activarRegion(region:string) {

    if (region === this.regionActiva) { return }

    this.regionActiva = region
    this.paises= []
    this.servicio.buscarRegion(region).subscribe(resp => {
      this.paises = resp
    }, (err) => {
      console.log(err)
    })
    
  
  }

  ngOnInit(): void {
  }

}
