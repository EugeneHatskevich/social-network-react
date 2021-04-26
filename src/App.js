import './App.css'
import Header from "./Components/Header/Header"
import Navbar from "./Components/Navbar/Navbar"
import Profile from "./Components/Profile/Profile"
import Dialogs from "./Components/Dialogs/Dialogs"
import {Route} from 'react-router-dom'
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";


const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/profile' render={() => <Profile data={props.data.profilePage}
                                                              addPost={props.addPost}
                                                              changeNewPostText={props.changeNewPostText}/>}/>
                <Route path='/dialogs' render={() => <Dialogs data={props.data.dialogsPage}/>}/>
                <Route path='/music' component={Music}/>
                <Route path='/news' component={News}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>
    )
}

export default App;
