import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngxs/store';
import { Subject, takeUntil } from 'rxjs';
import { CommnetService } from './core/comments/comments.service';
import { PostsAction } from './core/store/posts/posts.action';
import { CommonModule } from '@angular/common';
import { CommentsAction } from './core/store/comments/comments.action';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  // comments: Comment[] = [];
  image: string = 'https://via.placeholder.com/600/771796';
  capition: string = 'reprehenderit est deserunt velit ipsam';
  description: string = "";
  name: string ="";
  private store = inject(Store);
  datas:any;
  private comments = inject(CommnetService);
  destroyed= new Subject();
  getPosts() {
    this.store.dispatch(
      new PostsAction({
        image: this.image,
        capition: this.capition,
        postId: 1,
      })
    );
  }
  getComments() {
    this.store.dispatch(
      new CommentsAction({
        description: this.description,
        name: this.name,
        postId: 1,
      })
    );
  }

}
