import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SidebarComponent } from '../../../../layout/sidebar/sidebar.component';
import { Select, Store } from '@ngxs/store';
import { CommentsState } from '../../../../core/store/comments/comments.state';
import { Observable } from 'rxjs';
import { CommentsAction } from '../../../../core/store/comments/comments.action';
import { CommonModule } from '@angular/common';
import { Comment } from '../../../../core/comments/comments.model';

@Component({
  selector: 'home',
  standalone: true,
  imports: [SidebarComponent, CommonModule],
  templateUrl: 'home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  private store = inject(Store);

  @Select(CommentsState.comments) comments$: Observable<Comment[]>;

  ngOnInit() {
    this.store.dispatch(new CommentsAction());
  }
}