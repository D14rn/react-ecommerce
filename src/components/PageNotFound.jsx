import Error from "./Common/Error";

const PageNotFound = () => {
    return (
        <>
            <Error errorMsg={
                <>
                    <p className="mb-0">Impossible de trouver cette page!</p>
                    <a href="/">Cliquez sur ce lien</a>
                </>
            } />
        </>
    )
}

export default PageNotFound;