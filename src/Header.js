import React,{useState} from 'react';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import ElectricMopedOutlinedIcon from '@mui/icons-material/ElectricMopedOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link , NavLink} from 'react-router-dom';
import { useStateValue } from './stateProvider';
import SideCart from './SideCart';
import Sign from './Sign';
import Search from './Search';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import StoreIcon from '@mui/icons-material/Store';
import CloseIcon from '@mui/icons-material/Close';

function Header(props) {
  const [{basket , wishlist}, dispatch] = useStateValue()
  const [show , setShow] = useState(false)
  const [search , setSearch] = useState(true);
  const [nav , setNav] = useState(false)
  const [homeDropdown , setHomeDropdown] = useState(false)
  const [blogDropdown , setBlogDropdown] = useState(false)
  const [PageDropdown , setPageDropdown] = useState(false)
  const [position , setPosition] = useState(false)

  const handleClick =  (e) => {
    e.stopPropagation();
  }
  const navFunc = (e)=>{
    setNav(!nav)
    setHomeDropdown(false)
    setBlogDropdown(false)
    setPageDropdown(false);
    // e.stopPropagation();
  }

  const currentScroll = () => {
    const windowscroll = window.scrollY;
    if(windowscroll >= 100){
      setPosition(true)
    }else{
      setPosition(false)
    }
  }
  
  window.addEventListener('scroll' , currentScroll)


  return (
    <div className={`${props.blackBg === 'true'? 'header blackbg' : 'header'} ${position === true ? 'fixedHead' : ''}`}>
     <div className='container'>
        <div className='header__wrapper'>
          <div className='menuicon' onClick={navFunc}>
            <MenuIcon />
          </div>
          <Link to="/">
          <img className='header__wrapper__logo' alt='logo'
                src='https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/10/logo_svg.svg'
            />
          </Link>
          <nav className={`${nav? 'navbar navbar__side' : 'navbar'}`} onClick={navFunc} >
            <div className='navbar__content' onClick={handleClick}>
              <div className='nav__close'>
                <CloseIcon onClick={navFunc} />
              </div>
              <ul className={props.blackBg == 'true'? 'navbar__links text__light' : 'navbar__links'}>
                  <li>
                     <NavLink to='/' activeClassName='active' end>
                      home
                      </NavLink>
                      <KeyboardArrowDownOutlinedIcon onClick={() => setHomeDropdown(!homeDropdown)} className={homeDropdown ? 'active-icon' : ''} />
                      <ul className={`${props.blackBg == 'true' ? 'drobdown blackbg' : 'drobdown'} ${homeDropdown && nav ? 'dropdownShow' : ''}`}>
                          <NavLink to='/' activeClassName='active' end><li className='active'>home 1</li></NavLink>
                          <NavLink to='/home-2' activeClassName='active'><li>home 2</li></NavLink>
                          <NavLink to='/home-3' activeClassName='active'><li>home 3</li></NavLink>
                          <NavLink to='/home-4' activeClassName='active'><li>home 4</li></NavLink>
                      </ul>
                  </li>
                  <li>
                    <NavLink to='/menu' activeClassName='active'>
                      menu
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to='/about' activeClassName='active'>
                      about
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to='/shop' activeClassName='active'>
                      shop
                    </NavLink>
                  </li>
                  <li>
                     <NavLink to='/blog-1' activeClassName='active'>
                     blog 
                     </NavLink>
                     <KeyboardArrowDownOutlinedIcon onClick={() => setBlogDropdown(!blogDropdown)} className={blogDropdown ? 'active-icon' : ''}  />
                      <ul className={`${props.blackBg == 'true' ? 'drobdown blackbg' : 'drobdown'} ${blogDropdown && nav ? 'dropdownShow' : ''}`}>
                        <NavLink to='/blog-1' activeClassName='active'>
                          <li>blog list</li>
                        </NavLink>
                        <NavLink to='/blog-2' activeClassName='active'>
                          <li>blog grid</li>
                        </NavLink>
                      </ul>
                  </li>
                  <li>
                    <NavLink to='/faq' activeClassName='active'>
                      page 
                    </NavLink>
                    <KeyboardArrowDownOutlinedIcon onClick={() => setPageDropdown(!PageDropdown)} className={PageDropdown ? 'active-icon' : ''}   />
                    <ul className={`${props.blackBg == 'true' ? 'drobdown blackbg' : 'drobdown'} ${PageDropdown && nav ? 'dropdownShow' : ''}`}>
                      <NavLink to='/faq' activeClassName='active'><li>faq</li></NavLink>
                      <NavLink to='/error' activeClassName='active'><li>error 404</li></NavLink>
                      <NavLink to='/team' activeClassName='active'><li>our team</li></NavLink>
                      <NavLink to='/history' activeClassName='active'><li>our history</li></NavLink>
                      </ul>
                  </li>
                  <li>
                   <NavLink to='/contact' activeClassName='active'>
                    contact
                   </NavLink>
                  </li>
              </ul>
            </div>
          </nav>
          <div className='header__info'>
            <div className='header__info__left'>
               <ElectricMopedOutlinedIcon />
               <p className={props.blackBg == 'true' ? 'text text__light' : 'text'}>
                 <span>Call and Order in</span>
                 +1 718-904-4450
               </p>
            </div>
            <div className={props.blackBg == 'true'? 'header__info__right text__light' : 'header__info__right'}>
               <div className='header__option header__shop'>
                <Link to='/shop'>
                 <StoreIcon />
                 <p>shop</p>
                 </Link>
               </div>
               <div className='header__option search__icon' onClick={() => setSearch(!search)}>
                  <SearchOutlinedIcon />
                  <p>search</p>
                  <Search search={search} setSearch={() => setSearch(!search)} event={handleClick} />
               </div>
               <div className='header__option sign__in'>
                  <PersonIcon />
                  <p>my account</p>
                  <Sign blackBg='true' />
               </div>
               
               <div className='header__option'>
               <Link to='/wishlist'>
                  <FavoriteIcon />
                  <p>wishlist</p>
                  <span className='header__favourit__count'>{wishlist.length}</span>
               </Link>
               </div>
                <div className='header__option' onClick={() => setShow(!show)}>
                  <ShoppingBasketIcon />
                  <p>cart</p>
                  <span className='header__basket__count'>{basket.length}</span>
                </div>
            </div>
          </div>
          <div className='phoneicon'>
            <AddIcCallIcon />
          </div>
        </div>
      </div>
      <SideCart show={show} setShow={() => setShow(!show)} handleClick={handleClick}/>
    </div>
  )
}

export default Header