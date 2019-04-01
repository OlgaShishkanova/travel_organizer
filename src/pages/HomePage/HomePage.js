import React, {Component} from 'react'
import {connect} from "react-redux";
import * as AppActions from "../../actions/AppActions";
import {bindActionCreators} from "redux";

@connect(mapStateToProps, mapDispatchToProps)
export default class HomePage extends Component {


    render() {
        return (
            <div className='home__wrapper'>
                <div className='home__inner'>
                    Дом, который построил Джек
                    <br/>
                    I'm gonna write here smth nice
                </div>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        state: state.app
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(AppActions, dispatch)
    }
}