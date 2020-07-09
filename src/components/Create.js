import React from 'react';

function Create({ thing, value, onCreate, onCancel, onConfirm, onChange, isEditable}){
    return (
      <div>
      { isEditable ? 
        <form className="typeArea__wrapper" action="/" onSubmit={onConfirm} method="post">
          <input className="typeArea__create" name="create" placeholder={thing} onChange={onChange} value={value}></input>
          <button onClick={onCancel} className="typeArea__cancelBtn"><span></span><span></span></button>
          <button type="submit" className="typeArea__editBtn">Edit</button>
        </form>
        :
        <form className="typeArea__wrapper" action="/" onSubmit={onCreate} method="post">
          <input className="typeArea__create" name="create" placeholder={thing} onChange={onChange} value={value}></input>
          <button type="submit" className="typeArea__addBtn">ADD</button>
        </form>
      }
      </div>
    );
};


export default React.memo(Create);
