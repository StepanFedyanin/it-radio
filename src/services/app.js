import {urlPath as settings} from '@/settings';
import {REST, RESTError} from './rest';

export default class extends REST {
    static get settings() {
        return settings;
    }
    
    static getNews(station, params) {
        return this._get(`radio.mp3`, params, {}).then((data) => {
            return data;
        }).catch((error) => {
            throw new RESTError(error, 'Ошибка при получении плейлистов');
        });
    }
    static getProfiles(station, params) {
        return this._get(`radio.mp3`, params, {}).then((data) => {
            return data;
        }).catch((error) => {
            throw new RESTError(error, 'Ошибка при получении плейлистов');
        });
    }
    static getTeams(station, params) {
        return this._get(`teams`, params, {}).then((data) => {
            return data;
        }).catch((error) => {
            throw new RESTError(error, 'Ошибка при получении плейлистов');
        });
    }
    static getRubriks(station, params) {
        return this._get(`radio.mp3`, params, {}).then((data) => {
            return data;
        }).catch((error) => {
            throw new RESTError(error, 'Ошибка при получении плейлистов');
        });
    }
}
