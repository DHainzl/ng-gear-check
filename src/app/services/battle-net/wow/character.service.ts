import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'

import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';

import { environment } from '../../../../environments/environment';

import { CharacterResult } from './character.result';

@Injectable()
export class CharacterService {
    constructor (
        private http: Http
    ) {}

    public getCharacterInfo (region: string, realm: string, characterName: string, fields: string[]): Observable<CharacterResult> {
        return new Observable<CharacterResult>((observer: Observer<CharacterResult>) => {
            let apiKey = environment.battleNetApiKey;
            let url = `https://${region}.api.battle.net/wow/character/${realm}/${characterName}?fields=items&locale=en_GB&apikey=${apiKey}`;
            
            let headers: Headers = new Headers({
                Accept: 'application/json'
            });

            this.http.get(url, { headers: headers})
                .map(data => data.json())
                .subscribe(
                    data => observer.next(data),
                    error => observer.error(error),
                    () => observer.complete()
                );
        });
    }

    public getItems (region: string, realm: string, guildName: string): Observable<CharacterResult> {
        return this.getCharacterInfo(region, realm, guildName, [ 'items' ]);
    }
}