import { defineStore } from "pinia";
import { ref } from "vue";

export const useExpenseStore = defineStore("expenses", 
    () => {
        // States
        const expenses = ref([]); // for storing name, price and quantity
        const name = ref("");
        const price = ref();
        const quantity = ref()
        const numbers = [123456789]; // For generating a unique ID

        // Actions
        const generateUniqueID = () => { // Function to generate a unique ID

            for (let values of numbers) {
        
               return Math.floor(Math.random() * values * 1000000000)              
            }
        }

        const addExpense = () => {

            const newExpense = {
                expenseName: name.value,
                expensePrice: price.value,
                expenseQuantity: quantity.value,
                expenseID: generateUniqueID()
            }

            expenses.value.push(newExpense)
            name.value = ""
            price.value = ""
            quantity.value = ""
        }

        // Checking and removing expenses data that was saved in local storage
        // Data will be saved in the database
        const storage = localStorage.getItem("expenses")
        if (storage) {
            localStorage.clear("expenses")
        }
        
        return{expenses, name, price, quantity, addExpense, storage}
    },
)