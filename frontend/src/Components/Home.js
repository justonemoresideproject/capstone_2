import { Outlet } from 'react-router';
import Navbar from './Navbar'

function Home() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default Home