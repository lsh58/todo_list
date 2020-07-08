import React from 'react';

function Create({mode, thing, value, onCreate, onCancel, onConfirm, onChange, isEditable}){
  if(mode==='Create'){
    return (
      <form className="typeArea__wrapper" action="/" onSubmit={onCreate} method="post">
        <input className="typeArea__create" name="create" placeholder={thing} onChange={onChange} value={value}></input>
        <button type="submit" className="typeArea__addBtn">ADD</button>
      </form>
    );
  }else if(mode==='Edit'){
    return (
      <form className="typeArea__wrapper" action="/" onSubmit={onConfirm} method="post">
        <input className="typeArea__create" name="create" placeholder={thing} onChange={onChange} value={value}></input>
        <button onClick={onCancel} className="typeArea__cancelBtn"></button>
        <button type="submit" className="typeArea__editBtn">Edit</button>
      </form>
    );
  }
};


export default React.memo(Create);
