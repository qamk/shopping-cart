// const STYLES= [
//   'btn', '-is-danger', '-is-success', '-is-warning', '-is-primary',
//   '-is-outline', '--is-solid'
// ]

// const DEFAULT_STYLE = 'btn -is-primary';

const Button = (props) => {

  // const clickHandler = () => {
  //   console.log('WHY U CLICKIN THINGS');
  //   props.onClick();
  // }

  // const buttonStyle = () => {
  //   const validStyles = styles.filter(element => STYLES.includes(element));
  //   return (validStyles.length === 0 ? DEFAULT_STYLE : validStyles.join(' '));
  // };

  return(
    <button onClick={props.onClick}>
      { props.children }
    </button>
  )
}

export default Button;