const UserCount = ({ count, total }) => {
    return (
        <div className="user-count">
            <p>Showing {count} of {total} users</p>
        </div>
    );
};

export default UserCount;
