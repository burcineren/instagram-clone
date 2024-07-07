import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { PostsAction } from './core/store/posts/posts.action';
import { CommonModule } from '@angular/common';
import { CommentsAction } from './core/store/comments/comments.action';
import { CommentState } from './core/store/comments/comments.state';
import { CommentData } from './core/comments/comments.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  // comments: Comment[] = [];
  image: string = 'https://via.placeholder.com/600/771796';
  capition: string = 'reprehenderit est deserunt velit ipsam';
  description: string;
  comments: string[] = [];
  name: string;
  email: string;
  private store = inject(Store);
  datas: any;
  destroyed = new Subject();
  commentDescriptions: any;
  getcommentsApi: any;
  private destroyed$ = new Subject();
  @Select(CommentState.getComments) comments$: Observable<CommentData[]>;

  ngOnInit() {

  }
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
    const postId = 1; 
    this.store.dispatch(new CommentsAction({ postId }));

    this.comments$.pipe(takeUntil(this.destroyed$)).subscribe(comments => {
      console.log('text::: ', comments);
    });
  }
  ngOnDestroy() {
    // this.destroyed.next();
    this.destroyed.complete();
  }
}
