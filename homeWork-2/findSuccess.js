export const findSuccess = (bankResponse) => {
  //TODO: Проверьте что в строке есть 'Success' без учёта регистра
  return bankResponse.toLowerCase().includes('success') ? "Yes" : "No";
};