import React from 'react'
import './Section.css'

function Section({Icon,title,color,selected}) {//receiving from emailLIst
  return (
    <div className={`section ${selected && "section--selected"}`}
style={{
    borderBottom:`3px solid ${color}`,
    color: `${selected && color}`,
     }}
     >
<Icon/>
<h4>{title}</h4>   {/* use of title */}

     </div>
  );
}

export default Section;