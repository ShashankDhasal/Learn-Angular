import { Component } from '@angular/core';
import { ProductService } from './products/products.service';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  providers: [ProductService]
})
export class AppComponent{
  pageTitle: string = 'Acme Product Management';
}