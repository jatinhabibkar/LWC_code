import { LightningElement } from 'lwc';

export default class HotelRooms extends LightningElement {
    
    selectedHotelRoom
    constructor(){
        super()
        this.selectedHotelRoom={}
        this.hotelRoomsInfo=[
            {roomName:'A-101',capacity:4},
            {roomName:'A-102',capacity:3},
            {roomName:'A-103',capacity:2},
            {roomName:'A-104',capacity:5},
        ]
    }

    onTileClickHandler(evt){
        console.log('title clicked !');
        console.log(evt.detail);
        this.selectedHotelRoom = evt.detail
    }
}