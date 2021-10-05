import { api, LightningElement } from 'lwc';

export default class HotelRoom extends LightningElement {


    @api
    hotelRoomInfo ={roomName:'A-101',capacity:4};

    @api
    showRoomInfo=false

    tileClickHandler(){
        // create and raise components 

        const tileclickEvent = new CustomEvent('tileclick',{detail:this.hotelRoomInfo,bubbles:true})

        this.dispatchEvent(tileclickEvent)
    }
}