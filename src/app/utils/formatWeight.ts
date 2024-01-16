export const formatWeight = (weight: number) =>
  (weight > 1000
    ? (weight / 1000).toFixed(2) + ' t'
    : Math.round(weight) + ' kg') + ' CO\u2082e';
