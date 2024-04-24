import { Button } from "react-bootstrap";

const ProductPagination = ({ hasProducts, pageNum, setPageNum }) => {
    const handleNextPage = () => {
        setPageNum(pageNum + 1);
    };

    const handlePreviousPage = () => {
        const newPage = Math.max(1, pageNum - 1);
        setPageNum(newPage);
    };

    return (
        <>
            <div className='d-flex justify-content-center gap-2'>
                {(pageNum > 1) &&
                    <Button onClick={handlePreviousPage}>&laquo; {(hasProducts) ? "Previous" : "Go back"}</Button>
                }
                {(hasProducts) &&
                    <Button onClick={handleNextPage}>Next &raquo;</Button>
                }
            </div>
        </>
    )
}

export default ProductPagination;