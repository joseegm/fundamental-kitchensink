import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { DataService } from '../../services/data.service';

@Component({
    selector: 'form-example',
    templateUrl: './form.component.html'
})
export class FormComponent {

    model: any = {
        firstName: '',
        lastName: '',
        birthday: {
            day: null,
            month: null,
            year: null
        },
        userName: '',
        email: ''
    };

    months: any[] = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

    constructor(private sanitizer: DomSanitizer) { }

    ngOnInit(): void {
    }

    submit(): void {

    }

}
