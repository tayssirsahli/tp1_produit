
import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { ActivatedRoute,Router } from '@angular/router';
import {Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html'
})
export class AddProduitComponent implements OnInit {

  newProduit = new Produit();
  categories! : Categorie[];
  newIdCat! : number;
  newCategorie! : Categorie;


  
  constructor(
    private activatedRoute: ActivatedRoute,
    private router :Router,
    private produitService: ProduitService) { }

  ngOnInit(): void {
    this.categories = this.produitService.listeCategories();

  }

  addProduit() {
    this.newCategorie = this.produitService.consulterCategorie(this.newIdCat);
    this.newProduit.categorie = this.newCategorie;

    this.produitService.ajouterProduit(this.newProduit);
    this.router.navigate(['produits']);
  
  }

}