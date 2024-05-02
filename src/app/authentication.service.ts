import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private readonly validUsername = 'user';
  private readonly validPassword = 'user123';

  constructor() {}

  async loginUser(username: string, password: string): Promise<boolean> {
    // Simple static check (replace with secure validation later)
    return username === this.validUsername && password === this.validPassword;
  }
}
