import { Post } from '../../posts/posts.model';

export class GetPosts {
  static readonly type = '[Posts] Post';
  constructor(public posts: Post) {}
}
