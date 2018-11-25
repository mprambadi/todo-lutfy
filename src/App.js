import React, { Component } from "react";
class App extends Component {
  state = {
    todo: "",
    todos: [],
    status: false
  };

  handleChange = e => {
    this.setState({ todo: e.target.value });
  };

  handleAddTodo = e => {
    if (e.key === "Enter") {
      this.setState(state => ({
        todo: "",
        todos: [
          ...state.todos,
          { id: Date.now(), name: state.todo, status: false, edit: false }
        ]
      }));
    }
  };

  handleEditTodo = (e, item) => {
    if (e.key === "Enter") {
      this.setState(state => ({
        todos: state.todos.map(todo =>
          todo.id === item.id ? { ...todo, ...item } : todo
        )
      }));
    }
  };

  handleCheckAll = () => {
    this.setState(state => ({
      todos: state.todos.map(todo => ({ ...todo, status: !state.status })),
      status: !state.status
    }));
  };

  handleDeleteAll = () => {
      this.setState(state=> ({
          todos:state.todos.filter(todo=>todo.status!==true)
      }))
  }

  handleClickTodo = item => {
    this.setState(state => ({
      todos: state.todos.map(todo =>
        todo.id === item.id ? { ...todo, ...item } : todo
      )
    }));
  };
  render() {
    return (
      <div className="d-flex justify-content-center">
        <div>
          <div className="d-flex justify-content-between">
            <div>
              Active
              {this.state.todos.filter(todo => todo.status === false).length}
            </div>

            <div>
              Finish
              {this.state.todos.filter(todo => todo.status === true).length}
            </div>
          </div>
          <input
            type="text"
            value={this.state.todo}
            onChange={this.handleChange}
            onKeyPress={this.handleAddTodo}
            className="form-control"
          />

          {this.state.todos.length > 0 && (
            <div className="d-flex justify-content-between">
              <div onClick={this.handleCheckAll}>Check All</div>
              <div onClick={this.handleDeleteAll}>Delete All</div>
            </div>
          )}

          <div>
            {this.state.todos.map(todo => (
              <div className="d-flex justify-content-between mt-2" key={todo.id}>
                <div>
                  {todo.edit ? (
                    <input
                      autoFocus
                      onBlur={() =>
                        this.handleClickTodo({ id: todo.id, edit: !todo.edit })
                      }
                      defaultValue={todo.name}
                      onKeyPress={e =>
                        this.handleEditTodo(e, {
                          id: todo.id,
                          name: e.target.value,
                          edit: !todo.edit
                        })
                      }
                      className="form-control"
                    />
                  ) : (
                    <div
                      onClick={() =>
                        this.handleClickTodo({
                          id: todo.id,
                          status: !todo.status
                        })
                      }
                    >
                      {todo.status ? <strike> {todo.name} </strike> : todo.name}
                    </div>
                  )}
                </div>
                <button
                  onClick={() =>
                    this.handleClickTodo({ id: todo.id, edit: !todo.edit })
                  }
                  className="btn btn-primary"
                >
                  Edit
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
