// Сортировка быстрая - рекурсивная сортировка (вызывающая сама себя)
// Должно быть какое-то условие прекращающая рекурсию для того, чтобы не докустить
// бесконечной

// Разбиение массивов на подмассивы до того момента, пока каждый из массивов не станет равен 1
// Затем они склеиваются в один большой.
const arr = [0,3,2,5,6,8,23,9,4,2,1,2,9,6,4,1,7,-1,-5, 23,6,2,35,6,3,32,9,4,2,1,2,9,6,4,1,7,-1,-5,23,9,4,2,1,2,9,6,4,1,7,-1,-5, 23]
let count = 0

function quickSort(array) {
    if (array.length <= 1) {
        return array
    }
    let pivotIndex = Math.floor(array.length / 2);
    let pivot = array[pivotIndex]
    let less = []
    let greater = []
    for (let i = 0; i < array.length; i++) {
        count += 1
        if(i === pivotIndex)
            continue
        if (array[i] < pivot) {
            less.push(array[i])
        } else {
            greater.push(array[i])
        }
    }
    return [...quickSort(less), pivot, ...quickSort(greater)]
}

console.log(quickSort(arr))
console.log('Итерации', count)