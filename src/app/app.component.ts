import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import {  Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

import { CommentsState } from './core/store/comments/comments.state';
import { Comment } from './core/comments/comments.model';
import { CommentsAction } from './core/store/comments/comments.action';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements  OnInit{
  private store = inject(Store);

  @Select(CommentsState.comments) comments$: Observable<Comment[]>;

  ngOnInit(){
    this.store.dispatch(new CommentsAction());
  }
}
