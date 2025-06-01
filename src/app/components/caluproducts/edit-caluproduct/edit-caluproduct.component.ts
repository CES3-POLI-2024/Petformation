import { Component, OnInit } from '@angular/core';
import { Caluproduct } from 'src/app/models/caluproduct';
import { ActivatedRoute, Router } from '@angular/router';
import { CaluproductsService } from 'src/app/services/caluproducts.service';

@Component({
  selector: 'app-edit-caluproduct',
  templateUrl: './edit-caluproduct.component.html',
  styleUrls: ['./edit-caluproduct.component.css']
})
export class EditCaluproductComponent implements OnInit {

  caluproductDetails: Caluproduct = {
    iD_CALUPRODUCT: 0,
    nombrE_CALUPRODUCT: '',
    tamanO_CALUPRODUCT: '',
    caracteristicA_CALUPRODUCT: '',
    timestamp: new Date,
    preciO_CALUPRODUCT: 0
  }

  constructor(private route: ActivatedRoute, private caluproductsService :CaluproductsService, private router :Router) { }

  ngOnInit() {
        this.route.paramMap.subscribe(
      {
        next: (params) => {
          const id = params.get('id');
          if(id){            
            this.caluproductsService.getCaluproduct(id).subscribe({
              next: (response) =>{
                this.caluproductDetails = response;
              }
            });
          }
        }
      }
    )
  }

  updateCaluproduct(){
    if (this.caluproductDetails && this.caluproductDetails.iD_CALUPRODUCT !== undefined) {
      var converter = (this.caluproductDetails.iD_CALUPRODUCT).toString();
      this.caluproductsService.updateCaluproduct(converter, this.caluproductDetails).subscribe({
        next: (response) => {
          this.router.navigate(['caluproducts']);
        }
      })
    }
  }

  deleteCaluproduct(id: number){
    if (id && id !== undefined) {
      var converter = (id).toString();
      this.caluproductsService.deleteCaluproduct(converter).subscribe({
        next: (response) => {
          this.router.navigate(['caluproducts']);
        }
      });
    }
  }

}
