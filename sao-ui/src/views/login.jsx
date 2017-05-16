import React from 'react'

const styles = {
    form:{
        width:'300px',
        height:'250px'
    }
}

export default props => {
    return (
        <div className="container-login">
            <form style={styles.form}>
                <input type="text" placeholder="Insira o login"/>
                <input type="password" />
            </form>
        </div>

    )


}