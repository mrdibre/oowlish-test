const formatDate = (date: Date | number) => {
  const formatter = new Intl.DateTimeFormat("pt-BR", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  return formatter.format(date);
};

export { formatDate };
