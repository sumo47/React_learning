import { render } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import store from "../../utility/store"
import { StaticRouter } from "react-router-dom/server"

test("Logo should load on rendering header", () => {
    // Load Header
    // we have to import render , because Header should be render on jsdom
    const header = render(
        <StaticRouter> <Provider store={store}> <Header /> </Provider></StaticRouter>
    )
    // we will find our logo using logo jest id
    const logo = header.getAllByTestId("logo")
    // getAllByTestId returns array
    // console.log(logo)
    expect(logo[0].src).toBe("http://localhost/dummy.image")
    // Check if logo is loaded

})
test("Online status should be green on rendering header ", () => {
    const header = render(
        <StaticRouter> <Provider store={store}> <Header /> </Provider></StaticRouter>
    )
    const OnlineStatus = header.getByTestId("online-status")
    expect(OnlineStatus.innerHTML).toBe("✅")
})
test("cart should have 0 item on rendering header ", ()=>{
    const header = render(
        <StaticRouter> <Provider store={store}> <Header /> </Provider></StaticRouter>
    )
    const cart = header.getByTestId("cart")
    expect(cart.innerHTML).toBe("Cart [ 0 ]")
})