import { defineStore } from "pinia";
import { ref } from "vue";

export const useItemStore = defineStore("items", 
    () => {
        // States
        const items = ref([]); // for storing name, price and quantity
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

        const addItem = () => {

            const newItem = {
                itemName: name.value,
                itemPrice: price.value,
                itemQuantity: quantity.value,
                itemID: generateUniqueID()
            }

            items.value.push(newItem)
            name.value = ""
            price.value = ""
            quantity.value = ""
        }

        //Checking and removing item data that was saved in local storage
        // Data will be saved in the database
        const storage = localStorage.getItem("items")
        if (storage) {
            localStorage.clear("items")
        }

        return{items, name, price, quantity, addItem, storage}
    },
)