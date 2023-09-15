const mongoose = require('mongoose')
const chatModel = mongoose.Schema(
    {
        chatName: {
            type: String,
            trim: true
        },
        isGroupChat: {
            type: Boolean,
            default: false
        },
        // users are 2, or more than 2 in group
        users: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User", //reference to user model
        }],
        latestMessage: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message",
        },
        groupAdmin: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }
    },
    {
        timestamps: true,
    }
);

const Chat = mongoose.model("chatModel");
module.exports = Chat;
// chatname
// isGroupchat
// users
// latestmessege
// groupAdmin
