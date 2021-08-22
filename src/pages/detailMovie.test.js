import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import DetailMovie from './detailMovie';
import store from '../reducers'
import { BrowserRouter } from 'react-router-dom';

test('renders ', () => {
    render(<Provider store={store}><BrowserRouter><DetailMovie match={{ params: {} }} /></BrowserRouter></Provider>);
});
