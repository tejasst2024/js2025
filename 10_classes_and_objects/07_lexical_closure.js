function getFun() {
    let name = 'Tejas'
    function getInnerFun() {
        console.log(name)
    }
    return getInnerFun
}
const val = getFun()
val()
