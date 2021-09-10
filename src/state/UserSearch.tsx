import { useState } from 'react';

interface User {
  name: string;
  age: number;
}

const users: Array<User> = [
  { name: 'Sarah', age: 20 },
  { name: 'Alex', age: 20 },
  { name: 'Michael', age: 20 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState<User | undefined>();

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });
    setUser(foundUser);
  };

  return (
    <div>
      UserSearch
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button type='button' onClick={onClick}>
        Find User
      </button>
      <div>
        <div>{user && user.name}</div>
        <div>{user && user.age}</div>
      </div>
    </div>
  );
};

export default UserSearch;
