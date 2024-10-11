import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CommentsState } from './core/store/comments/comments.state';
import { Comment } from './core/comments/comments.model';
import { CommentsAction } from './core/store/comments/comments.action';
import { HomeComponent } from './pages/home/components/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule,HomeComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent{
 
}
