import { useState, useEffect } from 'react';

const API_BASE = 'http://localhost:3127';

function Home() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const findItems = async () => {
            try {
                const response = await fetch(API_BASE + '/items');
                const data = await response.json();
                setItems(data);
            } catch (error) {
                console.error('Error fetching data', error);
            }
        };
        findItems();
    }, []);

    return (
        <div className="App">
            <h1>Wear it Again Wardrobe</h1>
            <ul>
                {items.map((item) => (
                    <li key={item.item_id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
