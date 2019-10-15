import React from 'react';
import { connect } from "react-redux";
import PropertyItem from "../PropertyItem/PropertyItem";
import { fetchMoreProperties } from "../../redux/propertyListActions"

class PropertyList extends React.Component {
    componentDidMount() {
        this.props.fetchMoreProperties()
    }
    render() {
        return (
            <PropertyItem/>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchMoreProperties: () => dispatch(fetchMoreProperties())
})
const mapStateToProps = state => ({})

export default connect(mapStateToProps, mapDispatchToProps)(PropertyList);