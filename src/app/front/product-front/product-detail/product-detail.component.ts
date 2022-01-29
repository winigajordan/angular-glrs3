import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private router : ActivatedRoute, private  route : Router) { }

  ngOnInit(): void {
    alert(this.router.snapshot.params["id"])
    this.route.navigateByUrl("/commande/card")
  }

}
