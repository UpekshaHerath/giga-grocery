interface ErrorMessageProps {
    message: string;
}
export default function ErrorMessage({message}: ErrorMessageProps) {
    return (
        <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 m-4 ml-0" role="alert">
            <p className="font-bold">Error</p>
            <p>{message}</p>
        </div>
    )
}