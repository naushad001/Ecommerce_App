import mongoose from 'mongoose';
import colors from "colors";

const apps= async () =>{  
    try{
        const conn = await mongoose.connect('mongodb+srv://naushad:naushad@cluster0.afq5pcw.mongodb.net/Ecommerce');
        console.log(`conneted To MongoDB Database ${conn.connection.host}`.bgMagenta.white);
    }
 catch (error){
        console.log(`Error in Mongodb ${error}`.bgRed.white)
     }
}

export default apps;