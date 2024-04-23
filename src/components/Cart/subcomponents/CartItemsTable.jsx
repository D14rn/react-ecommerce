import Table from 'react-bootstrap/Table';
import CartDeleteButton from './CartDeleteButton';
import { useNavigate } from 'react-router-dom';

const CartItemsTable = ({ cartItems, handleClose }) => {
    const navigate = useNavigate();
    const goToProduct = (productId) => {
        handleClose();
        navigate(`/products/${productId}`);
    }

    return (
        <Table className='cart-table' striped hover responsive>
            <thead>
                <tr>
                    <th></th>
                    {/* <th>Ref</th> */}
                    <th>Name</th>
                    <th>Price(€)</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                {cartItems.map((curr, index) => {
                    return <tr style={{ lineHeight: "2em", height: "2em" }} key={index}>
                        <td style={{cursor: "pointer"}} onClick={() => goToProduct(curr.id)}><img src={curr.mainImage} style={{height: "2em"}}/></td>
                        {/* <td>{curr.id}</td> */}
                        <td className='text-nowrap' style={{cursor: "pointer"}} onClick={() => goToProduct(curr.id)}>{curr.name}</td>
                        <td>{curr.price}</td>
                        <td>{curr.amount}</td>
                        <td><CartDeleteButton product={curr} /></td>
                    </tr>
                })}
            </tbody>
        </Table>
    )
}

export default CartItemsTable;