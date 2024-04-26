import { Component } from '@angular/core';

@Component({
  selector: 'app-card-button',
  //templateUrl: './card-button.component.html',
  template: `
    <div class="card-button">Adquirir</div> 
  `,
  styleUrl: './card-button.component.scss'
})
export class CardButtonComponent {
  //Para gerar o template inline pode ser usada a flag: ng g c componente --inline-template
}
