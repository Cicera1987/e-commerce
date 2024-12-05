import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/home"
import Products from "../pages/products"
import Contacts from "../pages/contacts"

function Router() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/products' element={<Products />} />
                <Route path='/products/:id/edit' element={<Products />} />
                <Route path='/contacts' element={<Contacts />} />
            </Routes>
        </BrowserRouter>
    )

}

export default Router