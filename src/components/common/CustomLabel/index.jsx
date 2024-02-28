const CustomLabel = ({ htmlFor, title }) => {

  return(
    <label 
      htmlFor={htmlFor}
      className="font-semibold text-sm text-cyan-700"
    >
      {title}
    </label>
  )
}

export default CustomLabel;