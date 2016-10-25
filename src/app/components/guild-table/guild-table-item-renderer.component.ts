import { Component } from '@angular/core';

import {AgRendererComponent} from 'ag-grid-ng2/main';

@Component({
    selector: 'ag-cell',
    template: `
        <span class="item item-{{strength}}">
            <span *ngIf="!params.data.detailsLoaded">Loading ...</span>
            <span *ngIf="params.data.detailsLoaded">
                <a href="//www.wowhead.com/item={{params.value.id}}" target="_blank">{{params.value.itemLevel}}</a>
            </span>
        </span>
    `
})
export class GuildTableItemRendererComponent implements AgRendererComponent {
    private params: any;
    private strength: string = '';

    // called on init
    agInit(params:any):void {
        this.params = params;

        if (params.value) {
            if (params.value.itemLevel < 800) this.strength = 'common';
            else if (params.value.itemLevel < 825) this.strength = 'uncommon';
            else if (params.value.itemLevel < 850) this.strength = 'rare';
            else this.strength = 'epic';
        }
    }
}