import React, {
	Component,
	Fragment
} from 'react';

import { Provider } from 'react-redux'
import { GlobalStyle } from './style';
import { GlobalFont } from './static/iconfont/iconfont';
import { Router , Route,Switch ,Redirect} from 'react-router-dom';
import createHistory from 'history/createHashHistory'
import store from './store';
import Header from './common/header/index';
import Nav from './common/nav/index';
import Login from './pages/login/index';
import CartOne from './pages/cartOne/index'
import Detail from './pages/detail/index'
import Home from './pages/home/index';
import { homepage } from '../package.json';

const history = createHistory({
    basename: homepage
  })
const PrimaryLayout = props => {
  return (
    <div className="primary-layout">
      <main>
        <Switch>
         <Route path="/" exact component={Home}/>
          <Route path="/sort"  component={HomeLayout} />
		  <Route path="/cart"  component={cartLayout} />
		  <Route path="/users"  component={UserSubLayout} />
          <Route path="/login"  component={Login} />
          <Redirect to="/" />
        </Switch>
      </main>
    </div>
  )
}
const HomeLayout=({match})=>{
	return(
		<div>
		<Header /><Nav />
	  	<Switch>
			<Route  path={`${match.path}/detail/:id`} component={Detail} />
		</Switch>
		</div>
	)
}
const cartLayout=({match})=>{
	return(
		<div>
		  <Header />
	  	<Switch>
			<Route exact path={`${match.path}`} component={CartOne} />
		</Switch>
		</div>
	)
}




const UserSubLayout = ({ match }) => (
  <div className="user-sub-layout">
    <aside>
      <UserNav />
    </aside>
    <div className="primary-content">
      <Switch>
        <Route exact path={match.path} component={BrowseUsersPage} />
        <Route path={`${match.path}/add`} component={AddUserPage} />
        <Route path={`${match.path}/:userId/edit`} component={EditUserPage} />
        <Route path={`${match.path}/:userId`} component={UserProfilePage} />
      </Switch>
    </div>
  </div>
)
const UserComments = ({ match }) => (
  <div>UserId: {match.params.userId}</div>
)

const UserSettings = ({ match }) => (
  <div>UserId: {match.params.userId}</div>
)
const UserProfilePage = ({ match }) => (
  <div>
    User Profile:
    <Route path={`${match.url}/comments`} component={UserComments} />
    <Route path={`${match.path}/settings`} component={UserSettings} />
  </div>
)

const UserNav =() => <div>UserNav</div>
const AddUserPage =() => <div>AddUserPage</div>
const EditUserPage =() => <div>EditUserPage</div>
const BrowseUsersPage=()=><div>用户主页</div>
class App extends Component {
	render() {
		return(<Provider store={store}>
			<Fragment>
			<GlobalStyle/>
			<GlobalFont/>
			    <Router history={history}>
      		<PrimaryLayout />
      	</Router>
				</Fragment>
				</Provider>);
	}

}
export default App;
