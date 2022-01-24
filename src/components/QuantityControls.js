import Button from "./Button";

const QuantityControls = ({ controls }) => {
  // const controls = props.controls;


  // console.log('Quant. Control: props');
  // console.log(props);
  // console.log('Quant. Control: controls');
  // console.log(controls);

  let qcButtons;

  if (controls) {
    qcButtons = Object.entries(controls).map(([_, control]) => {
      return(
        <Button styles={['m-1', 'is-small']} onClick={control.method.bind(this, control.itemKey, control.methodKey)}>
          { control.label }
        </Button>
      )
    })
  }  

  return(
    <>
      { qcButtons }
    </>
  )
}

export default QuantityControls;
