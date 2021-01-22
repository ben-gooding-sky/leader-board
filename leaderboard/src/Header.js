import { Navbar } from 'react-bootstrap';

export const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    Hades Leaderboard
                </Navbar.Brand>
            </Navbar>
        </>
    )
}