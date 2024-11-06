const QuantityControls = (addition, subtraction) => {
    return (
        <>
            <div className="">
                <button onClick={subtraction}>Subtract to Cart</button>
                <button onClick={addition}>Add to Cart</button>
            </div>
        </>
    );
};

export default QuantityControls;
