import {User} from '../../../Domain/entities/User';

let users: User[] = [
  {
    id: '1',
    username: 'johndoe',
    contra: '1234',
    nombre: 'John',
    apellido: 'Doe',
  },
  {
    id: '2',
    username: 'janedoe',
    contra: '1234',
    nombre: 'Jane',
    apellido: 'Doe',
  },
  {
    id: '3',
    username: 'bobsmith',
    contra: '1234',
    nombre: 'Bob',
    apellido: 'Smith',
  },
  {
    id: '4',
    username: 'alicejohnson',
    contra: '1234',
    nombre: 'Alice',
    apellido: 'Johnson',
  },
  {
    id: '5',
    username: 'charliebrown',
    contra: '1234',
    nombre: 'Charlie',
    apellido: 'Brown',
  },
];

export const getUsuarios = () => users;

export const addUsuario = (user: Omit<User, 'id'>) => {
  const newId = (users.length + 1).toString(); // Generar un nuevo id basado en la longitud de la lista
  const newUser = {...user, id: newId};
  users.push(newUser);
};
