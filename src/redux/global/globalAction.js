const changeMovie = (name) => {
  return {
    type: "CHANGE_MOVIE",
    payload: name,
  };
};

export { changeMovie };
