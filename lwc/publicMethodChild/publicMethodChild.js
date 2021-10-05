import {
    LightningElement,
    api
} from 'lwc';

export default class PublicMethodChild extends LightningElement {
    options = [{
            label: 'red marker',
            value: 'red'
        },
        {
            label: 'blue marker',
            value: 'blue'
        },
        {
            label: 'green marker',
            value: 'green'
        },
        {
            label: 'black marker',
            value: 'black'
        }
    ]

    value=['red']

    @api
    selectCheckBox(checkboxValue){
        // arrays find method

        const selectCheckBox= this.options.find(cb=>{
            return cb.value === checkboxValue
        })

        if(selectCheckBox){
            this.value = selectCheckBox.value
            return "marker selected!"
        }

        return 'oops this ,marker not present'

    }
}