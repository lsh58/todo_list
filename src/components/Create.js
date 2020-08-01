import React from 'react';

function Create({ value, onCreate, onChange }) {
  return (
    <div>
      <form
        className="typeArea__wrapper"
        action="/"
        onSubmit={onCreate}
        method="post"
      >
        <input
          className="typeArea__create"
          name="create"
          placeholder="Type what will you do"
          onChange={onChange}
          value={value}
        ></input>
        <button type="submit" className="typeArea__addBtn">
          ADD
        </button>
      </form>
    </div>
  );
}

export default React.memo(Create);
