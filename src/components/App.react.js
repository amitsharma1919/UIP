import React from 'react';

class App extends React.Component {
    static propTypes = {
        children: React.PropTypes.element.isRequired,
        routes: React.PropTypes.array.isRequired,
    }

    render() {
        return (
            <div>
                <h1>Welcome to the UIP Site!</h1>
                <p>Glad you made it here! :P</p>
                {this.props.children}
            </div>
        );
    }

};

export default App;
