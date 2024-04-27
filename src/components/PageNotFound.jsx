import Error from "./Common/Error";

const PageNotFound = () => {
    return (
        <>
            <Error errorMsg={
                <>
                    <p className="mb-0">Impossible de trouver cette page!</p>
                </>
            } />
        </>
    )
}

export default PageNotFound;