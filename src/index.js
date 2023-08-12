import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store, { Store } from './redux/store';
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}>
    <App/>
    </Provider>);