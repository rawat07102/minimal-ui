const Button = ({ children, Icon }) => {
  return (
    <button
			className="w-full text-gray-500 hover:bg-green-500 hover:bg-opacity-20 hover:border-r-4 hover:text-green-600 hover:border-green-500 py-3 px-10 flex items-center">
			<Icon />
			<span className="ml-6">
				{children}
			</span>
    </button>
  )
}

export default Button
