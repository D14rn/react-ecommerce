import './Error.css';

const Error = ({errorMsg}) => {
    return (
        <div className='d-flex flex-column align-items-center errorElem'>
            <h2>Une erreur s'est produite!</h2>
            {errorMsg}
            <a href="/">Cliquez sur ce lien</a>
        </div>
    )
}

export default Error;