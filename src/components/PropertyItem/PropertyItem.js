import React from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';
import Truncate from 'react-truncate';

const PropertyItem = (props) => {
    return (
        <a href="#" target="_blank" rel="noopener noreferrer">
            <Card className="shadow">                
                <CardImg top width="100%" src="https://res.cloudinary.com/emeraldstay/image/upload/f_auto,g_auto,t_search_page/nsqurylx6k7gxfrnbcwk" alt="Card image cap" />
                <CardBody>
                    <CardTitle>
                        <Truncate lines={1} ellipsis={<span>...</span>}>
                            ABACHI - Luxury ski chalet
                        </Truncate>
                    </CardTitle>
                    <CardSubtitle className="my-1">
                        Les Gets
                    </CardSubtitle>
                    <CardSubtitle className="my-1">
                        15 Adults beds, 7 Bedrooms
                    </CardSubtitle>                    
                    <CardSubtitle className="my-1">
                        from €525 / night
                    </CardSubtitle>                    
                </CardBody>
            </Card>
        </a>
    );
}

export default PropertyItem;