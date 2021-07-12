import './App.scss';
import React from 'react';
import Main from '../src/Main'
import Header from '../src/Header'
import styled from 'styled-components';


const AppDiv = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`;



function App() {
  return (
         <React.Fragment>           
              <AppDiv>
                      <Header/>
                       <Main/>
                       </AppDiv>				
          </React.Fragment>
  );
}

export default App;
