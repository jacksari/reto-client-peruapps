import '../styles/style.scss'
import UserState from "../context/user/userState";
import AuthState from "../context/auth/authState";

function MyApp({ Component, pageProps }) {
  return <UserState>
    <AuthState>
      <Component {...pageProps} />
    </AuthState>
  </UserState>
}

export default MyApp
