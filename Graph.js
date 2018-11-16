
// undirected graph
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(name){
    if (this.adjacencyList.hasOwnProperty(name)) {
      this.adjacencyList[name].push(name);
    } else {
      this.adjacencyList[name] = [];
    }

  }
}

//

let graph = new Graph();
graph.addVertex('first!');

graph.adjacencyList;