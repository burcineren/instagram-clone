import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { CommnetService } from '../../comments/comments.service';
import { CommentsAction } from './comments.action';
import { Comment } from '../../comments/comments.model';

export interface CommentsStateModel {
  comments: Comment[];
}

@State<CommentsStateModel>({
  name: 'comments',
  defaults: {
    comments: [],
  },
})
@Injectable()
export class CommentsState {
  constructor(private commnetService: CommnetService) {}

  @Selector()
  static comments(state: CommentsStateModel): Comment[] {
    return state.comments;
  }

  @Action(CommentsAction)
  getComments({ patchState }: StateContext<CommentsStateModel>) {
    return this.commnetService.getComments().pipe(
      tap((result) => {
        patchState({ comments: result });
      })
    );
  }
}
