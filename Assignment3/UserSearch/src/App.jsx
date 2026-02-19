import { useState } from 'react';
import SearchBar from './components/SearchBar';
import UserList from './components/UserList';
import UserCount from './components/UserCount';
import { useSearch } from './hooks/useSearch';
import { users } from './data/users';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredUsers = useSearch(users, searchTerm);

  return (
    <div className="app">
      <div className="container">
        <h1>User Directory</h1>
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <UserCount count={filteredUsers.length} total={users.length} />
        <UserList users={filteredUsers} />
      </div>
    </div>
  );
}

export default App;
