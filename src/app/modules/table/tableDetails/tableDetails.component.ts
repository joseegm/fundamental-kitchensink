import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UsersService } from '../../../services/users/users.service';

@Component({
    selector: 'table-details-example',
    templateUrl: './tableDetails.component.html'
})
export class TableDetailsComponent {

    user: any;

    constructor(private userService: UsersService, private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.loadData();
        console.log(this.route.params)
    }

    loadData() {
        this.user = null;
        this.userService.getUser(this.route.params.value.id).subscribe(data => {
            setTimeout(()=>{ 
                this.user = data; 
            }, 500)
        });
    }

}
