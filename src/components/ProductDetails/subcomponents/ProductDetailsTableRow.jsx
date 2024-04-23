const ProductDetailsTableRow = ({rowName, rowContent}) => {
    return (
        <tr>
            <td>{rowName}</td><td>{rowContent}</td>
        </tr>
    )
}

export default ProductDetailsTableRow;