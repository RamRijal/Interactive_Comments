export type ImageProps = {
  png: string;
  webp: string;
};

export type UserProps = {
  username: string;
  image: ImageProps;
};

export type CommentProps = {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: UserProps;
  replies: CommentProps[];
};
