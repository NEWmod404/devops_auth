import {UserRepositoryImpl} from '../../Data/repositories/UserRepository';
import {User} from '../entities/User';

const {validarUser, addUser, getIdByname, getUserById} =
  new UserRepositoryImpl();

export const LoginUseCase = (username: string, contra: string): boolean => {
  return validarUser(username, contra);
};

export const RegistrarUseCase = (user: User): void => {
  addUser(user);
};

export const getIdBynameUseCase = (
  username: string,
  contra: string,
): String | null => {
  return getIdByname(username, contra) || null;
};

export const getUserByIdUseCase = (id: string): User | null => {
  return getUserById(id) || null;
};
