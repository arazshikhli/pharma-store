import {Component, Output} from '@angular/core';
export interface Drug{
  name:string
  price:number
  img:string
  count:number
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  drug:Drug[]=[{
    name:"Vitanin",price:20,img:'https://cdn.shopify.com/s/files/1/0066/7569/3639/products/NM2803L601VITCGUMMIESfront_2e1ab215-1d23-4e1c-a0c6-310d10a60945_1500x.png?v=1659456973',
    count:0
  },
    {
      name:"Aspirin",price:25,img:'https://www.pharmaciedesteinfort.com/media/catalog/product/cache/cd30c5c2a49353086bf9c7be9820feea/a/s/aspirine-100-mg-30-comprimes-0002.jpg',
      count:0
    },
    {name:"Angilor",price:33,img:'./assets/drugs/angilor.png',count:0},
    {name:"BromGexin",price:33,img:'assets/drugs/bromgeksin.jpg',count:0},
    {name:"Nurofen",price:33,img:'assets/drugs/nurofen.jpg',count:0},
    {name:"Mezim",price:33,img:'assets/drugs/mezim.png',count:0},
    {name:"Tempalgin",price:33,img:'assets/drugs/tempalgin.jpg',count:0}
  ]
}
