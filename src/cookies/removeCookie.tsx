import Cookies from "js-cookie";

const RemoveCookie = (cookiename: any) => {
  Cookies.remove(cookiename);
};
export default RemoveCookie;
