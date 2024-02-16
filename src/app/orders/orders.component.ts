import { Component } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  orders = [
    { id: 1, date: new Date('2024-02-15'), totalAmount: 150.75 },
    { id: 2, date: new Date('2024-02-10'), totalAmount: 89.99 }]
  
  checksucess : boolean = true;

}
