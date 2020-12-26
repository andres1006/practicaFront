import React, { useEffect , useState } from 'react'

const { REACT_APP_OSCANN_FRONTEND, REACT_APP_API_AURA_SERVICES } = process.env;

 const Login = () =>  {
  const [ btnDisabled, setBtnDisabled ] = useState('');
  const [ nameBtn, setNameBtn ] = useState("Ingresar");
  const [ password, setPassword ] = useState('');
  const [ email, setEmail ] = useState('');




  const handleEmail = (event) => {
    setEmail(event.target.value)
  }

  const hanldePassword = (event) => {
    setPassword(event.target.value)
  }

  const login = () => {
    setBtnDisabled(true);
    setNameBtn("Cargando...")
    console.log(`email ${email}, password ${password}`);
    window.sessionStorage.clear();
    fetch(`${REACT_APP_API_AURA_SERVICES}api/user/autenticar`, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        correo: email,
        contrasenia: password
      })
    }).then((Response) => Response.json())
    .then((result) => {
        console.log("peticion", result);
        if (result.message === `No existe el usuario: ${email}`){
          alert('Usuario Invalido');
          setBtnDisabled(false);
          setNameBtn("Ingresar")
        }
        else{
          window.sessionStorage.setItem('admin', result.user.admin);
          window.sessionStorage.setItem('usuario', result.user.usuario);
          window.sessionStorage.setItem('hospital', result.user.hospital);
          window.sessionStorage.setItem('login', 'true');
          setBtnDisabled(false);
          setNameBtn("Ingresar")
          window.location.href = `${REACT_APP_OSCANN_FRONTEND}/reports`;
        }
      })
  }

    return (
      <div className="content">
        <div className="login">
          <div >
            <img src="https://externalstorageaccount.blob.core.windows.net/recursos/img/auralogo.png" alt="logo" className="logo"/>
          </div>
          <div className="user">
            <label className="login-label-user" ><b>Usuario</b></label>
            <br />
            <input
              onChange={handleEmail}
              className="login-input"
              type="text"
              placeholder="Ingrese su correo electronico"
              required
            />
          </div>
          <br />
          <div className="user">
            <label className="login-label-pass" ><b>Contraseña</b></label>
            <br />
            <input
              onChange={hanldePassword}
              className="login-input"
              type="password"
              placeholder="Ingrese su Contraseña"
              required
            />
          </div>

          <button onClick={login} className="btn-login" type="button" disabled={btnDisabled}>
              {nameBtn}
        </button>
          <br />
          {/* <div className="btn-forgot-pass" >
          <NavLink to="/forgot-pass"> Restaurar Contraseña</NavLink>
        </div> */}
        </div>
      </div>
    );
}

export default Login;
