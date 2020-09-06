import React from 'react';
import AppRoutes from './routes';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import styled from 'styled-components';

const MainApp = styled.div`
  margin: 0;
  padding: 0;
  flex-direction: column;
  height: 100vh;
  display: flex;
`;
function App() {
  return (
    <MainApp>
      <Provider store={store}>
        <Router>
          <Header></Header>
          <AppRoutes></AppRoutes>
          <Footer></Footer>
        </Router>
      </Provider>
    </MainApp>
  );
}

export default App;
