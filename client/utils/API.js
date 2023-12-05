// imports axios to make requests to the server
import axios from 'axios';

const PORT = process.env.PORT;

// sets the base URL for API calls depending on the environment
const apiURL = process.env.NODE_ENV === 'production' ? '/api' : `http://localhost:${PORT}/api`;

export const getMe = (token) => {
    return fetch('/api/users/me', {
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
        },
    });
};

export const createUser = (userData) => {
    return fetch('/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
};

export const loginUser = (userData) => {
    return fetch('/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
};

const search = {

    // fetches all listings
    fetchListings: async () => {
        try {
            const response = await axios.get(`${apiURL}/listings`);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    },


    // fetches a single listing by id
    fetchListingById: async (id) => {
        try {
            const response = await axios.get(`${apiURL}/listings/${id}`);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    },


    // fetches all listings by category
    fetchUsers: async () => {
        try {
            const response = await axios.get(`${apiURL}/users`);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    },


    // fetches a single user by id
    fetchUser: async (id) => {
        try {
            const response = await axios.get(`${apiURL}/users/${id}`);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    },
};

export default search;

