import axios from "axios"
import axiosRetry from "axios-retry";

axiosRetry(axios, { retries: 3 });

const makeAPICall = async (url, params = {}) => {
    try {
        const options = {
            method: 'GET',
            timeout: 5000,
            url,
            params,
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
            },
        };
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export default makeAPICall