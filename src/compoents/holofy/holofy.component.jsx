import React from 'react'
import styles from './holofy.module.scss'
import VideoCard from '../video-card/video-card.container'



export default function HolofyComponent(props) {
    const {videoSource,setVideoSource,drop, dragover} =props

    return (


      <React.Fragment> 
       <div className={styles.mainScreen}>
            <div  className={styles.Quarter}  onDragOver={(e) => dragover(e) } onDrop={(e) => drop(e,'first-quarter')}    > 
            {videoSource.type ==="first-quarter" ? <VideoCard videoSource={videoSource}
             setVideoSource={setVideoSource} /> : null}
            </div>
            <div  className={styles.Quarter}  onDragOver={(e) => dragover(e)} onDrop={(e) => drop(e,'second-quarter')}  >  
              { videoSource.type ==="second-quarter" ? <VideoCard   videoSource={videoSource}
             setVideoSource={setVideoSource}/> : null} </div>
            <div className={styles.Quarter}  onDragOver={(e) => dragover(e) }  onDrop={(e) => drop(e,'third-quarter')} >
            { videoSource.type ==="third-quarter" ? <VideoCard   videoSource={videoSource}
             setVideoSource={setVideoSource}/> : null}
            </div>
            <div className={styles.Quarter} onDragOver={(e) => dragover(e) } onDrop={(e) => drop(e,'fourth-quarter')}  >
            { videoSource.type ==="fourth-quarter" ? <VideoCard   videoSource={videoSource}
             setVideoSource={setVideoSource}/> : null}
            </div>
            </div>
    </React.Fragment>
 
         
    )
}
