import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { Post } from '../../posts/posts.model';
import { GetPosts } from './posts.action';

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
  @Action(GetPosts)
  post(ctx: StateContext<PostsStateModel>, action: Post) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      post: [...state.post, action],
    });
    console.log(state);
  }
}
