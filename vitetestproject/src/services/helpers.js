import axios from "axios";
import { BASE_URL } from "./constants";

const buildUrl = (endpoint) => `${BASE_URL}/${endpoint}`;

// GET: all data
export const getAllData = async (endpoint) => {
    try {
        const res = await axios.get(buildUrl(endpoint));
        return res.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};

// GET: data by ID
export const getDataById = async (endpoint, id) => {
    try {
        const res = await axios.get(buildUrl(`${endpoint}/${id}`));
        return res.data;
    } catch (error) {
        console.error(`Error fetching data by ID (${id}):`, error);
        throw error;
    }
};

// POST: Create new data
export const createData = async (endpoint, data) => {
    try {
        const res = await axios.post(buildUrl(endpoint), data);
        return res.data;
    } catch (error) {
        console.error("Error creating data:", error);
        throw error;
    }
};

// PUT: Update data by ID
export const updateData = async (endpoint, id, data) => {
    try {
        const res = await axios.put(buildUrl(`${endpoint}/${id}`), data);
        return res.data;
    } catch (error) {
        console.error(`Error updating data by ID (${id}):`, error);
        throw error;
    }
};

// DELETE: Delete data by ID
export const deleteData = async (endpoint, id) => {
    try {
        const res = await axios.delete(buildUrl(`${endpoint}/${id}`));
        return res.data;
    } catch (error) {
        console.error(`Error deleting data by ID (${id}):`, error);
        throw error;
    }
};
