import { LightningElement } from 'lwc';

export default class LifecycleDemoParent extends LightningElement {
    show

    constructor(){
        super()
        console.log('parent component constructor invoked!');
        //open connection
        // acquire Resources
        this.show=false
    }

    handleChange(evt){
        this.show=evt.detail.checked
    }

    connectedCallback(){
        console.log('Parent components connected  callback invoked!' );
    }

    renderedCallback(){
        console.log('Parent components connected  rendercallback invoked!' );

    }

    disconnectedCallback(){
        console.log('Parent components disconnected  connectedcallback invoked!');
    }


    errorCallback(error,stack){
        // it capture errors that may happen in all child components lifecycle hooks
        // error - javascript native error object
        // stack - argument string
        throw error
    }


}