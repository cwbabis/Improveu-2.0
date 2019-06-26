import axios from "axios";

export default {
  // Gets single user's profile information
  getProfile: function(id) {
    return axios.get("/api/user/" + id);
  },
  // Gets all goals
  getAllGoals: function() {
    return axios.get("/api/goals");
  },
  createNewGoal: function(goalData) {
    return axios.post("/api/goals", goalData);
  },
  // Updates a specific goal
  updateGoal: function(id, data) {
    return axios.put("/api/goals/" + id, data);
  }, 
  // Saves an book to the database
  createNewUser: function(userData) {
    return axios.post("/api/user", userData);
  }
};
