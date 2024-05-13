import { Comment } from '../../comments/comments.model';

export class CommentsAction {
  static readonly type = '[Posts] Post';
  constructor(public posts: Comment) {}
}
