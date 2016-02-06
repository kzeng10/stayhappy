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
  }

  render() {
    return(
      <div>
        <NavMain {...this.state}/>
        <Grid>
          <Row>
          <Col xs={6} sm={8} md={9}></Col>
          <Col xs={6} sm={4} md={3}><DirectorySearchBar /></Col>
          </Row>
          <DirectoryTable {...this.state}/>
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
    if(this.props.scrollY > 50) {
      content =
      <Navbar fixedTop fluid>
        <Grid>
          <Navbar.Collapse>
            <Navbar.Header>
              <Navbar.Brand>stalkr</Navbar.Brand>
            </Navbar.Header>
            <Navbar.Form pullRight>
              <DirectorySearchBar />
            </Navbar.Form>
          </Navbar.Collapse>
        </Grid>
      </Navbar>;
    }
    return content;
  }
}

class DirectoryTable extends Component {
  //Clicking on file should download
  //Clicking on folder should go into folder
  constructor(props) {
    super(props);
  }

  render() {
    // var rows = _.uniq(Object.keys(this.props.directory)
    //   .filter((file) => {return file.indexOf(this.props.curDir) === 0;}) //only current directory
    //   .map((file) => {return file.substring(this.props.curDir.length);}) //remove directory prefix
    //   .map((file) => {return file.split('/')[0];})) //for nested files, show only top-most parent folder
    // .map((file) => {
    //   var glyph = <Glyphicon glyph='file' />;

    //   //check if folder
    //   if(this.props.directory[this.props.curDir + file] === undefined) {
    //     glyph = <Glyphicon glyph='folder-close' />;
    //     var fileName = file;
    //     function handleClick() {
    //       this.props.openFolder(fileName);
    //     }

    //     file = <a href='#' onClick={handleClick.bind(this)}>{fileName}</a>;

    //   } else {


    //     switch(file.split('.').slice(-2)[0]) {
    //       case 'jpg':
    //       case 'png':
    //       case 'jpeg':
    //       case 'gif':
    //         glyph = <Glyphicon glyph='picture' />;
    //         break;
    //       case 'pdf':
    //         glyph = <FontAwesome className='fa fa-file-pdf-o' name='rootfile'/>;
    //         break;
    //       //add more cases here...
    //     }

    //     //take off .png from the end
    //     file = <a href={'/download/'+this.props.curDir+file}>{file.split('.').slice(0,-1).join('.')}</a>;
    //   }
    //   return (
    //     <tr>
    //       <td>{glyph}</td>
    //       <td>{file}</td>
    //       <td>Today</td>
    //     </tr>
    //   );
    // });

    return(
      <Table responsive hover>
        <thead>
          <tr>
            <th><Glyphicon glyph="star" /></th>
            <th>Name</th>
            <th>Modified</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </Table>
    );
  }
}

class DirectorySearchBar extends Component {
  //Search through directory react-ively
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Input
        type="text"
        placeholder="Search"
        addonAfter={<Glyphicon glyph="search" />}
      />
    );
  }
}


ReactDOM.render(
  <MainView/>,
  document.getElementById('main')
);
