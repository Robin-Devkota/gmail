import InboxIcon from '@mui/icons-material/Inbox';
import AddIcon from '@mui/icons-material/Add';
import React from 'react'
import SidebarOption from './SidebarOption';
import StarIcon from '@mui/icons-material/StarPurple500';
import './Sidebar.css'
import { AccessTime, Duo, ExpandMore, LabelImportant, NearMe, Note, Person, Phone,  } from '@mui/icons-material';
import {  Button, IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import { openSendMessage } from './features/mailSlice';
function Sidebar() {
  const dispatch=useDispatch();
  return (
    <div className='sidebar'>
      <Button
      startIcon={<AddIcon  fontSize='large'/>}
      className='sidebar__compose'
      onClick={()=>dispatch(openSendMessage())}
      >Compose</Button>
      <SidebarOption Icon={InboxIcon} title="Inbox" number={54} selected={true}/>
      <SidebarOption Icon={StarIcon} title="Starred" number={54}/>
      <SidebarOption Icon={AccessTime} title="Snoozed" number={54}/>
      <SidebarOption Icon={LabelImportant} title="Important" number={54}/>
      <SidebarOption Icon={NearMe} title="Sent" number={54}/>
      <SidebarOption Icon={Note} title="Drafts" number={54}/>
      <SidebarOption Icon={ExpandMore} title="More" number={54}/>
<div className="sidebar__footer">
  <div className="sidebar__footericon">
    <IconButton>
      <Person />
      </IconButton>
      <IconButton>
        <Duo/>
        </IconButton>
       
      <IconButton>
      <Phone />
      </IconButton>
  </div>
</div>

    </div>
  )
}

export default Sidebar