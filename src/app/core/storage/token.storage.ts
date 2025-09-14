import { Injectable } from '@angular/core';

const KEY = 'app_token';

@Injectable({ providedIn: 'root' })
export class TokenStorage {
  get() { return localStorage.getItem(KEY); }
  set(token: string) { localStorage.setItem(KEY, token); }
  clear() { localStorage.removeItem(KEY); }
}
