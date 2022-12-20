import React from 'react';
import dataProducts from './dataProducts';
import Dish from './Dish';

function ListHead({productType ,type , title}) {

       
 let emptyArray = [],
 filterdArray = []
  const dataArray = dataProducts.map(e => {
    emptyArray.push(e.type)
    filterdArray = emptyArray.filter((el , index , arr) => arr.indexOf(el) === index)
  })

const getType = function (e){
const targetLink = e.target.dataset.index;
     productType(listLi[targetLink].props.children)
 }

// listActive 
const listLi = filterdArray.map((e , index) => 
       <li className={`list__item ${e === type ? "active" : ""}`} 
            onClick={getType} key={index} data-index={index}>{e}
       </li>
      )

const  listActive = listLi.filter(function(e){ return e.props.children === type})


  return (
    <div className='popular__dishes__list'>
        <h2 className='list__title'>{title}</h2>
        <ul className='list__items'>
           {listLi}
        </ul>
    </div>
  )
}

export default ListHead