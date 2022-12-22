import {useState} from "react";
import "./App.css";

function App() {
	const [randomErrorMessages, setRandomErrorMessages] = useState([
		"Sending reinforcements",
		"Uh-Oh...",
		"Oh dear...",
		"This is going well...",
		"We can explain...",
	]);

	const [errorMessage, setErrorMessage] = useState(
		randomErrorMessages[Math.floor(Math.random() * randomErrorMessages.length)]
	);

	return (
		<div className='App'>
			<div className='logoContainer'>
				<label className='logo'>
					<span className='redSection'>un</span>trial
				</label>
			</div>
			<div className='errorMessages'>
				<h1 className='errorHeader'>401</h1>
				<h2 className='errorSubHeader'>{errorMessage}</h2>
				<h3 className='errorHomeHeading'>Bad Authentication</h3>
			</div>
		</div>
	);
}

export default App;
