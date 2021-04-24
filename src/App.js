import './App.css'
import Header from "./Components/Header/Header"
import Navbar from "./Components/Navbar/Navbar"
import Profile from "./Components/Profile/Profile"
import Dialogs from "./Components/Dialogs/Dialogs"
import {BrowserRouter, Route} from 'react-router-dom'
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() => <Profile postsData={props.postsData}/>}/>
                    <Route path='/dialogs' render={() => <Dialogs dialogData={props.dialogData}
                                                                  messageData={props.messageData}/>}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/news' component={News}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
