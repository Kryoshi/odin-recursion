function mergeSort(array) {
  let l = array.length;
  if (l === 1) {
    return array;
  }
  const offset = l % 2;
  const splitIndex = (l - offset) / 2;
  const right = mergeSort(array.slice(splitIndex));
  const left = mergeSort(array.slice(0, splitIndex));
  return merge(left, right);
}

function merge(left, right) {
  const l = left.length + right.length;
  let merged = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex + rightIndex < l) {
    if (
      left[leftIndex] < right[rightIndex] ||
      right[rightIndex] === undefined
    ) {
      merged.push(left[leftIndex]);
      leftIndex++;
    } else {
      merged.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return merged;
}

arr1 = [3, 2, 1, 13, 8, 5, 0, 1];
arr2 = [105, 79, 100, 110];

console.log(mergeSort(arr1));
console.log(mergeSort(arr2));
