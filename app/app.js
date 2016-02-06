import {default as React, Component} from 'react';
import {default as ReactDOM} from 'react-dom';
import {default as update} from 'react-addons-update';
import {Breadcrumb, BreadcrumbItem, Table, Glyphicon, Input, Row, Col, Grid, Navbar, Nav, NavDropdown, MenuItem, Button} from 'react-bootstrap';
import {default as FontAwesome} from 'react-fontawesome';
import {default as _} from 'underscore';

require('babel-polyfill');

class MainView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      rows: [],
      happiness: 0,
      count: 0
    };
  }

  componentWillMount() {
    var self = this;
    socket.on('res', function(o) {
      var {rows} = self.state;
      rows = update(rows, {
        $push: [o]
      });
      self.setState({rows});
    });
  }

  generate() {
    app_id = this.refs.app_id;
    fbAsyncInit();
    login();
  }

  render() {
    var happiness;
    var rows = this.state.rows.map((element, i, array) => {
      happiness = 0;
      if(element.res.length !== 0) {
        element.res.forEach((obj) => {
          happiness = happiness + obj.scores.happiness;
        });
        happiness = happiness / element.res.length;
      }
      return(
        <tr>
          <td>{i}</td>
          <td><img src={element.url}/></td>
          <td>{happiness}</td>
        </tr>
      );
    });
    this.setState({happiness: (this.state.happiness + happiness)/(this.state.count+1)});
    this.setState({count: this.state.count+1});
    return(
      <div>
        <Grid>
          <Row>
            <NavMain/>
          </Row>
          <Row>
            <Col xs={6} sm={6} md={6} lg={6} xsOffset={3} smOffset={3} mdOffset={3} lgOffset={3}>
              <label>
                <input ref="app_id" type="text" placeholder="Your FB app_id here" ></input>
              </label>
              <Button bsStyle="primary" onClick={this.generate.bind(this)}>Generate</Button>
            </Col>
          </Row>
          <Row>
            <h3> Average happiness: {this.state.happiness} | Count: {this.state.count} </h3>
          </Row>
          <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Photo</th>
                <th>Happiness</th>
              </tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
          </Table>
        </Grid>
      </div>
    );
  }
}

class NavMain extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    var style = {float: 'left', margin: '7px 10px'};
    var content =
    <Navbar fluid>
      <Grid>
        <Navbar.Header>
          <Navbar.Brand>stalkr</Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavDropdown title="Account">
            <MenuItem>Settings</MenuItem>
            <MenuItem>Logout</MenuItem>
          </NavDropdown>
        </Nav>
      </Grid>
    </Navbar>;
    return content;
  }
}

ReactDOM.render(
  <MainView/>,
  document.getElementById('main')
);
