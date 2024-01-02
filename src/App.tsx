import 'reflect-metadata';
import { BrowserRouter } from 'react-router-dom';
import MainRouter from './routes/MainRouter';
import { Provider } from 'react-redux';
import { store } from './redux';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </Provider>
  );
}

export default App;