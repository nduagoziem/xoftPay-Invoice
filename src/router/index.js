import { createRouter, createWebHistory } from 'vue-router'
import axios from 'axios'
import { checkSessionUrl } from '@/config/api'
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
import NotFoundView from '@/views/NotFoundView.vue'
import DashBoardView from '@/views/DashBoardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },

    {
      path: "/dashboard",
      name: "dashboard",
      meta: { requiresAuth: true },
      component: DashBoardView,
    },

    {
      path: "/customers",
      name: "customers",
      meta: { requiresAuth: true },
      component: CustomersView,
    },

    {
      path: "/customers/add",
      name: "add-customers",
      meta: { requiresAuth: true },
      component: AddCustomersView,
    },

    {
      path: "/customers/edit/:id",
      name: "edit-customers",
      meta: { requiresAuth: true },
      component: EditCustomersView,
    },


    {
      path: "/items",
      name: "items",
      meta: { requiresAuth: true },
      component: ItemsView,
    },

    {
      path: "/items/add",
      name: "add-items",
      meta: { requiresAuth: true },
      component: AddItemsView,
    },

    {
      path: "/items/edit/:id",
      name: "edit-items",
      meta: { requiresAuth: true },
      component: EditItemsView,
    },

    {
      path: "/invoices",
      name: "invoices",
      meta: { requiresAuth: true },
      component: InvoiceView,
    },

    {
      path: "/invoices/add",
      name: "add-invoices",
      meta: { requiresAuth: true },
      component: AddInvoiceView,
    },

    {
      path: "/invoices/edit/:id",
      name: "edit-invoices",
      meta: { requiresAuth: true },
      component: EditInvoiceView,
    },

    {
      path: "/invoices/invoice-details/:id",
      name: "invoice-details",
      meta: { requiresAuth: true },
      component: InvoiceDetailsView,
    },

    {
      path: "/expenses",
      name: "expenses",
      meta: { requiresAuth: true },
      component: ExpensesView,
    },

    {
      path: "/expenses/add",
      name: "add-expenses",
      meta: { requiresAuth: true },
      component: AddExpensesView,
    },

    {
      path: "/expenses/edit/:id",
      name: "edit-expenses",
      meta: { requiresAuth: true },
      component: EditExpensesView,
    },

    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView,
    },
  ]
})

export default router

router.beforeEach(async (to, from, next) => {
  
  if (to.matched.some(record => record.meta.requiresAuth)) {
    try {
      // Check session from backend to confirm if the user is authenticated
      const response = await axios.get(`${checkSessionUrl}`);
        
      if (response.data.authenticated) {
        next(); // User is authenticated, allow access to the route
      } 
      else {
        next({ name: 'home' }); // User is not authenticated, redirect to Login/Sign Up page
      }
    } 
    catch (error) {
      next({ name: 'home' }); // On error (e.g., session expired), redirect to Login/Sign Up
    }
  }
  else {
    next(); // This route does not require authentication
  }
  
});