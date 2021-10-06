import { LightningElement } from 'lwc';

export default class AccountManagerLDSForms extends LightningElement {
    recordId

    successHandler(evt){
        this.recordId= evt.detail.id
        
    }
}