import React from 'react';
import GridViewIcon from '@mui/icons-material/GridView';
import GridOnIcon from '@mui/icons-material/GridOn';

function ShopSorting(props) {

  return (
    <div className='shopsort'>
        <div className='stylingprods'>
            <GridOnIcon className={props.activeTwo && 'active'} onClick={props.handelClick}  />
            <GridViewIcon className={props.activeOne && 'active'} onClick={props.handelClick} />
        </div>
        <div className='sortprods'>
            <select onChange={props.handelValue}>
                <option value='default'>Default Sorting</option>
                <option value='rating'>Sort by average rating</option>
                <option value='latest'>Sort by latest</option>
                <option value='low'>Sort by price: low to high</option>
                <option value='high'>Sort by price: high to low</option>
            </select>
        </div>
    </div>
  )
}

export default ShopSorting