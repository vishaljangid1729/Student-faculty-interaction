import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from '../LandingPage/home';
import { FacultyRegister } from '../Register/FacultyRegister';
import { StudentRegister } from '../Register/StudentRegister';
import { Feed } from '../Feed/Feed';
import { NewPost } from '../NewPost/newpost';
import { UserList } from '../Users/UserList';
import { Profile } from '../Users/Profile';
import { PostByMe } from '../Users/PostByMe';


export function Routes () {
    return(
        <Router>
            <Switch>
                <Route exact path = '/' component = {Home} ></Route>
                <Route exact path = "/faculty-register" component = {FacultyRegister} ></Route>
                <Route exact path = "/student-register" component = {StudentRegister}></Route>
                <Route exact path = '/home' component = {Feed}></Route>
                <Route exact path = "/new-post" component = {NewPost}></Route>
                <Route exact path = '/all-user' component = {UserList} ></Route>
                <Route exact path = '/profile' component = {Profile} ></Route>
                <Route exact path = "/my-post" component = {PostByMe} ></Route>
            </Switch>
        </Router>
    )
}