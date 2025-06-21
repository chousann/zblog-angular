export class Comment {

  public id!: number;

  /**
   * 父评论ID
   */
  public pid!: number;

  /**
   * 所属内容ID
   */
  public postId!: number;

  /**
   * 评论内容
   */
  public content!: string;

  public created!: Date;

  public authorId!: number;

  public status!: number;
}
