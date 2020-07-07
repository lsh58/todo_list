import React from 'react';

function Create({mode, thing, onCreate}){
  if(mode==='Create'){
    return (
      <form className="typeArea__wrapper" action="/" onSubmit={onCreate} method="post">
        <input className="typeArea__create" name="create" placeholder={thing} ></input>
        <button type="submit" className="typeArea__addBtn">ADD</button>
      </form>
    );
  }else if(mode==='Edit'){
    return (
      <form className="typeArea__wrapper" action="/" onSubmit={onCreate} method="post">
        <input className="typeArea__create" name="create" placeholder={thing} ></input>
        <button className="typeArea__cancelBtn"></button>
        <button type="submit" className="typeArea__editBtn">Edit</button>
      </form>
    );
  }
};


export default React.memo(Create);
