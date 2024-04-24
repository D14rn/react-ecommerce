const ProductSearch = ({ hasProducts, productNameFilter, setProductNameFilter }) => {
    const handleProductNameFilterChange = (event) => {
        const searchProductName = event.target.value;
        setProductNameFilter(searchProductName);
    }

    const clearFilter = () => {
        setProductNameFilter("");
    }

    return (
        <>
            {
                (hasProducts) &&
                <div className='mb-2'>
                    <label htmlFor="nameSearch">Search by name:</label><br />
                    <input value={productNameFilter} type='text' onChange={handleProductNameFilterChange} />
                    <input value="Clear" type="button" onClick={clearFilter} />
                    <br />
                </div>
            }
        </>
    )
}

export default ProductSearch;