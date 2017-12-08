import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

import { DataService } from '../../services/data.service';

@Component({
    selector: 'user-details-example',
    templateUrl: './userDetails.component.html'
})
export class UserDetailsComponent {

    user: any;
    componentSlug: string = '';

    constructor(private dataService: DataService, private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

    ngOnInit(): void {
        this.componentSlug = this.route.snapshot.paramMap.get('componentSlug');
        this.loadData();

    }

    loadData() {
        this.user = null;
        this.dataService.getUser(this.route.snapshot.paramMap.get('id')).subscribe(data => {
            setTimeout(()=>{ 
                this.user = data; 
                this.user.avatarStyle = this.sanitizer.bypassSecurityTrustStyle('background-image: url("https://api.adorable.io/avatars/240/' + this.user.email + '");');
            }, 500)
        });
    }

}
