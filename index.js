// Write your solution here!
const cats= ['Milo', 'Otis', 'Garfield']

cats.length= 0
cats.push('Milo', 'Otis', 'Garfield')
function destructivelyAppendCat(name) {
    cats.push(name)
}

cats.length= 0
cats.push('Milo', 'Otis', 'Garfield')
function destructivelyPrependCat(name) {
    cats.unshift(name)
}

cats.length= 0
cats.push('Milo', 'Otis', 'Garfield')
function destructivelyRemoveLastCat() {
    cats.pop()
}

cats.length= 0
cats.push('Milo', 'Otis', 'Garfield')
function destructivelyRemoveFirstCat() {
    cats.shift()
}

cats.length= 0
cats.push('Milo', 'Otis', 'Garfield')
function appendCat(name) {
    return [...cats, name]
}

cats.length= 0
cats.push('Milo', 'Otis', 'Garfield')
function prependCat(name) {
    return [name, ...cats]
}

cats.length= 0
cats.push('Milo', 'Otis', 'Garfield')
function removeLastCat() {
    return cats.slice(0,-1)
}

cats.length= 0
cats.push('Milo', 'Otis', 'Garfield')
function removeFirstCat() {
    return cats.slice(1)
}