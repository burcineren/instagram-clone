import { inject, Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Subject, takeUntil } from 'rxjs';
import { Comment } from '../../comments/comments.model';
import { CommnetService } from '../../comments/comments.service';
import { CommentsAction } from './comments.action';

// export interface CommentsStateModel {
//   comment: Comment[];
// }

@State<Comment[]>({
  name: 'comments',
  defaults: []
})
@Injectable()
export class CommentState {
  private comments = inject(CommnetService);
  destroyed = new Subject();
  datas: any;

  @Selector()
  static getComments(commnet: Comment[]) {
    return commnet;
  }

  // comment(
  //   { patchState }: StateContext<CommentsStateModel>,
  //   {}: CommentsAction
  // ) {
  //   patchState({
  //     comment: [],
  //   });
  //   // this.comments
  //   //   .getComments()
  //   //   .pipe(takeUntil(this.destroyed))
  //   //   .subscribe((data: any) => {
  //   //     // this.datas = data;
  //   //     console.log(data);
  //   //     const formatData = data.map((res:any)=> {
  //   //       return {
  //   //         description: res.body,
  //   //         name: res.name,
  //   //         postId: res.postId
  //   //       };
  //   //     })
  //   //     patchState({
  //   //       comment: formatData,
  //   //     });
  //     // });
     
  // }
  @Action(CommentsAction)
  comment({  patchState }: StateContext<Comment[]>, { payload }: CommentsAction) {
    patchState([payload]);
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
        patchState([formatData]);
      });
  }
}
