import con from "mongoose";
const { connect } = con

const connectToDB = async function(){
    connect("mongodb+srv://yokesh:yokesh123@apidev.e8ljl.mongodb.net/todoapp?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

export default connectToDB;