import { ColorRing } from 'react-loader-spinner';
import { StyledLoader } from './Loader.styled';

export const Loader = () => {
    return (

   < StyledLoader>
        <ColorRing
        
        type="Grid"
        color="#fff"
        height={80}
        width={80}
        timeout={4000}
                />
   </ StyledLoader>
  );
}