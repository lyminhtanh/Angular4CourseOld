import { AbstractControl, ValidationErrors, FormGroup } from "@angular/forms";

export class PasswordValidator{
    static oldPwMismatching(control: AbstractControl): Promise<ValidationErrors>{
        return new Promise((resolve, reject) => {
            return setTimeout(()=> {
                if(control.value !== '1234'){
                    return resolve({oldPwMismatching: true});
                } else {
                    return resolve(null);
                }
            })
        })
    }
    static newPwMismatching(control: AbstractControl): Promise<ValidationErrors> {
        return new Promise((resolve, reject) => {
            let newPw = control.get('newPw').value;
            let newPwConfirm = control.get('newPwConfirm').value;
            console.log('newPw: '+ newPw+' | newPwConfirm: '+ newPwConfirm);
            return setTimeout(()=>{
                console.log()
                if(newPw !== newPwConfirm){
                    return resolve({newPwMismatching: true})
                } else{
                    return resolve(null);
                }
            })
        })
    }
}