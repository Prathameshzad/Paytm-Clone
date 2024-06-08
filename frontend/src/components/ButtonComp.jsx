export function ButtonComp({label, onClick}) {
    return <button onClick={onClick} type="button" className="w-full text-white rounded-md bg-[#6366F1] font-semibold hover:bg-[#818CF8] py-1.5">{label}</button>
}