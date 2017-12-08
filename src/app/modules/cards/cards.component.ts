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
            user.showMenu = false;
            user.visible = true;
            user.locked = false;

            return user;
        });
    }

    toggleMenu(index, event) {
        this.users[index].showMenu = !this.users[index].showMenu;
        event.stopPropagation();
    }

    toggleLocked(index, event) {
        this.users[index].locked = !this.users[index].locked;
        this.users[index].showMenu = false;
        event.stopPropagation();
    }

    toggleVisible(index, event) {
        this.users[index].visible = !this.users[index].visible;
        this.users[index].showMenu = false;
        event.stopPropagation();
    }

    deleteItem(index, event) {
        this.users.splice(index, 1);
        this.users[index].showMenu = false;
        event.stopPropagation();
    }


}
