import React from 'react';
import {connect} from 'react-redux';
import "../styles/search-tool.css";


const SearchTool = () => (
        <form className="nav-search">
            <input type="text" className="nav-search-input" placeholder="Nunca dejes de comprar">

            </input>
            <button className="nav-search-btn" type="submit">
                <div role="img" className="nav-icon-search"> 
                </div>
            </button>
        </form>
)
const mapStateToProps = state => ({
    busqueda: state.busqueda
})

const mapDispatchToProps = dispatch => ({
 
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchTool);
