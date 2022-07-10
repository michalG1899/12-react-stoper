import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/normalize.scss';
import './styles/global.scss';
import './styles/settings.scss';
import 'font-awesome/css/font-awesome.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />,
    document.getElementById('root')
);