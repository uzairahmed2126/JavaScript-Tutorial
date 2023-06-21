let callFunc = function(){
    setTimeout(callFunc,40000)
    console.log('helllo')
}
callFunc();