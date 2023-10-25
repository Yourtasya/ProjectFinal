import AuthService from "../services/AuthService";
import { makeAutoObservable } from "mobx";

export class AuthController {
  isAuth = false;
  isLoading = false;
  email: any;

  constructor() {
    makeAutoObservable(this);
  }

  setLoading(bool: boolean) {
    this.isLoading = bool;
  }

  setAuth(bool: boolean) {
    this.isAuth = bool;
  }

  setUser(email: any) {
    this.email = email;
  }

  async login(email: any, password: any) {
    try {
      this.setLoading(true);
      await AuthService.login(email, password);
      this.setAuth(true);
      this.setUser(email);
    } catch (e) {
      alert("Вы ввели неверный пароль или email");
    } finally {
      this.setLoading(false);
    }
  }

  async registration(email: string, password: string, name: string) {
    try {
      await AuthService.registration(email, password, name);
    } catch {
      alert("ошибка регистрации");
    }
  }
}
