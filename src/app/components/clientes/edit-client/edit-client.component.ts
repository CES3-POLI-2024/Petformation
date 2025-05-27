import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/clientes.model';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {

  clienteDetails: Cliente = {
    iD_CLIENTE: '',
    nombrE_CLIENTE: '',
    telefonO_CLIENTE: '',
    direccioN_CLIENTE: '',
    correO_CLIENTE: '',
  };
  
  constructor(private route: ActivatedRoute, private clientesService: ClientesService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      {
        next: (params) => {
          const id = params.get('id');
          if(id){            
            this.clientesService.getCliente(id).subscribe({
              next: (response) =>{
                this.clienteDetails = response;
              }
            });
          }
        }

      }
    )
  }
  
  updateCliente(){
    if (this.clienteDetails && this.clienteDetails.iD_CLIENTE !== undefined) {
      var converter = (this.clienteDetails.iD_CLIENTE).toString();
      this.clientesService.updateCliente(converter, this.clienteDetails).subscribe({
        next: (response) => {
          this.router.navigate(['clientes']);
        }
      })
    }
  }

  deleteCliente(id: string){
    if (id && id !== undefined) {
      var converter = (id).toString();
      this.clientesService.deleteCliente(converter).subscribe({
        next: (response) => {
          this.router.navigate(['clientes']);
        }
      });
    }
  }
}
