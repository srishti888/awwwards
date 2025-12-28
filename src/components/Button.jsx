import react from 'react'

const Button = ({title, id, rightIcon, leftIcon, containerClass}) => {
    return (
       <button id={id} className={`relative cursor-pointer rounded-full px-7 py-3 ${containerClass}`}>
        {leftIcon}

        <span className="relative incline-flex overflow-hidden font-general text-xs uppercase">
            <div>
                {title}
            </div>
        </span>
        {rightIcon}
       </button>
    )
}
export default Button;
