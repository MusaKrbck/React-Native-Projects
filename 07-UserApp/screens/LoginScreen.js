import { useContext, useState } from 'react';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import AuthContent from '../components/Auth/AuthContent';
import { login } from '../util/auth';
import { Alert } from 'react-native';
import { AuthContext } from '../store/auth-context';

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  async function loginHandler({email, password}) {
    setIsAuthenticating(true);
    try{
      const token = await login(email, password);
      authCtx.authenticate(token);
    } catch(error) {
      Alert.alert('BAĞLANMADI',
        'Kral doğru düzgün bir şey gir.');
        setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return (
      <LoadingOverlay message="Logging you in..." />
    );
  }

  return <AuthContent isLogin onAuthenticate={loginHandler}/>;
}

export default LoginScreen;