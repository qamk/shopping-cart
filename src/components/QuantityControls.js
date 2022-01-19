import Button from "./Button";

const QuantityControls = (props) => {
  const controls = props.controls;


  console.log('Quant. Control: props');
  console.log(props);
  console.log('Quant. Control: controls');
  console.log(controls);

  let qcButtons;

  if (controls) {
    qcButtons = Object.entries(controls).map(([_, control]) => {
      return(
        <Button onClick={control.method.bind(this, control.itemKey, control.methodKey)}>
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
