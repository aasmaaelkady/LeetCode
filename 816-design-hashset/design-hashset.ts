class MyHashSet {
    constructor() {
  
    }

    add(key: number): void {
        this[key] = null
    }

    remove(key: number): void {
        delete this[key]
    }

    contains(key: number): boolean {
        return this.hasOwnProperty(key)
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */