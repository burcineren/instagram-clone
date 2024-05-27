import { inject, Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Subject, takeUntil } from 'rxjs';
import { Comment } from '../../comments/comments.model';
import { CommnetService } from '../../comments/comments.service';
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
  private comments = inject(CommnetService);
  destroyed = new Subject();
  datas: any;

  @Selector()
  static getCommentData({ comment }: CommentsStateModel) {
    return comment;
  }
  @Action(CommentsAction)
  comment(
    { patchState }: StateContext<CommentsStateModel>,
    {}: CommentsAction
  ) {
    patchState({
      comment: [],
    });
    this.comments
      .getComments()
      .pipe(takeUntil(this.destroyed))
      .subscribe((data: any) => {
        // this.datas = data;
        console.log(data);
        const formatData = data.map((res:any)=> {
          return {
            description: res.body,
            name: res.name,
            postId: res.postId
          };
        })
        patchState({
          comment: formatData,
        });
      });
     
  }
}
