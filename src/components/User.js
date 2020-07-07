import React  from 'react';


const User = ({ userInfo, onClear, onEdit, onRemove}) => {
 
  
  return (
    <li>
      <button className="list__checkBox" onClick={onClear}></button>
      <p className="list__thing">{userInfo.thing}</p>
      <button id={userInfo.id} className="list__edit" onClick={onEdit}>EDIT</button>
      <button className="list__remove" onClick={()=>onRemove(userInfo.id)}>DEL</button>
    </li>
  );
};

export default React.memo(User);

