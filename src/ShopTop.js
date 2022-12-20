import React from 'react'
import ShopResultsNumber from './ShopResultsNumber'
import ShopSorting from './ShopSorting';
import TuneIcon from '@mui/icons-material/Tune';

function ShopTop(props) {

  return (
    <div className='shoptop'>
        <div className='shopfiltericon'><TuneIcon /></div>
        <ShopResultsNumber start={props.start} end={props.end} all={props.all} />
        <ShopSorting handelValue={props.handelValue} 
                     activeOne={props.activeOne} 
                     activeTwo={props.activeTwo}
                     handelClick={props.handelClick} 
        />
    </div>
  )
}

export default ShopTop