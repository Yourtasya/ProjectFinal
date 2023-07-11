import AuthService from "../services/AuthService";

export class AuthController {
  isAuth = false;
  isLoading = false;
  email: any;

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
}
