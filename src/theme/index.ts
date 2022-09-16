import { DefaultTheme } from 'styled-components';

const colors = {
    point: '#3282FA',
    default: '#000',
    gray: ['#e0e0e0', '#dee2e6', '#ced4da', '#868e96', '#343a40', '#4a4a4a'],
    cyan: ['#E3F2FD', '#3bc9db', '#22b8cf'],
    primary: '#3282FA',
    warning: '#FFD028',
    error: '#D82C2C',
    border: '#EEF0F7',
    bg: '#F5F6F9'
};

const font = {
    h1: '1.5rem',
    h2: '1.25rem',
    h3: '1.125rem',
    h4: '1rem',
    h5: '0.75rem'
};

const theme: DefaultTheme = {
    colors,
    font
};

export const Theme = typeof theme;

export default theme;
