import { BrowserRouter as Router, Route , Routes} from "react-router-dom";
import Login from "../pages/Login/index.jsx";
import Home from "../pages/Home/index.jsx";
import Header from "../pages/main/Header/index.jsx";
import Clients from "../pages/Clients/index.jsx";
import CreateClient from "../pages/Clients/create/index.jsx";
import Orders from "../pages/Orders/index.jsx";
import CreateOrders from "../pages/Orders/create/index.jsx";
import Products from "../pages/Products/index.jsx";
import CreateProduct from "../pages/Products/create/index.jsx";
import Users from "../pages/Users/index.jsx";
import CreateUser from "../pages/Users/create/index.jsx";

function Routers() {
    return (
        <div className="app align-content-stretch d-flex flex-wrap">
            <Router basename="/">
                <Header />
                <Routes>
                    <Route exact path="/login" element={<Login />} />
                </Routes>

                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/clients">
                        <Route exact path="" element={<Clients />} />
                        <Route exact path="new" element={<CreateClient />} />
                    </Route>
                    <Route exact path="/orders">
                        <Route exact path="" element={<Orders />} />
                        <Route exact path="new" element={<CreateOrders />} />
                    </Route>
                    <Route exact path="/products">
                        <Route exact path="" element={<Products />} />
                        <Route exact path="new" element={<CreateProduct />} />
                    </Route>
                    <Route exact path="/users">
                        <Route exact path="" element={<Users />} />
                        <Route exact path="new" element={<CreateUser />} />
                    </Route>
                </Routes>
            </Router>
        </div>
    )
}

export default Routers;