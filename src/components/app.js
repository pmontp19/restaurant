import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Footer from './footer';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Espais from '../routes/espais';
import Historia from '../routes/historia';
import NotFound from '../routes/404';
import CookieConsent from './cookies';

const App = () => (
	<div id="app">
		<CookieConsent />
		<Header />
		<Router>
			<Home path="/" />
			<Espais path="/espais"/>
			<Historia path="/historia"/>
			<NotFound default />
		</Router>
		<Footer />
	</div>
)

export default App;