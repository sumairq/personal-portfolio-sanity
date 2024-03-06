import React, { useEffect } from "react";
import ReactGA from "react-ga";

import { About, Footer, Header, NestedSkills, Skills, Testimonial, Work } from "./container";
import { Navbar } from "./components";
import "./App.scss";

const App = () => {
	useEffect(() => {
		ReactGA.initialize("UA-164058116-1");
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, []);
	return (
		<div className='app'>
			<Navbar />
			<Header />
			<About />
			<Work />
			<Skills />
			<NestedSkills/>
			<Testimonial />
			<Footer />
		</div>
	);
};

export default App;
