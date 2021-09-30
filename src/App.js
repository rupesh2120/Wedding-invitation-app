import {  BrowserRouter, Switch, Route } from 'react-router-dom';
import EmailSend from "./components/EmailSend";
import LiveStream from './components/LiveStream';
import StreamPreview from './components/StreamPreview';


function App() {
  return (
   
<BrowserRouter>
    
      
    <Switch>
      
          <Route exact path='/' component={EmailSend}></Route>
          <Route path='/login-stream' component={LiveStream}></Route>
          <Route path='/stream' component={StreamPreview}></Route>
        
        
          
    </Switch>
</BrowserRouter>

  );
}

export default App;
