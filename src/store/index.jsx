import {createStore} from 'redux'

const initState = {
    accounts : [
            {
              id: 1,
              customerName:"Israa Othman",
              accountNumber: "123456",
              accountType: "Savings"
            },
            {
              id: 2,
              customerName:"Ahmad Zahran",
              accountNumber: "987654",
              accountType: "Student accounts"
            },
            {
              id: 3,
              customerName:"Jafer Al-dakhily",
              accountNumber: "976854",
              accountType: "Student accounts"
            },
            {
              id: 4,
              customerName:"Moahammed Al-dakhily",
              accountNumber: "547698",
              accountType: "Student accounts"
            }
    ]
 
}



const reducer = (state = initState,action) => {
return state
}


const store = createStore(reducer)
export default store