import { wire, LightningElement } from 'lwc';
import { registerListener,unregisterListener } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

export default class SelectedHotelRoom extends LightningElement {
    selectedHotelRoom={roomName:'default',capacity:10}

    @wire (CurrentPageReference) pageRef
    connectedCallback(){
        registerListener('pubsubtileclick',this.hotelRoomSelectHandler,this)

    }

    hotelRoomSelectHandler(payload){
        this.selectedHotelRoom=payload
    }
    disconnectedCallback(){
        unregisterListener(this)
    }
}