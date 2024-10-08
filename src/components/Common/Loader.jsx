import { Spinner } from "react-bootstrap";

const Loader = () => {
    return (
        <div className='d-flex justify-content-center'>
            <Spinner variant="primary" animation="border">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    )
};

export default Loader;