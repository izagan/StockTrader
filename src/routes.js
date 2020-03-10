import Home from "./components/Home.vue";
import Portofolio from "./components/portofolio/Portofolio.vue"
import Stocks from "./components/stocks/Stocks.vue"
import StockfromStocks from "./components/stocks/Stock.vue"

export const routes = [
    {path:'/', component: Home},
    {path:'/portofolio', component: Portofolio },
    {path:'/stocks', component: Stocks},
];