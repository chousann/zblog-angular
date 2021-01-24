import { Comment } from './Comment';
import { PostVO } from './PostVO';
import { UserVO } from './UserVO';

export class CommentVO extends Comment{

	public created: Date;

	// extend parameter
	public author: UserVO;
	public parent: CommentVO;
	public post: PostVO;
}
