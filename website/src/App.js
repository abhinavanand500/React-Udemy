import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Service from './pages/Service';
import Navbar from './component/Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';
const App = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/about' exact component={About} />
                <Route path='/service' exact component={Service} />
                <Route path='/contact' exact component={Contact} />
                <Redirect to='/' />
            </Switch>
        </>
    );
}

export default App;