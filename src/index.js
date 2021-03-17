import './style';
import { useState } from 'preact/hooks'
import Bars from './assets/Bars.svg'

export default function App() {

	const [text, settext] = useState("");
	const [requesting, setrequesting] = useState(false);

	const handleOnChange = (event) => {
		settext(event.target.value);
	}

	const handleOnSubmit = (event) => {
		event.preventDefault();
	}

	return (
		<fragment>
			<header>
				<h1>Very much translate the English</h1>
			</header>
			<main>
				<div>{ requesting ? 
					<img src={Bars} /> :
					<form class="form__area">
						<label class="form__area__label">Type your text here</label>
						<textarea class="form__area__text" value={text} onInput={event => handleOnChange(event)} />
						<button class="form__area__button" onClick={event => handleOnSubmit(event)}>
							<b>Make this Dunglish</b>
						</button>
					</form>
					}				
				</div>
			</main>
			<footer>
				<p>this is my footer</p>
			</footer>
		</fragment>
	);
}
