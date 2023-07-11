import RemoveCookie from "../cookies/removeCookie";
import SetCookie from "../cookies/setCookie";

const mockEmailResponseServer = "Nastya";
const mockPasswordResponseServer = "1111";

export default class AuthService {
  static async login(email: any, password: any) {
    if (
      email === mockEmailResponseServer &&
      password === mockPasswordResponseServer
    ) {
      const response = mockEmailResponseServer;
      RemoveCookie("loginCookie");
      SetCookie("loginCookie", JSON.stringify(response));
      alert("Вы залогинены!");
      return response;
    } else {
      alert("Неверно введен логин или пароль!");
    }
  }
}
