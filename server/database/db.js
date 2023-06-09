
import mongoose from 'mongoose';


const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-hqbbtlc-shard-00-00.ty9sk4r.mongodb.net:27017,ac-hqbbtlc-shard-00-01.ty9sk4r.mongodb.net:27017,ac-hqbbtlc-shard-00-02.ty9sk4r.mongodb.net:27017/ECOMMERCE?ssl=true&replicaSet=atlas-xtkdej-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true});
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;