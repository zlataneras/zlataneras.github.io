import './PhotoZoom.scss';
import Slider from '../slider/Slider';

const PhotoZoom=({images})=>{
    window.addEventListener('click',e=>{
        if(e.target.className==='zoom_podloja' || e.target.className==='closeSlider' ){
            document.querySelector('.zoom').style.display='none';
        }
    })
    return(
        <div className="zoom">
            <div className="zoom_podloja"></div>
            <div className="zoom_slider">
            <div className="slider_container">
            <span className='closeSlider'>&#10005;</span>
                <button id="prev_zoom" className='prev controller'><span>&#8249;</span></button>
                <button id="next_zoom" className='next controller'><span>&#8250;</span></button>
                <Slider id={'zoom'} images={images}/>
            </div>
            </div>
        </div>
    )
}

export default PhotoZoom;