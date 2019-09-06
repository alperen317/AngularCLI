import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, FormControl  } from '@angular/forms';
import { Directive, OnInit } from '@angular/core';


function tcControl(): ValidatorFn {
    return (c: AbstractControl) => {
        const isEleven =  /^[0-9]{11}$/.test(c.value);
        let totalX = 0;
        for (let i = 0; i < 10 ; i++ ) {
            totalX += Number(c.value.substr(i, 1));
        }
        let isRuleX = totalX % 10 == c.value.substr(10, 1);
        let totalY1 = 0;
        for (let i = 0; i < 10; i += 2) {
            totalY1 += Number(c.value.substr(i, 1));
         }
        let totalY2 = 0;
        for (let i = 1; i < 10; i += 2) {
            totalY2 += Number(c.value.substr(i, 1));
        }
        let isRuleY =  ((totalY1 * 7) - totalY2) % 10 == c.value.substr(9, 0);
        if (isEleven && isRuleX && isRuleY) {
            return  
            appTcControl : { valid : true }
        } else {
            return {
            appTcControl : { valid : false }
            };
        }
    };
}
@Directive({
    selector: '[appTcControl][ngModel]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: TcControlDirective,
            multi: true
        }
    ]
})

export class TcControlDirective implements Validator {
  validator: ValidatorFn;



  constructor() {
      this.validator = tcControl();
  }
  validate(c: FormControl) {
      // console.log(c);
    if (c.value != null) {
        return this.validator(c);
    }
  }
}
