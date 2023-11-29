
import axios from 'axios';

const PORT = process.env.PORT;
const apiURL = process.env.NODE_ENV === 'production' ? '/api' : `http://localhost:${PORT}/api`;

const search = {
    fetchDataFromMongoDB: async () => {
        try {
            const response = await axios.get(`${apiURL}/listings`);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    },
};

export default search;
