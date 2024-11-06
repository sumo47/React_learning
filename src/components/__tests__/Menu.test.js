import { fireEvent, render, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Provider } from "react-redux"
import { StaticRouter } from "react-router-dom/server"
import store from "../../utility/store"
import { RESTAURENT_MENU } from "../../mocks/restaurentData"
import Header from "../Header"
import RestuarentMenu from "../RestuarentMenu"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(RESTAURENT_MENU)
    })
})

test("Add items to Cart", async () => {
    const body = render(<StaticRouter>
        <Provider store={store}>
            <Header />
            <RestuarentMenu />
        </Provider>
    </StaticRouter>)

    await waitFor(() => expect(body.getByTestId("order")));
    const add = body.getByTestId("order")
    fireEvent.click(add)

    const cartItem = body.getByTestId("cart")

    expect(cartItem.innerHTML).toBe("Cart [ 1 ]")

})