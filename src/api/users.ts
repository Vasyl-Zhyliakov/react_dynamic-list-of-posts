import { User } from '../types/User';
import { client } from '../utils/fetchClient';

export const USER_ID = 1549;

export const getUsersFromServer = () => {
  return client.get<User[]>(`/users`);
};

// export const deleteTodo = (todoId: number) => {
//   return client.delete(`/todos/${todoId}`);
// };

// export const createTodo = ({ userId, title, completed }: Omit<Todo, 'id'>) => {
//   return client.post<Todo>('/todos', { userId, title, completed });
// };

// export const updateTodo = ({ id, title, completed }: Omit<Todo, 'userId'>) => {
//   return client.patch<Todo>(`/todos/${id}`, { title, completed });
// };
