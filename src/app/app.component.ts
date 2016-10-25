import { Component, NgModule } from '@angular/core';

import { GridOptions } from 'ag-grid/main';

import { GuildTable } from './components/guild-table/guild-table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  viewProviders: [ GuildTable ]
})
export class AppComponent {
}
