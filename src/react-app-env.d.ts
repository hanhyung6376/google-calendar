/// <reference types="react-scripts" />
declare namespace NodeJS {
    interface ProcessEnv {
        NODE_ENV: 'development' | 'production' | 'test';
        PUBLIC_URL: string;
        REACT_APP_GOOGLE_CLIENT_ID: string;
        REACT_APP_GOOGLE_SECRET_KEY: string;
        REACT_APP_GOOGLE_API_KEY: string;
        REACT_APP_CALENDAR_ID: string;
        REACT_APP_GOOGLE_ACCESS_TOKEN: string;
        REACT_APP_REFRESH_TOKEN: string;
    }
}
