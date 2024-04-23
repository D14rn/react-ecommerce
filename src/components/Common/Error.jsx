const Error = ({errorMsg}) => {
    console.log(errorMsg);
    return (
        <div className='d-flex flex-column align-items-center errorElem'>
            <h2>Une erreur s'est produite!</h2>
            {errorMsg}
        </div>
    )
}

export default Error;