import React from 'react'

export default props => {
    return (
        <div className="container-login">
            <form role="form">
                <h3>
                    Log In
                </h3>
                <div className="form-group">
                    <input type="text" placeholder="Insira o login"/>
                    <input type="password" placeholder="*****"/>
                </div>
                <br/>
                <br/>
                <div className="clearfix"></div>
                <button className="pull-right">
                    Connect
                </button>
                <div className="clearfix"></div>
            </form>
        </div>

    )


}