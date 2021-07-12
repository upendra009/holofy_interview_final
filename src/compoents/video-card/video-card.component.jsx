import React from 'react'
import styles from './video-card.module.scss';

function VideoCardComponent (props) {
    const {dragstart,moveCard,setMove,dragEnd,move} = props;
    return (

    <div draggable="true" className={styles.bottomAlignment}    
    onTouchStart={(e) => setMove ({...move,initialX: e.changedTouches[0].clientX,initialY: e.changedTouches[0].clientY})} onDragStart = {(e)=>dragstart(e)}  
    onTouchMove ={(e) => moveCard(e)}
    onTouchEnd = {(e) => dragEnd(e)}
   >  
      <div  className={styles.item} >
      <video  loop id='videoroot'  width="200" height="300" controls videoMove='false' className={styles.videocontent} >
    <source  src="https://uploads-ssl.webflow.com/5de24ebb83c9d795f2e35d47/60521f0ab39542f70ca04f36_landing vid_5-transcode.mp4" type="video/mp4"></source>
    </video>
          
      </div>
    </div>

    )
}
export default VideoCardComponent;
    