import axios from "axios"

const makeAPICall = async (url, params = {}) => {
    try {
        const options = {
            method: 'GET',
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