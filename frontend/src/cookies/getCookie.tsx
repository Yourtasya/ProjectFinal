import Cookies from "js-cookie";

const GetCookie = (cookiename: any) => {
  const cookie = Cookies.get(cookiename);
  return cookie;
};
export default GetCookie;
