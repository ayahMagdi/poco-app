import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import SearchComponent from './SearchComponent';


function Search(props) {
  return (
    <div className={props.search ? "search__content" : 'search__content show'} onClick={props.event}>
        <div className='close' onClick={props.setSearch}>
                <CloseIcon />
        </div>
        <div className='search__input'>
            <SearchComponent />
        </div>
    </div>
  )
}

export default Search