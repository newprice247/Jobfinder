// imports axios to make requests to the server
import { list } from '@material-tailwind/react';
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

export const updateUser = (userID, userData) => {
    console.log('here is the client api call', userID, userData)
    return fetch(`/api/users/${userID}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
        
    });
};

export const saveListing = (userId, listingID) => {
    console.log('here is the client api call', userId, listingID)
    return fetch(`/api/users/${userId}/listings/${listingID}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
    });
};

export const deleteListing = (listingID) => {
    return fetch(`/api/listings/${listingID}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });
};

export const addUserResume = (userID, userData) => {
    console.log('here is the client api call', userID, userData)
    return fetch(`/api/users/${userID}/resume`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
}

export const newListing = (listingData) => {
    return fetch('/api/listings', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(listingData),
    });
};

export const updateListing = (listingID, listingData) => {
    return fetch(`/api/listings/${listingID}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(listingData),
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

    fetchCategories: async () => {
        try {
            const response = await axios.get(`${apiURL}/categories`);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    },

    fetchListingsByCategory: async (category) => {
        try {
            const response = await axios.get(`${apiURL}/categories/${category}`);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    },

    fetchListingByTitle: async (title) => {
        try {
            const response = await axios.get(`${apiURL}/listings/title/${title}`);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    },

    fetchListingByCategory: async (category) => {
        try {
            const response = await axios.get(`${apiURL}/listings/category/${category}`);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    },

    fetchListingByLocation: async (location) => {
        try {
            const response = await axios.get(`${apiURL}/listings/location/${location}`);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    },

    fetchListingBySalary: async (salary) => {
        try {
            const response = await axios.get(`${apiURL}/listings/salary/${salary}`);
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

