import api from "./api";

class ListService {
  async getAllLists() {
    try {
      const response = await api.get("list");
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
  async getList(id) {
    try {
      const response = await api.get(`list/${id}`);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
  async postList(list) {
    try {
      const response = await api.post(`list/create`, list);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
  async deleteList(id) {
    try {
      const response = await api.delete(`list/delete/${id}`);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
}
const listService = new ListService();
export default listService;
