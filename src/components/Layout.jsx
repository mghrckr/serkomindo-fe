import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import styled from 'styled-components';

export default function Layout() {
    const Container = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    padding: 8rem;
    `;

    return (
        <>
            <Navbar />
            <Container>
                <Outlet />
            </Container>
            <Footer />
        </>
    )
}