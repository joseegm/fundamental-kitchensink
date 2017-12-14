import { Pipe } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Pipe({
    name: 'noLeadingZeroes'
})
export class NoLeadingZeroes extends DecimalPipe {
    transform(value: number, format: string): any {
        return super.transform(value, format).toString().replace(/0*/, function(m){ return m.replace(/0/g, '<span class="ks-numerical-gray">0</span>');})
    }
}