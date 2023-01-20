import { h } from 'preact';
import { Router } from 'preact-router';
import AsyncRoute from 'preact-async-route'

import Header from './header/header';
import Footer from './footer';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Espais from '../routes/espais';
import Historia from '../routes/historia';
import NotFound from '../routes/404';
import CookieConsent from './cookies';
import Legal from '../routes/legal';
import WAButton from './button/whatsapp';

const App = () => (
	<div id="app">
		<WAButton />
		<CookieConsent />
		<Header />
		<Router>
			<Home path="/" />
			<AsyncRoute path="/espais" component={Espais} />
			<AsyncRoute path="/historia" component={Historia} />
			<AsyncRoute path="/legal" component={Legal} />
			<NotFound default />
		</Router>
		<Footer />
	</div>
)

export default App;