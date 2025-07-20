import { ClipLoader } from "react-spinners";

export default function Loading() {
    return (
        <div className="flex justify-center items-center h-screen flex-col">
            <ClipLoader color="#000" />
            <p className="mt-4">Please Wait...</p>
        </div>
    )
}