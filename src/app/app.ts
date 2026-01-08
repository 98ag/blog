import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  styleUrl: './app.css',
  template:`
    <img src="images/wip.jpg" alt="">
  `
})
export class App {
  protected readonly title = signal('blog');
}
