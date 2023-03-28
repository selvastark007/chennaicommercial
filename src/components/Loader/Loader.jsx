import React from 'react'

import ScaleLoader from "react-spinners/ScaleLoader";

// sass
import './Loader.scss'

const Loader = () => {
    return (
        <>

            <div className="loader">
                <ScaleLoader color="#002B5B"
                    size={200}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div>

        </>
    )
}

export default Loader

