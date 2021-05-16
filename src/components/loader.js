import * as React from "react";



const  Loader =({loading, message,children})=> {

        const msg = message || "Loading. Please wait...";

        if (loading) {
            return <div>{msg}</div>
        }

        return <div>
            {children}
        </div>;
    
}

export default Loader