import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import "bootstrap/dist/css/bootstrap.min.css"
import "./static/style/style.css"
import "react-jinke-music-player/assets/index.css"
import App from "./App"
import reducers from "./reducers"
import thunk from "redux-thunk"

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const store = createStoreWithMiddleware(reducers)

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>,

    document.querySelector("#root")
)