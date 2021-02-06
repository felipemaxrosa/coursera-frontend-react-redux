import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseURL } from '../shared/baseUrl';
import { FadeTransform } from "react-animation-components";

function RenderCard({ item, isLoading, errMess }) {
  if (isLoading) {
    return (
      <Loading />
    )
  } else if (errMess) {
    return (
      <h4>{ errMess }</h4>
    )
  } else {
    return (
      <FadeTransform in transformProps={{
        exitTransform: 'scale(0.5) translateY(-50%)'
      }}>
        <Card>
          <CardImg src={baseURL + item.image} alt={item.name} />
    
          <CardBody>
            <CardTitle><strong>{item.name}</strong></CardTitle>        
            {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
            <CardText>{item.description}</CardText>
          </CardBody>
        </Card>
      </FadeTransform>
    );
  }
}

function Home({dish, promotion, leader, dishesLoading, dishesErrMess, promosLoading, promosErrMess}) {
  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col-12 col-md m-1">
          <RenderCard item={dish}
            isLoading={dishesLoading}
            errMess={dishesErrMess} />
        </div>

        <div className="col-12 col-md m-1">
          <RenderCard item={promotion}
            isLoading={promosLoading}
            errMess={promosErrMess} />
        </div>

        <div className="col-12 col-md m-1">
          <RenderCard item={leader} />
        </div>
      </div>
    </div>
  )
}

export default Home;
