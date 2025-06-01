import { Component, OnInit } from '@angular/core';
import {Caluproduct} from 'src/app/models/caluproduct';
import { CaluproductsService } from 'src/app/services/caluproducts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-caluproducts-list',
  templateUrl: './caluproducts-list.component.html',
  styleUrls: ['./caluproducts-list.component.css']
})
export class CaluproductsListComponent implements OnInit {

  caluproducts: Caluproduct[] = [];

  constructor(private caluproduct: CaluproductsService, private router: Router) { }

  ngOnInit() {
    this.caluproduct.getAllCaluproducts()
    .subscribe({
      next: (caluproduct) => {
        this.caluproducts = caluproduct;
      }
    })
  }

  redirigir() {
    this.router.navigate(['caluproducts/add']);
  }
}
