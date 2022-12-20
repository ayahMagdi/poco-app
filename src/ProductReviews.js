import React, {useState} from 'react';
import Form from './Form';
import Comments from './Comments';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

function ProductReviews({classes , getLength}) {

    const [review , setReview] = useState({message: '' , userName: '' , email: '' , rating: 0})

    function handelChange(event){
       setReview(prevData => {
           return {
               ...prevData, 
               [event.target.name] : event.target.value
           }
       })
    }

    const [comments , setComments] = useState([])

    const [current , setCurrent] = useState(0)
    const [hover , setHover] = useState(undefined);

    const submit = (event) => {
        event.preventDefault();
        setComments((comments) => [...comments , review])
        setReview({message: '' , userName: '' , email: '' , rating: 0})
        setCurrent(0)
        getLength(comments.length + 1)
    }

const currentDate = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let monthName = months[currentDate.getMonth()]
const date = `${monthName} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;

// const random = Math.floor(Math.random() * 300)
// console.log(random)


  return (
    <div className={classes}>
        <div className='container'>
            <div className='reviewsWrapper'>
                <div className='comment__section'>
                    {!comments.length && <p className='no__comments'>There are no reviews yet.</p>}
                    {comments.map(text =>
                         <Comments name={text.userName} comment={text.message} rating={text.rating} date={date} />
                    )}
                </div>
                <Form
                    handelChange={handelChange}
                    message={review.message}
                    name={review.userName}
                    email={review.email}
                    submit={submit}
                    rateing={Array(5).fill().map((_,index) =>
                        <label>
                            <input 
                                  type='radio'
                                  name='rating'
                                  value={index + 1}
                                  onClick={() => setCurrent(index + 1)}
                                  onChange={handelChange}
                            />
                            <StarIcon 
                                 className={(current || hover) > index ? "star fill" : "star"}
                                 onMouseOver={() => setHover(index + 1)}
                                 onMouseLeave={() => setHover(undefined)}
                            /> 
                        </label>
                    )}
                 />
            </div>
        </div>
    </div>
  )
}

export default ProductReviews