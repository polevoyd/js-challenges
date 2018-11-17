
// undirected & adjacency list
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(name){
    // add a key to adl
    this.adjacencyList[name] = [];
  }

  addEdge(v1, v2) {
    // add connection between
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    // remove connection
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
  }

  removeVertex(name) {
    // remove a connection from each vertexes
    this.adjacencyList[name].map(e => {
      this.adjacencyList[e] = this.adjacencyList[e].filter(v => v !== name);
    });
    delete this.adjacencyList[name];
    // or
    // while (this.adjacencyList[name].length) {
    //   const adl = this.adjacencyList[name].pop();
    //   this.removeEdge(name, adl);
    // }
    // delete this.adjacencyList[name];
  }

  // depth-first recursively
  dfsRecursion(start) {
    let result = [];
    let visited = {};
    let adl = this.adjacencyList;
    (function dfs(v) {
      if (!v) return null;
      visited[v] = true;
      result.push(v);
      adl[v].forEach(sibling => {
        if (!visited[sibling]) {
          return dfs(sibling);
        }
      });
    })(start);
    return result;
  }

  // depth-first iterative
  dfsIterative(current) {
    let adlist = this.adjacencyList;
    let s = [];
    let visited = {};
    let result = [];

    s.push(current);
    visited[current] = true;

    while (s.length > 0) {
      let v = s.pop();
      if (!visited.hasOwnProperty(v)) {
        s.push(v);
        visited[v] = true;
        for (let neighbors of adlist[v]) {
          s.push(neighbors);
        }
      }
    }

  }



}

//

let graph = new Graph();
graph.addVertex('Krasnodar');
graph.addVertex('Moscow');
graph.addVertex('Rostov');
graph.addEdge('Krasnodar', 'Rostov');
graph.addEdge('Krasnodar', 'Moscow');
graph.addEdge('Moscow', 'Rostov');
// graph.removeEdge('Krasnodar', 'Rostov');

// graph.removeVertex('Moscow');

console.log(graph.dfsRecursion('Moscow'));

