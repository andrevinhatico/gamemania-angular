import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-consoles',
  templateUrl: './consoles.component.html',
  styleUrls: ['./consoles.component.css']
})
export class ConsolesComponent implements OnInit {

  constructor(private produtoService: ProdutoService) { }

  listaProdutos = [] as Produto[]



  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos() {
    this.produtoService.getProdutos().subscribe( (produtosRecebidos: Produto[] ) =>{
      this.listaProdutos = produtosRecebidos;
      console.log(this.listaProdutos)
    } )
  }

}
