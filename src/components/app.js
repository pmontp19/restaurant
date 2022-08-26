import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Footer from './footer';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Espais from '../routes/espais';
import NotFound from '../routes/404';

const App = () => (
	<div id="app">
		<Header />
		<Router>
			<Home path="/" />
			<Espais path="/espais"/>
			<NotFound default />
		</Router>
		<Footer />
	</div>
)

export default App;