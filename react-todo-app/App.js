import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import ReactDOM from 'react-dom';
import { ListGroup, ListGroupItem, Card, CardTitle, CardBody, CardFooter } from 'reactstrap';

// +----------------+
// |                |
// |    ACTIONS     |
// |                |
// +----------------+

function addTodo(todo) {
  return {
    type: 'ADD_TODO',
    todo
  }
}

function addList(list) {
  return {
    type: 'ADD_LIST',
    list
  }
}


// +----------------+
// |                |
// |    REDUCERS    |
// |                |
// +----------------+

const reducers = {
  todos: (state = [], action) => {
    switch(action.type) {
      case 'ADD_TODO':
        return [
          ...state,
          {
            ...action.todo,
            id: state.length + 1
          }
        ]
      default:
        return state
    }
  },
  lists: (state = [], action) => {
    switch(action.type) {
      case 'ADD_LIST':
        return [
          ...state,
          {
            ...action.list,
            id: state.length + 1
          }
        ]
      default:
        return state
    }
  }
}

// +----------------+
// |                |
// |     STORE      |
// |                |
// +----------------+

const store = createStore(combineReducers(reducers),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

function mapStateToProps(state) {
  const { todos, lists } = state;
  return { todos, lists }
}

// +----------------+
// |                |
// |   COMPONENTS   |
// |                |
// +----------------+

class List extends Component {
  constructor(props){
    super(props)
  }

  todos = () => {
    return this.props.todos.filter(todo => {
      return todo.listId === this.props.listId;
    }).map(todo => {
      return <ListGroupItem key={todo.id}>{todo.text}</ListGroupItem>
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    store.dispatch(addTodo({ text: this.refs.todoText.value, listId: this.props.listId }));
    this.refs.todoText.value = '';
  }

  render() {
    return (
      <Card>
        <CardTitle>{this.props.title}</CardTitle>
        <CardBody>
          <ListGroup>
            {this.todos()}
          </ListGroup>
        </CardBody>
        <CardFooter>
          <form onSubmit={this.handleSubmit}>
            <input
              ref="todoText"
              type="text"
              placeholder={`Add a ${this.props.title} todo`}
            />
            <button type="submit">Submit</button>
          </form>
        </CardFooter>
      </Card>
    )
  }
}

class Board extends Component {
  constructor(props) {
    super(props)
  }

  handleSubmit = (e) => {
    e.preventDefault();
    store.dispatch(addList({ title: this.refs.listTitle.value }))
    this.refs.listTitle.value = '';
  }

  lists = () => {
    return this.props.lists.map(list => {
      return <List title={list.title} listId={list.id} key={list.id} />
    })
  }

  render() {
    return (
      <div style={{display: 'flex'}}>
        {this.lists()}
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="listTitle" placeholder="Add a list"/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

List = connect(mapStateToProps)(List);
Board = connect(mapStateToProps)(Board);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Board />
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));
