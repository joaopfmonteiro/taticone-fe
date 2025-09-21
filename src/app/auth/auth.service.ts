import { Injectable, inject} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RegisterRequest, RegisterResponse } from "./models";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient)
  private apiUrl = environment.apiUrl;

  register(request: RegisterRequest): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(`${this.apiUrl}/api/auth/register`, request
    );
  }
}
