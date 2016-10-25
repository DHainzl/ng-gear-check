import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridOptions, RowNode } from 'ag-grid/main';
import { GuildTableNameRendererComponent } from './guild-table-name-renderer.component';
import { GuildTableDetailsRendererComponent } from './guild-table-details-renderer.component';
import { GuildTableItemRendererComponent } from './guild-table-item-renderer.component';
import { GuildTableData } from './guild-table.data';

import { GuildService } from '../../services/battle-net/wow/guild.service';
import { CharacterService } from '../../services/battle-net/wow/character.service';
import { CharacterResult } from '../../services/battle-net/wow/character.result';

@Component({
  selector: 'guild-table',
  templateUrl: './guild-table.component.html',
  styleUrls: ['./guild-table.component.css']
})
export class GuildTable {
  private gridOptions: GridOptions;

  private possibleRegions = [ 'eu', 'us' ];
  private possibleStyles = [ 'ag-blue', 'ag-dark', 'ag-fresh' ];

  private searchData = {
    region: 'eu',
    realm: 'Blackrock',
    guild: 'skull first then x',
    style: 'ag-blue'
  };

  private rowData: GuildTableData[] = [];

  constructor (
    private wowGuildService: GuildService,
    private wowCharacterService: CharacterService
  ) {
        this.gridOptions = <GridOptions>{};
        this.gridOptions.rowData = this.rowData;
        this.gridOptions.columnDefs = this.createColumnDefs();
        this.gridOptions.enableSorting = true;
        this.gridOptions.enableFilter = true;
        this.gridOptions.enableColResize = true;
        this.gridOptions.rowSelection = 'single';
        this.gridOptions.suppressCellSelection = true;
  }

  ngOnInit () {
      this.loadData();
  }

  private loadData() {
    this.wowGuildService.getMembers(this.searchData.region, this.searchData.realm, this.searchData.guild)
      .subscribe(
        data => {
            this.rowData = data.members.map(member => ({
                name: member.character.name,
                realm: member.character.realm,
                level: member.character.level,
                spec: member.character.spec && member.character.spec.name || '',
                icon: member.character.spec && member.character.spec.icon || '',
                detailsLoading: false,
                detailsLoaded: false
            }));
            this.gridOptions.api.setRowData(this.rowData);
            // this.loadCharacterDetails();
            // this.gridOptions.api.setRowData(data.members.map(member => member.character)),
        },
        error => console.log(error)
      );
  }

  onGridReady() {
    this.gridOptions.api.sizeColumnsToFit();
  }

  onViewportChanged(event) {
      // TODO [] for not scrolled grid, is this a bug?
      // console.log(this.gridOptions.api.getRenderedNodes());

      let nodes: RowNode[] = [];
      this.gridOptions.api.forEachNode(node => nodes.push(node));

      let loadingNodes = nodes
        .filter((node, idx) => idx >= event.firstRow && idx <= event.lastRow)
        .filter(node => !node.data.isLoading && !node.data.isLoaded)
        .forEach(node => this.loadNode(node));
  }

 private loadNode (node: RowNode) {
      let loadingData = node.data;
      loadingData.isLoading = true;
      node.setData(loadingData);

      this.wowCharacterService.getItems(this.searchData.region, node.data.realm, node.data.name)
        .subscribe(char => {
            let newData = this.applyCharData(node.data, char);
            node.setData(newData);
        });
  }


