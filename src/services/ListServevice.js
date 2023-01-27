import api from "./api";

class ListService {
  async getAllLists() {
    try {
      const response = await api.get("list");
      return response.data;
    } catch (err) {
      console.log(err);
      return "";
    }
  }
  async getList(id) {
    try {
      const response = await api.get(`list/${id}`);
      return response.data;
    } catch (err) {
      console.log(err);
      return "";
    }
  }
}
const listService = new ListService();
export default listService;
