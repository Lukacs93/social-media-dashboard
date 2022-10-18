const Header = ( {users} ) => {
    return (
        <div className="header">
        Social Media Dashboard
        <div className="sub-header">
            Total followers: {users.map(user => user.followers).reduce((a, b) => a + b )}
        </div>
    </div>
    );
}

export default Header;