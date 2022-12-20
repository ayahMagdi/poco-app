import React from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer(props) {
  return (
    <footer className={props.light == 'true' ? 'footer light' : 'footer' }>
        <div className='footer__top'>
            <div className='footer__top__logo'>
                    <img src='https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/logo_footer.png' />
            </div>
            <div className='container'>
                <div className='footer__top__desc'>
                    <div className='footer__info footer__address'>
                        <h3>address</h3>
                        <p>570 8th Ave,</p>
                        <p>New York, NY 10018</p>
                        <p>United States</p>
                    </div>
                    <div className='footer__info footer__booktable'>
                       <h3>book a table</h3>
                       <p>Dogfood och Sliders foodtruck.</p>
                       <p>Under Om oss kan ni läsa</p>
                       <p className='phone'>(850) 435-4155</p>
                    </div>
                    <div className='footer__info footer__time'>
                       <h3>opening hours</h3>
                       <p>Monday – Friday: <span>8am – 4pm</span></p>
                       <p>Saturday: <span>9am – 5pm</span></p>
                       <ul className='social__links'>
                        <li><FacebookOutlinedIcon /></li>
                        <li><TwitterIcon /></li>
                        <li><YouTubeIcon /></li>
                        <li><InstagramIcon /></li>
                       </ul>
                    </div>
                    <div className='footer__info footer__subscripe'>
                        <h3>newsletter</h3>
                        <p>Subscribe to the weekly newsletter for all the latest updates</p>
                        <div className='subscripe'>
                            <input type="text" placeholder='your email...' />
                            <button>subscripe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='footer__bottom'>
            <div className='container'>
                <div className='footer__bottom__wrapper'>
                    <div className='footer__left'>
                        <p>Copyright © 2020 <span>pocofood</span> . All Rights Reserved.</p>
                    </div>
                    <div className='footer__right'>
                        <img src='https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/footer_img1.png' />
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer