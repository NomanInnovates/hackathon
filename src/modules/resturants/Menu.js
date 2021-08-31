import React from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
function Menu() {
    return (
        <div>
            <Tabs
  defaultActiveKey="home"
  transition={false}
  id="noanim-tab-example"
  className="mb-3"
>
  <Tab eventKey="home" title="Sandwich">
<p>Sandwich</p>
  </Tab>
  <Tab eventKey="Burger" title="Burger">
 <p>Burger</p>
  </Tab>
  <Tab eventKey="Sauces" title="Sauces" >
  <p>Sauces</p>
  </Tab>
  <Tab eventKey="Desserts" title="Desserts" >
  <p>Desserts</p>
  </Tab>
  <Tab eventKey="Steak" title="Steak" >
  <p>Steak</p>
  </Tab>
</Tabs>
        </div>
    )
}

export default Menu