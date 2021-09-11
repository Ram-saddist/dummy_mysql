import React from 'react'
import App from './App';
import {BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom';
import Home from './Home';

class Start extends React.Component{
	render(){
		return(
			<div>
				<div>
					<Router>
						<nav className="navbar navbar-inverse">
						  <ul className="nav navbar-nav">
						     <li><Link to="/">Home</Link></li>
						     <li><Link to="/about">About</Link></li>
						     <li><Link to="/contact">Contact</Link></li>
						   </ul>
					    </nav> 
				     <Switch>
				        <Route exact path="/" component={App}/>
				        <Route path="/about" component={App}/>
				        <Route path="/contact" component={Home}/>
				     </Switch>
				    </Router>
				</div>
				
			</div>
		);
	}
}
export default Start;