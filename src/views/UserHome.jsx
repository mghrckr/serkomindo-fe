import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Table from "../components/Table"
import { IconButton, Button, Typography } from "@material-tailwind/react";
// import { PlayIcon } from "@heroicons/react/24/solid";


const UserHome = () => {
    const flagPage = 'home'
    return (
        <>
            <Navbar flag={flagPage} />
            <div className="relative min-h-screen w-full bg-[url('/images/event.jpeg')] bg-cover bg-no-repeat">
                <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
                <div className="grid min-h-screen px-8">
                    <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
                        <Typography variant="h3" color="white" className="mb-2">
                            BATCH 3 : 28-29 DESEMBER
                        </Typography>
                        <Typography variant="h1" color="white" className="lg:max-w-3xl">
                            KEGIATAN SERTIFIKASI KOMPETENSI
                        </Typography>
                        <Typography
                            variant="lead"
                            color="white"
                            className="mt-1 mb-12 w-full md:max-w-full lg:max-w-2xl"
                        >
                            INSTALASI PEMANFAATAN TENAGA LISTRIK TEGANGAN RENDAH
                        </Typography>
                        <div className="flex items-center gap-4">
                            <Button variant="gradient" color="white">
                                DAFTAR
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer/> */}
        </>
    )
}

export default UserHome