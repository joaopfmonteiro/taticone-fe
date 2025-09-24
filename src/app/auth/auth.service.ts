import { Injectable, inject} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RegisterRequest, RegisterResponse } from "./models";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { LoginRequest, LoginResponse } from "../features/login/login.models";

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient)
  private apiUrl = environment.apiUrl;

  register(request: RegisterRequest): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(`${this.apiUrl}/api/auth/register`, request);
  }

  login(login: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/api/auth/login`, login);
  }
}
