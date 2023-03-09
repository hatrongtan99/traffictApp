import {Provider as PaperProvider} from 'react-native-paper';
import Routes from './src/pages/Routes';
import AuthProvider from './src/context/AuthProvider';
import MapProvider from './src/context/MapProvider';

export default function App() {
  return (
    <AuthProvider>
      <MapProvider>
        <PaperProvider>
          <Routes />
        </PaperProvider>
      </MapProvider>
    </AuthProvider>
  );
}
