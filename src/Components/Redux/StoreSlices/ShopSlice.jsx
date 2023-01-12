import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Productes:[
        {id:0,label:'White Nike Shose',price:1500,img:'images/WhiteShose.jpg'},
        {id:1,label:'Black Jorden Shose',price:1720,img:'images/BlackShose.jpg'},
        {id:2,label:'Yellow Normal Shose',price:500,img:'images/YellowShose.jpg'},
        {id:3,label:'Green Nike AIR Shose',price:1340,img:'images/GreenShose.jpg'},
        {id:4,label:'Aqua Nike Shose',price:3070,img:'images/AquaShose.jpg'},
        {id:5,label:'Lime Normal Nike Shose',price:860,img:'images/LimeShose.jpg'},
        {id:6,label:'Grey Jorden Shose',price:2899,img:'images/GreyShose.jpg'},
        {id:7,label:'Blue Nike Shose',price:1480,img:'images/BlueShose.jpg'},
        {id:8,label:'Maginta Bascket Shose',price:1980,img:'images/MagintaShose.jpg'},
        {id:9,label:'Pink Bascket Shose',price:2322,img:'images/PinkShose.jpg'},
        {id:10,label:'Purpel Bascket Shose',price:1679,img:'images/PurpleShose.jpg'},
        {id:11,label:'Red Bascket Shose',price:3210,img:'images/RedShose.jpg'},
    ]
}

export const ShopSlice=createSlice({
    name:'shop',
    initialState,
    reducers:{

    }
});

export default ShopSlice.reducer