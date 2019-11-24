import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Home } from "../LandingPage/home"
import { FacultyRegister } from "../Register/FacultyRegister"
import { StudentRegister } from "../Register/StudentRegister"
import { Feed } from "../Feed/Feed"
import { NewPost } from "../NewPost/newpost"
import { UserList } from "../Users/UserList"
import { Profile } from "../Users/Profile"
import { PostByMe } from "../Users/PostByMe"
import PrivateRoute from "./PrivateRoute"


export class Routes extends React.Component {
   
    render() {
        
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={Home}></Route>
                    <Route
                        exact
                        path='/faculty-register'
                        component={FacultyRegister}
                    ></Route>
                    <Route
                        exact
                        path='/student-register'
                        component={StudentRegister}
                    ></Route>
                    <PrivateRoute
                        exact
                        path='/home'
                        component={Feed}
                    ></PrivateRoute>
                    <PrivateRoute
                        exact
                        path='/new-post'
                        component={NewPost}
                    ></PrivateRoute>
                    <PrivateRoute
                        exact
                        path='/all-user'
                        component={UserList}
                    ></PrivateRoute>
                    <PrivateRoute
                        exact
                        path='/profile'
                        component={Profile}
                    ></PrivateRoute>
                    <PrivateRoute
                        exact
                        path='/my-post'
                        component={PostByMe}
                    ></PrivateRoute>
                </Switch>
            </Router>
        )
    }
}
