export function colorHash(str) {
  return str
    .split('')
    .reduce((r, v, i) => {
      var idx, val;

      idx = i % 3;
      val = Math.abs(Math.round(Math.sin(v.codePointAt(0))) * 255);

      r[idx] = r[idx] ^ val;

      return r;
    }, [0, 0, 0]);
}
