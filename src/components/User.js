import React  from 'react';


const User = ({ target, contents, isChange, userInfo, onConfirm, onEdit, onRemove, onChange}) => {

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
      { isChange && userInfo.id === target ?
      <>
      <input type="text" className="list__thing" value={contents} onChange={onChange}></input>
      <button className="list__edit" onClick={onConfirm}>EDIT</button>
      </>
      :
      <>
      <input id={userInfo.id} type="text" className="list__thing" value={userInfo.thing} onClick={onEdit} readOnly></input>
      <button className="list__empty"></button>
      </>
      }
      <button className="list__remove" onClick={()=>onRemove(userInfo.id)}>DEL</button>
    </li>
  );
};

export default User;

