import { Component } from 'react';

interface UserSearchProps {
  users: User[];
}

interface UserSearchState {
  name: string;
  user: User | undefined;
}

interface User {
  name: string;
  age: number;
}

class UserSearch extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: '',
    user: undefined,
  };

  onClick = () => {
    const foundUser = this.props.users.find((user) => {
      return user.name === this.state.name;
    });

    this.setState({ user: foundUser });
  };

  render() {
    const { name, user } = this.state;

    return (
      <div>
        UserSearch
        <input
          value={name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button type='button' onClick={this.onClick}>
          Find User
        </button>
        <div>
          <div>{user && user.name}</div>
          <div>{user && user.age}</div>
        </div>
      </div>
    );
  }
}

export default UserSearch;
