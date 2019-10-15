import React from 'react';
import { connect } from "react-redux";
import PropertyItem from "../PropertyItem/PropertyItem";
import { fetchMoreProperties } from "../../redux/propertyListActions"

class PropertyList extends React.Component {    
    componentDidMount() {
        this.props.fetchMoreProperties()
    }
    render() {
        if(this.props.fetchedProperties) {
            return (
                <div className="row">
                    {this.props.fetchedProperties.map((property, i) => (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xxl-3 mt-4" key={i}>
                            <PropertyItem property={property} key={i}/>
                        </div>
                    ))}
                </div>
            )
        }
        else {
            return <p>loading...</p>
        }
    }
}


const mapDispatchToProps = (dispatch) => ({
    fetchMoreProperties: () => dispatch(fetchMoreProperties())
})
const mapStateToProps = state => ({
    fetchedProperties: state.propertyListReducer.fetchedProperties
})

export default connect(mapStateToProps, mapDispatchToProps)(PropertyList);