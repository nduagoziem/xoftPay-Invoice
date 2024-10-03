<script setup>
    import { RouterLink, useRoute } from 'vue-router';

    const smallScreenNavIcons = {
        home: "pi pi-home",
        customers: "pi pi-user",
        items: "pi pi-shopping-bag",
        invoices: "pi pi-receipt",
        expenses: "pi pi-money-bill"

    }

    const activeLink = (routePath) => { // returns some classes based on the active link or page
        const route  = useRoute()
        return route.path === routePath
    }
</script>

<template>
    
    <nav class="container-fluid navbar mb-3">
        
        <div class="container" :style="{display: 'flex', justifyContent: 'space-between'}">

            <div class="logo"></div>

            <!-- For Large Screens Only -->
            <div class="nav-items">
                <RouterLink to="/dashboard" class="nav-link">
                    <span :class="[activeLink('/dashboard') ? 'bg-dark text-light p-2' : '']">DashBoard</span>
                </RouterLink>
                <RouterLink to="/customers" class="nav-link">
                    <span :class="[activeLink('/customers') ? 'bg-dark text-light p-2' : '']">Customers</span>
                </RouterLink>
                <RouterLink to="/items" class="nav-link">
                    <span :class="[activeLink('/items') ? 'bg-dark text-light p-2' : '']">Items</span>
                </RouterLink>
                <RouterLink to="/invoices" class="nav-link">
                    <span :class="[activeLink('/invoices') ? 'bg-dark text-light p-2' : '']">Invoices</span>
                </RouterLink>
                <RouterLink to="/expenses" class="nav-link">
                    <span :class="[activeLink('/expenses') ? 'bg-dark text-light p-2' : '']">Expenses</span>
                </RouterLink>
            </div>

            <!-- For Small Screens Only -->
            <div class="smallScreenIcons">
                <RouterLink to="/dashboard" class="nav-link">
                    <span :class="[smallScreenNavIcons.home, activeLink('/dashboard') ? 'bg-dark p-1' : '']"></span>
                </RouterLink>
                <RouterLink to="/customers" class="nav-link">
                    <span :class="[smallScreenNavIcons.customers, activeLink('/customers') ? 'bg-dark p-1' : '']"></span>
                </RouterLink>
                <RouterLink to="/items" class="nav-link">
                    <span :class="[smallScreenNavIcons.items, activeLink('/items') ? 'bg-dark p-1' : '']"></span>
                </RouterLink>
                <RouterLink to="/invoices" class="nav-link">
                    <span :class="[smallScreenNavIcons.invoices, activeLink('/invoices') ? 'bg-dark p-1' : '']"></span>
                </RouterLink>
                <RouterLink to="/expenses" class="nav-link">
                    <span :class="[smallScreenNavIcons.expenses, activeLink('/expenses') ? 'bg-dark p-1' : '']"></span>
                </RouterLink>
            </div>
            
        </div>
    </nav>    
</template>

<style scoped>

    .logo {
        height: 30px;
        width: 30px;
        background: linear-gradient(to right, rgb(123, 183, 235), black);
        position: relative;
        top: 0px;
        transform: rotate(40deg);
    }

    .nav-items {
        width: 500px;
        display: flex;
        justify-content: space-evenly;
    }

    .nav-items span {
        font-size: large;
    }

    .nav-link {
        font-family: sans-serif;
        font-size: large;
    }

    @media (min-width: 799px) and (max-width: 9999px) {
        .smallScreenIcons {
            display: none;
        }
        
    }

    @media (min-width: 0px) and (max-width: 799px) {
        .smallScreenIcons {
            width: 250px;
            display: flex;
            justify-content: space-between;
            color:  rgb(123, 183, 235);
        }

        .smallScreenIcons span {
            font-size: 1.4rem;
        }

        .nav-items {
            display: none;
        }
    }

</style>