import React  from 'react';


const User = ({ userInfo, onEdit, onRemove}) => {

  const onclear = e =>{
      e.preventDefault();
      if(e.target.classList.contains('list__checkBox__checked')){ //체크되어있으면
        e.target.className='list__checkBox'
        e.target.nextSibling.style.textDecoration="none"
      }
      else{//체크 안되어 있으면
        e.target.className='list__checkBox__checked'
        e.target.nextSibling.style.textDecoration="line-through"
      }
  }
    
  return (
    <li>
      <button className="list__checkBox" onClick={onclear}></button>
      <p className="list__thing">{userInfo.thing}</p>
      <button id={userInfo.id} className="list__edit" onClick={onEdit}>EDIT</button>
      <button className="list__remove" onClick={()=>onRemove(userInfo.id)}>DEL</button>
    </li>
  );
};

export default React.memo(User);

