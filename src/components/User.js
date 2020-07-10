import React  from 'react';


const User = ({ target, contents, isChange, userInfo, onConfirm, onEdit, onRemove, onChange}) => {

  return (
    <li>
      { isChange && userInfo.id === target ?
      <form className="list__editwrapper" action="/" onSubmit={onConfirm} method="post">
        <input id={userInfo.id} type="checkbox" className="list__checkBox"></input>
        <label for={userInfo.id}></label>
        <input type="text" className="list__thing" value={contents} onChange={onChange}></input>
        <button className="list__edit" onClick={onConfirm}>EDIT</button>
        <button className="list__remove" onClick={()=>onRemove(userInfo.id)}>DEL</button>
      </form>
      :
      <form className="list__editwrapper" action="/" onSubmit={onConfirm} method="post">
        <input id={userInfo.id} type="checkbox" className="list__checkBox"></input>
        <label for={userInfo.id}></label>
        <input name={userInfo.id} type="text" className="list__thing" value={userInfo.thing} onClick={onEdit} readOnly></input>
        <button className="list__empty"></button>
        <button className="list__remove" onClick={()=>onRemove(userInfo.id)}>DEL</button>
      </form>
      }
    </li>
  );
};

export default User;

