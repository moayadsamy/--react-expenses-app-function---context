import { createContext, useState } from "react";

export const AppContext = createContext({
    expenses: [],
    addNewExpense: (data) => {},
    removeExpense: (id) => {},
});

export const AppContextProvider = (props) => {
    let [expenses, setExpenses] = useState([]);


    let addNewExpense = (item) => {
        setExpenses((prevState) => {
            return [item, ...prevState];
        });
    };

    let removeExpense = (id) => {
        let data = expenses.filter((element) => element.id != id);
        setExpenses(data);
    };

    return (
        <AppContext.Provider
        value={{
            expenses: expenses,
            addNewExpense: addNewExpense,
            removeExpense: removeExpense,
        }}
        >
            {props.children}
        </AppContext.Provider>
    )
}