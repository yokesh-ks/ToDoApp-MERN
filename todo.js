import yok from "mongoose";
const { Schema, model } = yok;
const appSchema = new Schema(
    {
    description: {
        type: String,
        required: [true, 'Please Fill the description'],
        maxlength: 500,
    },
    }
)

const appModel = model("todo", appSchema)

export default appModel;