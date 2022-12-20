import React,{useState} from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

function AboutVideo() {

 const [show , setShow] = useState(false) 

  return (
    <div className='about__video'>
        <div className='overlay'></div>
        <div className='video__content'>
            <div className='video__button' onClick={() => setShow(!show)}>
               <PlayArrowIcon />
               <div className={show ? 'video__container show' : 'video__container'} onClick={() => setShow(!show) }>
                  <iframe width="850" height="500" src="https://www.youtube.com/embed/dLC54mz--Dk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
               </div>
            </div>
            <h2 className='title'>Make the thing Anything is Possible</h2>
            <p className='description'>Enjoy our luscious dishes wherever you want</p>
            <button>order now</button>
        </div>
    </div>
  )
}

export default AboutVideo