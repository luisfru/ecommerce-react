import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import CartContext from '../contexts/CartContext'

import { useCart } from '../hooks/useCart'

import Home from '../pages/Home'
import Checkout from '../pages/Checkout'
import Information from '../pages/Information'
import Payment from '../pages/Payment'
import Success from '../pages/Success'
import NotFound from '../pages/NotFound'

const App = () => {
  const cart = useCart()

  return (
    <CartContext.Provider value={cart}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/checkout' component={Checkout} />
          <Route exact path='/checkout/information' component={Information} />
          <Route exact path='/checkout/payment' component={Payment} />
          <Route exact path='/checkout/success' component={Success} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </CartContext.Provider>
  )
}

export default App