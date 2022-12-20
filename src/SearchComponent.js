import React from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function SearchComponent() {
  return (
    <div className='searchcomponent'>
            <input type="text" placeholder="search products..." />
            <span><SearchOutlinedIcon /></span>
    </div>
  )
}

export default SearchComponent