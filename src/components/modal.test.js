import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Modal from './modal';
import store from '../reducers'
import { BrowserRouter } from 'react-router-dom';

test('renders ', () => {
    render(<Provider store={store}><BrowserRouter><Modal /></BrowserRouter></Provider>);
});
