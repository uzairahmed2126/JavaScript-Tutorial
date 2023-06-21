function hello() {
    let back = 'hello edabit.com'
    console.log(back)
    return back
  }
  
  // addition 
  function addition(num1,num2){
      // num1+num2
      // console.log(num1+num2)
      // let sum = 0;
      // for(let i=0;i<arguments.length;i++){
      //     sum+= arguments[i];
      // }
      // console.log(sum)
      let add = arguments[0]+arguments[1]
      console.log(add)   
  }
  addition(3, 2)
  
  addition(-3, -6)
  
  addition(7, 3)