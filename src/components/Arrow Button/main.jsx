export default function ArrowButton({
    name = "Click Me",
    bgColor = "bg-white",
    textColor = "text-black",
    borderColor = "border-white/30",
    hoverColor = "hover:bg-[#dee0df]",
    onClick,
    type = "button",
    disabled = false
}) {
    const baseClasses = `group ${bgColor} ${textColor} px-5 py-2 rounded-xl ${hoverColor} transition-all duration-300 border-2 ${borderColor} ${disabled ? "opacity-50 cursor-not-allowed" : ""
        }`;

    return (
        <button type={type} disabled={disabled} onClick={onClick} className={baseClasses}>
            <span className="transition-all duration-300">{name}</span>
            <span className="group-hover:translate-x-1 inline-block transition-transform duration-300">↬</span>
        </button>
    );
}