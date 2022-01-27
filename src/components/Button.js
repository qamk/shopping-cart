const Button = ({styles = [], children, onClick, addButtonClass = true}) => {

  const buttonClass = addButtonClass ? 'button' : '';

  const validStyles = [...styles, buttonClass].join(' ');

  return(
    <button className={validStyles} onClick={onClick}>
      { children }
    </button>
  )
}

export default Button;