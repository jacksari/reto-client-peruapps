import LoginUser from "../components/auth/LoginUser";

export default function Home() {
  return (
      <main className="page-login">
          <div className="grid-login">
              <div className="container-img">
                  <p className="logo">PACHA.Q.TEC</p>
                  <img className="img" src="img/login-reto.svg" alt=""/>
              </div>
              <div className="container-form">
                  <h2>¡Bienvenid@!</h2>
                  <LoginUser/>
              </div>
          </div>
      </main>
  )
}
