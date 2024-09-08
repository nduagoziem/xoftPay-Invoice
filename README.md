# xoftPay Invoice

xoftPay Invoice is an easy to use invoice application built with vue.js 3, specifically designed for small scale to medium scale business enterprises.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

<!-- ### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
``` -->

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## File Structure

```text
xoftPay Invoice/
│
├──  .vscode/
│    ├── extensions.json
│    ├── settings.json
│
├──  node_modules/
│    ├── *****
│    ├── *****
│    ├── *****
│
├──  public/
│    ├── favicon.svg
│   
├──  src/
│    │
│    ├──  assets/
│    │    ├── main.css
│    │  
│    ├──  components/
│    │    ├── CreateInvoiceButton.vue
│    │    ├── CustomerListings.vue
│    │    ├── DashBoard.vue
│    │    ├── ExpensesListings.vue
│    │    ├── ExpensesView.vue
│    │    ├── GreetingComponent.vue
│    │    ├── InvoiceListings.vue
│    │    ├── InvoiceViewNav.vue
│    │    ├── ItemListings.vue
│    │    ├── ItemsViewNav.vue
│    │    ├── NavBar.vue
│    │    ├── ProfitMarginChat.vue
│    │    ├── RecentInvoice.vue
│    │    ├── SalesExpenses.vue
│    │    ├── TotalInvoicesReport.vue
│    │
│    ├──  router/
│    │    ├── index.js
│    │
│    ├──  stores/
│    │    ├── customer.js
│    │    ├── expenses.js
│    │    ├── invoice.js
│    │    ├── items.js
│    │
│    │──  views/
│    │    ├── AddCustomersView.vue
│    │    ├── AddExpensesView.vue
│    │    ├── AddInvoiceView.vue
│    │    ├── AddItemsView.vue
│    │    ├── CustomersView.vue
│    │    ├── EditCustomersView.vue
│    │    ├── EditExpenses.vue
│    │    ├── EditInvoiceView.vue
│    │    ├── EditItemsView.vue
│    │    ├── ExpensesView.vue
│    │    ├── HomeView.vue
│    │    ├── InvoiceDetailsView.vue
│    │    ├── InvoiceView.vue
│    │    ├── ItemsView.vue
│    │    ├── NotFoundView.vue
│    │
│    ├──  App.vue
│    │
│    ├──  main.js
│    
├──  .eslintrc.cjs
│
├──  .gitignore
│
├──  index.html
│
├──  jsconfig.json
│
├──  package-lock.json
│
├──  package.json
│
├──  README.md
│
├──  vite.config.js
│
├──  vitest.config.js
```

## Further Explanation

The App.vue component loads other pages and components via RouterView. Here is the structure

```text
App.vue/
│  
│   ├── <NavBar /> - This is shown on every page
│   ├── <RouterView />
```

For better understanding on how the pages and components are structured, use the Vue.js Dev tools browser extension.

## Deployment

This web application is deployed on vercel. Check it out [here](https://xoftpay-invoice.vercel.app)

## Contribution

You are free to make changes or pull requests to this application. But this should be done moderately.

Happy Coding 😊