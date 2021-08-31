import React from "react";
import { Container, Row , Col} from "react-bootstrap";
import "./Resturant.css";
import ResturantCard from "./ResturantCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


function ResturantSection() {
    const data = useSelector(store => store.ResturantDataReducer)

  return (
    <div className="resturant-section">
      <Container>
        <Row>
          <div className="Heading">
            <h4 className="small-heading">Top Resturnats</h4>
            <h3 className="main-heading">Popular Resturants</h3>
          </div>
        </Row>
    
        <Row className="resturants-list">
            {data.map(item => {
                return  <Col md={4} sm={6}  xs={12} ><Link to={`/resdetail/${item.id}`} > <ResturantCard id={item.id} resturantName={item.resturantName} resTags={item.resTags} resLogo={item.resLogo} mainImg={item.mainImg} timings={item.timings} address={item.address} /></Link>
                </Col>
            })}
         
          
        </Row>
      </Container>
    </div>
  );
}

export default ResturantSection;
