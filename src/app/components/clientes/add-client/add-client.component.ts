import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/clientes.model';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  addCliente: Cliente = {
    cedulA_CLIENTE: '',
    nombrE_CLIENTE: '',
    telefonO_CLIENTE: '',
    direccioN_CLIENTE: '',
    correO_CLIENTE: '',
  }
  constructor(private clientesService: ClientesService) { }

  ngOnInit(): void {
  }

  addClienteMethod(){
    this.clientesService.addClienteMethod(this.addCliente)
    .subscribe({
      next: (cliente) => {
        console.log(cliente);
      }
    });
  }

}
