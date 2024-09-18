import React from "react"
import Body from "./components/Body"
import data from "./components/data"
import Footer from "./components/Footer"


export default function App() {
    const bCard = data.map(item => {
        return (
            <Body
                key = {item.id}
                {...item}
            />
        )
    })
    return (
        <div>
        <section>
            {bCard}
            <Footer />

        </section>
        </div>
    )
}