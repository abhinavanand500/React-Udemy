import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate'
import Route from './components/Route';
import Header from './components/Header';
const options = [
    {
        label: 'The color of Red',
        value: 'red'
    },
    {
        label: 'The color of Green',
        value: 'green'
    },
    {
        label: 'The color of Blue',
        value: 'blue'
    }
]

const items = [
    {
        title: 'How React works? How Virtual-DOM works in React?',
        content: 'React creates a virtual DOM. When state changes in a component it firstly runs a “diffing” algorithm, which identifies what has changed in the virtual DOM. The second step is reconciliation, where it updates the DOM with the results of diff.'
    },
    {
        title: 'What is JSX?',
        content: 'JSX is a syntax extension to JavaScript and comes with the full power of JavaScript. JSX produces React “elements”. You can embed any JavaScript expression in JSX by wrapping it in curly braces. After compilation, JSX expressions become regular JavaScript objects.'
    },
    {
        title: ' What is ReactDOM and what is the difference between ReactDOM and React?',
        content: 'As the name implies, ReactDOM is the glue between React and the DOM. Often, we will only use it for one single thing: mounting with ReactDOM. Another useful feature of ReactDOM is ReactDOM.findDOMNode() which we can use to gain direct access to a DOM element.'
    }
]
export default () => {
    const [selected, setSelected] = useState(options[0])
    return (
        <div className='ui container'>
            <Header />
            <Route path='/'>
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path='/translate'>
                <Translate />
            </Route>
            <Route path='/dropdown'>
                <Dropdown
                    label="Select a color"
                    options={options}
                    selected={selected}
                    onSelectedChanges={setSelected}
                />
            </Route>
        </div>
    )
};