//Для будущих запросов к эндпоинтам на бэк.

export default class TeamSingleServices {
  usersMocksArray = [
    {
      id: "1",
      userName: "Sherlin D'Crus",
      email: "",
      img: "",
      text: "",
      phone: "",
    },
    {
      id: "2",
      userName: "Sherlin D'Crus2",
      email: "",
      img: "",
      text: "",
      phone: "",
    },
    {
      id: "3",
      userName: "Sherlin D'Crus3",
      email: "",
      img: "",
      text: "",
      phone: "",
    },
    {
      id: "4",
      userName: "Sherlin D'Crus4",
      email: "",
      img: "",
      text: "",
      phone: "",
    },
    {
      id: "5",
      userName: "Sherlin D'Crus5",
      email: "",
      img: "",
      text: "",
      phone: "",
    },
    {
      id: "6",
      userName: "Sherlin D'Crus6",
      email: "",
      img: "",
      text: "",
      phone: "",
    },
  ];

  static getUniqueUsersInArray(usersMocksArray: any) {
    console.log(usersMocksArray);
    const req = usersMocksArray;
    console.log(req);
    return req;
  }
}
