import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CustomersView from '@/views/CustomersView.vue'
import ItemsView from '@/views/ItemsView.vue'
import InvoiceView from '@/views/InvoiceView.vue'
import ExpensesView from '@/views/ExpensesView.vue'
import AddCustomersView from '@/views/AddCustomersView.vue'
import AddItemsView from '@/views/AddItemsView.vue'
import AddInvoiceView from '@/views/AddInvoiceView.vue'
import AddExpensesView from '@/views/AddExpensesView.vue'
import EditCustomersView from '@/views/EditCustomersView.vue'
import EditItemsView from '@/views/EditItemsView.vue'
import EditExpensesView from '@/views/EditExpensesView.vue'
import EditInvoiceView from '@/views/EditInvoiceView.vue'
import InvoiceDetailsView from '@/views/InvoiceDetailsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },

    {
      path: "/customers",
      name: "customers",
      component: CustomersView,
    },

    {
      path: "/customers/add",
      name: "add-customers",
      component: AddCustomersView,
    },

    {
      path: "/customers/edit/:id",
      name: "edit-customers",
      component: EditCustomersView,
    },


    {
      path: "/items",
      name: "items",
      component: ItemsView,
    },

    {
      path: "/items/add",
      name: "add-items",
      component: AddItemsView,
    },

    {
      path: "/items/edit/:id",
      name: "edit-items",
      component: EditItemsView,
    },

    {
      path: "/invoices",
      name: "invoices",
      component: InvoiceView,
    },

    {
      path: "/invoices/add",
      name: "add-invoices",
      component: AddInvoiceView,
    },

    {
      path: "/invoices/edit/:id",
      name: "edit-invoices",
      component: EditInvoiceView,
    },

    {
      path: "/invoices/invoice-details/:id",
      name: "invoice-details",
      component: InvoiceDetailsView,
    },

    {
      path: "/expenses",
      name: "expenses",
      component: ExpensesView,
    },

    {
      path: "/expenses/add",
      name: "add-expenses",
      component: AddExpensesView,
    },

    {
      path: "/expenses/edit/:id",
      name: "edit-expenses",
      component: EditExpensesView,
    },


  ]
})

export default router