import { Typography } from "@material-tailwind/react";
import { Steps } from "../components/Steps";



const EventPelatihan = () => {
    return (
        <>

            <div style={{ marginTop: '100px', marginBottom: '100px' }}>
                <Typography
                    variant="h3"
                    color="black"
                    className="mb-6 font-black"
                >
                    EVENT PELATIHAN
                </Typography>
                <a href="/" aria-label="View Item">
                    <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl mb-5">
                        <img
                            className="object-cover w-full h-56 md:h-64 xl:h-80"
                            src="/images/grup-1.JPG"
                            alt=""
                        />
                        <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                            <p className="text-sm font-medium tracking-wide text-white">
                                INSTALASI PEMANFAATAN TENAGA LISTRIK TEGANGAN RENDAH (BATCH 3 : 28-29 DESEMBER 2023)
                            </p>
                        </div>
                    </div>
                </a>
                <a href="/" aria-label="View Item">
                    <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl mb-5">
                        <img
                            className="object-cover w-full h-56 md:h-64 xl:h-80"
                            src="/images/grup-2.JPG"
                            alt=""
                        />
                        <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                            <p className="text-sm font-medium tracking-wide text-white">
                                INSTALASI PEMANFAATAN TENAGA LISTRIK TEGANGAN RENDAH (BATCH 2 : 28-29 DESEMBER 2023)
                            </p>
                        </div>
                    </div>
                </a>
                <a href="/" aria-label="View Item">
                    <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                        <img
                            className="object-cover w-full h-56 md:h-64 xl:h-80"
                            src="/images/grup-3.jpg"
                            alt=""
                        />
                        <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                            <p className="text-sm font-medium tracking-wide text-white">
                                INSTALASI PEMANFAATAN TENAGA LISTRIK TEGANGAN RENDAH (BATCH 3 : 28-29 DESEMBER 2023)
                            </p>
                        </div>
                    </div>
                </a>
            </div>
        </>
    )
}

export default EventPelatihan