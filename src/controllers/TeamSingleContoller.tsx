import { usersMocksArray } from "../mocks/usersMocks";
import TeamSingleServices from "../services/TeamSingleServices";

export default class TeamSingleController {
  constructor() {}

  async getInfoAboutUniqueUserById(userId: any) {
    try {
      const res = await TeamSingleServices.getUniqueUsersInArray(
        userId,
        usersMocksArray
      );
      return usersMocksArray;
    } catch (e) {
      console.log(e);
    }
  }
}
