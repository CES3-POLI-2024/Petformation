import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Caluproduct } from 'src/app/models/caluproduct';
import { CaluproductsService } from 'src/app/services/caluproducts.service';

@Component({
  selector: 'app-add-caluproduct',
  templateUrl: './add-caluproduct.component.html',
  styleUrls: ['./add-caluproduct.component.css']
})
export class AddCaluproductComponent implements OnInit {

  addCaluproduct: Caluproduct = {
      iD_CALUPRODUCT: 0,
      nombrE_CALUPRODUCT: '',
      tamanO_CALUPRODUCT: '',
      caracteristicA_CALUPRODUCT: '',
      timestamp: new Date,
      preciO_CALUPRODUCT: 0
    };

  constructor(private router :Router, private caluproductsService: CaluproductsService) { }

  ngOnInit(): void {
  }

  addCaluproductMethod(){
    this.caluproductsService.addCaluproductMethod(this.addCaluproduct)
    .subscribe({
      next: (caluproduct) => {
        this.router.navigate(['caluproducts'])
      }
    })
  }

}
