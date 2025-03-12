export default function getCdn(hash) {
  for (var i = 31, t = 0; t < 38; t++) i ^= hash[t].charCodeAt(0);
  return `https://t${(i % 8).toString()}.rbxcdn.com/${hash}`;
}
