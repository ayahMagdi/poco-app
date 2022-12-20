import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import News from './News';

export default function PaginatedItems(props) {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 9;

  
  useEffect(() => {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(props.data.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(props.data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage , props.data]);
    
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % props.data.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div>
            {currentItems.map(e => 
                   <News
                        show={props.show}
                        key={e.id}
                        id={e.id}
                        img={e.img} 
                        title={e.title}
                        full= {props.full}
                        date={e.date}
                        description={props.cliptext ? props.clip(e.description , 100) : e.description }
                        name={e.name}
                />
            )}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
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