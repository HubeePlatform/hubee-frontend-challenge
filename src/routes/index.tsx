import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Cart } from '../pages/Cart';
import { Home } from '../pages/Home';

export function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cart" exact component={Cart} />
      </Switch>
    </BrowserRouter>
  );
}
