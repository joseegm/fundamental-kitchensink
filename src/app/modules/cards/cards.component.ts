import { Component } from '@angular/core';

import { DataService } from '../../services/data.service';

@Component({
    selector: 'cards-example',
    templateUrl: './cards.component.html'
})
export class CardsComponent {

    users: any;

    allSelected: boolean = false;

    constructor(private dataService: DataService) { }

    ngOnInit(): void {
        this.loadData();
    }

    loadData() {
        this.users = null;
        this.dataService.getUsers().subscribe(data => {
            setTimeout(()=>{ 
                this.users = this.dataInstrument(data); 
            }, 500)
        });
    }

    dataInstrument(data) {
        return data.map(user => {
            user.selected = false;
            user.visible = true;
            user.locked = false;
            return user;
        });
    }

    removeSelected() {
        this.users = this.users.filter(u => {
            return !u.selected || u.locked;
        });        
    }

    toggleLocked(index) {
        this.users[index].locked = !this.users[index].locked;
    }

    toggleVisibleSelected(visible) {
        this.users = this.users.map(u => {
            if (u.locked || !u.selected) return u;
            u.visible = visible;
            return u;
        })
    }

    deleteItem(index) {
        this.users.splice(index, 1);
    }


}
