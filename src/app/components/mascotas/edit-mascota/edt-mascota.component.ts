import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mascota } from 'src/app/models/mascotas.model';
import { MascotasService } from 'src/app/services/mascotas.service';

@Component({
  selector: 'app-edt-mascota',
  templateUrl: './edt-mascota.component.html',
  styleUrls: ['./edt-mascota.component.css']
})
export class EdtMascotaComponent implements OnInit {

  mascotaDetails: Mascota = {
    iD_MASCOTA: 0,
    nombrE_MASCOTA: '',
    fechA_NACIMIENTO_MASCOTA: new Date,
    tipO_MASCOTA: '',
    razA_MASCOTA: '',
    tamanO_MASCOTA: '',
    generO_MASCOTA: '',
    iD_CLIENTE: '',
  };

  constructor(private route: ActivatedRoute, private mascotasService: MascotasService, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      {
        next: (params) => {
          const id = params.get('id');
          if(id){            
            this.mascotasService.getMascotaMascoTable(id).subscribe({
              next: (response) =>{
                console.log('Tipo mascota:', response.tipO_MASCOTA);
                this.mascotaDetails = response;
              }
            });
          }
        }

      }
    )
  }

  updateMascota(id: number){
    if (this.mascotaDetails && this.mascotaDetails.iD_MASCOTA !== undefined) {
      var converter = (this.mascotaDetails.iD_MASCOTA).toString();
      this.mascotasService.updateMascota(converter, this.mascotaDetails).subscribe({
        next: (response) => {
          this.router.navigate(['mascotasByClient/mascotas/'+this.mascotaDetails.iD_CLIENTE]);
        }
      })
    }
  }

  deleteMascota(id: number){
    if (id && id !== undefined) {
      var converter = (id).toString();
      this.mascotasService.deleteMascota(converter).subscribe({
        next: (response) => {
          this.router.navigate(['mascotasByClient/mascotas/'+this.mascotaDetails.iD_CLIENTE]);
        }
      });
    }
  }

}
