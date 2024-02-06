const formatUnixTimestamp = (timestamp) => {
  const date = new Date(timestamp);
  const formattedDate = date.toLocaleDateString();

  return formattedDate;
};

const formatPrice = (value) => {
  return `$${value.toLocaleString()}`;
};

const convertData = (data, type) => {
  const convertedData = data[type].map((item) => {
    return {
      date: formatUnixTimestamp(item[0]),
      [type]: (item[1]),
    };
  });

  return convertedData;
};

export { convertData, formatPrice };
