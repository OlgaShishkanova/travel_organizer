import React, {Component} from 'react'
import {connect} from "react-redux";
import * as AppActions from "../../actions/AppActions";
import {bindActionCreators} from "redux";

@connect(mapStateToProps, mapDispatchToProps)
export default class Menu extends Component {


    render() {
        return (
            <div>
                MENU
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