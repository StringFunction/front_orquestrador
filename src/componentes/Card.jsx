function Card({titulo,quantidade}){
    return (
        <>
            <div className="w-[400px] shadow-xl/30  bg-red-400 h-40 flex  gap-6 rounded-[20px] flex-col justify-center items-center">
                <p className="text-[30px] tracking-[15px]">{titulo}</p>
                <p className="text-[25px] tracking-[15px]"> {quantidade}</p>
            </div>
        </>
    );
}

export default Card