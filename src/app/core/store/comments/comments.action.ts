
export class CommentsAction {
  static readonly type = '[Comments] Load Comments';
  constructor(public payload: { postId: number }) {}
}
