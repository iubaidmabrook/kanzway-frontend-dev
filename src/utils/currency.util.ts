function currency(value = 0, label = 'Rp') {
  const valueStr = value.toString();
  let formatedValue = '';
  const floatValue = parseFloat(valueStr).toFixed(2);
  const stringValue = floatValue.toString();
  const splitValue = stringValue.split('.');
  const amount = splitValue[0];
  const decimal = splitValue[1];
  const newValue = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  const newValueInt = parseFloat(newValue);
  if (newValueInt < 0) {
    const absNewValue = Math.abs(newValueInt);
    formatedValue = absNewValue.toString();
  } else {
    formatedValue = newValue;
  }

  if (formatedValue && decimal) {
    const newFloatValue = parseFloat(floatValue);
    if (newFloatValue < 0) {
      return `${label}. ${formatedValue}`;
    }
    return `${label}. ${formatedValue}`;
  }
  return `${label}. -`;
}

export default currency;
