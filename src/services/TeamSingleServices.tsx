//Для будущих запросов к эндпоинтам на бэк.

export default class TeamSingleServices {
  static getUniqueUsersInArray(id: any, usersMocksArray: any) {
    const userId = id.replace(":", "");
    const usersArray = usersMocksArray.find((item: any) => {
      return item.id === userId;
    });
    return usersArray;
  }
}
