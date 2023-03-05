import { useEffect } from 'react';

import PhotoZoom from '../photoZoom/PhotoZoom';
import Slider from '../slider/Slider';
import './PhotoAlbum.scss';



const PhotoAlbum=({images,id})=>{

    useEffect(()=>{
        window.addEventListener('click',e=>{
            if(e.target.className==='img_displayer'){
                document.querySelector('.zoom').style.display='block';
            }
        })

    },[])
    

    return(
        <div className="album">
            <PhotoZoom images={images} />
            <div className="slider_container">
                <button id={`prev_${id}`} className='prev  controller' ><span>&#8249;</span></button>
                <button id={`next_${id}`} className='next controller'><span>&#8250;</span></button>
                <Slider id={id} images={images}/>
            </div>
        </div>
    )
}


export default PhotoAlbum;