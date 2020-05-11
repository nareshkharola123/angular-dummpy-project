import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'getAge'})
export class GetAge implements PipeTransform {
  transform(dob: Date): number {

    let birthday = new Date(dob);
    let ageDifMs = Date.now() - birthday.getTime();
    let ageDate = new Date(ageDifMs);
    let age = Math.abs(ageDate.getFullYear() - 1970);
    return age
  }
}
