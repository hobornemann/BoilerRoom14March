
const winnerArrays = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]




function containsSubset(playerArray, winnerArrays) {

    winnerArrays.map(winnerArray =>{
        winnerArray.every((number) => playerArray.includes(number)) ? "Winner" : "Kepp on Playing";
    })
}




// Example usage:
const mainArray = [1, 2, 3, 4, 5, 6, 7];
const subsetArray1 = [2, 4, 6];
const subsetArray2 = [2, 4, 8];
