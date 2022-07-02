import { LabelImportantOutlined, StarBorderOutlined } from '@mui/icons-material';
import { Checkbox, IconButton } from '@mui/material';
import { useHistory } from 'react-router-dom';
import React from 'react'
import { useDispatch } from 'react-redux';
import './EmailRow.css'
import { selectMail } from './features/mailSlice';
function EmailRow({id,tilte,subject,description,time}) {
  const history = useHistory();//like event history
    const dispatch=useDispatch();
  const openMail=()=>{
      dispatch(selectMail({
        id,tilte,subject,description,time,

      })
      );
      history.push('/mail');
    };
  return (
    <div onClick={openMail} className='emailRow'>

<div className="emailRow__options">
    <Checkbox/>
    <IconButton>
        <StarBorderOutlined/>
        </IconButton>
        <IconButton>
            <LabelImportantOutlined/>
            </IconButton>

</div>
<h3 className="emailRow__title">
    {tilte}
</h3>

<div className="emailRow__message">
    <h4>{subject}
    <span className="emailRow__description">
        {description}
    </span>
    </h4>
</div>
<p className="emailRow__time">{time}

</p>

</div>
        
  );
}

export default EmailRow