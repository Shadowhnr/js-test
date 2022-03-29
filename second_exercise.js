function squares(array) {
    for (i=0; i< array.length;i++) {
        array[i] *= array[i] 
    }
    console.log(array)
}


squares([1, 2, 3, 5, 6, 8, 9])
