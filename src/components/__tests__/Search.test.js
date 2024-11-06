import { fireEvent, render, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Provider } from "react-redux"
import { StaticRouter } from "react-router-dom/server"
import Body from "../Body"
import store from "../../utility/store"
import RESTAUREMT_DATA from "../../mocks/restaurentData"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(RESTAUREMT_DATA)
    })
})

test("Shimmer should load on HomePage", () => {
    const body = render(<StaticRouter>
        <Provider store={store}>
            <Body />
        </Provider>
    </StaticRouter>)

    const shimmer = body.getByTestId("shimmer")
    expect(shimmer).toBeInTheDocument();
    // it is testing weather simmer has loaded in the document 
    // toBeInTheDocument comes from @testing-library/jest-dom

    expect(shimmer.children.length).toBe(10)

    console.log(shimmer)
})
test("Restaurent should load on HomePage", async () => {
    const body = render(<StaticRouter>
        <Provider store={store}>
            <Body />
        </Provider>
    </StaticRouter>)

    await waitFor(() => expect(body.getByTestId("search-btn")));

    const restaurantList = body.getByTestId("res-list")
    expect(restaurantList.children.length).toBe(8)
})
test("Search for string(food) on HomePage", async () => {
    const body = render(<StaticRouter>
        <Provider store={store}>
            <Body />
        </Provider>
    </StaticRouter>)

    await waitFor(() => expect(body.getByTestId("search-btn")));
    const input = body.getByTestId("search-input")
    fireEvent.change(input, {
        target: {
            value: "burger"
        }
    })
    const searchBtn = body.getByTestId("search-btn")
    fireEvent.click(searchBtn)

    const restaurantList = body.getByTestId("res-list")
    expect(restaurantList.children.length).toBe(2)

})