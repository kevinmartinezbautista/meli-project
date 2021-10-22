import React from 'react';
import {connect} from 'react-redux';

const catalogoProductos = () => (
    <section>

    </section>
)
const mapStateToProps = state => ({
    busqueda: state.busqueda
})

const mapDispatchToProps = dispatch => ({
 
})

export default connect(mapStateToProps, mapDispatchToProps)(catalogoProductos);
