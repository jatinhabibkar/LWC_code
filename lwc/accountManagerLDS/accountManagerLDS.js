import { LightningElement, wire } from 'lwc';
import { createRecord, getRecord } from 'lightning/uiRecordApi';
const fieldArray=[recaccountName,recaccountPhone,recaccountWebsite]
export default class AccountManagerLDS extends LightningElement {
    accountName
    accountPhone
    accountWebsite

    recordId

    accountNameChangeHandler(evt){
        this.accountName =evt.target.value
    }

    accountPhoneChangeHandler(evt){
        this.accountPhone =evt.target.value
    }

    accountWebsiteChangeHandler(evt){
        this.accountWebsite =evt.target.value
    }

    createaccount(){
        const fields={'Name':this.accountName,'Phone':this.accountPhone,'Website':this.accountWebsite}
        const recordInput={apiName:'Account',fields}

        createRecord(recordInput).then(response=>{
            console.log('Account created',response.id);
            this.recordId=response.id
        }).catch(error=>{
            console.log('error in creating a record',error.body.message);
        })
    }

    // for view record

    @wire(getRecord,{recordId:'$recordId',fields:fieldArray})
    accountRecord

    get retAccountName(){
        if(this.accountRecord.data)
        return this.accountRecord.data.fields.Name.value

        return undefined
    }

    get retAccountPhone(){
        if(this.accountRecord.data)
        return this.accountRecord.data.fields.Phone.value

        return undefined
    }
    get retAccountWebsite(){
        if(this.accountRecord.data)
        return this.accountRecord.data.fields.Website.value

        return undefined
    }

    

}