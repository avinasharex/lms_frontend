import './index.css';

import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';

import App from './App.jsx'
import store from './Redux/Store';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>

            <App />
            <Toaster />
    </Provider>
)
