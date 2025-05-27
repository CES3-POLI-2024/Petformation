import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Mascota } from 'src/app/models/mascotas.model';
import { MascotasService } from 'src/app/services/mascotas.service';

@Component({
  selector: 'app-add-mascota',
  templateUrl: './add-mascota.component.html',
  styleUrls: ['./add-mascota.component.css']
})
export class AddMascotaComponent implements OnInit {

  addMascota: Mascota = {
    iD_MASCOTA: 0,
    nombrE_MASCOTA: '',
    fechA_NACIMIENTO_MASCOTA: new Date,
    tipO_MASCOTA: '',
    razA_MASCOTA: '',
    tamanO_MASCOTA: '',
    generO_MASCOTA: '',
    iD_CLIENTE: '',
  }
  constructor(private route: ActivatedRoute, private mascotasService: MascotasService, private router: Router) { };

  cedulaCliente: string = '';

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
    this.cedulaCliente = params.get('cedula') || ''});
  }

  addMascotaMethod(){
    this.addMascota.iD_CLIENTE = this.cedulaCliente;
    this.mascotasService.addMascotaMethod(this.addMascota)
    .subscribe({
      next: (mascota) => {
        //console.log(cliente);
        this.router.navigate(['mascotasByClient/mascotas/'+this.cedulaCliente]);
      }
    });
  }

  redirigir() {
    this.router.navigate(['mascotas/add']);
  }

}
