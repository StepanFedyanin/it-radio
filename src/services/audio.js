import {urlPathAudio as settings} from '@/settings';
import {REST, RESTError} from './rest';

export default class extends REST {
    static get settings() {
        return settings;
    }

    static getPlayList(station, params) {
        // return this._get(`station/${station}/playlists`, params, {}).then((data) => {
        return this._get(`radio.mp3`, params, {}).then((data) => {
            return data;
        }).catch((error) => {
            throw new RESTError(error, 'Ошибка при получении плейлистов');
        });
    }
}
