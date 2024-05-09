import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngxs/store';
import { GetPosts } from './core/store/posts/posts.action';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  image: string = 'https://via.placeholder.com/600/771796';
  capition: string = 'reprehenderit est deserunt velit ipsam';
  constructor(private store: Store) {}
  getPosts() {
    this.store.dispatch(
      new GetPosts({
        image: this.image,
        capition: this.capition,
        userId: 1,
      })
    );
  }
}
