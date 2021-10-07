import { LightningElement } from 'lwc';

export default class AccountManagerLDSForms extends LightningElement {
    recordId='0015g00000TBV6HAAX';

    successHandler(evt){
        this.recordId= evt.detail.id
        
    }
}