import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import RulesPage from '../pages/RulesPage/RulesPage'
import Menu from "../containers/Menu/Menu";

export default class AuthorizedLayout extends Component {
    render () {
        const { match } = this.props;
        return (
            <div>
                <Menu/>
            <Switch>
                <Route path={`${match.path}`} exact component={HomePage}/>
                <Route path={`${match.path}rules`} component={RulesPage}/>
                <Redirect to="/"/>
            </Switch>
            </div>
        )
    }

}
