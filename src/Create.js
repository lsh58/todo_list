import React from 'react';

function Create({onCreate}){
    return (
      <form className="typeArea__wrapper" action="/" onSubmit={onCreate} method="post">
        <input className="typeArea__create" name="create" placeholder="Type what will you do" ></input>
        <button type="submit" className="typeArea__addBtn">ADD</button>
      </form>
    );
};


export default React.memo(Create);
