import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { IntlReducer as Intl, IntlProvider } from 'react-redux-multilingual';
import './styles.css';
import Vegetables from './components/layouts/home/main';
import store from './redux/store';
import translations from './redux/translations';

export default function App() {
  return (
    <Provider store={store}>
      <IntlProvider translations={translations} locale="en">
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Vegetables} />
            <Route exact path="/vegetables">
              {<Redirect to="/" />}
            </Route>
          </Switch>
        </BrowserRouter>
      </IntlProvider>
    </Provider>
  );
}
