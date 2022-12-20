import React,{useState} from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import dataQuestion from './dataQuestion';

function FaqContent() {

 const [qus , setQus] = useState('How does this work?')

  return (
    <div className='faqcontent'>
    <div className='questions__wrapper'>
       {dataQuestion.map(e => 
              <div className='question' key={e.id}>
                 <div className={qus == e.question ? 'question__head active' : 'question__head'} onClick={() => setQus(e.question)} > 
                    <h3 className='title'>{e.question}</h3>
                    <div className='icon'>{qus == e.question? <RemoveIcon /> : <AddIcon />}</div>
                 </div>   
                 <div className={qus == e.question ? 'question__body active' : 'question__body'}>
                     <p className='description'>{e.answer}</p>
                 </div>   
              </div>
       )}
     </div>
    </div>
  )
}

export default FaqContent