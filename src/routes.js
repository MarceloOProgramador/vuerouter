import Home from "./Components/Home";
import Tasks from "./Components/Tasks";
import Products from "./Components/Products";
import Error404 from "./Components/Error404Component";

export default [
  { path: "/", component: Home, name: "home"},
  { path: "/products/:id", component: Products, name: "products", props: true},
  { path: "/tasks", component: Tasks, name: "tasks"},
  { path: "/redirect/", redirect: "products/10"},
  { path: "*", component: Error404}
]
