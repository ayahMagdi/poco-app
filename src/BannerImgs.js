import React from 'react'

function BannerImgs() {
  return (
    <div className='banner__imgs'>
        <div className='banner__item'>
            <div className='banner__bg bg__one'></div>
            <div className='banner__overlay'></div>
        </div>
        <div className='banner__item'>
        <div className='banner__bg bg__two'></div>
            <div className='banner__overlay'></div>
        </div>
        <div className='banner__item'>
            <div className='banner__bg bg__three'></div>
            <div className='banner__overlay'></div>
        </div>
        <div className='banner__item'>
            <div className='banner__bg bg__four'></div>
            <div className='banner__overlay'></div>
        </div>
    </div>
  )
}

export default BannerImgs