import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';

@Component({
    selector: 'table-example',
    templateUrl: './table.component.html'
})
export class TableComponent {

    users: any;

    allSelected: boolean = false;

    constructor(private http: HttpClient) { }

    ngOnInit(): void {
        this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(data => {
            setTimeout(()=>{ 
                this.users = this.dataInstrument(data); 
            }, 1500)
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

    toggleSelectedAll(checked) {
        this.users = this.users.map(u => {
            u.selected = checked;
            return u;
        });
    }

    someSelected() {
        if (!this.users) return false;
        return this.users.find(u => u.selected == true);
    }

    toggleVisibility(index) {
        this.users[index].visible = !this.users[index].visible;
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

}