  private createColumnDefs () {
        return [
            {
                headerName: "Name",
                field: "name",
                cellRendererFramework: {
                    component: GuildTableNameRendererComponent,
                    moduleImports: [CommonModule]
                }
            },
            {
                headerName: "Spec",
                field: "spec",
            },
            {
                headerName: 'Average item level',
                field: 'avgItemLevel',
                cellRendererFramework: {
                    component: GuildTableDetailsRendererComponent,
                    moduleImports: [CommonModule]
                }
            },
            {
                headerName: 'Head',
                field: 'head',
                cellRendererFramework: {
                    component: GuildTableItemRendererComponent,
                    moduleImports: [CommonModule]
                }
            },
            {
                headerName: 'Neck',
                field: 'neck',
                cellRendererFramework: {
                    component: GuildTableItemRendererComponent,
                    moduleImports: [CommonModule]
                }
            },
            {
                headerName: 'Shoulder',
                field: 'shoulder',
                cellRendererFramework: {
                    component: GuildTableItemRendererComponent,
                    moduleImports: [CommonModule]
                }
            },
            {
                headerName: 'Back',
                field: 'back',
                cellRendererFramework: {
                    component: GuildTableItemRendererComponent,
                    moduleImports: [CommonModule]
                }
            },
            {
                headerName: 'Chest',
                field: 'chest',
                cellRendererFramework: {
                    component: GuildTableItemRendererComponent,
                    moduleImports: [CommonModule]
                }
            },
            {
                headerName: 'Wrist',
                field: 'wrist',
                cellRendererFramework: {
                    component: GuildTableItemRendererComponent,
                    moduleImports: [CommonModule]
                }
            },
            {
                headerName: 'Hands',
                field: 'hands',
                cellRendererFramework: {
                    component: GuildTableItemRendererComponent,
                    moduleImports: [CommonModule]
                }
            },
            {
                headerName: 'Waist',
                field: 'waist',
                cellRendererFramework: {
                    component: GuildTableItemRendererComponent,
                    moduleImports: [CommonModule]
                }
            },
            {
                headerName: 'Legs',
                field: 'legs',
                cellRendererFramework: {
                    component: GuildTableItemRendererComponent,
                    moduleImports: [CommonModule]
                }
            },
            {
                headerName: 'Feet',
                field: 'feet',
                cellRendererFramework: {
                    component: GuildTableItemRendererComponent,
                    moduleImports: [CommonModule]
                }
            },
            {
                headerName: 'Finger1',
                field: 'finger1',
                cellRendererFramework: {
                    component: GuildTableItemRendererComponent,
                    moduleImports: [CommonModule]
                }
            },
            {
                headerName: 'Finger2',
                field: 'finger2',
                cellRendererFramework: {
                    component: GuildTableItemRendererComponent,
                    moduleImports: [CommonModule]
                }
            },
            {
                headerName: 'Trinket1',
                field: 'trinket1',
                cellRendererFramework: {
                    component: GuildTableItemRendererComponent,
                    moduleImports: [CommonModule]
                }
            },
            {
                headerName: 'Trinket2',
                field: 'trinket2',
                cellRendererFramework: {
                    component: GuildTableItemRendererComponent,
                    moduleImports: [CommonModule]
                }
            },
            {
                headerName: 'Mainhand',
                field: 'mainHand',
                cellRendererFramework: {
                    component: GuildTableItemRendererComponent,
                    moduleImports: [CommonModule]
                }
            },
            {
                headerName: 'Offhand',
                field: 'offHand',
                cellRendererFramework: {
                    component: GuildTableItemRendererComponent,
                    moduleImports: [CommonModule]
                }
            }
        ];
  }


  private applyCharData(data: GuildTableData, char: CharacterResult) {
        data.avgItemLevel = char.items.averageItemLevel;
        data.head = {
            id: char.items.head && char.items.head.id || 0,
            itemLevel: char.items.head && char.items.head.itemLevel || 0
        }
        data.neck = {
            id: char.items.neck && char.items.neck.id || 0,
            itemLevel: char.items.neck && char.items.neck.itemLevel || 0
        }
        data.shoulder = {
            id: char.items.shoulder && char.items.shoulder.id || 0,
            itemLevel: char.items.shoulder && char.items.shoulder.itemLevel || 0
        }
        data.back = {
            id: char.items.back && char.items.back.id || 0,
            itemLevel: char.items.back && char.items.back.itemLevel || 0
        }
        data.chest = {
            id: char.items.chest && char.items.chest.id || 0,
            itemLevel: char.items.chest && char.items.chest.itemLevel || 0
        }
        data.wrist = {
            id: char.items.wrist && char.items.wrist.id || 0,
            itemLevel: char.items.wrist && char.items.wrist.itemLevel || 0
        }
        data.hands = {
            id: char.items.hands && char.items.hands.id || 0,
            itemLevel: char.items.hands && char.items.hands.itemLevel || 0
        }
        data.waist = {
            id: char.items.waist && char.items.waist.id || 0,
            itemLevel: char.items.waist && char.items.waist.itemLevel || 0
        }
        data.legs = {
            id: char.items.legs && char.items.legs.id || 0,
            itemLevel: char.items.legs && char.items.legs.itemLevel || 0
        }
        data.feet = {
            id: char.items.feet && char.items.feet.id || 0,
            itemLevel: char.items.feet && char.items.feet.itemLevel || 0
        }
        data.finger1 = {
            id: char.items.finger1 && char.items.finger1.id || 0,
            itemLevel: char.items.finger1 && char.items.finger1.itemLevel || 0
        }
        data.finger2 = {
            id: char.items.finger2 && char.items.finger2.id || 0,
            itemLevel: char.items.finger2 && char.items.finger2.itemLevel || 0
        }
        data.trinket1 = {
            id: char.items.trinket1 && char.items.trinket1.id || 0,
            itemLevel: char.items.trinket1 && char.items.trinket1.itemLevel || 0
        }
        data.trinket2 = {
            id: char.items.trinket2 && char.items.trinket2.id || 0,
            itemLevel: char.items.trinket2 && char.items.trinket2.itemLevel || 0
        }
        data.mainHand = {
            id: char.items.mainHand && char.items.mainHand.id || 0,
            itemLevel: char.items.mainHand && char.items.mainHand.itemLevel || 0
        }
        data.offHand = {
            id: char.items.offHand && char.items.offHand.id || 0,
            itemLevel: char.items.offHand && char.items.offHand.itemLevel || 0
        }                
        data.detailsLoading = false;
        data.detailsLoaded = true;

        return data;
  }
}
