const convertFormDataToJson = (formData) => {
  const data = Object.fromEntries(formData.entries());
  return data;
};

export { convertFormDataToJson };
