class MyHashMap {
    constructor() {
        
    }

    put(key: number, value: number): void {
       this[key]= value
    }

    get(key: number): number {
        return  this[key] ?? -1
    }

    remove(key: number): void {
        delete this[key]
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */