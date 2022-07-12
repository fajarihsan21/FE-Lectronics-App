import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/home'
import Login from './pages/login/login'
import MyProfile from './pages/myprofile/myprofile'
import Products from './pages/products/products'
import Register from './pages/register/register'
import Cart from './pages/cart/cart'
import Notife from './pages/notife/notife'
import Checkout from './pages/checkout/checkout'
import History from './pages/history/history'

function router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/products" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/notif" element={<Notife />} />
                <Route path="/me" element={<MyProfile />} />
                <Route path="/history" element={<History />} />
            </Routes>
        </BrowserRouter>
    )
}

export default router
