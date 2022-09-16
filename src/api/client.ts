import axios from 'axios';

const client = axios.create();

export const getAccessToken = () =>
    axios.post('https://www.googleapis.com/oauth2/v4/token', {
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        client_secret: process.env.REACT_APP_GOOGLE_SECRET_KEY,
        refresh_token: process.env.REACT_APP_REFRESH_TOKEN,
        grant_type: 'refresh_token'
    });

client.interceptors.request.use((config) => {
    const token = localStorage.getItem('google_token');

    if (token != null) {
        const { access_token } = JSON.parse(token);

        config.headers!.Authorization = `Bearer ${access_token}`;
    }
    return config;
});

client.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 404)) {
            try {
                const originalRequest = error.config;
                const data = await getAccessToken();
                if (data) {
                    const { access_token } = data.data;
                    localStorage.setItem('google_token', JSON.stringify(data.data, ['access_token']));
                    originalRequest.headers.authorization = `Bearer ${access_token}`;
                    return await client.request(originalRequest);
                }
            } catch (err) {
                return err;
            }
            return Promise.reject(error);
        }
        return Promise.reject(error);
    }
);

export default client;
