import RemoveCookie from "../cookies/removeCookie";
import SetCookie from "../cookies/setCookie";
import $api from "../Interceptors/baseURL";

const mockEmailResponseServer = "Nastya.Shestakova@gmail.com";
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
      alert(`Вы вошли как ${response}!`);
      return response;
    } else {
      alert("Неверно введен логин или пароль!");
    }
  }

  static async registration(email: string, password: string, name: string) {
    return $api.post("authentication/registration", { email, password, name });
  }
}
