import './styles/base.scss';
import './styles/mobile.scss';
import './styles/tablet.scss';
import './styles/desktop.scss';
import { Route, Switch } from 'react-router-dom';

import {
  Landing,
  Dashboard
} from './components';

function App() {
  return (
    <>
      <Switch>
        <Route path='/dashboard' component={Dashboard} />
        <Route exact path='/' component={Landing}/>
      </Switch>
    </>
  );
}

export default App;
