import { defineStore } from "pinia";
import { ref } from "vue";

export const useCustomerStore = defineStore("customers", 
    () => {
        // States
        const customers = ref([]); // for storing fullName and email
        const fullName = ref("");
        const email = ref("");
        const numbers = [123456789]; // For generating a unique ID

        // Actions
        const generateUniqueID = () => { // Function to generate a unique ID

            for (let values of numbers) {
        
               return Math.floor(Math.random() * values * 1000000000)              
            }
        }

        const addCustomer = () => {

            const newCustomer = {
                customerName: fullName.value,
                customerEmail: email.value,
                customerID: generateUniqueID()
            }

            customers.value.push(newCustomer)
            fullName.value = ""
            email.value = ""
        }

        //Checking and removing customer data that was saved in local storage
        // Data will be saved in the database
        const storage = localStorage.getItem("customers")
        if (storage) {
            localStorage.clear("customers")
        }
        
        return{customers, fullName, email, addCustomer, storage}
    },
)