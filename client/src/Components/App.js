import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Body from '../Components/Body';
import Navbar from './Navbar';
import Footer from './Footer';
import Entertainment from './Entertainment';
import Loans from './Loans';
import Housing from './Housing';
import Transportation from './Transportation';
import Profile from './Profile';
import '../Styles/app.css'


function App() {
    return (
        <div className='app-wrapper'>
            <Navbar />
            <Switch>
                <Route exact path='/' component={Body} />
                <Route path='/entertainment' component={Entertainment} />
                <Route path='/housing' component={Housing} />
                <Route path='/loans' component={Loans} />
                <Route path='/transportation' component={Transportation} />
                <Route path='/profile' component={Profile} />
            </Switch>
            <Footer />
        </div>
    )
}

export default App;
