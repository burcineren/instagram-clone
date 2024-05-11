import { Post } from '../../posts/posts.model';

export class PostsAction {
  static readonly type = '[Posts] Post';
  constructor(public posts: Post) {}
}
