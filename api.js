import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5001/api",
});

// Login
export const login = async (data) => {
  const res = await API.post("/auth/login", data);
  return res.data;
};

export const getDashboard = async () => {
  const res = await API.get("/dashboard");
  return res.data;
};
// Get leads
export const getLeads = async (token) => {
  const res = await API.get("/leads", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

// Create lead
export const createLead = async (lead, token) => {
  const res = await API.post("/leads", lead, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

// Update lead
export const updateLead = async (id, lead, token) => {
  const res = await API.put(`/leads/${id}`, lead, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

// Delete lead
export const deleteLead = async (id, token) => {
  const res = await API.delete(`/leads/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export default API;