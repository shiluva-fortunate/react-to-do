import React, { Component } from 'react';
import styled from 'styled-components';
import './style.css';

const Container = styled.div`
  width: 60%;
  margin: auto;
  border: solid 2px rgb(171, 255, 79);
  margin-top: 5%;
  color: #fff;
  padding: 50px;
  min-height: 30vh;
`;

const Input = styled.input`
  font-size: 14px;
  color: #7e7e7e;
  cursor: text;
  font-weight: 100;
  border: none;
  padding: 0px 39px;
  width: 45%;
  height: 50px;
  border-radius: 8px; 
 
  &:active,
  &:focus {
    text-align: left;
    border: solid 2px #851E3E;
    box-shadow: none;
  }
`;

const Button = styled.button`
  color: rgb(171, 255, 79);
  height: 40px;
  background-color: transparent;
  border-radius: 5px;
  border: solid 2px rgb(171, 255, 79);
  cursor: pointer;
  margin-top: 3px;
  padding: 0px 20px;
  font-weight: 100;
  font-size: 14px;
  margin-left: 7%;
  font-family: 'Caveat';
  text-transform: uppercase;
`;

const Title = styled.p`
  color: #fff;
  font-size: 40px;
  text-align: center;
  margin-top: 8%;
  text-transform: uppercase;
`;

const SubTitle = styled.p`
  color: rgb(171, 255, 79);
  font-size: 20px;
  text-align: left;
  font-weight: 100;
  text-transform: uppercase;
  width: 70%;
  margin: 2% auto;
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
`;

const ListItem = styled.li`
  font-size: 15px;
  text-transform: uppercase;
  border-radius: 30px;
  border: 1px solid rgb(171, 255, 79);
  justify-content: space-between;
  min-width: 100px;
  margin-right: 3%;
  margin-top: 3%;
  display: flex;
  padding: 8px 15px;
`;

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ItemValue = styled.span`
  margin-right: 5%;
`;

const Cancel = styled.span`
  background-color: #597c32;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  text-align: center;
`;

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      newItem: "",
      list:[]
    }
  }

  updateInput(key, value){
    //update react state (local storage)
    this.setState({
      [key]: value
    })
  }

  addItem(){
    //create item with unique ID
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };
    
    //copy of the new list items
    const list = [...this.state.list];

    //add new item to current list
    list.push(newItem);

    ///update the state with the new list and reset
    this.setState({
      list,
      newItem: ""
    })
  } 

  deleteItem(id){
    //copy of the new list items
    const list = [...this.state.list];

    //filter out item being deleted
    const updatedList = list.filter( item => item.id !== id);

    this.setState({
      list: updatedList
    })
  }
  
  render() {
    return (
      <div className = "App">
        <Title>My To-Do List</Title>
        
        <Container>
          
          <SubTitle>Add an item</SubTitle>

          <FlexBox>
            <Input tye="text" placeholder="type an item here" value={this.state.newItem} onChange={e => this.updateInput("newItem", e.target.value)}></Input>
            <Button onClick={() => this.addItem()}>Add +</Button>
          </FlexBox>
          
          <ListContainer>
            {this.state.list.map( item =>{
              return(
                <ListItem key={item.id}>
                  <ItemValue>{item.value}</ItemValue>
                  <Cancel onClick={() => this.deleteItem(item.id)}>x</Cancel>
                </ListItem>  
              )
            } )}
          </ListContainer>

        </Container>
      </div>
    );
  }
}

export default App;
