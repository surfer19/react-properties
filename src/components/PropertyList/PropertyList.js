import React from 'react';
import { connect } from "react-redux"
import PropertyItem from '../PropertyItem/PropertyItem';

class PropertyList extends React.Component {
    render() {
        return <PropertyItem/>
    }
}

const mapDispatchToProps = () => ({})
const mapStateToProps = state => ({})

export default connect(mapStateToProps, mapDispatchToProps)(PropertyList);