export const capitalizeFirstLetter = (str) => {
  if (str.length>0)
    return str.replace(str[0], str[0].toUpperCase());
  return str;
}