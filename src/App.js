import React, {Component} from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom"

import './App.css';

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import SignInAndSingUp from './pages/sign-in-and-sing-up/sign-in-and-sing-up';
import {auth, createUserProfileDocument} from './firebase/firebase-utils';


export default class App extends Component {
    constructor() {
        super();
        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapShot => {
                    this.setState ({
                        currentUser: {
                            id: snapShot.id,
                            ...snapShot.data()
                        }
                    })
                });
            }
            this.setState({currentUser: userAuth});
        });

    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser}/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/shop' component={ShopPage}/>
                    <Route path='/signin' component={SignInAndSingUp}/>
                </Switch>
            </div>
        )
    }

}