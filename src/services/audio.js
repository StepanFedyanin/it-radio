import {urlPathAudio as settings} from '@/settings';
import {REST, RESTError} from './rest';
import {urlPathAudio} from "@/settings";

export default class extends REST {
    static get settings() {
        return settings;
    }
    
    init(){
        const sseBaseUri = `${settings}/api/live/nowplaying/sse`;
        const sseUriParams = new URLSearchParams({
            cf_connect: JSON.stringify({
                subs: {
                    "station:it-radio": { recover: true },
                },
            }),
        });
        this.connection = new EventSource(sseBaseUri + "?" + sseUriParams.toString());
    }
    
    removePlay(){
        this.connection.close()
    }
    songs(){
        this.connection.onmessage = (e) => {
            const jsonData = JSON.parse(e.data);
            // if ("connect" in jsonData) {
            //     const connectData = jsonData.connect;
            //
            //     if ("data" in connectData) {
            //         // Legacy SSE data
            //         connectData.data.forEach((initialRow) => handleSseData(initialRow));
            //     } else {
            //         // New Centrifugo time format
            //         if ("time" in connectData) {
            //         }
            //
            //         // New Centrifugo cached NowPlaying initial push.
            //         for (const subName in connectData.subs) {
            //             const sub = connectData.subs[subName];
            //             if ("publications" in sub && sub.publications.length > 0) {
            //                 sub.publications.forEach((initialRow) => handleSseData(initialRow, false));
            //             }
            //         }
            //     }
            // } else if ("pub" in jsonData) {
            //     handleSseData(jsonData.pub);
            // }
        };
        
    }
    
    onHandler(event){
        this.connection.onmessage = event
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
