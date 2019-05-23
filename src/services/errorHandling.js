export function handleError(err, res) {
  res.status(500).json({ error: 'An unknown error occured' });
}
