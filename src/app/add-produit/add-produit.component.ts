
import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html'
})
export class AddProduitComponent implements OnInit {

  newProduit = new Produit();
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private router :Router,
    private produitService: ProduitService) { }

  ngOnInit(): void {
  }

  addProduit() {
    //console.log(this.newProduit);
    this.produitService.ajouterProduit(this.newProduit);
    this.router.navigate(['produits']);
  }

}