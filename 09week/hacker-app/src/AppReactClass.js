const { Component } = React;

class List extends Component {
  constructor(props){
    super(props)
    this.state = {
      todos: []
    }
  }

  todos = () => {
    return this.state.todos.map(todo => {
      return <li key={todo.id}>{todo.text}</li>
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: this.state.todos.length + 1,
          text: this.refs.todoText.value
        }
      ]
    })
    this.refs.todoText.value = '';
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <ul>
          {this.todos()}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input
            ref="todoText"
            type="text"
            placeholder={`Add a ${this.props.title} todo`}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div style={{display: 'flex'}}>
        <List title="Personal"/>
        <List title="School"/>
        <List title="Work"/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));
