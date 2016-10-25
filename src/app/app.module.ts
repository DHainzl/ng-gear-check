import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GuildTable } from './components/guild-table/guild-table.component';

import {AgGridModule} from 'ag-grid-ng2/main';

import { GuildService } from './services/battle-net/wow/guild.service';
import { CharacterService } from './services/battle-net/wow/character.service';

@NgModule({
  declarations: [
    AppComponent,
    GuildTable
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgGridModule.withNg2ComponentSupport()
  ],
  providers: [ GuildService, CharacterService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
