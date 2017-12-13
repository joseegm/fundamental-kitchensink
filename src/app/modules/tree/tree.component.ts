import { Component } from '@angular/core';

import { DataService } from '../../services/data.service';

@Component({
    selector: 'tree-example',
    templateUrl: './tree.component.html'
})
export class TreeComponent {

    block: any;

    constructor(private dataService: DataService) { }

    ngOnInit(): void {
        this.loadData();
    }

    loadData() {
        this.block = null;
        this.dataService.getBlock().subscribe(data => {
            setTimeout(() => {
                this.block = this.dataInstrument(data);
            }, 500)
        });
    }

    dataInstrument(data) {
        data.tx = data.tx.slice(0, 200);
        data.tx = data.tx.map(t => {
            t.expanded = false;
            t.inputs.expanded = false;
            t.out.expanded = false;
            t.totalOut = t.out.reduce( function(a, b){
                return a + b['value'];
            }, 0);
            t.totalIn = t.inputs.reduce( function(a, b){
                return a + b.prev_out['value'];
            }, 0);
            t.fees = t.totalIn - t.totalOut;
            return t;
        });
        return data;
        /*
        return data.categoryTree[0].children.map(user => {
            user.selected = false;
            user.visible = true;
            user.locked = false;
            return user;
        });
        */
    }

    toBTC(sat) {
        return sat / 100000000;
    }



}
