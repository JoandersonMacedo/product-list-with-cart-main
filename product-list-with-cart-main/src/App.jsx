import './App.css'
import AppContainer from './Components/AppContainer'
import { CartProvaider } from './Contexts/CartContext'
import { OrderConfirmationProvider } from './Contexts/OrderConfirmationContext'

function App() {

  return (
    <CartProvaider>
      <OrderConfirmationProvider>
        <AppContainer />
      </OrderConfirmationProvider>
    </CartProvaider>
  )
}

export default App
