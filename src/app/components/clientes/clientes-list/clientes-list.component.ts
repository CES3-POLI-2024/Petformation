import cli from '@angular/cli';
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/clientes.model';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.css']
})
export class ClientesListComponent implements OnInit {

clientes: Cliente[]=[];

  constructor(private clientesService: ClientesService) { }

  ngOnInit(): void {
    this.clientesService.getAllClientes()
    .subscribe({
      next: (clientes) => {
        console.log(clientes);
        this.clientes = clientes;
      },
      error: (response) => {
        console.log(response);
      }
    })
  }

}
