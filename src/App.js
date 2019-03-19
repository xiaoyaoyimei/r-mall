import React, {
	Component,
	Fragment
} from 'react';
import Header from './common/header/index';
import Nav from './common/nav/index';
import { Provider } from 'react-redux'
import { GlobalStyle } from './style';
import { GlobalFont } from './static/iconfont/iconfont';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home/index';
import store from './store';
class App extends Component {
	render() {
		return(<Provider store={store}>
			<Fragment>
			<GlobalStyle/>
			<GlobalFont/>
			    <BrowserRouter>
      		<div>
            <Header />
						<Nav/>
      			<Route path='/' exact component={Home}></Route>
      		</div>
      	</BrowserRouter></Fragment></Provider>);
	}

}
export default App;
