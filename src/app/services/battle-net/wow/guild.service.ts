import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'

import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';

import { GuildResult } from './guild.result';

@Injectable()
export class GuildService {
    constructor (
        private http: Http
    ) {}

    public getGuildInfo (region: string, realm: string, guildName: string, fields: string[]): Observable<GuildResult> {
        return new Observable<GuildResult>((observer: Observer<GuildResult>) => {
            let url = `https://${region}.api.battle.net/wow/guild/${realm}/${guildName}?fields=${fields.join(',')}&locale=en_GB&apikey=qc7s5cjqfhnwh5pbbgqp8grfynckas7n`;
            
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

    public getMembers (region: string, realm: string, guildName: string): Observable<GuildResult> {
        return this.getGuildInfo(region, realm, guildName, [ 'members' ]);
    }
}