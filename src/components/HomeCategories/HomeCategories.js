import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export default class HomeCategories extends PureComponent {

    static propTypes = {
        name: PropTypes.string,
        color: PropTypes.string,
        link: PropTypes.string,
    };

    render() {
        const {name, color, link} = this.props;
        return (
            <a href={link} className={classNames('home_categories', `${color}`)}>{name}</a>
        )
    }
}
