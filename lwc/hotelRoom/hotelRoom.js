import { api, LightningElement } from 'lwc';

export default class HotelRoom extends LightningElement {


    @api
    hotelRoomInfo ={roomName:'A-101',capacity:4};

    @api
    showRoomInfo=false

}