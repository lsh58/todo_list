import React, { useState, useRef } from 'react';
import './TodoList.css';
import Create from './components/Create';
import User from './components/User';
import styled from 'styled-components';
import { generateMedia } from 'styled-media-query';

const TodoList = () => {
  const [user, setUser] = useState([
    {
      id: 1,
      thing: '프로젝트 생성하기^^',
    },
    {
      id: 2,
      thing: '컴포넌트 스타일링하기^^',
    },
    {
      id: 3,
      thing: 'Context 만들기',
    },
    {
      id: 4,
      thing: '기능 구현하기',
    },
  ]);
  const [isChange, setIsChange] = useState(false);
  const [value, setValue] = useState('');
  const [contents, setContents] = useState('');
  const [target, setTarget] = useState('');
  const nextId = useRef(2);

  const oncreate = (e) => {
    e.preventDefault();
    setIsChange(false);
    setUser([
      ...user,
      {
        id: nextId.current,
        thing: e.target.create.value,
      },
    ]);
    nextId.current += 1;
    setValue('');
    e.target.create.focus();
  };

  const onedit = (e) => {
    e.preventDefault();
    setTarget(parseInt(e.target.name));
    setContents(e.target.value);
    setIsChange(true);
  };

  const onremove = (id) => {
    setUser(user.filter((user) => user.id !== id));
  };

  const onconfirm = (e) => {
    e.preventDefault();
    const changeValue = {
      id: target,
      thing: contents,
    };
    setUser(
      user.map((user) =>
        user.id === target ? { ...user, ...changeValue } : user,
      ),
    );
    setValue('');
    setIsChange(false);
  };

  const onchange = (e) => {
    setValue(e.target.value);
  };

  const onchangecontents = (e) => {
    setContents(e.target.value);
  };

  let today = new Date();
  let year = today.getFullYear(); // 년도
  let month = today.getMonth() + 1; // 월
  let date = today.getDate(); // 날짜
  let day = today.getDay();
  function dateCal() {
    if (month <= 9) {
      month = '0' + month;
    }
    if (date <= 9) {
      date = '0' + date;
    }
  }
  dateCal();
  let week = ['Sun', 'Mon', 'Tues', 'Wednes', 'Thurs', 'Fri', 'Satur'];
  var titleDay = week[day] + 'Day';
  var titleDate = `${year}${month}${date}`;

  return (
    <Wrapper>
      <h1 className="todo__title">
        {titleDay}
        <span>{titleDate}</span>
      </h1>
      <Create value={value} onCreate={oncreate} onChange={onchange} />
      <ul className="list__wrapper">
        {user.map((v) => {
          return (
            <User
              target={target}
              contents={contents}
              key={v.id}
              isChange={isChange}
              userInfo={v}
              onEdit={onedit}
              onConfirm={onconfirm}
              onRemove={onremove}
              onChange={onchangecontents}
            />
          );
        })}
      </ul>
    </Wrapper>
  );
};

const customMedia = generateMedia({
  lgDesktop: '1350px',
  mdDesktop: '1150px',
  tablet: '960px',
  smTablet: '740px',
  mobile: '600px',
});

const Wrapper = styled.div`
  background: linear-gradient(-180deg, rgb(17, 111, 197), rgb(67, 32, 137));
  background: -webkit-linear-gradient(
    -90deg,
    rgb(17, 111, 197),
    rgb(67, 32, 137)
  );
  background: -ms-linear-gradient(-180deg, rgb(17, 111, 197), rgb(67, 32, 137));
  background: -moz-linear-gradient(
    -180deg,
    rgb(17, 111, 197),
    rgb(67, 32, 137)
  );
  border-radius: 10px;
  box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.1), 0 5px 10px 0 rgba(0, 0, 0, 0.1);
  width: 35%;
  padding: 10px 10px;
  min-height: 600px;
  ${customMedia.lessThan('tablet')`
   width: 50%;
  `}
  ${customMedia.lessThan('mobile')`
   width: 90%;
  `}
`;

export default TodoList;
