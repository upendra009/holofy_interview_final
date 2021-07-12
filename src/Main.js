import React from 'react'
import {BrowserRouter, Switch, Route } from 'react-router-dom';
// import Holofy from './components/holofy/holofy.container.js'
import styled from 'styled-components';

import Holofy from './compoents/holofy/holofy.container';


const AppBody = styled.div`
	flex-grow: 1;
	background: #fdfdfd;
    position="fixed"
`;

export default function Main() {
    return (
        <AppBody>    
            <BrowserRouter>
             <Switch>
            <Route exact path="/" component={Holofy} />
            {/* <h3>dsa</h3> */}
            </Switch>
            </BrowserRouter>
</AppBody>
    )
}
