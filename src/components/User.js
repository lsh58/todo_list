import React from 'react';


const User = ({ userInfo, onClear, onEdit, onRemove}) => {

  return (
    <li>
     <button className="list__checkBox" onClick={onClear}></button>
     <p className="list__thing">{userInfo.thing}</p>
     <button className="list__edit" onClick={()=>onEdit(userInfo.id)}>EDIT</button>
     <button className="list__remove" onClick={()=>onRemove(userInfo.id)}>DEL</button>
    </li>
  );
};

export default React.memo(User);