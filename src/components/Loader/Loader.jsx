import { Circles as Spinner } from 'react-loader-spinner';
import { StyledLoader } from './Loader.styled';

export const Loader = () => {
    return (

   < StyledLoader>
        <Spinner
        height="200"
        width="200"
        radius="9"
        type="Grid"
        color="#fff"
        timeout={4000}
                />
   </ StyledLoader>
  );
}