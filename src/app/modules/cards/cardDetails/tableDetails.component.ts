import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService } from '../../../services/data.service';

@Component({
    selector: 'table-details-example',
    templateUrl: './tableDetails.component.html'
})
export class TableDetailsComponent {

    user: any;

    constructor(private dataService: DataService, private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.loadData();
        console.log(this.route.params)
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
