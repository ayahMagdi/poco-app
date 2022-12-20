import React from 'react';
import dataBlog from './dataBlog';
import News from './News';

function BlogRecent() {

 const full = false

 function clip(str , n){
     return str?.length > n ? `${str.substr(0 , n-1)} ...` : str;
 }

  return (
    <div className='blogrecent'>
        <h3 className='title'>recent posts</h3>
        <div className='blogrecent__wrapper'>
         {dataBlog.slice(0,3).map(e => 
              <News img={e.img} 
                    title={clip(e.title , 50)}
                    full= {full}
                    date={e.date}
                    description={e.description}
                    name={e.name}
                    key={e.id}
                    show={full}
              />
            )}
        </div>
    </div>
  )
}

export default BlogRecent