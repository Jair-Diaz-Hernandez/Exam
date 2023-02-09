import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-5b';

  products: Product[] =[
    {
      name: 'Instinct Be Natural Salmón',
      price: 22.00,
      
      image: '../assets/IN_BeNatural_Dog_4.5lb_Salmon_769949652892_388x388.png',
      category: ''
    },
    {
      name: 'Instinct Be Natural Res',
      price: 2200.00,
      image: '../assets/IN_BeNatural_Dog_4.5lb_Salmon_769949652892_388x388.png',
      
    },
    {
      name: 'Instinct Be Natural Res',
      price: 2200.00,
      image: '../assets/IN_BeNatural_Dog_4.5lb_Salmon_769949652892_388x388.png',
      
    },
    {
      name: 'Instinct Be Natural Res',
      price: 2233.00,
      image: '../assets/IN_BeNatural_Dog_4.5lb_Salmon_769949652892_388x388.png',
      
    },
    {
      name: 'Instinct Be Natural Res',
      price: 2222.00,
      image: '../assets/IN_BeNatural_Dog_4.5lb_Salmon_769949652892_388x388.png',
      
    },
    {
      name: 'Instinct Res',
      price: 2112.00,
      image: '../assets/IN_BeNatural_Dog_4.5lb_Salmon_769949652892_388x388.png',
      
    },
    {
      name: 'Natural Res',
      price: 2112.00,
      image: '../assets/original_salmon_20lb_perro_1800x1800.png',
      
    },
    {
      name: ' Natural ',
      price: 12422.00,
      image: '../assets/IN_BeNatural_Dog_4.5lb_Salmon_769949652892_388x388.png',
      
    },
    {
      name: 'Natural Res',
      price: 23342.00,
      image: '../assets/original_salmon_20lb_perro_1800x1800.png',
      
    },
    {
      name: 'Instinct Be Natural Res',
      price: 232322.00,
      image: '../assets/original_salmon_20lb_perro_1800x1800.png',
      
    }
  ]
}
