var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        }, {
          id: 2,
          text: 'Go to restaurant'
        }, {
          id: 3,
          text: 'Play video games'
        }, {
          id: 4,
          text: 'Watch the last episode of The Walking Dead'
        }
      ]
    };
  },
  handleAddTodo: function(text) {
    alert('AddTodo: ' + text);
  },
  render: function() {
    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos} />
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;
