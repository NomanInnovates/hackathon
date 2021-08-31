import Tab from 'react-bootstrap/Tab'
import { Col, Nav, Row, Tabs,Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import {FaMapMarkerAlt , FaRegClock} from 'react-icons/fa'
import Menu from './Menu'
import ResReview from './ResReview'

function ResDetail() {
    const { id } = useParams();
    const data = useSelector(store => store.ResturantDataReducer)
    const newData = data.filter(item=> item.id == id)[0]
        console.log("resid=>",newData)
    return (<div className="restaurant-details">

        <div className="res-details-header">
            <img src={newData.mainImg} alt="hero img" />
            <div className="header-end">
                <Container className="d-flex">
                    <div><img src={newData.resLogo} alt="logo" /></div>
                    <div>
                <h3>{newData.resturantName}</h3>
            <p><FaMapMarkerAlt/>{newData.address}</p></div></Container></div>
        </div>
        <div className="res-details-body">
        <Container>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={3}>
        <h3>All Details</h3>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first">Menu</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">Reviews</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="third">Restaurant info</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
         <Menu/>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
        <ResReview />
        </Tab.Pane>
        <Tab.Pane eventKey="third">
            <div className="res-info">
        <h1>Resturant Location</h1>
        <h6>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</h6>
        <h1>Working Hours</h1>
        <span className="res-timing"><FaRegClock/>{newData.timings}</span>
        </div>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
</Container>
</div>
        </div>
    )
}

export default ResDetail
