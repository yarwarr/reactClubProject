import { Component } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Card,
  CardHeader,
  CardBody,
} from "reactstrap";
import ClubData from "./ClubData";
import Clubs from "./Clubs";
import Search from "./Search";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //count so we know how many clubs to iterate through
      clubs_count: 0,
      data: "",
      clubs: {
        // 0: {
        //   name: "Club Arcane",
        //   city: "Albany",
        //   genre: "Rap",
        //   init: 0,
        //   min: 70,
        //   max: 100,
        // },
        // 1: {
        //   name: "Club Underground",
        //   city: "Rochester",
        //   genre: "Hip-Hop",
        //   init: 0,
        //   min: 30,
        //   max: 50,
        // },
        // 2: {
        //   name: "Club Soda",
        //   city: "Montreal",
        //   genre: "Rock",
        //   init: 0,
        //   min: 12,
        //   max: 20,
        // },
        // 3: {
        //   name: "Club Paradisio",
        //   city: "Buffalo",
        //   genre: "Pop",
        //   init: 0,
        //   min: 32,
        //   max: 52,
        // },
      },
      newModal: false,
      searchTerm: "",
    };
  }

  toggleNew = () => {
    this.setState({ newModal: !this.state.newModal });
  };

  onChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };
  updateData = (apiResponse) => {
    
    const clubs = {};
    
    let id = 0;
    for(var i = 0 ; i<apiResponse.length; i++){
      id++;
      
      
      let newData = {name: apiResponse[i][1], city: apiResponse[i][2], genre: apiResponse[i][3], init: apiResponse[i][6], min: apiResponse[i][5], max: apiResponse[i][4]};
      
      clubs[id] = newData;
      
    
  }
  
  this.setState({
    clubs: clubs,
    clubs_count: id,
    
  });
    
    // this.setState({ data: apiResponse });
  };
  fetchData = () => {
    fetch("http://localhost:4999/clubs")
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          console.log(
            "HTTP error:" + response.status + ":" + response.statusText
          );
          return [["status ", response.status]];
        }
      }) //The promise response is returned, then we extract the json data
      .then(
        (
          jsonOutput //jsonOutput now has result of the data extraction
        ) => {
          this.updateData(jsonOutput);
        }
      )
      .catch((error) => {
        console.log(error);
        this.updateData("");
      });
  };
  componentDidMount() {
    this.fetchData();
  }

  /**
   * Creates a club with the given data
   * @param {Object} data
   */
  createClub = (data) => {
    const clubs = this.state.clubs;
    let id = this.state.clubs_count;
    data.cur = 0;
    clubs[id] = data;
    this.setState({
      clubs: clubs,
      clubs_count: ++id,
      newModal: !this.state.newModal,
    });
  };

  deleteClub = (id) => {
    const clubs = this.state.clubs;
    delete clubs[id];
    this.setState({ clubs: clubs });
  };

  updateClub = (id, data) => {
    const clubs = this.state.clubs;
    clubs[id] = data;
    this.setState({ clubs: clubs });
  };

  render() {
    return (
      <div>
        <h2 className="m-2">Clubs</h2>

        <Container className="m-4">
          {/* <Button onClick={this.toggleNew}>New Car</Button> */}
          <Row className="searchPlace">
            <Col>
              <Search
                onChange={this.onChange}
                onSearch={this.onSearch}
              ></Search>
            </Col>
          </Row>
          <Card>
            <CardHeader>
              List of Clubs
              <Button onClick={this.toggleNew}>New Club</Button>
            </CardHeader>
            <CardBody>
              <Container>
                {Object.keys(this.state.clubs)
                  .filter(
                    (id) =>
                      this.state.clubs[id].name
                        .toLowerCase()
                        .includes(this.state.searchTerm.toLowerCase()) ||
                      this.state.clubs[id].city
                        .toLowerCase()
                        .includes(this.state.searchTerm.toLowerCase()) ||
                      this.state.clubs[id].genre
                        .toLowerCase()
                        .includes(this.state.searchTerm.toLowerCase())
                  )
                  .map((id) => {
                    return (
                      <Clubs
                        id={id}
                        data={this.state.clubs[id]}
                        delete={this.deleteClub}
                        update={this.updateClub}
                        fetch = {this.fetchData}
                      ></Clubs>
                    );
                  })}
                <Modal isOpen={this.state.newModal} toggle={this.toggleNew}>
                  <ModalHeader toggle={this.toggleNew}>
                    Add Club Data
                  </ModalHeader>
                  <ModalBody>
                    <ClubData
                      saveData={this.createClub}
                      cancel={this.cancel}
                      status = "new"
                    ></ClubData>
                  </ModalBody>
                  <ModalFooter></ModalFooter>
                </Modal>
              </Container>
            </CardBody>
          </Card>
        </Container>
      </div>
    );
  }
}

export default Main;
