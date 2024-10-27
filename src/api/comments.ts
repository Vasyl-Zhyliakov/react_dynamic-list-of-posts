import { Comment } from '../types/Comment';
import { client } from '../utils/fetchClient';

export const USER_ID = 1549;

export const getCommentsFromServer = (postId: number) => {
  return client.get<Comment[]>(`/comments?postId=${postId}`);
};

export const deleteComment = (commentId: number) => {
  return client.delete(`/comments/${commentId}`);
};

export const createComment = ({
  postId,
  name,
  email,
  body,
}: Omit<Comment, 'id'>) => {
  return client.post<Comment>('/comments', { postId, name, email, body });
};

// export interface Comment {
//   id: number;
//   postId: number;
//   name: string;
//   email: string;
//   body: string;
// }

// export const updateTodo = ({ id, title, completed }: Omit<Todo, 'userId'>) => {
//   return client.patch<Todo>(`/todos/${id}`, { title, completed });
// };
