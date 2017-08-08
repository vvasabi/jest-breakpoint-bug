import { Component } from '@angular/core';

@Component({
  selector: 'app-root2',
  template: ''
})
export class AppComponent {
  title = 'app';

  doWork() {
    this.title = 'foo';
  }
}
