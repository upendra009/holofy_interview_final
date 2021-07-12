import React ,{useState} from 'react'
import HolofyComponent from '../holofy/holofy.component.jsx'
import PropTypes from 'prop-types';


export default function Holofy() {
    const [videoSource ,setVideoSource] = useState({
        src:"https://mps.sgp1.digitaloceanspaces.com/prod/videos/courses/6251566649591.mp4",
        type: "first-quarter",
        status:false,
    })
   
    const drop = (e,type) => {
        e.preventDefault();
        const currentQuarter = type;
        console.log(currentQuarter,'asd')
        setVideoSource({ 
            ...videoSource,
            type:currentQuarter
         })
    }
   
    const dragover = (e) => {
		e.preventDefault();
	}
   
     
   
        return (
        
            < HolofyComponent
             videoSource={videoSource}
             setVideoSource={setVideoSource}
             drop={drop}
             dragover={dragover}            
             />
             
       
    )
}
Holofy.propTypes = {
	setVideoSource: PropTypes.func
}