import api from "./api";

class TaskService {
    async postTask(task) {
        try {
            const response = await api.post(`task/create`, task);
            return response.data;
        } catch (err) {
            console.log(err);
        }
    }
    async updateTask(task) {
        try {
            const response = await api.patch(`task/update/${task.id}`, task);
            return response.data;
        } catch (err) {
            console.log(err);
        }
    }
    async deletePost(id) {
        try {
            const response = await api.delete(`task/delete/${id}`);
            return response.data;
        } catch (err) {
            console.log(err);
        }
    }

}
const taskService = new TaskService()
export default taskService