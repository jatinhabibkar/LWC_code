import { wire,api, LightningElement } from 'lwc';
import { fireEvent } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';


export default class HotelRoom extends LightningElement {


    @api
    hotelRoomInfo ={roomName:'A-101',capacity:4};

    @api
    showRoomInfo=false

    @wire(CurrentPageReference) pageReference;

    tileClickHandler(){
        // create and raise components 

        const tileclickEvent = new CustomEvent('tileclick',{detail:this.hotelRoomInfo,bubbles:true})
        fireEvent(this.pageReference,'pubsubtileclick',this.hotelRoomInfo)

        this.dispatchEvent(tileclickEvent)

    }
}