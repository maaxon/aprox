export function fillArr(n) {
    let arr = []
    for (let i = 0; i < n; i++) {
        arr[i] = 0
    }
    return arr
}
export function getAB(arr_x,arr_y,n) {
    arr_x=parseFloat(arr_x)
    arr_y=parseFloat(arr_y)
    const sum_x= getSum(arr_x)
    const sum_y= getSum(arr_y)
    const sum_x_sqr= getSumSqr(arr_x)
    const sum_xy= getSumProd(arr_x,arr_y)
    const a = (n*sum_xy-sum_y*sum_x)/(n*sum_x_sqr-Math.pow(sum_x,2))
    const b = (sum_y-a*sum_x)/n
    return {a,b}
}
export function get_r(arr_x,arr_y,n) {
    arr_x=parseFloat(arr_x)
    arr_y=parseFloat(arr_y)
    const avg_x = getAvg(getSum(arr_x),n)
    const avg_y = getAvg(getSum(arr_y),n)
    const sum_yx_avg = getSumMod(arr_x,avg_x,arr_y,avg_y)
    const sum_avg_x = getSumAvgSqr(arr_x,avg_x)
    const sum_avg_y = getSumAvgSqr(arr_y,avg_y)
    console.log(sum_avg_y,sum_avg_x,sum_yx_avg)
    return (sum_yx_avg)/(Math.sqrt((sum_avg_x*sum_avg_y)))
}
function getSum(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}
function getSumSqr(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += Math.pow(arr[i],2)
    }
    return sum
}
function getSumProd(arr_x,arr_y) {
    let sum = 0
    for (let i = 0; i < arr_x.length; i++) {
        sum += arr_x[i]*arr_y[i]
    }
    return sum
}
function parseFloat(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number.parseFloat(arr[i])
    }
    return arr
}
function getAvg(sum,n) {
    return sum/n
}
function getSumMod(arr_x,avg_x,arr_y,avg_y) {
    let sum = 0
    for (let i = 0; i < arr_x.length; i++) {
       sum += (Math.abs((arr_x[i]-avg_x))*Math.abs((arr_y[i]-avg_y)))
    }
    return sum
}
function getSumAvgSqr(arr,avg) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        console.log(Math.pow((arr[i]-avg),2))
        sum += Math.pow((arr[i]-avg),2)
    }
    return sum
}