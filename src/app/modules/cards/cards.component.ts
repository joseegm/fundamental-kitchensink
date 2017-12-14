import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { DataService } from '../../services/data.service';

@Component({
    selector: 'cards-example',
    templateUrl: './cards.component.html'
})
export class CardsComponent {

    users: any;
    oUsers: any;
    loadingMore: boolean = false;



    constructor(private dataService: DataService, private sanitizer: DomSanitizer) { }

    ngOnInit(): void {
        this.loadData();
    }

    loadData() {
        this.users = null;
        this.dataService.getUsers().subscribe(data => {
            setTimeout(()=>{ 
                this.oUsers = this.users = this.dataInstrument(data); 
            }, 500)
        });
    }

    dataInstrument(data) {
        return data.map(user => {
            user.showMenu = false;
            user.visible = true;
            user.locked = false;
            user.avatarStyle = this.sanitizer.bypassSecurityTrustStyle('background-image: url("https://api.adorable.io/avatars/240/' + user.email + '");');
            
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
        if (this.users[index].locked) 
            return event.stopPropagation();
        this.users[index].visible = !this.users[index].visible;
        this.users[index].showMenu = false;
        event.stopPropagation();
    }

    deleteItem(index, event) {
        if (this.users[index].locked) 
            return event.stopPropagation();
        this.users.splice(index, 1);
        this.users[index].showMenu = false;
        event.stopPropagation();
    }

    loadMore() {
        this.loadingMore = true;
        setTimeout(()=>{ 
            this.users = this.users.concat(this.dataInstrument(JSON.parse(JSON.stringify(this.oUsers)))); 
            this.loadingMore = false;
        }, 500);
    }


}
