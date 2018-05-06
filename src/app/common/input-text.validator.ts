import { AbstractControl, ValidationErrors } from "@angular/forms";
import { StringConstant } from "./string.constant";

export class InputTextValidator {
    static canNotContainAnySpace(control: AbstractControl): ValidationErrors | null {
        if((control.value as string).indexOf(StringConstant.SPACE) > 0 ){
            return {canNotContainAnySpace: true};
        }
        return null;
    }
    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors> |  null {
        return new Promise((resolve, reject) => {
            return setTimeout(()=> {
                console.log('ahihi timeout');
                if(control.value === 'mosh'){
                    return resolve({shouldBeUnique: true});
                } else if(control.value === 'tanh'){
                    return reject('tanh is not allowed to sign in')
                }
                return resolve(null);
            }, 2000);
        }) 
    }
}