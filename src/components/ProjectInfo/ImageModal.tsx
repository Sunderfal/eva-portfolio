interface ImageModalProps {
    image: string;
    onClick: (image: string | null) => void;
}

function ImageModal({ image, onClick }: ImageModalProps) {

    return (
        <>
            <div className="flex justify-center items-center fixed inset-0 bg-black/80 z-200">
                <button 
                    onClick={() => onClick(null)} 
                    className="absolute top-5 right-5 cursor-pointer text-white" 
                    type="button"
                >
                    <svg className="size-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/>
                    </svg>
                </button>
                <img className="max-w-[90vw] max-h-[80vh]" src={image} alt="Expanded image"/>
            </div>
        </>
    );

}

export default ImageModal;