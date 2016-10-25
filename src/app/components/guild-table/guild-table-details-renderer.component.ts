import { Component } from '@angular/core';

import {AgRendererComponent} from 'ag-grid-ng2/main';

@Component({
    selector: 'ag-cell',
    template: `
        <span class="item item-{{strength}}">
            <span *ngIf="!params.data.detailsLoaded">Loading ...</span>
            <span *ngIf="params.data.detailsLoaded">{{params.value}}</span>
        </span>
    `
})
export class GuildTableDetailsRendererComponent implements AgRendererComponent {
    private params: any;
    private strength: string;

    // called on init
    agInit(params:any):void {
        this.params = params;

        if (params.value) {
            if (params.value < 800) this.strength = 'common';
            else if (params.value < 825) this.strength = 'uncommon';
            else if (params.value < 850) this.strength = 'rare';
            else this.strength = 'epic';
        }
    }
}