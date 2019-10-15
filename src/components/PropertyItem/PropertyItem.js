import React from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';
import Truncate from 'react-truncate';

const PropertyItem = (props) => {
    return (
        
            <Card className="shadow">
                <a href={`https://emeraldstay.com/property/${props.property.slug}`} target="_blank" rel="noopener noreferrer">
                    <CardImg top width="100%" src={props.property.twitter_cards_image_cache} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>
                            <Truncate lines={1} ellipsis={<span>...</span>}>                            
                                {props.property.title}
                            </Truncate>
                        </CardTitle>
                        <CardSubtitle className="my-1">
                            {props.property.city}
                        </CardSubtitle>
                        <CardSubtitle className="my-1">
                            {props.property.beds_adults} Adults beds, {props.property.number_of_bedrooms} Bedrooms
                        </CardSubtitle>                    
                        <CardSubtitle className="my-1">
                            from €{props.property.property_price} / night
                        </CardSubtitle>                    
                    </CardBody>
                </a>
            </Card>
        
    );
}

export default PropertyItem;