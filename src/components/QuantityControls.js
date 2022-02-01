import Button from "./Button";

const QuantityControls = ({ controls }) => {

  const controlStyle = (methodKey) => {
    let basicStyle = ['m-1', 'is-small'];
    return methodKey === 'dec' ? ['is-warning', ...basicStyle] : ['is-success', ...basicStyle]
  }

  let qcButtons;

  if (controls) {
    qcButtons = Object.entries(controls).map(([_, control]) => {
      return(
        <Button styles={controlStyle(control.methodKey)} onClick={control.method.bind(this, control.itemKey, control.methodKey)}>
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
