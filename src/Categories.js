import React,{useState} from 'react';
import LunchDiningOutlinedIcon from '@mui/icons-material/LunchDiningOutlined';
import LocalPizzaOutlinedIcon from '@mui/icons-material/LocalPizzaOutlined';
import RamenDiningOutlinedIcon from '@mui/icons-material/RamenDiningOutlined';
import NightlifeOutlinedIcon from '@mui/icons-material/NightlifeOutlined';
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined';

function Categories(props) {

//  const [ToggleActive , setToggleActive] = useState('shop')

  const handelClickType = (e) => {
    const toggle = e.target.dataset.type;
    props.setFilterProducts(toggle)
    // const allEle = document.querySelectorAll('.category')
    // const filterEle = Array.from(allEle).filter(e => e.dataset.type == target)
    // console.log(filterEle)
}  

  return (
    <div className='categories'>
        <h3 className='title'>categories</h3>
        <div className='categories__content'>
            <div className='category' data-type='burger' onClick={handelClickType}>
                <p data-type='burger'><LunchDiningOutlinedIcon data-type='burger' />burgers</p>
                <span data-type='burger' >({props.burger})</span>
            </div>
            <div className='category' data-type='drinks' onClick={handelClickType}>
                <p data-type='drinks'><NightlifeOutlinedIcon data-type='drinks' />drinks</p>
                <span data-type='drinks'>({props.drink})</span>
            </div>
            <div className='category' data-type='desert' onClick={handelClickType}>
                <p data-type='desert'><CakeOutlinedIcon data-type='desert' />desert</p>
                <span data-type='desert'>({props.desert})</span>
            </div>
            <div className='category' data-type='pasta' onClick={handelClickType}>
                <p data-type='pasta'><RamenDiningOutlinedIcon data-type='pasta' />pasta</p>
                <span data-type='pasta'>({props.pasta})</span>
            </div>
            <div className='category' data-type='pizza' onClick={handelClickType}>
                <p data-type='pizza'><LocalPizzaOutlinedIcon data-type='pizza' />pizza</p>
                <span data-type='pizza'>({props.pizza})</span>
            </div>
            <div className='category' data-type='uncategorized' onClick={handelClickType}>
                <p data-type='uncategorized'><LunchDiningOutlinedIcon data-type='uncategorized' />uncategorized</p>
                <span data-type='uncategorized'>(0)</span>
            </div>
        </div>
    </div>
  )
}

export default Categories