const UserList = ({ users }) => {
    return (
        <div className="user-list">
            {users.map((user) => (
                <div key={user.id} className="user-card">
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                    <p>{user.role}</p>
                </div>
            ))}
        </div>
    );
};

export default UserList;
