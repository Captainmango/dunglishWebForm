import './style';
import { useState } from 'preact/hooks'

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
		<main>
			<h1>Very much translate the English</h1>

			<div>{ requesting ? 
				<form class="form__area">
					<label>Type your text here</label>
					<textarea class="form__area__text" value={text} onChange={event => handleOnChange(event)} />
					<button class="form__area__button" onClick={event => handleOnSubmit(event)}>
						<b>Make this Dunglish</b>
					</button>
				</form>
				}				
			</div>
		</main>
	);
}
