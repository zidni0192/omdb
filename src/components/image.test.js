import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Image from './image';
import store from '../reducers'
import { BrowserRouter } from 'react-router-dom';

test('renders ', () => {
    render(<Provider store={store}><BrowserRouter><Image /></BrowserRouter></Provider>);
});
