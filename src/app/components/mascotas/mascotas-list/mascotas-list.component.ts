import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/models/mascotas.model';
import { MascotasService } from 'src/app/services/mascotas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mascotas-list',
  templateUrl: './mascotas-list.component.html',
  styleUrls: ['./mascotas-list.component.css']
})
export class MascotasListComponent implements OnInit {

  mascotas: Mascota[]=[{
    iD_MASCOTA: 0,
    nombrE_MASCOTA: '',
    fechA_NACIMIENTO_MASCOTA: new Date(),
    tipO_MASCOTA: '',
    razA_MASCOTA: '',
    tamanO_MASCOTA: '',
    generO_MASCOTA: '',
    iD_CLIENTE: '',
  }];

  constructor(private route: ActivatedRoute, private mascotasService: MascotasService, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      {
        next: (params) =>{
          const id = params.get('id');
          if(id){            
            this.mascotasService.getMascota(id).subscribe({
              next: (response) =>{                
                this.mascotas = response;
              }
            });
          }
        },
        error: (response) => {
          console.log(response);
        }
      }
    )
  }

  redirigir() {
    //console.log(window.location.href);
    let urlCapture = window.location.href
    let cedulaCliente = urlCapture.split("/").pop();
    //console.log(cedulaCliente);
    this.router.navigate(['mascotas/add'], { queryParams: { cedula: cedulaCliente }});
  }

}
