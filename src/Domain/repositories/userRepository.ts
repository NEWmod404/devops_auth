import {User} from '../entities/User';

export interface userRepository {
  getUsers(): User[]; // Devuelve una lista de usuarios
  addUser(user: Omit<User, 'id'>): void; // Agrega un usuario
  validarUser(username: string, contra: string): boolean; // Valida un usuario por nombre y contraseña
  getIdByname(username: string, contra: string): string | null; // Obtiene un usuario por username y contraseña
  getUserById(id: string): User | undefined; // Obtiene un usuario por id
}
