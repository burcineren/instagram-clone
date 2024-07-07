import { inject, Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Subject, takeUntil, tap } from 'rxjs';
import { CommnetService } from '../../comments/comments.service';
import { CommentsAction } from './comments.action';
import { CommentData } from '../../comments/comments.model';

export interface Comment {
  comments: CommentData[];
}
@State<Comment>({
  name: 'comment',
  defaults: {
    comments: [],
  }
})
@Injectable()
export class CommentState {
  private commnetService = inject(CommnetService);


  destroyed = new Subject();

  @Selector()
  static getComments({comments}: Comment) {
    return comments;
  }
  @Action(CommentsAction)
  fetchCommentData(ctx: StateContext<Comment>, action: CommentsAction) {
  
   
    // this.commnetService.getComments(payload).subscribe(response => {

    //   const data = response.map((res:any) => {
    //     return {
    //       name: res.name,
    //       email: res.email,
    //       body: res.body
    //     }
    //   })
    //   patchState({ 
    //     comments: data
    //   });
    // console.log("payload::::",data);

    // });
    return this.commnetService.getComments().pipe(
      tap((comments: CommentData[]) => {
        ctx.patchState({
          comments
        });
      })
    );
  }
}
