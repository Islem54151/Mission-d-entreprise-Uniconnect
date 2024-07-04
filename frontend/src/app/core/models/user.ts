import { Role } from './role';

export class User {
  id!: number;
  image!: string;
  email!: string;
  password!: string;
  firstname!: string;
  lastname!: string;
  dateBirth!: string;
  cin!: string;
  role!: Role;
  token!: string;
}
