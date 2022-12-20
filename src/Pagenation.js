import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import Dish from './Dish';

export default function PaginatedItems(props) {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 12;

  
  useEffect(() => {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(props.arr.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(props.arr.length / itemsPerPage));
      props.setEnd(endOffset)
    }, [itemOffset, itemsPerPage , props.arr]);
    
    props.setStart(itemOffset + 1)
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % props.arr.length;
    setItemOffset(newOffset);
  };


  const pagesNumber = props.arr.length <= itemsPerPage ? 1 
                      : props.arr.length > itemsPerPage && props.arr.length < 24 ? 2
                      : 5

  return (
    <>
      <div className={props.defaultGrid == 'true' ? 'popular__dishes__products' : 'popular__dishes__products alt__grid'}>
            {currentItems.map(el => 
                <Dish 
                    img={el.img}
                    hasDiscount={el.hasDiscount} 
                    title={el.title}
                    description={el.description}
                    oldPrice ={el.oldPrice}
                    price ={el.price}
                    key = {el.id}
                    id={el.id}
                    rating={el.rate}
                    default={props.default}
                />
            )}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={pagesNumber}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName='pagenation'
        pageClassName='pagenation-child'
        activeLinkClassName='active'
        previousLinkClassName='previous'
        nextLinkClassName='next'
      />
    </>
  );
}