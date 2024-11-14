class TrieNode {
    constructor() {
        this.children = {}
        this.isEndOfWord = false
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode()
    }

    insert(word) {
        let node = this.root
        for(let char of word) {
            if(!node.children[char]) {
                node.children[char] = new TrieNode()
            }
            node = node.children[char]
        }
        node.isEndOfWord = true
    }

    search(word) {
        let node = this.root
        for (let char of word) {
            if (!node.children[char]) {
                return false
            }
            node = node.children[char]
        }
        return node != null && node.isEndOfWord
    }

    startsWith(prefix) {
        let node = this.root
        for (let char of prefix) {
            if(!node.children[char]) {
                return false
            }
            node = node.children[char]
        }
        return true
    }
}

const trie = new Trie()

trie.insert("apple")
trie.insert("app")
trie.insert("banana")
trie.insert("bat")
trie.insert("ball")

console.log("Search 'apple':", trie.search("apple"))
console.log("Search 'app':", trie.search("app"))
console.log("Search 'banana':", trie.search("banana"))
console.log("Search 'batman':", trie.search("batman"))

console.log("Starts with 'app':", trie.startsWith("app"))
console.log("Starts with 'ban':", trie.startsWith("ban"))
console.log("Starts with 'cat':", trie.startsWith("cat"))