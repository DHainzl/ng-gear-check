import { Component } from '@angular/core';

import {AgRendererComponent} from 'ag-grid-ng2/main';

@Component({
    selector: 'ag-cell',
    template: `<span style="display: inline-block; width: 19px;"><img *ngIf="icon" src="http://media.blizzard.com/wow/icons/18/{{icon}}.jpg" /></span> {{params.value}} ({{params.data.level}})`
})
export class GuildTableNameRendererComponent implements AgRendererComponent {
    private params: any;
    private icon: string;

    // called on init
    agInit(params:any):void {
        this.params = params;
        this.icon = params.data.icon || '';
    }
}