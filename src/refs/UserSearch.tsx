import { useEffect, useRef, useState } from 'react';

interface User {
  name: string;
  age: number;
}

const Users: User[] = [
  { name: 'Qasir', age: 45 },
  { name: 'Mehmood', age: 40 },
  { name: 'Qas', age: 35 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState<User | null>();
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  const onchangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onClickHandle = () => {
    const foundUser = Users.find((user) => {
      return user.name === name;
    });
    setUser(foundUser);
  };
  return (
    <div>
      User Search
      <input ref={inputRef} value={name} onChange={onchangeHandle} />
      <button onClick={onClickHandle}>Find User </button>
      <div>
        {user?.name}
        {user?.age}
      </div>
    </div>
  );
};

export default UserSearch;
