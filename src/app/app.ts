import { Component, signal } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ceov');

  
 response: any;

  constructor(private api: ApiService) {
    this.api.getHello().subscribe({
      next: (data) => {
        console.log(data);
        this.response = data;
      },
      error: (err) => console.error(err)
    });
  }
}
