import React, {Component} from 'react'
import {connect} from "react-redux"
import * as AppActions from "../../actions/AppActions"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCog, faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import {bindActionCreators} from "redux"
import classNames from 'classnames'

@connect(mapStateToProps, mapDispatchToProps)
export default class Menu extends Component {
    state={
        isSettings: false
    };

    render() {
        const {isSettings} = this.state;
        let titleText = isSettings ? 'Settings' : 'Travelanner';
        return (
            <div className='menu'>
                <div className='menu__title_wrapper'>
                    <div className='menu__title'>
                        {titleText}
                    </div>
                </div>
                <div className='menu__icon_wrapper' onClick={this.toggleSettings}>
                    <div className='menu__icon'>
                        <FontAwesomeIcon icon={isSettings ? faArrowLeft : faCog} color="#FFC45A" size='lg'/>
                    </div>
                </div>
                <div className={classNames('settings', {isOpen: isSettings})}>

                    <div>Всякие настройки</div>
                    <div>Всякие настройки</div>
                    <div>Всякие настройки</div>
                    <div>Всякие настройки</div>
                </div>
            </div>
        );
    }
    toggleSettings = () =>{
        this.setState({
            isSettings: !this.state.isSettings
        })
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