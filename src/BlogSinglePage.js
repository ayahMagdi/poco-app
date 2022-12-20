import React from 'react';
import { useParams , Link } from 'react-router-dom';
import Address from './address/Address';
import Header from './Header';
import SectionTop from './SectionTop';
import BlogSingleContent from './BlogSingleContent';
import dataBlog from './dataBlog';
import Footer from './Footer';

function BlogSinglePage() {

 const {blogTitle} = useParams();
 const ourblog = dataBlog.find(e => e.title == blogTitle)
 const currentPost = dataBlog.indexOf(ourblog)

 const show = true;
 const full = true;


 const getPrevBlog = ourblog.id == 1 ? dataBlog[dataBlog.length - 1] 
                     : dataBlog[currentPost - 1]
 const getNextBlog = ourblog.id == dataBlog.length ? dataBlog[0] 
                     : dataBlog[currentPost + 1]

 console.log(ourblog.id)
//  console.log(getPrevPost)

  return (
    <div className='blogsinglepage'>
        <Address />
        <Header />
        <SectionTop title={ourblog.title} />
        <BlogSingleContent 
                      img={ourblog.img}
                      title={ourblog.title}
                      description={ourblog.description}
                      name={ourblog.name}
                      show={show}
                      date={ourblog.date}
                      id={ourblog.id}
                      moreInfo={ourblog.moreInfo}
                      thirdP={ourblog.thirdP}
                      quote={ourblog.quote}
                      fourP={ourblog.fourP}
                      full={full} 
                      prevtitle={getPrevBlog.title}
                      nexttitle={getNextBlog.title}
        />
        <Footer />
    </div>
  )
}

export default BlogSinglePage