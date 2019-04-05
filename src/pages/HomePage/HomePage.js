import React, {Component} from 'react'
import {connect} from "react-redux";
import * as AppActions from "../../actions/AppActions";
import {bindActionCreators} from "redux";
import HomeCategories from "../../components/HomeCategories/HomeCategories";

@connect(mapStateToProps, mapDispatchToProps)
export default class HomePage extends Component {


    render() {
        const categories= [{name: 'Future Trips', color: 'orange_yellow', link: '/'},
            {name: 'Last Trip', color: 'yellow_blue', link: '/'},
            {name: 'All Trips', color: 'blue_turquoise', link: '/'},
            {name: 'Wish List', color: 'turquoise_yellow', link: '/'},
            {name: 'Add a Trip', color: 'orange_blue', link: '/'}];
        return (
            <div className='home__wrapper'>
                {categories.map((item, key) =>
                  <HomeCategories key={key} {...item} />
                )}
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