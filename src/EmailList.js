import { ArrowDropDown, ChevronLeft, ChevronRight, KeyboardHide, LocalOffer, MoreVert, People, Redo, Settings } from '@mui/icons-material'
import { Checkbox ,IconButton} from '@mui/material'
import React, { useEffect,useState } from 'react'
import './EmailList.css'
import Section from './Section';
import Inbox from '@mui/icons-material/Inbox';
import EmailRow from './EmailRow';
import { db } from './firebase';
import firebase from 'firebase/compat/app';

function EmailList() {
  const [emails,setEmails]=useState([]);
  useEffect(()=>{
    db.collection('emails').orderBy('timesstamp','desc').onSnapshot((snapshot)=>setEmails(snapshot.docs.map((doc)=>({id:doc.id,data:doc.data(),
    }))));
  },[]);
  
  return (
    <div className='emailList'>
<div className="emailList__settings">
  <div className="emailList__settingLeft">
    <Checkbox/>
    <IconButton>
      <ArrowDropDown />
      </IconButton>
      <IconButton>
        <Redo />
      </IconButton>
      <IconButton>
      <MoreVert />
      </IconButton>
  </div>
  <div className="emailList__settingRight">
    <IconButton>
      <ChevronLeft />
      </IconButton>
      <IconButton>
        <ChevronRight />
        </IconButton>
        <IconButton>
          <KeyboardHide />
          </IconButton>
          <IconButton>
            <Settings/>
            </IconButton>
  </div>
</div>
<div className="emailList__sections">
    <Section Icon={Inbox} title='Primary' color='red' selected/>
    <Section Icon={People} title='Social' color='#1A73E8' selected/>
    <Section Icon={LocalOffer} title='Primary' color='green' selected/>
{/* sendig propsto section */}

</div>
<div className="emailList__List">
  {emails.map(({id,data:{to,subject,message,timestamp}})=>(
<EmailRow key={id}  tilte={to}subject={subject} description={message} time={new Date(firebase.firestore.Timestamp.now().seconds*1000).toLocaleDateString()}/>
  ))}
  <EmailRow
  title="Twitch"
  subject="New Subscriber"
  description="this is a test"
  time="2m"
  />
   <EmailRow
  title="Twitch"
  subject="New Subscriber"
  description="this is a test"
  time="2m"
  />
</div>
</div>
  );
}

export default EmailList;