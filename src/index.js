import './style';
import { useState } from 'preact/hooks'

export default function App() {

	const [text, settext] = useState("");

	const handleOnChange = (event) => {
		settext(event.target.value);
	}

	return (
		<main>
			<div>
				<form class="form__area">
					<label>Type your text here</label>
					<textarea class="form__area__text" value={text} onChange={event => handleOnChange(event)} />
					<button class="form__area__button">
						<b>Make this Dunglish</b>
					</button>
				</form>
			</div>
		</main>
	);
}
