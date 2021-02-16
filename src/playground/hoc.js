//Higher Order component - A component(HOC) that renders another component
//Goal is to reuse code
//Render hijacking
//Porp maipulation
//Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>This info is: {props.info}</p>
    </div>

);

const withAdminWarniong = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <p>This is authenticated</p> : <p>This is not authenticated</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

// const AdminInfo = withAdminWarniong(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={true} info='this is the details' />, document.getElementById('app'));
