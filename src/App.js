import { BrowserRouter, Switch, Route } from "react-router-dom";
import EmailSend from "./components/EmailSend";
import LiveStream from "./components/LiveStream";
import StreamPreview from "./components/StreamPreview";
import Stream from "./components/Stream";

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={EmailSend}></Route>
				<Route path="/login-stream" component={LiveStream}></Route>
				<Route path="/stream" component={StreamPreview}></Route>
				<Route path="/plainstream" component={Stream}></Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
