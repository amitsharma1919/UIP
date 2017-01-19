import React from 'react';

class PageNotFound extends React.Component {
    static propTypes = {
        location: React.PropTypes.object.isRequired,
    }

    render() {
        return(
            <div>
                <h1>Error-404</h1>
                <p>
                    Page not found - the path, <code>{location.pathname}</code>,
                    did not match any React Router routes.
                </p>
            </div>
        );
    }

};

export default PageNotFound;
