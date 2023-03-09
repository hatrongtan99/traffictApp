import {createContext, useState, useEffect} from 'react';
import {getAllHmi} from '../api/hmi.api';

export const MapContext = createContext({});

const MapProvider = ({children}) => {
  const [listHmi, setListHmi] = useState(null);
  const [marker, setMarker] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async function () {
      setIsLoading(true);
      try {
        const data = await getAllHmi();
        if (data) {
          setListHmi(data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <MapContext.Provider value={{marker, setMarker, isLoading, listHmi}}>
      {children}
    </MapContext.Provider>
  );
};

export default MapProvider;
