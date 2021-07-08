import './App.css';
import {Component} from 'react';
import HomePage from './pages/homepage/homepage';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom"
import ShopPage from './pages/shop/shop';

const HatsPage = () => (
    <div>
        <h1>HATS PAGe</h1>
    </div>
)

export default function App() {
    return <div>
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/shop' component={ShopPage}/>
        </Switch>
    </div>
}