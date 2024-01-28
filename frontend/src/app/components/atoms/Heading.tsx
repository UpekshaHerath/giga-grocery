interface HeadingListProps {
    headingText: string;
    functionality?: any;
    headingSize?: string;
}

export default function Heading({functionality, headingText, headingSize}: HeadingListProps) {

    return (
        <div>
            {headingSize === 'small' ? <h3 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl cursor-pointer" onClick={functionality}>{headingText}</h3> :
            <h1
                className="mb-4 text-4xl font-extrabold leading-none
            tracking-tight text-gray-900 md:text-5xl lg:text-6xl cursor-pointer" onClick={functionality}>
                {headingText}
            </h1>}
        </div>

    );

}