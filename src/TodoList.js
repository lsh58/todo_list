import React, {useState, useRef} from 'react';
import './TodoList.css';
import Create from './components/Create';
import User from './components/User';

const TodoList = () => {
   
    const [user, setUser]= useState([
        {id:1, thing:'스터디준비'},
        {id:2, thing:'기술면접 풀이'},
        {id:3, thing:'알고리즘 공부'},
        {id:4, thing:'생활코딩 강의듣기'},
    ]);

    const nextId = useRef(5);

    const onCreate = e =>{
        e.preventDefault();
        setUser([
            ...user,
            {
              id: nextId.current,
              thing: e.target.create.value
            },
          ]);
          nextId.current+=1;
          e.target.create.value="";
          e.target.create.focus();
    }

    const onremove = id => {
        setUser(user.filter(user => user.id !== id));
    }

    const onedit = id => {
        console.log(id)
        console.log(Create)
    }

    return (
        <div className="todo__wrapper">
          <h1 className="todo__title">TO-DO LIST</h1>
          <Create onCreate={onCreate}/>
          <ul className="list__wrapper">
            {user.map( v => {
            return <User key={v.id} userInfo={v} onEdit={onedit} onRemove={onremove} />;
            })}
          </ul>
        </div>
      );

}


export default TodoList;