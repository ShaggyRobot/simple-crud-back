const validFields = {
  name: (name) => typeof name === 'string',
  age: (age) => typeof age === 'number',
  hobbies: (hobbies) => Array.isArray(hobbies)
};

module.exports = (body) => {
  let msg = '';
  try {
    const bodyJSON = JSON.parse(body);
    if (
      !Object.keys(validFields).every((key) => Object.keys(bodyJSON).includes(key))
    ) {
      msg = 'REQUEST BODY DOES NOT INCLUDE ALL THE NECESSARY FIELDS (NAME, AGE, HOBBIES).';
      return { isValid: false, msg };
    }

    if (
      Object.keys(bodyJSON).some((key) => {
        msg = !Object.keys(validFields).includes(key)
          ? `INVALID FIELD "${key}".`
          : `INVALID VALUE FOR "${key}" FIELD.`;
        return !Object.keys(validFields).includes(key) || !validFields[key](bodyJSON[key]);
      })
    ) {
      return { isValid: false, msg };
    }
  } catch (error) {
    msg = `PARSING REQUEST BODY ERROR :: ${error.message.toUpperCase()}`;
    return { isValid: false, msg };
  }
  return { isValid: true };
};
