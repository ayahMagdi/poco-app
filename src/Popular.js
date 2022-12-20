import { ContactSupportOutlined, LocalLibrarySharp } from '@mui/icons-material';
import React , {useEffect, useState} from 'react';
import dataProducts from './dataProducts';
import Dish from './Dish';
import FinalProducts from './FinalProducts';
import ListHead from './ListHead';

function Popular(props) {
  
  const [type , setType] = useState('pizza')

  const productType = (type) => {
    setType(type)
  }

   const dishesData = dataProducts.filter(function(e){
        return e.type === type
   })


  return (
    <div className='popular__dishes'>
        <div className='container'>
            <ListHead productType={productType} type={type} title={props.title} />
            <FinalProducts arr={dishesData.slice(0 , 8)} hide={props.hide} default={props.default} defaultGrid={props.defaultGrid} />
        </div>
    </div>
  )
}

export default Popular