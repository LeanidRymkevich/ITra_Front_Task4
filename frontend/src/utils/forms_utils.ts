const MISMATCH_ERROR_MSG = `Inputs values doesn't match`;

const checkInputsMatch = (
  input_1: HTMLInputElement,
  input_2: HTMLInputElement
): boolean => {
  const isMatch = input_1.value === input_2.value;
  const msg = isMatch ? '' : MISMATCH_ERROR_MSG;
  console.log(isMatch);
  input_1.setCustomValidity(msg);
  input_2.setCustomValidity(msg);

  return isMatch;
};

export { checkInputsMatch };
