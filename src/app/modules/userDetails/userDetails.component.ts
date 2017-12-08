import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService } from '../../services/data.service';

@Component({
    selector: 'user-details-example',
    templateUrl: './userDetails.component.html'
})
export class UserDetailsComponent {

    user: any;
    componentSlug: string = '';

    constructor(private dataService: DataService, private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.componentSlug = this.route.snapshot.paramMap.get('componentSlug');
        this.loadData();

    }

    loadData() {
        this.user = null;
        this.dataService.getUser(this.route.snapshot.paramMap.get('id')).subscribe(data => {
            setTimeout(()=>{ 
                this.user = data; 
            }, 500)
        });
    }

}
