export const formatStars = (stars) => {
  if (stars >= 1000000) {
    return (stars / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  }
  if (stars >= 1000) {
    return (stars / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  }
  return stars;
};
