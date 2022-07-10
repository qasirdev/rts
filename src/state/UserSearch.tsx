import { useState } from 'react';

const Users = [
  { name: 'Qasir', age: 20 },
  { name: 'Mehmood', age: 25 },
  { name: 'Peter', age: 30 },
];
const UserSearch: React.FC = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | null>();

  const onClickHandle = () => {
    const foundUser = Users.find((user) => {
      return user.name === name;
    });
    setUser(foundUser);
  };
  return (
    <div>
      User Search
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClickHandle}>Find User</button>
      <div>
        {user?.name}
        {user?.age}
      </div>
    </div>
  );
};

export default UserSearch;
