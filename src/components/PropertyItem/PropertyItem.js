import React from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import Truncate from 'react-truncate';

const PropertyItem = (props) => {
    return (<div>
            <Card className="shadow" >
                <a href={`https://emeraldstay.com/property/${props.property.slug}`} target="_blank" rel="noopener noreferrer">
                    {props.property.open_graph_image_cache 
                        ? <CardImg top width="100%" src={props.property.open_graph_image_cache} alt="Card image cap" />
                        : <CardImg top width="100%" src="https://reactstrap.github.io/assets/318x180.svg" alt="Card image cap" />                    
                    }
                    <CardBody>
                        <strong>
                            <CardTitle>                                
                                    <Truncate lines={1} ellipsis={<span>...</span>}>                            
                                        {props.property.title}
                                    </Truncate>                            
                            </CardTitle>
                        </strong>
                        <CardSubtitle className="my-1">
                            <i className="fas fa-map-pin"></i>
                            <span className="pl-3"> {props.property.city}</span>
                        </CardSubtitle>
                        <CardSubtitle className="my-1">
                            <i className="fas fa-bed pr-2"></i>
                            <span>{props.property.number_of_bedrooms} Bedrooms, </span> 
                            {props.property.beds_adults 
                                ? <span> {props.property.beds_adults} Adults beds </span>
                                : null}                           
                        </CardSubtitle>
                        <CardSubtitle className="my-1">
                            <i className="fas fa-euro-sign"></i>
                            from <strong>€{props.property.property_price}</strong> / night
                        </CardSubtitle>
                        <CardSubtitle className="d-flex flex-row-reverse">
                            <Button color="warning" className="mt-3"><strong>BOOK</strong></Button> 
                        </CardSubtitle>
                    </CardBody>
                </a>
            </Card>
        </div>
    );
}

export default PropertyItem;