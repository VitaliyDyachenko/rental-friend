import {getCookie} from './cookieService.jsx';

export function getUserToken() {
        const userToken = getCookie('tkn');
        return userToken;
}