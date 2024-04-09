import Table from 'react-bootstrap/Table';
import CartDeleteButton from './CartDeleteButton';


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
                        return <tr style={{lineHeight: "2em", height: "2em"}} key={index}>
                            <td>{curr.ref}</td>
                            <td className='text-nowrap'>{curr.name}</td>
                            <td>{curr.price}</td>
                            <td>{curr.amount}</td>
                            <td><CartDeleteButton product={curr}/></td>
                        </tr>
                    })}
                </tbody>
            </Table>
        </>
    )
}


export default CartItemsTable;