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

    const [mode, setMode] = useState('Create'); 
    const [thing, setThing] = useState('Type what will you do'); 

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
        setThing(
          'Type what will you do'
        )
    }

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

    const onedit = e => {
      e.preventDefault();
      for(let i=0; i<user.length; i++){
        if(user[i].id === parseInt(e.target.id)){
            var editThing = user[i].thing;
              setThing(
                editThing
              );
          break;
        }
      }
      setMode('Edit');
    }

    const onremove = id => {
      setUser(user.filter(user => user.id !== id))
    }

    return (
        <div className="todo__wrapper">
          <h1 className="todo__title">TO-DO LIST</h1>
          <Create mode={mode} thing={thing} onCreate={onCreate}/>
          <ul className="list__wrapper">
            {user.map( v => {
            return <User key={v.id} userInfo={v} onClear={onclear} onEdit={onedit} onRemove={onremove} />;
            })}
          </ul>
        </div>
      );

}


export default TodoList;