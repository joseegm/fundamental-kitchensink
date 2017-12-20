import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { DataService } from '../../services/data.service';

@Component({
    selector: 'form-example',
    templateUrl: './form.component.html'
})
export class FormComponent {

    users: any;
    oUsers: any;
    loadingMore: boolean = false;

    constructor(private dataService: DataService, private sanitizer: DomSanitizer) { }

    ngOnInit(): void {
        
    }


}
