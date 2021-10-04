import {
BrowserRouter as Router,
Switch,
Route
} from 'react-router-dom'

import MyProvider from './contextApi/weather/provider'
import Weather from './container/Weather/Weather'
import City from './container/Weather/City'
import Details from './container/Weather/Details'


function App() {
  return (
    <MyProvider>
      <Router>
        <Switch>
          <Route exact path="/weather" component={Weather} />
          <Route path="/weather/city" component={City} />
          <Route path="/weather/details" component={Details} />
        </Switch>
      </Router>
    </MyProvider>
  );
}

export default App;
