import React from 'react'

function MenuList(props) {
  return (
     <div className={props.greenBg == 'true' ? 'menu__list green__bg' : 'menu__list'}>
        <div className='container'>
          <div className='menu__body'>
              <div className='menu__list__item'>
                  <div className='menu__image'>
                  <img className='menu__bg' src={props.img}/>
                  <img className='menu__img' src="https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/09/category-11.png" />
                  </div>
                  <h4 className='item__title'>combo</h4>
              </div>
              <div className='menu__list__item'>
              <div className='menu__image'>
              <img className='menu__bg' src={props.img} />
              <img className='menu__img' src="https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/09/category-22.png" />
              </div>
              <h4 className='item__title'>kids menus</h4>
              </div>
              <div className='menu__list__item'>
              <div className='menu__image'>
              <img className='menu__bg' src={props.img} />
              <img className='menu__img' src="https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/category3.png" />
              </div>
              <h4 className='item__title'>pizza</h4>
              </div>
              <div className='menu__list__item'>
              <div className='menu__image'>
              <img className='menu__bg' src={props.img}/>
              <img className='menu__img' src="https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/09/category-44.png" />
              </div>
              <h4 className='item__title'>box meals</h4>
              </div>
              <div className='menu__list__item'>
              <div className='menu__image'>
              <img className='menu__bg' src={props.img}/>
              <img className='menu__img' src="https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/category5.png" />
              </div>
              <h4 className='item__title'>burger</h4>
              </div>
              <div className='menu__list__item'>
              <div className='menu__image'>
              <img className='menu__bg' src={props.img}/>
              <img className='menu__img' src="https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/09/category-33.png" />
              </div>
              <h4 className='item__title'>chicken</h4>
              </div>
              <div className='menu__list__item'>
                  <div className='menu__image'>
                    <img className='menu__bg' src={props.img}/>
                    <img className='menu__img' src="https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/category7.png" />
                  </div>
                  <h4 className='item__title'>sauces</h4>
              </div>
              <div className='menu__list__item'>
                  <div className='menu__image'>
                    <img className='menu__bg' src={props.img}/>
                    <img className='menu__img' src="https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/09/category-55.png" />
                  </div>
                  <h4 className='item__title'>drinks</h4>
              </div>
           </div>
        </div>
     </div>
  )
}

export default MenuList