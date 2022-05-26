import { Component } from '@angular/core';
import { MenuItem } from './MenuItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chirpusPizza';
  menu : MenuItem [] = [
    new MenuItem ("Pizza", "Dinner", 12.99),
    new MenuItem ("Wings", "Appetizer", 14.99),
    new MenuItem ("French Fries", "Appetizer", 6.99),
    new MenuItem ("Cheese Sticks", "Appetizer", 5.99),
    new MenuItem ("Calzone", "Dinner", 9.99),
    new MenuItem ("Chicken Salad", "Dinner", 7.99)
  ];
}
