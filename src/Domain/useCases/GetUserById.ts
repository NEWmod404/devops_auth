import {UserRepositoryImpl} from '../../Data/repositories/UserRepository';

const {validarUser, getUsers} = new UserRepositoryImpl();

export const getUserByIdUseCase = (username: string, contra: string) => {
  if (validarUser(username, contra)) {
    const users = getUsers();
    const user = users.find(
      u => u.username === username && u.contra === contra,
    );
    return user?.id;
  }
  return null;
};
