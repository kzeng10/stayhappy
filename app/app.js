import {default as React, Component} from 'react';
import {default as ReactDOM} from 'react-dom';
import {default as update} from 'react-addons-update';
import {Breadcrumb, BreadcrumbItem, Table, Glyphicon, Input, Row, Col, Grid, Navbar, Nav, NavDropdown, MenuItem} from 'react-bootstrap';
import {default as FontAwesome} from 'react-fontawesome';
import {default as _} from 'underscore';

require('babel-polyfill');

class MainView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      scrollY: 0
    };
  }

  componentWillMount() {
    window.addEventListener('scroll', () => {this.setState({scrollY: window.pageYOffset});});
    console.log(socket);
  }

  render() {
    return(
      <div>
        <Grid>
          <Row>
            <Col xs={6} sm={6} md={6} lg={6}><img src="https://scontent-yyz1-1.xx.fbcdn.net/hphotos-xla1/t31.0-8/12307360_10206873519070261_7096329705896541248_o.jpg"/></Col>
            <Col xs={6} sm={6} md={6} lg={6}><img src="https://scontent-yyz1-1.xx.fbcdn.net/hphotos-xla1/t31.0-8/12307360_10206873519070261_7096329705896541248_o.jpg"/></Col>
          </Row>
          <Row>
            <Col xs={6} sm={6} md={6} lg={6}><img src="https://scontent-yyz1-1.xx.fbcdn.net/hphotos-xla1/t31.0-8/12307360_10206873519070261_7096329705896541248_o.jpg"/></Col>
            <Col xs={6} sm={6} md={6} lg={6}><img src="https://scontent-yyz1-1.xx.fbcdn.net/hphotos-xla1/t31.0-8/12307360_10206873519070261_7096329705896541248_o.jpg"/></Col>
          </Row>
        </Grid>
      </div>
    );
  }
}


ReactDOM.render(
  <MainView/>,
  document.getElementById('main')
);
