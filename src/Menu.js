import React from 'react';
import MenuList from './MenuList';

function Menu() {
  return (
    <div className='menu'>
            <div className='menu__header'>
                <button className='menu__btn button__btn'>menu</button>
            </div>
            <MenuList greenBg='false' img='./bg.png' />
    </div>
  )
}

export default Menu