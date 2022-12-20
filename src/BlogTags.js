import React from 'react'

function BlogTags() {
  return (
    <div className='blogtags'>
        <h3 className='title'>Popular tags</h3>
        <div className='blogtags__wrapper'>
            <div className='tag'>
                <span data-tag='beer'>beer</span>
                <span data-tag='burger'>burgers</span>
            </div>
            <div className='tag'>
                <span data-tag='potatoes'>potatoes</span>
                <span data-tag='salsa'>salsa verde</span>
            </div>
            <div className='tag'>
                <span data-tag='pizza'>pizza</span>
                <span data-tag='cheese'>cheese balls</span>
            </div>
            <div className='tag'>
                <span data-tag='food'>fast food</span>
                <span data-tag='eggs'>boild eggs</span>
            </div>
        </div>
    </div>
  )
}

export default BlogTags