import UserForm from '../componentes/UserForm'

const login = () => {
    return (
        <div className="container mt-3">
            <h1>Login y Registro</h1>
            <hr />
            <div className="row">
                <div className="col-6">
                    <UserForm formType="login" />
                </div>
                <div className="col-6">
                    <UserForm formType="registro" />
                </div>
            </div>
        </div>
    )
}

export default login
