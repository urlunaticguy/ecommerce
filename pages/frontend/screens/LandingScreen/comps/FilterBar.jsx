export default function LandingFilterBar() {
    const labels = ["Type", "Price", "Review", "Color", "Material", "Offer", "All Filters"]
    return (
        <div className=" w-full mt-4 p-2 h-[3rem] flex flex-row justify-between items-center">
            <div className=" flex flex-row gap-6">
                {labels.map((data, index) => (
                    <div className=" bg-slate-200 py-2 px-4 rounded-full text-[0.8rem] cursor-pointer hover:bg-slate-300 flex flex-row gap-2">
                        <p>{data}</p>
                        <svg className=" w-[0.5rem]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
                        </svg>
                    </div>
                ))}
            </div>
            <div className=" border-[1px] border-black py-2 px-4 rounded-full text-[0.8rem] cursor-pointer hover:bg-slate-100 flex flex-row gap-2">
                <p>Sort by</p>
                <svg className=" w-[0.5rem]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
                </svg>
            </div>
        </div>
    )
}