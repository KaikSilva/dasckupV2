import logo from "../../assets/images/logo/logo_favicon.png";

function Login(){
    return (
        <div className="app app-auth-sign-in align-content-stretch d-flex flex-wrap justify-content-end">
            <div className="app-auth-background">

            </div>
            <div className="app-auth-container">
                <div className="logo">
                    <a style={{backgroundImage:`url(${logo})`}} href="index.html">Dasckup</a>
                </div>
                <p className="auth-description">Por favor, faça o login para ter acesso ao dashboard<br/>Ainda não tem uma conta <a href="https://dasckup.com">Entre em contato</a></p>

                <div className="auth-credentials m-b-xxl">
                    <label htmlFor="email" className="form-label">E-mail</label>
                    <input name="email" type="email" className="form-control m-b-md" id="email" placeholder="exemplo@dasckup.com" />

                    <label htmlFor="password" className="form-label">Senha</label>
                    <input name="password" type="password" className="form-control" id="password" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" />
                </div>

                <div className="auth-submit">
                    <a href="#" className="btn btn-primary">Login</a>
                    <a href="#" className="auth-forgot-password float-end">Esqueceu a senha?</a>
                </div>
              
            </div>
        </div>
    )
}

export default Login;