import { AppModule } from './app.module';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'saa-app',
    templateUrl: 'app.component.html'
})

export class AppComponent {

  pills = [
    { 
      label: 'HTML'
    },
    { 
      label: 'CSS'
    },
    { 
      label: 'SASS'
    }
  ];

}