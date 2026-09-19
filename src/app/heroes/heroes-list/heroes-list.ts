import { Component } from '@angular/core';
import { IHeroes } from '../heroes';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './heroes-list.html',
})
export class HeroesList {


imageWidth:number=40;
imageMargin:number=2;
muestraImage:boolean=true;
listFilter:string='';

showImage():void{
  this.muestraImage=!this.muestraImage;
}


  heroes:IHeroes[]=[

  {
    imagen:'https://dragonball-api.com/characters/vegeta_normal.webp',
  nombre:'Vegeta',
  description:'Príncipe de los Saiyans, inicialmente un villano, pero luego se une a los Z Fighters.',
  race:'Saiyan - Male',
  ki: 54000000
  },
  {
    imagen:'https://dragonball-api.com/characters/goku_normal.webp',
  nombre:'Goku',
  description:'El protagonista de la serie, conocido por su gran poder y personalidad amigable.',
  race:'Saiyan - Male',
  ki: 60000000
  }, 
  {
    imagen:'https://dragonball-api.com/characters/picolo_normal.webp',
  nombre:'Piccolo',
  description:'Es un namekiano que surgió tras ser creado en los últimos momentos de vida de su padre, siendo su actual reencarnación.',
  race:'Namekian - Male',
  ki: 2000000
  }, 
  {
    imagen:'https://dragonball-api.com/characters/bulma.webp',
  nombre:'Bulma',
  description:'Bulma es la protagonista femenina de la serie manga Dragon Ball y sus adaptaciones al anime Dragon Ball, Dragon Ball Z, Dragon Ball Super y Dragon Ball GT.',
  race:'Human - Female',
  ki: 0
  }, 
  {
    imagen:'https://dragonball-api.com/characters/Freezer.webp',
  nombre:'Freezer',
  description:'Freezer es el tirano espacial y el principal antagonista de la saga de Freezer.',
  race:'Frieza Race - Male',
  ki: 530000
  }
]

}
