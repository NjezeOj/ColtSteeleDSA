class graph {
    constructor() {
        this.adjacencylist = {}
    }

    addVertex(vertex) {
        if (!this.adjacencylist[vertex]) this.adjacencylist[vertex] = []

    }

    addEdge(arg1, arg2) {
        this.adjacencylist[arg1].push(arg2)
        this.adjacencylist[arg2].push(arg1)
    }

    removeEdge(arg1, arg2) {
        this.adjacencylist[arg1] = this.adjacencylist[arg1].filter(v => v !== arg2)

        this.adjacencylist[arg2] = this.adjacencylist[arg2].filter(v => v !== arg1)
    }

    removeVertex(vertex) {
        while (this.adjacencylist[vertex].length) { //the reason for this is to get the length and 
            //keep removing the last element from the array until the array length is Zero 
            const adjacentVertex = this.adjacencylist[vertex].pop() //gets the popped item
            this.removeEdge(vertex, adjacentVertex)
        }

        delete this.adjacencylist[vertex]

    }

    /*  
    DEPTH FIRST TRAVERSAL
-The function should accept a starting node

-Create a list to store the end result, to be returned at the very end

-Create an object to store visited vertices

-Create a helper function which accepts a vertex

    -The helper function should return early if the vertex is empty

    -The helper function should place the vertex it accepts into the visited object and push that vertex into the result array.

    -Loop over all of the values in the adjacencyList for that vertex

    -If any of those values have not been visited, recursively invoke the helper function with that vertex

-Invoke the helper function with the starting vertex

-Return the result array   
    */

    DFSRecursive(){
        const result = [];
        const visited = {};

        function dfs(vertex){
            
        }
    }
}

let g = new graph()
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")




g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")

/* 

            A
          /    \
          B     C
          |     |
          D --- E
          \     /
             F

*/


console.log(g.adjacencylist)

