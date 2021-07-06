import './App.css';
import {Component} from 'react';
import HomePage from './pages/homepage/homepage';
import {Route} from 'react-router-dom'

const HatsPage = () => (
    <div>
        <h1>HATS PAGe</h1>
    </div>
)

export default function App() {
    return <div>
        <Route exact path='/' component={HomePage}/>
        <Route path='/hats' component={HomePage}/>
    </div>
}