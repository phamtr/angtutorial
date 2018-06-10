import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  records = [
    {name: 'Truong',
    online: true},
    {
      name: 'ABC',
      online: true
    },
    {
      name: 'XYZ',
      online: true
    },
    {name: 'Truong',
    online: true},
    {
      name: 'ABC',
      online: true
    },
    {
      name: 'XYZ',
      online: true
    }
  ]
 
  
}
