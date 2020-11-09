import React from 'react'
import Story from './Story'
import './StoryReel.css'
function StoryReel() {
    return (
        <div className="storyReel">
            <Story image="https://i.pinimg.com/originals/15/c0/b3/15c0b3f4388c658766b03f0a64d76242.jpg"
                profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTU53EcOIyxE7pOZJBvGHJGbDk39EYxvOhbdw&usqp=CAU"
                title="Dhiren sheth" />
            <Story profileSrc="https://static.jobscan.co/blog/uploads/linkedin-profile-picture-1280x720.jpg"
                image="https://i.pinimg.com/736x/02/b5/10/02b5107cba1f8a4b504b4cc9e0a3ba6e.jpg"
                title="Alina dcruse" />
            <Story profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRUbpubB5AwWPPF8-qL1XeNexMnX0hqS8ImUA&usqp=CAUhttps://i.pinimg.com/originals/2b/d5/bb/2bd5bbc0d02143b85dba04bd945acacd.jpg"
                image="https://i.pinimg.com/originals/2b/d5/bb/2bd5bbc0d02143b85dba04bd945acacd.jpg"
                title="Virat dutta" />
            <Story image="https://i.pinimg.com/736x/84/64/1f/84641fb7f8a8f4a0b4e126c7fe99b067.jpg"
                profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSM1q99ZLLIiDZYf8MAogmyxW8q_Y4wXC127w&usqp=CAU"
                title="Ria Mehta" />
            <Story profileSrc="https://assets.entrepreneur.com/content/3x2/2000/20190603162205-GettyImages-626361926.jpeg?width=700&crop=2:1"
                image="https://i.pinimg.com/originals/a2/43/1a/a2431acacbce3a7115f0815e96f10c4e.jpg"
                title="Sahil Gupta" />
        </div>
    )
}

export default StoryReel
