import { useState } from 'react';

import './ItemListContainer.css';

const ItemListContainer = ({ greeting, color }) => {
    return (
        <>
            <h2 className="display-1 text-center lead" style={{ color: color }}>
                {greeting}
            </h2>
        </>
    );
};

export default ItemListContainer;
