import React,{useState} from 'react'
import VideoCardComponent from './video-card.component'


export default function VideoCard(props) {
    const {videoSource,setVideoSource} =props;
    const [move,setMove] =useState({initialX :0,initialY:0})
    let currentPosX;
    let currentPosY;


    const dragstart = (e) => {
        // e.preventDefault();
        const videoElement = document.getElementById("videoroot");
        videoElement.pause()
       
    }

  
const moveCard = (e) => {
    e.preventDefault()
    if(e.target){
        currentPosX =  e.changedTouches[0].clientX - move.initialX;
        currentPosY =  e.changedTouches[0].clientY - move.initialY;
    }
    e.target.style.transform = 'translate('+currentPosX+'px, '+currentPosY+'px)';
    const videoElement = document.getElementById("videoroot");
    videoElement.pause()
}

   const dragEnd = (e) => {  
     if( e.changedTouches[0].clientY <= 350){
        if( e.changedTouches[0].clientX <= 230){
            setVideoSource({
                ...videoSource,
                type:'first-quarter'
            })
        }
        if( e.changedTouches[0].clientX > 230){
            setVideoSource({
                ...videoSource,
                type:'second-quarter'
            })
        }

     }
     if( e.changedTouches[0].clientY >= 350){
        if( e.changedTouches[0].clientX <= 230){
            setVideoSource({
                ...videoSource,
                type:'third-quarter'
            })
        }
        if( e.changedTouches[0].clientX > 230){
            setVideoSource({
                ...videoSource,
                type:'fourth-quarter'
            })
        }


     }

 

   }

    return (
        <VideoCardComponent 
         dragstart={dragstart}
         moveCard={moveCard}
         dragEnd={dragEnd}
         setMove={setMove}
         move={move}
         setVideoSource={setVideoSource}
         videoSource={videoSource}
         /> 
    );
}

