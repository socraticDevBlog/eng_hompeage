import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fas fa-terminal"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1></h1>
                <p>Homepage to this Maxime Bonin who is a software and web developer</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Philosophy</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Career</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
