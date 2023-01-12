/*1.let's consider payment functiion is deprected suggest user 
to use newPayment from eslint*/
const payment=()=>{
  return "payment"
}

const newPayment=()=>{
    return 'newPayment'
}

payment()
newPayment()


/* let's consider function should nae should not start contain integre,
retrun error to user for same*/

function withAnInterger4(){
  return  false
}

function withOutAnInterger(){
  return  false
}

withAnInterger4()
withOutAnInterger()


/* Let's consider variables name should start with samll letter
if not please raise a flag */

const correctFormate="correctFormate"
const WrongFormate="WrongFormate"
console.log(correctFormate + WrongFormate)