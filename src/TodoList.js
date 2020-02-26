import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Card, ListGroup, InputGroup, FormControl, Table} from "react-bootstrap";

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      items: [],
      active: false,
    };
  }
  onChange(event) {
    this.setState(
      {
        userInput: event.target.value
      }
    );
  }
  addTodo(event) {
    event.preventDefault();
    this.setState(
      {
        userInput : '',
        items: [...this.state.items, this.state.userInput]
      },
      () => console.log(this.state.items.length -1)
    );
  }
  removeTodo(itemId) {
    const array = this.state.items;
    const index = array.indexOf(itemId);
    array.splice(index, 1);
    this.setState({
      items: array
    },);
  }
  toggleClass(itemId) {
    const currentState = this.state.active;
      this.setState({ 
        active: !currentState
      }, () => console.log(this.state.items.indexOf(itemId)+"-"+itemId+" "+this.state.active));
        
  }
  renderTodos() {
    return this.state.items.map(itemId => {
      return (
        <ListGroup.Item>
          <div key={itemId} className={this.state.active ? 'test': null} onClick={this.toggleClass.bind(this, itemId)}>
            {itemId}
          </div>
          <Button variant="danger" onClick={this.removeTodo.bind(this, itemId)}>X</Button>
        </ListGroup.Item>
      );
    });
  };
  render() {
    return (
      <div>
        <Card style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100vh", backgroundImage: "linear-gradient(to bottom, #466bf2, #3c6de7, #376fda, #3670cd, #3a70c0, #3b6db7, #3d6aaf, #3e67a6, #3b61a1, #395a9b, #365496, #344e90)"}}>
            <Table>
                <thead>
                    <tr>
                        <th class="text-center text-white">Todo List</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="d-flex flex-column justify-content-between">
                      <td>
                          {this.renderTodos()}
                      </td>
                    </tr>
                </tbody>
            </Table>
            <div>
                <InputGroup>
                    <FormControl
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    value={this.state.userInput}
                    type="text"
                    onChange={this.onChange.bind(this)}
                    />
                    <InputGroup.Append>
                    <Button variant="outline-success btn-primary text-white" onClick={this.addTodo.bind(this)}>Button</Button>
                    </InputGroup.Append>
                </InputGroup>
            </div>
        </Card>
      </div>
    );
  }
}
export default TodoList;
