import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { Post } from '../../posts/posts.model';
import { PostsAction } from './posts.action';
import { PostService } from '../../posts/posts.service';
import { tap } from 'rxjs';

export interface PostsStateModel {
  posts: Post[];
}

@State<PostsStateModel>({
  name: 'posts',
  defaults: {
    posts: [],
  },
})
@Injectable()
export class PostsState {
  constructor(private postService: PostService){}
  @Action(PostsAction)
  getPosts({ patchState }: StateContext<PostsStateModel>) {
    return this.postService.getPosts().pipe(
      tap((result) =>{
        patchState({ posts: result })
      })
    )
  }
}
