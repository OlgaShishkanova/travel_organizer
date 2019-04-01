import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import AuthorizedRoute from './AuthorizedRoute'
import AuthorizedLayout from '../layouts/AuthorizedLayout'
import LogPage from './LogPage/LogPage'

@withRouter
export default class Routes extends Component {

    componentDidUpdate (prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname &&
            this.props.scrollTop) {
            window.scrollTo(0, 0)
        }
    }

    render () {

        return (

            <Switch>
                <Route path='/intro/' exact component={LogPage}/>
                <AuthorizedRoute path='/' component={AuthorizedLayout}/>
            </Switch>

        )
    }
}
