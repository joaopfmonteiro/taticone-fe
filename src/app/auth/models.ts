import { Role } from "../core/models/role";

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: Role;
}

export interface RegisterResponse {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  role: Role;
}