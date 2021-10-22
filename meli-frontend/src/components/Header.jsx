import React from 'react';
import {connect} from 'react-redux';
import SearchTool from './SearchTool';
import "../styles/navbar.css";


const Header = () => (

        <header className="nav-header">
            <div className="nav-search column">
                <a href="localhost:3000"> </a>
                <a className="nav-logo" href="//www.mercadolibre.com.mx" tabIndex="2">
                </a>
                <SearchTool></SearchTool>
                
            </div>
        </header>
)
const mapStateToProps = state => ({
    busqueda: state.busqueda
})

const mapDispatchToProps = dispatch => ({
 
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
