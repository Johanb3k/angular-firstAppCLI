import { Pipe, PipeTransform } from '@angular/core';

export class Personne {
    name: string;
    isMale: boolean;
  }

@Pipe ({ name: 'maleOnly' })

export class MaleOnlyPipe implements PipeTransform {
    transform(value: Personne[]): Personne[] {
        return value.filter(x => x.isMale);
    }
}
