import { api, LightningElement } from 'lwc';

export default class Todoitem extends LightningElement {

    @api
    showTodo =false

    @api
    itemName = 'play music'
}