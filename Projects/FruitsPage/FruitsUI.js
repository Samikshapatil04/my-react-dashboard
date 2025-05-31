import React, { useState } from "react";
import './FruitsUI.css';

export default function WithoutState() {
    const [fruit, setFruit] = useState("Apple");

    const fruitImages = {
        Apple: "https://extension.umn.edu/sites/extension.umn.edu/files/Two%20apples%20close-up_screen.jpg",
        Banana: "https://www.health.com/thmb/TNkLU68EhibdoVEdPnkDRaALLY0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Bananas-02809456216b4984b8771f12be063cdf.jpg",
        Orange: "https://insanelygoodrecipes.com/wp-content/uploads/2023/01/Fresh-Organic-Tangerine-Oranges-with-Leaves.jpg",
    };

    const onSelectChange = (e) => {
        setFruit(e.target.value);
    };

    return (
        <div>
            <h1>Select a Fruit</h1>
            <select className="fruits-select" onChange={onSelectChange}>
                <option value="Apple">Apple</option>
                <option value="Banana">Banana</option>
                <option value="Orange">Orange</option>
            </select>

            <h2>You Selected: {fruit}</h2>

            <img 
                src={fruitImages[fruit]}
                alt={fruit}
                className="fruit-image"
            />
        </div>
    );
}
