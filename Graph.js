
/**
 * In computer science, a graph is an abstract data type that is meant to implement the undirected
 * graph and directed graph concepts from mathematics, specifically the field of graph theory.
 * A graph data structure consists of a finite (and possibly mutable) set of vertices or nodes
 * or points, together with a set of unordered pairs of these vertices for an undirected graph
 * or a set of ordered pairs for a directed graph. These pairs are known as edges, arcs, or lines
 * for an undirected graph and as arrows, directed edges, directed arcs, or directed lines for a
 * directed graph. The vertices may be part of the graph structure, or may be external entities
 * represented by integer indices or references.
 */

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

  dfsRecursion(start) {
    let result = [];
    let visited = {};

    (function helper(v) {
      if (!v) return null;
      visited[v] = true;
      result.push(v);
      console.log(this.adjacencyList[v]);

    })(start);
    
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

graph.dfsRecursion('Moscow');

