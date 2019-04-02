import React, {Component} from 'react'
import {connect} from "react-redux";
import * as AppActions from "../../actions/AppActions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import {bindActionCreators} from "redux";

@connect(mapStateToProps, mapDispatchToProps)
export default class Menu extends Component {


    render() {
        return (
            <div>
                <div>
                    Travelanner
                </div>
                <div>
                    <FontAwesomeIcon icon={faCog} color="#FFC45A" size='lg'/>
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