const assert = require('chai').assert
const ToDo = require('../../lib/todo')
const toDoBox = require('../../lib/todo-box')

describe('Todo-box | Unit Tests', function(){
  context('toDoBox Object', function(){
    it('is has a toDoList array property', function(){
      let toDoList = toDoBox.toDoList
      assert.isArray(toDoList)
    });
  });

  context('addToDo method', function(){

    it('is a method', function(){
      assert.isFunction(toDoBox.addToDo)
    });

    it('adds a ToDo object to the todo list', function(){
      toDoBox.toDoList = []
      toDoBox.addToDo('hello', 'world')
      assert.isObject(toDoBox.toDoList[0])
      assert.instanceOf(toDoBox.toDoList[0], ToDo)
    });

    it('sets its first parameter to the title property of a todo object', function(){
      toDoBox.toDoList = []
      toDoBox.addToDo('hello', 'world')
      assert.equal(toDoBox.toDoList[0].title, 'hello')
    });

    it('sets its second parameter to the body property of a todo object', function(){
      toDoBox.toDoList = []
      toDoBox.addToDo('hello', 'world')
      assert.equal(toDoBox.toDoList[0].body, 'world')
    });
  });

  context('removeToDo method', function(){
    it('is a method', function(){
      assert.isFunction(toDoBox.addToDo)
    });

    it('removes a ToDo object from the todo list', function(){
      toDoBox.toDoList = []
      toDoBox.addToDo('hello', 'world')
      assert.equal(toDoBox.toDoList.length, 1)
      toDoBox.removeToDo(toDoBox.toDoList[0].id)
      assert.equal(toDoBox.toDoList.length, 0)
    });
  });

  context('findToDo method', function(){

    it('is a method', function(){
      assert.isFunction(toDoBox.findToDo)
    });

    it('finds a ToDo object in the todo list with a matching id', function(){
      toDoBox.toDoList = []
      toDoBox.addToDo('hello', 'world')
      var targetToDo = toDoBox.findToDo(toDoBox.toDoList[0].id)
      assert.instanceOf(targetToDo, ToDo);
      assert.equal(targetToDo.id, toDoBox.toDoList[0].id)
    });
  });

  context('filterToDos method', function(){
    it('is a method', function(){
      assert.isFunction(toDoBox.filterToDos)
    });
  });
});
