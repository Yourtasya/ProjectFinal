import TeamSingleServices from "../services/TeamSingleServices";

export default class TeamSingleController {
  constructor() {}

  async getInfoAboutUniqueUserById(userId: any) {
    try {
      const res = await TeamSingleServices.getUniqueUsersInArray(userId);
      return res;
    } catch (e) {
      console.log(e);
    }
  }
}
