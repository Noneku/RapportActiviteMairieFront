import axios from 'axios';

class APIService {
    static async getPoles() {
        try {
            const response = await axios.get('https://mairie-roubaix.wiremockapi.cloud/poles');
            return await response.data;
        } catch (error) {
            throw error;
        }
    }
}

export default APIService;