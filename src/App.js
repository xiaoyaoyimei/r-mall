import React, {
	Component,
	Fragment
} from 'react';

import { Provider } from 'react-redux'
import { GlobalStyle } from './style';
import { GlobalFont } from './static/iconfont/iconfont';
import { BrowserRouter, Route,Switch ,Redirect} from 'react-router-dom';
import store from './store';
import Header from './common/header/index';
import Nav from './common/nav/index';
import Login from './pages/login/index';
import CartOne from './pages/cartOne/index'
import Home from './pages/home/index';

const PrimaryLayout = props => {
  return (
    <div className="primary-layout">

      <main>
        <Switch>
          <Route path="/"  exact component={HomePage} />
					<Route path="/layout"  component={HomeLayout} />
					<Route path="/cart"  component={cartLayout} />
					<Route path="/users"  component={UserSubLayout} />
          <Route path="/login"  component={Login} />
          <Redirect to="/" />
        </Switch>
      </main>
    </div>
  )
}
const PrimaryHeader = () => (
<div><Header /><Nav /></div>
)
const HomePage=()=>{
	return(
		<div>
			<PrimaryHeader />
			<Home />
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
const HomeLayout=({match})=>{
	return(
		<div>
		  <PrimaryHeader />
	  	<Switch>
			<Route exact path={`${match.path}/home`} component={Home} />
			<Route  path={`${match.path}/detail`} component={Detail} />
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
const Detail=()=><div>详情</div>
class App extends Component {
	render() {
		return(<Provider store={store}>
			<Fragment>
			<GlobalStyle/>
			<GlobalFont/>
			    <BrowserRouter>
      		<PrimaryLayout />
      	</BrowserRouter>
				</Fragment>
				</Provider>);
	}

}
export default App;
