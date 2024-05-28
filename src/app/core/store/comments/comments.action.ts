import { Comment } from '../../comments/comments.model';

export class CommentsAction {
  static readonly type = '[Comments] Comment';
  constructor(public payload: Comment) {}
}
