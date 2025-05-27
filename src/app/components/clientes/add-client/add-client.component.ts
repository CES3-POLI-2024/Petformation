import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/clientes.model';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})

export class AddClientComponent implements OnInit {

  addCliente: Cliente = {
    iD_CLIENTE: '',
    nombrE_CLIENTE: '',
    telefonO_CLIENTE: '',
    direccioN_CLIENTE: '',
    correO_CLIENTE: '',
  }
  constructor(private clientesService: ClientesService, private router: Router) { }

  ngOnInit(): void {
  }
  clienteExistente: boolean = false;

  clientExistMethod(id: string): Promise<boolean>{
    return new Promise((resolve) => {
      this.clientesService.getCliente(id).subscribe({
        next: (cliente) => {
          resolve(cliente != null);
        },
        error: () => resolve(false)
      });
    });
  }

  async addClienteMethod(){
    var exist = await this.clientExistMethod(this.addCliente.iD_CLIENTE);
    
    if(!exist){
      if(this.addCliente.nombrE_CLIENTE !== '' && this.addCliente.telefonO_CLIENTE !== '' && this.addCliente.iD_CLIENTE !== ''){
        this.clientesService.addClienteMethod(this.addCliente)
        .subscribe({
          next: (cliente) => {
            //console.log(cliente);
            this.router.navigate(['clientes']);
          }
        });
      }else{
        alert('Los campos: Cédula, Nombre, Teléfono  no pueden estar vacíos');
      }
    }else{
      this.addCliente.iD_CLIENTE = '';
      alert('Ya hay un cliente con esta cédula');
      (document.getElementById('inputCedula') as HTMLInputElement).value = '';
      (document.getElementById('inputCedula') as HTMLInputElement).textContent = '';
    }
  }

}
