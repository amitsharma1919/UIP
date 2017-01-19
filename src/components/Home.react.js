import React from 'react';

class Home extends React.Component {
    static propTypes = {
        routes: React.PropTypes.array.isRequired,
    }

    render() {
        return (
            <div>
                <h2>Welcome to Home!!</h2>
            </div>
        );
    }

};

export default Home;
