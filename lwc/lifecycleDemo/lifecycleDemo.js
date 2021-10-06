import { LightningElement } from 'lwc';

export default class LifecycleDemo extends LightningElement {
    simpleText;

    constructor(){
        super() //call to the base / super base
    }

    changeHandler(evt){
        this.simpleText = evt.target.value
    }
    connectedCallback(){
        // DOM Inserted but not yet rendered
        // can change the attribute values but cannot manipulate the DOM
        // you can programatically add or remove any element in DOM
        console.log('connected callback invokedd....!');
    }

    renderedCallback(){
        console.log('render callback invoked!');
        // 
    }

    disconnectedCallback(){
        console.log('Disconnected callback invoked!')
    }

}

