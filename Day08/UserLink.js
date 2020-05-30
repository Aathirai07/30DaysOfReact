import React from 'react';

class UserLink extends React.Component {
    render() {
        const { user } = this.props;
        return (
            <div>Welcome {user.name}</div>
        );
    }
}
UserLink.propTypes = {
    user: (props, propName, componentName) => {
        return new Error(
            "Invalid " + propName + ": No name property defined for component " + componentName
        )
    }
}
export default UserLink