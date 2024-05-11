import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { Post } from '../../posts/posts.model';
import { PostsAction } from './posts.action';

export interface PostsStateModel {
  post: Post[];
}

@State<PostsStateModel>({
  name: 'posts',
  defaults: {
    post: [],
  },
})
@Injectable()
export class PostsState {
  @Action(PostsAction)
  post({ patchState }: StateContext<PostsStateModel>, {}: PostsAction) {
    patchState({
      post: [],
    });
  }
}
