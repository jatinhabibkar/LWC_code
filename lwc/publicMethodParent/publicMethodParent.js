import { LightningElement } from 'lwc';

export default class PublicMethodParent extends LightningElement {
    value='red'

    onInputChangeHandler(evt){
        this.value = evt.target.value
    }

    checkBoxSelectHandler(){
        const childComp = this.template.querySelector('c-public-method-child')
        const msg= childComp.selectCheckBox(this.value)
        console.log("message : "+msg);
    }
}