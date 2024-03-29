import logo from './logo.svg';
import './App.css';
import { Category, Home } from './pages';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
	return (

		<Router>
			<Routes>
				<Route exact path='/' Component={Home}></Route>

				<Route path='/category' Component={Category}></Route>
			</Routes>
		</Router>

		// <div className="App">
		// 	<header className="App-header">
		// 		<img src={logo} className="App-logo" alt="logo" />
		// 		<p>
		// 			Edit <code>src/App.js</code> and save to reload.
		// 		</p>
		// 		<a
		// 			className="App-link"
		// 			href="https://reactjs.org"
		// 			target="_blank"
		// 			rel="noopener noreferrer"
		// 		>
		// 			Learn React
		// 		</a>
		// 	</header>
		// </div>
	);
}

export default App;
