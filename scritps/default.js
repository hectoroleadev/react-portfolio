"use strict";
function pr() {
  var t,
    e,
    n,
    c,
    o,
    a,
    d,
    i,
    p,
    s,
    r,
    w,
    P,
    l,
    u,
    f,
    h,
    g,
    m,
    y,
    b,
    v,
    E,
    M,
    B,
    L,
    C = document.getElementById("ppc"),
    I = document.getElementById("pp");
  function O(t, e, n, c) {
    var o = t / 2;
    return {
      wPct: (e = 1 + ((e = 1 + (e - 1) * (1 - t)) - 1) * (1 - o)),
      topPct: (n -= o),
      leftPct: (c *= 1 - (t + o)),
    };
  }
  C &&
    I &&
    ((e = (t = C.getBoundingClientRect()).width),
    (n = t.height),
    (o = (c = JSON.parse(C.dataset.dim)).a),
    (a = c.b),
    (d = c.c),
    (i = c.d),
    (p = o / a),
    (s = e / n),
    (b = o / (r = o * c.e)),
    (l = (w = o * i) / r),
    (l = (w - ((s - 1) * r) / 2) / (P = r * s)),
    (u = u = (a * d) / (a * c.f)),
    (h = (f = e * (b = o / P)) / p),
    (g = n * Math.abs(u)),
    (m = e * l),
    b <= 1 && ((y = 1 - b), (u *= (b = 1) + y * s), (l = 0)),
    (v = f - m) < e && ((b += (E = e - v) / f), (l -= E / e / 2)),
    (B = (M = h - n - g) / n),
    s < 1 &&
      1 < p &&
      0 < M &&
      (((e * (L = O(B, b, u, l)).wPct) / p - n * Math.abs(L.topPct) < n &&
        !(
          n <
          (e * (L = O(B / 4, b, u, l)).wPct) / p - n * Math.abs(L.topPct)
        )) ||
        ((b = L.wPct), (u = L.topPct), (l = L.leftPct))),
    (I.style.width = "".concat(100 * b, "%")),
    (I.style.left = "-".concat(100 * l, "%")),
    (I.style.top = "-".concat(100 * u, "%")));
}
window.addEventListener("DOMContentLoaded", function () {
  pr();
}),
  window.addEventListener("resize", function () {
    pr();
  });
