import React from 'react';

const authenticationContext = React.createContext({
    authenticated: false,
    login: () => {}
})

export default authenticationContext;