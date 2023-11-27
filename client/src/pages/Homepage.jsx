import React, { useState, useEffect } from "react";
import TestCard
 from "../components/TestCard";
import search from "../../utils/API";


export default function Homepage() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        // Fetch data from MongoDB using your API utility
        search.fetchDataFromMongoDB()
            .then((data) => setCards(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);
    return (
        <>
        <div>
            {cards.map((card) => (
                <TestCard
                    title={card.title}
                    subtitle={card.subtitle}
                    text={card.text}
                    link={card.link}
                    linkName={card.linkName}
                />
            ))}
        </div>
        </>
    );
    }