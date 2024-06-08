import {Link} from "react-router-dom"

export function ButtonWarming({label, buttonText, to}) {
    return <div className="py-2 flex justify-center text-sm text-[#9CA3AF]">
        <div>{label}</div>
        <Link className="pointer underline pl-1 cursor-pointer text-[#818CF8]" to={to}>
            {buttonText}
        </Link>
    </div>
}