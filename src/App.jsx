import { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import QuantityControls from './components/QuantityControls/QuantityControls';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
    const [number, setNumber] = useState(0);

    const addition = () => {
        return setNumber(number + 1);
    };

    const subtraction = () => {
        if (number == 0) return;

        return setNumber(number - 1);
    };

    return (
        <>
            <NavBar amount={number}/>
            <ItemListContainer
                color="black"
                greeting="Bienvenido a la tienda de Luis"
            />
            <QuantityControls addition={addition} subtraction={subtraction} />
            {console.log(number)}
        </>
    );
}

export default App;
