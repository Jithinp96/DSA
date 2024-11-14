class Graph {
    constructor () {
        this.adjList = new Map()
    }

    addVertex(vertex) {
        if (!this.adjList.has(vertex)) {
            this.adjList.set(vertex, [])
        }
    }

    addEdge(vertex1, vertex2) {
        this.adjList.get(vertex1).push(vertex2)
        this.adjList.get(vertex2).push(vertex1)
    }

    dfs(startingNode) {
        const visited = new Set()
        this._dfsRecursive(startingNode, visited)
    }

    _dfsRecursive(vertex, visited) {
        visited.add(vertex)
        console.log(vertex)

        const neighbors = this.adjList.get(vertex)
        for (let neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                this._dfsRecursive(neighbor, visited)
            }
        }
    }
}

const graph = new Graph()

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")

graph.addEdge("A", "B")
graph.addEdge("A", "C")
graph.addEdge("B", "D")
graph.addEdge("C", "E")
graph.addEdge("D", "E")

console.log("DFS Traversal:")
graph.dfs("A")