export const PORT = parseInt(process.env.PORT || "3010", 10);

export const log = (message: string): void => {
  console.log(new Date().toLocaleString(), message);
};
