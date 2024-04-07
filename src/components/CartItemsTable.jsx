import Table from 'react-bootstrap/Table';


const CartItemsTable = ({ cartItems }) => {
    return (
        <>
            <Table striped hover responsive>
                <thead>
                    <tr>
                        <th>Ref</th>
                        <th>Name</th>
                        <th>Price(€)</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((curr, index) => {
                        return <tr key={index}>
                            <td>{curr.ref}</td>
                            <td className='text-nowrap'>{curr.name}</td>
                            <td>{curr.price}</td>
                            <td>{curr.amount}</td>
                        </tr>
                    })}
                </tbody>
            </Table>
        </>
    )
}


export default CartItemsTable;