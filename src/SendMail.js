import { Close } from '@mui/icons-material';
import { Button } from '@mui/material';
import React from 'react'
import './SendMail.css'
import {useForm} from "react-hook-form" //each one inpust must have name to use this hook
import {useDispatch} from 'react-redux'
import {closeSendMessage} from './features/mailSlice'
import { db } from './firebase';
import firebase from 'firebase/compat/app';
function SendMail() {
const {register,handleSubmit,formState: { errors }} = useForm();
  const dispatch=useDispatch();
const onSubmit=(formData)=>{

  db.collection('emails').add(
      {
      
        to:formData.to,
        subject: formData.subject,
        message: formData.message,
        timesstamp: firebase.firestore.FieldValue.serverTimestamp()
  }
  );
  dispatch(closeSendMessage());
};
  
    return (
    <div className='sendMail'>
<div className="sendMail__header">
    <h3>New Message</h3>
    <Close onClick={()=>dispatch(closeSendMessage())} className='sendMail__close'/>
</div>
<form onSubmit={handleSubmit(onSubmit)} >
<input name='to' placeholder="To" type="email" {...register("to",{ required: true })}/>
{errors.to &&<p className='sendMail__error'>To is required</p>}
    
    
    <input name='subject' type="text" placeholder='Subject:'{...register("subject",{ required: true })} />
    {errors.subject &&<p className='sendMail__error'>Subject is required</p>}
    <input   name='message' type="text"placeholder='Message..'className='sendMail__message'{...register("message",{ required: true })}  /> 
    {errors.message &&<p className='sendMail__error'>Message is required</p>}
    <div className="sendMail__options">
        <Button className='sendMail__send'
        variant='contained'
        color='primary'
        type='submit'
        >Send</Button>

    </div>
</form>
    </div>
  );
}

export default SendMail