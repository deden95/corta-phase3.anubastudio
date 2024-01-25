"use client";
import {useSearchParams, usePathname} from "next/navigation";
import Link from "next/link";

function Modal() {
    const searchParams = useSearchParams();
    const modal = searchParams!.get("modal");
    const pathname = usePathname()!;
    const url = searchParams!.get("url")!;

    return (
        <>
            {modal &&
                <dialog
                    className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center"
                >
                    <div className="bg-white m-auto p-8 w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2">
                        <div className="flex flex-col items-center">
                            <iframe
                                className="w-full h-full aspect-video youtube"
                                title="vimeo-player"
                                src={url}
                                allowFullScreen
                            />
                            <br />
                            <Link href={pathname}>
                                <button type="button" className="bg-red-500 text-white p-3 rounded">
                                    Close
                                </button>
                            </Link>
                        </div>
                    </div>
                </dialog>
            }
        </>
    );
}

export default Modal;