import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { DETAIL_MOVIE_PAGE, HOME_PAGE } from './constants/routes';
import Home from './pages/home';
import DetailMovie from './pages/detailMovie';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={HOME_PAGE} exact component={Home} />
        <Route path={DETAIL_MOVIE_PAGE(':id')} component={DetailMovie} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
