import { Component } from "react";
import {Card, CardBody, CardHeader, CardFooter, Button, Label, Input} from 'reactstrap';
class ClubData extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            
            name: this.props.name,
            city: this.props.city,
            genre: this.props.genre,
            
            min: this.props.min,
            max: this.props.max,
            init:0
            
        }
    }

    updateName = (e) => {this.setState({name: e.target.value})}

    updateCity = (e) => {this.setState({city: e.target.value})}

    updateMax = (e) => {this.setState({max: e.target.value})}

    updateMin = (e) => {this.setState({min: e.target.value})}

    updateGenre = (e) => {this.setState({genre: e.target.value})}

    editClub=(__club)=>{
        console.log("edit club");
        let url = 'http://localhost:4999/clubs';
          let jData = JSON.stringify({
              prevName: __club,
              name: this.state.name,
              city: this.state.city,
                genre: this.state.genre,
                max: this.state.max,
                min: this.state.min,

              
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
      createClub=()=>{
        console.log("edit club");
        let url = 'http://localhost:4999/clubs';
          let jData = JSON.stringify({
              
              name: this.state.name,
              city: this.state.city,
                genre: this.state.genre,
                max: this.state.max,
                min: this.state.min,

              
              });
          fetch(url,
              { method: 'POST',
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
      
    

    Close = () =>
    {
        if(this.props.status==="update"){
            this.editClub(this.props.name);
        }
        else{
            this.createClub();
        }
        
        this.props.saveData(this.state)
    }
    render()
    {
        return(
            <Card>
                <CardHeader>Club Info</CardHeader>
                <CardBody>
                <Label for="field1">Name</Label>
                <Input id="field1"  name="name"  value={this.state.name}
                        type="text"   onChange={this.updateName} />
                <Label for="field2">City</Label>
                <Input id="field2"  name="city"   value={this.state.city}
                        type="text"   onChange={this.updateCity}/>
                <Label for="field3">Genre</Label>
                <Input id="field3"  name="genre"   value={this.state.genre}
                        type="text"   onChange={this.updateGenre}/>
                <Label for="field4">Max Occupency</Label>
                <Input id="field4"  name="max"   value={this.state.max}
                        type="text"   onChange={this.updateMax}/>
                <Label for="field5">Min Occupency</Label>
                <Input id="field5"  name="min"   value={this.state.min}
                        type="text"   onChange={this.updateMin}/>
                </CardBody>
                <CardFooter>
                    <Button onClick={this.Close}>Save</Button>
                </CardFooter>
            </Card>
        )
    }
}
export default ClubData;
