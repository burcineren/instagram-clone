import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { Comment } from '../../comments/comments.model';
import { CommentsAction } from './comments.action';

export interface CommentsStateModel {
  comment: Comment[];
}

@State<CommentsStateModel>({
  name: 'comments',
  defaults: {
    comment: [],
  },
})
@Injectable()
export class CommentState {
  @Action(CommentsAction)
  comment(
    { patchState }: StateContext<CommentsStateModel>,
    {}: CommentsAction
  ) {
    patchState({
      comment: [],
    });
  }
}
