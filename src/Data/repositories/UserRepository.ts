import {User} from '../../Domain/entities/User';
import {userRepository} from '../../Domain/repositories/userRepository';
import {getUsuarios, addUsuario} from '../Sources/local/UserDataSource';

export class UserRepositoryImpl implements userRepository {
  getIdByname(username: string, contra: string): string | null {
    const users = getUsuarios();
    const user = users.find(
      user => user.username === username && user.contra === contra,
    );
    return user ? user.id : null; // Retornar el ID del usuario o null
  }

  getUserById(id: string): User | undefined {
    const users = getUsuarios();
    return users.find(user => user.id === id);
  }

  // Obtiene la lista de usuarios
  getUsers = (): User[] => {
    return getUsuarios();
  };

  // Agrega un usuario a la lista
  addUser = (user: User): void => {
    addUsuario(user);
  };

  // Valida un usuario por username y contraseña
  validarUser = (username: string, contra: string): boolean => {
    const users = getUsuarios();
    return users.some(
      user => user.username === username && user.contra === contra,
    );
  };
}
