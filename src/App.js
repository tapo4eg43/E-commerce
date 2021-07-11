import './App.css';
import {Component} from 'react';
import HomePage from './pages/homepage/homepage';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom"
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';

export default function App() {
    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/shop' component={ShopPage}/>
            </Switch>
        </div>
    )
}