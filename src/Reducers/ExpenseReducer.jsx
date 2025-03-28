const ExpenseReducer = (state, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            return [...state, action.payload];
        case "DELETE_EXPENSE":
            return state.filter((expense) => expense.id !== action.payload);
        case "EDIT_EXPENSE":
            return state.map((expense) =>
                expense.id === action.payload.id ? action.payload : expense
            );
        default:
            return state;
    }
};

export default ExpenseReducer;