import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import './MessageSender.css';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from './StateProvider';
import db from './firebase';
import firebase from "firebase";

function MessageSender() {
    const [{ user }, dispatch] = useStateValue();
    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl,
        })
        setInput("");
        setImageUrl("");
    }
    return (
        <div className="messageSender">
            <div className="messageSender_top">
                <Avatar src={user.photoURL} />
                <form>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="messageSender_input"
                        placeholder={`what is going on your mind , ${user.displayName}`} />
                    <input
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        placeholder="image URL (optional)" />
                    <button onClick={handleSubmit} type="submit">
                        Hiddne Submit
                    </button>
                </form>
            </div>
            <br />
            <div className="messageSender_bottom">
                <div className="messageSender_option">
                    <VideoCallIcon style={{ color: "red" }} />
                    <h3>Live Video</h3>
                </div>

                <div className="messageSender_option">
                    <PhotoLibraryIcon style={{ color: "green" }} />
                    <h3>Photo/Video</h3>
                </div>

                <div className="messageSender_option">
                    <InsertEmoticonIcon style={{ color: "orange" }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender 
