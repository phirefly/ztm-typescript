import fs from "fs"

const todosPath = 'todos.json'

type Todo = {
  id: number;
  task: string;
  description?: string;
}

function getTodos(): Todo[] {
  // Load the file of todos
  if(!fs.existsSync(todosPath)){
    return [];
  } else {
    const data = fs.readFileSync(todosPath);
    return JSON.parse(data.toString()) as Todo[];
  }
};
function listTodos(): void {};
function saveTodos(todos: Todo[]): void {
  // Turn our todos into a json file
  fs.writeFileSync(todosPath, JSON.stringify(todos));
};
function removeTodo(id: number): void {
  // Load todo's
  const todos: Todo[] = getTodos();
  // Find the id
  // Remove from the todos
  const matchedIndex = (todoElement) => {todoElement.id == id};
  const index = todos.findIndex(matchedIndex);
  if (index !== -1) {
    console.log(`deleting index: ${index}`)
    // delete todos[index]
    todos.splice(index,1)[0]
  } else {
    console.log("couldn't find anything to remove")
  }

}
;
function addTodo(task: string): void {
  const todos: Todo[] = getTodos();
  const id = todos.length > 0 ? todos[todos.length-1].id + 1 : 1
  todos.push({ id, task })
  saveTodos(todos);
  console.log(`saved todos! id: ${id}, Task: ${task}`);
};
function cli(): void {};

addTodo('my task');
console.log("todos: ", getTodos());
removeTodo(3);