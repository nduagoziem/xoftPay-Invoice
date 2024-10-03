import { defineStore } from "pinia";
import { ref } from "vue";

export const useInvoiceStore = defineStore("invoices",
    () => {
        //States
        const invoices = ref([]);
        const customerName = ref("");
        const email = ref("");
        const itemName = ref("");
        const price = ref();
        const quantity = ref();
        const shippingFee = ref();
        const issuedDate = ref();
        const dueDate = ref();

        const numbers = [123456789];

        //Actions
        const generateUniqueID = () => { // Function to generate a unique ID

            for (let values of numbers) {
        
               return Math.floor(Math.random() * values * 1000000000)              
            }
        }

        const addInvoice = () => {

            const newInvoice = {
                customerName: customerName.value,
                email: email.value,
                itemName: itemName.value,
                price: price.value,
                quantity: quantity.value,
                shippingFee: shippingFee.value,
                issuedDate: issuedDate.value,
                dueDate: dueDate.value,
                invoiceID: generateUniqueID()
            }

            invoices.value.push(newInvoice)
            customerName.value = ""
            email.value = ""
            itemName.value = ""
            price.value = ""
            quantity.value = ""
            shippingFee.value = ""
            issuedDate.value = ""
            dueDate.value = ""
        }

        //Checking and removing invoice data that was saved in local storage
        // Data will be saved in the database
        const storage = localStorage.getItem("invoices")
        if (storage) {
            localStorage.clear("invoices")
        }

        return{invoices, addInvoice, customerName, email, itemName, price, quantity, shippingFee, issuedDate, dueDate, storage}
    },
)