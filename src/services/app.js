import {urlPath as settings} from '@/settings';
import {REST, RESTError} from './rest';

export default class extends REST {
    static get settings() {
        return settings;
    }
    static user(params) {
        return this._get(`user`, {}, params).then((data) => {
            return data;
        }).catch((error) => {
            throw new RESTError(error, 'Не удалось создать пользователя');
        });
    }
    static loginUser(params) {
        return this._post(`token`, {}, params).then((data) => {
            return data;
        }).catch((error) => {
            throw new RESTError(error, 'Не удалось создать пользователя');
        });
    }
    static createUser(params) {
        return this._post(`user/create_user`, {}, params).then((data) => {
            return data;
        }).catch((error) => {
            throw new RESTError(error, 'Не удалось создать пользователя');
        });
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
        return this._get(`radio/teams`, params, {}).then((data) => {
            return data;
        }).catch((error) => {
            throw new RESTError(error, 'Ошибка при получении команды');
        });
    }
    static getRubriks(station, params) {
        return this._get(`radio.mp3`, params, {}).then((data) => {
            return data;
        }).catch((error) => {
            throw new RESTError(error, 'Ошибка при получении плейлистов');
        });
    }
    static createFavoriteForUser(params){
        return this._post(`radio/song/create_song`, {}, params).then((data) => {
            return data;
        }).catch((error) => {
            throw new RESTError(error, 'Ошибка при получении плейлистов');
        });
    }
}
