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

    const [isEditable, setIsEditable] = useState(false); 
    const [thing, setThing] = useState('Type what will you do'); 
    const [target, setTarget] = useState('');
    const [value, setValue] = useState('');
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
              setValue(
                editThing
              );
          break;
        }
      }
      setTarget(e.target.id);
      setIsEditable(true);
    }

    const onremove = id => {
      setUser(user.filter(user => user.id !== id))
    }

    const oncancel = e => {
      e.preventDefault();
      setValue('');
      setThing(
        'Type what will you do'
      )
      setIsEditable(false);
    }

    const onconfirm = e => {
      e.preventDefault();
      for(let i=0; i<user.length; i++){
        if(user[i].id === parseInt(target)){
            user[i].thing = e.target.create.value;
        }
      }
      setValue('');
      setThing(
        'Type what will you do'
      )
      setIsEditable(false);
    }

    const onchange = e => {
      setValue(e.target.value);
    }; 
    
    return (
        <div className="todo__wrapper">
          <h1 className="todo__title">TO-DO LIST</h1>
          <Create isEditable={isEditable} thing={thing} value={value} onCreate={onCreate} onCancel={oncancel} onConfirm={onconfirm} onChange={onchange}/>
          <ul className="list__wrapper">
            {user.map( v => {
            return <User key={v.id} userInfo={v} onClear={onclear} onEdit={onedit} onRemove={onremove} />;
            })}
          </ul>
        </div>
      );
}


export default TodoList;