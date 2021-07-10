// Линейный алгоритм для поиска в массиве

const array = [1,4,5,6,7,1,2,7,6,2,11];

let count = 0
function linearSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        count += 1;
        if (array[i] === item) {
            return i;
        }
    }
    return null;
}

console.log(linearSearch(array, 81));
console.log('Сложность алгоритма = ', count);
