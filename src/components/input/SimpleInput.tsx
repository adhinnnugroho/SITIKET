type SimpleInputProps = {
    type?: string,
    placeholder?: string,
    className?: string
}


const SimpleInput = ({ type = 'text', placeholder = 'Full Name', className = '' }: SimpleInputProps) => {
    return (
        <input type={type} className={`w-full p-2 mb-5 border border-gray-300 bg-transparent rounded-lg ${className}`} placeholder={placeholder} />
    )
}

export default SimpleInput