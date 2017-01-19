import React from 'react';

class About extends React.Component {
    static propTypes = {
        routes: React.PropTypes.array.isRequired,
    }

    render() {
        return (
            <div>
                <h2>About UIP!</h2>
            </div>
        );
    }

};

export default About;
