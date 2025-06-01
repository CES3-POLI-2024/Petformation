import cli from '@angular/cli';
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/clientes.model';
import { ClientesService } from 'src/app/services/clientes.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.css']
})
export class ClientesListComponent implements OnInit {

clientes: Cliente[]=[];
logged: boolean = false;

  constructor(private clientesService: ClientesService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.GetLoggedStatus()
    .subscribe({
      next:(log: boolean) =>{
        this.logged = log

        if(this.logged){
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
    })

  }

  redirigir() {
    this.router.navigate(['clientes/add']);
  }

}
