
// undirected graph
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(name){
    this.adjacencyList[name] = [];
  }

  addEdge(from, to) {
    this.adjacencyList[from].push(to);
    this.adjacencyList[to].push(from);
  }
}

//

let graph = new Graph();
graph.addVertex('first!');

graph.adjacencyList;