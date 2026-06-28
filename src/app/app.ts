import { Component, signal } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './services/api.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('ceov');

  response = signal<any>(null);

  constructor(private api: ApiService) {
    this.api.getHello().subscribe({
      next: (data) => {
        console.log("DATA:", data);
        this.response.set(data);
      },
      error: (err) => console.error(err),
    });
  }
}
