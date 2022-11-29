import { createStore } from "redux";

const initState = {
  accounts: [
    {
      id: 1,
      customerName: "Israa Othman",
      accountNumber: "123456",
      accountType: "Savings",
    },
    {
      id: 2,
      customerName: "Ahmad Zahran",
      accountNumber: "987654",
      accountType: "Student accounts",
    },
    {
      id: 3,
      customerName: "Jafer Al-dakhily",
      accountNumber: "976854",
      accountType: "Student accounts",
    },
    {
      id: 4,
      customerName: "Moahammed Al-dakhily",
      accountNumber: "547698",
      accountType: "Student accounts",
    },
  ],
  numberOfAccounts: 4,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_ACCOUNT":
      return {
        accounts: [...state.accounts, action.payload],
        numberOfAccounts: state.numberOfAccounts + 1,
      };
    case "REMOVE_ACCOUNT":
      return {
        accounts: action.payload,
        numberOfAccounts: state.numberOfAccounts - 1,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
export default store;
