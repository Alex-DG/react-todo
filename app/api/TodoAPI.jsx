var $ = require('jquery');

module.exports = {
  setTodos: function (todos) {
    if ($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function () {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try {
      todos = JSON.parse(stringTodos);
    } catch (e) {

    }

    return $.isArray(todos) ? todos : [];
  },
  filterTodos: function (todos, showCompleted, searchText) {
    var filteredTodos = todos;

    // Filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });

    // Filter by searchText
    filteredTodos = filteredTodos.filter((todo) => {
      var todoText = todo.text.toLowerCase();
      return searchText.lenght === 0 || todoText.indexOf(searchText) > -1; // > -1 is success
    });

    // Sort todos with non-completed first
    filteredTodos.sort((a, b) => {

      // RULES
      // -1 : a should come before b
      // 1 : b should come before a
      // 0 : no change

      if (!a.completed && b.completed) {
        return -1;
      } else if (a.completed && !b.completed) {
        return 1;
      }

      return 0;
    });

    return filteredTodos;
  }
};
