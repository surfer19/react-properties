import React from 'react';
import { connect } from "react-redux";
import PropertyItem from "../PropertyItem/PropertyItem";
import { Spinner } from 'reactstrap';
import InfiniteScroll from "react-infinite-scroller";
import { fetchMoreProperties } from "../../redux/propertyListActions"


class PropertyList extends React.Component {    
    constructor(props) {
        super(props);
        this.state = { 
            loadMore: true,
            propertiesToLoad: [],
            page: 1
        }
    }

    componentDidMount() {
        this.props.fetchMoreProperties(1)
    }

    loadMoreProperties() {        
        // prevents async api duplicity calls
        this.setState({loadMore:false})
        // add new items to already loaded
        this.props.fetchMoreProperties(this.state.page).then(() => {            
            this.setState({
                propertiesToLoad: this.state.propertiesToLoad.concat(this.props.fetchedProperties),
                loadMore: true,
                page: this.state.page + 1
            })
        }) 
    }
    
    render() {        
        if(this.props.fetchedProperties.length > 0) {
            return (
                <InfiniteScroll
                    className="row"
                    pageStart={0}
                    loadMore={this.loadMoreProperties.bind(this)}
                    hasMore={this.state.loadMore}
                    useWindow={true}
                    threshold={800}
                    loader={
                        <div className="loader" key={0}>                            
                            <Spinner color="warning" key="0" className="spinner"/>
                        </div>}>
                    {/* Show items when user hit bottom of browser */}
                    {this.state.propertiesToLoad.map((property, i) => (
                        <div className="col-12 col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xxl-3 mt-4" key={i}>
                            <PropertyItem property={property} key={i}/>
                        </div>
                    ))}
                        
                </InfiniteScroll>                
            )
        }
        else {            
            return(
                <Spinner color="warning" type="grow" style={{position: "fixed",width:"4rem",height: "4rem",transform: "translateX(-50%,-50%)",top: "50%",left: "50%"}}/>
            )
        }
    }
}


const mapDispatchToProps = (dispatch) => ({
    fetchMoreProperties: (page) => dispatch(fetchMoreProperties(page))
})

const mapStateToProps = state => ({
    fetchedProperties: state.propertyListReducer.fetchedProperties
})

export default connect(mapStateToProps, mapDispatchToProps)(PropertyList);