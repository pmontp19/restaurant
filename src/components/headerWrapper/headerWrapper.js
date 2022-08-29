import {h} from 'preact';
import style from './style.css';

const HeaderWrapper = ({children}) => (
  <div class={`${style.wrapper} bg-fixed bg-cover bg-center bg-no-repeat`}>
    {children}
  </div>
);

export default HeaderWrapper;