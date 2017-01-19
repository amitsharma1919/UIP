import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {
    static propTypes = {
        children: React.PropTypes.element.isRequired,
        routes: React.PropTypes.array.isRequired,
    }

    constructor(props) {
        super(props);

        this.generateMapMenu = this.generateMapMenu.bind(this);
    }

    generateMapMenu() {
        let path = '';
        const routes = this.props.routes;

        var nextPath = (route) => {
            path += ((
                path.slice(-1) === '/' ? '' : '/') +
                (route.path === '/' ? '' : route.path)
            );
            return path;
        };

        return routes.filter(route => route.mapMenuTitle)
            .map((route, index, array) => (
                <span key={index}>
                    <Link to={nextPath(route)}> {route.mapMenuTitle}</Link>
                    {(index + 1) < array.length && ' > '}
                </span>
            ));
    }

    render() {
        return (
            <div>
                <h1>Welcome to the UIP Site!</h1>
                <p>Glad you made it here! :P</p>
                <nav>{this.generateMapMenu()}</nav>
                {this.props.children}
            </div>
        );
    }

};

export default App;
