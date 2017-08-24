import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'greeting' })

export class GreetingPipe implements PipeTransform {
    transform(value: string, isMale: boolean = true): string {
        if ( isMale ) {
            return 'Bonjour Monsieur ' + value;
        } else {
            return 'Bonjour Monsieur ' + value;
        }
    }
}
