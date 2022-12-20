import React, {useState} from 'react'
import FinalProducts from './FinalProducts'
import ShopTop from './ShopTop';
import dataProducts from './dataProducts';
import ShopFilter from './ShopFilter';
import Pagenation from './Pagenation';
import TuneIcon from '@mui/icons-material/Tune';

function ShopContainer({setMainTitle}) {

  const [filterProducts , setFilterProducts] = useState('shop');
  const [sortProducts , setSortProducts] = useState('default');

  const [activeOne , setActiveOne] = useState(false)
  const [activeTwo , setActiveTwo] = useState(true)

  const [start , setStart] = useState(0)
  const [end , setEnd] = useState(0)

  const getStart = (n) => setStart(n)
  const getEnd = (n) => setEnd(n)
  
  const handelValue = (e) => {
    const val = e.target.value
    // setValue(val)
    setSortProducts(val)
  }

  const burger = dataProducts.filter(e => e.type == 'burger')
  const pasta = dataProducts.filter(e => e.type == 'pasta')
  const pizza = dataProducts.filter(e => e.type == 'pizza')
  const drink = dataProducts.filter(e => e.type == 'drinks')
  const desert = dataProducts.filter(e => e.type == 'desert')
  
  // console.log(filterProducts)


  const handelFilter = dataProducts.filter(function(e) {
    return filterProducts == 'shop' ? dataProducts : filterProducts == e.type
  })

  const handelSort = 
        sortProducts == 'low' ? handelFilter.sort((a,b) => a.price - b.price) 
        : sortProducts == 'high' ? handelFilter.sort((a,b) => b.price - a.price)
        : sortProducts == 'rating' ? handelFilter.sort((a,b) => b.rate - a.rate)
        : sortProducts == 'latest' ? handelFilter.sort((a,b) => b.id - a.id)
        : handelFilter
  
  const handelClick = () => {
    setActiveOne(() => !activeOne)
    setActiveTwo(() => !activeTwo)
  }

  setMainTitle(filterProducts)

  return (
    <div className='shopcontainer'>
        <div className='container'>
           <div className='shopcontainer__wrapper'>
              <div className='shopcontainer__left'>
                  <ShopTop handelValue={handelValue} 
                            activeOne={activeOne} 
                            activeTwo={activeTwo} 
                            handelClick={handelClick} 
                            all={handelSort.length}
                            start={start}
                            end={end}
                  />
                  <Pagenation arr={handelSort} 
                              setStart={setStart}
                              setEnd={setEnd}
                              hide='true' 
                              default={activeOne ? 'false' : 'true'} 
                              defaultGrid={activeOne ? 'false' : 'true'} />
                  {/* <FinalProducts arr={handelSort} 
                                  hide='true' 
                                  default={activeOne ? 'false' : 'true'} 
                                 defaultGrid={activeOne ? 'false' : 'true'} 
                  /> */}
              </div>
              <div className='shopcontainer__right'>
                  <ShopFilter 
                      setFilterProducts={setFilterProducts} 
                      burger={burger.length}
                      drink={drink.length}
                      pizza={pizza.length}
                      pasta={pasta.length}
                      desert={desert.length}
                  />
              </div>
           </div>
        </div>
    </div>
  )
}

export default ShopContainer