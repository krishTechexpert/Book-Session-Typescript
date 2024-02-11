import { Outlet } from 'react-router-dom';
import MainHeader from '../components/Navigation/MainHeader';
import SessionContextProvider from "../store/sessions-context";
export default function Root() {
  return (
    <SessionContextProvider>
      <MainHeader/>
      <Outlet />
    </SessionContextProvider>
  );
}
