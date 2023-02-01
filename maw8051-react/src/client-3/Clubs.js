import React, { Component } from "react";
import {Row, Col, Button, Modal, ModalHeader, ModalFooter, ModalBody, Card, CardHeader, CardBody, Progress} from 'reactstrap';
import ClubData from "./ClubData";
export default class Clubs extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
          updateModal:false,
          message:"",
          currentColor:""
        }
    }

    addCount=(__club)=>{
      let url = 'http://localhost:4999/increment';
        let jData = JSON.stringify({
            club: __club,
            
            });
        fetch(url,
            { method: 'PUT',
            body: jData,
            headers: {"Content-type": "application/json; charset=UTF-8"}        
            })
        .then(
            (response) => 
            {
                if (response.status === 200)
                    return (response.json()) ;
                else
                    return ([ ["status ", response.status]]);
            }
            )//The promise response is returned, then we extract the json data
        .then ((jsonOutput) => //jsonOutput now has result of the data extraction, but don't need it in this case
                {
                    this.props.fetch();
                }
            )
        .catch((error) => 
            {console.log(error);
            this.fetchData();
                } )

  }

  decCount=(__club)=>{
    let url = 'http://localhost:4999/decrement';
      let jData = JSON.stringify({
          club: __club,
          
          });
      fetch(url,
          { method: 'PUT',
          body: jData,
          headers: {"Content-type": "application/json; charset=UTF-8"}        
          })
      .then(
          (response) => 
          {
              if (response.status === 200)
                  return (response.json()) ;
              else
                  return ([ ["status ", response.status]]);
          }
          )//The promise response is returned, then we extract the json data
      .then ((jsonOutput) => //jsonOutput now has result of the data extraction, but don't need it in this case
              {
                  this.props.fetch();
              }
          )
      .catch((error) => 
          {console.log(error);
          this.fetch();
              } )

}
deleteClub=(__club)=>{
  console.log("delete club");
  let url = 'http://localhost:4999/clubs';
    let jData = JSON.stringify({
        name: __club,
      });
    fetch(url,
        { method: 'DELETE',
        body: jData,
        headers: {"Content-type": "application/json; charset=UTF-8"}        
        })
    .then(
        (response) => 
        {
            if (response.status === 200)
                return (response.json()) ;
            else
                return ([ ["status ", response.status]]);
        }
        )//The promise response is returned, then we extract the json data
    .then ((jsonOutput) => //jsonOutput now has result of the data extraction, but don't need it in this case
            {
                this.props.fetch();
            }
        )
    .catch((error) => 
        {console.log(error);
        this.props.fetch();
            } )

}

    toggleUpdate = () => {this.setState({updateModal: !this.state.updateModal})};

    saveData = (data) => {
        this.props.update(this.props.id, data) 

        this.setState({updateModal:!this.state.updateModal})
    }
    disableEnterButton = () => {
        if(this.props.data.init >= this.props.data.max)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    disableLeaveButton = () => {
      if(this.props.data.init <=0)
      {
          return true;
      }
      else
      {
          return false;
      }
  }

    displayColoredProgress = () => {
        if(this.props.data.init >= this.props.data.max)
        {
          this.setState({message:"No-one Allowed in!"})
          this.setState({currentColor:"danger"})
          
        }
        else if(this.props.data.init >= this.props.data.min)
        {
          this.setState({message:"Warn the Bouncer!"})
          this.setState({currentColor:"warning"})
          
        }
        else{
            this.setState({message:"Welcome"})
            this.setState({currentColor:"success"})
            
        }
      }
  render() {
    return (
      <Card>
        <CardBody>
          <Col className="club" key={this.props.id}>
            <center>
              <CardHeader>
                {" "}
                {this.props.data.name}
                <Button onClick={
                  this.toggleUpdate

                }>Edit</Button>
                <Button onClick={() => 
                {this.props.delete(this.props.id)
                this.deleteClub(this.props.data.name)
                }}
                >Delete
                </Button>
              </CardHeader>

              <Col className="club">{this.props.data.city}</Col>
              <Col className="club">{this.props.data.genre}</Col>
              <Col className="club">{this.props.data.init}</Col>
              
              <Row>
                <Col>
                  <Button
                    onClick={() =>
                      {this.props.data.init++
                        this.props.update(this.props.id, this.props.data,
                        this.displayColoredProgress())
                        this.addCount(this.props.data.name)
                        
                        
                      }
                    
                    }
                    disabled={this.disableEnterButton()}
                  >
                    Enter
                  </Button>
                  <Button
                    onClick={() =>
                        {this.props.data.init--
                        this.props.update(this.props.id, this.props.data)
                        this.displayColoredProgress()
                        this.decCount(this.props.data.name)
                        
                      }
                    }
                    disabled={this.disableLeaveButton()}
                  >
                    Leave
                  </Button>
                </Col>
                <Progress value={this.props.data.init} max = {this.props.data.max} color = {this.state.currentColor}>{this.state.message}</Progress>
              </Row>
            </center>
          </Col>
          <Modal isOpen={this.state.updateModal} toggle={this.toggleUpdate}>
            <ModalHeader toggle={this.toggleDate}>Update Club Data</ModalHeader>
            <ModalBody>
              <ClubData
                name={this.props.data.name}
                city={this.props.data.city}
                max={this.props.data.max}
                min={this.props.data.min}
                genre={this.props.data.genre}
                updateData={this.props.update}
                saveData = {this.saveData}
                fetch = {this.props.fetch}
                status = "update"
              ></ClubData>
            </ModalBody>
            <ModalFooter></ModalFooter>
          </Modal>
        </CardBody>
      </Card>
    );
  }
}