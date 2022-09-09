function Lo(t, e) {
  const n = Object.create(null),
    s = t.split(",");
  for (let o = 0; o < s.length; o++) n[s[o]] = !0;
  return e ? (o) => !!n[o.toLowerCase()] : (o) => !!n[o];
}
const Ll =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  Fl = Lo(Ll);
function ni(t) {
  return !!t || t === "";
}
function Fo(t) {
  if (ee(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const s = t[n],
        o = we(s) ? Vl(s) : Fo(s);
      if (o) for (const r in o) e[r] = o[r];
    }
    return e;
  } else {
    if (we(t)) return t;
    if (ke(t)) return t;
  }
}
const Il = /;(?![^(]*\))/g,
  Ml = /:(.+)/;
function Vl(t) {
  const e = {};
  return (
    t.split(Il).forEach((n) => {
      if (n) {
        const s = n.split(Ml);
        s.length > 1 && (e[s[0].trim()] = s[1].trim());
      }
    }),
    e
  );
}
function _e(t) {
  let e = "";
  if (we(t)) e = t;
  else if (ee(t))
    for (let n = 0; n < t.length; n++) {
      const s = _e(t[n]);
      s && (e += s + " ");
    }
  else if (ke(t)) for (const n in t) t[n] && (e += n + " ");
  return e.trim();
}
function Rl(t, e) {
  if (t.length !== e.length) return !1;
  let n = !0;
  for (let s = 0; n && s < t.length; s++) n = _s(t[s], e[s]);
  return n;
}
function _s(t, e) {
  if (t === e) return !0;
  let n = br(t),
    s = br(e);
  if (n || s) return n && s ? t.getTime() === e.getTime() : !1;
  if (((n = yn(t)), (s = yn(e)), n || s)) return t === e;
  if (((n = ee(t)), (s = ee(e)), n || s)) return n && s ? Rl(t, e) : !1;
  if (((n = ke(t)), (s = ke(e)), n || s)) {
    if (!n || !s) return !1;
    const o = Object.keys(t).length,
      r = Object.keys(e).length;
    if (o !== r) return !1;
    for (const c in t) {
      const i = t.hasOwnProperty(c),
        l = e.hasOwnProperty(c);
      if ((i && !l) || (!i && l) || !_s(t[c], e[c])) return !1;
    }
  }
  return String(t) === String(e);
}
function Nl(t, e) {
  return t.findIndex((n) => _s(n, e));
}
const oe = (t) =>
    we(t)
      ? t
      : t == null
      ? ""
      : ee(t) || (ke(t) && (t.toString === ri || !ce(t.toString)))
      ? JSON.stringify(t, si, 2)
      : String(t),
  si = (t, e) =>
    e && e.__v_isRef
      ? si(t, e.value)
      : Gt(e)
      ? {
          [`Map(${e.size})`]: [...e.entries()].reduce(
            (n, [s, o]) => ((n[`${s} =>`] = o), n),
            {}
          ),
        }
      : ms(e)
      ? { [`Set(${e.size})`]: [...e.values()] }
      : ke(e) && !ee(e) && !ci(e)
      ? String(e)
      : e,
  be = {},
  jt = [],
  We = () => {},
  Bl = () => !1,
  Ol = /^on[^a-z]/,
  Pn = (t) => Ol.test(t),
  Io = (t) => t.startsWith("onUpdate:"),
  Se = Object.assign,
  Mo = (t, e) => {
    const n = t.indexOf(e);
    n > -1 && t.splice(n, 1);
  },
  zl = Object.prototype.hasOwnProperty,
  le = (t, e) => zl.call(t, e),
  ee = Array.isArray,
  Gt = (t) => Tn(t) === "[object Map]",
  ms = (t) => Tn(t) === "[object Set]",
  br = (t) => Tn(t) === "[object Date]",
  ce = (t) => typeof t == "function",
  we = (t) => typeof t == "string",
  yn = (t) => typeof t == "symbol",
  ke = (t) => t !== null && typeof t == "object",
  oi = (t) => ke(t) && ce(t.then) && ce(t.catch),
  ri = Object.prototype.toString,
  Tn = (t) => ri.call(t),
  Hl = (t) => Tn(t).slice(8, -1),
  ci = (t) => Tn(t) === "[object Object]",
  Vo = (t) =>
    we(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t,
  hn = Lo(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  gs = (t) => {
    const e = Object.create(null);
    return (n) => e[n] || (e[n] = t(n));
  },
  Ul = /-(\w)/g,
  tt = gs((t) => t.replace(Ul, (e, n) => (n ? n.toUpperCase() : ""))),
  jl = /\B([A-Z])/g,
  Bt = gs((t) => t.replace(jl, "-$1").toLowerCase()),
  vs = gs((t) => t.charAt(0).toUpperCase() + t.slice(1)),
  Ks = gs((t) => (t ? `on${vs(t)}` : "")),
  xn = (t, e) => !Object.is(t, e),
  Wn = (t, e) => {
    for (let n = 0; n < t.length; n++) t[n](e);
  },
  Qn = (t, e, n) => {
    Object.defineProperty(t, e, { configurable: !0, enumerable: !1, value: n });
  },
  Ro = (t) => {
    const e = parseFloat(t);
    return isNaN(e) ? t : e;
  };
let kr;
const Gl = () =>
  kr ||
  (kr =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {});
let Ie;
class Kl {
  constructor(e = !1) {
    (this.active = !0),
      (this.effects = []),
      (this.cleanups = []),
      !e &&
        Ie &&
        ((this.parent = Ie),
        (this.index = (Ie.scopes || (Ie.scopes = [])).push(this) - 1));
  }
  run(e) {
    if (this.active) {
      const n = Ie;
      try {
        return (Ie = this), e();
      } finally {
        Ie = n;
      }
    }
  }
  on() {
    Ie = this;
  }
  off() {
    Ie = this.parent;
  }
  stop(e) {
    if (this.active) {
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop();
      for (n = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]();
      if (this.scopes)
        for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0);
      if (this.parent && !e) {
        const o = this.parent.scopes.pop();
        o &&
          o !== this &&
          ((this.parent.scopes[this.index] = o), (o.index = this.index));
      }
      this.active = !1;
    }
  }
}
function Zl(t, e = Ie) {
  e && e.active && e.effects.push(t);
}
function Wl() {
  return Ie;
}
function Yl(t) {
  Ie && Ie.cleanups.push(t);
}
const No = (t) => {
    const e = new Set(t);
    return (e.w = 0), (e.n = 0), e;
  },
  ii = (t) => (t.w & yt) > 0,
  li = (t) => (t.n & yt) > 0,
  Jl = ({ deps: t }) => {
    if (t.length) for (let e = 0; e < t.length; e++) t[e].w |= yt;
  },
  Ql = (t) => {
    const { deps: e } = t;
    if (e.length) {
      let n = 0;
      for (let s = 0; s < e.length; s++) {
        const o = e[s];
        ii(o) && !li(o) ? o.delete(t) : (e[n++] = o),
          (o.w &= ~yt),
          (o.n &= ~yt);
      }
      e.length = n;
    }
  },
  po = new WeakMap();
let dn = 0,
  yt = 1;
const _o = 30;
let Ke;
const Mt = Symbol(""),
  mo = Symbol("");
class Bo {
  constructor(e, n = null, s) {
    (this.fn = e),
      (this.scheduler = n),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
      Zl(this, s);
  }
  run() {
    if (!this.active) return this.fn();
    let e = Ke,
      n = bt;
    for (; e; ) {
      if (e === this) return;
      e = e.parent;
    }
    try {
      return (
        (this.parent = Ke),
        (Ke = this),
        (bt = !0),
        (yt = 1 << ++dn),
        dn <= _o ? Jl(this) : yr(this),
        this.fn()
      );
    } finally {
      dn <= _o && Ql(this),
        (yt = 1 << --dn),
        (Ke = this.parent),
        (bt = n),
        (this.parent = void 0),
        this.deferStop && this.stop();
    }
  }
  stop() {
    Ke === this
      ? (this.deferStop = !0)
      : this.active &&
        (yr(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function yr(t) {
  const { deps: e } = t;
  if (e.length) {
    for (let n = 0; n < e.length; n++) e[n].delete(t);
    e.length = 0;
  }
}
let bt = !0;
const ai = [];
function en() {
  ai.push(bt), (bt = !1);
}
function tn() {
  const t = ai.pop();
  bt = t === void 0 ? !0 : t;
}
function Ve(t, e, n) {
  if (bt && Ke) {
    let s = po.get(t);
    s || po.set(t, (s = new Map()));
    let o = s.get(n);
    o || s.set(n, (o = No())), ui(o);
  }
}
function ui(t, e) {
  let n = !1;
  dn <= _o ? li(t) || ((t.n |= yt), (n = !ii(t))) : (n = !t.has(Ke)),
    n && (t.add(Ke), Ke.deps.push(t));
}
function ut(t, e, n, s, o, r) {
  const c = po.get(t);
  if (!c) return;
  let i = [];
  if (e === "clear") i = [...c.values()];
  else if (n === "length" && ee(t))
    c.forEach((l, a) => {
      (a === "length" || a >= s) && i.push(l);
    });
  else
    switch ((n !== void 0 && i.push(c.get(n)), e)) {
      case "add":
        ee(t)
          ? Vo(n) && i.push(c.get("length"))
          : (i.push(c.get(Mt)), Gt(t) && i.push(c.get(mo)));
        break;
      case "delete":
        ee(t) || (i.push(c.get(Mt)), Gt(t) && i.push(c.get(mo)));
        break;
      case "set":
        Gt(t) && i.push(c.get(Mt));
        break;
    }
  if (i.length === 1) i[0] && go(i[0]);
  else {
    const l = [];
    for (const a of i) a && l.push(...a);
    go(No(l));
  }
}
function go(t, e) {
  const n = ee(t) ? t : [...t];
  for (const s of n) s.computed && xr(s);
  for (const s of n) s.computed || xr(s);
}
function xr(t, e) {
  (t !== Ke || t.allowRecurse) && (t.scheduler ? t.scheduler() : t.run());
}
const Xl = Lo("__proto__,__v_isRef,__isVue"),
  fi = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((t) => t !== "arguments" && t !== "caller")
      .map((t) => Symbol[t])
      .filter(yn)
  ),
  ea = Oo(),
  ta = Oo(!1, !0),
  na = Oo(!0),
  wr = sa();
function sa() {
  const t = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((e) => {
      t[e] = function (...n) {
        const s = he(this);
        for (let r = 0, c = this.length; r < c; r++) Ve(s, "get", r + "");
        const o = s[e](...n);
        return o === -1 || o === !1 ? s[e](...n.map(he)) : o;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((e) => {
      t[e] = function (...n) {
        en();
        const s = he(this)[e].apply(this, n);
        return tn(), s;
      };
    }),
    t
  );
}
function Oo(t = !1, e = !1) {
  return function (s, o, r) {
    if (o === "__v_isReactive") return !t;
    if (o === "__v_isReadonly") return t;
    if (o === "__v_isShallow") return e;
    if (o === "__v_raw" && r === (t ? (e ? ba : mi) : e ? _i : pi).get(s))
      return s;
    const c = ee(s);
    if (!t && c && le(wr, o)) return Reflect.get(wr, o, r);
    const i = Reflect.get(s, o, r);
    return (yn(o) ? fi.has(o) : Xl(o)) || (t || Ve(s, "get", o), e)
      ? i
      : $e(i)
      ? c && Vo(o)
        ? i
        : i.value
      : ke(i)
      ? t
        ? Uo(i)
        : ks(i)
      : i;
  };
}
const oa = di(),
  ra = di(!0);
function di(t = !1) {
  return function (n, s, o, r) {
    let c = n[s];
    if (Jt(c) && $e(c) && !$e(o)) return !1;
    if (
      !t &&
      (!Xn(o) && !Jt(o) && ((c = he(c)), (o = he(o))),
      !ee(n) && $e(c) && !$e(o))
    )
      return (c.value = o), !0;
    const i = ee(n) && Vo(s) ? Number(s) < n.length : le(n, s),
      l = Reflect.set(n, s, o, r);
    return (
      n === he(r) && (i ? xn(o, c) && ut(n, "set", s, o) : ut(n, "add", s, o)),
      l
    );
  };
}
function ca(t, e) {
  const n = le(t, e);
  t[e];
  const s = Reflect.deleteProperty(t, e);
  return s && n && ut(t, "delete", e, void 0), s;
}
function ia(t, e) {
  const n = Reflect.has(t, e);
  return (!yn(e) || !fi.has(e)) && Ve(t, "has", e), n;
}
function la(t) {
  return Ve(t, "iterate", ee(t) ? "length" : Mt), Reflect.ownKeys(t);
}
const hi = { get: ea, set: oa, deleteProperty: ca, has: ia, ownKeys: la },
  aa = {
    get: na,
    set(t, e) {
      return !0;
    },
    deleteProperty(t, e) {
      return !0;
    },
  },
  ua = Se({}, hi, { get: ta, set: ra }),
  zo = (t) => t,
  bs = (t) => Reflect.getPrototypeOf(t);
function Vn(t, e, n = !1, s = !1) {
  t = t.__v_raw;
  const o = he(t),
    r = he(e);
  n || (e !== r && Ve(o, "get", e), Ve(o, "get", r));
  const { has: c } = bs(o),
    i = s ? zo : n ? Go : wn;
  if (c.call(o, e)) return i(t.get(e));
  if (c.call(o, r)) return i(t.get(r));
  t !== o && t.get(e);
}
function Rn(t, e = !1) {
  const n = this.__v_raw,
    s = he(n),
    o = he(t);
  return (
    e || (t !== o && Ve(s, "has", t), Ve(s, "has", o)),
    t === o ? n.has(t) : n.has(t) || n.has(o)
  );
}
function Nn(t, e = !1) {
  return (
    (t = t.__v_raw), !e && Ve(he(t), "iterate", Mt), Reflect.get(t, "size", t)
  );
}
function Cr(t) {
  t = he(t);
  const e = he(this);
  return bs(e).has.call(e, t) || (e.add(t), ut(e, "add", t, t)), this;
}
function Ar(t, e) {
  e = he(e);
  const n = he(this),
    { has: s, get: o } = bs(n);
  let r = s.call(n, t);
  r || ((t = he(t)), (r = s.call(n, t)));
  const c = o.call(n, t);
  return (
    n.set(t, e), r ? xn(e, c) && ut(n, "set", t, e) : ut(n, "add", t, e), this
  );
}
function Er(t) {
  const e = he(this),
    { has: n, get: s } = bs(e);
  let o = n.call(e, t);
  o || ((t = he(t)), (o = n.call(e, t))), s && s.call(e, t);
  const r = e.delete(t);
  return o && ut(e, "delete", t, void 0), r;
}
function Sr() {
  const t = he(this),
    e = t.size !== 0,
    n = t.clear();
  return e && ut(t, "clear", void 0, void 0), n;
}
function Bn(t, e) {
  return function (s, o) {
    const r = this,
      c = r.__v_raw,
      i = he(c),
      l = e ? zo : t ? Go : wn;
    return (
      !t && Ve(i, "iterate", Mt), c.forEach((a, u) => s.call(o, l(a), l(u), r))
    );
  };
}
function On(t, e, n) {
  return function (...s) {
    const o = this.__v_raw,
      r = he(o),
      c = Gt(r),
      i = t === "entries" || (t === Symbol.iterator && c),
      l = t === "keys" && c,
      a = o[t](...s),
      u = n ? zo : e ? Go : wn;
    return (
      !e && Ve(r, "iterate", l ? mo : Mt),
      {
        next() {
          const { value: f, done: d } = a.next();
          return d
            ? { value: f, done: d }
            : { value: i ? [u(f[0]), u(f[1])] : u(f), done: d };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function pt(t) {
  return function (...e) {
    return t === "delete" ? !1 : this;
  };
}
function fa() {
  const t = {
      get(r) {
        return Vn(this, r);
      },
      get size() {
        return Nn(this);
      },
      has: Rn,
      add: Cr,
      set: Ar,
      delete: Er,
      clear: Sr,
      forEach: Bn(!1, !1),
    },
    e = {
      get(r) {
        return Vn(this, r, !1, !0);
      },
      get size() {
        return Nn(this);
      },
      has: Rn,
      add: Cr,
      set: Ar,
      delete: Er,
      clear: Sr,
      forEach: Bn(!1, !0),
    },
    n = {
      get(r) {
        return Vn(this, r, !0);
      },
      get size() {
        return Nn(this, !0);
      },
      has(r) {
        return Rn.call(this, r, !0);
      },
      add: pt("add"),
      set: pt("set"),
      delete: pt("delete"),
      clear: pt("clear"),
      forEach: Bn(!0, !1),
    },
    s = {
      get(r) {
        return Vn(this, r, !0, !0);
      },
      get size() {
        return Nn(this, !0);
      },
      has(r) {
        return Rn.call(this, r, !0);
      },
      add: pt("add"),
      set: pt("set"),
      delete: pt("delete"),
      clear: pt("clear"),
      forEach: Bn(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((r) => {
      (t[r] = On(r, !1, !1)),
        (n[r] = On(r, !0, !1)),
        (e[r] = On(r, !1, !0)),
        (s[r] = On(r, !0, !0));
    }),
    [t, n, e, s]
  );
}
const [da, ha, pa, _a] = fa();
function Ho(t, e) {
  const n = e ? (t ? _a : pa) : t ? ha : da;
  return (s, o, r) =>
    o === "__v_isReactive"
      ? !t
      : o === "__v_isReadonly"
      ? t
      : o === "__v_raw"
      ? s
      : Reflect.get(le(n, o) && o in s ? n : s, o, r);
}
const ma = { get: Ho(!1, !1) },
  ga = { get: Ho(!1, !0) },
  va = { get: Ho(!0, !1) },
  pi = new WeakMap(),
  _i = new WeakMap(),
  mi = new WeakMap(),
  ba = new WeakMap();
function ka(t) {
  switch (t) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function ya(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : ka(Hl(t));
}
function ks(t) {
  return Jt(t) ? t : jo(t, !1, hi, ma, pi);
}
function xa(t) {
  return jo(t, !1, ua, ga, _i);
}
function Uo(t) {
  return jo(t, !0, aa, va, mi);
}
function jo(t, e, n, s, o) {
  if (!ke(t) || (t.__v_raw && !(e && t.__v_isReactive))) return t;
  const r = o.get(t);
  if (r) return r;
  const c = ya(t);
  if (c === 0) return t;
  const i = new Proxy(t, c === 2 ? s : n);
  return o.set(t, i), i;
}
function Kt(t) {
  return Jt(t) ? Kt(t.__v_raw) : !!(t && t.__v_isReactive);
}
function Jt(t) {
  return !!(t && t.__v_isReadonly);
}
function Xn(t) {
  return !!(t && t.__v_isShallow);
}
function gi(t) {
  return Kt(t) || Jt(t);
}
function he(t) {
  const e = t && t.__v_raw;
  return e ? he(e) : t;
}
function pn(t) {
  return Qn(t, "__v_skip", !0), t;
}
const wn = (t) => (ke(t) ? ks(t) : t),
  Go = (t) => (ke(t) ? Uo(t) : t);
function vi(t) {
  bt && Ke && ((t = he(t)), ui(t.dep || (t.dep = No())));
}
function bi(t, e) {
  (t = he(t)), t.dep && go(t.dep);
}
function $e(t) {
  return !!(t && t.__v_isRef === !0);
}
function Ae(t) {
  return ki(t, !1);
}
function wa(t) {
  return ki(t, !0);
}
function ki(t, e) {
  return $e(t) ? t : new Ca(t, e);
}
class Ca {
  constructor(e, n) {
    (this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? e : he(e)),
      (this._value = n ? e : wn(e));
  }
  get value() {
    return vi(this), this._value;
  }
  set value(e) {
    const n = this.__v_isShallow || Xn(e) || Jt(e);
    (e = n ? e : he(e)),
      xn(e, this._rawValue) &&
        ((this._rawValue = e), (this._value = n ? e : wn(e)), bi(this));
  }
}
function y(t) {
  return $e(t) ? t.value : t;
}
const Aa = {
  get: (t, e, n) => y(Reflect.get(t, e, n)),
  set: (t, e, n, s) => {
    const o = t[e];
    return $e(o) && !$e(n) ? ((o.value = n), !0) : Reflect.set(t, e, n, s);
  },
};
function yi(t) {
  return Kt(t) ? t : new Proxy(t, Aa);
}
var xi;
class Ea {
  constructor(e, n, s, o) {
    (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this[xi] = !1),
      (this._dirty = !0),
      (this.effect = new Bo(e, () => {
        this._dirty || ((this._dirty = !0), bi(this));
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !o),
      (this.__v_isReadonly = s);
  }
  get value() {
    const e = he(this);
    return (
      vi(e),
      (e._dirty || !e._cacheable) &&
        ((e._dirty = !1), (e._value = e.effect.run())),
      e._value
    );
  }
  set value(e) {
    this._setter(e);
  }
}
xi = "__v_isReadonly";
function Sa(t, e, n = !1) {
  let s, o;
  const r = ce(t);
  return (
    r ? ((s = t), (o = We)) : ((s = t.get), (o = t.set)),
    new Ea(s, o, r || !o, n)
  );
}
function kt(t, e, n, s) {
  let o;
  try {
    o = s ? t(...s) : t();
  } catch (r) {
    ys(r, e, n);
  }
  return o;
}
function He(t, e, n, s) {
  if (ce(t)) {
    const r = kt(t, e, n, s);
    return (
      r &&
        oi(r) &&
        r.catch((c) => {
          ys(c, e, n);
        }),
      r
    );
  }
  const o = [];
  for (let r = 0; r < t.length; r++) o.push(He(t[r], e, n, s));
  return o;
}
function ys(t, e, n, s = !0) {
  const o = e ? e.vnode : null;
  if (e) {
    let r = e.parent;
    const c = e.proxy,
      i = n;
    for (; r; ) {
      const a = r.ec;
      if (a) {
        for (let u = 0; u < a.length; u++) if (a[u](t, c, i) === !1) return;
      }
      r = r.parent;
    }
    const l = e.appContext.config.errorHandler;
    if (l) {
      kt(l, null, 10, [t, c, i]);
      return;
    }
  }
  Da(t, n, o, s);
}
function Da(t, e, n, s = !0) {
  console.error(t);
}
let es = !1,
  vo = !1;
const De = [];
let et = 0;
const Zt = [];
let lt = null,
  Pt = 0;
const wi = Promise.resolve();
let Ko = null;
function qn(t) {
  const e = Ko || wi;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function $a(t) {
  let e = et + 1,
    n = De.length;
  for (; e < n; ) {
    const s = (e + n) >>> 1;
    Cn(De[s]) < t ? (e = s + 1) : (n = s);
  }
  return e;
}
function Zo(t) {
  (!De.length || !De.includes(t, es && t.allowRecurse ? et + 1 : et)) &&
    (t.id == null ? De.push(t) : De.splice($a(t.id), 0, t), Ci());
}
function Ci() {
  !es && !vo && ((vo = !0), (Ko = wi.then(Ai)));
}
function Pa(t) {
  const e = De.indexOf(t);
  e > et && De.splice(e, 1);
}
function Ta(t) {
  ee(t)
    ? Zt.push(...t)
    : (!lt || !lt.includes(t, t.allowRecurse ? Pt + 1 : Pt)) && Zt.push(t),
    Ci();
}
function Dr(t, e = et) {
  for (; e < De.length; e++) {
    const n = De[e];
    n && n.pre && (De.splice(e, 1), e--, n());
  }
}
function ts(t) {
  if (Zt.length) {
    const e = [...new Set(Zt)];
    if (((Zt.length = 0), lt)) {
      lt.push(...e);
      return;
    }
    for (lt = e, lt.sort((n, s) => Cn(n) - Cn(s)), Pt = 0; Pt < lt.length; Pt++)
      lt[Pt]();
    (lt = null), (Pt = 0);
  }
}
const Cn = (t) => (t.id == null ? 1 / 0 : t.id),
  qa = (t, e) => {
    const n = Cn(t) - Cn(e);
    if (n === 0) {
      if (t.pre && !e.pre) return -1;
      if (e.pre && !t.pre) return 1;
    }
    return n;
  };
function Ai(t) {
  (vo = !1), (es = !0), De.sort(qa);
  const e = We;
  try {
    for (et = 0; et < De.length; et++) {
      const n = De[et];
      n && n.active !== !1 && kt(n, null, 14);
    }
  } finally {
    (et = 0),
      (De.length = 0),
      ts(),
      (es = !1),
      (Ko = null),
      (De.length || Zt.length) && Ai();
  }
}
function La(t, e, ...n) {
  if (t.isUnmounted) return;
  const s = t.vnode.props || be;
  let o = n;
  const r = e.startsWith("update:"),
    c = r && e.slice(7);
  if (c && c in s) {
    const u = `${c === "modelValue" ? "model" : c}Modifiers`,
      { number: f, trim: d } = s[u] || be;
    d && (o = n.map((p) => p.trim())), f && (o = n.map(Ro));
  }
  let i,
    l = s[(i = Ks(e))] || s[(i = Ks(tt(e)))];
  !l && r && (l = s[(i = Ks(Bt(e)))]), l && He(l, t, 6, o);
  const a = s[i + "Once"];
  if (a) {
    if (!t.emitted) t.emitted = {};
    else if (t.emitted[i]) return;
    (t.emitted[i] = !0), He(a, t, 6, o);
  }
}
function Ei(t, e, n = !1) {
  const s = e.emitsCache,
    o = s.get(t);
  if (o !== void 0) return o;
  const r = t.emits;
  let c = {},
    i = !1;
  if (!ce(t)) {
    const l = (a) => {
      const u = Ei(a, e, !0);
      u && ((i = !0), Se(c, u));
    };
    !n && e.mixins.length && e.mixins.forEach(l),
      t.extends && l(t.extends),
      t.mixins && t.mixins.forEach(l);
  }
  return !r && !i
    ? (ke(t) && s.set(t, null), null)
    : (ee(r) ? r.forEach((l) => (c[l] = null)) : Se(c, r),
      ke(t) && s.set(t, c),
      c);
}
function xs(t, e) {
  return !t || !Pn(e)
    ? !1
    : ((e = e.slice(2).replace(/Once$/, "")),
      le(t, e[0].toLowerCase() + e.slice(1)) || le(t, Bt(e)) || le(t, e));
}
let Pe = null,
  ws = null;
function ns(t) {
  const e = Pe;
  return (Pe = t), (ws = (t && t.type.__scopeId) || null), e;
}
function Ne(t) {
  ws = t;
}
function Be() {
  ws = null;
}
function j(t, e = Pe, n) {
  if (!e || t._n) return t;
  const s = (...o) => {
    s._d && Br(-1);
    const r = ns(e),
      c = t(...o);
    return ns(r), s._d && Br(1), c;
  };
  return (s._n = !0), (s._c = !0), (s._d = !0), s;
}
function Zs(t) {
  const {
    type: e,
    vnode: n,
    proxy: s,
    withProxy: o,
    props: r,
    propsOptions: [c],
    slots: i,
    attrs: l,
    emit: a,
    render: u,
    renderCache: f,
    data: d,
    setupState: p,
    ctx: x,
    inheritAttrs: A,
  } = t;
  let P, g;
  const v = ns(t);
  try {
    if (n.shapeFlag & 4) {
      const L = o || s;
      (P = Ge(u.call(L, L, f, r, p, d, x))), (g = l);
    } else {
      const L = e;
      (P = Ge(
        L.length > 1 ? L(r, { attrs: l, slots: i, emit: a }) : L(r, null)
      )),
        (g = e.props ? l : Fa(l));
    }
  } catch (L) {
    (gn.length = 0), ys(L, t, 1), (P = M(Me));
  }
  let E = P;
  if (g && A !== !1) {
    const L = Object.keys(g),
      { shapeFlag: N } = E;
    L.length && N & 7 && (c && L.some(Io) && (g = Ia(g, c)), (E = xt(E, g)));
  }
  return (
    n.dirs && ((E = xt(E)), (E.dirs = E.dirs ? E.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (E.transition = n.transition),
    (P = E),
    ns(v),
    P
  );
}
const Fa = (t) => {
    let e;
    for (const n in t)
      (n === "class" || n === "style" || Pn(n)) && ((e || (e = {}))[n] = t[n]);
    return e;
  },
  Ia = (t, e) => {
    const n = {};
    for (const s in t) (!Io(s) || !(s.slice(9) in e)) && (n[s] = t[s]);
    return n;
  };
function Ma(t, e, n) {
  const { props: s, children: o, component: r } = t,
    { props: c, children: i, patchFlag: l } = e,
    a = r.emitsOptions;
  if (e.dirs || e.transition) return !0;
  if (n && l >= 0) {
    if (l & 1024) return !0;
    if (l & 16) return s ? $r(s, c, a) : !!c;
    if (l & 8) {
      const u = e.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        const d = u[f];
        if (c[d] !== s[d] && !xs(a, d)) return !0;
      }
    }
  } else
    return (o || i) && (!i || !i.$stable)
      ? !0
      : s === c
      ? !1
      : s
      ? c
        ? $r(s, c, a)
        : !0
      : !!c;
  return !1;
}
function $r(t, e, n) {
  const s = Object.keys(e);
  if (s.length !== Object.keys(t).length) return !0;
  for (let o = 0; o < s.length; o++) {
    const r = s[o];
    if (e[r] !== t[r] && !xs(n, r)) return !0;
  }
  return !1;
}
function Va({ vnode: t, parent: e }, n) {
  for (; e && e.subTree === t; ) ((t = e.vnode).el = n), (e = e.parent);
}
const Ra = (t) => t.__isSuspense;
function Si(t, e) {
  e && e.pendingBranch
    ? ee(t)
      ? e.effects.push(...t)
      : e.effects.push(t)
    : Ta(t);
}
function Wo(t, e) {
  if (Ee) {
    let n = Ee.provides;
    const s = Ee.parent && Ee.parent.provides;
    s === n && (n = Ee.provides = Object.create(s)), (n[t] = e);
  }
}
function at(t, e, n = !1) {
  const s = Ee || Pe;
  if (s) {
    const o =
      s.parent == null
        ? s.vnode.appContext && s.vnode.appContext.provides
        : s.parent.provides;
    if (o && t in o) return o[t];
    if (arguments.length > 1) return n && ce(e) ? e.call(s.proxy) : e;
  }
}
function An(t, e) {
  return Cs(t, null, e);
}
function Na(t, e) {
  return Cs(t, null, { flush: "post" });
}
const Pr = {};
function Ye(t, e, n) {
  return Cs(t, e, n);
}
function Cs(
  t,
  e,
  { immediate: n, deep: s, flush: o, onTrack: r, onTrigger: c } = be
) {
  const i = Ee;
  let l,
    a = !1,
    u = !1;
  if (
    ($e(t)
      ? ((l = () => t.value), (a = Xn(t)))
      : Kt(t)
      ? ((l = () => t), (s = !0))
      : ee(t)
      ? ((u = !0),
        (a = t.some((g) => Kt(g) || Xn(g))),
        (l = () =>
          t.map((g) => {
            if ($e(g)) return g.value;
            if (Kt(g)) return Ft(g);
            if (ce(g)) return kt(g, i, 2);
          })))
      : ce(t)
      ? e
        ? (l = () => kt(t, i, 2))
        : (l = () => {
            if (!(i && i.isUnmounted)) return f && f(), He(t, i, 3, [d]);
          })
      : (l = We),
    e && s)
  ) {
    const g = l;
    l = () => Ft(g());
  }
  let f,
    d = (g) => {
      f = P.onStop = () => {
        kt(g, i, 4);
      };
    };
  if (Dn)
    return (d = We), e ? n && He(e, i, 3, [l(), u ? [] : void 0, d]) : l(), We;
  let p = u ? [] : Pr;
  const x = () => {
    if (!!P.active)
      if (e) {
        const g = P.run();
        (s || a || (u ? g.some((v, E) => xn(v, p[E])) : xn(g, p))) &&
          (f && f(), He(e, i, 3, [g, p === Pr ? void 0 : p, d]), (p = g));
      } else P.run();
  };
  x.allowRecurse = !!e;
  let A;
  o === "sync"
    ? (A = x)
    : o === "post"
    ? (A = () => qe(x, i && i.suspense))
    : ((x.pre = !0), i && (x.id = i.uid), (A = () => Zo(x)));
  const P = new Bo(l, A);
  return (
    e
      ? n
        ? x()
        : (p = P.run())
      : o === "post"
      ? qe(P.run.bind(P), i && i.suspense)
      : P.run(),
    () => {
      P.stop(), i && i.scope && Mo(i.scope.effects, P);
    }
  );
}
function Ba(t, e, n) {
  const s = this.proxy,
    o = we(t) ? (t.includes(".") ? Di(s, t) : () => s[t]) : t.bind(s, s);
  let r;
  ce(e) ? (r = e) : ((r = e.handler), (n = e));
  const c = Ee;
  Qt(this);
  const i = Cs(o, r.bind(s), n);
  return c ? Qt(c) : Vt(), i;
}
function Di(t, e) {
  const n = e.split(".");
  return () => {
    let s = t;
    for (let o = 0; o < n.length && s; o++) s = s[n[o]];
    return s;
  };
}
function Ft(t, e) {
  if (!ke(t) || t.__v_skip || ((e = e || new Set()), e.has(t))) return t;
  if ((e.add(t), $e(t))) Ft(t.value, e);
  else if (ee(t)) for (let n = 0; n < t.length; n++) Ft(t[n], e);
  else if (ms(t) || Gt(t))
    t.forEach((n) => {
      Ft(n, e);
    });
  else if (ci(t)) for (const n in t) Ft(t[n], e);
  return t;
}
function Oa() {
  const t = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  };
  return (
    dt(() => {
      t.isMounted = !0;
    }),
    Ii(() => {
      t.isUnmounting = !0;
    }),
    t
  );
}
const Oe = [Function, Array],
  za = {
    name: "BaseTransition",
    props: {
      mode: String,
      appear: Boolean,
      persisted: Boolean,
      onBeforeEnter: Oe,
      onEnter: Oe,
      onAfterEnter: Oe,
      onEnterCancelled: Oe,
      onBeforeLeave: Oe,
      onLeave: Oe,
      onAfterLeave: Oe,
      onLeaveCancelled: Oe,
      onBeforeAppear: Oe,
      onAppear: Oe,
      onAfterAppear: Oe,
      onAppearCancelled: Oe,
    },
    setup(t, { slots: e }) {
      const n = tr(),
        s = Oa();
      let o;
      return () => {
        const r = e.default && Ti(e.default(), !0);
        if (!r || !r.length) return;
        let c = r[0];
        if (r.length > 1) {
          for (const A of r)
            if (A.type !== Me) {
              c = A;
              break;
            }
        }
        const i = he(t),
          { mode: l } = i;
        if (s.isLeaving) return Ws(c);
        const a = Tr(c);
        if (!a) return Ws(c);
        const u = bo(a, i, s, n);
        ko(a, u);
        const f = n.subTree,
          d = f && Tr(f);
        let p = !1;
        const { getTransitionKey: x } = a.type;
        if (x) {
          const A = x();
          o === void 0 ? (o = A) : A !== o && ((o = A), (p = !0));
        }
        if (d && d.type !== Me && (!Tt(a, d) || p)) {
          const A = bo(d, i, s, n);
          if ((ko(d, A), l === "out-in"))
            return (
              (s.isLeaving = !0),
              (A.afterLeave = () => {
                (s.isLeaving = !1), n.update();
              }),
              Ws(c)
            );
          l === "in-out" &&
            a.type !== Me &&
            (A.delayLeave = (P, g, v) => {
              const E = Pi(s, d);
              (E[String(d.key)] = d),
                (P._leaveCb = () => {
                  g(), (P._leaveCb = void 0), delete u.delayedLeave;
                }),
                (u.delayedLeave = v);
            });
        }
        return c;
      };
    },
  },
  $i = za;
function Pi(t, e) {
  const { leavingVNodes: n } = t;
  let s = n.get(e.type);
  return s || ((s = Object.create(null)), n.set(e.type, s)), s;
}
function bo(t, e, n, s) {
  const {
      appear: o,
      mode: r,
      persisted: c = !1,
      onBeforeEnter: i,
      onEnter: l,
      onAfterEnter: a,
      onEnterCancelled: u,
      onBeforeLeave: f,
      onLeave: d,
      onAfterLeave: p,
      onLeaveCancelled: x,
      onBeforeAppear: A,
      onAppear: P,
      onAfterAppear: g,
      onAppearCancelled: v,
    } = e,
    E = String(t.key),
    L = Pi(n, t),
    N = (T, J) => {
      T && He(T, s, 9, J);
    },
    S = (T, J) => {
      const R = J[1];
      N(T, J),
        ee(T) ? T.every((G) => G.length <= 1) && R() : T.length <= 1 && R();
    },
    z = {
      mode: r,
      persisted: c,
      beforeEnter(T) {
        let J = i;
        if (!n.isMounted)
          if (o) J = A || i;
          else return;
        T._leaveCb && T._leaveCb(!0);
        const R = L[E];
        R && Tt(t, R) && R.el._leaveCb && R.el._leaveCb(), N(J, [T]);
      },
      enter(T) {
        let J = l,
          R = a,
          G = u;
        if (!n.isMounted)
          if (o) (J = P || l), (R = g || a), (G = v || u);
          else return;
        let U = !1;
        const se = (T._enterCb = (k) => {
          U ||
            ((U = !0),
            k ? N(G, [T]) : N(R, [T]),
            z.delayedLeave && z.delayedLeave(),
            (T._enterCb = void 0));
        });
        J ? S(J, [T, se]) : se();
      },
      leave(T, J) {
        const R = String(t.key);
        if ((T._enterCb && T._enterCb(!0), n.isUnmounting)) return J();
        N(f, [T]);
        let G = !1;
        const U = (T._leaveCb = (se) => {
          G ||
            ((G = !0),
            J(),
            se ? N(x, [T]) : N(p, [T]),
            (T._leaveCb = void 0),
            L[R] === t && delete L[R]);
        });
        (L[R] = t), d ? S(d, [T, U]) : U();
      },
      clone(T) {
        return bo(T, e, n, s);
      },
    };
  return z;
}
function Ws(t) {
  if (As(t)) return (t = xt(t)), (t.children = null), t;
}
function Tr(t) {
  return As(t) ? (t.children ? t.children[0] : void 0) : t;
}
function ko(t, e) {
  t.shapeFlag & 6 && t.component
    ? ko(t.component.subTree, e)
    : t.shapeFlag & 128
    ? ((t.ssContent.transition = e.clone(t.ssContent)),
      (t.ssFallback.transition = e.clone(t.ssFallback)))
    : (t.transition = e);
}
function Ti(t, e = !1, n) {
  let s = [],
    o = 0;
  for (let r = 0; r < t.length; r++) {
    let c = t[r];
    const i = n == null ? c.key : String(n) + String(c.key != null ? c.key : r);
    c.type === te
      ? (c.patchFlag & 128 && o++, (s = s.concat(Ti(c.children, e, i))))
      : (e || c.type !== Me) && s.push(i != null ? xt(c, { key: i }) : c);
  }
  if (o > 1) for (let r = 0; r < s.length; r++) s[r].patchFlag = -2;
  return s;
}
function Y(t) {
  return ce(t) ? { setup: t, name: t.name } : t;
}
const Wt = (t) => !!t.type.__asyncLoader,
  As = (t) => t.type.__isKeepAlive;
function Ha(t, e) {
  qi(t, "a", e);
}
function Ua(t, e) {
  qi(t, "da", e);
}
function qi(t, e, n = Ee) {
  const s =
    t.__wdc ||
    (t.__wdc = () => {
      let o = n;
      for (; o; ) {
        if (o.isDeactivated) return;
        o = o.parent;
      }
      return t();
    });
  if ((Es(e, s, n), n)) {
    let o = n.parent;
    for (; o && o.parent; )
      As(o.parent.vnode) && ja(s, e, n, o), (o = o.parent);
  }
}
function ja(t, e, n, s) {
  const o = Es(e, t, s, !0);
  nn(() => {
    Mo(s[e], o);
  }, n);
}
function Es(t, e, n = Ee, s = !1) {
  if (n) {
    const o = n[t] || (n[t] = []),
      r =
        e.__weh ||
        (e.__weh = (...c) => {
          if (n.isUnmounted) return;
          en(), Qt(n);
          const i = He(e, n, t, c);
          return Vt(), tn(), i;
        });
    return s ? o.unshift(r) : o.push(r), r;
  }
}
const ft =
    (t) =>
    (e, n = Ee) =>
      (!Dn || t === "sp") && Es(t, e, n),
  Li = ft("bm"),
  dt = ft("m"),
  Ga = ft("bu"),
  Fi = ft("u"),
  Ii = ft("bum"),
  nn = ft("um"),
  Ka = ft("sp"),
  Za = ft("rtg"),
  Wa = ft("rtc");
function Ya(t, e = Ee) {
  Es("ec", t, e);
}
function yo(t, e) {
  const n = Pe;
  if (n === null) return t;
  const s = Ds(n) || n.proxy,
    o = t.dirs || (t.dirs = []);
  for (let r = 0; r < e.length; r++) {
    let [c, i, l, a = be] = e[r];
    ce(c) && (c = { mounted: c, updated: c }),
      c.deep && Ft(i),
      o.push({
        dir: c,
        instance: s,
        value: i,
        oldValue: void 0,
        arg: l,
        modifiers: a,
      });
  }
  return t;
}
function Xe(t, e, n, s) {
  const o = t.dirs,
    r = e && e.dirs;
  for (let c = 0; c < o.length; c++) {
    const i = o[c];
    r && (i.oldValue = r[c].value);
    let l = i.dir[s];
    l && (en(), He(l, n, 8, [t.el, i, t, e]), tn());
  }
}
const Yo = "components";
function Ct(t, e) {
  return Vi(Yo, t, !0, e) || t;
}
const Mi = Symbol();
function Jo(t) {
  return we(t) ? Vi(Yo, t, !1) || t : t || Mi;
}
function Vi(t, e, n = !0, s = !1) {
  const o = Pe || Ee;
  if (o) {
    const r = o.type;
    if (t === Yo) {
      const i = $u(r, !1);
      if (i && (i === e || i === tt(e) || i === vs(tt(e)))) return r;
    }
    const c = qr(o[t] || r[t], e) || qr(o.appContext[t], e);
    return !c && s ? r : c;
  }
}
function qr(t, e) {
  return t && (t[e] || t[tt(e)] || t[vs(tt(e))]);
}
function xe(t, e, n, s) {
  let o;
  const r = n && n[s];
  if (ee(t) || we(t)) {
    o = new Array(t.length);
    for (let c = 0, i = t.length; c < i; c++)
      o[c] = e(t[c], c, void 0, r && r[c]);
  } else if (typeof t == "number") {
    o = new Array(t);
    for (let c = 0; c < t; c++) o[c] = e(c + 1, c, void 0, r && r[c]);
  } else if (ke(t))
    if (t[Symbol.iterator])
      o = Array.from(t, (c, i) => e(c, i, void 0, r && r[i]));
    else {
      const c = Object.keys(t);
      o = new Array(c.length);
      for (let i = 0, l = c.length; i < l; i++) {
        const a = c[i];
        o[i] = e(t[a], a, i, r && r[i]);
      }
    }
  else o = [];
  return n && (n[s] = o), o;
}
function B(t, e, n = {}, s, o) {
  if (Pe.isCE || (Pe.parent && Wt(Pe.parent) && Pe.parent.isCE))
    return M("slot", e === "default" ? null : { name: e }, s && s());
  let r = t[e];
  r && r._c && (r._d = !1), _();
  const c = r && Ri(r(n)),
    i = re(
      te,
      { key: n.key || (c && c.key) || `_${e}` },
      c || (s ? s() : []),
      c && t._ === 1 ? 64 : -2
    );
  return (
    !o && i.scopeId && (i.slotScopeIds = [i.scopeId + "-s"]),
    r && r._c && (r._d = !0),
    i
  );
}
function Ri(t) {
  return t.some((e) =>
    cs(e) ? !(e.type === Me || (e.type === te && !Ri(e.children))) : !0
  )
    ? t
    : null;
}
const xo = (t) => (t ? (Wi(t) ? Ds(t) || t.proxy : xo(t.parent)) : null),
  ss = Se(Object.create(null), {
    $: (t) => t,
    $el: (t) => t.vnode.el,
    $data: (t) => t.data,
    $props: (t) => t.props,
    $attrs: (t) => t.attrs,
    $slots: (t) => t.slots,
    $refs: (t) => t.refs,
    $parent: (t) => xo(t.parent),
    $root: (t) => xo(t.root),
    $emit: (t) => t.emit,
    $options: (t) => Bi(t),
    $forceUpdate: (t) => t.f || (t.f = () => Zo(t.update)),
    $nextTick: (t) => t.n || (t.n = qn.bind(t.proxy)),
    $watch: (t) => Ba.bind(t),
  }),
  Ja = {
    get({ _: t }, e) {
      const {
        ctx: n,
        setupState: s,
        data: o,
        props: r,
        accessCache: c,
        type: i,
        appContext: l,
      } = t;
      let a;
      if (e[0] !== "$") {
        const p = c[e];
        if (p !== void 0)
          switch (p) {
            case 1:
              return s[e];
            case 2:
              return o[e];
            case 4:
              return n[e];
            case 3:
              return r[e];
          }
        else {
          if (s !== be && le(s, e)) return (c[e] = 1), s[e];
          if (o !== be && le(o, e)) return (c[e] = 2), o[e];
          if ((a = t.propsOptions[0]) && le(a, e)) return (c[e] = 3), r[e];
          if (n !== be && le(n, e)) return (c[e] = 4), n[e];
          wo && (c[e] = 0);
        }
      }
      const u = ss[e];
      let f, d;
      if (u) return e === "$attrs" && Ve(t, "get", e), u(t);
      if ((f = i.__cssModules) && (f = f[e])) return f;
      if (n !== be && le(n, e)) return (c[e] = 4), n[e];
      if (((d = l.config.globalProperties), le(d, e))) return d[e];
    },
    set({ _: t }, e, n) {
      const { data: s, setupState: o, ctx: r } = t;
      return o !== be && le(o, e)
        ? ((o[e] = n), !0)
        : s !== be && le(s, e)
        ? ((s[e] = n), !0)
        : le(t.props, e) || (e[0] === "$" && e.slice(1) in t)
        ? !1
        : ((r[e] = n), !0);
    },
    has(
      {
        _: {
          data: t,
          setupState: e,
          accessCache: n,
          ctx: s,
          appContext: o,
          propsOptions: r,
        },
      },
      c
    ) {
      let i;
      return (
        !!n[c] ||
        (t !== be && le(t, c)) ||
        (e !== be && le(e, c)) ||
        ((i = r[0]) && le(i, c)) ||
        le(s, c) ||
        le(ss, c) ||
        le(o.config.globalProperties, c)
      );
    },
    defineProperty(t, e, n) {
      return (
        n.get != null
          ? (t._.accessCache[e] = 0)
          : le(n, "value") && this.set(t, e, n.value, null),
        Reflect.defineProperty(t, e, n)
      );
    },
  };
let wo = !0;
function Qa(t) {
  const e = Bi(t),
    n = t.proxy,
    s = t.ctx;
  (wo = !1), e.beforeCreate && Lr(e.beforeCreate, t, "bc");
  const {
    data: o,
    computed: r,
    methods: c,
    watch: i,
    provide: l,
    inject: a,
    created: u,
    beforeMount: f,
    mounted: d,
    beforeUpdate: p,
    updated: x,
    activated: A,
    deactivated: P,
    beforeDestroy: g,
    beforeUnmount: v,
    destroyed: E,
    unmounted: L,
    render: N,
    renderTracked: S,
    renderTriggered: z,
    errorCaptured: T,
    serverPrefetch: J,
    expose: R,
    inheritAttrs: G,
    components: U,
    directives: se,
    filters: k,
  } = e;
  if ((a && Xa(a, s, null, t.appContext.config.unwrapInjectedRef), c))
    for (const fe in c) {
      const me = c[fe];
      ce(me) && (s[fe] = me.bind(n));
    }
  if (o) {
    const fe = o.call(n, n);
    ke(fe) && (t.data = ks(fe));
  }
  if (((wo = !0), r))
    for (const fe in r) {
      const me = r[fe],
        ct = ce(me) ? me.bind(n, n) : ce(me.get) ? me.get.bind(n, n) : We,
        Us = !ce(me) && ce(me.set) ? me.set.bind(n) : We,
        ln = de({ get: ct, set: Us });
      Object.defineProperty(s, fe, {
        enumerable: !0,
        configurable: !0,
        get: () => ln.value,
        set: (Ot) => (ln.value = Ot),
      });
    }
  if (i) for (const fe in i) Ni(i[fe], s, n, fe);
  if (l) {
    const fe = ce(l) ? l.call(n) : l;
    Reflect.ownKeys(fe).forEach((me) => {
      Wo(me, fe[me]);
    });
  }
  u && Lr(u, t, "c");
  function W(fe, me) {
    ee(me) ? me.forEach((ct) => fe(ct.bind(n))) : me && fe(me.bind(n));
  }
  if (
    (W(Li, f),
    W(dt, d),
    W(Ga, p),
    W(Fi, x),
    W(Ha, A),
    W(Ua, P),
    W(Ya, T),
    W(Wa, S),
    W(Za, z),
    W(Ii, v),
    W(nn, L),
    W(Ka, J),
    ee(R))
  )
    if (R.length) {
      const fe = t.exposed || (t.exposed = {});
      R.forEach((me) => {
        Object.defineProperty(fe, me, {
          get: () => n[me],
          set: (ct) => (n[me] = ct),
        });
      });
    } else t.exposed || (t.exposed = {});
  N && t.render === We && (t.render = N),
    G != null && (t.inheritAttrs = G),
    U && (t.components = U),
    se && (t.directives = se);
}
function Xa(t, e, n = We, s = !1) {
  ee(t) && (t = Co(t));
  for (const o in t) {
    const r = t[o];
    let c;
    ke(r)
      ? "default" in r
        ? (c = at(r.from || o, r.default, !0))
        : (c = at(r.from || o))
      : (c = at(r)),
      $e(c) && s
        ? Object.defineProperty(e, o, {
            enumerable: !0,
            configurable: !0,
            get: () => c.value,
            set: (i) => (c.value = i),
          })
        : (e[o] = c);
  }
}
function Lr(t, e, n) {
  He(ee(t) ? t.map((s) => s.bind(e.proxy)) : t.bind(e.proxy), e, n);
}
function Ni(t, e, n, s) {
  const o = s.includes(".") ? Di(n, s) : () => n[s];
  if (we(t)) {
    const r = e[t];
    ce(r) && Ye(o, r);
  } else if (ce(t)) Ye(o, t.bind(n));
  else if (ke(t))
    if (ee(t)) t.forEach((r) => Ni(r, e, n, s));
    else {
      const r = ce(t.handler) ? t.handler.bind(n) : e[t.handler];
      ce(r) && Ye(o, r, t);
    }
}
function Bi(t) {
  const e = t.type,
    { mixins: n, extends: s } = e,
    {
      mixins: o,
      optionsCache: r,
      config: { optionMergeStrategies: c },
    } = t.appContext,
    i = r.get(e);
  let l;
  return (
    i
      ? (l = i)
      : !o.length && !n && !s
      ? (l = e)
      : ((l = {}), o.length && o.forEach((a) => os(l, a, c, !0)), os(l, e, c)),
    ke(e) && r.set(e, l),
    l
  );
}
function os(t, e, n, s = !1) {
  const { mixins: o, extends: r } = e;
  r && os(t, r, n, !0), o && o.forEach((c) => os(t, c, n, !0));
  for (const c in e)
    if (!(s && c === "expose")) {
      const i = eu[c] || (n && n[c]);
      t[c] = i ? i(t[c], e[c]) : e[c];
    }
  return t;
}
const eu = {
  data: Fr,
  props: $t,
  emits: $t,
  methods: $t,
  computed: $t,
  beforeCreate: Te,
  created: Te,
  beforeMount: Te,
  mounted: Te,
  beforeUpdate: Te,
  updated: Te,
  beforeDestroy: Te,
  beforeUnmount: Te,
  destroyed: Te,
  unmounted: Te,
  activated: Te,
  deactivated: Te,
  errorCaptured: Te,
  serverPrefetch: Te,
  components: $t,
  directives: $t,
  watch: nu,
  provide: Fr,
  inject: tu,
};
function Fr(t, e) {
  return e
    ? t
      ? function () {
          return Se(
            ce(t) ? t.call(this, this) : t,
            ce(e) ? e.call(this, this) : e
          );
        }
      : e
    : t;
}
function tu(t, e) {
  return $t(Co(t), Co(e));
}
function Co(t) {
  if (ee(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) e[t[n]] = t[n];
    return e;
  }
  return t;
}
function Te(t, e) {
  return t ? [...new Set([].concat(t, e))] : e;
}
function $t(t, e) {
  return t ? Se(Se(Object.create(null), t), e) : e;
}
function nu(t, e) {
  if (!t) return e;
  if (!e) return t;
  const n = Se(Object.create(null), t);
  for (const s in e) n[s] = Te(t[s], e[s]);
  return n;
}
function su(t, e, n, s = !1) {
  const o = {},
    r = {};
  Qn(r, Ss, 1), (t.propsDefaults = Object.create(null)), Oi(t, e, o, r);
  for (const c in t.propsOptions[0]) c in o || (o[c] = void 0);
  n ? (t.props = s ? o : xa(o)) : t.type.props ? (t.props = o) : (t.props = r),
    (t.attrs = r);
}
function ou(t, e, n, s) {
  const {
      props: o,
      attrs: r,
      vnode: { patchFlag: c },
    } = t,
    i = he(o),
    [l] = t.propsOptions;
  let a = !1;
  if ((s || c > 0) && !(c & 16)) {
    if (c & 8) {
      const u = t.vnode.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        let d = u[f];
        if (xs(t.emitsOptions, d)) continue;
        const p = e[d];
        if (l)
          if (le(r, d)) p !== r[d] && ((r[d] = p), (a = !0));
          else {
            const x = tt(d);
            o[x] = Ao(l, i, x, p, t, !1);
          }
        else p !== r[d] && ((r[d] = p), (a = !0));
      }
    }
  } else {
    Oi(t, e, o, r) && (a = !0);
    let u;
    for (const f in i)
      (!e || (!le(e, f) && ((u = Bt(f)) === f || !le(e, u)))) &&
        (l
          ? n &&
            (n[f] !== void 0 || n[u] !== void 0) &&
            (o[f] = Ao(l, i, f, void 0, t, !0))
          : delete o[f]);
    if (r !== i)
      for (const f in r) (!e || (!le(e, f) && !0)) && (delete r[f], (a = !0));
  }
  a && ut(t, "set", "$attrs");
}
function Oi(t, e, n, s) {
  const [o, r] = t.propsOptions;
  let c = !1,
    i;
  if (e)
    for (let l in e) {
      if (hn(l)) continue;
      const a = e[l];
      let u;
      o && le(o, (u = tt(l)))
        ? !r || !r.includes(u)
          ? (n[u] = a)
          : ((i || (i = {}))[u] = a)
        : xs(t.emitsOptions, l) ||
          ((!(l in s) || a !== s[l]) && ((s[l] = a), (c = !0)));
    }
  if (r) {
    const l = he(n),
      a = i || be;
    for (let u = 0; u < r.length; u++) {
      const f = r[u];
      n[f] = Ao(o, l, f, a[f], t, !le(a, f));
    }
  }
  return c;
}
function Ao(t, e, n, s, o, r) {
  const c = t[n];
  if (c != null) {
    const i = le(c, "default");
    if (i && s === void 0) {
      const l = c.default;
      if (c.type !== Function && ce(l)) {
        const { propsDefaults: a } = o;
        n in a ? (s = a[n]) : (Qt(o), (s = a[n] = l.call(null, e)), Vt());
      } else s = l;
    }
    c[0] &&
      (r && !i ? (s = !1) : c[1] && (s === "" || s === Bt(n)) && (s = !0));
  }
  return s;
}
function zi(t, e, n = !1) {
  const s = e.propsCache,
    o = s.get(t);
  if (o) return o;
  const r = t.props,
    c = {},
    i = [];
  let l = !1;
  if (!ce(t)) {
    const u = (f) => {
      l = !0;
      const [d, p] = zi(f, e, !0);
      Se(c, d), p && i.push(...p);
    };
    !n && e.mixins.length && e.mixins.forEach(u),
      t.extends && u(t.extends),
      t.mixins && t.mixins.forEach(u);
  }
  if (!r && !l) return ke(t) && s.set(t, jt), jt;
  if (ee(r))
    for (let u = 0; u < r.length; u++) {
      const f = tt(r[u]);
      Ir(f) && (c[f] = be);
    }
  else if (r)
    for (const u in r) {
      const f = tt(u);
      if (Ir(f)) {
        const d = r[u],
          p = (c[f] = ee(d) || ce(d) ? { type: d } : d);
        if (p) {
          const x = Rr(Boolean, p.type),
            A = Rr(String, p.type);
          (p[0] = x > -1),
            (p[1] = A < 0 || x < A),
            (x > -1 || le(p, "default")) && i.push(f);
        }
      }
    }
  const a = [c, i];
  return ke(t) && s.set(t, a), a;
}
function Ir(t) {
  return t[0] !== "$";
}
function Mr(t) {
  const e = t && t.toString().match(/^\s*function (\w+)/);
  return e ? e[1] : t === null ? "null" : "";
}
function Vr(t, e) {
  return Mr(t) === Mr(e);
}
function Rr(t, e) {
  return ee(e) ? e.findIndex((n) => Vr(n, t)) : ce(e) && Vr(e, t) ? 0 : -1;
}
const Hi = (t) => t[0] === "_" || t === "$stable",
  Qo = (t) => (ee(t) ? t.map(Ge) : [Ge(t)]),
  ru = (t, e, n) => {
    if (e._n) return e;
    const s = j((...o) => Qo(e(...o)), n);
    return (s._c = !1), s;
  },
  Ui = (t, e, n) => {
    const s = t._ctx;
    for (const o in t) {
      if (Hi(o)) continue;
      const r = t[o];
      if (ce(r)) e[o] = ru(o, r, s);
      else if (r != null) {
        const c = Qo(r);
        e[o] = () => c;
      }
    }
  },
  ji = (t, e) => {
    const n = Qo(e);
    t.slots.default = () => n;
  },
  cu = (t, e) => {
    if (t.vnode.shapeFlag & 32) {
      const n = e._;
      n ? ((t.slots = he(e)), Qn(e, "_", n)) : Ui(e, (t.slots = {}));
    } else (t.slots = {}), e && ji(t, e);
    Qn(t.slots, Ss, 1);
  },
  iu = (t, e, n) => {
    const { vnode: s, slots: o } = t;
    let r = !0,
      c = be;
    if (s.shapeFlag & 32) {
      const i = e._;
      i
        ? n && i === 1
          ? (r = !1)
          : (Se(o, e), !n && i === 1 && delete o._)
        : ((r = !e.$stable), Ui(e, o)),
        (c = e);
    } else e && (ji(t, e), (c = { default: 1 }));
    if (r) for (const i in o) !Hi(i) && !(i in c) && delete o[i];
  };
function Gi() {
  return {
    app: null,
    config: {
      isNativeTag: Bl,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let lu = 0;
function au(t, e) {
  return function (s, o = null) {
    ce(s) || (s = Object.assign({}, s)), o != null && !ke(o) && (o = null);
    const r = Gi(),
      c = new Set();
    let i = !1;
    const l = (r.app = {
      _uid: lu++,
      _component: s,
      _props: o,
      _container: null,
      _context: r,
      _instance: null,
      version: Tu,
      get config() {
        return r.config;
      },
      set config(a) {},
      use(a, ...u) {
        return (
          c.has(a) ||
            (a && ce(a.install)
              ? (c.add(a), a.install(l, ...u))
              : ce(a) && (c.add(a), a(l, ...u))),
          l
        );
      },
      mixin(a) {
        return r.mixins.includes(a) || r.mixins.push(a), l;
      },
      component(a, u) {
        return u ? ((r.components[a] = u), l) : r.components[a];
      },
      directive(a, u) {
        return u ? ((r.directives[a] = u), l) : r.directives[a];
      },
      mount(a, u, f) {
        if (!i) {
          const d = M(s, o);
          return (
            (d.appContext = r),
            u && e ? e(d, a) : t(d, a, f),
            (i = !0),
            (l._container = a),
            (a.__vue_app__ = l),
            Ds(d.component) || d.component.proxy
          );
        }
      },
      unmount() {
        i && (t(null, l._container), delete l._container.__vue_app__);
      },
      provide(a, u) {
        return (r.provides[a] = u), l;
      },
    });
    return l;
  };
}
function rs(t, e, n, s, o = !1) {
  if (ee(t)) {
    t.forEach((d, p) => rs(d, e && (ee(e) ? e[p] : e), n, s, o));
    return;
  }
  if (Wt(s) && !o) return;
  const r = s.shapeFlag & 4 ? Ds(s.component) || s.component.proxy : s.el,
    c = o ? null : r,
    { i, r: l } = t,
    a = e && e.r,
    u = i.refs === be ? (i.refs = {}) : i.refs,
    f = i.setupState;
  if (
    (a != null &&
      a !== l &&
      (we(a)
        ? ((u[a] = null), le(f, a) && (f[a] = null))
        : $e(a) && (a.value = null)),
    ce(l))
  )
    kt(l, i, 12, [c, u]);
  else {
    const d = we(l),
      p = $e(l);
    if (d || p) {
      const x = () => {
        if (t.f) {
          const A = d ? u[l] : l.value;
          o
            ? ee(A) && Mo(A, r)
            : ee(A)
            ? A.includes(r) || A.push(r)
            : d
            ? ((u[l] = [r]), le(f, l) && (f[l] = u[l]))
            : ((l.value = [r]), t.k && (u[t.k] = l.value));
        } else
          d
            ? ((u[l] = c), le(f, l) && (f[l] = c))
            : p && ((l.value = c), t.k && (u[t.k] = c));
      };
      c ? ((x.id = -1), qe(x, n)) : x();
    }
  }
}
let _t = !1;
const zn = (t) => /svg/.test(t.namespaceURI) && t.tagName !== "foreignObject",
  Hn = (t) => t.nodeType === 8;
function uu(t) {
  const {
      mt: e,
      p: n,
      o: {
        patchProp: s,
        createText: o,
        nextSibling: r,
        parentNode: c,
        remove: i,
        insert: l,
        createComment: a,
      },
    } = t,
    u = (g, v) => {
      if (!v.hasChildNodes()) {
        n(null, g, v), ts(), (v._vnode = g);
        return;
      }
      (_t = !1),
        f(v.firstChild, g, null, null, null),
        ts(),
        (v._vnode = g),
        _t && console.error("Hydration completed but contains mismatches.");
    },
    f = (g, v, E, L, N, S = !1) => {
      const z = Hn(g) && g.data === "[",
        T = () => A(g, v, E, L, N, z),
        { type: J, ref: R, shapeFlag: G, patchFlag: U } = v,
        se = g.nodeType;
      (v.el = g), U === -2 && ((S = !1), (v.dynamicChildren = null));
      let k = null;
      switch (J) {
        case En:
          se !== 3
            ? v.children === ""
              ? (l((v.el = o("")), c(g), g), (k = g))
              : (k = T())
            : (g.data !== v.children && ((_t = !0), (g.data = v.children)),
              (k = r(g)));
          break;
        case Me:
          se !== 8 || z ? (k = T()) : (k = r(g));
          break;
        case mn:
          if (se !== 1 && se !== 3) k = T();
          else {
            k = g;
            const ie = !v.children.length;
            for (let W = 0; W < v.staticCount; W++)
              ie && (v.children += k.nodeType === 1 ? k.outerHTML : k.data),
                W === v.staticCount - 1 && (v.anchor = k),
                (k = r(k));
            return k;
          }
          break;
        case te:
          z ? (k = x(g, v, E, L, N, S)) : (k = T());
          break;
        default:
          if (G & 1)
            se !== 1 || v.type.toLowerCase() !== g.tagName.toLowerCase()
              ? (k = T())
              : (k = d(g, v, E, L, N, S));
          else if (G & 6) {
            v.slotScopeIds = N;
            const ie = c(g);
            if (
              (e(v, ie, null, E, L, zn(ie), S),
              (k = z ? P(g) : r(g)),
              k && Hn(k) && k.data === "teleport end" && (k = r(k)),
              Wt(v))
            ) {
              let W;
              z
                ? ((W = M(te)),
                  (W.anchor = k ? k.previousSibling : ie.lastChild))
                : (W = g.nodeType === 3 ? Ce("") : M("div")),
                (W.el = g),
                (v.component.subTree = W);
            }
          } else
            G & 64
              ? se !== 8
                ? (k = T())
                : (k = v.type.hydrate(g, v, E, L, N, S, t, p))
              : G & 128 &&
                (k = v.type.hydrate(g, v, E, L, zn(c(g)), N, S, t, f));
      }
      return R != null && rs(R, null, L, v), k;
    },
    d = (g, v, E, L, N, S) => {
      S = S || !!v.dynamicChildren;
      const { type: z, props: T, patchFlag: J, shapeFlag: R, dirs: G } = v,
        U = (z === "input" && G) || z === "option";
      if (U || J !== -1) {
        if ((G && Xe(v, null, E, "created"), T))
          if (U || !S || J & 48)
            for (const k in T)
              ((U && k.endsWith("value")) || (Pn(k) && !hn(k))) &&
                s(g, k, null, T[k], !1, void 0, E);
          else T.onClick && s(g, "onClick", null, T.onClick, !1, void 0, E);
        let se;
        if (
          ((se = T && T.onVnodeBeforeMount) && ze(se, E, v),
          G && Xe(v, null, E, "beforeMount"),
          ((se = T && T.onVnodeMounted) || G) &&
            Si(() => {
              se && ze(se, E, v), G && Xe(v, null, E, "mounted");
            }, L),
          R & 16 && !(T && (T.innerHTML || T.textContent)))
        ) {
          let k = p(g.firstChild, v, g, E, L, N, S);
          for (; k; ) {
            _t = !0;
            const ie = k;
            (k = k.nextSibling), i(ie);
          }
        } else
          R & 8 &&
            g.textContent !== v.children &&
            ((_t = !0), (g.textContent = v.children));
      }
      return g.nextSibling;
    },
    p = (g, v, E, L, N, S, z) => {
      z = z || !!v.dynamicChildren;
      const T = v.children,
        J = T.length;
      for (let R = 0; R < J; R++) {
        const G = z ? T[R] : (T[R] = Ge(T[R]));
        if (g) g = f(g, G, L, N, S, z);
        else {
          if (G.type === En && !G.children) continue;
          (_t = !0), n(null, G, E, null, L, N, zn(E), S);
        }
      }
      return g;
    },
    x = (g, v, E, L, N, S) => {
      const { slotScopeIds: z } = v;
      z && (N = N ? N.concat(z) : z);
      const T = c(g),
        J = p(r(g), v, T, E, L, N, S);
      return J && Hn(J) && J.data === "]"
        ? r((v.anchor = J))
        : ((_t = !0), l((v.anchor = a("]")), T, J), J);
    },
    A = (g, v, E, L, N, S) => {
      if (((_t = !0), (v.el = null), S)) {
        const J = P(g);
        for (;;) {
          const R = r(g);
          if (R && R !== J) i(R);
          else break;
        }
      }
      const z = r(g),
        T = c(g);
      return i(g), n(null, v, T, z, E, L, zn(T), N), z;
    },
    P = (g) => {
      let v = 0;
      for (; g; )
        if (
          ((g = r(g)), g && Hn(g) && (g.data === "[" && v++, g.data === "]"))
        ) {
          if (v === 0) return r(g);
          v--;
        }
      return g;
    };
  return [u, f];
}
const qe = Si;
function fu(t) {
  return du(t, uu);
}
function du(t, e) {
  const n = Gl();
  n.__VUE__ = !0;
  const {
      insert: s,
      remove: o,
      patchProp: r,
      createElement: c,
      createText: i,
      createComment: l,
      setText: a,
      setElementText: u,
      parentNode: f,
      nextSibling: d,
      setScopeId: p = We,
      cloneNode: x,
      insertStaticContent: A,
    } = t,
    P = (
      h,
      m,
      w,
      $ = null,
      D = null,
      I = null,
      O = !1,
      F = null,
      V = !!m.dynamicChildren
    ) => {
      if (h === m) return;
      h && !Tt(h, m) && (($ = Mn(h)), ht(h, D, I, !0), (h = null)),
        m.patchFlag === -2 && ((V = !1), (m.dynamicChildren = null));
      const { type: q, ref: Q, shapeFlag: K } = m;
      switch (q) {
        case En:
          g(h, m, w, $);
          break;
        case Me:
          v(h, m, w, $);
          break;
        case mn:
          h == null && E(m, w, $, O);
          break;
        case te:
          se(h, m, w, $, D, I, O, F, V);
          break;
        default:
          K & 1
            ? S(h, m, w, $, D, I, O, F, V)
            : K & 6
            ? k(h, m, w, $, D, I, O, F, V)
            : (K & 64 || K & 128) && q.process(h, m, w, $, D, I, O, F, V, zt);
      }
      Q != null && D && rs(Q, h && h.ref, I, m || h, !m);
    },
    g = (h, m, w, $) => {
      if (h == null) s((m.el = i(m.children)), w, $);
      else {
        const D = (m.el = h.el);
        m.children !== h.children && a(D, m.children);
      }
    },
    v = (h, m, w, $) => {
      h == null ? s((m.el = l(m.children || "")), w, $) : (m.el = h.el);
    },
    E = (h, m, w, $) => {
      [h.el, h.anchor] = A(h.children, m, w, $, h.el, h.anchor);
    },
    L = ({ el: h, anchor: m }, w, $) => {
      let D;
      for (; h && h !== m; ) (D = d(h)), s(h, w, $), (h = D);
      s(m, w, $);
    },
    N = ({ el: h, anchor: m }) => {
      let w;
      for (; h && h !== m; ) (w = d(h)), o(h), (h = w);
      o(m);
    },
    S = (h, m, w, $, D, I, O, F, V) => {
      (O = O || m.type === "svg"),
        h == null ? z(m, w, $, D, I, O, F, V) : R(h, m, D, I, O, F, V);
    },
    z = (h, m, w, $, D, I, O, F) => {
      let V, q;
      const {
        type: Q,
        props: K,
        shapeFlag: X,
        transition: ne,
        patchFlag: ae,
        dirs: ge,
      } = h;
      if (h.el && x !== void 0 && ae === -1) V = h.el = x(h.el);
      else {
        if (
          ((V = h.el = c(h.type, I, K && K.is, K)),
          X & 8
            ? u(V, h.children)
            : X & 16 &&
              J(h.children, V, null, $, D, I && Q !== "foreignObject", O, F),
          ge && Xe(h, null, $, "created"),
          K)
        ) {
          for (const ye in K)
            ye !== "value" &&
              !hn(ye) &&
              r(V, ye, null, K[ye], I, h.children, $, D, it);
          "value" in K && r(V, "value", null, K.value),
            (q = K.onVnodeBeforeMount) && ze(q, $, h);
        }
        T(V, h, h.scopeId, O, $);
      }
      ge && Xe(h, null, $, "beforeMount");
      const ve = (!D || (D && !D.pendingBranch)) && ne && !ne.persisted;
      ve && ne.beforeEnter(V),
        s(V, m, w),
        ((q = K && K.onVnodeMounted) || ve || ge) &&
          qe(() => {
            q && ze(q, $, h),
              ve && ne.enter(V),
              ge && Xe(h, null, $, "mounted");
          }, D);
    },
    T = (h, m, w, $, D) => {
      if ((w && p(h, w), $)) for (let I = 0; I < $.length; I++) p(h, $[I]);
      if (D) {
        let I = D.subTree;
        if (m === I) {
          const O = D.vnode;
          T(h, O, O.scopeId, O.slotScopeIds, D.parent);
        }
      }
    },
    J = (h, m, w, $, D, I, O, F, V = 0) => {
      for (let q = V; q < h.length; q++) {
        const Q = (h[q] = F ? vt(h[q]) : Ge(h[q]));
        P(null, Q, m, w, $, D, I, O, F);
      }
    },
    R = (h, m, w, $, D, I, O) => {
      const F = (m.el = h.el);
      let { patchFlag: V, dynamicChildren: q, dirs: Q } = m;
      V |= h.patchFlag & 16;
      const K = h.props || be,
        X = m.props || be;
      let ne;
      w && At(w, !1),
        (ne = X.onVnodeBeforeUpdate) && ze(ne, w, m, h),
        Q && Xe(m, h, w, "beforeUpdate"),
        w && At(w, !0);
      const ae = D && m.type !== "foreignObject";
      if (
        (q
          ? G(h.dynamicChildren, q, F, w, $, ae, I)
          : O || ct(h, m, F, null, w, $, ae, I, !1),
        V > 0)
      ) {
        if (V & 16) U(F, m, K, X, w, $, D);
        else if (
          (V & 2 && K.class !== X.class && r(F, "class", null, X.class, D),
          V & 4 && r(F, "style", K.style, X.style, D),
          V & 8)
        ) {
          const ge = m.dynamicProps;
          for (let ve = 0; ve < ge.length; ve++) {
            const ye = ge[ve],
              je = K[ye],
              Ht = X[ye];
            (Ht !== je || ye === "value") &&
              r(F, ye, je, Ht, D, h.children, w, $, it);
          }
        }
        V & 1 && h.children !== m.children && u(F, m.children);
      } else !O && q == null && U(F, m, K, X, w, $, D);
      ((ne = X.onVnodeUpdated) || Q) &&
        qe(() => {
          ne && ze(ne, w, m, h), Q && Xe(m, h, w, "updated");
        }, $);
    },
    G = (h, m, w, $, D, I, O) => {
      for (let F = 0; F < m.length; F++) {
        const V = h[F],
          q = m[F],
          Q =
            V.el && (V.type === te || !Tt(V, q) || V.shapeFlag & 70)
              ? f(V.el)
              : w;
        P(V, q, Q, null, $, D, I, O, !0);
      }
    },
    U = (h, m, w, $, D, I, O) => {
      if (w !== $) {
        for (const F in $) {
          if (hn(F)) continue;
          const V = $[F],
            q = w[F];
          V !== q && F !== "value" && r(h, F, q, V, O, m.children, D, I, it);
        }
        if (w !== be)
          for (const F in w)
            !hn(F) && !(F in $) && r(h, F, w[F], null, O, m.children, D, I, it);
        "value" in $ && r(h, "value", w.value, $.value);
      }
    },
    se = (h, m, w, $, D, I, O, F, V) => {
      const q = (m.el = h ? h.el : i("")),
        Q = (m.anchor = h ? h.anchor : i(""));
      let { patchFlag: K, dynamicChildren: X, slotScopeIds: ne } = m;
      ne && (F = F ? F.concat(ne) : ne),
        h == null
          ? (s(q, w, $), s(Q, w, $), J(m.children, w, Q, D, I, O, F, V))
          : K > 0 && K & 64 && X && h.dynamicChildren
          ? (G(h.dynamicChildren, X, w, D, I, O, F),
            (m.key != null || (D && m === D.subTree)) && Xo(h, m, !0))
          : ct(h, m, w, Q, D, I, O, F, V);
    },
    k = (h, m, w, $, D, I, O, F, V) => {
      (m.slotScopeIds = F),
        h == null
          ? m.shapeFlag & 512
            ? D.ctx.activate(m, w, $, O, V)
            : ie(m, w, $, D, I, O, V)
          : W(h, m, V);
    },
    ie = (h, m, w, $, D, I, O) => {
      const F = (h.component = Cu(h, $, D));
      if ((As(h) && (F.ctx.renderer = zt), Au(F), F.asyncDep)) {
        if ((D && D.registerDep(F, fe), !h.el)) {
          const V = (F.subTree = M(Me));
          v(null, V, m, w);
        }
        return;
      }
      fe(F, h, m, w, D, I, O);
    },
    W = (h, m, w) => {
      const $ = (m.component = h.component);
      if (Ma(h, m, w))
        if ($.asyncDep && !$.asyncResolved) {
          me($, m, w);
          return;
        } else ($.next = m), Pa($.update), $.update();
      else (m.el = h.el), ($.vnode = m);
    },
    fe = (h, m, w, $, D, I, O) => {
      const F = () => {
          if (h.isMounted) {
            let { next: Q, bu: K, u: X, parent: ne, vnode: ae } = h,
              ge = Q,
              ve;
            At(h, !1),
              Q ? ((Q.el = ae.el), me(h, Q, O)) : (Q = ae),
              K && Wn(K),
              (ve = Q.props && Q.props.onVnodeBeforeUpdate) &&
                ze(ve, ne, Q, ae),
              At(h, !0);
            const ye = Zs(h),
              je = h.subTree;
            (h.subTree = ye),
              P(je, ye, f(je.el), Mn(je), h, D, I),
              (Q.el = ye.el),
              ge === null && Va(h, ye.el),
              X && qe(X, D),
              (ve = Q.props && Q.props.onVnodeUpdated) &&
                qe(() => ze(ve, ne, Q, ae), D);
          } else {
            let Q;
            const { el: K, props: X } = m,
              { bm: ne, m: ae, parent: ge } = h,
              ve = Wt(m);
            if (
              (At(h, !1),
              ne && Wn(ne),
              !ve && (Q = X && X.onVnodeBeforeMount) && ze(Q, ge, m),
              At(h, !0),
              K && Gs)
            ) {
              const ye = () => {
                (h.subTree = Zs(h)), Gs(K, h.subTree, h, D, null);
              };
              ve
                ? m.type.__asyncLoader().then(() => !h.isUnmounted && ye())
                : ye();
            } else {
              const ye = (h.subTree = Zs(h));
              P(null, ye, w, $, h, D, I), (m.el = ye.el);
            }
            if ((ae && qe(ae, D), !ve && (Q = X && X.onVnodeMounted))) {
              const ye = m;
              qe(() => ze(Q, ge, ye), D);
            }
            (m.shapeFlag & 256 ||
              (ge && Wt(ge.vnode) && ge.vnode.shapeFlag & 256)) &&
              h.a &&
              qe(h.a, D),
              (h.isMounted = !0),
              (m = w = $ = null);
          }
        },
        V = (h.effect = new Bo(F, () => Zo(q), h.scope)),
        q = (h.update = () => V.run());
      (q.id = h.uid), At(h, !0), q();
    },
    me = (h, m, w) => {
      m.component = h;
      const $ = h.vnode.props;
      (h.vnode = m),
        (h.next = null),
        ou(h, m.props, $, w),
        iu(h, m.children, w),
        en(),
        Dr(),
        tn();
    },
    ct = (h, m, w, $, D, I, O, F, V = !1) => {
      const q = h && h.children,
        Q = h ? h.shapeFlag : 0,
        K = m.children,
        { patchFlag: X, shapeFlag: ne } = m;
      if (X > 0) {
        if (X & 128) {
          ln(q, K, w, $, D, I, O, F, V);
          return;
        } else if (X & 256) {
          Us(q, K, w, $, D, I, O, F, V);
          return;
        }
      }
      ne & 8
        ? (Q & 16 && it(q, D, I), K !== q && u(w, K))
        : Q & 16
        ? ne & 16
          ? ln(q, K, w, $, D, I, O, F, V)
          : it(q, D, I, !0)
        : (Q & 8 && u(w, ""), ne & 16 && J(K, w, $, D, I, O, F, V));
    },
    Us = (h, m, w, $, D, I, O, F, V) => {
      (h = h || jt), (m = m || jt);
      const q = h.length,
        Q = m.length,
        K = Math.min(q, Q);
      let X;
      for (X = 0; X < K; X++) {
        const ne = (m[X] = V ? vt(m[X]) : Ge(m[X]));
        P(h[X], ne, w, null, D, I, O, F, V);
      }
      q > Q ? it(h, D, I, !0, !1, K) : J(m, w, $, D, I, O, F, V, K);
    },
    ln = (h, m, w, $, D, I, O, F, V) => {
      let q = 0;
      const Q = m.length;
      let K = h.length - 1,
        X = Q - 1;
      for (; q <= K && q <= X; ) {
        const ne = h[q],
          ae = (m[q] = V ? vt(m[q]) : Ge(m[q]));
        if (Tt(ne, ae)) P(ne, ae, w, null, D, I, O, F, V);
        else break;
        q++;
      }
      for (; q <= K && q <= X; ) {
        const ne = h[K],
          ae = (m[X] = V ? vt(m[X]) : Ge(m[X]));
        if (Tt(ne, ae)) P(ne, ae, w, null, D, I, O, F, V);
        else break;
        K--, X--;
      }
      if (q > K) {
        if (q <= X) {
          const ne = X + 1,
            ae = ne < Q ? m[ne].el : $;
          for (; q <= X; )
            P(null, (m[q] = V ? vt(m[q]) : Ge(m[q])), w, ae, D, I, O, F, V),
              q++;
        }
      } else if (q > X) for (; q <= K; ) ht(h[q], D, I, !0), q++;
      else {
        const ne = q,
          ae = q,
          ge = new Map();
        for (q = ae; q <= X; q++) {
          const Fe = (m[q] = V ? vt(m[q]) : Ge(m[q]));
          Fe.key != null && ge.set(Fe.key, q);
        }
        let ve,
          ye = 0;
        const je = X - ae + 1;
        let Ht = !1,
          mr = 0;
        const an = new Array(je);
        for (q = 0; q < je; q++) an[q] = 0;
        for (q = ne; q <= K; q++) {
          const Fe = h[q];
          if (ye >= je) {
            ht(Fe, D, I, !0);
            continue;
          }
          let Qe;
          if (Fe.key != null) Qe = ge.get(Fe.key);
          else
            for (ve = ae; ve <= X; ve++)
              if (an[ve - ae] === 0 && Tt(Fe, m[ve])) {
                Qe = ve;
                break;
              }
          Qe === void 0
            ? ht(Fe, D, I, !0)
            : ((an[Qe - ae] = q + 1),
              Qe >= mr ? (mr = Qe) : (Ht = !0),
              P(Fe, m[Qe], w, null, D, I, O, F, V),
              ye++);
        }
        const gr = Ht ? hu(an) : jt;
        for (ve = gr.length - 1, q = je - 1; q >= 0; q--) {
          const Fe = ae + q,
            Qe = m[Fe],
            vr = Fe + 1 < Q ? m[Fe + 1].el : $;
          an[q] === 0
            ? P(null, Qe, w, vr, D, I, O, F, V)
            : Ht && (ve < 0 || q !== gr[ve] ? Ot(Qe, w, vr, 2) : ve--);
        }
      }
    },
    Ot = (h, m, w, $, D = null) => {
      const { el: I, type: O, transition: F, children: V, shapeFlag: q } = h;
      if (q & 6) {
        Ot(h.component.subTree, m, w, $);
        return;
      }
      if (q & 128) {
        h.suspense.move(m, w, $);
        return;
      }
      if (q & 64) {
        O.move(h, m, w, zt);
        return;
      }
      if (O === te) {
        s(I, m, w);
        for (let K = 0; K < V.length; K++) Ot(V[K], m, w, $);
        s(h.anchor, m, w);
        return;
      }
      if (O === mn) {
        L(h, m, w);
        return;
      }
      if ($ !== 2 && q & 1 && F)
        if ($ === 0) F.beforeEnter(I), s(I, m, w), qe(() => F.enter(I), D);
        else {
          const { leave: K, delayLeave: X, afterLeave: ne } = F,
            ae = () => s(I, m, w),
            ge = () => {
              K(I, () => {
                ae(), ne && ne();
              });
            };
          X ? X(I, ae, ge) : ge();
        }
      else s(I, m, w);
    },
    ht = (h, m, w, $ = !1, D = !1) => {
      const {
        type: I,
        props: O,
        ref: F,
        children: V,
        dynamicChildren: q,
        shapeFlag: Q,
        patchFlag: K,
        dirs: X,
      } = h;
      if ((F != null && rs(F, null, w, h, !0), Q & 256)) {
        m.ctx.deactivate(h);
        return;
      }
      const ne = Q & 1 && X,
        ae = !Wt(h);
      let ge;
      if ((ae && (ge = O && O.onVnodeBeforeUnmount) && ze(ge, m, h), Q & 6))
        ql(h.component, w, $);
      else {
        if (Q & 128) {
          h.suspense.unmount(w, $);
          return;
        }
        ne && Xe(h, null, m, "beforeUnmount"),
          Q & 64
            ? h.type.remove(h, m, w, D, zt, $)
            : q && (I !== te || (K > 0 && K & 64))
            ? it(q, m, w, !1, !0)
            : ((I === te && K & 384) || (!D && Q & 16)) && it(V, m, w),
          $ && pr(h);
      }
      ((ae && (ge = O && O.onVnodeUnmounted)) || ne) &&
        qe(() => {
          ge && ze(ge, m, h), ne && Xe(h, null, m, "unmounted");
        }, w);
    },
    pr = (h) => {
      const { type: m, el: w, anchor: $, transition: D } = h;
      if (m === te) {
        Tl(w, $);
        return;
      }
      if (m === mn) {
        N(h);
        return;
      }
      const I = () => {
        o(w), D && !D.persisted && D.afterLeave && D.afterLeave();
      };
      if (h.shapeFlag & 1 && D && !D.persisted) {
        const { leave: O, delayLeave: F } = D,
          V = () => O(w, I);
        F ? F(h.el, I, V) : V();
      } else I();
    },
    Tl = (h, m) => {
      let w;
      for (; h !== m; ) (w = d(h)), o(h), (h = w);
      o(m);
    },
    ql = (h, m, w) => {
      const { bum: $, scope: D, update: I, subTree: O, um: F } = h;
      $ && Wn($),
        D.stop(),
        I && ((I.active = !1), ht(O, h, m, w)),
        F && qe(F, m),
        qe(() => {
          h.isUnmounted = !0;
        }, m),
        m &&
          m.pendingBranch &&
          !m.isUnmounted &&
          h.asyncDep &&
          !h.asyncResolved &&
          h.suspenseId === m.pendingId &&
          (m.deps--, m.deps === 0 && m.resolve());
    },
    it = (h, m, w, $ = !1, D = !1, I = 0) => {
      for (let O = I; O < h.length; O++) ht(h[O], m, w, $, D);
    },
    Mn = (h) =>
      h.shapeFlag & 6
        ? Mn(h.component.subTree)
        : h.shapeFlag & 128
        ? h.suspense.next()
        : d(h.anchor || h.el),
    _r = (h, m, w) => {
      h == null
        ? m._vnode && ht(m._vnode, null, null, !0)
        : P(m._vnode || null, h, m, null, null, null, w),
        Dr(),
        ts(),
        (m._vnode = h);
    },
    zt = {
      p: P,
      um: ht,
      m: Ot,
      r: pr,
      mt: ie,
      mc: J,
      pc: ct,
      pbc: G,
      n: Mn,
      o: t,
    };
  let js, Gs;
  return (
    e && ([js, Gs] = e(zt)), { render: _r, hydrate: js, createApp: au(_r, js) }
  );
}
function At({ effect: t, update: e }, n) {
  t.allowRecurse = e.allowRecurse = n;
}
function Xo(t, e, n = !1) {
  const s = t.children,
    o = e.children;
  if (ee(s) && ee(o))
    for (let r = 0; r < s.length; r++) {
      const c = s[r];
      let i = o[r];
      i.shapeFlag & 1 &&
        !i.dynamicChildren &&
        ((i.patchFlag <= 0 || i.patchFlag === 32) &&
          ((i = o[r] = vt(o[r])), (i.el = c.el)),
        n || Xo(c, i));
    }
}
function hu(t) {
  const e = t.slice(),
    n = [0];
  let s, o, r, c, i;
  const l = t.length;
  for (s = 0; s < l; s++) {
    const a = t[s];
    if (a !== 0) {
      if (((o = n[n.length - 1]), t[o] < a)) {
        (e[s] = o), n.push(s);
        continue;
      }
      for (r = 0, c = n.length - 1; r < c; )
        (i = (r + c) >> 1), t[n[i]] < a ? (r = i + 1) : (c = i);
      a < t[n[r]] && (r > 0 && (e[s] = n[r - 1]), (n[r] = s));
    }
  }
  for (r = n.length, c = n[r - 1]; r-- > 0; ) (n[r] = c), (c = e[c]);
  return n;
}
const pu = (t) => t.__isTeleport,
  _n = (t) => t && (t.disabled || t.disabled === ""),
  Nr = (t) => typeof SVGElement < "u" && t instanceof SVGElement,
  Eo = (t, e) => {
    const n = t && t.to;
    return we(n) ? (e ? e(n) : null) : n;
  },
  _u = {
    __isTeleport: !0,
    process(t, e, n, s, o, r, c, i, l, a) {
      const {
          mc: u,
          pc: f,
          pbc: d,
          o: { insert: p, querySelector: x, createText: A, createComment: P },
        } = a,
        g = _n(e.props);
      let { shapeFlag: v, children: E, dynamicChildren: L } = e;
      if (t == null) {
        const N = (e.el = A("")),
          S = (e.anchor = A(""));
        p(N, n, s), p(S, n, s);
        const z = (e.target = Eo(e.props, x)),
          T = (e.targetAnchor = A(""));
        z && (p(T, z), (c = c || Nr(z)));
        const J = (R, G) => {
          v & 16 && u(E, R, G, o, r, c, i, l);
        };
        g ? J(n, S) : z && J(z, T);
      } else {
        e.el = t.el;
        const N = (e.anchor = t.anchor),
          S = (e.target = t.target),
          z = (e.targetAnchor = t.targetAnchor),
          T = _n(t.props),
          J = T ? n : S,
          R = T ? N : z;
        if (
          ((c = c || Nr(S)),
          L
            ? (d(t.dynamicChildren, L, J, o, r, c, i), Xo(t, e, !0))
            : l || f(t, e, J, R, o, r, c, i, !1),
          g)
        )
          T || Un(e, n, N, a, 1);
        else if ((e.props && e.props.to) !== (t.props && t.props.to)) {
          const G = (e.target = Eo(e.props, x));
          G && Un(e, G, null, a, 0);
        } else T && Un(e, S, z, a, 1);
      }
    },
    remove(t, e, n, s, { um: o, o: { remove: r } }, c) {
      const {
        shapeFlag: i,
        children: l,
        anchor: a,
        targetAnchor: u,
        target: f,
        props: d,
      } = t;
      if ((f && r(u), (c || !_n(d)) && (r(a), i & 16)))
        for (let p = 0; p < l.length; p++) {
          const x = l[p];
          o(x, e, n, !0, !!x.dynamicChildren);
        }
    },
    move: Un,
    hydrate: mu,
  };
function Un(t, e, n, { o: { insert: s }, m: o }, r = 2) {
  r === 0 && s(t.targetAnchor, e, n);
  const { el: c, anchor: i, shapeFlag: l, children: a, props: u } = t,
    f = r === 2;
  if ((f && s(c, e, n), (!f || _n(u)) && l & 16))
    for (let d = 0; d < a.length; d++) o(a[d], e, n, 2);
  f && s(i, e, n);
}
function mu(
  t,
  e,
  n,
  s,
  o,
  r,
  { o: { nextSibling: c, parentNode: i, querySelector: l } },
  a
) {
  const u = (e.target = Eo(e.props, l));
  if (u) {
    const f = u._lpa || u.firstChild;
    if (e.shapeFlag & 16)
      if (_n(e.props))
        (e.anchor = a(c(t), e, i(t), n, s, o, r)), (e.targetAnchor = f);
      else {
        e.anchor = c(t);
        let d = f;
        for (; d; )
          if (
            ((d = c(d)), d && d.nodeType === 8 && d.data === "teleport anchor")
          ) {
            (e.targetAnchor = d),
              (u._lpa = e.targetAnchor && c(e.targetAnchor));
            break;
          }
        a(f, e, u, n, s, o, r);
      }
  }
  return e.anchor && c(e.anchor);
}
const gu = _u,
  te = Symbol(void 0),
  En = Symbol(void 0),
  Me = Symbol(void 0),
  mn = Symbol(void 0),
  gn = [];
let Ze = null;
function _(t = !1) {
  gn.push((Ze = t ? null : []));
}
function vu() {
  gn.pop(), (Ze = gn[gn.length - 1] || null);
}
let Sn = 1;
function Br(t) {
  Sn += t;
}
function Ki(t) {
  return (
    (t.dynamicChildren = Sn > 0 ? Ze || jt : null),
    vu(),
    Sn > 0 && Ze && Ze.push(t),
    t
  );
}
function b(t, e, n, s, o, r) {
  return Ki(C(t, e, n, s, o, r, !0));
}
function re(t, e, n, s, o) {
  return Ki(M(t, e, n, s, o, !0));
}
function cs(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function Tt(t, e) {
  return t.type === e.type && t.key === e.key;
}
const Ss = "__vInternal",
  Zi = ({ key: t }) => (t != null ? t : null),
  Yn = ({ ref: t, ref_key: e, ref_for: n }) =>
    t != null
      ? we(t) || $e(t) || ce(t)
        ? { i: Pe, r: t, k: e, f: !!n }
        : t
      : null;
function C(
  t,
  e = null,
  n = null,
  s = 0,
  o = null,
  r = t === te ? 0 : 1,
  c = !1,
  i = !1
) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && Zi(e),
    ref: e && Yn(e),
    scopeId: ws,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: s,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
  };
  return (
    i
      ? (er(l, n), r & 128 && t.normalize(l))
      : n && (l.shapeFlag |= we(n) ? 8 : 16),
    Sn > 0 &&
      !c &&
      Ze &&
      (l.patchFlag > 0 || r & 6) &&
      l.patchFlag !== 32 &&
      Ze.push(l),
    l
  );
}
const M = bu;
function bu(t, e = null, n = null, s = 0, o = null, r = !1) {
  if (((!t || t === Mi) && (t = Me), cs(t))) {
    const i = xt(t, e, !0);
    return (
      n && er(i, n),
      Sn > 0 &&
        !r &&
        Ze &&
        (i.shapeFlag & 6 ? (Ze[Ze.indexOf(t)] = i) : Ze.push(i)),
      (i.patchFlag |= -2),
      i
    );
  }
  if ((Pu(t) && (t = t.__vccOpts), e)) {
    e = ku(e);
    let { class: i, style: l } = e;
    i && !we(i) && (e.class = _e(i)),
      ke(l) && (gi(l) && !ee(l) && (l = Se({}, l)), (e.style = Fo(l)));
  }
  const c = we(t) ? 1 : Ra(t) ? 128 : pu(t) ? 64 : ke(t) ? 4 : ce(t) ? 2 : 0;
  return C(t, e, n, s, o, c, r, !0);
}
function ku(t) {
  return t ? (gi(t) || Ss in t ? Se({}, t) : t) : null;
}
function xt(t, e, n = !1) {
  const { props: s, ref: o, patchFlag: r, children: c } = t,
    i = e ? Jn(s || {}, e) : s;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: i,
    key: i && Zi(i),
    ref:
      e && e.ref
        ? n && o
          ? ee(o)
            ? o.concat(Yn(e))
            : [o, Yn(e)]
          : Yn(e)
        : o,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: c,
    target: t.target,
    targetAnchor: t.targetAnchor,
    staticCount: t.staticCount,
    shapeFlag: t.shapeFlag,
    patchFlag: e && t.type !== te ? (r === -1 ? 16 : r | 16) : r,
    dynamicProps: t.dynamicProps,
    dynamicChildren: t.dynamicChildren,
    appContext: t.appContext,
    dirs: t.dirs,
    transition: t.transition,
    component: t.component,
    suspense: t.suspense,
    ssContent: t.ssContent && xt(t.ssContent),
    ssFallback: t.ssFallback && xt(t.ssFallback),
    el: t.el,
    anchor: t.anchor,
  };
}
function Ce(t = " ", e = 0) {
  return M(En, null, t, e);
}
function yu(t, e) {
  const n = M(mn, null, t);
  return (n.staticCount = e), n;
}
function Z(t = "", e = !1) {
  return e ? (_(), re(Me, null, t)) : M(Me, null, t);
}
function Ge(t) {
  return t == null || typeof t == "boolean"
    ? M(Me)
    : ee(t)
    ? M(te, null, t.slice())
    : typeof t == "object"
    ? vt(t)
    : M(En, null, String(t));
}
function vt(t) {
  return t.el === null || t.memo ? t : xt(t);
}
function er(t, e) {
  let n = 0;
  const { shapeFlag: s } = t;
  if (e == null) e = null;
  else if (ee(e)) n = 16;
  else if (typeof e == "object")
    if (s & 65) {
      const o = e.default;
      o && (o._c && (o._d = !1), er(t, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = e._;
      !o && !(Ss in e)
        ? (e._ctx = Pe)
        : o === 3 &&
          Pe &&
          (Pe.slots._ === 1 ? (e._ = 1) : ((e._ = 2), (t.patchFlag |= 1024)));
    }
  else
    ce(e)
      ? ((e = { default: e, _ctx: Pe }), (n = 32))
      : ((e = String(e)), s & 64 ? ((n = 16), (e = [Ce(e)])) : (n = 8));
  (t.children = e), (t.shapeFlag |= n);
}
function Jn(...t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const s = t[n];
    for (const o in s)
      if (o === "class")
        e.class !== s.class && (e.class = _e([e.class, s.class]));
      else if (o === "style") e.style = Fo([e.style, s.style]);
      else if (Pn(o)) {
        const r = e[o],
          c = s[o];
        c &&
          r !== c &&
          !(ee(r) && r.includes(c)) &&
          (e[o] = r ? [].concat(r, c) : c);
      } else o !== "" && (e[o] = s[o]);
  }
  return e;
}
function ze(t, e, n, s = null) {
  He(t, e, 7, [n, s]);
}
const xu = Gi();
let wu = 0;
function Cu(t, e, n) {
  const s = t.type,
    o = (e ? e.appContext : t.appContext) || xu,
    r = {
      uid: wu++,
      vnode: t,
      type: s,
      parent: e,
      appContext: o,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new Kl(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: e ? e.provides : Object.create(o.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: zi(s, o),
      emitsOptions: Ei(s, o),
      emit: null,
      emitted: null,
      propsDefaults: be,
      inheritAttrs: s.inheritAttrs,
      ctx: be,
      data: be,
      props: be,
      attrs: be,
      slots: be,
      refs: be,
      setupState: be,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (r.ctx = { _: r }),
    (r.root = e ? e.root : r),
    (r.emit = La.bind(null, r)),
    t.ce && t.ce(r),
    r
  );
}
let Ee = null;
const tr = () => Ee || Pe,
  Qt = (t) => {
    (Ee = t), t.scope.on();
  },
  Vt = () => {
    Ee && Ee.scope.off(), (Ee = null);
  };
function Wi(t) {
  return t.vnode.shapeFlag & 4;
}
let Dn = !1;
function Au(t, e = !1) {
  Dn = e;
  const { props: n, children: s } = t.vnode,
    o = Wi(t);
  su(t, n, o, e), cu(t, s);
  const r = o ? Eu(t, e) : void 0;
  return (Dn = !1), r;
}
function Eu(t, e) {
  const n = t.type;
  (t.accessCache = Object.create(null)), (t.proxy = pn(new Proxy(t.ctx, Ja)));
  const { setup: s } = n;
  if (s) {
    const o = (t.setupContext = s.length > 1 ? Du(t) : null);
    Qt(t), en();
    const r = kt(s, t, 0, [t.props, o]);
    if ((tn(), Vt(), oi(r))) {
      if ((r.then(Vt, Vt), e))
        return r
          .then((c) => {
            Or(t, c, e);
          })
          .catch((c) => {
            ys(c, t, 0);
          });
      t.asyncDep = r;
    } else Or(t, r, e);
  } else Yi(t, e);
}
function Or(t, e, n) {
  ce(e)
    ? t.type.__ssrInlineRender
      ? (t.ssrRender = e)
      : (t.render = e)
    : ke(e) && (t.setupState = yi(e)),
    Yi(t, n);
}
let zr;
function Yi(t, e, n) {
  const s = t.type;
  if (!t.render) {
    if (!e && zr && !s.render) {
      const o = s.template;
      if (o) {
        const { isCustomElement: r, compilerOptions: c } = t.appContext.config,
          { delimiters: i, compilerOptions: l } = s,
          a = Se(Se({ isCustomElement: r, delimiters: i }, c), l);
        s.render = zr(o, a);
      }
    }
    t.render = s.render || We;
  }
  Qt(t), en(), Qa(t), tn(), Vt();
}
function Su(t) {
  return new Proxy(t.attrs, {
    get(e, n) {
      return Ve(t, "get", "$attrs"), e[n];
    },
  });
}
function Du(t) {
  const e = (s) => {
    t.exposed = s || {};
  };
  let n;
  return {
    get attrs() {
      return n || (n = Su(t));
    },
    slots: t.slots,
    emit: t.emit,
    expose: e,
  };
}
function Ds(t) {
  if (t.exposed)
    return (
      t.exposeProxy ||
      (t.exposeProxy = new Proxy(yi(pn(t.exposed)), {
        get(e, n) {
          if (n in e) return e[n];
          if (n in ss) return ss[n](t);
        },
      }))
    );
}
function $u(t, e = !0) {
  return ce(t) ? t.displayName || t.name : t.name || (e && t.__name);
}
function Pu(t) {
  return ce(t) && "__vccOpts" in t;
}
const de = (t, e) => Sa(t, e, Dn);
function is(t, e, n) {
  const s = arguments.length;
  return s === 2
    ? ke(e) && !ee(e)
      ? cs(e)
        ? M(t, null, [e])
        : M(t, e)
      : M(t, null, e)
    : (s > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : s === 3 && cs(n) && (n = [n]),
      M(t, e, n));
}
const Tu = "3.2.38",
  qu = "http://www.w3.org/2000/svg",
  qt = typeof document < "u" ? document : null,
  Hr = qt && qt.createElement("template"),
  Lu = {
    insert: (t, e, n) => {
      e.insertBefore(t, n || null);
    },
    remove: (t) => {
      const e = t.parentNode;
      e && e.removeChild(t);
    },
    createElement: (t, e, n, s) => {
      const o = e
        ? qt.createElementNS(qu, t)
        : qt.createElement(t, n ? { is: n } : void 0);
      return (
        t === "select" &&
          s &&
          s.multiple != null &&
          o.setAttribute("multiple", s.multiple),
        o
      );
    },
    createText: (t) => qt.createTextNode(t),
    createComment: (t) => qt.createComment(t),
    setText: (t, e) => {
      t.nodeValue = e;
    },
    setElementText: (t, e) => {
      t.textContent = e;
    },
    parentNode: (t) => t.parentNode,
    nextSibling: (t) => t.nextSibling,
    querySelector: (t) => qt.querySelector(t),
    setScopeId(t, e) {
      t.setAttribute(e, "");
    },
    cloneNode(t) {
      const e = t.cloneNode(!0);
      return "_value" in t && (e._value = t._value), e;
    },
    insertStaticContent(t, e, n, s, o, r) {
      const c = n ? n.previousSibling : e.lastChild;
      if (o && (o === r || o.nextSibling))
        for (
          ;
          e.insertBefore(o.cloneNode(!0), n),
            !(o === r || !(o = o.nextSibling));

        );
      else {
        Hr.innerHTML = s ? `<svg>${t}</svg>` : t;
        const i = Hr.content;
        if (s) {
          const l = i.firstChild;
          for (; l.firstChild; ) i.appendChild(l.firstChild);
          i.removeChild(l);
        }
        e.insertBefore(i, n);
      }
      return [
        c ? c.nextSibling : e.firstChild,
        n ? n.previousSibling : e.lastChild,
      ];
    },
  };
function Fu(t, e, n) {
  const s = t._vtc;
  s && (e = (e ? [e, ...s] : [...s]).join(" ")),
    e == null
      ? t.removeAttribute("class")
      : n
      ? t.setAttribute("class", e)
      : (t.className = e);
}
function Iu(t, e, n) {
  const s = t.style,
    o = we(n);
  if (n && !o) {
    for (const r in n) So(s, r, n[r]);
    if (e && !we(e)) for (const r in e) n[r] == null && So(s, r, "");
  } else {
    const r = s.display;
    o ? e !== n && (s.cssText = n) : e && t.removeAttribute("style"),
      "_vod" in t && (s.display = r);
  }
}
const Ur = /\s*!important$/;
function So(t, e, n) {
  if (ee(n)) n.forEach((s) => So(t, e, s));
  else if ((n == null && (n = ""), e.startsWith("--"))) t.setProperty(e, n);
  else {
    const s = Mu(t, e);
    Ur.test(n)
      ? t.setProperty(Bt(s), n.replace(Ur, ""), "important")
      : (t[s] = n);
  }
}
const jr = ["Webkit", "Moz", "ms"],
  Ys = {};
function Mu(t, e) {
  const n = Ys[e];
  if (n) return n;
  let s = tt(e);
  if (s !== "filter" && s in t) return (Ys[e] = s);
  s = vs(s);
  for (let o = 0; o < jr.length; o++) {
    const r = jr[o] + s;
    if (r in t) return (Ys[e] = r);
  }
  return e;
}
const Gr = "http://www.w3.org/1999/xlink";
function Vu(t, e, n, s, o) {
  if (s && e.startsWith("xlink:"))
    n == null
      ? t.removeAttributeNS(Gr, e.slice(6, e.length))
      : t.setAttributeNS(Gr, e, n);
  else {
    const r = Fl(e);
    n == null || (r && !ni(n))
      ? t.removeAttribute(e)
      : t.setAttribute(e, r ? "" : n);
  }
}
function Ru(t, e, n, s, o, r, c) {
  if (e === "innerHTML" || e === "textContent") {
    s && c(s, o, r), (t[e] = n == null ? "" : n);
    return;
  }
  if (e === "value" && t.tagName !== "PROGRESS" && !t.tagName.includes("-")) {
    t._value = n;
    const l = n == null ? "" : n;
    (t.value !== l || t.tagName === "OPTION") && (t.value = l),
      n == null && t.removeAttribute(e);
    return;
  }
  let i = !1;
  if (n === "" || n == null) {
    const l = typeof t[e];
    l === "boolean"
      ? (n = ni(n))
      : n == null && l === "string"
      ? ((n = ""), (i = !0))
      : l === "number" && ((n = 0), (i = !0));
  }
  try {
    t[e] = n;
  } catch {}
  i && t.removeAttribute(e);
}
const [Ji, Nu] = (() => {
  let t = Date.now,
    e = !1;
  if (typeof window < "u") {
    Date.now() > document.createEvent("Event").timeStamp &&
      (t = performance.now.bind(performance));
    const n = navigator.userAgent.match(/firefox\/(\d+)/i);
    e = !!(n && Number(n[1]) <= 53);
  }
  return [t, e];
})();
let Do = 0;
const Bu = Promise.resolve(),
  Ou = () => {
    Do = 0;
  },
  zu = () => Do || (Bu.then(Ou), (Do = Ji()));
function Qi(t, e, n, s) {
  t.addEventListener(e, n, s);
}
function Hu(t, e, n, s) {
  t.removeEventListener(e, n, s);
}
function Uu(t, e, n, s, o = null) {
  const r = t._vei || (t._vei = {}),
    c = r[e];
  if (s && c) c.value = s;
  else {
    const [i, l] = ju(e);
    if (s) {
      const a = (r[e] = Gu(s, o));
      Qi(t, i, a, l);
    } else c && (Hu(t, i, c, l), (r[e] = void 0));
  }
}
const Kr = /(?:Once|Passive|Capture)$/;
function ju(t) {
  let e;
  if (Kr.test(t)) {
    e = {};
    let s;
    for (; (s = t.match(Kr)); )
      (t = t.slice(0, t.length - s[0].length)), (e[s[0].toLowerCase()] = !0);
  }
  return [t[2] === ":" ? t.slice(3) : Bt(t.slice(2)), e];
}
function Gu(t, e) {
  const n = (s) => {
    const o = s.timeStamp || Ji();
    (Nu || o >= n.attached - 1) && He(Ku(s, n.value), e, 5, [s]);
  };
  return (n.value = t), (n.attached = zu()), n;
}
function Ku(t, e) {
  if (ee(e)) {
    const n = t.stopImmediatePropagation;
    return (
      (t.stopImmediatePropagation = () => {
        n.call(t), (t._stopped = !0);
      }),
      e.map((s) => (o) => !o._stopped && s && s(o))
    );
  } else return e;
}
const Zr = /^on[a-z]/,
  Zu = (t, e, n, s, o = !1, r, c, i, l) => {
    e === "class"
      ? Fu(t, s, o)
      : e === "style"
      ? Iu(t, n, s)
      : Pn(e)
      ? Io(e) || Uu(t, e, n, s, c)
      : (
          e[0] === "."
            ? ((e = e.slice(1)), !0)
            : e[0] === "^"
            ? ((e = e.slice(1)), !1)
            : Wu(t, e, s, o)
        )
      ? Ru(t, e, s, r, c, i, l)
      : (e === "true-value"
          ? (t._trueValue = s)
          : e === "false-value" && (t._falseValue = s),
        Vu(t, e, s, o));
  };
function Wu(t, e, n, s) {
  return s
    ? !!(
        e === "innerHTML" ||
        e === "textContent" ||
        (e in t && Zr.test(e) && ce(n))
      )
    : e === "spellcheck" ||
      e === "draggable" ||
      e === "translate" ||
      e === "form" ||
      (e === "list" && t.tagName === "INPUT") ||
      (e === "type" && t.tagName === "TEXTAREA") ||
      (Zr.test(e) && we(n))
    ? !1
    : e in t;
}
const mt = "transition",
  un = "animation",
  $s = (t, { slots: e }) => is($i, Yu(t), e);
$s.displayName = "Transition";
const Xi = {
  name: String,
  type: String,
  css: { type: Boolean, default: !0 },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String,
};
$s.props = Se({}, $i.props, Xi);
const Et = (t, e = []) => {
    ee(t) ? t.forEach((n) => n(...e)) : t && t(...e);
  },
  Wr = (t) => (t ? (ee(t) ? t.some((e) => e.length > 1) : t.length > 1) : !1);
function Yu(t) {
  const e = {};
  for (const U in t) U in Xi || (e[U] = t[U]);
  if (t.css === !1) return e;
  const {
      name: n = "v",
      type: s,
      duration: o,
      enterFromClass: r = `${n}-enter-from`,
      enterActiveClass: c = `${n}-enter-active`,
      enterToClass: i = `${n}-enter-to`,
      appearFromClass: l = r,
      appearActiveClass: a = c,
      appearToClass: u = i,
      leaveFromClass: f = `${n}-leave-from`,
      leaveActiveClass: d = `${n}-leave-active`,
      leaveToClass: p = `${n}-leave-to`,
    } = t,
    x = Ju(o),
    A = x && x[0],
    P = x && x[1],
    {
      onBeforeEnter: g,
      onEnter: v,
      onEnterCancelled: E,
      onLeave: L,
      onLeaveCancelled: N,
      onBeforeAppear: S = g,
      onAppear: z = v,
      onAppearCancelled: T = E,
    } = e,
    J = (U, se, k) => {
      St(U, se ? u : i), St(U, se ? a : c), k && k();
    },
    R = (U, se) => {
      (U._isLeaving = !1), St(U, f), St(U, p), St(U, d), se && se();
    },
    G = (U) => (se, k) => {
      const ie = U ? z : v,
        W = () => J(se, U, k);
      Et(ie, [se, W]),
        Yr(() => {
          St(se, U ? l : r), gt(se, U ? u : i), Wr(ie) || Jr(se, s, A, W);
        });
    };
  return Se(e, {
    onBeforeEnter(U) {
      Et(g, [U]), gt(U, r), gt(U, c);
    },
    onBeforeAppear(U) {
      Et(S, [U]), gt(U, l), gt(U, a);
    },
    onEnter: G(!1),
    onAppear: G(!0),
    onLeave(U, se) {
      U._isLeaving = !0;
      const k = () => R(U, se);
      gt(U, f),
        ef(),
        gt(U, d),
        Yr(() => {
          !U._isLeaving || (St(U, f), gt(U, p), Wr(L) || Jr(U, s, P, k));
        }),
        Et(L, [U, k]);
    },
    onEnterCancelled(U) {
      J(U, !1), Et(E, [U]);
    },
    onAppearCancelled(U) {
      J(U, !0), Et(T, [U]);
    },
    onLeaveCancelled(U) {
      R(U), Et(N, [U]);
    },
  });
}
function Ju(t) {
  if (t == null) return null;
  if (ke(t)) return [Js(t.enter), Js(t.leave)];
  {
    const e = Js(t);
    return [e, e];
  }
}
function Js(t) {
  return Ro(t);
}
function gt(t, e) {
  e.split(/\s+/).forEach((n) => n && t.classList.add(n)),
    (t._vtc || (t._vtc = new Set())).add(e);
}
function St(t, e) {
  e.split(/\s+/).forEach((s) => s && t.classList.remove(s));
  const { _vtc: n } = t;
  n && (n.delete(e), n.size || (t._vtc = void 0));
}
function Yr(t) {
  requestAnimationFrame(() => {
    requestAnimationFrame(t);
  });
}
let Qu = 0;
function Jr(t, e, n, s) {
  const o = (t._endId = ++Qu),
    r = () => {
      o === t._endId && s();
    };
  if (n) return setTimeout(r, n);
  const { type: c, timeout: i, propCount: l } = Xu(t, e);
  if (!c) return s();
  const a = c + "end";
  let u = 0;
  const f = () => {
      t.removeEventListener(a, d), r();
    },
    d = (p) => {
      p.target === t && ++u >= l && f();
    };
  setTimeout(() => {
    u < l && f();
  }, i + 1),
    t.addEventListener(a, d);
}
function Xu(t, e) {
  const n = window.getComputedStyle(t),
    s = (x) => (n[x] || "").split(", "),
    o = s(mt + "Delay"),
    r = s(mt + "Duration"),
    c = Qr(o, r),
    i = s(un + "Delay"),
    l = s(un + "Duration"),
    a = Qr(i, l);
  let u = null,
    f = 0,
    d = 0;
  e === mt
    ? c > 0 && ((u = mt), (f = c), (d = r.length))
    : e === un
    ? a > 0 && ((u = un), (f = a), (d = l.length))
    : ((f = Math.max(c, a)),
      (u = f > 0 ? (c > a ? mt : un) : null),
      (d = u ? (u === mt ? r.length : l.length) : 0));
  const p = u === mt && /\b(transform|all)(,|$)/.test(n[mt + "Property"]);
  return { type: u, timeout: f, propCount: d, hasTransform: p };
}
function Qr(t, e) {
  for (; t.length < e.length; ) t = t.concat(t);
  return Math.max(...e.map((n, s) => Xr(n) + Xr(t[s])));
}
function Xr(t) {
  return Number(t.slice(0, -1).replace(",", ".")) * 1e3;
}
function ef() {
  return document.body.offsetHeight;
}
const ec = (t) => {
    const e = t.props["onUpdate:modelValue"] || !1;
    return ee(e) ? (n) => Wn(e, n) : e;
  },
  tf = {
    deep: !0,
    created(t, { value: e, modifiers: { number: n } }, s) {
      const o = ms(e);
      Qi(t, "change", () => {
        const r = Array.prototype.filter
          .call(t.options, (c) => c.selected)
          .map((c) => (n ? Ro(ls(c)) : ls(c)));
        t._assign(t.multiple ? (o ? new Set(r) : r) : r[0]);
      }),
        (t._assign = ec(s));
    },
    mounted(t, { value: e }) {
      tc(t, e);
    },
    beforeUpdate(t, e, n) {
      t._assign = ec(n);
    },
    updated(t, { value: e }) {
      tc(t, e);
    },
  };
function tc(t, e) {
  const n = t.multiple;
  if (!(n && !ee(e) && !ms(e))) {
    for (let s = 0, o = t.options.length; s < o; s++) {
      const r = t.options[s],
        c = ls(r);
      if (n) ee(e) ? (r.selected = Nl(e, c) > -1) : (r.selected = e.has(c));
      else if (_s(ls(r), e)) {
        t.selectedIndex !== s && (t.selectedIndex = s);
        return;
      }
    }
    !n && t.selectedIndex !== -1 && (t.selectedIndex = -1);
  }
}
function ls(t) {
  return "_value" in t ? t._value : t.value;
}
const nf = ["ctrl", "shift", "alt", "meta"],
  sf = {
    stop: (t) => t.stopPropagation(),
    prevent: (t) => t.preventDefault(),
    self: (t) => t.target !== t.currentTarget,
    ctrl: (t) => !t.ctrlKey,
    shift: (t) => !t.shiftKey,
    alt: (t) => !t.altKey,
    meta: (t) => !t.metaKey,
    left: (t) => "button" in t && t.button !== 0,
    middle: (t) => "button" in t && t.button !== 1,
    right: (t) => "button" in t && t.button !== 2,
    exact: (t, e) => nf.some((n) => t[`${n}Key`] && !e.includes(n)),
  },
  of =
    (t, e) =>
    (n, ...s) => {
      for (let o = 0; o < e.length; o++) {
        const r = sf[e[o]];
        if (r && r(n, e)) return;
      }
      return t(n, ...s);
    },
  rf = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace",
  },
  nc = (t, e) => (n) => {
    if (!("key" in n)) return;
    const s = Bt(n.key);
    if (e.some((o) => o === s || rf[o] === s)) return t(n);
  },
  sc = {
    beforeMount(t, { value: e }, { transition: n }) {
      (t._vod = t.style.display === "none" ? "" : t.style.display),
        n && e ? n.beforeEnter(t) : fn(t, e);
    },
    mounted(t, { value: e }, { transition: n }) {
      n && e && n.enter(t);
    },
    updated(t, { value: e, oldValue: n }, { transition: s }) {
      !e != !n &&
        (s
          ? e
            ? (s.beforeEnter(t), fn(t, !0), s.enter(t))
            : s.leave(t, () => {
                fn(t, !1);
              })
          : fn(t, e));
    },
    beforeUnmount(t, { value: e }) {
      fn(t, e);
    },
  };
function fn(t, e) {
  t.style.display = e ? t._vod : "none";
}
const cf = Se({ patchProp: Zu }, Lu);
let Qs,
  oc = !1;
function lf() {
  return (Qs = oc ? Qs : fu(cf)), (oc = !0), Qs;
}
const af = (...t) => {
  const e = lf().createApp(...t),
    { mount: n } = e;
  return (
    (e.mount = (s) => {
      const o = uf(s);
      if (o) return n(o, !0, o instanceof SVGElement);
    }),
    e
  );
};
function uf(t) {
  return we(t) ? document.querySelector(t) : t;
}
const H = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [s, o] of e) n[s] = o;
  return n;
};
const ff = JSON.parse(
    '{"lang":"en-US","title":"Documentation","description":"Just playing around.","base":"/","head":[],"appearance":true,"themeConfig":{"logo":{"light":"./API3-Active.png","dark":"./api3-inactive.png"},"siteTitle":"Documentation","socialLinks":[{"icon":"github","link":"https://github.com/api3dao/api3-docs"},{"icon":"discord","link":"https://discord.com/channels/758003776174030948/765618225144266793"}],"footer":{"message":"Released under the MIT License.","copyright":"Copyright \xA9 2019-present API3"},"sidebar":{"/explore/":[{"text":"","items":[{"text":"About the Journey","link":"/explore/"},{"text":"What are dAPIs?","link":"/explore/what-are-dapis.html"},{"text":"Airnode config.json","link":"/explore/what-is-airnode.html"},{"text":"Jobs","link":"/explore/jobs.html"}]}],"/guides/developers/":[{"text":"","collapsible":false,"items":[{"text":"Calling a dAPI","link":"/guides/developers/"}]}],"/guides/providers/":[{"text":"","collapsible":false,"items":[{"text":"ChainAPI Quick Start","link":"/guides/providers/"},{"text":"Deploy Airnode to AWS","link":"/guides/providers/deploy-aws.md"},{"text":"Deploy Airnode to GCP","link":"/guides/providers/deploy-gcp.md"},{"text":"Deploy Airnode to Container","link":"/guides/providers/deploy-container.md"}]}],"/reference/airnode/v0.8/":[{"text":"","collapsable":false,"items":[{"text":"ChangeLog","link":"/reference/airnode/v0.8/"}]}],"/reference/airnode/latest/":[{"text":"","collapsable":false,"items":[{"text":"ChangeLog","link":"/reference/airnode/latest/"}]},{"text":"AIRNODE EXPLAINED","collapsable":false,"items":[]},{"text":"DEPLOYMENT FILES","collapsable":false,"items":[]},{"text":"CLOUD PROVIDERS","collapsable":false,"items":[]}],"/reference/airnode/v0.6/":[{"text":"","collapsable":false,"items":[{"text":"ChangeLog","link":"/reference/airnode/v0.6/"}]}],"/reference/airnode/v0.5/":[{"text":"","collapsable":false,"items":[{"text":"ChangeLog","link":"/reference/airnode/v0.5/"}]}],"/reference/airnode/v0.4/":[{"text":"","collapsable":false,"items":[{"text":"ChangeLog","link":"/reference/airnode/v0.4/"}]}],"/reference/airnode/v0.3/":[{"text":"","collapsable":false,"items":[{"text":"ChangeLog","link":"/reference/airnode/v0.3/"}]}],"/reference/airnode/v0.2/":[{"text":"","collapsable":false,"items":[{"text":"ChangeLog","link":"/reference/airnode/v0.2/"}]}],"/reference/airnode/pre-alpha/":[{"text":"","collapsable":false,"items":[{"text":"ChangeLog","link":"/reference/airnode/pre-alpha/"}]}],"/reference/ois/v1.1/":[{"text":"","collapsable":false,"items":[{"text":"Understanding OIS","link":"/reference/ois/v1.1/"}]}],"/reference/ois/v1.0/":[{"text":"","collapsable":false,"items":[{"text":"Understanding OIS","link":"/reference/ois/v1.0/"}]}],"/reference/dapis/":[{"text":"","collapsable":false,"items":[{"text":"API3 Market","link":"/reference/dapis/introduction/api3-market.md"}]}]},"nav":[{"text":"Home","link":"/"},{"text":"Explore","link":"/explore/","activeMatch":"/explore/.*"},{"text":"Guides","items":[{"text":"dAPP Developers","link":"/guides/developers/"},{"text":"API Providers","link":"/guides/providers/"}]},{"text":"Reference","items":[{"text":"dAPIs","link":"/reference/dapis/introduction/api3-market.md"},{"text":"Airnode","link":"/reference/airnode/latest/"},{"text":"OIS","link":"/reference/ois/v1.1/"}]}],"algolia":{"appId":"x","apiKey":"x","indexName":"me"}},"locales":{},"langs":{},"scrollOffset":90,"cleanUrls":"disabled"}'
  ),
  Ps = /^[a-z]+:/i,
  rc = "vitepress-theme-appearance",
  Le = typeof window < "u",
  el = {
    relativePath: "",
    title: "404",
    description: "Not Found",
    headers: [],
    frontmatter: { sidebar: !1, layout: "page" },
    lastUpdated: 0,
  };
function df(t, e) {
  e.sort((n, s) => {
    const o = s.split("/").length - n.split("/").length;
    return o !== 0 ? o : s.length - n.length;
  });
  for (const n of e) if (t.startsWith(n)) return n;
}
function cc(t, e) {
  const n = df(e, Object.keys(t));
  return n ? t[n] : void 0;
}
function hf(t) {
  const { locales: e } = t.themeConfig || {},
    n = t.locales;
  return e && n
    ? Object.keys(e).reduce(
        (s, o) => ((s[o] = { label: e[o].label, lang: n[o].lang }), s),
        {}
      )
    : {};
}
function pf(t, e) {
  e = mf(t, e);
  const n = cc(t.locales || {}, e),
    s = cc(t.themeConfig.locales || {}, e);
  return Object.assign({}, t, n, {
    themeConfig: Object.assign({}, t.themeConfig, s, { locales: {} }),
    lang: (n || t).lang,
    locales: {},
    langs: hf(t),
  });
}
function tl(t, e) {
  var r;
  const n = e.title || t.title,
    s = (r = e.titleTemplate) != null ? r : t.titleTemplate;
  if (typeof s == "string" && s.includes(":title"))
    return s.replace(/:title/g, n);
  const o = _f(t.title, s);
  return `${n}${o}`;
}
function _f(t, e) {
  return e === !1
    ? ""
    : e === !0 || e === void 0
    ? ` | ${t}`
    : t === e
    ? ""
    : ` | ${e}`;
}
function mf(t, e) {
  if (!Le) return e;
  const n = t.base,
    s = n.endsWith("/") ? n.slice(0, -1) : n;
  return e.slice(s.length);
}
function gf(t, e) {
  const [n, s] = e;
  if (n !== "meta") return !1;
  const o = Object.entries(s)[0];
  return o == null ? !1 : t.some(([r, c]) => r === n && c[o[0]] === o[1]);
}
function vf(t, e) {
  return [...t.filter((n) => !gf(e, n)), ...e];
}
function bf(t, e) {
  return `${t}${e}`.replace(/\/+/g, "/");
}
function $n(t) {
  return Ps.test(t) ? t : bf(Xt.value.base, t);
}
function nl(t) {
  let e = t.replace(/\.html$/, "");
  if (((e = decodeURIComponent(e)), e.endsWith("/") && (e += "index"), Le)) {
    const n = "/";
    e = (e.slice(n.length).replace(/\//g, "_") || "index") + ".md";
    const s = __VP_HASH_MAP__[e.toLowerCase()];
    e = `${n}assets/${e}.${s}.js`;
  } else e = `./${e.slice(1).replace(/\//g, "_")}.md.js`;
  return e;
}
const sl = Symbol(),
  Xt = wa(ff);
function kf(t) {
  const e = de(() => pf(Xt.value, t.path));
  return {
    site: e,
    theme: de(() => e.value.themeConfig),
    page: de(() => t.data),
    frontmatter: de(() => t.data.frontmatter),
    lang: de(() => e.value.lang),
    localePath: de(() => {
      const { langs: n, lang: s } = e.value,
        o = Object.keys(n).find((r) => n[r].lang === s);
      return $n(o || "/");
    }),
    title: de(() => tl(e.value, t.data)),
    description: de(() => t.data.description || e.value.description),
  };
}
function ue() {
  const t = at(sl);
  if (!t) throw new Error("vitepress data not properly injected in app");
  return t;
}
const ol = Symbol(),
  ic = "http://a.com",
  yf = () => ({ path: "/", component: null, data: el });
function xf(t, e) {
  const n = ks(yf());
  function s(c = Le ? location.href : "/") {
    const i = new URL(c, ic);
    return (
      Xt.value.cleanUrls === "disabled" &&
        !i.pathname.endsWith("/") &&
        !i.pathname.endsWith(".html") &&
        ((i.pathname += ".html"), (c = i.pathname + i.search + i.hash)),
      Le &&
        (history.replaceState(
          { scrollPosition: window.scrollY },
          document.title
        ),
        history.pushState(null, "", c)),
      r(c)
    );
  }
  let o = null;
  async function r(c, i = 0, l = !1) {
    const a = new URL(c, ic),
      u = (o = a.pathname);
    try {
      let f = await t(u);
      if (o === u) {
        o = null;
        const { default: d, __pageData: p } = f;
        if (!d) throw new Error(`Invalid route component: ${d}`);
        (n.path = Le ? u : $n(u)),
          (n.component = pn(d)),
          (n.data = pn(p)),
          Le &&
            qn(() => {
              if (a.hash && !i) {
                let x = null;
                try {
                  x = document.querySelector(decodeURIComponent(a.hash));
                } catch (A) {
                  console.warn(A);
                }
                if (x) {
                  lc(x, a.hash);
                  return;
                }
              }
              window.scrollTo(0, i);
            });
      }
    } catch (f) {
      if (
        (!/fetch/.test(f.message) &&
          !/^\/404(\.html|\/)?$/.test(c) &&
          console.error(f),
        !l)
      )
        try {
          const d = await fetch(Xt.value.base + "hashmap.json");
          (window.__VP_HASH_MAP__ = await d.json()), await r(c, i, !0);
          return;
        } catch {}
      o === u &&
        ((o = null),
        (n.path = Le ? u : $n(u)),
        (n.component = e ? pn(e) : null),
        (n.data = el));
    }
  }
  return (
    Le &&
      (window.addEventListener(
        "click",
        (c) => {
          const i = c.target.closest("a");
          if (i) {
            const {
                href: l,
                origin: a,
                pathname: u,
                hash: f,
                search: d,
                target: p,
              } = i,
              x = window.location,
              A = u.match(/\.\w+$/);
            !c.ctrlKey &&
              !c.shiftKey &&
              !c.altKey &&
              !c.metaKey &&
              p !== "_blank" &&
              a === x.origin &&
              !(A && A[0] !== ".html") &&
              (c.preventDefault(),
              u === x.pathname && d === x.search
                ? f &&
                  f !== x.hash &&
                  (history.pushState(null, "", f),
                  window.dispatchEvent(new Event("hashchange")),
                  lc(i, f, i.classList.contains("header-anchor")))
                : s(l));
          }
        },
        { capture: !0 }
      ),
      window.addEventListener("popstate", (c) => {
        r(location.href, (c.state && c.state.scrollPosition) || 0);
      }),
      window.addEventListener("hashchange", (c) => {
        c.preventDefault();
      })),
    { route: n, go: s }
  );
}
function rl() {
  const t = at(ol);
  if (!t) throw new Error("useRouter() is called without provider.");
  return t;
}
function nt() {
  return rl().route;
}
function lc(t, e, n = !1) {
  let s = null;
  try {
    s = t.classList.contains("header-anchor")
      ? t
      : document.querySelector(decodeURIComponent(e));
  } catch (o) {
    console.warn(o);
  }
  if (s) {
    let o = Xt.value.scrollOffset;
    typeof o == "string" &&
      (o = document.querySelector(o).getBoundingClientRect().bottom + 24);
    const r = parseInt(window.getComputedStyle(s).paddingTop, 10),
      c = window.scrollY + s.getBoundingClientRect().top - o + r;
    !n || Math.abs(c - window.scrollY) > window.innerHeight
      ? window.scrollTo(0, c)
      : window.scrollTo({ left: 0, top: c, behavior: "smooth" });
  }
}
const wf = Y({
    name: "VitePressContent",
    setup() {
      const t = nt();
      return () =>
        is("div", { style: { position: "relative" } }, [
          t.component ? is(t.component) : null,
        ]);
    },
  }),
  cl = /#.*$/,
  Cf = /(index)?\.(md|html)$/,
  Af = typeof window < "u",
  Ef = Ae(Af ? location.hash : "");
function Sf(t) {
  return Ps.test(t);
}
function Df(t, e) {
  let n,
    s = !1;
  return () => {
    n && clearTimeout(n),
      s
        ? (n = setTimeout(t, e))
        : (t(),
          (s = !0),
          setTimeout(() => {
            s = !1;
          }, e));
  };
}
function sn(t, e, n = !1) {
  if (e === void 0) return !1;
  if (((t = uc(`/${t}`)), n)) return new RegExp(e).test(t);
  if (uc(e) !== t) return !1;
  const s = e.match(cl);
  return s ? Ef.value === s[0] : !0;
}
function ac(t) {
  return /^\//.test(t) ? t : `/${t}`;
}
function uc(t) {
  return decodeURI(t).replace(cl, "").replace(Cf, "");
}
function as(t) {
  if (Sf(t)) return t;
  const { site: e } = ue(),
    { pathname: n, search: s, hash: o } = new URL(t, "http://example.com"),
    r =
      n.endsWith("/") || n.endsWith(".html")
        ? t
        : `${n.replace(
            /(\.md)?$/,
            e.value.cleanUrls === "disabled" ? ".html" : ""
          )}${s}${o}`;
  return $n(r);
}
function il(t, e) {
  if (Array.isArray(t)) return t;
  e = ac(e);
  for (const n in t) if (e.startsWith(ac(n))) return t[n];
  return [];
}
function $f(t) {
  const e = [];
  function n(s) {
    for (const o of s)
      o.link && e.push({ ...o, link: o.link }), "items" in o && n(o.items);
  }
  for (const s of t) n(s.items);
  return e;
}
function st() {
  const t = nt(),
    { theme: e, frontmatter: n } = ue(),
    s = Ae(!1),
    o = de(() => {
      const u = e.value.sidebar,
        f = t.data.relativePath;
      return u ? il(u, f) : [];
    }),
    r = de(
      () =>
        n.value.sidebar !== !1 &&
        o.value.length > 0 &&
        n.value.layout !== "home"
    ),
    c = de(() => n.value.layout !== "home" && n.value.aside !== !1);
  function i() {
    s.value = !0;
  }
  function l() {
    s.value = !1;
  }
  function a() {
    s.value ? l() : i();
  }
  return {
    isOpen: s,
    sidebar: o,
    hasSidebar: r,
    hasAside: c,
    open: i,
    close: l,
    toggle: a,
  };
}
function Pf(t, e) {
  let n;
  An(() => {
    n = t.value ? document.activeElement : void 0;
  }),
    dt(() => {
      window.addEventListener("keyup", s);
    }),
    nn(() => {
      window.removeEventListener("keyup", s);
    });
  function s(o) {
    o.key === "Escape" && t.value && (e(), n == null || n.focus());
  }
}
const Tf = Y({
  __name: "VPSkipLink",
  setup(t) {
    const e = nt(),
      n = Ae();
    Ye(
      () => e.path,
      () => n.value.focus()
    );
    function s({ target: o }) {
      const r = document.querySelector(o.hash);
      if (r) {
        const c = () => {
          r.removeAttribute("tabindex"), r.removeEventListener("blur", c);
        };
        r.setAttribute("tabindex", "-1"),
          r.addEventListener("blur", c),
          r.focus(),
          window.scrollTo(0, 0);
      }
    }
    return (o, r) => (
      _(),
      b(
        te,
        null,
        [
          C(
            "span",
            { ref_key: "backToTop", ref: n, tabindex: "-1" },
            null,
            512
          ),
          C(
            "a",
            {
              href: "#VPContent",
              class: "VPSkipLink visually-hidden",
              onClick: s,
            },
            " Skip to content "
          ),
        ],
        64
      )
    );
  },
});
const qf = H(Tf, [["__scopeId", "data-v-151f2593"]]),
  Lf = { key: 0, class: "VPBackdrop" },
  Ff = Y({
    __name: "VPBackdrop",
    props: { show: { type: Boolean } },
    setup(t) {
      return (e, n) => (
        _(),
        re(
          $s,
          { name: "fade" },
          { default: j(() => [t.show ? (_(), b("div", Lf)) : Z("", !0)]), _: 1 }
        )
      );
    },
  });
const If = H(Ff, [["__scopeId", "data-v-0164f098"]]);
function Mf() {
  const t = Ae(!1);
  function e() {
    (t.value = !0), window.addEventListener("resize", o);
  }
  function n() {
    (t.value = !1), window.removeEventListener("resize", o);
  }
  function s() {
    t.value ? n() : e();
  }
  function o() {
    window.outerWidth >= 768 && n();
  }
  const r = nt();
  return (
    Ye(() => r.path, n),
    { isScreenOpen: t, openScreen: e, closeScreen: n, toggleScreen: s }
  );
}
const Vf = ["src"],
  Rf = { inheritAttrs: !1 },
  Nf = Y({
    ...Rf,
    __name: "VPImage",
    props: { image: null },
    setup(t) {
      return (e, n) => {
        const s = Ct("VPImage", !0);
        return t.image
          ? (_(),
            b(
              te,
              { key: 0 },
              [
                typeof t.image == "string" || "src" in t.image
                  ? (_(),
                    b(
                      "img",
                      Jn(
                        { key: 0, class: "VPImage" },
                        typeof t.image == "string"
                          ? e.$attrs
                          : { ...t.image, ...e.$attrs },
                        {
                          src: y($n)(
                            typeof t.image == "string" ? t.image : t.image.src
                          ),
                        }
                      ),
                      null,
                      16,
                      Vf
                    ))
                  : (_(),
                    b(
                      te,
                      { key: 1 },
                      [
                        M(
                          s,
                          Jn({ class: "dark", image: t.image.dark }, e.$attrs),
                          null,
                          16,
                          ["image"]
                        ),
                        M(
                          s,
                          Jn(
                            { class: "light", image: t.image.light },
                            e.$attrs
                          ),
                          null,
                          16,
                          ["image"]
                        ),
                      ],
                      64
                    )),
              ],
              64
            ))
          : Z("", !0);
      };
    },
  });
const ll = H(Nf, [["__scopeId", "data-v-e13a1912"]]),
  Bf = ["href"],
  Of = Y({
    __name: "VPNavBarTitle",
    setup(t) {
      const { site: e, theme: n } = ue(),
        { hasSidebar: s } = st();
      return (o, r) => (
        _(),
        b(
          "div",
          { class: _e(["VPNavBarTitle", { "has-sidebar": y(s) }]) },
          [
            C(
              "a",
              { class: "title", href: y(e).base },
              [
                B(o.$slots, "nav-bar-title-before", {}, void 0, !0),
                M(ll, { class: "logo", image: y(n).logo }, null, 8, ["image"]),
                y(n).siteTitle
                  ? (_(), b(te, { key: 0 }, [Ce(oe(y(n).siteTitle), 1)], 64))
                  : y(n).siteTitle === void 0
                  ? (_(), b(te, { key: 1 }, [Ce(oe(y(e).title), 1)], 64))
                  : Z("", !0),
                B(o.$slots, "nav-bar-title-after", {}, void 0, !0),
              ],
              8,
              Bf
            ),
          ],
          2
        )
      );
    },
  });
const zf = H(Of, [["__scopeId", "data-v-d5925166"]]),
  Hf = {},
  Uf = {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    height: "24px",
    viewBox: "0 0 24 24",
    width: "24px",
  },
  jf = C("path", { d: "M0 0h24v24H0V0z", fill: "none" }, null, -1),
  Gf = C(
    "path",
    { d: "M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z" },
    null,
    -1
  ),
  Kf = [jf, Gf];
function Zf(t, e) {
  return _(), b("svg", Uf, Kf);
}
const Wf = H(Hf, [["render", Zf]]),
  Yf = Y({
    __name: "VPLink",
    props: { href: null, noIcon: { type: Boolean } },
    setup(t) {
      const e = t,
        n = de(() => e.href && Ps.test(e.href));
      return (s, o) => (
        _(),
        re(
          Jo(t.href ? "a" : "span"),
          {
            class: _e(["VPLink", { link: t.href }]),
            href: t.href ? y(as)(t.href) : void 0,
            target: y(n) ? "_blank" : void 0,
            rel: y(n) ? "noreferrer" : void 0,
          },
          {
            default: j(() => [
              B(s.$slots, "default", {}, void 0, !0),
              y(n) && !t.noIcon
                ? (_(), re(Wf, { key: 0, class: "icon" }))
                : Z("", !0),
            ]),
            _: 3,
          },
          8,
          ["class", "href", "target", "rel"]
        )
      );
    },
  });
const wt = H(Yf, [["__scopeId", "data-v-3c355974"]]),
  Jf = Y({
    __name: "VPNavBarMenuLink",
    props: { item: null },
    setup(t) {
      const { page: e } = ue();
      return (n, s) => (
        _(),
        re(
          wt,
          {
            class: _e({
              VPNavBarMenuLink: !0,
              active: y(sn)(
                y(e).relativePath,
                t.item.activeMatch || t.item.link,
                !!t.item.activeMatch
              ),
            }),
            href: t.item.link,
            noIcon: !0,
          },
          { default: j(() => [Ce(oe(t.item.text), 1)]), _: 1 },
          8,
          ["class", "href"]
        )
      );
    },
  });
const Qf = H(Jf, [["__scopeId", "data-v-47a2263e"]]),
  nr = Ae();
let al = !1,
  Xs = 0;
function Xf(t) {
  const e = Ae(!1);
  if (typeof window < "u") {
    !al && ed(), Xs++;
    const n = Ye(nr, (s) => {
      var o, r, c;
      s === t.el.value || ((o = t.el.value) == null ? void 0 : o.contains(s))
        ? ((e.value = !0), (r = t.onFocus) == null || r.call(t))
        : ((e.value = !1), (c = t.onBlur) == null || c.call(t));
    });
    nn(() => {
      n(), Xs--, Xs || td();
    });
  }
  return Uo(e);
}
function ed() {
  document.addEventListener("focusin", ul),
    (al = !0),
    (nr.value = document.activeElement);
}
function td() {
  document.removeEventListener("focusin", ul);
}
function ul() {
  nr.value = document.activeElement;
}
const nd = {},
  sd = {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24",
  },
  od = C(
    "path",
    {
      d: "M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z",
    },
    null,
    -1
  ),
  rd = [od];
function cd(t, e) {
  return _(), b("svg", sd, rd);
}
const fl = H(nd, [["render", cd]]),
  id = {},
  ld = {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24",
  },
  ad = C("circle", { cx: "12", cy: "12", r: "2" }, null, -1),
  ud = C("circle", { cx: "19", cy: "12", r: "2" }, null, -1),
  fd = C("circle", { cx: "5", cy: "12", r: "2" }, null, -1),
  dd = [ad, ud, fd];
function hd(t, e) {
  return _(), b("svg", ld, dd);
}
const pd = H(id, [["render", hd]]),
  _d = { class: "VPMenuLink" },
  md = Y({
    __name: "VPMenuLink",
    props: { item: null },
    setup(t) {
      const { page: e } = ue();
      return (n, s) => (
        _(),
        b("div", _d, [
          M(
            wt,
            {
              class: _e({
                active: y(sn)(
                  y(e).relativePath,
                  t.item.activeMatch || t.item.link
                ),
              }),
              href: t.item.link,
            },
            { default: j(() => [Ce(oe(t.item.text), 1)]), _: 1 },
            8,
            ["class", "href"]
          ),
        ])
      );
    },
  });
const Ts = H(md, [["__scopeId", "data-v-e8e0fb1d"]]),
  gd = { class: "VPMenuGroup" },
  vd = { key: 0, class: "title" },
  bd = Y({
    __name: "VPMenuGroup",
    props: { text: null, items: null },
    setup(t) {
      return (e, n) => (
        _(),
        b("div", gd, [
          t.text ? (_(), b("p", vd, oe(t.text), 1)) : Z("", !0),
          (_(!0),
          b(
            te,
            null,
            xe(
              t.items,
              (s) => (
                _(),
                b(
                  te,
                  null,
                  [
                    "link" in s
                      ? (_(), re(Ts, { key: 0, item: s }, null, 8, ["item"]))
                      : Z("", !0),
                  ],
                  64
                )
              )
            ),
            256
          )),
        ])
      );
    },
  });
const kd = H(bd, [["__scopeId", "data-v-9ca52130"]]),
  yd = { class: "VPMenu" },
  xd = { key: 0, class: "items" },
  wd = Y({
    __name: "VPMenu",
    props: { items: null },
    setup(t) {
      return (e, n) => (
        _(),
        b("div", yd, [
          t.items
            ? (_(),
              b("div", xd, [
                (_(!0),
                b(
                  te,
                  null,
                  xe(
                    t.items,
                    (s) => (
                      _(),
                      b(
                        te,
                        { key: s.text },
                        [
                          "link" in s
                            ? (_(),
                              re(Ts, { key: 0, item: s }, null, 8, ["item"]))
                            : (_(),
                              re(
                                kd,
                                { key: 1, text: s.text, items: s.items },
                                null,
                                8,
                                ["text", "items"]
                              )),
                        ],
                        64
                      )
                    )
                  ),
                  128
                )),
              ]))
            : Z("", !0),
          B(e.$slots, "default", {}, void 0, !0),
        ])
      );
    },
  });
const Cd = H(wd, [["__scopeId", "data-v-1c5d0cfc"]]),
  Ad = ["aria-expanded", "aria-label"],
  Ed = { key: 0, class: "text" },
  Sd = { class: "menu" },
  Dd = Y({
    __name: "VPFlyout",
    props: { icon: null, button: null, label: null, items: null },
    setup(t) {
      const e = Ae(!1),
        n = Ae();
      Xf({ el: n, onBlur: s });
      function s() {
        e.value = !1;
      }
      return (o, r) => (
        _(),
        b(
          "div",
          {
            class: "VPFlyout",
            ref_key: "el",
            ref: n,
            onMouseenter: r[1] || (r[1] = (c) => (e.value = !0)),
            onMouseleave: r[2] || (r[2] = (c) => (e.value = !1)),
          },
          [
            C(
              "button",
              {
                type: "button",
                class: "button",
                "aria-haspopup": "true",
                "aria-expanded": e.value,
                "aria-label": t.label,
                onClick: r[0] || (r[0] = (c) => (e.value = !e.value)),
              },
              [
                t.button || t.icon
                  ? (_(),
                    b("span", Ed, [
                      t.icon
                        ? (_(),
                          re(Jo(t.icon), { key: 0, class: "option-icon" }))
                        : Z("", !0),
                      Ce(" " + oe(t.button) + " ", 1),
                      M(fl, { class: "text-icon" }),
                    ]))
                  : (_(), re(pd, { key: 1, class: "icon" })),
              ],
              8,
              Ad
            ),
            C("div", Sd, [
              M(
                Cd,
                { items: t.items },
                {
                  default: j(() => [B(o.$slots, "default", {}, void 0, !0)]),
                  _: 3,
                },
                8,
                ["items"]
              ),
            ]),
          ],
          544
        )
      );
    },
  });
const sr = H(Dd, [["__scopeId", "data-v-6ffb57d3"]]),
  $d = Y({
    __name: "VPNavBarMenuGroup",
    props: { item: null },
    setup(t) {
      const { page: e } = ue();
      return (n, s) => (
        _(),
        re(
          sr,
          {
            class: _e({
              VPNavBarMenuGroup: !0,
              active: y(sn)(
                y(e).relativePath,
                t.item.activeMatch,
                !!t.item.activeMatch
              ),
            }),
            button: t.item.text,
            items: t.item.items,
          },
          null,
          8,
          ["class", "button", "items"]
        )
      );
    },
  }),
  Pd = (t) => (Ne("data-v-f83db6ba"), (t = t()), Be(), t),
  Td = {
    key: 0,
    "aria-labelledby": "main-nav-aria-label",
    class: "VPNavBarMenu",
  },
  qd = Pd(() =>
    C(
      "span",
      { id: "main-nav-aria-label", class: "visually-hidden" },
      "Main Navigation",
      -1
    )
  ),
  Ld = Y({
    __name: "VPNavBarMenu",
    setup(t) {
      const { theme: e } = ue();
      return (n, s) =>
        y(e).nav
          ? (_(),
            b("nav", Td, [
              qd,
              (_(!0),
              b(
                te,
                null,
                xe(
                  y(e).nav,
                  (o) => (
                    _(),
                    b(
                      te,
                      { key: o.text },
                      [
                        "link" in o
                          ? (_(),
                            re(Qf, { key: 0, item: o }, null, 8, ["item"]))
                          : (_(),
                            re($d, { key: 1, item: o }, null, 8, ["item"])),
                      ],
                      64
                    )
                  )
                ),
                128
              )),
            ]))
          : Z("", !0);
    },
  });
const Fd = H(Ld, [["__scopeId", "data-v-f83db6ba"]]),
  Id = {},
  Md = {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24",
  },
  Vd = C("path", { d: "M0 0h24v24H0z", fill: "none" }, null, -1),
  Rd = C(
    "path",
    {
      d: " M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z ",
      class: "css-c4d79v",
    },
    null,
    -1
  ),
  Nd = [Vd, Rd];
function Bd(t, e) {
  return _(), b("svg", Md, Nd);
}
const dl = H(Id, [["render", Bd]]),
  Od = { class: "items" },
  zd = { class: "title" },
  Hd = Y({
    __name: "VPNavBarTranslations",
    setup(t) {
      const { theme: e } = ue();
      return (n, s) =>
        y(e).localeLinks
          ? (_(),
            re(
              sr,
              { key: 0, class: "VPNavBarTranslations", icon: dl },
              {
                default: j(() => [
                  C("div", Od, [
                    C("p", zd, oe(y(e).localeLinks.text), 1),
                    (_(!0),
                    b(
                      te,
                      null,
                      xe(
                        y(e).localeLinks.items,
                        (o) => (
                          _(),
                          re(Ts, { key: o.link, item: o }, null, 8, ["item"])
                        )
                      ),
                      128
                    )),
                  ]),
                ]),
                _: 1,
              }
            ))
          : Z("", !0);
    },
  });
const Ud = H(Hd, [["__scopeId", "data-v-db824e91"]]);
const jd = {},
  Gd = { class: "VPSwitch", type: "button", role: "switch" },
  Kd = { class: "check" },
  Zd = { key: 0, class: "icon" };
function Wd(t, e) {
  return (
    _(),
    b("button", Gd, [
      C("span", Kd, [
        t.$slots.default
          ? (_(), b("span", Zd, [B(t.$slots, "default", {}, void 0, !0)]))
          : Z("", !0),
      ]),
    ])
  );
}
const Yd = H(jd, [
    ["render", Wd],
    ["__scopeId", "data-v-086e8519"],
  ]),
  Jd = {},
  Qd = {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24",
  },
  Xd = yu(
    '<path d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path><path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path><path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path><path d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path><path d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path><path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path><path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path><path d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path><path d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path>',
    9
  ),
  eh = [Xd];
function th(t, e) {
  return _(), b("svg", Qd, eh);
}
const nh = H(Jd, [["render", th]]),
  sh = {},
  oh = {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24",
  },
  rh = C(
    "path",
    {
      d: "M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z",
    },
    null,
    -1
  ),
  ch = [rh];
function ih(t, e) {
  return _(), b("svg", oh, ch);
}
const lh = H(sh, [["render", ih]]),
  ah = Y({
    __name: "VPSwitchAppearance",
    setup(t) {
      const e = typeof localStorage < "u" ? n() : () => {};
      function n() {
        const s = window.matchMedia("(prefers-color-scheme: dark)"),
          o = document.documentElement.classList;
        let r = localStorage.getItem(rc) || "auto",
          c = r === "auto" ? s.matches : r === "dark";
        s.onchange = (a) => {
          r === "auto" && l((c = a.matches));
        };
        function i() {
          l((c = !c)),
            (r = c
              ? s.matches
                ? "auto"
                : "dark"
              : s.matches
              ? "light"
              : "auto"),
            localStorage.setItem(rc, r);
        }
        function l(a) {
          o[a ? "add" : "remove"]("dark");
        }
        return i;
      }
      return (s, o) => (
        _(),
        re(
          Yd,
          {
            class: "VPSwitchAppearance",
            "aria-label": "toggle dark mode",
            onClick: y(e),
          },
          {
            default: j(() => [
              M(nh, { class: "sun" }),
              M(lh, { class: "moon" }),
            ]),
            _: 1,
          },
          8,
          ["onClick"]
        )
      );
    },
  });
const or = H(ah, [["__scopeId", "data-v-968780f1"]]),
  uh = { key: 0, class: "VPNavBarAppearance" },
  fh = Y({
    __name: "VPNavBarAppearance",
    setup(t) {
      const { site: e } = ue();
      return (n, s) =>
        y(e).appearance ? (_(), b("div", uh, [M(or)])) : Z("", !0);
    },
  });
const dh = H(fh, [["__scopeId", "data-v-a3e7452b"]]),
  hh = {
    discord:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Discord</title><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>',
    facebook:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
    github:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
    instagram:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>',
    linkedin:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
    slack:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Slack</title><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/></svg>',
    twitter:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>',
    youtube:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',
  },
  ph = ["href", "innerHTML"],
  _h = Y({
    __name: "VPSocialLink",
    props: { icon: null, link: null },
    setup(t) {
      const e = t,
        n = de(() => (typeof e.icon == "object" ? e.icon.svg : hh[e.icon]));
      return (s, o) => (
        _(),
        b(
          "a",
          {
            class: "VPSocialLink",
            href: t.link,
            target: "_blank",
            rel: "noopener",
            innerHTML: y(n),
          },
          null,
          8,
          ph
        )
      );
    },
  });
const mh = H(_h, [["__scopeId", "data-v-e57698f6"]]),
  gh = { class: "VPSocialLinks" },
  vh = Y({
    __name: "VPSocialLinks",
    props: { links: null },
    setup(t) {
      return (e, n) => (
        _(),
        b("div", gh, [
          (_(!0),
          b(
            te,
            null,
            xe(
              t.links,
              ({ link: s, icon: o }) => (
                _(),
                re(mh, { key: s, icon: o, link: s }, null, 8, ["icon", "link"])
              )
            ),
            128
          )),
        ])
      );
    },
  });
const qs = H(vh, [["__scopeId", "data-v-f6988cfb"]]),
  bh = Y({
    __name: "VPNavBarSocialLinks",
    setup(t) {
      const { theme: e } = ue();
      return (n, s) =>
        y(e).socialLinks
          ? (_(),
            re(
              qs,
              { key: 0, class: "VPNavBarSocialLinks", links: y(e).socialLinks },
              null,
              8,
              ["links"]
            ))
          : Z("", !0);
    },
  });
const kh = H(bh, [["__scopeId", "data-v-738bef5a"]]),
  yh = (t) => (Ne("data-v-e89b88d7"), (t = t()), Be(), t),
  xh = { key: 0, class: "group" },
  wh = { class: "trans-title" },
  Ch = { key: 1, class: "group" },
  Ah = { class: "item appearance" },
  Eh = yh(() => C("p", { class: "label" }, "Appearance", -1)),
  Sh = { class: "appearance-action" },
  Dh = { key: 2, class: "group" },
  $h = { class: "item social-links" },
  Ph = Y({
    __name: "VPNavBarExtra",
    setup(t) {
      const { site: e, theme: n } = ue();
      return (s, o) => (
        _(),
        re(
          sr,
          { class: "VPNavBarExtra", label: "extra navigation" },
          {
            default: j(() => [
              y(n).localeLinks
                ? (_(),
                  b("div", xh, [
                    C("p", wh, oe(y(n).localeLinks.text), 1),
                    (_(!0),
                    b(
                      te,
                      null,
                      xe(
                        y(n).localeLinks.items,
                        (r) => (
                          _(),
                          re(Ts, { key: r.link, item: r }, null, 8, ["item"])
                        )
                      ),
                      128
                    )),
                  ]))
                : Z("", !0),
              y(e).appearance
                ? (_(),
                  b("div", Ch, [C("div", Ah, [Eh, C("div", Sh, [M(or)])])]))
                : Z("", !0),
              y(n).socialLinks
                ? (_(),
                  b("div", Dh, [
                    C("div", $h, [
                      M(
                        qs,
                        { class: "social-links-list", links: y(n).socialLinks },
                        null,
                        8,
                        ["links"]
                      ),
                    ]),
                  ]))
                : Z("", !0),
            ]),
            _: 1,
          }
        )
      );
    },
  });
const Th = H(Ph, [["__scopeId", "data-v-e89b88d7"]]),
  qh = (t) => (Ne("data-v-e5dd9c1c"), (t = t()), Be(), t),
  Lh = ["aria-expanded"],
  Fh = qh(() =>
    C(
      "span",
      { class: "container" },
      [
        C("span", { class: "top" }),
        C("span", { class: "middle" }),
        C("span", { class: "bottom" }),
      ],
      -1
    )
  ),
  Ih = [Fh],
  Mh = Y({
    __name: "VPNavBarHamburger",
    props: { active: { type: Boolean } },
    emits: ["click"],
    setup(t) {
      return (e, n) => (
        _(),
        b(
          "button",
          {
            type: "button",
            class: _e(["VPNavBarHamburger", { active: t.active }]),
            "aria-label": "mobile navigation",
            "aria-expanded": t.active,
            "aria-controls": "VPNavScreen",
            onClick: n[0] || (n[0] = (s) => e.$emit("click")),
          },
          Ih,
          10,
          Lh
        )
      );
    },
  });
const Vh = H(Mh, [["__scopeId", "data-v-e5dd9c1c"]]),
  Rh = { class: "container" },
  Nh = { class: "content" },
  Bh = Y({
    __name: "VPNavBar",
    props: { isScreenOpen: { type: Boolean } },
    emits: ["toggle-screen"],
    setup(t) {
      const { hasSidebar: e } = st();
      return (n, s) => {
        const o = Ct("SearchBtn");
        return (
          _(),
          b(
            "div",
            {
              class: _e(["VPNavBar", { "has-sidebar": y(e) }]),
              style: { "user-select": "none" },
            },
            [
              C("div", Rh, [
                M(zf, null, {
                  "nav-bar-title-before": j(() => [
                    B(n.$slots, "nav-bar-title-before", {}, void 0, !0),
                  ]),
                  "nav-bar-title-after": j(() => [
                    B(n.$slots, "nav-bar-title-after", {}, void 0, !0),
                  ]),
                  _: 3,
                }),
                C("div", Nh, [
                  B(n.$slots, "nav-bar-content-before", {}, void 0, !0),
                  M(Fd, { class: "menu" }),
                  M(o),
                  M(Ud, { class: "translations" }),
                  M(dh, { class: "appearance" }),
                  M(kh, { class: "social-links" }),
                  M(Th, { class: "extra" }),
                  B(n.$slots, "nav-bar-content-after", {}, void 0, !0),
                  M(
                    Vh,
                    {
                      class: "hamburger",
                      active: t.isScreenOpen,
                      onClick: s[0] || (s[0] = (r) => n.$emit("toggle-screen")),
                    },
                    null,
                    8,
                    ["active"]
                  ),
                ]),
              ]),
            ],
            2
          )
        );
      };
    },
  });
const Oh = H(Bh, [["__scopeId", "data-v-be561c2c"]]);
function zh(t) {
  if (Array.isArray(t)) {
    for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
    return n;
  } else return Array.from(t);
}
var rr = !1;
if (typeof window < "u") {
  var fc = {
    get passive() {
      rr = !0;
    },
  };
  window.addEventListener("testPassive", null, fc),
    window.removeEventListener("testPassive", null, fc);
}
var us =
    typeof window < "u" &&
    window.navigator &&
    window.navigator.platform &&
    (/iP(ad|hone|od)/.test(window.navigator.platform) ||
      (window.navigator.platform === "MacIntel" &&
        window.navigator.maxTouchPoints > 1)),
  Yt = [],
  fs = !1,
  cr = -1,
  vn = void 0,
  Lt = void 0,
  bn = void 0,
  hl = function (e) {
    return Yt.some(function (n) {
      return !!(n.options.allowTouchMove && n.options.allowTouchMove(e));
    });
  },
  ds = function (e) {
    var n = e || window.event;
    return hl(n.target) || n.touches.length > 1
      ? !0
      : (n.preventDefault && n.preventDefault(), !1);
  },
  Hh = function (e) {
    if (bn === void 0) {
      var n = !!e && e.reserveScrollBarGap === !0,
        s = window.innerWidth - document.documentElement.clientWidth;
      if (n && s > 0) {
        var o = parseInt(
          window
            .getComputedStyle(document.body)
            .getPropertyValue("padding-right"),
          10
        );
        (bn = document.body.style.paddingRight),
          (document.body.style.paddingRight = o + s + "px");
      }
    }
    vn === void 0 &&
      ((vn = document.body.style.overflow),
      (document.body.style.overflow = "hidden"));
  },
  Uh = function () {
    bn !== void 0 && ((document.body.style.paddingRight = bn), (bn = void 0)),
      vn !== void 0 && ((document.body.style.overflow = vn), (vn = void 0));
  },
  jh = function () {
    return window.requestAnimationFrame(function () {
      if (Lt === void 0) {
        Lt = {
          position: document.body.style.position,
          top: document.body.style.top,
          left: document.body.style.left,
        };
        var e = window,
          n = e.scrollY,
          s = e.scrollX,
          o = e.innerHeight;
        (document.body.style.position = "fixed"),
          (document.body.style.top = -n),
          (document.body.style.left = -s),
          setTimeout(function () {
            return window.requestAnimationFrame(function () {
              var r = o - window.innerHeight;
              r && n >= o && (document.body.style.top = -(n + r));
            });
          }, 300);
      }
    });
  },
  Gh = function () {
    if (Lt !== void 0) {
      var e = -parseInt(document.body.style.top, 10),
        n = -parseInt(document.body.style.left, 10);
      (document.body.style.position = Lt.position),
        (document.body.style.top = Lt.top),
        (document.body.style.left = Lt.left),
        window.scrollTo(n, e),
        (Lt = void 0);
    }
  },
  Kh = function (e) {
    return e ? e.scrollHeight - e.scrollTop <= e.clientHeight : !1;
  },
  Zh = function (e, n) {
    var s = e.targetTouches[0].clientY - cr;
    return hl(e.target)
      ? !1
      : (n && n.scrollTop === 0 && s > 0) || (Kh(n) && s < 0)
      ? ds(e)
      : (e.stopPropagation(), !0);
  },
  Wh = function (e, n) {
    if (!e) {
      console.error(
        "disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices."
      );
      return;
    }
    if (
      !Yt.some(function (o) {
        return o.targetElement === e;
      })
    ) {
      var s = { targetElement: e, options: n || {} };
      (Yt = [].concat(zh(Yt), [s])),
        us ? jh() : Hh(n),
        us &&
          ((e.ontouchstart = function (o) {
            o.targetTouches.length === 1 && (cr = o.targetTouches[0].clientY);
          }),
          (e.ontouchmove = function (o) {
            o.targetTouches.length === 1 && Zh(o, e);
          }),
          fs ||
            (document.addEventListener(
              "touchmove",
              ds,
              rr ? { passive: !1 } : void 0
            ),
            (fs = !0)));
    }
  },
  Yh = function () {
    us &&
      (Yt.forEach(function (e) {
        (e.targetElement.ontouchstart = null),
          (e.targetElement.ontouchmove = null);
      }),
      fs &&
        (document.removeEventListener(
          "touchmove",
          ds,
          rr ? { passive: !1 } : void 0
        ),
        (fs = !1)),
      (cr = -1)),
      us ? Gh() : Uh(),
      (Yt = []);
  };
const Jh = Y({
  __name: "VPNavScreenMenuLink",
  props: { text: null, link: null },
  setup(t) {
    const e = at("close-screen");
    return (n, s) => (
      _(),
      re(
        wt,
        { class: "VPNavScreenMenuLink", href: t.link, onClick: y(e) },
        { default: j(() => [Ce(oe(t.text), 1)]), _: 1 },
        8,
        ["href", "onClick"]
      )
    );
  },
});
const Qh = H(Jh, [["__scopeId", "data-v-b7098508"]]),
  Xh = {},
  ep = {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24",
  },
  tp = C(
    "path",
    {
      d: "M18.9,10.9h-6v-6c0-0.6-0.4-1-1-1s-1,0.4-1,1v6h-6c-0.6,0-1,0.4-1,1s0.4,1,1,1h6v6c0,0.6,0.4,1,1,1s1-0.4,1-1v-6h6c0.6,0,1-0.4,1-1S19.5,10.9,18.9,10.9z",
    },
    null,
    -1
  ),
  np = [tp];
function sp(t, e) {
  return _(), b("svg", ep, np);
}
const op = H(Xh, [["render", sp]]),
  rp = Y({
    __name: "VPNavScreenMenuGroupLink",
    props: { text: null, link: null },
    setup(t) {
      const e = at("close-screen");
      return (n, s) => (
        _(),
        re(
          wt,
          { class: "VPNavScreenMenuGroupLink", href: t.link, onClick: y(e) },
          { default: j(() => [Ce(oe(t.text), 1)]), _: 1 },
          8,
          ["href", "onClick"]
        )
      );
    },
  });
const pl = H(rp, [["__scopeId", "data-v-7f173864"]]),
  cp = { class: "VPNavScreenMenuGroupSection" },
  ip = { key: 0, class: "title" },
  lp = Y({
    __name: "VPNavScreenMenuGroupSection",
    props: { text: null, items: null },
    setup(t) {
      return (e, n) => (
        _(),
        b("div", cp, [
          t.text ? (_(), b("p", ip, oe(t.text), 1)) : Z("", !0),
          (_(!0),
          b(
            te,
            null,
            xe(
              t.items,
              (s) => (
                _(),
                re(pl, { key: s.text, text: s.text, link: s.link }, null, 8, [
                  "text",
                  "link",
                ])
              )
            ),
            128
          )),
        ])
      );
    },
  });
const ap = H(lp, [["__scopeId", "data-v-7478538b"]]),
  up = ["aria-controls", "aria-expanded"],
  fp = { class: "button-text" },
  dp = ["id"],
  hp = { key: 1, class: "group" },
  pp = Y({
    __name: "VPNavScreenMenuGroup",
    props: { text: null, items: null },
    setup(t) {
      const e = t,
        n = Ae(!1),
        s = de(
          () => `NavScreenGroup-${e.text.replace(" ", "-").toLowerCase()}`
        );
      function o() {
        n.value = !n.value;
      }
      return (r, c) => (
        _(),
        b(
          "div",
          { class: _e(["VPNavScreenMenuGroup", { open: n.value }]) },
          [
            C(
              "button",
              {
                class: "button",
                "aria-controls": y(s),
                "aria-expanded": n.value,
                onClick: o,
              },
              [C("span", fp, oe(t.text), 1), M(op, { class: "button-icon" })],
              8,
              up
            ),
            C(
              "div",
              { id: y(s), class: "items" },
              [
                (_(!0),
                b(
                  te,
                  null,
                  xe(
                    t.items,
                    (i) => (
                      _(),
                      b(
                        te,
                        { key: i.text },
                        [
                          "link" in i
                            ? (_(),
                              b("div", { key: i.text, class: "item" }, [
                                M(pl, { text: i.text, link: i.link }, null, 8, [
                                  "text",
                                  "link",
                                ]),
                              ]))
                            : (_(),
                              b("div", hp, [
                                M(
                                  ap,
                                  { text: i.text, items: i.items },
                                  null,
                                  8,
                                  ["text", "items"]
                                ),
                              ])),
                        ],
                        64
                      )
                    )
                  ),
                  128
                )),
              ],
              8,
              dp
            ),
          ],
          2
        )
      );
    },
  });
const _p = H(pp, [["__scopeId", "data-v-5bc84358"]]),
  mp = { key: 0, class: "VPNavScreenMenu" },
  gp = Y({
    __name: "VPNavScreenMenu",
    setup(t) {
      const { theme: e } = ue();
      return (n, s) =>
        y(e).nav
          ? (_(),
            b("nav", mp, [
              (_(!0),
              b(
                te,
                null,
                xe(
                  y(e).nav,
                  (o) => (
                    _(),
                    b(
                      te,
                      { key: o.text },
                      [
                        "link" in o
                          ? (_(),
                            re(
                              Qh,
                              { key: 0, text: o.text, link: o.link },
                              null,
                              8,
                              ["text", "link"]
                            ))
                          : (_(),
                            re(
                              _p,
                              { key: 1, text: o.text || "", items: o.items },
                              null,
                              8,
                              ["text", "items"]
                            )),
                      ],
                      64
                    )
                  )
                ),
                128
              )),
            ]))
          : Z("", !0);
    },
  }),
  vp = (t) => (Ne("data-v-7bc19822"), (t = t()), Be(), t),
  bp = { key: 0, class: "VPNavScreenAppearance" },
  kp = vp(() => C("p", { class: "text" }, "Appearance", -1)),
  yp = Y({
    __name: "VPNavScreenAppearance",
    setup(t) {
      const { site: e } = ue();
      return (n, s) =>
        y(e).appearance ? (_(), b("div", bp, [kp, M(or)])) : Z("", !0);
    },
  });
const xp = H(yp, [["__scopeId", "data-v-7bc19822"]]),
  wp = { class: "list" },
  Cp = ["href"],
  Ap = Y({
    __name: "VPNavScreenTranslations",
    setup(t) {
      const { theme: e } = ue(),
        n = Ae(!1);
      function s() {
        n.value = !n.value;
      }
      return (o, r) =>
        y(e).localeLinks
          ? (_(),
            b(
              "div",
              {
                key: 0,
                class: _e(["VPNavScreenTranslations", { open: n.value }]),
              },
              [
                C("button", { class: "title", onClick: s }, [
                  M(dl, { class: "icon lang" }),
                  Ce(" " + oe(y(e).localeLinks.text) + " ", 1),
                  M(fl, { class: "icon chevron" }),
                ]),
                C("ul", wp, [
                  (_(!0),
                  b(
                    te,
                    null,
                    xe(
                      y(e).localeLinks.items,
                      (c) => (
                        _(),
                        b("li", { key: c.link, class: "item" }, [
                          C(
                            "a",
                            { class: "link", href: c.link },
                            oe(c.text),
                            9,
                            Cp
                          ),
                        ])
                      )
                    ),
                    128
                  )),
                ]),
              ],
              2
            ))
          : Z("", !0);
    },
  });
const Ep = H(Ap, [["__scopeId", "data-v-6bfcad30"]]),
  Sp = Y({
    __name: "VPNavScreenSocialLinks",
    setup(t) {
      const { theme: e } = ue();
      return (n, s) =>
        y(e).socialLinks
          ? (_(),
            re(
              qs,
              {
                key: 0,
                class: "VPNavScreenSocialLinks",
                links: y(e).socialLinks,
              },
              null,
              8,
              ["links"]
            ))
          : Z("", !0);
    },
  }),
  Dp = { class: "container" },
  $p = Y({
    __name: "VPNavScreen",
    props: { open: { type: Boolean } },
    setup(t) {
      const e = Ae(null);
      function n() {
        Wh(e.value, { reserveScrollBarGap: !0 });
      }
      function s() {
        Yh();
      }
      return (o, r) => (
        _(),
        re(
          $s,
          { name: "fade", onEnter: n, onAfterLeave: s },
          {
            default: j(() => [
              t.open
                ? (_(),
                  b(
                    "div",
                    { key: 0, class: "VPNavScreen", ref_key: "screen", ref: e },
                    [
                      C("div", Dp, [
                        B(
                          o.$slots,
                          "nav-screen-content-before",
                          {},
                          void 0,
                          !0
                        ),
                        M(gp, { class: "menu" }),
                        M(Ep, { class: "translations" }),
                        M(xp, { class: "appearance" }),
                        M(Sp, { class: "social-links" }),
                        B(o.$slots, "nav-screen-content-after", {}, void 0, !0),
                      ]),
                    ],
                    512
                  ))
                : Z("", !0),
            ]),
            _: 3,
          }
        )
      );
    },
  });
const Pp = H($p, [["__scopeId", "data-v-5486b9d0"]]),
  Tp = Y({
    __name: "VPNav",
    setup(t) {
      const { isScreenOpen: e, closeScreen: n, toggleScreen: s } = Mf(),
        { hasSidebar: o } = st();
      return (
        Wo("close-screen", n),
        (r, c) => (
          _(),
          b(
            "header",
            { class: _e(["VPNav", { "no-sidebar": !y(o) }]) },
            [
              M(
                Oh,
                { "is-screen-open": y(e), onToggleScreen: y(s) },
                {
                  "nav-bar-title-before": j(() => [
                    B(r.$slots, "nav-bar-title-before", {}, void 0, !0),
                  ]),
                  "nav-bar-title-after": j(() => [
                    B(r.$slots, "nav-bar-title-after", {}, void 0, !0),
                  ]),
                  "nav-bar-content-before": j(() => [
                    B(r.$slots, "nav-bar-content-before", {}, void 0, !0),
                  ]),
                  "nav-bar-content-after": j(() => [
                    B(r.$slots, "nav-bar-content-after", {}, void 0, !0),
                  ]),
                  _: 3,
                },
                8,
                ["is-screen-open", "onToggleScreen"]
              ),
              M(
                Pp,
                { open: y(e) },
                {
                  "nav-screen-content-before": j(() => [
                    B(r.$slots, "nav-screen-content-before", {}, void 0, !0),
                  ]),
                  "nav-screen-content-after": j(() => [
                    B(r.$slots, "nav-screen-content-after", {}, void 0, !0),
                  ]),
                  _: 3,
                },
                8,
                ["open"]
              ),
            ],
            2
          )
        )
      );
    },
  });
const qp = H(Tp, [["__scopeId", "data-v-a71a30f1"]]),
  Lp = {},
  Fp = {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24",
  },
  Ip = C(
    "path",
    {
      d: "M17,11H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,11,17,11z",
    },
    null,
    -1
  ),
  Mp = C(
    "path",
    { d: "M21,7H3C2.4,7,2,6.6,2,6s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,7,21,7z" },
    null,
    -1
  ),
  Vp = C(
    "path",
    {
      d: "M21,15H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,15,21,15z",
    },
    null,
    -1
  ),
  Rp = C(
    "path",
    {
      d: "M17,19H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,19,17,19z",
    },
    null,
    -1
  ),
  Np = [Ip, Mp, Vp, Rp];
function Bp(t, e) {
  return _(), b("svg", Fp, Np);
}
const Op = H(Lp, [["render", Bp]]),
  zp = (t) => (Ne("data-v-aac27d5e"), (t = t()), Be(), t),
  Hp = { key: 0, class: "VPLocalNav" },
  Up = ["aria-expanded"],
  jp = zp(() => C("span", { class: "menu-text" }, "Menu", -1)),
  Gp = Y({
    __name: "VPLocalNav",
    props: { open: { type: Boolean } },
    emits: ["open-menu"],
    setup(t) {
      const { hasSidebar: e } = st();
      function n() {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }
      return (s, o) =>
        y(e)
          ? (_(),
            b("div", Hp, [
              C(
                "button",
                {
                  class: "menu",
                  "aria-expanded": t.open,
                  "aria-controls": "VPSidebarNav",
                  onClick: o[0] || (o[0] = (r) => s.$emit("open-menu")),
                },
                [M(Op, { class: "menu-icon" }), jp],
                8,
                Up
              ),
              C(
                "a",
                { class: "top-link", href: "#", onClick: n },
                " Return to top "
              ),
            ]))
          : Z("", !0);
    },
  });
const Kp = H(Gp, [["__scopeId", "data-v-aac27d5e"]]),
  Zp = {},
  Wp = {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
  },
  Yp = C(
    "path",
    {
      d: "M19,2H5C3.3,2,2,3.3,2,5v14c0,1.7,1.3,3,3,3h14c1.7,0,3-1.3,3-3V5C22,3.3,20.7,2,19,2z M20,19c0,0.6-0.4,1-1,1H5c-0.6,0-1-0.4-1-1V5c0-0.6,0.4-1,1-1h14c0.6,0,1,0.4,1,1V19z",
    },
    null,
    -1
  ),
  Jp = C(
    "path",
    {
      d: "M16,11h-3V8c0-0.6-0.4-1-1-1s-1,0.4-1,1v3H8c-0.6,0-1,0.4-1,1s0.4,1,1,1h3v3c0,0.6,0.4,1,1,1s1-0.4,1-1v-3h3c0.6,0,1-0.4,1-1S16.6,11,16,11z",
    },
    null,
    -1
  ),
  Qp = [Yp, Jp];
function Xp(t, e) {
  return _(), b("svg", Wp, Qp);
}
const e0 = H(Zp, [["render", Xp]]),
  t0 = {},
  n0 = {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    viewBox: "0 0 24 24",
  },
  s0 = C(
    "path",
    {
      d: "M19,2H5C3.3,2,2,3.3,2,5v14c0,1.7,1.3,3,3,3h14c1.7,0,3-1.3,3-3V5C22,3.3,20.7,2,19,2zM20,19c0,0.6-0.4,1-1,1H5c-0.6,0-1-0.4-1-1V5c0-0.6,0.4-1,1-1h14c0.6,0,1,0.4,1,1V19z",
    },
    null,
    -1
  ),
  o0 = C(
    "path",
    {
      d: "M16,11H8c-0.6,0-1,0.4-1,1s0.4,1,1,1h8c0.6,0,1-0.4,1-1S16.6,11,16,11z",
    },
    null,
    -1
  ),
  r0 = [s0, o0];
function c0(t, e) {
  return _(), b("svg", n0, r0);
}
const i0 = H(t0, [["render", c0]]),
  l0 = Y({
    __name: "VPSidebarLink",
    props: { item: null, depth: { default: 1 } },
    setup(t) {
      const { page: e, frontmatter: n } = ue(),
        s = de(() => n.value.sidebarDepth || 1 / 0),
        o = at("close-sidebar");
      return (r, c) => {
        const i = Ct("VPSidebarLink", !0);
        return (
          _(),
          re(
            wt,
            {
              class: _e([
                "link",
                {
                  active: y(sn)(y(e).relativePath, t.item.link),
                  offset: t.depth > 1,
                },
              ]),
              href: t.item.link,
              onClick: y(o),
            },
            {
              default: j(() => [
                C(
                  "span",
                  { class: _e(["link-text", { light: t.depth > 1 }]) },
                  oe(t.item.text),
                  3
                ),
                "items" in t.item && t.depth < y(s)
                  ? (_(!0),
                    b(
                      te,
                      { key: 0 },
                      xe(
                        t.item.items,
                        (l) => (
                          _(),
                          re(
                            i,
                            { key: l.link, item: l, depth: t.depth + 1 },
                            null,
                            8,
                            ["item", "depth"]
                          )
                        )
                      ),
                      128
                    ))
                  : Z("", !0),
              ]),
              _: 1,
            },
            8,
            ["class", "href", "onClick"]
          )
        );
      };
    },
  });
const a0 = H(l0, [["__scopeId", "data-v-f7e544fc"]]),
  u0 = ["role"],
  f0 = { class: "title-text" },
  d0 = { class: "action" },
  h0 = { class: "items" },
  p0 = Y({
    __name: "VPSidebarGroup",
    props: {
      text: null,
      items: null,
      collapsible: { type: Boolean },
      collapsed: { type: Boolean },
    },
    setup(t) {
      const e = t,
        n = Ae(!1);
      An(() => {
        n.value = !!(e.collapsible && e.collapsed);
      });
      const { page: s } = ue();
      An(() => {
        e.items.some((r) => sn(s.value.relativePath, r.link)) && (n.value = !1);
      });
      function o() {
        e.collapsible && (n.value = !n.value);
      }
      return (r, c) => (
        _(),
        b(
          "section",
          {
            class: _e([
              "VPSidebarGroup",
              { collapsible: t.collapsible, collapsed: n.value },
            ]),
          },
          [
            t.text
              ? (_(),
                b(
                  "div",
                  {
                    key: 0,
                    class: "title",
                    role: t.collapsible ? "button" : void 0,
                    onClick: o,
                  },
                  [
                    C("h2", f0, oe(t.text), 1),
                    C("div", d0, [
                      M(i0, { class: "icon minus" }),
                      M(e0, { class: "icon plus" }),
                    ]),
                  ],
                  8,
                  u0
                ))
              : Z("", !0),
            C("div", h0, [
              (_(!0),
              b(
                te,
                null,
                xe(
                  t.items,
                  (i) => (
                    _(), re(a0, { key: i.link, item: i }, null, 8, ["item"])
                  )
                ),
                128
              )),
            ]),
          ],
          2
        )
      );
    },
  });
const _0 = H(p0, [["__scopeId", "data-v-2976c796"]]),
  m0 = {
    name: "SideBarHeader",
    data: () => ({ text: void 0, subText: void 0, show: void 0 }),
    mounted() {
      const { page: t } = ue(),
        { path: e } = nt();
      this.showVersions(e),
        this.setHeader(t._value.frontmatter),
        Ye(t, (n) => {
          this.showVersions(n.relativePath), this.setHeader(n.frontmatter);
        });
    },
    methods: {
      showVersions(t) {
        t.indexOf("reference/airnode/") > -1 || t.indexOf("reference/ois/") > -1
          ? (this.show = !0)
          : (this.show = void 0);
      },
      setHeader(t) {
        (this.text = t.sidebarHeader), (this.subText = t.sidebarSubHeader);
      },
    },
  },
  g0 = { style: { "font-weight": "400", "font-size": "large" } },
  v0 = C("span", { style: { "font-size": "small" } }, "\u{1F4C2}", -1),
  b0 = { style: { "margin-left": "9px", "font-size": "small" } };
function k0(t, e, n, s, o, r) {
  const c = Ct("VersionPicklist");
  return (
    _(),
    b("div", g0, [
      v0,
      Ce(" " + oe(t.text) + " ", 1),
      yo(
        C(
          "div",
          b0,
          [
            Ce(oe(t.subText) + " ", 1),
            yo(M(c, null, null, 512), [[sc, t.show]]),
          ],
          512
        ),
        [[sc, t.subText]]
      ),
    ])
  );
}
const y0 = H(m0, [["render", k0]]),
  x0 = (t) => (Ne("data-v-0669bdbd"), (t = t()), Be(), t),
  w0 = {
    class: "nav",
    id: "VPSidebarNav",
    "aria-labelledby": "sidebar-aria-label",
    tabindex: "-1",
  },
  C0 = x0(() =>
    C(
      "span",
      { class: "visually-hidden", id: "sidebar-aria-label" },
      " Sidebar Navigation ",
      -1
    )
  ),
  A0 = Y({
    __name: "VPSidebar",
    props: { open: { type: Boolean } },
    setup(t) {
      const e = t,
        { sidebar: n, hasSidebar: s } = st();
      let o = Ae(null);
      return (
        Na(async () => {
          var r;
          e.open && (await qn(), (r = o.value) == null || r.focus());
        }),
        (r, c) =>
          y(s)
            ? (_(),
              b(
                "aside",
                {
                  key: 0,
                  class: _e(["VPSidebar", { open: t.open }]),
                  ref_key: "navEl",
                  ref: o,
                  onClick: c[0] || (c[0] = of(() => {}, ["stop"])),
                },
                [
                  M(y0, { style: { "margin-top": "5px" } }),
                  C("nav", w0, [
                    C0,
                    (_(!0),
                    b(
                      te,
                      null,
                      xe(
                        y(n),
                        (i) => (
                          _(),
                          b("div", { key: i.text, class: "group" }, [
                            M(
                              _0,
                              {
                                text: i.text,
                                items: i.items,
                                collapsible: i.collapsible,
                                collapsed: i.collapsed,
                              },
                              null,
                              8,
                              ["text", "items", "collapsible", "collapsed"]
                            ),
                          ])
                        )
                      ),
                      128
                    )),
                  ]),
                ],
                2
              ))
            : Z("", !0)
      );
    },
  });
const E0 = H(A0, [["__scopeId", "data-v-0669bdbd"]]),
  S0 = {},
  D0 = { class: "VPPage" };
function $0(t, e) {
  const n = Ct("Content");
  return _(), b("div", D0, [M(n)]);
}
const P0 = H(S0, [["render", $0]]),
  T0 = Y({
    __name: "VPButton",
    props: { tag: null, size: null, theme: null, text: null, href: null },
    setup(t) {
      const e = t,
        n = de(() => {
          var r, c;
          return [
            (r = e.size) != null ? r : "medium",
            (c = e.theme) != null ? c : "brand",
          ];
        }),
        s = de(() => e.href && Ps.test(e.href)),
        o = de(() => (e.tag ? e.tag : e.href ? "a" : "button"));
      return (r, c) => (
        _(),
        re(
          Jo(y(o)),
          {
            class: _e(["VPButton", y(n)]),
            href: t.href ? y(as)(t.href) : void 0,
            target: y(s) ? "_blank" : void 0,
            rel: y(s) ? "noreferrer" : void 0,
          },
          { default: j(() => [Ce(oe(t.text), 1)]), _: 1 },
          8,
          ["class", "href", "target", "rel"]
        )
      );
    },
  });
const q0 = H(T0, [["__scopeId", "data-v-53dbb8eb"]]),
  L0 = (t) => (Ne("data-v-923ba72e"), (t = t()), Be(), t),
  F0 = { class: "container" },
  I0 = { class: "main" },
  M0 = { key: 0, class: "name" },
  V0 = { class: "clip" },
  R0 = { key: 1, class: "text" },
  N0 = { key: 2, class: "tagline" },
  B0 = { key: 3, class: "actions" },
  O0 = { key: 0, class: "image" },
  z0 = { class: "image-container" },
  H0 = L0(() => C("div", { class: "image-bg" }, null, -1)),
  U0 = Y({
    __name: "VPHero",
    props: {
      name: null,
      text: null,
      tagline: null,
      image: null,
      actions: null,
    },
    setup(t) {
      return (e, n) => (
        _(),
        b(
          "div",
          { class: _e(["VPHero", { "has-image": t.image }]) },
          [
            C("div", F0, [
              C("div", I0, [
                t.name
                  ? (_(), b("h1", M0, [C("span", V0, oe(t.name), 1)]))
                  : Z("", !0),
                t.text ? (_(), b("p", R0, oe(t.text), 1)) : Z("", !0),
                t.tagline ? (_(), b("p", N0, oe(t.tagline), 1)) : Z("", !0),
                t.actions
                  ? (_(),
                    b("div", B0, [
                      (_(!0),
                      b(
                        te,
                        null,
                        xe(
                          t.actions,
                          (s) => (
                            _(),
                            b("div", { key: s.link, class: "action" }, [
                              M(
                                q0,
                                {
                                  tag: "a",
                                  size: "medium",
                                  theme: s.theme,
                                  text: s.text,
                                  href: s.link,
                                },
                                null,
                                8,
                                ["theme", "text", "href"]
                              ),
                            ])
                          )
                        ),
                        128
                      )),
                    ]))
                  : Z("", !0),
              ]),
              t.image
                ? (_(),
                  b("div", O0, [
                    C("div", z0, [
                      H0,
                      M(ll, { class: "image-src", image: t.image }, null, 8, [
                        "image",
                      ]),
                    ]),
                  ]))
                : Z("", !0),
            ]),
          ],
          2
        )
      );
    },
  });
const j0 = H(U0, [["__scopeId", "data-v-923ba72e"]]),
  G0 = Y({
    __name: "VPHomeHero",
    setup(t) {
      const { frontmatter: e } = ue();
      return (n, s) =>
        y(e).hero
          ? (_(),
            re(
              j0,
              {
                key: 0,
                class: "VPHomeHero",
                name: y(e).hero.name,
                text: y(e).hero.text,
                tagline: y(e).hero.tagline,
                image: y(e).hero.image,
                actions: y(e).hero.actions,
              },
              null,
              8,
              ["name", "text", "tagline", "image", "actions"]
            ))
          : Z("", !0);
    },
  }),
  K0 = { class: "VPFeature" },
  Z0 = { key: 0, class: "icon" },
  W0 = { class: "title" },
  Y0 = { class: "details" },
  J0 = Y({
    __name: "VPFeature",
    props: { icon: null, title: null, details: null },
    setup(t) {
      return (e, n) => (
        _(),
        b("article", K0, [
          t.icon ? (_(), b("div", Z0, oe(t.icon), 1)) : Z("", !0),
          C("h2", W0, oe(t.title), 1),
          C("p", Y0, oe(t.details), 1),
        ])
      );
    },
  });
const Q0 = H(J0, [["__scopeId", "data-v-d99b2f77"]]),
  X0 = { key: 0, class: "VPFeatures" },
  e_ = { class: "container" },
  t_ = { class: "items" },
  n_ = Y({
    __name: "VPFeatures",
    props: { features: null },
    setup(t) {
      const e = t,
        n = de(() => {
          const s = e.features.length;
          if (s) {
            if (s === 2) return "grid-2";
            if (s === 3) return "grid-3";
            if (s % 3 === 0) return "grid-6";
            if (s % 2 === 0) return "grid-4";
          } else return;
        });
      return (s, o) =>
        t.features
          ? (_(),
            b("div", X0, [
              C("div", e_, [
                C("div", t_, [
                  (_(!0),
                  b(
                    te,
                    null,
                    xe(
                      t.features,
                      (r) => (
                        _(),
                        b(
                          "div",
                          { key: r.title, class: _e(["item", [y(n)]]) },
                          [
                            M(
                              Q0,
                              {
                                icon: r.icon,
                                title: r.title,
                                details: r.details,
                              },
                              null,
                              8,
                              ["icon", "title", "details"]
                            ),
                          ],
                          2
                        )
                      )
                    ),
                    128
                  )),
                ]),
              ]),
            ]))
          : Z("", !0);
    },
  });
const s_ = H(n_, [["__scopeId", "data-v-6a6451ec"]]),
  o_ = Y({
    __name: "VPHomeFeatures",
    setup(t) {
      const { frontmatter: e } = ue();
      return (n, s) =>
        y(e).features
          ? (_(),
            re(
              s_,
              { key: 0, class: "VPHomeFeatures", features: y(e).features },
              null,
              8,
              ["features"]
            ))
          : Z("", !0);
    },
  }),
  r_ = { class: "VPHome" },
  c_ = Y({
    __name: "VPHome",
    setup(t) {
      return (e, n) => {
        const s = Ct("Content");
        return (
          _(),
          b("div", r_, [
            B(e.$slots, "home-hero-before", {}, void 0, !0),
            M(G0),
            B(e.$slots, "home-hero-after", {}, void 0, !0),
            B(e.$slots, "home-features-before", {}, void 0, !0),
            M(o_),
            B(e.$slots, "home-features-after", {}, void 0, !0),
            M(s),
          ])
        );
      };
    },
  });
const i_ = H(c_, [["__scopeId", "data-v-1db23833"]]);
var dc;
const Ln = typeof window < "u";
Ln &&
  ((dc = window == null ? void 0 : window.navigator) == null
    ? void 0
    : dc.userAgent) &&
  /iP(ad|hone|od)/.test(window.navigator.userAgent);
function l_(t) {
  return t;
}
function a_(t) {
  return Wl() ? (Yl(t), !0) : !1;
}
function u_(t, e = !0) {
  tr() ? Li(t) : e ? t() : qn(t);
}
function f_(t, e = !0) {
  tr() ? dt(t) : e ? t() : qn(t);
}
const d_ = Ln ? window : void 0;
Ln && window.document;
Ln && window.navigator;
Ln && window.location;
function h_(t, e = !1) {
  const n = Ae(),
    s = () => (n.value = Boolean(t()));
  return s(), f_(s, e), n;
}
function hc(t, e = {}) {
  const { window: n = d_ } = e,
    s = h_(() => n && "matchMedia" in n && typeof n.matchMedia == "function");
  let o;
  const r = Ae(!1),
    c = () => {
      !s.value || (o || (o = n.matchMedia(t)), (r.value = o.matches));
    };
  return (
    u_(() => {
      c(),
        o &&
          ("addEventListener" in o
            ? o.addEventListener("change", c)
            : o.addListener(c),
          a_(() => {
            "removeEventListener" in o
              ? o.removeEventListener("change", c)
              : o.removeListener(c);
          }));
    }),
    r
  );
}
const $o =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {},
  Po = "__vueuse_ssr_handlers__";
$o[Po] = $o[Po] || {};
$o[Po];
var pc;
(function (t) {
  (t.UP = "UP"),
    (t.RIGHT = "RIGHT"),
    (t.DOWN = "DOWN"),
    (t.LEFT = "LEFT"),
    (t.NONE = "NONE");
})(pc || (pc = {}));
var p_ = Object.defineProperty,
  _c = Object.getOwnPropertySymbols,
  __ = Object.prototype.hasOwnProperty,
  m_ = Object.prototype.propertyIsEnumerable,
  mc = (t, e, n) =>
    e in t
      ? p_(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[e] = n),
  g_ = (t, e) => {
    for (var n in e || (e = {})) __.call(e, n) && mc(t, n, e[n]);
    if (_c) for (var n of _c(e)) m_.call(e, n) && mc(t, n, e[n]);
    return t;
  };
const v_ = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6],
};
g_({ linear: l_ }, v_);
function b_() {
  const { hasSidebar: t } = st(),
    e = hc("(min-width: 960px)"),
    n = hc("(min-width: 1280px)");
  return {
    isAsideEnabled: de(() =>
      !n.value && !e.value ? !1 : t.value ? n.value : e.value
    ),
  };
}
const k_ = 56;
function y_() {
  const { page: t } = ue();
  return { hasOutline: de(() => t.value.headers.length > 0) };
}
function x_(t, e) {
  const { isAsideEnabled: n } = b_(),
    s = Df(r, 100);
  let o = null;
  dt(() => {
    requestAnimationFrame(r), window.addEventListener("scroll", s);
  }),
    Fi(() => {
      c(location.hash);
    }),
    nn(() => {
      window.removeEventListener("scroll", s);
    });
  function r() {
    if (!n.value) return;
    const i = [].slice.call(t.value.querySelectorAll(".outline-link")),
      l = [].slice
        .call(document.querySelectorAll(".content .header-anchor"))
        .filter((p) =>
          i.some((x) => x.hash === p.hash && p.offsetParent !== null)
        ),
      a = window.scrollY,
      u = window.innerHeight,
      f = document.body.offsetHeight,
      d = Math.abs(a + u - f) < 1;
    if (l.length && d) {
      c(l[l.length - 1].hash);
      return;
    }
    for (let p = 0; p < l.length; p++) {
      const x = l[p],
        A = l[p + 1],
        [P, g] = w_(p, x, A);
      if (P) {
        c(g);
        return;
      }
    }
  }
  function c(i) {
    o && o.classList.remove("active"),
      i !== null &&
        (o = t.value.querySelector(`a[href="${decodeURIComponent(i)}"]`));
    const l = o;
    l
      ? (l.classList.add("active"),
        (e.value.style.top = l.offsetTop + 33 + "px"),
        (e.value.style.opacity = "1"))
      : ((e.value.style.top = "33px"), (e.value.style.opacity = "0"));
  }
}
function gc(t) {
  return t.parentElement.offsetTop - k_ - 15;
}
function w_(t, e, n) {
  const s = window.scrollY;
  return t === 0 && s === 0
    ? [!0, null]
    : s < gc(e)
    ? [!1, null]
    : !n || s < gc(n)
    ? [!0, e.hash]
    : [!1, null];
}
const C_ = (t) => (Ne("data-v-a3de185c"), (t = t()), Be(), t),
  A_ = { class: "content" },
  E_ = { class: "outline-title" },
  S_ = { "aria-labelledby": "doc-outline-aria-label" },
  D_ = C_(() =>
    C(
      "span",
      { class: "visually-hidden", id: "doc-outline-aria-label" },
      " Table of Contents for current page ",
      -1
    )
  ),
  $_ = { class: "root" },
  P_ = ["href"],
  T_ = { key: 0 },
  q_ = ["href"],
  L_ = Y({
    __name: "VPDocAsideOutline",
    setup(t) {
      const { page: e, frontmatter: n, theme: s } = ue(),
        { hasOutline: o } = y_(),
        r = Ae(),
        c = Ae();
      x_(r, c);
      function i({ target: l }) {
        const a = "#" + l.href.split("#")[1],
          u = document.querySelector(decodeURIComponent(a));
        u == null || u.focus();
      }
      return (l, a) => (
        _(),
        b(
          "div",
          {
            class: _e(["VPDocAsideOutline", { "has-outline": y(o) }]),
            ref_key: "container",
            ref: r,
          },
          [
            C("div", A_, [
              C(
                "div",
                { class: "outline-marker", ref_key: "marker", ref: c },
                null,
                512
              ),
              C("div", E_, oe(y(s).outlineTitle || "On this page"), 1),
              C("nav", S_, [
                D_,
                C("ul", $_, [
                  (_(!0),
                  b(
                    te,
                    null,
                    xe(
                      y(e).headers,
                      ({ title: u, link: f, children: d }) => (
                        _(),
                        b("li", null, [
                          C(
                            "a",
                            { class: "outline-link", href: f, onClick: i },
                            oe(u),
                            9,
                            P_
                          ),
                          d && y(n).outline === "deep"
                            ? (_(),
                              b("ul", T_, [
                                (_(!0),
                                b(
                                  te,
                                  null,
                                  xe(
                                    d,
                                    ({ title: p, link: x }) => (
                                      _(),
                                      b("li", null, [
                                        C(
                                          "a",
                                          {
                                            class: "outline-link nested",
                                            href: x,
                                            onClick: i,
                                          },
                                          oe(p),
                                          9,
                                          q_
                                        ),
                                      ])
                                    )
                                  ),
                                  256
                                )),
                              ]))
                            : Z("", !0),
                        ])
                      )
                    ),
                    256
                  )),
                ]),
              ]),
            ]),
          ],
          2
        )
      );
    },
  });
const F_ = H(L_, [["__scopeId", "data-v-a3de185c"]]),
  I_ = "modulepreload",
  M_ = function (t) {
    return "/" + t;
  },
  vc = {},
  V_ = function (e, n, s) {
    return !n || n.length === 0
      ? e()
      : Promise.all(
          n.map((o) => {
            if (((o = M_(o)), o in vc)) return;
            vc[o] = !0;
            const r = o.endsWith(".css"),
              c = r ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${o}"]${c}`)) return;
            const i = document.createElement("link");
            if (
              ((i.rel = r ? "stylesheet" : I_),
              r || ((i.as = "script"), (i.crossOrigin = "")),
              (i.href = o),
              document.head.appendChild(i),
              r)
            )
              return new Promise((l, a) => {
                i.addEventListener("load", l),
                  i.addEventListener("error", () =>
                    a(new Error(`Unable to preload CSS for ${o}`))
                  );
              });
          })
        ).then(() => e());
  },
  R_ = { class: "VPDocAsideCarbonAds" },
  N_ = Y({
    __name: "VPDocAsideCarbonAds",
    setup(t) {
      const e = () => null;
      return (n, s) => (_(), b("div", R_, [M(y(e))]));
    },
  }),
  B_ = (t) => (Ne("data-v-aea49c31"), (t = t()), Be(), t),
  O_ = { class: "VPDocAside" },
  z_ = B_(() => C("div", { class: "spacer" }, null, -1)),
  H_ = Y({
    __name: "VPDocAside",
    setup(t) {
      const { page: e, theme: n } = ue();
      return (s, o) => (
        _(),
        b("div", O_, [
          B(s.$slots, "aside-top", {}, void 0, !0),
          B(s.$slots, "aside-outline-before", {}, void 0, !0),
          y(e).headers.length ? (_(), re(F_, { key: 0 })) : Z("", !0),
          B(s.$slots, "aside-outline-after", {}, void 0, !0),
          z_,
          B(s.$slots, "aside-ads-before", {}, void 0, !0),
          y(n).carbonAds ? (_(), re(N_, { key: 1 })) : Z("", !0),
          B(s.$slots, "aside-ads-after", {}, void 0, !0),
          B(s.$slots, "aside-bottom", {}, void 0, !0),
        ])
      );
    },
  });
const U_ = H(H_, [["__scopeId", "data-v-aea49c31"]]);
function j_() {
  const { theme: t, page: e } = ue();
  return de(() => {
    const { text: n = "Edit this page", pattern: s } = t.value.editLink || {},
      { relativePath: o } = e.value;
    return { url: s.replace(/:path/g, o), text: n };
  });
}
function G_() {
  const { page: t, theme: e, frontmatter: n } = ue();
  return de(() => {
    const s = il(e.value.sidebar, t.value.relativePath),
      o = $f(s),
      r = o.findIndex((c) => sn(t.value.relativePath, c.link));
    return {
      prev: n.value.prev ? { ...o[r - 1], text: n.value.prev } : o[r - 1],
      next: n.value.next ? { ...o[r + 1], text: n.value.next } : o[r + 1],
    };
  });
}
const K_ = {},
  Z_ = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
  W_ = C(
    "path",
    {
      d: "M18,23H4c-1.7,0-3-1.3-3-3V6c0-1.7,1.3-3,3-3h7c0.6,0,1,0.4,1,1s-0.4,1-1,1H4C3.4,5,3,5.4,3,6v14c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1v-7c0-0.6,0.4-1,1-1s1,0.4,1,1v7C21,21.7,19.7,23,18,23z",
    },
    null,
    -1
  ),
  Y_ = C(
    "path",
    {
      d: "M8,17c-0.3,0-0.5-0.1-0.7-0.3C7,16.5,6.9,16.1,7,15.8l1-4c0-0.2,0.1-0.3,0.3-0.5l9.5-9.5c1.2-1.2,3.2-1.2,4.4,0c1.2,1.2,1.2,3.2,0,4.4l-9.5,9.5c-0.1,0.1-0.3,0.2-0.5,0.3l-4,1C8.2,17,8.1,17,8,17zM9.9,12.5l-0.5,2.1l2.1-0.5l9.3-9.3c0.4-0.4,0.4-1.1,0-1.6c-0.4-0.4-1.2-0.4-1.6,0l0,0L9.9,12.5z M18.5,2.5L18.5,2.5L18.5,2.5z",
    },
    null,
    -1
  ),
  J_ = [W_, Y_];
function Q_(t, e) {
  return _(), b("svg", Z_, J_);
}
const X_ = H(K_, [["render", Q_]]),
  em = { class: "VPLastUpdated" },
  tm = ["datatime"],
  nm = Y({
    __name: "VPDocFooterLastUpdated",
    setup(t) {
      const { theme: e, page: n } = ue(),
        s = de(() => new Date(n.value.lastUpdated)),
        o = de(() => s.value.toISOString()),
        r = Ae("");
      return (
        dt(() => {
          An(() => {
            r.value = s.value.toLocaleString(window.navigator.language);
          });
        }),
        (c, i) => {
          var l;
          return (
            _(),
            b("p", em, [
              Ce(
                oe((l = y(e).lastUpdatedText) != null ? l : "Last updated") +
                  ": ",
                1
              ),
              C("time", { datatime: y(o) }, oe(r.value), 9, tm),
            ])
          );
        }
      );
    },
  });
const sm = H(nm, [["__scopeId", "data-v-f7d51a9c"]]),
  om = { key: 0, class: "VPDocFooter" },
  rm = { key: 0, class: "edit-info" },
  cm = { key: 0, class: "edit-link" },
  im = { key: 1, class: "last-updated" },
  lm = { key: 1, class: "prev-next" },
  am = { class: "pager" },
  um = ["href"],
  fm = { class: "desc" },
  dm = { class: "title" },
  hm = ["href"],
  pm = { class: "desc" },
  _m = { class: "title" },
  mm = Y({
    __name: "VPDocFooter",
    setup(t) {
      const { theme: e, page: n, frontmatter: s } = ue(),
        o = j_(),
        r = G_(),
        c = de(() => e.value.editLink && s.value.editLink !== !1),
        i = de(() => n.value.lastUpdated && s.value.lastUpdated !== !1),
        l = de(() => c.value || i.value || r.value.prev || r.value.next);
      return (a, u) => {
        var f, d, p, x;
        return y(l)
          ? (_(),
            b("footer", om, [
              y(c) || y(i)
                ? (_(),
                  b("div", rm, [
                    y(c)
                      ? (_(),
                        b("div", cm, [
                          M(
                            wt,
                            {
                              class: "edit-link-button",
                              href: y(o).url,
                              "no-icon": !0,
                            },
                            {
                              default: j(() => [
                                M(X_, { class: "edit-link-icon" }),
                                Ce(" " + oe(y(o).text), 1),
                              ]),
                              _: 1,
                            },
                            8,
                            ["href"]
                          ),
                        ]))
                      : Z("", !0),
                    y(i) ? (_(), b("div", im, [M(sm)])) : Z("", !0),
                  ]))
                : Z("", !0),
              y(r).prev || y(r).next
                ? (_(),
                  b("div", lm, [
                    C("div", am, [
                      y(r).prev
                        ? (_(),
                          b(
                            "a",
                            {
                              key: 0,
                              class: "pager-link prev",
                              href: y(as)(y(r).prev.link),
                            },
                            [
                              C(
                                "span",
                                fm,
                                oe(
                                  (d =
                                    (f = y(e).docFooter) == null
                                      ? void 0
                                      : f.prev) != null
                                    ? d
                                    : "Previous page"
                                ),
                                1
                              ),
                              C("span", dm, oe(y(r).prev.text), 1),
                            ],
                            8,
                            um
                          ))
                        : Z("", !0),
                    ]),
                    C(
                      "div",
                      { class: _e(["pager", { "has-prev": y(r).prev }]) },
                      [
                        y(r).next
                          ? (_(),
                            b(
                              "a",
                              {
                                key: 0,
                                class: "pager-link next",
                                href: y(as)(y(r).next.link),
                              },
                              [
                                C(
                                  "span",
                                  pm,
                                  oe(
                                    (x =
                                      (p = y(e).docFooter) == null
                                        ? void 0
                                        : p.next) != null
                                      ? x
                                      : "Next page"
                                  ),
                                  1
                                ),
                                C("span", _m, oe(y(r).next.text), 1),
                              ],
                              8,
                              hm
                            ))
                          : Z("", !0),
                      ],
                      2
                    ),
                  ]))
                : Z("", !0),
            ]))
          : Z("", !0);
      };
    },
  });
const gm = H(mm, [["__scopeId", "data-v-a54a85bd"]]),
  vm = (t) => (Ne("data-v-f0af2311"), (t = t()), Be(), t),
  bm = { class: "container" },
  km = { key: 0, class: "aside" },
  ym = vm(() => C("div", { class: "aside-curtain" }, null, -1)),
  xm = { class: "aside-container" },
  wm = { class: "aside-content" },
  Cm = { class: "content" },
  Am = { class: "content-container" },
  Em = { class: "main" },
  Sm = Y({
    __name: "VPDoc",
    setup(t) {
      const e = nt(),
        { hasSidebar: n, hasAside: s } = st(),
        o = de(() => e.path.replace(/[./]+/g, "_").replace(/_html$/, ""));
      return (r, c) => {
        const i = Ct("Content");
        return (
          _(),
          b(
            "div",
            {
              class: _e(["VPDoc", { "has-sidebar": y(n), "has-aside": y(s) }]),
            },
            [
              C("div", bm, [
                y(s)
                  ? (_(),
                    b("div", km, [
                      ym,
                      C("div", xm, [
                        C("div", wm, [
                          M(U_, null, {
                            "aside-top": j(() => [
                              B(r.$slots, "aside-top", {}, void 0, !0),
                            ]),
                            "aside-bottom": j(() => [
                              B(r.$slots, "aside-bottom", {}, void 0, !0),
                            ]),
                            "aside-outline-before": j(() => [
                              B(
                                r.$slots,
                                "aside-outline-before",
                                {},
                                void 0,
                                !0
                              ),
                            ]),
                            "aside-outline-after": j(() => [
                              B(
                                r.$slots,
                                "aside-outline-after",
                                {},
                                void 0,
                                !0
                              ),
                            ]),
                            "aside-ads-before": j(() => [
                              B(r.$slots, "aside-ads-before", {}, void 0, !0),
                            ]),
                            "aside-ads-after": j(() => [
                              B(r.$slots, "aside-ads-after", {}, void 0, !0),
                            ]),
                            _: 3,
                          }),
                        ]),
                      ]),
                    ]))
                  : Z("", !0),
                C("div", Cm, [
                  C("div", Am, [
                    B(r.$slots, "doc-before", {}, void 0, !0),
                    C("main", Em, [
                      M(i, { class: _e(["vp-doc", y(o)]) }, null, 8, ["class"]),
                    ]),
                    B(r.$slots, "doc-footer-before", {}, void 0, !0),
                    M(gm),
                    B(r.$slots, "doc-after", {}, void 0, !0),
                  ]),
                ]),
              ]),
            ],
            2
          )
        );
      };
    },
  });
const Dm = H(Sm, [["__scopeId", "data-v-f0af2311"]]),
  $m = Y({
    __name: "VPContent",
    setup(t) {
      const e = nt(),
        { frontmatter: n } = ue(),
        { hasSidebar: s } = st(),
        o = at("NotFound");
      return (r, c) => (
        _(),
        b(
          "div",
          {
            class: _e([
              "VPContent",
              { "has-sidebar": y(s), "is-home": y(n).layout === "home" },
            ]),
            id: "VPContent",
          },
          [
            y(e).component === y(o)
              ? (_(), re(y(o), { key: 0 }))
              : y(n).layout === "page"
              ? (_(), re(P0, { key: 1 }))
              : y(n).layout === "home"
              ? (_(),
                re(
                  i_,
                  { key: 2 },
                  {
                    "home-hero-before": j(() => [
                      B(r.$slots, "home-hero-before", {}, void 0, !0),
                    ]),
                    "home-hero-after": j(() => [
                      B(r.$slots, "home-hero-after", {}, void 0, !0),
                    ]),
                    "home-features-before": j(() => [
                      B(r.$slots, "home-features-before", {}, void 0, !0),
                    ]),
                    "home-features-after": j(() => [
                      B(r.$slots, "home-features-after", {}, void 0, !0),
                    ]),
                    _: 3,
                  }
                ))
              : (_(),
                re(
                  Dm,
                  { key: 3 },
                  {
                    "doc-footer-before": j(() => [
                      B(r.$slots, "doc-footer-before", {}, void 0, !0),
                    ]),
                    "doc-before": j(() => [
                      B(r.$slots, "doc-before", {}, void 0, !0),
                    ]),
                    "doc-after": j(() => [
                      B(r.$slots, "doc-after", {}, void 0, !0),
                    ]),
                    "aside-top": j(() => [
                      B(r.$slots, "aside-top", {}, void 0, !0),
                    ]),
                    "aside-outline-before": j(() => [
                      B(r.$slots, "aside-outline-before", {}, void 0, !0),
                    ]),
                    "aside-outline-after": j(() => [
                      B(r.$slots, "aside-outline-after", {}, void 0, !0),
                    ]),
                    "aside-ads-before": j(() => [
                      B(r.$slots, "aside-ads-before", {}, void 0, !0),
                    ]),
                    "aside-ads-after": j(() => [
                      B(r.$slots, "aside-ads-after", {}, void 0, !0),
                    ]),
                    "aside-bottom": j(() => [
                      B(r.$slots, "aside-bottom", {}, void 0, !0),
                    ]),
                    _: 3,
                  }
                )),
          ],
          2
        )
      );
    },
  });
const Pm = H($m, [["__scopeId", "data-v-c95df128"]]),
  Tm = { class: "container" },
  qm = ["innerHTML"],
  Lm = ["innerHTML"],
  Fm = Y({
    __name: "VPFooter",
    setup(t) {
      const { theme: e } = ue(),
        { hasSidebar: n } = st();
      return (s, o) =>
        y(e).footer
          ? (_(),
            b(
              "footer",
              { key: 0, class: _e(["VPFooter", { "has-sidebar": y(n) }]) },
              [
                C("div", Tm, [
                  y(e).footer.message
                    ? (_(),
                      b(
                        "p",
                        {
                          key: 0,
                          class: "message",
                          innerHTML: y(e).footer.message,
                        },
                        null,
                        8,
                        qm
                      ))
                    : Z("", !0),
                  y(e).footer.copyright
                    ? (_(),
                      b(
                        "p",
                        {
                          key: 1,
                          class: "copyright",
                          innerHTML: y(e).footer.copyright,
                        },
                        null,
                        8,
                        Lm
                      ))
                    : Z("", !0),
                ]),
              ],
              2
            ))
          : Z("", !0);
    },
  });
const Im = H(Fm, [["__scopeId", "data-v-9f24cc86"]]),
  Mm = { class: "Layout" },
  Vm = Y({
    __name: "Layout",
    setup(t) {
      const { isOpen: e, open: n, close: s } = st(),
        o = nt();
      return (
        Ye(() => o.path, s),
        Pf(e, s),
        Wo("close-sidebar", s),
        (r, c) => (
          _(),
          b("div", Mm, [
            B(r.$slots, "layout-top", {}, void 0, !0),
            M(qf),
            M(If, { class: "backdrop", show: y(e), onClick: y(s) }, null, 8, [
              "show",
              "onClick",
            ]),
            M(qp, null, {
              "nav-bar-title-before": j(() => [
                B(r.$slots, "nav-bar-title-before", {}, void 0, !0),
              ]),
              "nav-bar-title-after": j(() => [
                B(r.$slots, "nav-bar-title-after", {}, void 0, !0),
              ]),
              "nav-bar-content-before": j(() => [
                B(r.$slots, "nav-bar-content-before", {}, void 0, !0),
              ]),
              "nav-bar-content-after": j(() => [
                B(r.$slots, "nav-bar-content-after", {}, void 0, !0),
              ]),
              "nav-screen-content-before": j(() => [
                B(r.$slots, "nav-screen-content-before", {}, void 0, !0),
              ]),
              "nav-screen-content-after": j(() => [
                B(r.$slots, "nav-screen-content-after", {}, void 0, !0),
              ]),
              _: 3,
            }),
            M(Kp, { open: y(e), onOpenMenu: y(n) }, null, 8, [
              "open",
              "onOpenMenu",
            ]),
            M(E0, { open: y(e) }, null, 8, ["open"]),
            M(Pm, null, {
              "home-hero-before": j(() => [
                B(r.$slots, "home-hero-before", {}, void 0, !0),
              ]),
              "home-hero-after": j(() => [
                B(r.$slots, "home-hero-after", {}, void 0, !0),
              ]),
              "home-features-before": j(() => [
                B(r.$slots, "home-features-before", {}, void 0, !0),
              ]),
              "home-features-after": j(() => [
                B(r.$slots, "home-features-after", {}, void 0, !0),
              ]),
              "doc-footer-before": j(() => [
                B(r.$slots, "doc-footer-before", {}, void 0, !0),
              ]),
              "doc-before": j(() => [
                B(r.$slots, "doc-before", {}, void 0, !0),
              ]),
              "doc-after": j(() => [B(r.$slots, "doc-after", {}, void 0, !0)]),
              "aside-top": j(() => [B(r.$slots, "aside-top", {}, void 0, !0)]),
              "aside-bottom": j(() => [
                B(r.$slots, "aside-bottom", {}, void 0, !0),
              ]),
              "aside-outline-before": j(() => [
                B(r.$slots, "aside-outline-before", {}, void 0, !0),
              ]),
              "aside-outline-after": j(() => [
                B(r.$slots, "aside-outline-after", {}, void 0, !0),
              ]),
              "aside-ads-before": j(() => [
                B(r.$slots, "aside-ads-before", {}, void 0, !0),
              ]),
              "aside-ads-after": j(() => [
                B(r.$slots, "aside-ads-after", {}, void 0, !0),
              ]),
              _: 3,
            }),
            M(Im),
            B(r.$slots, "layout-bottom", {}, void 0, !0),
          ])
        )
      );
    },
  });
const Rm = H(Vm, [["__scopeId", "data-v-ca9ccb7e"]]),
  Ls = (t) => (Ne("data-v-95656537"), (t = t()), Be(), t),
  Nm = { class: "NotFound" },
  Bm = Ls(() => C("p", { class: "code" }, "404", -1)),
  Om = Ls(() => C("h1", { class: "title" }, "PAGE NOT FOUND", -1)),
  zm = Ls(() => C("div", { class: "divider" }, null, -1)),
  Hm = Ls(() =>
    C(
      "blockquote",
      { class: "quote" },
      " But if you don't change your direction, and if you keep looking, you may end up where you are heading. ",
      -1
    )
  ),
  Um = { class: "action" },
  jm = ["href"],
  Gm = Y({
    __name: "NotFound",
    setup(t) {
      const { site: e } = ue();
      return (n, s) => (
        _(),
        b("div", Nm, [
          Bm,
          Om,
          zm,
          Hm,
          C("div", Um, [
            C(
              "a",
              { class: "link", href: y(e).base, "aria-label": "go to home" },
              " Take me home ",
              8,
              jm
            ),
          ]),
        ])
      );
    },
  });
const Km = H(Gm, [["__scopeId", "data-v-95656537"]]),
  Zm = {},
  Wm = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
  Ym = C(
    "path",
    {
      d: "M12,22.2c-0.3,0-0.5-0.1-0.7-0.3l-8.8-8.8c-2.5-2.5-2.5-6.7,0-9.2c2.5-2.5,6.7-2.5,9.2,0L12,4.3l0.4-0.4c0,0,0,0,0,0C13.6,2.7,15.2,2,16.9,2c0,0,0,0,0,0c1.7,0,3.4,0.7,4.6,1.9l0,0c1.2,1.2,1.9,2.9,1.9,4.6c0,1.7-0.7,3.4-1.9,4.6l-8.8,8.8C12.5,22.1,12.3,22.2,12,22.2zM7,4C5.9,4,4.7,4.4,3.9,5.3c-1.8,1.8-1.8,4.6,0,6.4l8.1,8.1l8.1-8.1c0.9-0.9,1.3-2,1.3-3.2c0-1.2-0.5-2.3-1.3-3.2l0,0C19.3,4.5,18.2,4,17,4c0,0,0,0,0,0c-1.2,0-2.3,0.5-3.2,1.3c0,0,0,0,0,0l-1.1,1.1c-0.4,0.4-1,0.4-1.4,0l-1.1-1.1C9.4,4.4,8.2,4,7,4z",
    },
    null,
    -1
  ),
  Jm = [Ym];
function Qm(t, e) {
  return _(), b("svg", Wm, Jm);
}
const Xm = H(Zm, [["render", Qm]]);
const eg = { class: "profile" },
  tg = { class: "avatar" },
  ng = ["src", "alt"],
  sg = { class: "data" },
  og = { class: "name" },
  rg = { key: 0, class: "affiliation" },
  cg = { key: 0, class: "title" },
  ig = { key: 1, class: "at" },
  lg = { key: 1, class: "desc" },
  ag = { key: 2, class: "links" },
  ug = { key: 0, class: "sp" },
  fg = Ce(" Sponsor "),
  dg = Y({
    __name: "VPTeamMembersItem",
    props: { size: null, member: null },
    setup(t) {
      return (e, n) => {
        var s;
        return (
          _(),
          b(
            "article",
            {
              class: _e([
                "VPTeamMembersItem",
                [(s = t.size) != null ? s : "medium"],
              ]),
            },
            [
              C("div", eg, [
                C("figure", tg, [
                  C(
                    "img",
                    {
                      class: "avatar-img",
                      src: t.member.avatar,
                      alt: t.member.name,
                    },
                    null,
                    8,
                    ng
                  ),
                ]),
                C("div", sg, [
                  C("h1", og, oe(t.member.name), 1),
                  t.member.title || t.member.org
                    ? (_(),
                      b("p", rg, [
                        t.member.title
                          ? (_(), b("span", cg, oe(t.member.title), 1))
                          : Z("", !0),
                        t.member.title && t.member.org
                          ? (_(), b("span", ig, " @ "))
                          : Z("", !0),
                        t.member.org
                          ? (_(),
                            re(
                              wt,
                              {
                                key: 2,
                                class: _e(["org", { link: t.member.orgLink }]),
                                href: t.member.orgLink,
                                "no-icon": "",
                              },
                              {
                                default: j(() => [Ce(oe(t.member.org), 1)]),
                                _: 1,
                              },
                              8,
                              ["class", "href"]
                            ))
                          : Z("", !0),
                      ]))
                    : Z("", !0),
                  t.member.desc
                    ? (_(), b("p", lg, oe(t.member.desc), 1))
                    : Z("", !0),
                  t.member.links
                    ? (_(),
                      b("div", ag, [
                        M(qs, { links: t.member.links }, null, 8, ["links"]),
                      ]))
                    : Z("", !0),
                ]),
              ]),
              t.member.sponsor
                ? (_(),
                  b("div", ug, [
                    M(
                      wt,
                      {
                        class: "sp-link",
                        href: t.member.sponsor,
                        "no-icon": "",
                      },
                      {
                        default: j(() => [M(Xm, { class: "sp-icon" }), fg]),
                        _: 1,
                      },
                      8,
                      ["href"]
                    ),
                  ]))
                : Z("", !0),
            ],
            2
          )
        );
      };
    },
  });
const hg = H(dg, [["__scopeId", "data-v-89ac5bf1"]]),
  pg = { class: "container" },
  _g = Y({
    __name: "VPTeamMembers",
    props: { size: null, members: null },
    setup(t) {
      const e = t,
        n = de(() => {
          var s;
          return [
            (s = e.size) != null ? s : "medium",
            `count-${e.members.length}`,
          ];
        });
      return (s, o) => (
        _(),
        b(
          "div",
          { class: _e(["VPTeamMembers", y(n)]) },
          [
            C("div", pg, [
              (_(!0),
              b(
                te,
                null,
                xe(
                  t.members,
                  (r) => (
                    _(),
                    b("div", { key: r.name, class: "item" }, [
                      M(hg, { size: t.size, member: r }, null, 8, [
                        "size",
                        "member",
                      ]),
                    ])
                  )
                ),
                128
              )),
            ]),
          ],
          2
        )
      );
    },
  });
const AJ = H(_g, [["__scopeId", "data-v-04685dce"]]),
  mg = { Layout: Rm, NotFound: Km },
  gg = [
    { label: "v0.7 (latest)", path: "/reference/airnode/latest/" },
    { label: "v0.6", path: "/reference/airnode/v0.6/" },
    { label: "v0.5", path: "/reference/airnode/v0.5/" },
    { label: "v0.4", path: "/reference/airnode/v0.4/" },
    { label: "v0.3", path: "/reference/airnode/v0.3/" },
    { label: "v0.2", path: "/reference/airnode/v0.2/" },
    { label: "pre-alpha", path: "/reference/airnode/pre-alpha/" },
  ],
  vg = [
    { label: "v1.1 (latest)", path: "/reference/ois/v1.1/" },
    { label: "v1.0", path: "/reference/ois/v1.0/" },
  ],
  bg = "v0.7",
  kg = "v1.1",
  bc = { airnode: gg, ois: vg, airnodeLatest: bg, oisLatest: kg };
const yg = {
    name: "VersionPicklist",
    data: () => ({ path: void 0, versions: void 0, goRouterFunc: rl().go }),
    mounted() {
      console.log("globalSearch", Rt);
      const { page: t } = ue();
      Ye(t, (n) => {
        const s = n.relativePath;
        this.parsePath("/" + s), this.setPickListData();
      });
      const { path: e } = nt();
      this.parsePath(e),
        this.$nextTick(function () {
          this.setPickListData();
        });
    },
    methods: {
      parsePath(t) {
        const e = t.split("/");
        this.path = "/" + e[1] + "/" + e[2] + "/" + e[3] + "/";
      },
      setPickListData() {
        this.path.indexOf("/reference/airnode/") > -1
          ? (this.versions = bc.airnode)
          : this.path.indexOf("/reference/ois/") > -1 &&
            (this.versions = bc.ois);
      },
      goToRoute() {
        this.goRouterFunc(this.path);
      },
    },
  },
  xg = ["value"],
  wg = { key: 0 };
function Cg(t, e, n, s, o, r) {
  return (
    _(),
    b("span", null, [
      yo(
        C(
          "select",
          {
            onChange:
              e[0] || (e[0] = (...c) => r.goToRoute && r.goToRoute(...c)),
            "onUpdate:modelValue": e[1] || (e[1] = (c) => (t.path = c)),
            class: "api3-version-select",
          },
          [
            (_(!0),
            b(
              te,
              null,
              xe(
                t.versions,
                (c) => (
                  _(),
                  b(
                    "option",
                    { key: c.path, value: c.path },
                    [
                      Ce(oe(c.label) + " ", 1),
                      t.path === c.path
                        ? (_(), b("span", wg, "\u25BC"))
                        : Z("", !0),
                    ],
                    8,
                    xg
                  )
                )
              ),
              128
            )),
          ],
          544
        ),
        [[tf, t.path]]
      ),
    ])
  );
}
const Ag = H(yg, [
  ["render", Cg],
  ["__scopeId", "data-v-deda67db"],
]);
function Eg(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
    ? t.default
    : t;
}
function Sg(t) {
  var e = t.default;
  if (typeof e == "function") {
    var n = function () {
      return e.apply(this, arguments);
    };
    n.prototype = e.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, "__esModule", { value: !0 }),
    Object.keys(t).forEach(function (s) {
      var o = Object.getOwnPropertyDescriptor(t, s);
      Object.defineProperty(
        n,
        s,
        o.get
          ? o
          : {
              enumerable: !0,
              get: function () {
                return t[s];
              },
            }
      );
    }),
    n
  );
}
var _l = { exports: {} },
  pe = {},
  ir = { exports: {} };
const Dg = "\xC1",
  $g = "\xE1",
  Pg = "\u0102",
  Tg = "\u0103",
  qg = "\u223E",
  Lg = "\u223F",
  Fg = "\u223E\u0333",
  Ig = "\xC2",
  Mg = "\xE2",
  Vg = "\xB4",
  Rg = "\u0410",
  Ng = "\u0430",
  Bg = "\xC6",
  Og = "\xE6",
  zg = "\u2061",
  Hg = "\u{1D504}",
  Ug = "\u{1D51E}",
  jg = "\xC0",
  Gg = "\xE0",
  Kg = "\u2135",
  Zg = "\u2135",
  Wg = "\u0391",
  Yg = "\u03B1",
  Jg = "\u0100",
  Qg = "\u0101",
  Xg = "\u2A3F",
  e1 = "&",
  t1 = "&",
  n1 = "\u2A55",
  s1 = "\u2A53",
  o1 = "\u2227",
  r1 = "\u2A5C",
  c1 = "\u2A58",
  i1 = "\u2A5A",
  l1 = "\u2220",
  a1 = "\u29A4",
  u1 = "\u2220",
  f1 = "\u29A8",
  d1 = "\u29A9",
  h1 = "\u29AA",
  p1 = "\u29AB",
  _1 = "\u29AC",
  m1 = "\u29AD",
  g1 = "\u29AE",
  v1 = "\u29AF",
  b1 = "\u2221",
  k1 = "\u221F",
  y1 = "\u22BE",
  x1 = "\u299D",
  w1 = "\u2222",
  C1 = "\xC5",
  A1 = "\u237C",
  E1 = "\u0104",
  S1 = "\u0105",
  D1 = "\u{1D538}",
  $1 = "\u{1D552}",
  P1 = "\u2A6F",
  T1 = "\u2248",
  q1 = "\u2A70",
  L1 = "\u224A",
  F1 = "\u224B",
  I1 = "'",
  M1 = "\u2061",
  V1 = "\u2248",
  R1 = "\u224A",
  N1 = "\xC5",
  B1 = "\xE5",
  O1 = "\u{1D49C}",
  z1 = "\u{1D4B6}",
  H1 = "\u2254",
  U1 = "*",
  j1 = "\u2248",
  G1 = "\u224D",
  K1 = "\xC3",
  Z1 = "\xE3",
  W1 = "\xC4",
  Y1 = "\xE4",
  J1 = "\u2233",
  Q1 = "\u2A11",
  X1 = "\u224C",
  ev = "\u03F6",
  tv = "\u2035",
  nv = "\u223D",
  sv = "\u22CD",
  ov = "\u2216",
  rv = "\u2AE7",
  cv = "\u22BD",
  iv = "\u2305",
  lv = "\u2306",
  av = "\u2305",
  uv = "\u23B5",
  fv = "\u23B6",
  dv = "\u224C",
  hv = "\u0411",
  pv = "\u0431",
  _v = "\u201E",
  mv = "\u2235",
  gv = "\u2235",
  vv = "\u2235",
  bv = "\u29B0",
  kv = "\u03F6",
  yv = "\u212C",
  xv = "\u212C",
  wv = "\u0392",
  Cv = "\u03B2",
  Av = "\u2136",
  Ev = "\u226C",
  Sv = "\u{1D505}",
  Dv = "\u{1D51F}",
  $v = "\u22C2",
  Pv = "\u25EF",
  Tv = "\u22C3",
  qv = "\u2A00",
  Lv = "\u2A01",
  Fv = "\u2A02",
  Iv = "\u2A06",
  Mv = "\u2605",
  Vv = "\u25BD",
  Rv = "\u25B3",
  Nv = "\u2A04",
  Bv = "\u22C1",
  Ov = "\u22C0",
  zv = "\u290D",
  Hv = "\u29EB",
  Uv = "\u25AA",
  jv = "\u25B4",
  Gv = "\u25BE",
  Kv = "\u25C2",
  Zv = "\u25B8",
  Wv = "\u2423",
  Yv = "\u2592",
  Jv = "\u2591",
  Qv = "\u2593",
  Xv = "\u2588",
  eb = "=\u20E5",
  tb = "\u2261\u20E5",
  nb = "\u2AED",
  sb = "\u2310",
  ob = "\u{1D539}",
  rb = "\u{1D553}",
  cb = "\u22A5",
  ib = "\u22A5",
  lb = "\u22C8",
  ab = "\u29C9",
  ub = "\u2510",
  fb = "\u2555",
  db = "\u2556",
  hb = "\u2557",
  pb = "\u250C",
  _b = "\u2552",
  mb = "\u2553",
  gb = "\u2554",
  vb = "\u2500",
  bb = "\u2550",
  kb = "\u252C",
  yb = "\u2564",
  xb = "\u2565",
  wb = "\u2566",
  Cb = "\u2534",
  Ab = "\u2567",
  Eb = "\u2568",
  Sb = "\u2569",
  Db = "\u229F",
  $b = "\u229E",
  Pb = "\u22A0",
  Tb = "\u2518",
  qb = "\u255B",
  Lb = "\u255C",
  Fb = "\u255D",
  Ib = "\u2514",
  Mb = "\u2558",
  Vb = "\u2559",
  Rb = "\u255A",
  Nb = "\u2502",
  Bb = "\u2551",
  Ob = "\u253C",
  zb = "\u256A",
  Hb = "\u256B",
  Ub = "\u256C",
  jb = "\u2524",
  Gb = "\u2561",
  Kb = "\u2562",
  Zb = "\u2563",
  Wb = "\u251C",
  Yb = "\u255E",
  Jb = "\u255F",
  Qb = "\u2560",
  Xb = "\u2035",
  e2 = "\u02D8",
  t2 = "\u02D8",
  n2 = "\xA6",
  s2 = "\u{1D4B7}",
  o2 = "\u212C",
  r2 = "\u204F",
  c2 = "\u223D",
  i2 = "\u22CD",
  l2 = "\u29C5",
  a2 = "\\",
  u2 = "\u27C8",
  f2 = "\u2022",
  d2 = "\u2022",
  h2 = "\u224E",
  p2 = "\u2AAE",
  _2 = "\u224F",
  m2 = "\u224E",
  g2 = "\u224F",
  v2 = "\u0106",
  b2 = "\u0107",
  k2 = "\u2A44",
  y2 = "\u2A49",
  x2 = "\u2A4B",
  w2 = "\u2229",
  C2 = "\u22D2",
  A2 = "\u2A47",
  E2 = "\u2A40",
  S2 = "\u2145",
  D2 = "\u2229\uFE00",
  $2 = "\u2041",
  P2 = "\u02C7",
  T2 = "\u212D",
  q2 = "\u2A4D",
  L2 = "\u010C",
  F2 = "\u010D",
  I2 = "\xC7",
  M2 = "\xE7",
  V2 = "\u0108",
  R2 = "\u0109",
  N2 = "\u2230",
  B2 = "\u2A4C",
  O2 = "\u2A50",
  z2 = "\u010A",
  H2 = "\u010B",
  U2 = "\xB8",
  j2 = "\xB8",
  G2 = "\u29B2",
  K2 = "\xA2",
  Z2 = "\xB7",
  W2 = "\xB7",
  Y2 = "\u{1D520}",
  J2 = "\u212D",
  Q2 = "\u0427",
  X2 = "\u0447",
  ek = "\u2713",
  tk = "\u2713",
  nk = "\u03A7",
  sk = "\u03C7",
  ok = "\u02C6",
  rk = "\u2257",
  ck = "\u21BA",
  ik = "\u21BB",
  lk = "\u229B",
  ak = "\u229A",
  uk = "\u229D",
  fk = "\u2299",
  dk = "\xAE",
  hk = "\u24C8",
  pk = "\u2296",
  _k = "\u2295",
  mk = "\u2297",
  gk = "\u25CB",
  vk = "\u29C3",
  bk = "\u2257",
  kk = "\u2A10",
  yk = "\u2AEF",
  xk = "\u29C2",
  wk = "\u2232",
  Ck = "\u201D",
  Ak = "\u2019",
  Ek = "\u2663",
  Sk = "\u2663",
  Dk = ":",
  $k = "\u2237",
  Pk = "\u2A74",
  Tk = "\u2254",
  qk = "\u2254",
  Lk = ",",
  Fk = "@",
  Ik = "\u2201",
  Mk = "\u2218",
  Vk = "\u2201",
  Rk = "\u2102",
  Nk = "\u2245",
  Bk = "\u2A6D",
  Ok = "\u2261",
  zk = "\u222E",
  Hk = "\u222F",
  Uk = "\u222E",
  jk = "\u{1D554}",
  Gk = "\u2102",
  Kk = "\u2210",
  Zk = "\u2210",
  Wk = "\xA9",
  Yk = "\xA9",
  Jk = "\u2117",
  Qk = "\u2233",
  Xk = "\u21B5",
  ey = "\u2717",
  ty = "\u2A2F",
  ny = "\u{1D49E}",
  sy = "\u{1D4B8}",
  oy = "\u2ACF",
  ry = "\u2AD1",
  cy = "\u2AD0",
  iy = "\u2AD2",
  ly = "\u22EF",
  ay = "\u2938",
  uy = "\u2935",
  fy = "\u22DE",
  dy = "\u22DF",
  hy = "\u21B6",
  py = "\u293D",
  _y = "\u2A48",
  my = "\u2A46",
  gy = "\u224D",
  vy = "\u222A",
  by = "\u22D3",
  ky = "\u2A4A",
  yy = "\u228D",
  xy = "\u2A45",
  wy = "\u222A\uFE00",
  Cy = "\u21B7",
  Ay = "\u293C",
  Ey = "\u22DE",
  Sy = "\u22DF",
  Dy = "\u22CE",
  $y = "\u22CF",
  Py = "\xA4",
  Ty = "\u21B6",
  qy = "\u21B7",
  Ly = "\u22CE",
  Fy = "\u22CF",
  Iy = "\u2232",
  My = "\u2231",
  Vy = "\u232D",
  Ry = "\u2020",
  Ny = "\u2021",
  By = "\u2138",
  Oy = "\u2193",
  zy = "\u21A1",
  Hy = "\u21D3",
  Uy = "\u2010",
  jy = "\u2AE4",
  Gy = "\u22A3",
  Ky = "\u290F",
  Zy = "\u02DD",
  Wy = "\u010E",
  Yy = "\u010F",
  Jy = "\u0414",
  Qy = "\u0434",
  Xy = "\u2021",
  ex = "\u21CA",
  tx = "\u2145",
  nx = "\u2146",
  sx = "\u2911",
  ox = "\u2A77",
  rx = "\xB0",
  cx = "\u2207",
  ix = "\u0394",
  lx = "\u03B4",
  ax = "\u29B1",
  ux = "\u297F",
  fx = "\u{1D507}",
  dx = "\u{1D521}",
  hx = "\u2965",
  px = "\u21C3",
  _x = "\u21C2",
  mx = "\xB4",
  gx = "\u02D9",
  vx = "\u02DD",
  bx = "`",
  kx = "\u02DC",
  yx = "\u22C4",
  xx = "\u22C4",
  wx = "\u22C4",
  Cx = "\u2666",
  Ax = "\u2666",
  Ex = "\xA8",
  Sx = "\u2146",
  Dx = "\u03DD",
  $x = "\u22F2",
  Px = "\xF7",
  Tx = "\xF7",
  qx = "\u22C7",
  Lx = "\u22C7",
  Fx = "\u0402",
  Ix = "\u0452",
  Mx = "\u231E",
  Vx = "\u230D",
  Rx = "$",
  Nx = "\u{1D53B}",
  Bx = "\u{1D555}",
  Ox = "\xA8",
  zx = "\u02D9",
  Hx = "\u20DC",
  Ux = "\u2250",
  jx = "\u2251",
  Gx = "\u2250",
  Kx = "\u2238",
  Zx = "\u2214",
  Wx = "\u22A1",
  Yx = "\u2306",
  Jx = "\u222F",
  Qx = "\xA8",
  Xx = "\u21D3",
  ew = "\u21D0",
  tw = "\u21D4",
  nw = "\u2AE4",
  sw = "\u27F8",
  ow = "\u27FA",
  rw = "\u27F9",
  cw = "\u21D2",
  iw = "\u22A8",
  lw = "\u21D1",
  aw = "\u21D5",
  uw = "\u2225",
  fw = "\u2913",
  dw = "\u2193",
  hw = "\u2193",
  pw = "\u21D3",
  _w = "\u21F5",
  mw = "\u0311",
  gw = "\u21CA",
  vw = "\u21C3",
  bw = "\u21C2",
  kw = "\u2950",
  yw = "\u295E",
  xw = "\u2956",
  ww = "\u21BD",
  Cw = "\u295F",
  Aw = "\u2957",
  Ew = "\u21C1",
  Sw = "\u21A7",
  Dw = "\u22A4",
  $w = "\u2910",
  Pw = "\u231F",
  Tw = "\u230C",
  qw = "\u{1D49F}",
  Lw = "\u{1D4B9}",
  Fw = "\u0405",
  Iw = "\u0455",
  Mw = "\u29F6",
  Vw = "\u0110",
  Rw = "\u0111",
  Nw = "\u22F1",
  Bw = "\u25BF",
  Ow = "\u25BE",
  zw = "\u21F5",
  Hw = "\u296F",
  Uw = "\u29A6",
  jw = "\u040F",
  Gw = "\u045F",
  Kw = "\u27FF",
  Zw = "\xC9",
  Ww = "\xE9",
  Yw = "\u2A6E",
  Jw = "\u011A",
  Qw = "\u011B",
  Xw = "\xCA",
  eC = "\xEA",
  tC = "\u2256",
  nC = "\u2255",
  sC = "\u042D",
  oC = "\u044D",
  rC = "\u2A77",
  cC = "\u0116",
  iC = "\u0117",
  lC = "\u2251",
  aC = "\u2147",
  uC = "\u2252",
  fC = "\u{1D508}",
  dC = "\u{1D522}",
  hC = "\u2A9A",
  pC = "\xC8",
  _C = "\xE8",
  mC = "\u2A96",
  gC = "\u2A98",
  vC = "\u2A99",
  bC = "\u2208",
  kC = "\u23E7",
  yC = "\u2113",
  xC = "\u2A95",
  wC = "\u2A97",
  CC = "\u0112",
  AC = "\u0113",
  EC = "\u2205",
  SC = "\u2205",
  DC = "\u25FB",
  $C = "\u2205",
  PC = "\u25AB",
  TC = "\u2004",
  qC = "\u2005",
  LC = "\u2003",
  FC = "\u014A",
  IC = "\u014B",
  MC = "\u2002",
  VC = "\u0118",
  RC = "\u0119",
  NC = "\u{1D53C}",
  BC = "\u{1D556}",
  OC = "\u22D5",
  zC = "\u29E3",
  HC = "\u2A71",
  UC = "\u03B5",
  jC = "\u0395",
  GC = "\u03B5",
  KC = "\u03F5",
  ZC = "\u2256",
  WC = "\u2255",
  YC = "\u2242",
  JC = "\u2A96",
  QC = "\u2A95",
  XC = "\u2A75",
  e3 = "=",
  t3 = "\u2242",
  n3 = "\u225F",
  s3 = "\u21CC",
  o3 = "\u2261",
  r3 = "\u2A78",
  c3 = "\u29E5",
  i3 = "\u2971",
  l3 = "\u2253",
  a3 = "\u212F",
  u3 = "\u2130",
  f3 = "\u2250",
  d3 = "\u2A73",
  h3 = "\u2242",
  p3 = "\u0397",
  _3 = "\u03B7",
  m3 = "\xD0",
  g3 = "\xF0",
  v3 = "\xCB",
  b3 = "\xEB",
  k3 = "\u20AC",
  y3 = "!",
  x3 = "\u2203",
  w3 = "\u2203",
  C3 = "\u2130",
  A3 = "\u2147",
  E3 = "\u2147",
  S3 = "\u2252",
  D3 = "\u0424",
  $3 = "\u0444",
  P3 = "\u2640",
  T3 = "\uFB03",
  q3 = "\uFB00",
  L3 = "\uFB04",
  F3 = "\u{1D509}",
  I3 = "\u{1D523}",
  M3 = "\uFB01",
  V3 = "\u25FC",
  R3 = "\u25AA",
  N3 = "fj",
  B3 = "\u266D",
  O3 = "\uFB02",
  z3 = "\u25B1",
  H3 = "\u0192",
  U3 = "\u{1D53D}",
  j3 = "\u{1D557}",
  G3 = "\u2200",
  K3 = "\u2200",
  Z3 = "\u22D4",
  W3 = "\u2AD9",
  Y3 = "\u2131",
  J3 = "\u2A0D",
  Q3 = "\xBD",
  X3 = "\u2153",
  e4 = "\xBC",
  t4 = "\u2155",
  n4 = "\u2159",
  s4 = "\u215B",
  o4 = "\u2154",
  r4 = "\u2156",
  c4 = "\xBE",
  i4 = "\u2157",
  l4 = "\u215C",
  a4 = "\u2158",
  u4 = "\u215A",
  f4 = "\u215D",
  d4 = "\u215E",
  h4 = "\u2044",
  p4 = "\u2322",
  _4 = "\u{1D4BB}",
  m4 = "\u2131",
  g4 = "\u01F5",
  v4 = "\u0393",
  b4 = "\u03B3",
  k4 = "\u03DC",
  y4 = "\u03DD",
  x4 = "\u2A86",
  w4 = "\u011E",
  C4 = "\u011F",
  A4 = "\u0122",
  E4 = "\u011C",
  S4 = "\u011D",
  D4 = "\u0413",
  $4 = "\u0433",
  P4 = "\u0120",
  T4 = "\u0121",
  q4 = "\u2265",
  L4 = "\u2267",
  F4 = "\u2A8C",
  I4 = "\u22DB",
  M4 = "\u2265",
  V4 = "\u2267",
  R4 = "\u2A7E",
  N4 = "\u2AA9",
  B4 = "\u2A7E",
  O4 = "\u2A80",
  z4 = "\u2A82",
  H4 = "\u2A84",
  U4 = "\u22DB\uFE00",
  j4 = "\u2A94",
  G4 = "\u{1D50A}",
  K4 = "\u{1D524}",
  Z4 = "\u226B",
  W4 = "\u22D9",
  Y4 = "\u22D9",
  J4 = "\u2137",
  Q4 = "\u0403",
  X4 = "\u0453",
  e5 = "\u2AA5",
  t5 = "\u2277",
  n5 = "\u2A92",
  s5 = "\u2AA4",
  o5 = "\u2A8A",
  r5 = "\u2A8A",
  c5 = "\u2A88",
  i5 = "\u2269",
  l5 = "\u2A88",
  a5 = "\u2269",
  u5 = "\u22E7",
  f5 = "\u{1D53E}",
  d5 = "\u{1D558}",
  h5 = "`",
  p5 = "\u2265",
  _5 = "\u22DB",
  m5 = "\u2267",
  g5 = "\u2AA2",
  v5 = "\u2277",
  b5 = "\u2A7E",
  k5 = "\u2273",
  y5 = "\u{1D4A2}",
  x5 = "\u210A",
  w5 = "\u2273",
  C5 = "\u2A8E",
  A5 = "\u2A90",
  E5 = "\u2AA7",
  S5 = "\u2A7A",
  D5 = ">",
  $5 = ">",
  P5 = "\u226B",
  T5 = "\u22D7",
  q5 = "\u2995",
  L5 = "\u2A7C",
  F5 = "\u2A86",
  I5 = "\u2978",
  M5 = "\u22D7",
  V5 = "\u22DB",
  R5 = "\u2A8C",
  N5 = "\u2277",
  B5 = "\u2273",
  O5 = "\u2269\uFE00",
  z5 = "\u2269\uFE00",
  H5 = "\u02C7",
  U5 = "\u200A",
  j5 = "\xBD",
  G5 = "\u210B",
  K5 = "\u042A",
  Z5 = "\u044A",
  W5 = "\u2948",
  Y5 = "\u2194",
  J5 = "\u21D4",
  Q5 = "\u21AD",
  X5 = "^",
  eA = "\u210F",
  tA = "\u0124",
  nA = "\u0125",
  sA = "\u2665",
  oA = "\u2665",
  rA = "\u2026",
  cA = "\u22B9",
  iA = "\u{1D525}",
  lA = "\u210C",
  aA = "\u210B",
  uA = "\u2925",
  fA = "\u2926",
  dA = "\u21FF",
  hA = "\u223B",
  pA = "\u21A9",
  _A = "\u21AA",
  mA = "\u{1D559}",
  gA = "\u210D",
  vA = "\u2015",
  bA = "\u2500",
  kA = "\u{1D4BD}",
  yA = "\u210B",
  xA = "\u210F",
  wA = "\u0126",
  CA = "\u0127",
  AA = "\u224E",
  EA = "\u224F",
  SA = "\u2043",
  DA = "\u2010",
  $A = "\xCD",
  PA = "\xED",
  TA = "\u2063",
  qA = "\xCE",
  LA = "\xEE",
  FA = "\u0418",
  IA = "\u0438",
  MA = "\u0130",
  VA = "\u0415",
  RA = "\u0435",
  NA = "\xA1",
  BA = "\u21D4",
  OA = "\u{1D526}",
  zA = "\u2111",
  HA = "\xCC",
  UA = "\xEC",
  jA = "\u2148",
  GA = "\u2A0C",
  KA = "\u222D",
  ZA = "\u29DC",
  WA = "\u2129",
  YA = "\u0132",
  JA = "\u0133",
  QA = "\u012A",
  XA = "\u012B",
  e6 = "\u2111",
  t6 = "\u2148",
  n6 = "\u2110",
  s6 = "\u2111",
  o6 = "\u0131",
  r6 = "\u2111",
  c6 = "\u22B7",
  i6 = "\u01B5",
  l6 = "\u21D2",
  a6 = "\u2105",
  u6 = "\u221E",
  f6 = "\u29DD",
  d6 = "\u0131",
  h6 = "\u22BA",
  p6 = "\u222B",
  _6 = "\u222C",
  m6 = "\u2124",
  g6 = "\u222B",
  v6 = "\u22BA",
  b6 = "\u22C2",
  k6 = "\u2A17",
  y6 = "\u2A3C",
  x6 = "\u2063",
  w6 = "\u2062",
  C6 = "\u0401",
  A6 = "\u0451",
  E6 = "\u012E",
  S6 = "\u012F",
  D6 = "\u{1D540}",
  $6 = "\u{1D55A}",
  P6 = "\u0399",
  T6 = "\u03B9",
  q6 = "\u2A3C",
  L6 = "\xBF",
  F6 = "\u{1D4BE}",
  I6 = "\u2110",
  M6 = "\u2208",
  V6 = "\u22F5",
  R6 = "\u22F9",
  N6 = "\u22F4",
  B6 = "\u22F3",
  O6 = "\u2208",
  z6 = "\u2062",
  H6 = "\u0128",
  U6 = "\u0129",
  j6 = "\u0406",
  G6 = "\u0456",
  K6 = "\xCF",
  Z6 = "\xEF",
  W6 = "\u0134",
  Y6 = "\u0135",
  J6 = "\u0419",
  Q6 = "\u0439",
  X6 = "\u{1D50D}",
  eE = "\u{1D527}",
  tE = "\u0237",
  nE = "\u{1D541}",
  sE = "\u{1D55B}",
  oE = "\u{1D4A5}",
  rE = "\u{1D4BF}",
  cE = "\u0408",
  iE = "\u0458",
  lE = "\u0404",
  aE = "\u0454",
  uE = "\u039A",
  fE = "\u03BA",
  dE = "\u03F0",
  hE = "\u0136",
  pE = "\u0137",
  _E = "\u041A",
  mE = "\u043A",
  gE = "\u{1D50E}",
  vE = "\u{1D528}",
  bE = "\u0138",
  kE = "\u0425",
  yE = "\u0445",
  xE = "\u040C",
  wE = "\u045C",
  CE = "\u{1D542}",
  AE = "\u{1D55C}",
  EE = "\u{1D4A6}",
  SE = "\u{1D4C0}",
  DE = "\u21DA",
  $E = "\u0139",
  PE = "\u013A",
  TE = "\u29B4",
  qE = "\u2112",
  LE = "\u039B",
  FE = "\u03BB",
  IE = "\u27E8",
  ME = "\u27EA",
  VE = "\u2991",
  RE = "\u27E8",
  NE = "\u2A85",
  BE = "\u2112",
  OE = "\xAB",
  zE = "\u21E4",
  HE = "\u291F",
  UE = "\u2190",
  jE = "\u219E",
  GE = "\u21D0",
  KE = "\u291D",
  ZE = "\u21A9",
  WE = "\u21AB",
  YE = "\u2939",
  JE = "\u2973",
  QE = "\u21A2",
  XE = "\u2919",
  e8 = "\u291B",
  t8 = "\u2AAB",
  n8 = "\u2AAD",
  s8 = "\u2AAD\uFE00",
  o8 = "\u290C",
  r8 = "\u290E",
  c8 = "\u2772",
  i8 = "{",
  l8 = "[",
  a8 = "\u298B",
  u8 = "\u298F",
  f8 = "\u298D",
  d8 = "\u013D",
  h8 = "\u013E",
  p8 = "\u013B",
  _8 = "\u013C",
  m8 = "\u2308",
  g8 = "{",
  v8 = "\u041B",
  b8 = "\u043B",
  k8 = "\u2936",
  y8 = "\u201C",
  x8 = "\u201E",
  w8 = "\u2967",
  C8 = "\u294B",
  A8 = "\u21B2",
  E8 = "\u2264",
  S8 = "\u2266",
  D8 = "\u27E8",
  $8 = "\u21E4",
  P8 = "\u2190",
  T8 = "\u2190",
  q8 = "\u21D0",
  L8 = "\u21C6",
  F8 = "\u21A2",
  I8 = "\u2308",
  M8 = "\u27E6",
  V8 = "\u2961",
  R8 = "\u2959",
  N8 = "\u21C3",
  B8 = "\u230A",
  O8 = "\u21BD",
  z8 = "\u21BC",
  H8 = "\u21C7",
  U8 = "\u2194",
  j8 = "\u2194",
  G8 = "\u21D4",
  K8 = "\u21C6",
  Z8 = "\u21CB",
  W8 = "\u21AD",
  Y8 = "\u294E",
  J8 = "\u21A4",
  Q8 = "\u22A3",
  X8 = "\u295A",
  eS = "\u22CB",
  tS = "\u29CF",
  nS = "\u22B2",
  sS = "\u22B4",
  oS = "\u2951",
  rS = "\u2960",
  cS = "\u2958",
  iS = "\u21BF",
  lS = "\u2952",
  aS = "\u21BC",
  uS = "\u2A8B",
  fS = "\u22DA",
  dS = "\u2264",
  hS = "\u2266",
  pS = "\u2A7D",
  _S = "\u2AA8",
  mS = "\u2A7D",
  gS = "\u2A7F",
  vS = "\u2A81",
  bS = "\u2A83",
  kS = "\u22DA\uFE00",
  yS = "\u2A93",
  xS = "\u2A85",
  wS = "\u22D6",
  CS = "\u22DA",
  AS = "\u2A8B",
  ES = "\u22DA",
  SS = "\u2266",
  DS = "\u2276",
  $S = "\u2276",
  PS = "\u2AA1",
  TS = "\u2272",
  qS = "\u2A7D",
  LS = "\u2272",
  FS = "\u297C",
  IS = "\u230A",
  MS = "\u{1D50F}",
  VS = "\u{1D529}",
  RS = "\u2276",
  NS = "\u2A91",
  BS = "\u2962",
  OS = "\u21BD",
  zS = "\u21BC",
  HS = "\u296A",
  US = "\u2584",
  jS = "\u0409",
  GS = "\u0459",
  KS = "\u21C7",
  ZS = "\u226A",
  WS = "\u22D8",
  YS = "\u231E",
  JS = "\u21DA",
  QS = "\u296B",
  XS = "\u25FA",
  eD = "\u013F",
  tD = "\u0140",
  nD = "\u23B0",
  sD = "\u23B0",
  oD = "\u2A89",
  rD = "\u2A89",
  cD = "\u2A87",
  iD = "\u2268",
  lD = "\u2A87",
  aD = "\u2268",
  uD = "\u22E6",
  fD = "\u27EC",
  dD = "\u21FD",
  hD = "\u27E6",
  pD = "\u27F5",
  _D = "\u27F5",
  mD = "\u27F8",
  gD = "\u27F7",
  vD = "\u27F7",
  bD = "\u27FA",
  kD = "\u27FC",
  yD = "\u27F6",
  xD = "\u27F6",
  wD = "\u27F9",
  CD = "\u21AB",
  AD = "\u21AC",
  ED = "\u2985",
  SD = "\u{1D543}",
  DD = "\u{1D55D}",
  $D = "\u2A2D",
  PD = "\u2A34",
  TD = "\u2217",
  qD = "_",
  LD = "\u2199",
  FD = "\u2198",
  ID = "\u25CA",
  MD = "\u25CA",
  VD = "\u29EB",
  RD = "(",
  ND = "\u2993",
  BD = "\u21C6",
  OD = "\u231F",
  zD = "\u21CB",
  HD = "\u296D",
  UD = "\u200E",
  jD = "\u22BF",
  GD = "\u2039",
  KD = "\u{1D4C1}",
  ZD = "\u2112",
  WD = "\u21B0",
  YD = "\u21B0",
  JD = "\u2272",
  QD = "\u2A8D",
  XD = "\u2A8F",
  e$ = "[",
  t$ = "\u2018",
  n$ = "\u201A",
  s$ = "\u0141",
  o$ = "\u0142",
  r$ = "\u2AA6",
  c$ = "\u2A79",
  i$ = "<",
  l$ = "<",
  a$ = "\u226A",
  u$ = "\u22D6",
  f$ = "\u22CB",
  d$ = "\u22C9",
  h$ = "\u2976",
  p$ = "\u2A7B",
  _$ = "\u25C3",
  m$ = "\u22B4",
  g$ = "\u25C2",
  v$ = "\u2996",
  b$ = "\u294A",
  k$ = "\u2966",
  y$ = "\u2268\uFE00",
  x$ = "\u2268\uFE00",
  w$ = "\xAF",
  C$ = "\u2642",
  A$ = "\u2720",
  E$ = "\u2720",
  S$ = "\u21A6",
  D$ = "\u21A6",
  $$ = "\u21A7",
  P$ = "\u21A4",
  T$ = "\u21A5",
  q$ = "\u25AE",
  L$ = "\u2A29",
  F$ = "\u041C",
  I$ = "\u043C",
  M$ = "\u2014",
  V$ = "\u223A",
  R$ = "\u2221",
  N$ = "\u205F",
  B$ = "\u2133",
  O$ = "\u{1D510}",
  z$ = "\u{1D52A}",
  H$ = "\u2127",
  U$ = "\xB5",
  j$ = "*",
  G$ = "\u2AF0",
  K$ = "\u2223",
  Z$ = "\xB7",
  W$ = "\u229F",
  Y$ = "\u2212",
  J$ = "\u2238",
  Q$ = "\u2A2A",
  X$ = "\u2213",
  eP = "\u2ADB",
  tP = "\u2026",
  nP = "\u2213",
  sP = "\u22A7",
  oP = "\u{1D544}",
  rP = "\u{1D55E}",
  cP = "\u2213",
  iP = "\u{1D4C2}",
  lP = "\u2133",
  aP = "\u223E",
  uP = "\u039C",
  fP = "\u03BC",
  dP = "\u22B8",
  hP = "\u22B8",
  pP = "\u2207",
  _P = "\u0143",
  mP = "\u0144",
  gP = "\u2220\u20D2",
  vP = "\u2249",
  bP = "\u2A70\u0338",
  kP = "\u224B\u0338",
  yP = "\u0149",
  xP = "\u2249",
  wP = "\u266E",
  CP = "\u2115",
  AP = "\u266E",
  EP = "\xA0",
  SP = "\u224E\u0338",
  DP = "\u224F\u0338",
  $P = "\u2A43",
  PP = "\u0147",
  TP = "\u0148",
  qP = "\u0145",
  LP = "\u0146",
  FP = "\u2247",
  IP = "\u2A6D\u0338",
  MP = "\u2A42",
  VP = "\u041D",
  RP = "\u043D",
  NP = "\u2013",
  BP = "\u2924",
  OP = "\u2197",
  zP = "\u21D7",
  HP = "\u2197",
  UP = "\u2260",
  jP = "\u2250\u0338",
  GP = "\u200B",
  KP = "\u200B",
  ZP = "\u200B",
  WP = "\u200B",
  YP = "\u2262",
  JP = "\u2928",
  QP = "\u2242\u0338",
  XP = "\u226B",
  eT = "\u226A",
  tT = `
`,
  nT = "\u2204",
  sT = "\u2204",
  oT = "\u{1D511}",
  rT = "\u{1D52B}",
  cT = "\u2267\u0338",
  iT = "\u2271",
  lT = "\u2271",
  aT = "\u2267\u0338",
  uT = "\u2A7E\u0338",
  fT = "\u2A7E\u0338",
  dT = "\u22D9\u0338",
  hT = "\u2275",
  pT = "\u226B\u20D2",
  _T = "\u226F",
  mT = "\u226F",
  gT = "\u226B\u0338",
  vT = "\u21AE",
  bT = "\u21CE",
  kT = "\u2AF2",
  yT = "\u220B",
  xT = "\u22FC",
  wT = "\u22FA",
  CT = "\u220B",
  AT = "\u040A",
  ET = "\u045A",
  ST = "\u219A",
  DT = "\u21CD",
  $T = "\u2025",
  PT = "\u2266\u0338",
  TT = "\u2270",
  qT = "\u219A",
  LT = "\u21CD",
  FT = "\u21AE",
  IT = "\u21CE",
  MT = "\u2270",
  VT = "\u2266\u0338",
  RT = "\u2A7D\u0338",
  NT = "\u2A7D\u0338",
  BT = "\u226E",
  OT = "\u22D8\u0338",
  zT = "\u2274",
  HT = "\u226A\u20D2",
  UT = "\u226E",
  jT = "\u22EA",
  GT = "\u22EC",
  KT = "\u226A\u0338",
  ZT = "\u2224",
  WT = "\u2060",
  YT = "\xA0",
  JT = "\u{1D55F}",
  QT = "\u2115",
  XT = "\u2AEC",
  e7 = "\xAC",
  t7 = "\u2262",
  n7 = "\u226D",
  s7 = "\u2226",
  o7 = "\u2209",
  r7 = "\u2260",
  c7 = "\u2242\u0338",
  i7 = "\u2204",
  l7 = "\u226F",
  a7 = "\u2271",
  u7 = "\u2267\u0338",
  f7 = "\u226B\u0338",
  d7 = "\u2279",
  h7 = "\u2A7E\u0338",
  p7 = "\u2275",
  _7 = "\u224E\u0338",
  m7 = "\u224F\u0338",
  g7 = "\u2209",
  v7 = "\u22F5\u0338",
  b7 = "\u22F9\u0338",
  k7 = "\u2209",
  y7 = "\u22F7",
  x7 = "\u22F6",
  w7 = "\u29CF\u0338",
  C7 = "\u22EA",
  A7 = "\u22EC",
  E7 = "\u226E",
  S7 = "\u2270",
  D7 = "\u2278",
  $7 = "\u226A\u0338",
  P7 = "\u2A7D\u0338",
  T7 = "\u2274",
  q7 = "\u2AA2\u0338",
  L7 = "\u2AA1\u0338",
  F7 = "\u220C",
  I7 = "\u220C",
  M7 = "\u22FE",
  V7 = "\u22FD",
  R7 = "\u2280",
  N7 = "\u2AAF\u0338",
  B7 = "\u22E0",
  O7 = "\u220C",
  z7 = "\u29D0\u0338",
  H7 = "\u22EB",
  U7 = "\u22ED",
  j7 = "\u228F\u0338",
  G7 = "\u22E2",
  K7 = "\u2290\u0338",
  Z7 = "\u22E3",
  W7 = "\u2282\u20D2",
  Y7 = "\u2288",
  J7 = "\u2281",
  Q7 = "\u2AB0\u0338",
  X7 = "\u22E1",
  e9 = "\u227F\u0338",
  t9 = "\u2283\u20D2",
  n9 = "\u2289",
  s9 = "\u2241",
  o9 = "\u2244",
  r9 = "\u2247",
  c9 = "\u2249",
  i9 = "\u2224",
  l9 = "\u2226",
  a9 = "\u2226",
  u9 = "\u2AFD\u20E5",
  f9 = "\u2202\u0338",
  d9 = "\u2A14",
  h9 = "\u2280",
  p9 = "\u22E0",
  _9 = "\u2280",
  m9 = "\u2AAF\u0338",
  g9 = "\u2AAF\u0338",
  v9 = "\u2933\u0338",
  b9 = "\u219B",
  k9 = "\u21CF",
  y9 = "\u219D\u0338",
  x9 = "\u219B",
  w9 = "\u21CF",
  C9 = "\u22EB",
  A9 = "\u22ED",
  E9 = "\u2281",
  S9 = "\u22E1",
  D9 = "\u2AB0\u0338",
  $9 = "\u{1D4A9}",
  P9 = "\u{1D4C3}",
  T9 = "\u2224",
  q9 = "\u2226",
  L9 = "\u2241",
  F9 = "\u2244",
  I9 = "\u2244",
  M9 = "\u2224",
  V9 = "\u2226",
  R9 = "\u22E2",
  N9 = "\u22E3",
  B9 = "\u2284",
  O9 = "\u2AC5\u0338",
  z9 = "\u2288",
  H9 = "\u2282\u20D2",
  U9 = "\u2288",
  j9 = "\u2AC5\u0338",
  G9 = "\u2281",
  K9 = "\u2AB0\u0338",
  Z9 = "\u2285",
  W9 = "\u2AC6\u0338",
  Y9 = "\u2289",
  J9 = "\u2283\u20D2",
  Q9 = "\u2289",
  X9 = "\u2AC6\u0338",
  eq = "\u2279",
  tq = "\xD1",
  nq = "\xF1",
  sq = "\u2278",
  oq = "\u22EA",
  rq = "\u22EC",
  cq = "\u22EB",
  iq = "\u22ED",
  lq = "\u039D",
  aq = "\u03BD",
  uq = "#",
  fq = "\u2116",
  dq = "\u2007",
  hq = "\u224D\u20D2",
  pq = "\u22AC",
  _q = "\u22AD",
  mq = "\u22AE",
  gq = "\u22AF",
  vq = "\u2265\u20D2",
  bq = ">\u20D2",
  kq = "\u2904",
  yq = "\u29DE",
  xq = "\u2902",
  wq = "\u2264\u20D2",
  Cq = "<\u20D2",
  Aq = "\u22B4\u20D2",
  Eq = "\u2903",
  Sq = "\u22B5\u20D2",
  Dq = "\u223C\u20D2",
  $q = "\u2923",
  Pq = "\u2196",
  Tq = "\u21D6",
  qq = "\u2196",
  Lq = "\u2927",
  Fq = "\xD3",
  Iq = "\xF3",
  Mq = "\u229B",
  Vq = "\xD4",
  Rq = "\xF4",
  Nq = "\u229A",
  Bq = "\u041E",
  Oq = "\u043E",
  zq = "\u229D",
  Hq = "\u0150",
  Uq = "\u0151",
  jq = "\u2A38",
  Gq = "\u2299",
  Kq = "\u29BC",
  Zq = "\u0152",
  Wq = "\u0153",
  Yq = "\u29BF",
  Jq = "\u{1D512}",
  Qq = "\u{1D52C}",
  Xq = "\u02DB",
  eL = "\xD2",
  tL = "\xF2",
  nL = "\u29C1",
  sL = "\u29B5",
  oL = "\u03A9",
  rL = "\u222E",
  cL = "\u21BA",
  iL = "\u29BE",
  lL = "\u29BB",
  aL = "\u203E",
  uL = "\u29C0",
  fL = "\u014C",
  dL = "\u014D",
  hL = "\u03A9",
  pL = "\u03C9",
  _L = "\u039F",
  mL = "\u03BF",
  gL = "\u29B6",
  vL = "\u2296",
  bL = "\u{1D546}",
  kL = "\u{1D560}",
  yL = "\u29B7",
  xL = "\u201C",
  wL = "\u2018",
  CL = "\u29B9",
  AL = "\u2295",
  EL = "\u21BB",
  SL = "\u2A54",
  DL = "\u2228",
  $L = "\u2A5D",
  PL = "\u2134",
  TL = "\u2134",
  qL = "\xAA",
  LL = "\xBA",
  FL = "\u22B6",
  IL = "\u2A56",
  ML = "\u2A57",
  VL = "\u2A5B",
  RL = "\u24C8",
  NL = "\u{1D4AA}",
  BL = "\u2134",
  OL = "\xD8",
  zL = "\xF8",
  HL = "\u2298",
  UL = "\xD5",
  jL = "\xF5",
  GL = "\u2A36",
  KL = "\u2A37",
  ZL = "\u2297",
  WL = "\xD6",
  YL = "\xF6",
  JL = "\u233D",
  QL = "\u203E",
  XL = "\u23DE",
  eF = "\u23B4",
  tF = "\u23DC",
  nF = "\xB6",
  sF = "\u2225",
  oF = "\u2225",
  rF = "\u2AF3",
  cF = "\u2AFD",
  iF = "\u2202",
  lF = "\u2202",
  aF = "\u041F",
  uF = "\u043F",
  fF = "%",
  dF = ".",
  hF = "\u2030",
  pF = "\u22A5",
  _F = "\u2031",
  mF = "\u{1D513}",
  gF = "\u{1D52D}",
  vF = "\u03A6",
  bF = "\u03C6",
  kF = "\u03D5",
  yF = "\u2133",
  xF = "\u260E",
  wF = "\u03A0",
  CF = "\u03C0",
  AF = "\u22D4",
  EF = "\u03D6",
  SF = "\u210F",
  DF = "\u210E",
  $F = "\u210F",
  PF = "\u2A23",
  TF = "\u229E",
  qF = "\u2A22",
  LF = "+",
  FF = "\u2214",
  IF = "\u2A25",
  MF = "\u2A72",
  VF = "\xB1",
  RF = "\xB1",
  NF = "\u2A26",
  BF = "\u2A27",
  OF = "\xB1",
  zF = "\u210C",
  HF = "\u2A15",
  UF = "\u{1D561}",
  jF = "\u2119",
  GF = "\xA3",
  KF = "\u2AB7",
  ZF = "\u2ABB",
  WF = "\u227A",
  YF = "\u227C",
  JF = "\u2AB7",
  QF = "\u227A",
  XF = "\u227C",
  eI = "\u227A",
  tI = "\u2AAF",
  nI = "\u227C",
  sI = "\u227E",
  oI = "\u2AAF",
  rI = "\u2AB9",
  cI = "\u2AB5",
  iI = "\u22E8",
  lI = "\u2AAF",
  aI = "\u2AB3",
  uI = "\u227E",
  fI = "\u2032",
  dI = "\u2033",
  hI = "\u2119",
  pI = "\u2AB9",
  _I = "\u2AB5",
  mI = "\u22E8",
  gI = "\u220F",
  vI = "\u220F",
  bI = "\u232E",
  kI = "\u2312",
  yI = "\u2313",
  xI = "\u221D",
  wI = "\u221D",
  CI = "\u2237",
  AI = "\u221D",
  EI = "\u227E",
  SI = "\u22B0",
  DI = "\u{1D4AB}",
  $I = "\u{1D4C5}",
  PI = "\u03A8",
  TI = "\u03C8",
  qI = "\u2008",
  LI = "\u{1D514}",
  FI = "\u{1D52E}",
  II = "\u2A0C",
  MI = "\u{1D562}",
  VI = "\u211A",
  RI = "\u2057",
  NI = "\u{1D4AC}",
  BI = "\u{1D4C6}",
  OI = "\u210D",
  zI = "\u2A16",
  HI = "?",
  UI = "\u225F",
  jI = '"',
  GI = '"',
  KI = "\u21DB",
  ZI = "\u223D\u0331",
  WI = "\u0154",
  YI = "\u0155",
  JI = "\u221A",
  QI = "\u29B3",
  XI = "\u27E9",
  eM = "\u27EB",
  tM = "\u2992",
  nM = "\u29A5",
  sM = "\u27E9",
  oM = "\xBB",
  rM = "\u2975",
  cM = "\u21E5",
  iM = "\u2920",
  lM = "\u2933",
  aM = "\u2192",
  uM = "\u21A0",
  fM = "\u21D2",
  dM = "\u291E",
  hM = "\u21AA",
  pM = "\u21AC",
  _M = "\u2945",
  mM = "\u2974",
  gM = "\u2916",
  vM = "\u21A3",
  bM = "\u219D",
  kM = "\u291A",
  yM = "\u291C",
  xM = "\u2236",
  wM = "\u211A",
  CM = "\u290D",
  AM = "\u290F",
  EM = "\u2910",
  SM = "\u2773",
  DM = "}",
  $M = "]",
  PM = "\u298C",
  TM = "\u298E",
  qM = "\u2990",
  LM = "\u0158",
  FM = "\u0159",
  IM = "\u0156",
  MM = "\u0157",
  VM = "\u2309",
  RM = "}",
  NM = "\u0420",
  BM = "\u0440",
  OM = "\u2937",
  zM = "\u2969",
  HM = "\u201D",
  UM = "\u201D",
  jM = "\u21B3",
  GM = "\u211C",
  KM = "\u211B",
  ZM = "\u211C",
  WM = "\u211D",
  YM = "\u211C",
  JM = "\u25AD",
  QM = "\xAE",
  XM = "\xAE",
  eV = "\u220B",
  tV = "\u21CB",
  nV = "\u296F",
  sV = "\u297D",
  oV = "\u230B",
  rV = "\u{1D52F}",
  cV = "\u211C",
  iV = "\u2964",
  lV = "\u21C1",
  aV = "\u21C0",
  uV = "\u296C",
  fV = "\u03A1",
  dV = "\u03C1",
  hV = "\u03F1",
  pV = "\u27E9",
  _V = "\u21E5",
  mV = "\u2192",
  gV = "\u2192",
  vV = "\u21D2",
  bV = "\u21C4",
  kV = "\u21A3",
  yV = "\u2309",
  xV = "\u27E7",
  wV = "\u295D",
  CV = "\u2955",
  AV = "\u21C2",
  EV = "\u230B",
  SV = "\u21C1",
  DV = "\u21C0",
  $V = "\u21C4",
  PV = "\u21CC",
  TV = "\u21C9",
  qV = "\u219D",
  LV = "\u21A6",
  FV = "\u22A2",
  IV = "\u295B",
  MV = "\u22CC",
  VV = "\u29D0",
  RV = "\u22B3",
  NV = "\u22B5",
  BV = "\u294F",
  OV = "\u295C",
  zV = "\u2954",
  HV = "\u21BE",
  UV = "\u2953",
  jV = "\u21C0",
  GV = "\u02DA",
  KV = "\u2253",
  ZV = "\u21C4",
  WV = "\u21CC",
  YV = "\u200F",
  JV = "\u23B1",
  QV = "\u23B1",
  XV = "\u2AEE",
  eR = "\u27ED",
  tR = "\u21FE",
  nR = "\u27E7",
  sR = "\u2986",
  oR = "\u{1D563}",
  rR = "\u211D",
  cR = "\u2A2E",
  iR = "\u2A35",
  lR = "\u2970",
  aR = ")",
  uR = "\u2994",
  fR = "\u2A12",
  dR = "\u21C9",
  hR = "\u21DB",
  pR = "\u203A",
  _R = "\u{1D4C7}",
  mR = "\u211B",
  gR = "\u21B1",
  vR = "\u21B1",
  bR = "]",
  kR = "\u2019",
  yR = "\u2019",
  xR = "\u22CC",
  wR = "\u22CA",
  CR = "\u25B9",
  AR = "\u22B5",
  ER = "\u25B8",
  SR = "\u29CE",
  DR = "\u29F4",
  $R = "\u2968",
  PR = "\u211E",
  TR = "\u015A",
  qR = "\u015B",
  LR = "\u201A",
  FR = "\u2AB8",
  IR = "\u0160",
  MR = "\u0161",
  VR = "\u2ABC",
  RR = "\u227B",
  NR = "\u227D",
  BR = "\u2AB0",
  OR = "\u2AB4",
  zR = "\u015E",
  HR = "\u015F",
  UR = "\u015C",
  jR = "\u015D",
  GR = "\u2ABA",
  KR = "\u2AB6",
  ZR = "\u22E9",
  WR = "\u2A13",
  YR = "\u227F",
  JR = "\u0421",
  QR = "\u0441",
  XR = "\u22A1",
  eN = "\u22C5",
  tN = "\u2A66",
  nN = "\u2925",
  sN = "\u2198",
  oN = "\u21D8",
  rN = "\u2198",
  cN = "\xA7",
  iN = ";",
  lN = "\u2929",
  aN = "\u2216",
  uN = "\u2216",
  fN = "\u2736",
  dN = "\u{1D516}",
  hN = "\u{1D530}",
  pN = "\u2322",
  _N = "\u266F",
  mN = "\u0429",
  gN = "\u0449",
  vN = "\u0428",
  bN = "\u0448",
  kN = "\u2193",
  yN = "\u2190",
  xN = "\u2223",
  wN = "\u2225",
  CN = "\u2192",
  AN = "\u2191",
  EN = "\xAD",
  SN = "\u03A3",
  DN = "\u03C3",
  $N = "\u03C2",
  PN = "\u03C2",
  TN = "\u223C",
  qN = "\u2A6A",
  LN = "\u2243",
  FN = "\u2243",
  IN = "\u2A9E",
  MN = "\u2AA0",
  VN = "\u2A9D",
  RN = "\u2A9F",
  NN = "\u2246",
  BN = "\u2A24",
  ON = "\u2972",
  zN = "\u2190",
  HN = "\u2218",
  UN = "\u2216",
  jN = "\u2A33",
  GN = "\u29E4",
  KN = "\u2223",
  ZN = "\u2323",
  WN = "\u2AAA",
  YN = "\u2AAC",
  JN = "\u2AAC\uFE00",
  QN = "\u042C",
  XN = "\u044C",
  eB = "\u233F",
  tB = "\u29C4",
  nB = "/",
  sB = "\u{1D54A}",
  oB = "\u{1D564}",
  rB = "\u2660",
  cB = "\u2660",
  iB = "\u2225",
  lB = "\u2293",
  aB = "\u2293\uFE00",
  uB = "\u2294",
  fB = "\u2294\uFE00",
  dB = "\u221A",
  hB = "\u228F",
  pB = "\u2291",
  _B = "\u228F",
  mB = "\u2291",
  gB = "\u2290",
  vB = "\u2292",
  bB = "\u2290",
  kB = "\u2292",
  yB = "\u25A1",
  xB = "\u25A1",
  wB = "\u2293",
  CB = "\u228F",
  AB = "\u2291",
  EB = "\u2290",
  SB = "\u2292",
  DB = "\u2294",
  $B = "\u25AA",
  PB = "\u25A1",
  TB = "\u25AA",
  qB = "\u2192",
  LB = "\u{1D4AE}",
  FB = "\u{1D4C8}",
  IB = "\u2216",
  MB = "\u2323",
  VB = "\u22C6",
  RB = "\u22C6",
  NB = "\u2606",
  BB = "\u2605",
  OB = "\u03F5",
  zB = "\u03D5",
  HB = "\xAF",
  UB = "\u2282",
  jB = "\u22D0",
  GB = "\u2ABD",
  KB = "\u2AC5",
  ZB = "\u2286",
  WB = "\u2AC3",
  YB = "\u2AC1",
  JB = "\u2ACB",
  QB = "\u228A",
  XB = "\u2ABF",
  eO = "\u2979",
  tO = "\u2282",
  nO = "\u22D0",
  sO = "\u2286",
  oO = "\u2AC5",
  rO = "\u2286",
  cO = "\u228A",
  iO = "\u2ACB",
  lO = "\u2AC7",
  aO = "\u2AD5",
  uO = "\u2AD3",
  fO = "\u2AB8",
  dO = "\u227B",
  hO = "\u227D",
  pO = "\u227B",
  _O = "\u2AB0",
  mO = "\u227D",
  gO = "\u227F",
  vO = "\u2AB0",
  bO = "\u2ABA",
  kO = "\u2AB6",
  yO = "\u22E9",
  xO = "\u227F",
  wO = "\u220B",
  CO = "\u2211",
  AO = "\u2211",
  EO = "\u266A",
  SO = "\xB9",
  DO = "\xB2",
  $O = "\xB3",
  PO = "\u2283",
  TO = "\u22D1",
  qO = "\u2ABE",
  LO = "\u2AD8",
  FO = "\u2AC6",
  IO = "\u2287",
  MO = "\u2AC4",
  VO = "\u2283",
  RO = "\u2287",
  NO = "\u27C9",
  BO = "\u2AD7",
  OO = "\u297B",
  zO = "\u2AC2",
  HO = "\u2ACC",
  UO = "\u228B",
  jO = "\u2AC0",
  GO = "\u2283",
  KO = "\u22D1",
  ZO = "\u2287",
  WO = "\u2AC6",
  YO = "\u228B",
  JO = "\u2ACC",
  QO = "\u2AC8",
  XO = "\u2AD4",
  ez = "\u2AD6",
  tz = "\u2926",
  nz = "\u2199",
  sz = "\u21D9",
  oz = "\u2199",
  rz = "\u292A",
  cz = "\xDF",
  iz = "	",
  lz = "\u2316",
  az = "\u03A4",
  uz = "\u03C4",
  fz = "\u23B4",
  dz = "\u0164",
  hz = "\u0165",
  pz = "\u0162",
  _z = "\u0163",
  mz = "\u0422",
  gz = "\u0442",
  vz = "\u20DB",
  bz = "\u2315",
  kz = "\u{1D517}",
  yz = "\u{1D531}",
  xz = "\u2234",
  wz = "\u2234",
  Cz = "\u2234",
  Az = "\u0398",
  Ez = "\u03B8",
  Sz = "\u03D1",
  Dz = "\u03D1",
  $z = "\u2248",
  Pz = "\u223C",
  Tz = "\u205F\u200A",
  qz = "\u2009",
  Lz = "\u2009",
  Fz = "\u2248",
  Iz = "\u223C",
  Mz = "\xDE",
  Vz = "\xFE",
  Rz = "\u02DC",
  Nz = "\u223C",
  Bz = "\u2243",
  Oz = "\u2245",
  zz = "\u2248",
  Hz = "\u2A31",
  Uz = "\u22A0",
  jz = "\xD7",
  Gz = "\u2A30",
  Kz = "\u222D",
  Zz = "\u2928",
  Wz = "\u2336",
  Yz = "\u2AF1",
  Jz = "\u22A4",
  Qz = "\u{1D54B}",
  Xz = "\u{1D565}",
  eH = "\u2ADA",
  tH = "\u2929",
  nH = "\u2034",
  sH = "\u2122",
  oH = "\u2122",
  rH = "\u25B5",
  cH = "\u25BF",
  iH = "\u25C3",
  lH = "\u22B4",
  aH = "\u225C",
  uH = "\u25B9",
  fH = "\u22B5",
  dH = "\u25EC",
  hH = "\u225C",
  pH = "\u2A3A",
  _H = "\u20DB",
  mH = "\u2A39",
  gH = "\u29CD",
  vH = "\u2A3B",
  bH = "\u23E2",
  kH = "\u{1D4AF}",
  yH = "\u{1D4C9}",
  xH = "\u0426",
  wH = "\u0446",
  CH = "\u040B",
  AH = "\u045B",
  EH = "\u0166",
  SH = "\u0167",
  DH = "\u226C",
  $H = "\u219E",
  PH = "\u21A0",
  TH = "\xDA",
  qH = "\xFA",
  LH = "\u2191",
  FH = "\u219F",
  IH = "\u21D1",
  MH = "\u2949",
  VH = "\u040E",
  RH = "\u045E",
  NH = "\u016C",
  BH = "\u016D",
  OH = "\xDB",
  zH = "\xFB",
  HH = "\u0423",
  UH = "\u0443",
  jH = "\u21C5",
  GH = "\u0170",
  KH = "\u0171",
  ZH = "\u296E",
  WH = "\u297E",
  YH = "\u{1D518}",
  JH = "\u{1D532}",
  QH = "\xD9",
  XH = "\xF9",
  eU = "\u2963",
  tU = "\u21BF",
  nU = "\u21BE",
  sU = "\u2580",
  oU = "\u231C",
  rU = "\u231C",
  cU = "\u230F",
  iU = "\u25F8",
  lU = "\u016A",
  aU = "\u016B",
  uU = "\xA8",
  fU = "_",
  dU = "\u23DF",
  hU = "\u23B5",
  pU = "\u23DD",
  _U = "\u22C3",
  mU = "\u228E",
  gU = "\u0172",
  vU = "\u0173",
  bU = "\u{1D54C}",
  kU = "\u{1D566}",
  yU = "\u2912",
  xU = "\u2191",
  wU = "\u2191",
  CU = "\u21D1",
  AU = "\u21C5",
  EU = "\u2195",
  SU = "\u2195",
  DU = "\u21D5",
  $U = "\u296E",
  PU = "\u21BF",
  TU = "\u21BE",
  qU = "\u228E",
  LU = "\u2196",
  FU = "\u2197",
  IU = "\u03C5",
  MU = "\u03D2",
  VU = "\u03D2",
  RU = "\u03A5",
  NU = "\u03C5",
  BU = "\u21A5",
  OU = "\u22A5",
  zU = "\u21C8",
  HU = "\u231D",
  UU = "\u231D",
  jU = "\u230E",
  GU = "\u016E",
  KU = "\u016F",
  ZU = "\u25F9",
  WU = "\u{1D4B0}",
  YU = "\u{1D4CA}",
  JU = "\u22F0",
  QU = "\u0168",
  XU = "\u0169",
  ej = "\u25B5",
  tj = "\u25B4",
  nj = "\u21C8",
  sj = "\xDC",
  oj = "\xFC",
  rj = "\u29A7",
  cj = "\u299C",
  ij = "\u03F5",
  lj = "\u03F0",
  aj = "\u2205",
  uj = "\u03D5",
  fj = "\u03D6",
  dj = "\u221D",
  hj = "\u2195",
  pj = "\u21D5",
  _j = "\u03F1",
  mj = "\u03C2",
  gj = "\u228A\uFE00",
  vj = "\u2ACB\uFE00",
  bj = "\u228B\uFE00",
  kj = "\u2ACC\uFE00",
  yj = "\u03D1",
  xj = "\u22B2",
  wj = "\u22B3",
  Cj = "\u2AE8",
  Aj = "\u2AEB",
  Ej = "\u2AE9",
  Sj = "\u0412",
  Dj = "\u0432",
  $j = "\u22A2",
  Pj = "\u22A8",
  Tj = "\u22A9",
  qj = "\u22AB",
  Lj = "\u2AE6",
  Fj = "\u22BB",
  Ij = "\u2228",
  Mj = "\u22C1",
  Vj = "\u225A",
  Rj = "\u22EE",
  Nj = "|",
  Bj = "\u2016",
  Oj = "|",
  zj = "\u2016",
  Hj = "\u2223",
  Uj = "|",
  jj = "\u2758",
  Gj = "\u2240",
  Kj = "\u200A",
  Zj = "\u{1D519}",
  Wj = "\u{1D533}",
  Yj = "\u22B2",
  Jj = "\u2282\u20D2",
  Qj = "\u2283\u20D2",
  Xj = "\u{1D54D}",
  eG = "\u{1D567}",
  tG = "\u221D",
  nG = "\u22B3",
  sG = "\u{1D4B1}",
  oG = "\u{1D4CB}",
  rG = "\u2ACB\uFE00",
  cG = "\u228A\uFE00",
  iG = "\u2ACC\uFE00",
  lG = "\u228B\uFE00",
  aG = "\u22AA",
  uG = "\u299A",
  fG = "\u0174",
  dG = "\u0175",
  hG = "\u2A5F",
  pG = "\u2227",
  _G = "\u22C0",
  mG = "\u2259",
  gG = "\u2118",
  vG = "\u{1D51A}",
  bG = "\u{1D534}",
  kG = "\u{1D54E}",
  yG = "\u{1D568}",
  xG = "\u2118",
  wG = "\u2240",
  CG = "\u2240",
  AG = "\u{1D4B2}",
  EG = "\u{1D4CC}",
  SG = "\u22C2",
  DG = "\u25EF",
  $G = "\u22C3",
  PG = "\u25BD",
  TG = "\u{1D51B}",
  qG = "\u{1D535}",
  LG = "\u27F7",
  FG = "\u27FA",
  IG = "\u039E",
  MG = "\u03BE",
  VG = "\u27F5",
  RG = "\u27F8",
  NG = "\u27FC",
  BG = "\u22FB",
  OG = "\u2A00",
  zG = "\u{1D54F}",
  HG = "\u{1D569}",
  UG = "\u2A01",
  jG = "\u2A02",
  GG = "\u27F6",
  KG = "\u27F9",
  ZG = "\u{1D4B3}",
  WG = "\u{1D4CD}",
  YG = "\u2A06",
  JG = "\u2A04",
  QG = "\u25B3",
  XG = "\u22C1",
  eK = "\u22C0",
  tK = "\xDD",
  nK = "\xFD",
  sK = "\u042F",
  oK = "\u044F",
  rK = "\u0176",
  cK = "\u0177",
  iK = "\u042B",
  lK = "\u044B",
  aK = "\xA5",
  uK = "\u{1D51C}",
  fK = "\u{1D536}",
  dK = "\u0407",
  hK = "\u0457",
  pK = "\u{1D550}",
  _K = "\u{1D56A}",
  mK = "\u{1D4B4}",
  gK = "\u{1D4CE}",
  vK = "\u042E",
  bK = "\u044E",
  kK = "\xFF",
  yK = "\u0178",
  xK = "\u0179",
  wK = "\u017A",
  CK = "\u017D",
  AK = "\u017E",
  EK = "\u0417",
  SK = "\u0437",
  DK = "\u017B",
  $K = "\u017C",
  PK = "\u2128",
  TK = "\u200B",
  qK = "\u0396",
  LK = "\u03B6",
  FK = "\u{1D537}",
  IK = "\u2128",
  MK = "\u0416",
  VK = "\u0436",
  RK = "\u21DD",
  NK = "\u{1D56B}",
  BK = "\u2124",
  OK = "\u{1D4B5}",
  zK = "\u{1D4CF}",
  HK = "\u200D",
  UK = "\u200C",
  jK = {
    Aacute: Dg,
    aacute: $g,
    Abreve: Pg,
    abreve: Tg,
    ac: qg,
    acd: Lg,
    acE: Fg,
    Acirc: Ig,
    acirc: Mg,
    acute: Vg,
    Acy: Rg,
    acy: Ng,
    AElig: Bg,
    aelig: Og,
    af: zg,
    Afr: Hg,
    afr: Ug,
    Agrave: jg,
    agrave: Gg,
    alefsym: Kg,
    aleph: Zg,
    Alpha: Wg,
    alpha: Yg,
    Amacr: Jg,
    amacr: Qg,
    amalg: Xg,
    amp: e1,
    AMP: t1,
    andand: n1,
    And: s1,
    and: o1,
    andd: r1,
    andslope: c1,
    andv: i1,
    ang: l1,
    ange: a1,
    angle: u1,
    angmsdaa: f1,
    angmsdab: d1,
    angmsdac: h1,
    angmsdad: p1,
    angmsdae: _1,
    angmsdaf: m1,
    angmsdag: g1,
    angmsdah: v1,
    angmsd: b1,
    angrt: k1,
    angrtvb: y1,
    angrtvbd: x1,
    angsph: w1,
    angst: C1,
    angzarr: A1,
    Aogon: E1,
    aogon: S1,
    Aopf: D1,
    aopf: $1,
    apacir: P1,
    ap: T1,
    apE: q1,
    ape: L1,
    apid: F1,
    apos: I1,
    ApplyFunction: M1,
    approx: V1,
    approxeq: R1,
    Aring: N1,
    aring: B1,
    Ascr: O1,
    ascr: z1,
    Assign: H1,
    ast: U1,
    asymp: j1,
    asympeq: G1,
    Atilde: K1,
    atilde: Z1,
    Auml: W1,
    auml: Y1,
    awconint: J1,
    awint: Q1,
    backcong: X1,
    backepsilon: ev,
    backprime: tv,
    backsim: nv,
    backsimeq: sv,
    Backslash: ov,
    Barv: rv,
    barvee: cv,
    barwed: iv,
    Barwed: lv,
    barwedge: av,
    bbrk: uv,
    bbrktbrk: fv,
    bcong: dv,
    Bcy: hv,
    bcy: pv,
    bdquo: _v,
    becaus: mv,
    because: gv,
    Because: vv,
    bemptyv: bv,
    bepsi: kv,
    bernou: yv,
    Bernoullis: xv,
    Beta: wv,
    beta: Cv,
    beth: Av,
    between: Ev,
    Bfr: Sv,
    bfr: Dv,
    bigcap: $v,
    bigcirc: Pv,
    bigcup: Tv,
    bigodot: qv,
    bigoplus: Lv,
    bigotimes: Fv,
    bigsqcup: Iv,
    bigstar: Mv,
    bigtriangledown: Vv,
    bigtriangleup: Rv,
    biguplus: Nv,
    bigvee: Bv,
    bigwedge: Ov,
    bkarow: zv,
    blacklozenge: Hv,
    blacksquare: Uv,
    blacktriangle: jv,
    blacktriangledown: Gv,
    blacktriangleleft: Kv,
    blacktriangleright: Zv,
    blank: Wv,
    blk12: Yv,
    blk14: Jv,
    blk34: Qv,
    block: Xv,
    bne: eb,
    bnequiv: tb,
    bNot: nb,
    bnot: sb,
    Bopf: ob,
    bopf: rb,
    bot: cb,
    bottom: ib,
    bowtie: lb,
    boxbox: ab,
    boxdl: ub,
    boxdL: fb,
    boxDl: db,
    boxDL: hb,
    boxdr: pb,
    boxdR: _b,
    boxDr: mb,
    boxDR: gb,
    boxh: vb,
    boxH: bb,
    boxhd: kb,
    boxHd: yb,
    boxhD: xb,
    boxHD: wb,
    boxhu: Cb,
    boxHu: Ab,
    boxhU: Eb,
    boxHU: Sb,
    boxminus: Db,
    boxplus: $b,
    boxtimes: Pb,
    boxul: Tb,
    boxuL: qb,
    boxUl: Lb,
    boxUL: Fb,
    boxur: Ib,
    boxuR: Mb,
    boxUr: Vb,
    boxUR: Rb,
    boxv: Nb,
    boxV: Bb,
    boxvh: Ob,
    boxvH: zb,
    boxVh: Hb,
    boxVH: Ub,
    boxvl: jb,
    boxvL: Gb,
    boxVl: Kb,
    boxVL: Zb,
    boxvr: Wb,
    boxvR: Yb,
    boxVr: Jb,
    boxVR: Qb,
    bprime: Xb,
    breve: e2,
    Breve: t2,
    brvbar: n2,
    bscr: s2,
    Bscr: o2,
    bsemi: r2,
    bsim: c2,
    bsime: i2,
    bsolb: l2,
    bsol: a2,
    bsolhsub: u2,
    bull: f2,
    bullet: d2,
    bump: h2,
    bumpE: p2,
    bumpe: _2,
    Bumpeq: m2,
    bumpeq: g2,
    Cacute: v2,
    cacute: b2,
    capand: k2,
    capbrcup: y2,
    capcap: x2,
    cap: w2,
    Cap: C2,
    capcup: A2,
    capdot: E2,
    CapitalDifferentialD: S2,
    caps: D2,
    caret: $2,
    caron: P2,
    Cayleys: T2,
    ccaps: q2,
    Ccaron: L2,
    ccaron: F2,
    Ccedil: I2,
    ccedil: M2,
    Ccirc: V2,
    ccirc: R2,
    Cconint: N2,
    ccups: B2,
    ccupssm: O2,
    Cdot: z2,
    cdot: H2,
    cedil: U2,
    Cedilla: j2,
    cemptyv: G2,
    cent: K2,
    centerdot: Z2,
    CenterDot: W2,
    cfr: Y2,
    Cfr: J2,
    CHcy: Q2,
    chcy: X2,
    check: ek,
    checkmark: tk,
    Chi: nk,
    chi: sk,
    circ: ok,
    circeq: rk,
    circlearrowleft: ck,
    circlearrowright: ik,
    circledast: lk,
    circledcirc: ak,
    circleddash: uk,
    CircleDot: fk,
    circledR: dk,
    circledS: hk,
    CircleMinus: pk,
    CirclePlus: _k,
    CircleTimes: mk,
    cir: gk,
    cirE: vk,
    cire: bk,
    cirfnint: kk,
    cirmid: yk,
    cirscir: xk,
    ClockwiseContourIntegral: wk,
    CloseCurlyDoubleQuote: Ck,
    CloseCurlyQuote: Ak,
    clubs: Ek,
    clubsuit: Sk,
    colon: Dk,
    Colon: $k,
    Colone: Pk,
    colone: Tk,
    coloneq: qk,
    comma: Lk,
    commat: Fk,
    comp: Ik,
    compfn: Mk,
    complement: Vk,
    complexes: Rk,
    cong: Nk,
    congdot: Bk,
    Congruent: Ok,
    conint: zk,
    Conint: Hk,
    ContourIntegral: Uk,
    copf: jk,
    Copf: Gk,
    coprod: Kk,
    Coproduct: Zk,
    copy: Wk,
    COPY: Yk,
    copysr: Jk,
    CounterClockwiseContourIntegral: Qk,
    crarr: Xk,
    cross: ey,
    Cross: ty,
    Cscr: ny,
    cscr: sy,
    csub: oy,
    csube: ry,
    csup: cy,
    csupe: iy,
    ctdot: ly,
    cudarrl: ay,
    cudarrr: uy,
    cuepr: fy,
    cuesc: dy,
    cularr: hy,
    cularrp: py,
    cupbrcap: _y,
    cupcap: my,
    CupCap: gy,
    cup: vy,
    Cup: by,
    cupcup: ky,
    cupdot: yy,
    cupor: xy,
    cups: wy,
    curarr: Cy,
    curarrm: Ay,
    curlyeqprec: Ey,
    curlyeqsucc: Sy,
    curlyvee: Dy,
    curlywedge: $y,
    curren: Py,
    curvearrowleft: Ty,
    curvearrowright: qy,
    cuvee: Ly,
    cuwed: Fy,
    cwconint: Iy,
    cwint: My,
    cylcty: Vy,
    dagger: Ry,
    Dagger: Ny,
    daleth: By,
    darr: Oy,
    Darr: zy,
    dArr: Hy,
    dash: Uy,
    Dashv: jy,
    dashv: Gy,
    dbkarow: Ky,
    dblac: Zy,
    Dcaron: Wy,
    dcaron: Yy,
    Dcy: Jy,
    dcy: Qy,
    ddagger: Xy,
    ddarr: ex,
    DD: tx,
    dd: nx,
    DDotrahd: sx,
    ddotseq: ox,
    deg: rx,
    Del: cx,
    Delta: ix,
    delta: lx,
    demptyv: ax,
    dfisht: ux,
    Dfr: fx,
    dfr: dx,
    dHar: hx,
    dharl: px,
    dharr: _x,
    DiacriticalAcute: mx,
    DiacriticalDot: gx,
    DiacriticalDoubleAcute: vx,
    DiacriticalGrave: bx,
    DiacriticalTilde: kx,
    diam: yx,
    diamond: xx,
    Diamond: wx,
    diamondsuit: Cx,
    diams: Ax,
    die: Ex,
    DifferentialD: Sx,
    digamma: Dx,
    disin: $x,
    div: Px,
    divide: Tx,
    divideontimes: qx,
    divonx: Lx,
    DJcy: Fx,
    djcy: Ix,
    dlcorn: Mx,
    dlcrop: Vx,
    dollar: Rx,
    Dopf: Nx,
    dopf: Bx,
    Dot: Ox,
    dot: zx,
    DotDot: Hx,
    doteq: Ux,
    doteqdot: jx,
    DotEqual: Gx,
    dotminus: Kx,
    dotplus: Zx,
    dotsquare: Wx,
    doublebarwedge: Yx,
    DoubleContourIntegral: Jx,
    DoubleDot: Qx,
    DoubleDownArrow: Xx,
    DoubleLeftArrow: ew,
    DoubleLeftRightArrow: tw,
    DoubleLeftTee: nw,
    DoubleLongLeftArrow: sw,
    DoubleLongLeftRightArrow: ow,
    DoubleLongRightArrow: rw,
    DoubleRightArrow: cw,
    DoubleRightTee: iw,
    DoubleUpArrow: lw,
    DoubleUpDownArrow: aw,
    DoubleVerticalBar: uw,
    DownArrowBar: fw,
    downarrow: dw,
    DownArrow: hw,
    Downarrow: pw,
    DownArrowUpArrow: _w,
    DownBreve: mw,
    downdownarrows: gw,
    downharpoonleft: vw,
    downharpoonright: bw,
    DownLeftRightVector: kw,
    DownLeftTeeVector: yw,
    DownLeftVectorBar: xw,
    DownLeftVector: ww,
    DownRightTeeVector: Cw,
    DownRightVectorBar: Aw,
    DownRightVector: Ew,
    DownTeeArrow: Sw,
    DownTee: Dw,
    drbkarow: $w,
    drcorn: Pw,
    drcrop: Tw,
    Dscr: qw,
    dscr: Lw,
    DScy: Fw,
    dscy: Iw,
    dsol: Mw,
    Dstrok: Vw,
    dstrok: Rw,
    dtdot: Nw,
    dtri: Bw,
    dtrif: Ow,
    duarr: zw,
    duhar: Hw,
    dwangle: Uw,
    DZcy: jw,
    dzcy: Gw,
    dzigrarr: Kw,
    Eacute: Zw,
    eacute: Ww,
    easter: Yw,
    Ecaron: Jw,
    ecaron: Qw,
    Ecirc: Xw,
    ecirc: eC,
    ecir: tC,
    ecolon: nC,
    Ecy: sC,
    ecy: oC,
    eDDot: rC,
    Edot: cC,
    edot: iC,
    eDot: lC,
    ee: aC,
    efDot: uC,
    Efr: fC,
    efr: dC,
    eg: hC,
    Egrave: pC,
    egrave: _C,
    egs: mC,
    egsdot: gC,
    el: vC,
    Element: bC,
    elinters: kC,
    ell: yC,
    els: xC,
    elsdot: wC,
    Emacr: CC,
    emacr: AC,
    empty: EC,
    emptyset: SC,
    EmptySmallSquare: DC,
    emptyv: $C,
    EmptyVerySmallSquare: PC,
    emsp13: TC,
    emsp14: qC,
    emsp: LC,
    ENG: FC,
    eng: IC,
    ensp: MC,
    Eogon: VC,
    eogon: RC,
    Eopf: NC,
    eopf: BC,
    epar: OC,
    eparsl: zC,
    eplus: HC,
    epsi: UC,
    Epsilon: jC,
    epsilon: GC,
    epsiv: KC,
    eqcirc: ZC,
    eqcolon: WC,
    eqsim: YC,
    eqslantgtr: JC,
    eqslantless: QC,
    Equal: XC,
    equals: e3,
    EqualTilde: t3,
    equest: n3,
    Equilibrium: s3,
    equiv: o3,
    equivDD: r3,
    eqvparsl: c3,
    erarr: i3,
    erDot: l3,
    escr: a3,
    Escr: u3,
    esdot: f3,
    Esim: d3,
    esim: h3,
    Eta: p3,
    eta: _3,
    ETH: m3,
    eth: g3,
    Euml: v3,
    euml: b3,
    euro: k3,
    excl: y3,
    exist: x3,
    Exists: w3,
    expectation: C3,
    exponentiale: A3,
    ExponentialE: E3,
    fallingdotseq: S3,
    Fcy: D3,
    fcy: $3,
    female: P3,
    ffilig: T3,
    fflig: q3,
    ffllig: L3,
    Ffr: F3,
    ffr: I3,
    filig: M3,
    FilledSmallSquare: V3,
    FilledVerySmallSquare: R3,
    fjlig: N3,
    flat: B3,
    fllig: O3,
    fltns: z3,
    fnof: H3,
    Fopf: U3,
    fopf: j3,
    forall: G3,
    ForAll: K3,
    fork: Z3,
    forkv: W3,
    Fouriertrf: Y3,
    fpartint: J3,
    frac12: Q3,
    frac13: X3,
    frac14: e4,
    frac15: t4,
    frac16: n4,
    frac18: s4,
    frac23: o4,
    frac25: r4,
    frac34: c4,
    frac35: i4,
    frac38: l4,
    frac45: a4,
    frac56: u4,
    frac58: f4,
    frac78: d4,
    frasl: h4,
    frown: p4,
    fscr: _4,
    Fscr: m4,
    gacute: g4,
    Gamma: v4,
    gamma: b4,
    Gammad: k4,
    gammad: y4,
    gap: x4,
    Gbreve: w4,
    gbreve: C4,
    Gcedil: A4,
    Gcirc: E4,
    gcirc: S4,
    Gcy: D4,
    gcy: $4,
    Gdot: P4,
    gdot: T4,
    ge: q4,
    gE: L4,
    gEl: F4,
    gel: I4,
    geq: M4,
    geqq: V4,
    geqslant: R4,
    gescc: N4,
    ges: B4,
    gesdot: O4,
    gesdoto: z4,
    gesdotol: H4,
    gesl: U4,
    gesles: j4,
    Gfr: G4,
    gfr: K4,
    gg: Z4,
    Gg: W4,
    ggg: Y4,
    gimel: J4,
    GJcy: Q4,
    gjcy: X4,
    gla: e5,
    gl: t5,
    glE: n5,
    glj: s5,
    gnap: o5,
    gnapprox: r5,
    gne: c5,
    gnE: i5,
    gneq: l5,
    gneqq: a5,
    gnsim: u5,
    Gopf: f5,
    gopf: d5,
    grave: h5,
    GreaterEqual: p5,
    GreaterEqualLess: _5,
    GreaterFullEqual: m5,
    GreaterGreater: g5,
    GreaterLess: v5,
    GreaterSlantEqual: b5,
    GreaterTilde: k5,
    Gscr: y5,
    gscr: x5,
    gsim: w5,
    gsime: C5,
    gsiml: A5,
    gtcc: E5,
    gtcir: S5,
    gt: D5,
    GT: $5,
    Gt: P5,
    gtdot: T5,
    gtlPar: q5,
    gtquest: L5,
    gtrapprox: F5,
    gtrarr: I5,
    gtrdot: M5,
    gtreqless: V5,
    gtreqqless: R5,
    gtrless: N5,
    gtrsim: B5,
    gvertneqq: O5,
    gvnE: z5,
    Hacek: H5,
    hairsp: U5,
    half: j5,
    hamilt: G5,
    HARDcy: K5,
    hardcy: Z5,
    harrcir: W5,
    harr: Y5,
    hArr: J5,
    harrw: Q5,
    Hat: X5,
    hbar: eA,
    Hcirc: tA,
    hcirc: nA,
    hearts: sA,
    heartsuit: oA,
    hellip: rA,
    hercon: cA,
    hfr: iA,
    Hfr: lA,
    HilbertSpace: aA,
    hksearow: uA,
    hkswarow: fA,
    hoarr: dA,
    homtht: hA,
    hookleftarrow: pA,
    hookrightarrow: _A,
    hopf: mA,
    Hopf: gA,
    horbar: vA,
    HorizontalLine: bA,
    hscr: kA,
    Hscr: yA,
    hslash: xA,
    Hstrok: wA,
    hstrok: CA,
    HumpDownHump: AA,
    HumpEqual: EA,
    hybull: SA,
    hyphen: DA,
    Iacute: $A,
    iacute: PA,
    ic: TA,
    Icirc: qA,
    icirc: LA,
    Icy: FA,
    icy: IA,
    Idot: MA,
    IEcy: VA,
    iecy: RA,
    iexcl: NA,
    iff: BA,
    ifr: OA,
    Ifr: zA,
    Igrave: HA,
    igrave: UA,
    ii: jA,
    iiiint: GA,
    iiint: KA,
    iinfin: ZA,
    iiota: WA,
    IJlig: YA,
    ijlig: JA,
    Imacr: QA,
    imacr: XA,
    image: e6,
    ImaginaryI: t6,
    imagline: n6,
    imagpart: s6,
    imath: o6,
    Im: r6,
    imof: c6,
    imped: i6,
    Implies: l6,
    incare: a6,
    in: "\u2208",
    infin: u6,
    infintie: f6,
    inodot: d6,
    intcal: h6,
    int: p6,
    Int: _6,
    integers: m6,
    Integral: g6,
    intercal: v6,
    Intersection: b6,
    intlarhk: k6,
    intprod: y6,
    InvisibleComma: x6,
    InvisibleTimes: w6,
    IOcy: C6,
    iocy: A6,
    Iogon: E6,
    iogon: S6,
    Iopf: D6,
    iopf: $6,
    Iota: P6,
    iota: T6,
    iprod: q6,
    iquest: L6,
    iscr: F6,
    Iscr: I6,
    isin: M6,
    isindot: V6,
    isinE: R6,
    isins: N6,
    isinsv: B6,
    isinv: O6,
    it: z6,
    Itilde: H6,
    itilde: U6,
    Iukcy: j6,
    iukcy: G6,
    Iuml: K6,
    iuml: Z6,
    Jcirc: W6,
    jcirc: Y6,
    Jcy: J6,
    jcy: Q6,
    Jfr: X6,
    jfr: eE,
    jmath: tE,
    Jopf: nE,
    jopf: sE,
    Jscr: oE,
    jscr: rE,
    Jsercy: cE,
    jsercy: iE,
    Jukcy: lE,
    jukcy: aE,
    Kappa: uE,
    kappa: fE,
    kappav: dE,
    Kcedil: hE,
    kcedil: pE,
    Kcy: _E,
    kcy: mE,
    Kfr: gE,
    kfr: vE,
    kgreen: bE,
    KHcy: kE,
    khcy: yE,
    KJcy: xE,
    kjcy: wE,
    Kopf: CE,
    kopf: AE,
    Kscr: EE,
    kscr: SE,
    lAarr: DE,
    Lacute: $E,
    lacute: PE,
    laemptyv: TE,
    lagran: qE,
    Lambda: LE,
    lambda: FE,
    lang: IE,
    Lang: ME,
    langd: VE,
    langle: RE,
    lap: NE,
    Laplacetrf: BE,
    laquo: OE,
    larrb: zE,
    larrbfs: HE,
    larr: UE,
    Larr: jE,
    lArr: GE,
    larrfs: KE,
    larrhk: ZE,
    larrlp: WE,
    larrpl: YE,
    larrsim: JE,
    larrtl: QE,
    latail: XE,
    lAtail: e8,
    lat: t8,
    late: n8,
    lates: s8,
    lbarr: o8,
    lBarr: r8,
    lbbrk: c8,
    lbrace: i8,
    lbrack: l8,
    lbrke: a8,
    lbrksld: u8,
    lbrkslu: f8,
    Lcaron: d8,
    lcaron: h8,
    Lcedil: p8,
    lcedil: _8,
    lceil: m8,
    lcub: g8,
    Lcy: v8,
    lcy: b8,
    ldca: k8,
    ldquo: y8,
    ldquor: x8,
    ldrdhar: w8,
    ldrushar: C8,
    ldsh: A8,
    le: E8,
    lE: S8,
    LeftAngleBracket: D8,
    LeftArrowBar: $8,
    leftarrow: P8,
    LeftArrow: T8,
    Leftarrow: q8,
    LeftArrowRightArrow: L8,
    leftarrowtail: F8,
    LeftCeiling: I8,
    LeftDoubleBracket: M8,
    LeftDownTeeVector: V8,
    LeftDownVectorBar: R8,
    LeftDownVector: N8,
    LeftFloor: B8,
    leftharpoondown: O8,
    leftharpoonup: z8,
    leftleftarrows: H8,
    leftrightarrow: U8,
    LeftRightArrow: j8,
    Leftrightarrow: G8,
    leftrightarrows: K8,
    leftrightharpoons: Z8,
    leftrightsquigarrow: W8,
    LeftRightVector: Y8,
    LeftTeeArrow: J8,
    LeftTee: Q8,
    LeftTeeVector: X8,
    leftthreetimes: eS,
    LeftTriangleBar: tS,
    LeftTriangle: nS,
    LeftTriangleEqual: sS,
    LeftUpDownVector: oS,
    LeftUpTeeVector: rS,
    LeftUpVectorBar: cS,
    LeftUpVector: iS,
    LeftVectorBar: lS,
    LeftVector: aS,
    lEg: uS,
    leg: fS,
    leq: dS,
    leqq: hS,
    leqslant: pS,
    lescc: _S,
    les: mS,
    lesdot: gS,
    lesdoto: vS,
    lesdotor: bS,
    lesg: kS,
    lesges: yS,
    lessapprox: xS,
    lessdot: wS,
    lesseqgtr: CS,
    lesseqqgtr: AS,
    LessEqualGreater: ES,
    LessFullEqual: SS,
    LessGreater: DS,
    lessgtr: $S,
    LessLess: PS,
    lesssim: TS,
    LessSlantEqual: qS,
    LessTilde: LS,
    lfisht: FS,
    lfloor: IS,
    Lfr: MS,
    lfr: VS,
    lg: RS,
    lgE: NS,
    lHar: BS,
    lhard: OS,
    lharu: zS,
    lharul: HS,
    lhblk: US,
    LJcy: jS,
    ljcy: GS,
    llarr: KS,
    ll: ZS,
    Ll: WS,
    llcorner: YS,
    Lleftarrow: JS,
    llhard: QS,
    lltri: XS,
    Lmidot: eD,
    lmidot: tD,
    lmoustache: nD,
    lmoust: sD,
    lnap: oD,
    lnapprox: rD,
    lne: cD,
    lnE: iD,
    lneq: lD,
    lneqq: aD,
    lnsim: uD,
    loang: fD,
    loarr: dD,
    lobrk: hD,
    longleftarrow: pD,
    LongLeftArrow: _D,
    Longleftarrow: mD,
    longleftrightarrow: gD,
    LongLeftRightArrow: vD,
    Longleftrightarrow: bD,
    longmapsto: kD,
    longrightarrow: yD,
    LongRightArrow: xD,
    Longrightarrow: wD,
    looparrowleft: CD,
    looparrowright: AD,
    lopar: ED,
    Lopf: SD,
    lopf: DD,
    loplus: $D,
    lotimes: PD,
    lowast: TD,
    lowbar: qD,
    LowerLeftArrow: LD,
    LowerRightArrow: FD,
    loz: ID,
    lozenge: MD,
    lozf: VD,
    lpar: RD,
    lparlt: ND,
    lrarr: BD,
    lrcorner: OD,
    lrhar: zD,
    lrhard: HD,
    lrm: UD,
    lrtri: jD,
    lsaquo: GD,
    lscr: KD,
    Lscr: ZD,
    lsh: WD,
    Lsh: YD,
    lsim: JD,
    lsime: QD,
    lsimg: XD,
    lsqb: e$,
    lsquo: t$,
    lsquor: n$,
    Lstrok: s$,
    lstrok: o$,
    ltcc: r$,
    ltcir: c$,
    lt: i$,
    LT: l$,
    Lt: a$,
    ltdot: u$,
    lthree: f$,
    ltimes: d$,
    ltlarr: h$,
    ltquest: p$,
    ltri: _$,
    ltrie: m$,
    ltrif: g$,
    ltrPar: v$,
    lurdshar: b$,
    luruhar: k$,
    lvertneqq: y$,
    lvnE: x$,
    macr: w$,
    male: C$,
    malt: A$,
    maltese: E$,
    Map: "\u2905",
    map: S$,
    mapsto: D$,
    mapstodown: $$,
    mapstoleft: P$,
    mapstoup: T$,
    marker: q$,
    mcomma: L$,
    Mcy: F$,
    mcy: I$,
    mdash: M$,
    mDDot: V$,
    measuredangle: R$,
    MediumSpace: N$,
    Mellintrf: B$,
    Mfr: O$,
    mfr: z$,
    mho: H$,
    micro: U$,
    midast: j$,
    midcir: G$,
    mid: K$,
    middot: Z$,
    minusb: W$,
    minus: Y$,
    minusd: J$,
    minusdu: Q$,
    MinusPlus: X$,
    mlcp: eP,
    mldr: tP,
    mnplus: nP,
    models: sP,
    Mopf: oP,
    mopf: rP,
    mp: cP,
    mscr: iP,
    Mscr: lP,
    mstpos: aP,
    Mu: uP,
    mu: fP,
    multimap: dP,
    mumap: hP,
    nabla: pP,
    Nacute: _P,
    nacute: mP,
    nang: gP,
    nap: vP,
    napE: bP,
    napid: kP,
    napos: yP,
    napprox: xP,
    natural: wP,
    naturals: CP,
    natur: AP,
    nbsp: EP,
    nbump: SP,
    nbumpe: DP,
    ncap: $P,
    Ncaron: PP,
    ncaron: TP,
    Ncedil: qP,
    ncedil: LP,
    ncong: FP,
    ncongdot: IP,
    ncup: MP,
    Ncy: VP,
    ncy: RP,
    ndash: NP,
    nearhk: BP,
    nearr: OP,
    neArr: zP,
    nearrow: HP,
    ne: UP,
    nedot: jP,
    NegativeMediumSpace: GP,
    NegativeThickSpace: KP,
    NegativeThinSpace: ZP,
    NegativeVeryThinSpace: WP,
    nequiv: YP,
    nesear: JP,
    nesim: QP,
    NestedGreaterGreater: XP,
    NestedLessLess: eT,
    NewLine: tT,
    nexist: nT,
    nexists: sT,
    Nfr: oT,
    nfr: rT,
    ngE: cT,
    nge: iT,
    ngeq: lT,
    ngeqq: aT,
    ngeqslant: uT,
    nges: fT,
    nGg: dT,
    ngsim: hT,
    nGt: pT,
    ngt: _T,
    ngtr: mT,
    nGtv: gT,
    nharr: vT,
    nhArr: bT,
    nhpar: kT,
    ni: yT,
    nis: xT,
    nisd: wT,
    niv: CT,
    NJcy: AT,
    njcy: ET,
    nlarr: ST,
    nlArr: DT,
    nldr: $T,
    nlE: PT,
    nle: TT,
    nleftarrow: qT,
    nLeftarrow: LT,
    nleftrightarrow: FT,
    nLeftrightarrow: IT,
    nleq: MT,
    nleqq: VT,
    nleqslant: RT,
    nles: NT,
    nless: BT,
    nLl: OT,
    nlsim: zT,
    nLt: HT,
    nlt: UT,
    nltri: jT,
    nltrie: GT,
    nLtv: KT,
    nmid: ZT,
    NoBreak: WT,
    NonBreakingSpace: YT,
    nopf: JT,
    Nopf: QT,
    Not: XT,
    not: e7,
    NotCongruent: t7,
    NotCupCap: n7,
    NotDoubleVerticalBar: s7,
    NotElement: o7,
    NotEqual: r7,
    NotEqualTilde: c7,
    NotExists: i7,
    NotGreater: l7,
    NotGreaterEqual: a7,
    NotGreaterFullEqual: u7,
    NotGreaterGreater: f7,
    NotGreaterLess: d7,
    NotGreaterSlantEqual: h7,
    NotGreaterTilde: p7,
    NotHumpDownHump: _7,
    NotHumpEqual: m7,
    notin: g7,
    notindot: v7,
    notinE: b7,
    notinva: k7,
    notinvb: y7,
    notinvc: x7,
    NotLeftTriangleBar: w7,
    NotLeftTriangle: C7,
    NotLeftTriangleEqual: A7,
    NotLess: E7,
    NotLessEqual: S7,
    NotLessGreater: D7,
    NotLessLess: $7,
    NotLessSlantEqual: P7,
    NotLessTilde: T7,
    NotNestedGreaterGreater: q7,
    NotNestedLessLess: L7,
    notni: F7,
    notniva: I7,
    notnivb: M7,
    notnivc: V7,
    NotPrecedes: R7,
    NotPrecedesEqual: N7,
    NotPrecedesSlantEqual: B7,
    NotReverseElement: O7,
    NotRightTriangleBar: z7,
    NotRightTriangle: H7,
    NotRightTriangleEqual: U7,
    NotSquareSubset: j7,
    NotSquareSubsetEqual: G7,
    NotSquareSuperset: K7,
    NotSquareSupersetEqual: Z7,
    NotSubset: W7,
    NotSubsetEqual: Y7,
    NotSucceeds: J7,
    NotSucceedsEqual: Q7,
    NotSucceedsSlantEqual: X7,
    NotSucceedsTilde: e9,
    NotSuperset: t9,
    NotSupersetEqual: n9,
    NotTilde: s9,
    NotTildeEqual: o9,
    NotTildeFullEqual: r9,
    NotTildeTilde: c9,
    NotVerticalBar: i9,
    nparallel: l9,
    npar: a9,
    nparsl: u9,
    npart: f9,
    npolint: d9,
    npr: h9,
    nprcue: p9,
    nprec: _9,
    npreceq: m9,
    npre: g9,
    nrarrc: v9,
    nrarr: b9,
    nrArr: k9,
    nrarrw: y9,
    nrightarrow: x9,
    nRightarrow: w9,
    nrtri: C9,
    nrtrie: A9,
    nsc: E9,
    nsccue: S9,
    nsce: D9,
    Nscr: $9,
    nscr: P9,
    nshortmid: T9,
    nshortparallel: q9,
    nsim: L9,
    nsime: F9,
    nsimeq: I9,
    nsmid: M9,
    nspar: V9,
    nsqsube: R9,
    nsqsupe: N9,
    nsub: B9,
    nsubE: O9,
    nsube: z9,
    nsubset: H9,
    nsubseteq: U9,
    nsubseteqq: j9,
    nsucc: G9,
    nsucceq: K9,
    nsup: Z9,
    nsupE: W9,
    nsupe: Y9,
    nsupset: J9,
    nsupseteq: Q9,
    nsupseteqq: X9,
    ntgl: eq,
    Ntilde: tq,
    ntilde: nq,
    ntlg: sq,
    ntriangleleft: oq,
    ntrianglelefteq: rq,
    ntriangleright: cq,
    ntrianglerighteq: iq,
    Nu: lq,
    nu: aq,
    num: uq,
    numero: fq,
    numsp: dq,
    nvap: hq,
    nvdash: pq,
    nvDash: _q,
    nVdash: mq,
    nVDash: gq,
    nvge: vq,
    nvgt: bq,
    nvHarr: kq,
    nvinfin: yq,
    nvlArr: xq,
    nvle: wq,
    nvlt: Cq,
    nvltrie: Aq,
    nvrArr: Eq,
    nvrtrie: Sq,
    nvsim: Dq,
    nwarhk: $q,
    nwarr: Pq,
    nwArr: Tq,
    nwarrow: qq,
    nwnear: Lq,
    Oacute: Fq,
    oacute: Iq,
    oast: Mq,
    Ocirc: Vq,
    ocirc: Rq,
    ocir: Nq,
    Ocy: Bq,
    ocy: Oq,
    odash: zq,
    Odblac: Hq,
    odblac: Uq,
    odiv: jq,
    odot: Gq,
    odsold: Kq,
    OElig: Zq,
    oelig: Wq,
    ofcir: Yq,
    Ofr: Jq,
    ofr: Qq,
    ogon: Xq,
    Ograve: eL,
    ograve: tL,
    ogt: nL,
    ohbar: sL,
    ohm: oL,
    oint: rL,
    olarr: cL,
    olcir: iL,
    olcross: lL,
    oline: aL,
    olt: uL,
    Omacr: fL,
    omacr: dL,
    Omega: hL,
    omega: pL,
    Omicron: _L,
    omicron: mL,
    omid: gL,
    ominus: vL,
    Oopf: bL,
    oopf: kL,
    opar: yL,
    OpenCurlyDoubleQuote: xL,
    OpenCurlyQuote: wL,
    operp: CL,
    oplus: AL,
    orarr: EL,
    Or: SL,
    or: DL,
    ord: $L,
    order: PL,
    orderof: TL,
    ordf: qL,
    ordm: LL,
    origof: FL,
    oror: IL,
    orslope: ML,
    orv: VL,
    oS: RL,
    Oscr: NL,
    oscr: BL,
    Oslash: OL,
    oslash: zL,
    osol: HL,
    Otilde: UL,
    otilde: jL,
    otimesas: GL,
    Otimes: KL,
    otimes: ZL,
    Ouml: WL,
    ouml: YL,
    ovbar: JL,
    OverBar: QL,
    OverBrace: XL,
    OverBracket: eF,
    OverParenthesis: tF,
    para: nF,
    parallel: sF,
    par: oF,
    parsim: rF,
    parsl: cF,
    part: iF,
    PartialD: lF,
    Pcy: aF,
    pcy: uF,
    percnt: fF,
    period: dF,
    permil: hF,
    perp: pF,
    pertenk: _F,
    Pfr: mF,
    pfr: gF,
    Phi: vF,
    phi: bF,
    phiv: kF,
    phmmat: yF,
    phone: xF,
    Pi: wF,
    pi: CF,
    pitchfork: AF,
    piv: EF,
    planck: SF,
    planckh: DF,
    plankv: $F,
    plusacir: PF,
    plusb: TF,
    pluscir: qF,
    plus: LF,
    plusdo: FF,
    plusdu: IF,
    pluse: MF,
    PlusMinus: VF,
    plusmn: RF,
    plussim: NF,
    plustwo: BF,
    pm: OF,
    Poincareplane: zF,
    pointint: HF,
    popf: UF,
    Popf: jF,
    pound: GF,
    prap: KF,
    Pr: ZF,
    pr: WF,
    prcue: YF,
    precapprox: JF,
    prec: QF,
    preccurlyeq: XF,
    Precedes: eI,
    PrecedesEqual: tI,
    PrecedesSlantEqual: nI,
    PrecedesTilde: sI,
    preceq: oI,
    precnapprox: rI,
    precneqq: cI,
    precnsim: iI,
    pre: lI,
    prE: aI,
    precsim: uI,
    prime: fI,
    Prime: dI,
    primes: hI,
    prnap: pI,
    prnE: _I,
    prnsim: mI,
    prod: gI,
    Product: vI,
    profalar: bI,
    profline: kI,
    profsurf: yI,
    prop: xI,
    Proportional: wI,
    Proportion: CI,
    propto: AI,
    prsim: EI,
    prurel: SI,
    Pscr: DI,
    pscr: $I,
    Psi: PI,
    psi: TI,
    puncsp: qI,
    Qfr: LI,
    qfr: FI,
    qint: II,
    qopf: MI,
    Qopf: VI,
    qprime: RI,
    Qscr: NI,
    qscr: BI,
    quaternions: OI,
    quatint: zI,
    quest: HI,
    questeq: UI,
    quot: jI,
    QUOT: GI,
    rAarr: KI,
    race: ZI,
    Racute: WI,
    racute: YI,
    radic: JI,
    raemptyv: QI,
    rang: XI,
    Rang: eM,
    rangd: tM,
    range: nM,
    rangle: sM,
    raquo: oM,
    rarrap: rM,
    rarrb: cM,
    rarrbfs: iM,
    rarrc: lM,
    rarr: aM,
    Rarr: uM,
    rArr: fM,
    rarrfs: dM,
    rarrhk: hM,
    rarrlp: pM,
    rarrpl: _M,
    rarrsim: mM,
    Rarrtl: gM,
    rarrtl: vM,
    rarrw: bM,
    ratail: kM,
    rAtail: yM,
    ratio: xM,
    rationals: wM,
    rbarr: CM,
    rBarr: AM,
    RBarr: EM,
    rbbrk: SM,
    rbrace: DM,
    rbrack: $M,
    rbrke: PM,
    rbrksld: TM,
    rbrkslu: qM,
    Rcaron: LM,
    rcaron: FM,
    Rcedil: IM,
    rcedil: MM,
    rceil: VM,
    rcub: RM,
    Rcy: NM,
    rcy: BM,
    rdca: OM,
    rdldhar: zM,
    rdquo: HM,
    rdquor: UM,
    rdsh: jM,
    real: GM,
    realine: KM,
    realpart: ZM,
    reals: WM,
    Re: YM,
    rect: JM,
    reg: QM,
    REG: XM,
    ReverseElement: eV,
    ReverseEquilibrium: tV,
    ReverseUpEquilibrium: nV,
    rfisht: sV,
    rfloor: oV,
    rfr: rV,
    Rfr: cV,
    rHar: iV,
    rhard: lV,
    rharu: aV,
    rharul: uV,
    Rho: fV,
    rho: dV,
    rhov: hV,
    RightAngleBracket: pV,
    RightArrowBar: _V,
    rightarrow: mV,
    RightArrow: gV,
    Rightarrow: vV,
    RightArrowLeftArrow: bV,
    rightarrowtail: kV,
    RightCeiling: yV,
    RightDoubleBracket: xV,
    RightDownTeeVector: wV,
    RightDownVectorBar: CV,
    RightDownVector: AV,
    RightFloor: EV,
    rightharpoondown: SV,
    rightharpoonup: DV,
    rightleftarrows: $V,
    rightleftharpoons: PV,
    rightrightarrows: TV,
    rightsquigarrow: qV,
    RightTeeArrow: LV,
    RightTee: FV,
    RightTeeVector: IV,
    rightthreetimes: MV,
    RightTriangleBar: VV,
    RightTriangle: RV,
    RightTriangleEqual: NV,
    RightUpDownVector: BV,
    RightUpTeeVector: OV,
    RightUpVectorBar: zV,
    RightUpVector: HV,
    RightVectorBar: UV,
    RightVector: jV,
    ring: GV,
    risingdotseq: KV,
    rlarr: ZV,
    rlhar: WV,
    rlm: YV,
    rmoustache: JV,
    rmoust: QV,
    rnmid: XV,
    roang: eR,
    roarr: tR,
    robrk: nR,
    ropar: sR,
    ropf: oR,
    Ropf: rR,
    roplus: cR,
    rotimes: iR,
    RoundImplies: lR,
    rpar: aR,
    rpargt: uR,
    rppolint: fR,
    rrarr: dR,
    Rrightarrow: hR,
    rsaquo: pR,
    rscr: _R,
    Rscr: mR,
    rsh: gR,
    Rsh: vR,
    rsqb: bR,
    rsquo: kR,
    rsquor: yR,
    rthree: xR,
    rtimes: wR,
    rtri: CR,
    rtrie: AR,
    rtrif: ER,
    rtriltri: SR,
    RuleDelayed: DR,
    ruluhar: $R,
    rx: PR,
    Sacute: TR,
    sacute: qR,
    sbquo: LR,
    scap: FR,
    Scaron: IR,
    scaron: MR,
    Sc: VR,
    sc: RR,
    sccue: NR,
    sce: BR,
    scE: OR,
    Scedil: zR,
    scedil: HR,
    Scirc: UR,
    scirc: jR,
    scnap: GR,
    scnE: KR,
    scnsim: ZR,
    scpolint: WR,
    scsim: YR,
    Scy: JR,
    scy: QR,
    sdotb: XR,
    sdot: eN,
    sdote: tN,
    searhk: nN,
    searr: sN,
    seArr: oN,
    searrow: rN,
    sect: cN,
    semi: iN,
    seswar: lN,
    setminus: aN,
    setmn: uN,
    sext: fN,
    Sfr: dN,
    sfr: hN,
    sfrown: pN,
    sharp: _N,
    SHCHcy: mN,
    shchcy: gN,
    SHcy: vN,
    shcy: bN,
    ShortDownArrow: kN,
    ShortLeftArrow: yN,
    shortmid: xN,
    shortparallel: wN,
    ShortRightArrow: CN,
    ShortUpArrow: AN,
    shy: EN,
    Sigma: SN,
    sigma: DN,
    sigmaf: $N,
    sigmav: PN,
    sim: TN,
    simdot: qN,
    sime: LN,
    simeq: FN,
    simg: IN,
    simgE: MN,
    siml: VN,
    simlE: RN,
    simne: NN,
    simplus: BN,
    simrarr: ON,
    slarr: zN,
    SmallCircle: HN,
    smallsetminus: UN,
    smashp: jN,
    smeparsl: GN,
    smid: KN,
    smile: ZN,
    smt: WN,
    smte: YN,
    smtes: JN,
    SOFTcy: QN,
    softcy: XN,
    solbar: eB,
    solb: tB,
    sol: nB,
    Sopf: sB,
    sopf: oB,
    spades: rB,
    spadesuit: cB,
    spar: iB,
    sqcap: lB,
    sqcaps: aB,
    sqcup: uB,
    sqcups: fB,
    Sqrt: dB,
    sqsub: hB,
    sqsube: pB,
    sqsubset: _B,
    sqsubseteq: mB,
    sqsup: gB,
    sqsupe: vB,
    sqsupset: bB,
    sqsupseteq: kB,
    square: yB,
    Square: xB,
    SquareIntersection: wB,
    SquareSubset: CB,
    SquareSubsetEqual: AB,
    SquareSuperset: EB,
    SquareSupersetEqual: SB,
    SquareUnion: DB,
    squarf: $B,
    squ: PB,
    squf: TB,
    srarr: qB,
    Sscr: LB,
    sscr: FB,
    ssetmn: IB,
    ssmile: MB,
    sstarf: VB,
    Star: RB,
    star: NB,
    starf: BB,
    straightepsilon: OB,
    straightphi: zB,
    strns: HB,
    sub: UB,
    Sub: jB,
    subdot: GB,
    subE: KB,
    sube: ZB,
    subedot: WB,
    submult: YB,
    subnE: JB,
    subne: QB,
    subplus: XB,
    subrarr: eO,
    subset: tO,
    Subset: nO,
    subseteq: sO,
    subseteqq: oO,
    SubsetEqual: rO,
    subsetneq: cO,
    subsetneqq: iO,
    subsim: lO,
    subsub: aO,
    subsup: uO,
    succapprox: fO,
    succ: dO,
    succcurlyeq: hO,
    Succeeds: pO,
    SucceedsEqual: _O,
    SucceedsSlantEqual: mO,
    SucceedsTilde: gO,
    succeq: vO,
    succnapprox: bO,
    succneqq: kO,
    succnsim: yO,
    succsim: xO,
    SuchThat: wO,
    sum: CO,
    Sum: AO,
    sung: EO,
    sup1: SO,
    sup2: DO,
    sup3: $O,
    sup: PO,
    Sup: TO,
    supdot: qO,
    supdsub: LO,
    supE: FO,
    supe: IO,
    supedot: MO,
    Superset: VO,
    SupersetEqual: RO,
    suphsol: NO,
    suphsub: BO,
    suplarr: OO,
    supmult: zO,
    supnE: HO,
    supne: UO,
    supplus: jO,
    supset: GO,
    Supset: KO,
    supseteq: ZO,
    supseteqq: WO,
    supsetneq: YO,
    supsetneqq: JO,
    supsim: QO,
    supsub: XO,
    supsup: ez,
    swarhk: tz,
    swarr: nz,
    swArr: sz,
    swarrow: oz,
    swnwar: rz,
    szlig: cz,
    Tab: iz,
    target: lz,
    Tau: az,
    tau: uz,
    tbrk: fz,
    Tcaron: dz,
    tcaron: hz,
    Tcedil: pz,
    tcedil: _z,
    Tcy: mz,
    tcy: gz,
    tdot: vz,
    telrec: bz,
    Tfr: kz,
    tfr: yz,
    there4: xz,
    therefore: wz,
    Therefore: Cz,
    Theta: Az,
    theta: Ez,
    thetasym: Sz,
    thetav: Dz,
    thickapprox: $z,
    thicksim: Pz,
    ThickSpace: Tz,
    ThinSpace: qz,
    thinsp: Lz,
    thkap: Fz,
    thksim: Iz,
    THORN: Mz,
    thorn: Vz,
    tilde: Rz,
    Tilde: Nz,
    TildeEqual: Bz,
    TildeFullEqual: Oz,
    TildeTilde: zz,
    timesbar: Hz,
    timesb: Uz,
    times: jz,
    timesd: Gz,
    tint: Kz,
    toea: Zz,
    topbot: Wz,
    topcir: Yz,
    top: Jz,
    Topf: Qz,
    topf: Xz,
    topfork: eH,
    tosa: tH,
    tprime: nH,
    trade: sH,
    TRADE: oH,
    triangle: rH,
    triangledown: cH,
    triangleleft: iH,
    trianglelefteq: lH,
    triangleq: aH,
    triangleright: uH,
    trianglerighteq: fH,
    tridot: dH,
    trie: hH,
    triminus: pH,
    TripleDot: _H,
    triplus: mH,
    trisb: gH,
    tritime: vH,
    trpezium: bH,
    Tscr: kH,
    tscr: yH,
    TScy: xH,
    tscy: wH,
    TSHcy: CH,
    tshcy: AH,
    Tstrok: EH,
    tstrok: SH,
    twixt: DH,
    twoheadleftarrow: $H,
    twoheadrightarrow: PH,
    Uacute: TH,
    uacute: qH,
    uarr: LH,
    Uarr: FH,
    uArr: IH,
    Uarrocir: MH,
    Ubrcy: VH,
    ubrcy: RH,
    Ubreve: NH,
    ubreve: BH,
    Ucirc: OH,
    ucirc: zH,
    Ucy: HH,
    ucy: UH,
    udarr: jH,
    Udblac: GH,
    udblac: KH,
    udhar: ZH,
    ufisht: WH,
    Ufr: YH,
    ufr: JH,
    Ugrave: QH,
    ugrave: XH,
    uHar: eU,
    uharl: tU,
    uharr: nU,
    uhblk: sU,
    ulcorn: oU,
    ulcorner: rU,
    ulcrop: cU,
    ultri: iU,
    Umacr: lU,
    umacr: aU,
    uml: uU,
    UnderBar: fU,
    UnderBrace: dU,
    UnderBracket: hU,
    UnderParenthesis: pU,
    Union: _U,
    UnionPlus: mU,
    Uogon: gU,
    uogon: vU,
    Uopf: bU,
    uopf: kU,
    UpArrowBar: yU,
    uparrow: xU,
    UpArrow: wU,
    Uparrow: CU,
    UpArrowDownArrow: AU,
    updownarrow: EU,
    UpDownArrow: SU,
    Updownarrow: DU,
    UpEquilibrium: $U,
    upharpoonleft: PU,
    upharpoonright: TU,
    uplus: qU,
    UpperLeftArrow: LU,
    UpperRightArrow: FU,
    upsi: IU,
    Upsi: MU,
    upsih: VU,
    Upsilon: RU,
    upsilon: NU,
    UpTeeArrow: BU,
    UpTee: OU,
    upuparrows: zU,
    urcorn: HU,
    urcorner: UU,
    urcrop: jU,
    Uring: GU,
    uring: KU,
    urtri: ZU,
    Uscr: WU,
    uscr: YU,
    utdot: JU,
    Utilde: QU,
    utilde: XU,
    utri: ej,
    utrif: tj,
    uuarr: nj,
    Uuml: sj,
    uuml: oj,
    uwangle: rj,
    vangrt: cj,
    varepsilon: ij,
    varkappa: lj,
    varnothing: aj,
    varphi: uj,
    varpi: fj,
    varpropto: dj,
    varr: hj,
    vArr: pj,
    varrho: _j,
    varsigma: mj,
    varsubsetneq: gj,
    varsubsetneqq: vj,
    varsupsetneq: bj,
    varsupsetneqq: kj,
    vartheta: yj,
    vartriangleleft: xj,
    vartriangleright: wj,
    vBar: Cj,
    Vbar: Aj,
    vBarv: Ej,
    Vcy: Sj,
    vcy: Dj,
    vdash: $j,
    vDash: Pj,
    Vdash: Tj,
    VDash: qj,
    Vdashl: Lj,
    veebar: Fj,
    vee: Ij,
    Vee: Mj,
    veeeq: Vj,
    vellip: Rj,
    verbar: Nj,
    Verbar: Bj,
    vert: Oj,
    Vert: zj,
    VerticalBar: Hj,
    VerticalLine: Uj,
    VerticalSeparator: jj,
    VerticalTilde: Gj,
    VeryThinSpace: Kj,
    Vfr: Zj,
    vfr: Wj,
    vltri: Yj,
    vnsub: Jj,
    vnsup: Qj,
    Vopf: Xj,
    vopf: eG,
    vprop: tG,
    vrtri: nG,
    Vscr: sG,
    vscr: oG,
    vsubnE: rG,
    vsubne: cG,
    vsupnE: iG,
    vsupne: lG,
    Vvdash: aG,
    vzigzag: uG,
    Wcirc: fG,
    wcirc: dG,
    wedbar: hG,
    wedge: pG,
    Wedge: _G,
    wedgeq: mG,
    weierp: gG,
    Wfr: vG,
    wfr: bG,
    Wopf: kG,
    wopf: yG,
    wp: xG,
    wr: wG,
    wreath: CG,
    Wscr: AG,
    wscr: EG,
    xcap: SG,
    xcirc: DG,
    xcup: $G,
    xdtri: PG,
    Xfr: TG,
    xfr: qG,
    xharr: LG,
    xhArr: FG,
    Xi: IG,
    xi: MG,
    xlarr: VG,
    xlArr: RG,
    xmap: NG,
    xnis: BG,
    xodot: OG,
    Xopf: zG,
    xopf: HG,
    xoplus: UG,
    xotime: jG,
    xrarr: GG,
    xrArr: KG,
    Xscr: ZG,
    xscr: WG,
    xsqcup: YG,
    xuplus: JG,
    xutri: QG,
    xvee: XG,
    xwedge: eK,
    Yacute: tK,
    yacute: nK,
    YAcy: sK,
    yacy: oK,
    Ycirc: rK,
    ycirc: cK,
    Ycy: iK,
    ycy: lK,
    yen: aK,
    Yfr: uK,
    yfr: fK,
    YIcy: dK,
    yicy: hK,
    Yopf: pK,
    yopf: _K,
    Yscr: mK,
    yscr: gK,
    YUcy: vK,
    yucy: bK,
    yuml: kK,
    Yuml: yK,
    Zacute: xK,
    zacute: wK,
    Zcaron: CK,
    zcaron: AK,
    Zcy: EK,
    zcy: SK,
    Zdot: DK,
    zdot: $K,
    zeetrf: PK,
    ZeroWidthSpace: TK,
    Zeta: qK,
    zeta: LK,
    zfr: FK,
    Zfr: IK,
    ZHcy: MK,
    zhcy: VK,
    zigrarr: RK,
    zopf: NK,
    Zopf: BK,
    Zscr: OK,
    zscr: zK,
    zwj: HK,
    zwnj: UK,
  };
(function (t) {
  t.exports = jK;
})(ir);
var lr =
    /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,
  on = {},
  kc = {};
function GK(t) {
  var e,
    n,
    s = kc[t];
  if (s) return s;
  for (s = kc[t] = [], e = 0; e < 128; e++)
    (n = String.fromCharCode(e)),
      /^[0-9a-z]$/i.test(n)
        ? s.push(n)
        : s.push("%" + ("0" + e.toString(16).toUpperCase()).slice(-2));
  for (e = 0; e < t.length; e++) s[t.charCodeAt(e)] = t[e];
  return s;
}
function Fs(t, e, n) {
  var s,
    o,
    r,
    c,
    i,
    l = "";
  for (
    typeof e != "string" && ((n = e), (e = Fs.defaultChars)),
      typeof n > "u" && (n = !0),
      i = GK(e),
      s = 0,
      o = t.length;
    s < o;
    s++
  ) {
    if (
      ((r = t.charCodeAt(s)),
      n &&
        r === 37 &&
        s + 2 < o &&
        /^[0-9a-f]{2}$/i.test(t.slice(s + 1, s + 3)))
    ) {
      (l += t.slice(s, s + 3)), (s += 2);
      continue;
    }
    if (r < 128) {
      l += i[r];
      continue;
    }
    if (r >= 55296 && r <= 57343) {
      if (
        r >= 55296 &&
        r <= 56319 &&
        s + 1 < o &&
        ((c = t.charCodeAt(s + 1)), c >= 56320 && c <= 57343)
      ) {
        (l += encodeURIComponent(t[s] + t[s + 1])), s++;
        continue;
      }
      l += "%EF%BF%BD";
      continue;
    }
    l += encodeURIComponent(t[s]);
  }
  return l;
}
Fs.defaultChars = ";/?:@&=+$,-_.!~*'()#";
Fs.componentChars = "-_.!~*'()";
var KK = Fs,
  yc = {};
function ZK(t) {
  var e,
    n,
    s = yc[t];
  if (s) return s;
  for (s = yc[t] = [], e = 0; e < 128; e++)
    (n = String.fromCharCode(e)), s.push(n);
  for (e = 0; e < t.length; e++)
    (n = t.charCodeAt(e)),
      (s[n] = "%" + ("0" + n.toString(16).toUpperCase()).slice(-2));
  return s;
}
function Is(t, e) {
  var n;
  return (
    typeof e != "string" && (e = Is.defaultChars),
    (n = ZK(e)),
    t.replace(/(%[a-f0-9]{2})+/gi, function (s) {
      var o,
        r,
        c,
        i,
        l,
        a,
        u,
        f = "";
      for (o = 0, r = s.length; o < r; o += 3) {
        if (((c = parseInt(s.slice(o + 1, o + 3), 16)), c < 128)) {
          f += n[c];
          continue;
        }
        if (
          (c & 224) === 192 &&
          o + 3 < r &&
          ((i = parseInt(s.slice(o + 4, o + 6), 16)), (i & 192) === 128)
        ) {
          (u = ((c << 6) & 1984) | (i & 63)),
            u < 128 ? (f += "\uFFFD\uFFFD") : (f += String.fromCharCode(u)),
            (o += 3);
          continue;
        }
        if (
          (c & 240) === 224 &&
          o + 6 < r &&
          ((i = parseInt(s.slice(o + 4, o + 6), 16)),
          (l = parseInt(s.slice(o + 7, o + 9), 16)),
          (i & 192) === 128 && (l & 192) === 128)
        ) {
          (u = ((c << 12) & 61440) | ((i << 6) & 4032) | (l & 63)),
            u < 2048 || (u >= 55296 && u <= 57343)
              ? (f += "\uFFFD\uFFFD\uFFFD")
              : (f += String.fromCharCode(u)),
            (o += 6);
          continue;
        }
        if (
          (c & 248) === 240 &&
          o + 9 < r &&
          ((i = parseInt(s.slice(o + 4, o + 6), 16)),
          (l = parseInt(s.slice(o + 7, o + 9), 16)),
          (a = parseInt(s.slice(o + 10, o + 12), 16)),
          (i & 192) === 128 && (l & 192) === 128 && (a & 192) === 128)
        ) {
          (u =
            ((c << 18) & 1835008) |
            ((i << 12) & 258048) |
            ((l << 6) & 4032) |
            (a & 63)),
            u < 65536 || u > 1114111
              ? (f += "\uFFFD\uFFFD\uFFFD\uFFFD")
              : ((u -= 65536),
                (f += String.fromCharCode(
                  55296 + (u >> 10),
                  56320 + (u & 1023)
                ))),
            (o += 9);
          continue;
        }
        f += "\uFFFD";
      }
      return f;
    })
  );
}
Is.defaultChars = ";/?:@&=+$,#";
Is.componentChars = "";
var WK = Is,
  YK = function (e) {
    var n = "";
    return (
      (n += e.protocol || ""),
      (n += e.slashes ? "//" : ""),
      (n += e.auth ? e.auth + "@" : ""),
      e.hostname && e.hostname.indexOf(":") !== -1
        ? (n += "[" + e.hostname + "]")
        : (n += e.hostname || ""),
      (n += e.port ? ":" + e.port : ""),
      (n += e.pathname || ""),
      (n += e.search || ""),
      (n += e.hash || ""),
      n
    );
  };
function hs() {
  (this.protocol = null),
    (this.slashes = null),
    (this.auth = null),
    (this.port = null),
    (this.hostname = null),
    (this.hash = null),
    (this.search = null),
    (this.pathname = null);
}
var JK = /^([a-z0-9.+-]+:)/i,
  QK = /:[0-9]*$/,
  XK = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
  eZ = [
    "<",
    ">",
    '"',
    "`",
    " ",
    "\r",
    `
`,
    "	",
  ],
  tZ = ["{", "}", "|", "\\", "^", "`"].concat(eZ),
  nZ = ["'"].concat(tZ),
  xc = ["%", "/", "?", ";", "#"].concat(nZ),
  wc = ["/", "?", "#"],
  sZ = 255,
  Cc = /^[+a-z0-9A-Z_-]{0,63}$/,
  oZ = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
  Ac = { javascript: !0, "javascript:": !0 },
  Ec = {
    http: !0,
    https: !0,
    ftp: !0,
    gopher: !0,
    file: !0,
    "http:": !0,
    "https:": !0,
    "ftp:": !0,
    "gopher:": !0,
    "file:": !0,
  };
function rZ(t, e) {
  if (t && t instanceof hs) return t;
  var n = new hs();
  return n.parse(t, e), n;
}
hs.prototype.parse = function (t, e) {
  var n,
    s,
    o,
    r,
    c,
    i = t;
  if (((i = i.trim()), !e && t.split("#").length === 1)) {
    var l = XK.exec(i);
    if (l) return (this.pathname = l[1]), l[2] && (this.search = l[2]), this;
  }
  var a = JK.exec(i);
  if (
    (a &&
      ((a = a[0]),
      (o = a.toLowerCase()),
      (this.protocol = a),
      (i = i.substr(a.length))),
    (e || a || i.match(/^\/\/[^@\/]+@[^@\/]+/)) &&
      ((c = i.substr(0, 2) === "//"),
      c && !(a && Ac[a]) && ((i = i.substr(2)), (this.slashes = !0))),
    !Ac[a] && (c || (a && !Ec[a])))
  ) {
    var u = -1;
    for (n = 0; n < wc.length; n++)
      (r = i.indexOf(wc[n])), r !== -1 && (u === -1 || r < u) && (u = r);
    var f, d;
    for (
      u === -1 ? (d = i.lastIndexOf("@")) : (d = i.lastIndexOf("@", u)),
        d !== -1 &&
          ((f = i.slice(0, d)), (i = i.slice(d + 1)), (this.auth = f)),
        u = -1,
        n = 0;
      n < xc.length;
      n++
    )
      (r = i.indexOf(xc[n])), r !== -1 && (u === -1 || r < u) && (u = r);
    u === -1 && (u = i.length), i[u - 1] === ":" && u--;
    var p = i.slice(0, u);
    (i = i.slice(u)), this.parseHost(p), (this.hostname = this.hostname || "");
    var x =
      this.hostname[0] === "[" &&
      this.hostname[this.hostname.length - 1] === "]";
    if (!x) {
      var A = this.hostname.split(/\./);
      for (n = 0, s = A.length; n < s; n++) {
        var P = A[n];
        if (!!P && !P.match(Cc)) {
          for (var g = "", v = 0, E = P.length; v < E; v++)
            P.charCodeAt(v) > 127 ? (g += "x") : (g += P[v]);
          if (!g.match(Cc)) {
            var L = A.slice(0, n),
              N = A.slice(n + 1),
              S = P.match(oZ);
            S && (L.push(S[1]), N.unshift(S[2])),
              N.length && (i = N.join(".") + i),
              (this.hostname = L.join("."));
            break;
          }
        }
      }
    }
    this.hostname.length > sZ && (this.hostname = ""),
      x && (this.hostname = this.hostname.substr(1, this.hostname.length - 2));
  }
  var z = i.indexOf("#");
  z !== -1 && ((this.hash = i.substr(z)), (i = i.slice(0, z)));
  var T = i.indexOf("?");
  return (
    T !== -1 && ((this.search = i.substr(T)), (i = i.slice(0, T))),
    i && (this.pathname = i),
    Ec[o] && this.hostname && !this.pathname && (this.pathname = ""),
    this
  );
};
hs.prototype.parseHost = function (t) {
  var e = QK.exec(t);
  e &&
    ((e = e[0]),
    e !== ":" && (this.port = e.substr(1)),
    (t = t.substr(0, t.length - e.length))),
    t && (this.hostname = t);
};
var cZ = rZ;
on.encode = KK;
on.decode = WK;
on.format = YK;
on.parse = cZ;
var Dt = {},
  eo,
  Sc;
function ml() {
  return (
    Sc ||
      ((Sc = 1),
      (eo =
        /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/)),
    eo
  );
}
var to, Dc;
function gl() {
  return Dc || ((Dc = 1), (to = /[\0-\x1F\x7F-\x9F]/)), to;
}
var no, $c;
function iZ() {
  return (
    $c ||
      (($c = 1),
      (no =
        /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/)),
    no
  );
}
var so, Pc;
function vl() {
  return (
    Pc ||
      ((Pc = 1),
      (so = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/)),
    so
  );
}
var Tc;
function lZ() {
  return (
    Tc ||
      ((Tc = 1),
      (Dt.Any = ml()),
      (Dt.Cc = gl()),
      (Dt.Cf = iZ()),
      (Dt.P = lr),
      (Dt.Z = vl())),
    Dt
  );
}
(function (t) {
  function e(k) {
    return Object.prototype.toString.call(k);
  }
  function n(k) {
    return e(k) === "[object String]";
  }
  var s = Object.prototype.hasOwnProperty;
  function o(k, ie) {
    return s.call(k, ie);
  }
  function r(k) {
    var ie = Array.prototype.slice.call(arguments, 1);
    return (
      ie.forEach(function (W) {
        if (!!W) {
          if (typeof W != "object") throw new TypeError(W + "must be object");
          Object.keys(W).forEach(function (fe) {
            k[fe] = W[fe];
          });
        }
      }),
      k
    );
  }
  function c(k, ie, W) {
    return [].concat(k.slice(0, ie), W, k.slice(ie + 1));
  }
  function i(k) {
    return !(
      (k >= 55296 && k <= 57343) ||
      (k >= 64976 && k <= 65007) ||
      (k & 65535) === 65535 ||
      (k & 65535) === 65534 ||
      (k >= 0 && k <= 8) ||
      k === 11 ||
      (k >= 14 && k <= 31) ||
      (k >= 127 && k <= 159) ||
      k > 1114111
    );
  }
  function l(k) {
    if (k > 65535) {
      k -= 65536;
      var ie = 55296 + (k >> 10),
        W = 56320 + (k & 1023);
      return String.fromCharCode(ie, W);
    }
    return String.fromCharCode(k);
  }
  var a = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g,
    u = /&([a-z#][a-z0-9]{1,31});/gi,
    f = new RegExp(a.source + "|" + u.source, "gi"),
    d = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i,
    p = ir.exports;
  function x(k, ie) {
    var W = 0;
    return o(p, ie)
      ? p[ie]
      : ie.charCodeAt(0) === 35 &&
        d.test(ie) &&
        ((W =
          ie[1].toLowerCase() === "x"
            ? parseInt(ie.slice(2), 16)
            : parseInt(ie.slice(1), 10)),
        i(W))
      ? l(W)
      : k;
  }
  function A(k) {
    return k.indexOf("\\") < 0 ? k : k.replace(a, "$1");
  }
  function P(k) {
    return k.indexOf("\\") < 0 && k.indexOf("&") < 0
      ? k
      : k.replace(f, function (ie, W, fe) {
          return W || x(ie, fe);
        });
  }
  var g = /[&<>"]/,
    v = /[&<>"]/g,
    E = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" };
  function L(k) {
    return E[k];
  }
  function N(k) {
    return g.test(k) ? k.replace(v, L) : k;
  }
  var S = /[.?*+^$[\]\\(){}|-]/g;
  function z(k) {
    return k.replace(S, "\\$&");
  }
  function T(k) {
    switch (k) {
      case 9:
      case 32:
        return !0;
    }
    return !1;
  }
  function J(k) {
    if (k >= 8192 && k <= 8202) return !0;
    switch (k) {
      case 9:
      case 10:
      case 11:
      case 12:
      case 13:
      case 32:
      case 160:
      case 5760:
      case 8239:
      case 8287:
      case 12288:
        return !0;
    }
    return !1;
  }
  var R = lr;
  function G(k) {
    return R.test(k);
  }
  function U(k) {
    switch (k) {
      case 33:
      case 34:
      case 35:
      case 36:
      case 37:
      case 38:
      case 39:
      case 40:
      case 41:
      case 42:
      case 43:
      case 44:
      case 45:
      case 46:
      case 47:
      case 58:
      case 59:
      case 60:
      case 61:
      case 62:
      case 63:
      case 64:
      case 91:
      case 92:
      case 93:
      case 94:
      case 95:
      case 96:
      case 123:
      case 124:
      case 125:
      case 126:
        return !0;
      default:
        return !1;
    }
  }
  function se(k) {
    return (
      (k = k.trim().replace(/\s+/g, " ")),
      "\u1E9E".toLowerCase() === "\u1E7E" && (k = k.replace(/ẞ/g, "\xDF")),
      k.toLowerCase().toUpperCase()
    );
  }
  (t.lib = {}),
    (t.lib.mdurl = on),
    (t.lib.ucmicro = lZ()),
    (t.assign = r),
    (t.isString = n),
    (t.has = o),
    (t.unescapeMd = A),
    (t.unescapeAll = P),
    (t.isValidEntityCode = i),
    (t.fromCodePoint = l),
    (t.escapeHtml = N),
    (t.arrayReplaceAt = c),
    (t.isSpace = T),
    (t.isWhiteSpace = J),
    (t.isMdAsciiPunct = U),
    (t.isPunctChar = G),
    (t.escapeRE = z),
    (t.normalizeReference = se);
})(pe);
var Ms = {},
  aZ = function (e, n, s) {
    var o,
      r,
      c,
      i,
      l = -1,
      a = e.posMax,
      u = e.pos;
    for (e.pos = n + 1, o = 1; e.pos < a; ) {
      if (((c = e.src.charCodeAt(e.pos)), c === 93 && (o--, o === 0))) {
        r = !0;
        break;
      }
      if (((i = e.pos), e.md.inline.skipToken(e), c === 91)) {
        if (i === e.pos - 1) o++;
        else if (s) return (e.pos = u), -1;
      }
    }
    return r && (l = e.pos), (e.pos = u), l;
  },
  qc = pe.unescapeAll,
  uZ = function (e, n, s) {
    var o,
      r,
      c = 0,
      i = n,
      l = { ok: !1, pos: 0, lines: 0, str: "" };
    if (e.charCodeAt(n) === 60) {
      for (n++; n < s; ) {
        if (((o = e.charCodeAt(n)), o === 10 || o === 60)) return l;
        if (o === 62)
          return (
            (l.pos = n + 1), (l.str = qc(e.slice(i + 1, n))), (l.ok = !0), l
          );
        if (o === 92 && n + 1 < s) {
          n += 2;
          continue;
        }
        n++;
      }
      return l;
    }
    for (
      r = 0;
      n < s && ((o = e.charCodeAt(n)), !(o === 32 || o < 32 || o === 127));

    ) {
      if (o === 92 && n + 1 < s) {
        if (e.charCodeAt(n + 1) === 32) break;
        n += 2;
        continue;
      }
      if (o === 40 && (r++, r > 32)) return l;
      if (o === 41) {
        if (r === 0) break;
        r--;
      }
      n++;
    }
    return (
      i === n ||
        r !== 0 ||
        ((l.str = qc(e.slice(i, n))), (l.lines = c), (l.pos = n), (l.ok = !0)),
      l
    );
  },
  fZ = pe.unescapeAll,
  dZ = function (e, n, s) {
    var o,
      r,
      c = 0,
      i = n,
      l = { ok: !1, pos: 0, lines: 0, str: "" };
    if (n >= s || ((r = e.charCodeAt(n)), r !== 34 && r !== 39 && r !== 40))
      return l;
    for (n++, r === 40 && (r = 41); n < s; ) {
      if (((o = e.charCodeAt(n)), o === r))
        return (
          (l.pos = n + 1),
          (l.lines = c),
          (l.str = fZ(e.slice(i + 1, n))),
          (l.ok = !0),
          l
        );
      if (o === 40 && r === 41) return l;
      o === 10
        ? c++
        : o === 92 && n + 1 < s && (n++, e.charCodeAt(n) === 10 && c++),
        n++;
    }
    return l;
  };
Ms.parseLinkLabel = aZ;
Ms.parseLinkDestination = uZ;
Ms.parseLinkTitle = dZ;
var hZ = pe.assign,
  pZ = pe.unescapeAll,
  Nt = pe.escapeHtml,
  ot = {};
ot.code_inline = function (t, e, n, s, o) {
  var r = t[e];
  return "<code" + o.renderAttrs(r) + ">" + Nt(t[e].content) + "</code>";
};
ot.code_block = function (t, e, n, s, o) {
  var r = t[e];
  return (
    "<pre" +
    o.renderAttrs(r) +
    "><code>" +
    Nt(t[e].content) +
    `</code></pre>
`
  );
};
ot.fence = function (t, e, n, s, o) {
  var r = t[e],
    c = r.info ? pZ(r.info).trim() : "",
    i = "",
    l = "",
    a,
    u,
    f,
    d,
    p;
  return (
    c && ((f = c.split(/(\s+)/g)), (i = f[0]), (l = f.slice(2).join(""))),
    n.highlight
      ? (a = n.highlight(r.content, i, l) || Nt(r.content))
      : (a = Nt(r.content)),
    a.indexOf("<pre") === 0
      ? a +
        `
`
      : c
      ? ((u = r.attrIndex("class")),
        (d = r.attrs ? r.attrs.slice() : []),
        u < 0
          ? d.push(["class", n.langPrefix + i])
          : ((d[u] = d[u].slice()), (d[u][1] += " " + n.langPrefix + i)),
        (p = { attrs: d }),
        "<pre><code" +
          o.renderAttrs(p) +
          ">" +
          a +
          `</code></pre>
`)
      : "<pre><code" +
        o.renderAttrs(r) +
        ">" +
        a +
        `</code></pre>
`
  );
};
ot.image = function (t, e, n, s, o) {
  var r = t[e];
  return (
    (r.attrs[r.attrIndex("alt")][1] = o.renderInlineAsText(r.children, n, s)),
    o.renderToken(t, e, n)
  );
};
ot.hardbreak = function (t, e, n) {
  return n.xhtmlOut
    ? `<br />
`
    : `<br>
`;
};
ot.softbreak = function (t, e, n) {
  return n.breaks
    ? n.xhtmlOut
      ? `<br />
`
      : `<br>
`
    : `
`;
};
ot.text = function (t, e) {
  return Nt(t[e].content);
};
ot.html_block = function (t, e) {
  return t[e].content;
};
ot.html_inline = function (t, e) {
  return t[e].content;
};
function rn() {
  this.rules = hZ({}, ot);
}
rn.prototype.renderAttrs = function (e) {
  var n, s, o;
  if (!e.attrs) return "";
  for (o = "", n = 0, s = e.attrs.length; n < s; n++)
    o += " " + Nt(e.attrs[n][0]) + '="' + Nt(e.attrs[n][1]) + '"';
  return o;
};
rn.prototype.renderToken = function (e, n, s) {
  var o,
    r = "",
    c = !1,
    i = e[n];
  return i.hidden
    ? ""
    : (i.block &&
        i.nesting !== -1 &&
        n &&
        e[n - 1].hidden &&
        (r += `
`),
      (r += (i.nesting === -1 ? "</" : "<") + i.tag),
      (r += this.renderAttrs(i)),
      i.nesting === 0 && s.xhtmlOut && (r += " /"),
      i.block &&
        ((c = !0),
        i.nesting === 1 &&
          n + 1 < e.length &&
          ((o = e[n + 1]),
          (o.type === "inline" ||
            o.hidden ||
            (o.nesting === -1 && o.tag === i.tag)) &&
            (c = !1))),
      (r += c
        ? `>
`
        : ">"),
      r);
};
rn.prototype.renderInline = function (t, e, n) {
  for (var s, o = "", r = this.rules, c = 0, i = t.length; c < i; c++)
    (s = t[c].type),
      typeof r[s] < "u"
        ? (o += r[s](t, c, e, n, this))
        : (o += this.renderToken(t, c, e));
  return o;
};
rn.prototype.renderInlineAsText = function (t, e, n) {
  for (var s = "", o = 0, r = t.length; o < r; o++)
    t[o].type === "text"
      ? (s += t[o].content)
      : t[o].type === "image"
      ? (s += this.renderInlineAsText(t[o].children, e, n))
      : t[o].type === "softbreak" &&
        (s += `
`);
  return s;
};
rn.prototype.render = function (t, e, n) {
  var s,
    o,
    r,
    c = "",
    i = this.rules;
  for (s = 0, o = t.length; s < o; s++)
    (r = t[s].type),
      r === "inline"
        ? (c += this.renderInline(t[s].children, e, n))
        : typeof i[r] < "u"
        ? (c += i[t[s].type](t, s, e, n, this))
        : (c += this.renderToken(t, s, e, n));
  return c;
};
var _Z = rn;
function Je() {
  (this.__rules__ = []), (this.__cache__ = null);
}
Je.prototype.__find__ = function (t) {
  for (var e = 0; e < this.__rules__.length; e++)
    if (this.__rules__[e].name === t) return e;
  return -1;
};
Je.prototype.__compile__ = function () {
  var t = this,
    e = [""];
  t.__rules__.forEach(function (n) {
    !n.enabled ||
      n.alt.forEach(function (s) {
        e.indexOf(s) < 0 && e.push(s);
      });
  }),
    (t.__cache__ = {}),
    e.forEach(function (n) {
      (t.__cache__[n] = []),
        t.__rules__.forEach(function (s) {
          !s.enabled ||
            (n && s.alt.indexOf(n) < 0) ||
            t.__cache__[n].push(s.fn);
        });
    });
};
Je.prototype.at = function (t, e, n) {
  var s = this.__find__(t),
    o = n || {};
  if (s === -1) throw new Error("Parser rule not found: " + t);
  (this.__rules__[s].fn = e),
    (this.__rules__[s].alt = o.alt || []),
    (this.__cache__ = null);
};
Je.prototype.before = function (t, e, n, s) {
  var o = this.__find__(t),
    r = s || {};
  if (o === -1) throw new Error("Parser rule not found: " + t);
  this.__rules__.splice(o, 0, {
    name: e,
    enabled: !0,
    fn: n,
    alt: r.alt || [],
  }),
    (this.__cache__ = null);
};
Je.prototype.after = function (t, e, n, s) {
  var o = this.__find__(t),
    r = s || {};
  if (o === -1) throw new Error("Parser rule not found: " + t);
  this.__rules__.splice(o + 1, 0, {
    name: e,
    enabled: !0,
    fn: n,
    alt: r.alt || [],
  }),
    (this.__cache__ = null);
};
Je.prototype.push = function (t, e, n) {
  var s = n || {};
  this.__rules__.push({ name: t, enabled: !0, fn: e, alt: s.alt || [] }),
    (this.__cache__ = null);
};
Je.prototype.enable = function (t, e) {
  Array.isArray(t) || (t = [t]);
  var n = [];
  return (
    t.forEach(function (s) {
      var o = this.__find__(s);
      if (o < 0) {
        if (e) return;
        throw new Error("Rules manager: invalid rule name " + s);
      }
      (this.__rules__[o].enabled = !0), n.push(s);
    }, this),
    (this.__cache__ = null),
    n
  );
};
Je.prototype.enableOnly = function (t, e) {
  Array.isArray(t) || (t = [t]),
    this.__rules__.forEach(function (n) {
      n.enabled = !1;
    }),
    this.enable(t, e);
};
Je.prototype.disable = function (t, e) {
  Array.isArray(t) || (t = [t]);
  var n = [];
  return (
    t.forEach(function (s) {
      var o = this.__find__(s);
      if (o < 0) {
        if (e) return;
        throw new Error("Rules manager: invalid rule name " + s);
      }
      (this.__rules__[o].enabled = !1), n.push(s);
    }, this),
    (this.__cache__ = null),
    n
  );
};
Je.prototype.getRules = function (t) {
  return this.__cache__ === null && this.__compile__(), this.__cache__[t] || [];
};
var ar = Je,
  mZ = /\r\n?|\n/g,
  gZ = /\0/g,
  vZ = function (e) {
    var n;
    (n = e.src.replace(
      mZ,
      `
`
    )),
      (n = n.replace(gZ, "\uFFFD")),
      (e.src = n);
  },
  bZ = function (e) {
    var n;
    e.inlineMode
      ? ((n = new e.Token("inline", "", 0)),
        (n.content = e.src),
        (n.map = [0, 1]),
        (n.children = []),
        e.tokens.push(n))
      : e.md.block.parse(e.src, e.md, e.env, e.tokens);
  },
  kZ = function (e) {
    var n = e.tokens,
      s,
      o,
      r;
    for (o = 0, r = n.length; o < r; o++)
      (s = n[o]),
        s.type === "inline" &&
          e.md.inline.parse(s.content, e.md, e.env, s.children);
  },
  yZ = pe.arrayReplaceAt;
function xZ(t) {
  return /^<a[>\s]/i.test(t);
}
function wZ(t) {
  return /^<\/a\s*>/i.test(t);
}
var CZ = function (e) {
    var n,
      s,
      o,
      r,
      c,
      i,
      l,
      a,
      u,
      f,
      d,
      p,
      x,
      A,
      P,
      g,
      v = e.tokens,
      E;
    if (!!e.md.options.linkify) {
      for (s = 0, o = v.length; s < o; s++)
        if (!(v[s].type !== "inline" || !e.md.linkify.pretest(v[s].content)))
          for (r = v[s].children, x = 0, n = r.length - 1; n >= 0; n--) {
            if (((i = r[n]), i.type === "link_close")) {
              for (n--; r[n].level !== i.level && r[n].type !== "link_open"; )
                n--;
              continue;
            }
            if (
              (i.type === "html_inline" &&
                (xZ(i.content) && x > 0 && x--, wZ(i.content) && x++),
              !(x > 0) && i.type === "text" && e.md.linkify.test(i.content))
            ) {
              for (
                u = i.content,
                  E = e.md.linkify.match(u),
                  l = [],
                  p = i.level,
                  d = 0,
                  E.length > 0 &&
                    E[0].index === 0 &&
                    n > 0 &&
                    r[n - 1].type === "text_special" &&
                    (E = E.slice(1)),
                  a = 0;
                a < E.length;
                a++
              )
                (A = E[a].url),
                  (P = e.md.normalizeLink(A)),
                  e.md.validateLink(P) &&
                    ((g = E[a].text),
                    E[a].schema
                      ? E[a].schema === "mailto:" && !/^mailto:/i.test(g)
                        ? (g = e.md
                            .normalizeLinkText("mailto:" + g)
                            .replace(/^mailto:/, ""))
                        : (g = e.md.normalizeLinkText(g))
                      : (g = e.md
                          .normalizeLinkText("http://" + g)
                          .replace(/^http:\/\//, "")),
                    (f = E[a].index),
                    f > d &&
                      ((c = new e.Token("text", "", 0)),
                      (c.content = u.slice(d, f)),
                      (c.level = p),
                      l.push(c)),
                    (c = new e.Token("link_open", "a", 1)),
                    (c.attrs = [["href", P]]),
                    (c.level = p++),
                    (c.markup = "linkify"),
                    (c.info = "auto"),
                    l.push(c),
                    (c = new e.Token("text", "", 0)),
                    (c.content = g),
                    (c.level = p),
                    l.push(c),
                    (c = new e.Token("link_close", "a", -1)),
                    (c.level = --p),
                    (c.markup = "linkify"),
                    (c.info = "auto"),
                    l.push(c),
                    (d = E[a].lastIndex));
              d < u.length &&
                ((c = new e.Token("text", "", 0)),
                (c.content = u.slice(d)),
                (c.level = p),
                l.push(c)),
                (v[s].children = r = yZ(r, n, l));
            }
          }
    }
  },
  bl = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/,
  AZ = /\((c|tm|r)\)/i,
  EZ = /\((c|tm|r)\)/gi,
  SZ = { c: "\xA9", r: "\xAE", tm: "\u2122" };
function DZ(t, e) {
  return SZ[e.toLowerCase()];
}
function $Z(t) {
  var e,
    n,
    s = 0;
  for (e = t.length - 1; e >= 0; e--)
    (n = t[e]),
      n.type === "text" && !s && (n.content = n.content.replace(EZ, DZ)),
      n.type === "link_open" && n.info === "auto" && s--,
      n.type === "link_close" && n.info === "auto" && s++;
}
function PZ(t) {
  var e,
    n,
    s = 0;
  for (e = t.length - 1; e >= 0; e--)
    (n = t[e]),
      n.type === "text" &&
        !s &&
        bl.test(n.content) &&
        (n.content = n.content
          .replace(/\+-/g, "\xB1")
          .replace(/\.{2,}/g, "\u2026")
          .replace(/([?!])…/g, "$1..")
          .replace(/([?!]){4,}/g, "$1$1$1")
          .replace(/,{2,}/g, ",")
          .replace(/(^|[^-])---(?=[^-]|$)/gm, "$1\u2014")
          .replace(/(^|\s)--(?=\s|$)/gm, "$1\u2013")
          .replace(/(^|[^-\s])--(?=[^-\s]|$)/gm, "$1\u2013")),
      n.type === "link_open" && n.info === "auto" && s--,
      n.type === "link_close" && n.info === "auto" && s++;
}
var TZ = function (e) {
    var n;
    if (!!e.md.options.typographer)
      for (n = e.tokens.length - 1; n >= 0; n--)
        e.tokens[n].type === "inline" &&
          (AZ.test(e.tokens[n].content) && $Z(e.tokens[n].children),
          bl.test(e.tokens[n].content) && PZ(e.tokens[n].children));
  },
  Lc = pe.isWhiteSpace,
  Fc = pe.isPunctChar,
  Ic = pe.isMdAsciiPunct,
  qZ = /['"]/,
  Mc = /['"]/g,
  Vc = "\u2019";
function jn(t, e, n) {
  return t.slice(0, e) + n + t.slice(e + 1);
}
function LZ(t, e) {
  var n, s, o, r, c, i, l, a, u, f, d, p, x, A, P, g, v, E, L, N, S;
  for (L = [], n = 0; n < t.length; n++) {
    for (
      s = t[n], l = t[n].level, v = L.length - 1;
      v >= 0 && !(L[v].level <= l);
      v--
    );
    if (((L.length = v + 1), s.type !== "text")) continue;
    (o = s.content), (c = 0), (i = o.length);
    e: for (; c < i && ((Mc.lastIndex = c), (r = Mc.exec(o)), !!r); ) {
      if (
        ((P = g = !0),
        (c = r.index + 1),
        (E = r[0] === "'"),
        (u = 32),
        r.index - 1 >= 0)
      )
        u = o.charCodeAt(r.index - 1);
      else
        for (
          v = n - 1;
          v >= 0 && !(t[v].type === "softbreak" || t[v].type === "hardbreak");
          v--
        )
          if (!!t[v].content) {
            u = t[v].content.charCodeAt(t[v].content.length - 1);
            break;
          }
      if (((f = 32), c < i)) f = o.charCodeAt(c);
      else
        for (
          v = n + 1;
          v < t.length &&
          !(t[v].type === "softbreak" || t[v].type === "hardbreak");
          v++
        )
          if (!!t[v].content) {
            f = t[v].content.charCodeAt(0);
            break;
          }
      if (
        ((d = Ic(u) || Fc(String.fromCharCode(u))),
        (p = Ic(f) || Fc(String.fromCharCode(f))),
        (x = Lc(u)),
        (A = Lc(f)),
        A ? (P = !1) : p && (x || d || (P = !1)),
        x ? (g = !1) : d && (A || p || (g = !1)),
        f === 34 && r[0] === '"' && u >= 48 && u <= 57 && (g = P = !1),
        P && g && ((P = d), (g = p)),
        !P && !g)
      ) {
        E && (s.content = jn(s.content, r.index, Vc));
        continue;
      }
      if (g) {
        for (v = L.length - 1; v >= 0 && ((a = L[v]), !(L[v].level < l)); v--)
          if (a.single === E && L[v].level === l) {
            (a = L[v]),
              E
                ? ((N = e.md.options.quotes[2]), (S = e.md.options.quotes[3]))
                : ((N = e.md.options.quotes[0]), (S = e.md.options.quotes[1])),
              (s.content = jn(s.content, r.index, S)),
              (t[a.token].content = jn(t[a.token].content, a.pos, N)),
              (c += S.length - 1),
              a.token === n && (c += N.length - 1),
              (o = s.content),
              (i = o.length),
              (L.length = v);
            continue e;
          }
      }
      P
        ? L.push({ token: n, pos: r.index, single: E, level: l })
        : g && E && (s.content = jn(s.content, r.index, Vc));
    }
  }
}
var FZ = function (e) {
    var n;
    if (!!e.md.options.typographer)
      for (n = e.tokens.length - 1; n >= 0; n--)
        e.tokens[n].type !== "inline" ||
          !qZ.test(e.tokens[n].content) ||
          LZ(e.tokens[n].children, e);
  },
  IZ = function (e) {
    var n,
      s,
      o,
      r,
      c,
      i,
      l = e.tokens;
    for (n = 0, s = l.length; n < s; n++)
      if (l[n].type === "inline") {
        for (o = l[n].children, c = o.length, r = 0; r < c; r++)
          o[r].type === "text_special" && (o[r].type = "text");
        for (r = i = 0; r < c; r++)
          o[r].type === "text" && r + 1 < c && o[r + 1].type === "text"
            ? (o[r + 1].content = o[r].content + o[r + 1].content)
            : (r !== i && (o[i] = o[r]), i++);
        r !== i && (o.length = i);
      }
  };
function cn(t, e, n) {
  (this.type = t),
    (this.tag = e),
    (this.attrs = null),
    (this.map = null),
    (this.nesting = n),
    (this.level = 0),
    (this.children = null),
    (this.content = ""),
    (this.markup = ""),
    (this.info = ""),
    (this.meta = null),
    (this.block = !1),
    (this.hidden = !1);
}
cn.prototype.attrIndex = function (e) {
  var n, s, o;
  if (!this.attrs) return -1;
  for (n = this.attrs, s = 0, o = n.length; s < o; s++)
    if (n[s][0] === e) return s;
  return -1;
};
cn.prototype.attrPush = function (e) {
  this.attrs ? this.attrs.push(e) : (this.attrs = [e]);
};
cn.prototype.attrSet = function (e, n) {
  var s = this.attrIndex(e),
    o = [e, n];
  s < 0 ? this.attrPush(o) : (this.attrs[s] = o);
};
cn.prototype.attrGet = function (e) {
  var n = this.attrIndex(e),
    s = null;
  return n >= 0 && (s = this.attrs[n][1]), s;
};
cn.prototype.attrJoin = function (e, n) {
  var s = this.attrIndex(e);
  s < 0
    ? this.attrPush([e, n])
    : (this.attrs[s][1] = this.attrs[s][1] + " " + n);
};
var ur = cn,
  MZ = ur;
function kl(t, e, n) {
  (this.src = t),
    (this.env = n),
    (this.tokens = []),
    (this.inlineMode = !1),
    (this.md = e);
}
kl.prototype.Token = MZ;
var VZ = kl,
  RZ = ar,
  oo = [
    ["normalize", vZ],
    ["block", bZ],
    ["inline", kZ],
    ["linkify", CZ],
    ["replacements", TZ],
    ["smartquotes", FZ],
    ["text_join", IZ],
  ];
function fr() {
  this.ruler = new RZ();
  for (var t = 0; t < oo.length; t++) this.ruler.push(oo[t][0], oo[t][1]);
}
fr.prototype.process = function (t) {
  var e, n, s;
  for (s = this.ruler.getRules(""), e = 0, n = s.length; e < n; e++) s[e](t);
};
fr.prototype.State = VZ;
var NZ = fr,
  ro = pe.isSpace;
function co(t, e) {
  var n = t.bMarks[e] + t.tShift[e],
    s = t.eMarks[e];
  return t.src.slice(n, s);
}
function Rc(t) {
  var e = [],
    n = 0,
    s = t.length,
    o,
    r = !1,
    c = 0,
    i = "";
  for (o = t.charCodeAt(n); n < s; )
    o === 124 &&
      (r
        ? ((i += t.substring(c, n - 1)), (c = n))
        : (e.push(i + t.substring(c, n)), (i = ""), (c = n + 1))),
      (r = o === 92),
      n++,
      (o = t.charCodeAt(n));
  return e.push(i + t.substring(c)), e;
}
var BZ = function (e, n, s, o) {
    var r, c, i, l, a, u, f, d, p, x, A, P, g, v, E, L, N, S;
    if (
      n + 2 > s ||
      ((u = n + 1), e.sCount[u] < e.blkIndent) ||
      e.sCount[u] - e.blkIndent >= 4 ||
      ((i = e.bMarks[u] + e.tShift[u]), i >= e.eMarks[u]) ||
      ((N = e.src.charCodeAt(i++)), N !== 124 && N !== 45 && N !== 58) ||
      i >= e.eMarks[u] ||
      ((S = e.src.charCodeAt(i++)),
      S !== 124 && S !== 45 && S !== 58 && !ro(S)) ||
      (N === 45 && ro(S))
    )
      return !1;
    for (; i < e.eMarks[u]; ) {
      if (
        ((r = e.src.charCodeAt(i)), r !== 124 && r !== 45 && r !== 58 && !ro(r))
      )
        return !1;
      i++;
    }
    for (c = co(e, n + 1), f = c.split("|"), x = [], l = 0; l < f.length; l++) {
      if (((A = f[l].trim()), !A)) {
        if (l === 0 || l === f.length - 1) continue;
        return !1;
      }
      if (!/^:?-+:?$/.test(A)) return !1;
      A.charCodeAt(A.length - 1) === 58
        ? x.push(A.charCodeAt(0) === 58 ? "center" : "right")
        : A.charCodeAt(0) === 58
        ? x.push("left")
        : x.push("");
    }
    if (
      ((c = co(e, n).trim()),
      c.indexOf("|") === -1 ||
        e.sCount[n] - e.blkIndent >= 4 ||
        ((f = Rc(c)),
        f.length && f[0] === "" && f.shift(),
        f.length && f[f.length - 1] === "" && f.pop(),
        (d = f.length),
        d === 0 || d !== x.length))
    )
      return !1;
    if (o) return !0;
    for (
      v = e.parentType,
        e.parentType = "table",
        L = e.md.block.ruler.getRules("blockquote"),
        p = e.push("table_open", "table", 1),
        p.map = P = [n, 0],
        p = e.push("thead_open", "thead", 1),
        p.map = [n, n + 1],
        p = e.push("tr_open", "tr", 1),
        p.map = [n, n + 1],
        l = 0;
      l < f.length;
      l++
    )
      (p = e.push("th_open", "th", 1)),
        x[l] && (p.attrs = [["style", "text-align:" + x[l]]]),
        (p = e.push("inline", "", 0)),
        (p.content = f[l].trim()),
        (p.children = []),
        (p = e.push("th_close", "th", -1));
    for (
      p = e.push("tr_close", "tr", -1),
        p = e.push("thead_close", "thead", -1),
        u = n + 2;
      u < s && !(e.sCount[u] < e.blkIndent);
      u++
    ) {
      for (E = !1, l = 0, a = L.length; l < a; l++)
        if (L[l](e, u, s, !0)) {
          E = !0;
          break;
        }
      if (E || ((c = co(e, u).trim()), !c) || e.sCount[u] - e.blkIndent >= 4)
        break;
      for (
        f = Rc(c),
          f.length && f[0] === "" && f.shift(),
          f.length && f[f.length - 1] === "" && f.pop(),
          u === n + 2 &&
            ((p = e.push("tbody_open", "tbody", 1)), (p.map = g = [n + 2, 0])),
          p = e.push("tr_open", "tr", 1),
          p.map = [u, u + 1],
          l = 0;
        l < d;
        l++
      )
        (p = e.push("td_open", "td", 1)),
          x[l] && (p.attrs = [["style", "text-align:" + x[l]]]),
          (p = e.push("inline", "", 0)),
          (p.content = f[l] ? f[l].trim() : ""),
          (p.children = []),
          (p = e.push("td_close", "td", -1));
      p = e.push("tr_close", "tr", -1);
    }
    return (
      g && ((p = e.push("tbody_close", "tbody", -1)), (g[1] = u)),
      (p = e.push("table_close", "table", -1)),
      (P[1] = u),
      (e.parentType = v),
      (e.line = u),
      !0
    );
  },
  OZ = function (e, n, s) {
    var o, r, c;
    if (e.sCount[n] - e.blkIndent < 4) return !1;
    for (r = o = n + 1; o < s; ) {
      if (e.isEmpty(o)) {
        o++;
        continue;
      }
      if (e.sCount[o] - e.blkIndent >= 4) {
        o++, (r = o);
        continue;
      }
      break;
    }
    return (
      (e.line = r),
      (c = e.push("code_block", "code", 0)),
      (c.content =
        e.getLines(n, r, 4 + e.blkIndent, !1) +
        `
`),
      (c.map = [n, e.line]),
      !0
    );
  },
  zZ = function (e, n, s, o) {
    var r,
      c,
      i,
      l,
      a,
      u,
      f,
      d = !1,
      p = e.bMarks[n] + e.tShift[n],
      x = e.eMarks[n];
    if (
      e.sCount[n] - e.blkIndent >= 4 ||
      p + 3 > x ||
      ((r = e.src.charCodeAt(p)), r !== 126 && r !== 96) ||
      ((a = p), (p = e.skipChars(p, r)), (c = p - a), c < 3) ||
      ((f = e.src.slice(a, p)),
      (i = e.src.slice(p, x)),
      r === 96 && i.indexOf(String.fromCharCode(r)) >= 0)
    )
      return !1;
    if (o) return !0;
    for (
      l = n;
      l++,
        !(
          l >= s ||
          ((p = a = e.bMarks[l] + e.tShift[l]),
          (x = e.eMarks[l]),
          p < x && e.sCount[l] < e.blkIndent)
        );

    )
      if (
        e.src.charCodeAt(p) === r &&
        !(e.sCount[l] - e.blkIndent >= 4) &&
        ((p = e.skipChars(p, r)),
        !(p - a < c) && ((p = e.skipSpaces(p)), !(p < x)))
      ) {
        d = !0;
        break;
      }
    return (
      (c = e.sCount[n]),
      (e.line = l + (d ? 1 : 0)),
      (u = e.push("fence", "code", 0)),
      (u.info = i),
      (u.content = e.getLines(n + 1, l, c, !0)),
      (u.markup = f),
      (u.map = [n, e.line]),
      !0
    );
  },
  Nc = pe.isSpace,
  HZ = function (e, n, s, o) {
    var r,
      c,
      i,
      l,
      a,
      u,
      f,
      d,
      p,
      x,
      A,
      P,
      g,
      v,
      E,
      L,
      N,
      S,
      z,
      T,
      J = e.lineMax,
      R = e.bMarks[n] + e.tShift[n],
      G = e.eMarks[n];
    if (e.sCount[n] - e.blkIndent >= 4 || e.src.charCodeAt(R++) !== 62)
      return !1;
    if (o) return !0;
    for (
      l = p = e.sCount[n] + 1,
        e.src.charCodeAt(R) === 32
          ? (R++, l++, p++, (r = !1), (L = !0))
          : e.src.charCodeAt(R) === 9
          ? ((L = !0),
            (e.bsCount[n] + p) % 4 === 3 ? (R++, l++, p++, (r = !1)) : (r = !0))
          : (L = !1),
        x = [e.bMarks[n]],
        e.bMarks[n] = R;
      R < G && ((c = e.src.charCodeAt(R)), Nc(c));

    ) {
      c === 9 ? (p += 4 - ((p + e.bsCount[n] + (r ? 1 : 0)) % 4)) : p++;
      R++;
    }
    for (
      A = [e.bsCount[n]],
        e.bsCount[n] = e.sCount[n] + 1 + (L ? 1 : 0),
        u = R >= G,
        v = [e.sCount[n]],
        e.sCount[n] = p - l,
        E = [e.tShift[n]],
        e.tShift[n] = R - e.bMarks[n],
        S = e.md.block.ruler.getRules("blockquote"),
        g = e.parentType,
        e.parentType = "blockquote",
        d = n + 1;
      d < s &&
      ((T = e.sCount[d] < e.blkIndent),
      (R = e.bMarks[d] + e.tShift[d]),
      (G = e.eMarks[d]),
      !(R >= G));
      d++
    ) {
      if (e.src.charCodeAt(R++) === 62 && !T) {
        for (
          l = p = e.sCount[d] + 1,
            e.src.charCodeAt(R) === 32
              ? (R++, l++, p++, (r = !1), (L = !0))
              : e.src.charCodeAt(R) === 9
              ? ((L = !0),
                (e.bsCount[d] + p) % 4 === 3
                  ? (R++, l++, p++, (r = !1))
                  : (r = !0))
              : (L = !1),
            x.push(e.bMarks[d]),
            e.bMarks[d] = R;
          R < G && ((c = e.src.charCodeAt(R)), Nc(c));

        ) {
          c === 9 ? (p += 4 - ((p + e.bsCount[d] + (r ? 1 : 0)) % 4)) : p++;
          R++;
        }
        (u = R >= G),
          A.push(e.bsCount[d]),
          (e.bsCount[d] = e.sCount[d] + 1 + (L ? 1 : 0)),
          v.push(e.sCount[d]),
          (e.sCount[d] = p - l),
          E.push(e.tShift[d]),
          (e.tShift[d] = R - e.bMarks[d]);
        continue;
      }
      if (u) break;
      for (N = !1, i = 0, a = S.length; i < a; i++)
        if (S[i](e, d, s, !0)) {
          N = !0;
          break;
        }
      if (N) {
        (e.lineMax = d),
          e.blkIndent !== 0 &&
            (x.push(e.bMarks[d]),
            A.push(e.bsCount[d]),
            E.push(e.tShift[d]),
            v.push(e.sCount[d]),
            (e.sCount[d] -= e.blkIndent));
        break;
      }
      x.push(e.bMarks[d]),
        A.push(e.bsCount[d]),
        E.push(e.tShift[d]),
        v.push(e.sCount[d]),
        (e.sCount[d] = -1);
    }
    for (
      P = e.blkIndent,
        e.blkIndent = 0,
        z = e.push("blockquote_open", "blockquote", 1),
        z.markup = ">",
        z.map = f = [n, 0],
        e.md.block.tokenize(e, n, d),
        z = e.push("blockquote_close", "blockquote", -1),
        z.markup = ">",
        e.lineMax = J,
        e.parentType = g,
        f[1] = e.line,
        i = 0;
      i < E.length;
      i++
    )
      (e.bMarks[i + n] = x[i]),
        (e.tShift[i + n] = E[i]),
        (e.sCount[i + n] = v[i]),
        (e.bsCount[i + n] = A[i]);
    return (e.blkIndent = P), !0;
  },
  UZ = pe.isSpace,
  jZ = function (e, n, s, o) {
    var r,
      c,
      i,
      l,
      a = e.bMarks[n] + e.tShift[n],
      u = e.eMarks[n];
    if (
      e.sCount[n] - e.blkIndent >= 4 ||
      ((r = e.src.charCodeAt(a++)), r !== 42 && r !== 45 && r !== 95)
    )
      return !1;
    for (c = 1; a < u; ) {
      if (((i = e.src.charCodeAt(a++)), i !== r && !UZ(i))) return !1;
      i === r && c++;
    }
    return c < 3
      ? !1
      : (o ||
          ((e.line = n + 1),
          (l = e.push("hr", "hr", 0)),
          (l.map = [n, e.line]),
          (l.markup = Array(c + 1).join(String.fromCharCode(r)))),
        !0);
  },
  yl = pe.isSpace;
function Bc(t, e) {
  var n, s, o, r;
  return (
    (s = t.bMarks[e] + t.tShift[e]),
    (o = t.eMarks[e]),
    (n = t.src.charCodeAt(s++)),
    (n !== 42 && n !== 45 && n !== 43) ||
    (s < o && ((r = t.src.charCodeAt(s)), !yl(r)))
      ? -1
      : s
  );
}
function Oc(t, e) {
  var n,
    s = t.bMarks[e] + t.tShift[e],
    o = s,
    r = t.eMarks[e];
  if (o + 1 >= r || ((n = t.src.charCodeAt(o++)), n < 48 || n > 57)) return -1;
  for (;;) {
    if (o >= r) return -1;
    if (((n = t.src.charCodeAt(o++)), n >= 48 && n <= 57)) {
      if (o - s >= 10) return -1;
      continue;
    }
    if (n === 41 || n === 46) break;
    return -1;
  }
  return o < r && ((n = t.src.charCodeAt(o)), !yl(n)) ? -1 : o;
}
function GZ(t, e) {
  var n,
    s,
    o = t.level + 2;
  for (n = e + 2, s = t.tokens.length - 2; n < s; n++)
    t.tokens[n].level === o &&
      t.tokens[n].type === "paragraph_open" &&
      ((t.tokens[n + 2].hidden = !0), (t.tokens[n].hidden = !0), (n += 2));
}
var KZ = function (e, n, s, o) {
    var r,
      c,
      i,
      l,
      a,
      u,
      f,
      d,
      p,
      x,
      A,
      P,
      g,
      v,
      E,
      L,
      N,
      S,
      z,
      T,
      J,
      R,
      G,
      U,
      se,
      k,
      ie,
      W,
      fe = !1,
      me = !0;
    if (
      e.sCount[n] - e.blkIndent >= 4 ||
      (e.listIndent >= 0 &&
        e.sCount[n] - e.listIndent >= 4 &&
        e.sCount[n] < e.blkIndent)
    )
      return !1;
    if (
      (o &&
        e.parentType === "paragraph" &&
        e.sCount[n] >= e.blkIndent &&
        (fe = !0),
      (G = Oc(e, n)) >= 0)
    ) {
      if (
        ((f = !0),
        (se = e.bMarks[n] + e.tShift[n]),
        (g = Number(e.src.slice(se, G - 1))),
        fe && g !== 1)
      )
        return !1;
    } else if ((G = Bc(e, n)) >= 0) f = !1;
    else return !1;
    if (fe && e.skipSpaces(G) >= e.eMarks[n]) return !1;
    if (((P = e.src.charCodeAt(G - 1)), o)) return !0;
    for (
      A = e.tokens.length,
        f
          ? ((W = e.push("ordered_list_open", "ol", 1)),
            g !== 1 && (W.attrs = [["start", g]]))
          : (W = e.push("bullet_list_open", "ul", 1)),
        W.map = x = [n, 0],
        W.markup = String.fromCharCode(P),
        E = n,
        U = !1,
        ie = e.md.block.ruler.getRules("list"),
        S = e.parentType,
        e.parentType = "list";
      E < s;

    ) {
      for (
        R = G,
          v = e.eMarks[E],
          u = L = e.sCount[E] + G - (e.bMarks[n] + e.tShift[n]);
        R < v;

      ) {
        if (((r = e.src.charCodeAt(R)), r === 9))
          L += 4 - ((L + e.bsCount[E]) % 4);
        else if (r === 32) L++;
        else break;
        R++;
      }
      if (
        ((c = R),
        c >= v ? (a = 1) : (a = L - u),
        a > 4 && (a = 1),
        (l = u + a),
        (W = e.push("list_item_open", "li", 1)),
        (W.markup = String.fromCharCode(P)),
        (W.map = d = [n, 0]),
        f && (W.info = e.src.slice(se, G - 1)),
        (J = e.tight),
        (T = e.tShift[n]),
        (z = e.sCount[n]),
        (N = e.listIndent),
        (e.listIndent = e.blkIndent),
        (e.blkIndent = l),
        (e.tight = !0),
        (e.tShift[n] = c - e.bMarks[n]),
        (e.sCount[n] = L),
        c >= v && e.isEmpty(n + 1)
          ? (e.line = Math.min(e.line + 2, s))
          : e.md.block.tokenize(e, n, s, !0),
        (!e.tight || U) && (me = !1),
        (U = e.line - n > 1 && e.isEmpty(e.line - 1)),
        (e.blkIndent = e.listIndent),
        (e.listIndent = N),
        (e.tShift[n] = T),
        (e.sCount[n] = z),
        (e.tight = J),
        (W = e.push("list_item_close", "li", -1)),
        (W.markup = String.fromCharCode(P)),
        (E = n = e.line),
        (d[1] = E),
        (c = e.bMarks[n]),
        E >= s || e.sCount[E] < e.blkIndent || e.sCount[n] - e.blkIndent >= 4)
      )
        break;
      for (k = !1, i = 0, p = ie.length; i < p; i++)
        if (ie[i](e, E, s, !0)) {
          k = !0;
          break;
        }
      if (k) break;
      if (f) {
        if (((G = Oc(e, E)), G < 0)) break;
        se = e.bMarks[E] + e.tShift[E];
      } else if (((G = Bc(e, E)), G < 0)) break;
      if (P !== e.src.charCodeAt(G - 1)) break;
    }
    return (
      f
        ? (W = e.push("ordered_list_close", "ol", -1))
        : (W = e.push("bullet_list_close", "ul", -1)),
      (W.markup = String.fromCharCode(P)),
      (x[1] = E),
      (e.line = E),
      (e.parentType = S),
      me && GZ(e, A),
      !0
    );
  },
  ZZ = pe.normalizeReference,
  Gn = pe.isSpace,
  WZ = function (e, n, s, o) {
    var r,
      c,
      i,
      l,
      a,
      u,
      f,
      d,
      p,
      x,
      A,
      P,
      g,
      v,
      E,
      L,
      N = 0,
      S = e.bMarks[n] + e.tShift[n],
      z = e.eMarks[n],
      T = n + 1;
    if (e.sCount[n] - e.blkIndent >= 4 || e.src.charCodeAt(S) !== 91) return !1;
    for (; ++S < z; )
      if (e.src.charCodeAt(S) === 93 && e.src.charCodeAt(S - 1) !== 92) {
        if (S + 1 === z || e.src.charCodeAt(S + 1) !== 58) return !1;
        break;
      }
    for (
      l = e.lineMax,
        E = e.md.block.ruler.getRules("reference"),
        x = e.parentType,
        e.parentType = "reference";
      T < l && !e.isEmpty(T);
      T++
    )
      if (!(e.sCount[T] - e.blkIndent > 3) && !(e.sCount[T] < 0)) {
        for (v = !1, u = 0, f = E.length; u < f; u++)
          if (E[u](e, T, l, !0)) {
            v = !0;
            break;
          }
        if (v) break;
      }
    for (
      g = e.getLines(n, T, e.blkIndent, !1).trim(), z = g.length, S = 1;
      S < z;
      S++
    ) {
      if (((r = g.charCodeAt(S)), r === 91)) return !1;
      if (r === 93) {
        p = S;
        break;
      } else
        r === 10
          ? N++
          : r === 92 && (S++, S < z && g.charCodeAt(S) === 10 && N++);
    }
    if (p < 0 || g.charCodeAt(p + 1) !== 58) return !1;
    for (S = p + 2; S < z; S++)
      if (((r = g.charCodeAt(S)), r === 10)) N++;
      else if (!Gn(r)) break;
    if (
      ((A = e.md.helpers.parseLinkDestination(g, S, z)),
      !A.ok || ((a = e.md.normalizeLink(A.str)), !e.md.validateLink(a)))
    )
      return !1;
    for (S = A.pos, N += A.lines, c = S, i = N, P = S; S < z; S++)
      if (((r = g.charCodeAt(S)), r === 10)) N++;
      else if (!Gn(r)) break;
    for (
      A = e.md.helpers.parseLinkTitle(g, S, z),
        S < z && P !== S && A.ok
          ? ((L = A.str), (S = A.pos), (N += A.lines))
          : ((L = ""), (S = c), (N = i));
      S < z && ((r = g.charCodeAt(S)), !!Gn(r));

    )
      S++;
    if (S < z && g.charCodeAt(S) !== 10 && L)
      for (L = "", S = c, N = i; S < z && ((r = g.charCodeAt(S)), !!Gn(r)); )
        S++;
    return (S < z && g.charCodeAt(S) !== 10) || ((d = ZZ(g.slice(1, p))), !d)
      ? !1
      : (o ||
          (typeof e.env.references > "u" && (e.env.references = {}),
          typeof e.env.references[d] > "u" &&
            (e.env.references[d] = { title: L, href: a }),
          (e.parentType = x),
          (e.line = n + N + 1)),
        !0);
  },
  YZ = [
    "address",
    "article",
    "aside",
    "base",
    "basefont",
    "blockquote",
    "body",
    "caption",
    "center",
    "col",
    "colgroup",
    "dd",
    "details",
    "dialog",
    "dir",
    "div",
    "dl",
    "dt",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "frame",
    "frameset",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hr",
    "html",
    "iframe",
    "legend",
    "li",
    "link",
    "main",
    "menu",
    "menuitem",
    "nav",
    "noframes",
    "ol",
    "optgroup",
    "option",
    "p",
    "param",
    "section",
    "source",
    "summary",
    "table",
    "tbody",
    "td",
    "tfoot",
    "th",
    "thead",
    "title",
    "tr",
    "track",
    "ul",
  ],
  Vs = {},
  JZ = "[a-zA-Z_:][a-zA-Z0-9:._-]*",
  QZ = "[^\"'=<>`\\x00-\\x20]+",
  XZ = "'[^']*'",
  eW = '"[^"]*"',
  tW = "(?:" + QZ + "|" + XZ + "|" + eW + ")",
  nW = "(?:\\s+" + JZ + "(?:\\s*=\\s*" + tW + ")?)",
  xl = "<[A-Za-z][A-Za-z0-9\\-]*" + nW + "*\\s*\\/?>",
  wl = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",
  sW = "<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->",
  oW = "<[?][\\s\\S]*?[?]>",
  rW = "<![A-Z]+\\s+[^>]*>",
  cW = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
  iW = new RegExp(
    "^(?:" + xl + "|" + wl + "|" + sW + "|" + oW + "|" + rW + "|" + cW + ")"
  ),
  lW = new RegExp("^(?:" + xl + "|" + wl + ")");
Vs.HTML_TAG_RE = iW;
Vs.HTML_OPEN_CLOSE_TAG_RE = lW;
var aW = YZ,
  uW = Vs.HTML_OPEN_CLOSE_TAG_RE,
  Ut = [
    [
      /^<(script|pre|style|textarea)(?=(\s|>|$))/i,
      /<\/(script|pre|style|textarea)>/i,
      !0,
    ],
    [/^<!--/, /-->/, !0],
    [/^<\?/, /\?>/, !0],
    [/^<![A-Z]/, />/, !0],
    [/^<!\[CDATA\[/, /\]\]>/, !0],
    [new RegExp("^</?(" + aW.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, !0],
    [new RegExp(uW.source + "\\s*$"), /^$/, !1],
  ],
  fW = function (e, n, s, o) {
    var r,
      c,
      i,
      l,
      a = e.bMarks[n] + e.tShift[n],
      u = e.eMarks[n];
    if (
      e.sCount[n] - e.blkIndent >= 4 ||
      !e.md.options.html ||
      e.src.charCodeAt(a) !== 60
    )
      return !1;
    for (l = e.src.slice(a, u), r = 0; r < Ut.length && !Ut[r][0].test(l); r++);
    if (r === Ut.length) return !1;
    if (o) return Ut[r][2];
    if (((c = n + 1), !Ut[r][1].test(l))) {
      for (; c < s && !(e.sCount[c] < e.blkIndent); c++)
        if (
          ((a = e.bMarks[c] + e.tShift[c]),
          (u = e.eMarks[c]),
          (l = e.src.slice(a, u)),
          Ut[r][1].test(l))
        ) {
          l.length !== 0 && c++;
          break;
        }
    }
    return (
      (e.line = c),
      (i = e.push("html_block", "", 0)),
      (i.map = [n, c]),
      (i.content = e.getLines(n, c, e.blkIndent, !0)),
      !0
    );
  },
  zc = pe.isSpace,
  dW = function (e, n, s, o) {
    var r,
      c,
      i,
      l,
      a = e.bMarks[n] + e.tShift[n],
      u = e.eMarks[n];
    if (
      e.sCount[n] - e.blkIndent >= 4 ||
      ((r = e.src.charCodeAt(a)), r !== 35 || a >= u)
    )
      return !1;
    for (c = 1, r = e.src.charCodeAt(++a); r === 35 && a < u && c <= 6; )
      c++, (r = e.src.charCodeAt(++a));
    return c > 6 || (a < u && !zc(r))
      ? !1
      : (o ||
          ((u = e.skipSpacesBack(u, a)),
          (i = e.skipCharsBack(u, 35, a)),
          i > a && zc(e.src.charCodeAt(i - 1)) && (u = i),
          (e.line = n + 1),
          (l = e.push("heading_open", "h" + String(c), 1)),
          (l.markup = "########".slice(0, c)),
          (l.map = [n, e.line]),
          (l = e.push("inline", "", 0)),
          (l.content = e.src.slice(a, u).trim()),
          (l.map = [n, e.line]),
          (l.children = []),
          (l = e.push("heading_close", "h" + String(c), -1)),
          (l.markup = "########".slice(0, c))),
        !0);
  },
  hW = function (e, n, s) {
    var o,
      r,
      c,
      i,
      l,
      a,
      u,
      f,
      d,
      p = n + 1,
      x,
      A = e.md.block.ruler.getRules("paragraph");
    if (e.sCount[n] - e.blkIndent >= 4) return !1;
    for (
      x = e.parentType, e.parentType = "paragraph";
      p < s && !e.isEmpty(p);
      p++
    )
      if (!(e.sCount[p] - e.blkIndent > 3)) {
        if (
          e.sCount[p] >= e.blkIndent &&
          ((a = e.bMarks[p] + e.tShift[p]),
          (u = e.eMarks[p]),
          a < u &&
            ((d = e.src.charCodeAt(a)),
            (d === 45 || d === 61) &&
              ((a = e.skipChars(a, d)), (a = e.skipSpaces(a)), a >= u)))
        ) {
          f = d === 61 ? 1 : 2;
          break;
        }
        if (!(e.sCount[p] < 0)) {
          for (r = !1, c = 0, i = A.length; c < i; c++)
            if (A[c](e, p, s, !0)) {
              r = !0;
              break;
            }
          if (r) break;
        }
      }
    return f
      ? ((o = e.getLines(n, p, e.blkIndent, !1).trim()),
        (e.line = p + 1),
        (l = e.push("heading_open", "h" + String(f), 1)),
        (l.markup = String.fromCharCode(d)),
        (l.map = [n, e.line]),
        (l = e.push("inline", "", 0)),
        (l.content = o),
        (l.map = [n, e.line - 1]),
        (l.children = []),
        (l = e.push("heading_close", "h" + String(f), -1)),
        (l.markup = String.fromCharCode(d)),
        (e.parentType = x),
        !0)
      : !1;
  },
  pW = function (e, n) {
    var s,
      o,
      r,
      c,
      i,
      l,
      a = n + 1,
      u = e.md.block.ruler.getRules("paragraph"),
      f = e.lineMax;
    for (
      l = e.parentType, e.parentType = "paragraph";
      a < f && !e.isEmpty(a);
      a++
    )
      if (!(e.sCount[a] - e.blkIndent > 3) && !(e.sCount[a] < 0)) {
        for (o = !1, r = 0, c = u.length; r < c; r++)
          if (u[r](e, a, f, !0)) {
            o = !0;
            break;
          }
        if (o) break;
      }
    return (
      (s = e.getLines(n, a, e.blkIndent, !1).trim()),
      (e.line = a),
      (i = e.push("paragraph_open", "p", 1)),
      (i.map = [n, e.line]),
      (i = e.push("inline", "", 0)),
      (i.content = s),
      (i.map = [n, e.line]),
      (i.children = []),
      (i = e.push("paragraph_close", "p", -1)),
      (e.parentType = l),
      !0
    );
  },
  Cl = ur,
  Rs = pe.isSpace;
function rt(t, e, n, s) {
  var o, r, c, i, l, a, u, f;
  for (
    this.src = t,
      this.md = e,
      this.env = n,
      this.tokens = s,
      this.bMarks = [],
      this.eMarks = [],
      this.tShift = [],
      this.sCount = [],
      this.bsCount = [],
      this.blkIndent = 0,
      this.line = 0,
      this.lineMax = 0,
      this.tight = !1,
      this.ddIndent = -1,
      this.listIndent = -1,
      this.parentType = "root",
      this.level = 0,
      this.result = "",
      r = this.src,
      f = !1,
      c = i = a = u = 0,
      l = r.length;
    i < l;
    i++
  ) {
    if (((o = r.charCodeAt(i)), !f))
      if (Rs(o)) {
        a++, o === 9 ? (u += 4 - (u % 4)) : u++;
        continue;
      } else f = !0;
    (o === 10 || i === l - 1) &&
      (o !== 10 && i++,
      this.bMarks.push(c),
      this.eMarks.push(i),
      this.tShift.push(a),
      this.sCount.push(u),
      this.bsCount.push(0),
      (f = !1),
      (a = 0),
      (u = 0),
      (c = i + 1));
  }
  this.bMarks.push(r.length),
    this.eMarks.push(r.length),
    this.tShift.push(0),
    this.sCount.push(0),
    this.bsCount.push(0),
    (this.lineMax = this.bMarks.length - 1);
}
rt.prototype.push = function (t, e, n) {
  var s = new Cl(t, e, n);
  return (
    (s.block = !0),
    n < 0 && this.level--,
    (s.level = this.level),
    n > 0 && this.level++,
    this.tokens.push(s),
    s
  );
};
rt.prototype.isEmpty = function (e) {
  return this.bMarks[e] + this.tShift[e] >= this.eMarks[e];
};
rt.prototype.skipEmptyLines = function (e) {
  for (
    var n = this.lineMax;
    e < n && !(this.bMarks[e] + this.tShift[e] < this.eMarks[e]);
    e++
  );
  return e;
};
rt.prototype.skipSpaces = function (e) {
  for (
    var n, s = this.src.length;
    e < s && ((n = this.src.charCodeAt(e)), !!Rs(n));
    e++
  );
  return e;
};
rt.prototype.skipSpacesBack = function (e, n) {
  if (e <= n) return e;
  for (; e > n; ) if (!Rs(this.src.charCodeAt(--e))) return e + 1;
  return e;
};
rt.prototype.skipChars = function (e, n) {
  for (var s = this.src.length; e < s && this.src.charCodeAt(e) === n; e++);
  return e;
};
rt.prototype.skipCharsBack = function (e, n, s) {
  if (e <= s) return e;
  for (; e > s; ) if (n !== this.src.charCodeAt(--e)) return e + 1;
  return e;
};
rt.prototype.getLines = function (e, n, s, o) {
  var r,
    c,
    i,
    l,
    a,
    u,
    f,
    d = e;
  if (e >= n) return "";
  for (u = new Array(n - e), r = 0; d < n; d++, r++) {
    for (
      c = 0,
        f = l = this.bMarks[d],
        d + 1 < n || o ? (a = this.eMarks[d] + 1) : (a = this.eMarks[d]);
      l < a && c < s;

    ) {
      if (((i = this.src.charCodeAt(l)), Rs(i)))
        i === 9 ? (c += 4 - ((c + this.bsCount[d]) % 4)) : c++;
      else if (l - f < this.tShift[d]) c++;
      else break;
      l++;
    }
    c > s
      ? (u[r] = new Array(c - s + 1).join(" ") + this.src.slice(l, a))
      : (u[r] = this.src.slice(l, a));
  }
  return u.join("");
};
rt.prototype.Token = Cl;
var _W = rt,
  mW = ar,
  Kn = [
    ["table", BZ, ["paragraph", "reference"]],
    ["code", OZ],
    ["fence", zZ, ["paragraph", "reference", "blockquote", "list"]],
    ["blockquote", HZ, ["paragraph", "reference", "blockquote", "list"]],
    ["hr", jZ, ["paragraph", "reference", "blockquote", "list"]],
    ["list", KZ, ["paragraph", "reference", "blockquote"]],
    ["reference", WZ],
    ["html_block", fW, ["paragraph", "reference", "blockquote"]],
    ["heading", dW, ["paragraph", "reference", "blockquote"]],
    ["lheading", hW],
    ["paragraph", pW],
  ];
function Ns() {
  this.ruler = new mW();
  for (var t = 0; t < Kn.length; t++)
    this.ruler.push(Kn[t][0], Kn[t][1], { alt: (Kn[t][2] || []).slice() });
}
Ns.prototype.tokenize = function (t, e, n) {
  for (
    var s,
      o,
      r = this.ruler.getRules(""),
      c = r.length,
      i = e,
      l = !1,
      a = t.md.options.maxNesting;
    i < n &&
    ((t.line = i = t.skipEmptyLines(i)),
    !(i >= n || t.sCount[i] < t.blkIndent));

  ) {
    if (t.level >= a) {
      t.line = n;
      break;
    }
    for (o = 0; o < c && ((s = r[o](t, i, n, !1)), !s); o++);
    (t.tight = !l),
      t.isEmpty(t.line - 1) && (l = !0),
      (i = t.line),
      i < n && t.isEmpty(i) && ((l = !0), i++, (t.line = i));
  }
};
Ns.prototype.parse = function (t, e, n, s) {
  var o;
  !t || ((o = new this.State(t, e, n, s)), this.tokenize(o, o.line, o.lineMax));
};
Ns.prototype.State = _W;
var gW = Ns;
function vW(t) {
  switch (t) {
    case 10:
    case 33:
    case 35:
    case 36:
    case 37:
    case 38:
    case 42:
    case 43:
    case 45:
    case 58:
    case 60:
    case 61:
    case 62:
    case 64:
    case 91:
    case 92:
    case 93:
    case 94:
    case 95:
    case 96:
    case 123:
    case 125:
    case 126:
      return !0;
    default:
      return !1;
  }
}
var bW = function (e, n) {
    for (var s = e.pos; s < e.posMax && !vW(e.src.charCodeAt(s)); ) s++;
    return s === e.pos
      ? !1
      : (n || (e.pending += e.src.slice(e.pos, s)), (e.pos = s), !0);
  },
  kW = /(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i,
  yW = function (e, n) {
    var s, o, r, c, i, l, a, u;
    return !e.md.options.linkify ||
      e.linkLevel > 0 ||
      ((s = e.pos), (o = e.posMax), s + 3 > o) ||
      e.src.charCodeAt(s) !== 58 ||
      e.src.charCodeAt(s + 1) !== 47 ||
      e.src.charCodeAt(s + 2) !== 47 ||
      ((r = e.pending.match(kW)), !r) ||
      ((c = r[1]),
      (i = e.md.linkify.matchAtStart(e.src.slice(s - c.length))),
      !i) ||
      ((l = i.url),
      (l = l.replace(/\*+$/, "")),
      (a = e.md.normalizeLink(l)),
      !e.md.validateLink(a))
      ? !1
      : (n ||
          ((e.pending = e.pending.slice(0, -c.length)),
          (u = e.push("link_open", "a", 1)),
          (u.attrs = [["href", a]]),
          (u.markup = "linkify"),
          (u.info = "auto"),
          (u = e.push("text", "", 0)),
          (u.content = e.md.normalizeLinkText(l)),
          (u = e.push("link_close", "a", -1)),
          (u.markup = "linkify"),
          (u.info = "auto")),
        (e.pos += l.length - c.length),
        !0);
  },
  xW = pe.isSpace,
  wW = function (e, n) {
    var s,
      o,
      r,
      c = e.pos;
    if (e.src.charCodeAt(c) !== 10) return !1;
    if (((s = e.pending.length - 1), (o = e.posMax), !n))
      if (s >= 0 && e.pending.charCodeAt(s) === 32)
        if (s >= 1 && e.pending.charCodeAt(s - 1) === 32) {
          for (r = s - 1; r >= 1 && e.pending.charCodeAt(r - 1) === 32; ) r--;
          (e.pending = e.pending.slice(0, r)), e.push("hardbreak", "br", 0);
        } else
          (e.pending = e.pending.slice(0, -1)), e.push("softbreak", "br", 0);
      else e.push("softbreak", "br", 0);
    for (c++; c < o && xW(e.src.charCodeAt(c)); ) c++;
    return (e.pos = c), !0;
  },
  CW = pe.isSpace,
  dr = [];
for (var Hc = 0; Hc < 256; Hc++) dr.push(0);
"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function (t) {
  dr[t.charCodeAt(0)] = 1;
});
var AW = function (e, n) {
    var s,
      o,
      r,
      c,
      i,
      l = e.pos,
      a = e.posMax;
    if (e.src.charCodeAt(l) !== 92 || (l++, l >= a)) return !1;
    if (((s = e.src.charCodeAt(l)), s === 10)) {
      for (
        n || e.push("hardbreak", "br", 0), l++;
        l < a && ((s = e.src.charCodeAt(l)), !!CW(s));

      )
        l++;
      return (e.pos = l), !0;
    }
    return (
      (c = e.src[l]),
      s >= 55296 &&
        s <= 56319 &&
        l + 1 < a &&
        ((o = e.src.charCodeAt(l + 1)),
        o >= 56320 && o <= 57343 && ((c += e.src[l + 1]), l++)),
      (r = "\\" + c),
      n ||
        ((i = e.push("text_special", "", 0)),
        s < 256 && dr[s] !== 0 ? (i.content = c) : (i.content = r),
        (i.markup = r),
        (i.info = "escape")),
      (e.pos = l + 1),
      !0
    );
  },
  EW = function (e, n) {
    var s,
      o,
      r,
      c,
      i,
      l,
      a,
      u,
      f = e.pos,
      d = e.src.charCodeAt(f);
    if (d !== 96) return !1;
    for (s = f, f++, o = e.posMax; f < o && e.src.charCodeAt(f) === 96; ) f++;
    if (
      ((r = e.src.slice(s, f)),
      (a = r.length),
      e.backticksScanned && (e.backticks[a] || 0) <= s)
    )
      return n || (e.pending += r), (e.pos += a), !0;
    for (i = l = f; (i = e.src.indexOf("`", l)) !== -1; ) {
      for (l = i + 1; l < o && e.src.charCodeAt(l) === 96; ) l++;
      if (((u = l - i), u === a))
        return (
          n ||
            ((c = e.push("code_inline", "code", 0)),
            (c.markup = r),
            (c.content = e.src
              .slice(f, i)
              .replace(/\n/g, " ")
              .replace(/^ (.+) $/, "$1"))),
          (e.pos = l),
          !0
        );
      e.backticks[u] = i;
    }
    return (e.backticksScanned = !0), n || (e.pending += r), (e.pos += a), !0;
  },
  Bs = {};
Bs.tokenize = function (e, n) {
  var s,
    o,
    r,
    c,
    i,
    l = e.pos,
    a = e.src.charCodeAt(l);
  if (
    n ||
    a !== 126 ||
    ((o = e.scanDelims(e.pos, !0)),
    (c = o.length),
    (i = String.fromCharCode(a)),
    c < 2)
  )
    return !1;
  for (
    c % 2 && ((r = e.push("text", "", 0)), (r.content = i), c--), s = 0;
    s < c;
    s += 2
  )
    (r = e.push("text", "", 0)),
      (r.content = i + i),
      e.delimiters.push({
        marker: a,
        length: 0,
        token: e.tokens.length - 1,
        end: -1,
        open: o.can_open,
        close: o.can_close,
      });
  return (e.pos += o.length), !0;
};
function Uc(t, e) {
  var n,
    s,
    o,
    r,
    c,
    i = [],
    l = e.length;
  for (n = 0; n < l; n++)
    (o = e[n]),
      o.marker === 126 &&
        o.end !== -1 &&
        ((r = e[o.end]),
        (c = t.tokens[o.token]),
        (c.type = "s_open"),
        (c.tag = "s"),
        (c.nesting = 1),
        (c.markup = "~~"),
        (c.content = ""),
        (c = t.tokens[r.token]),
        (c.type = "s_close"),
        (c.tag = "s"),
        (c.nesting = -1),
        (c.markup = "~~"),
        (c.content = ""),
        t.tokens[r.token - 1].type === "text" &&
          t.tokens[r.token - 1].content === "~" &&
          i.push(r.token - 1));
  for (; i.length; ) {
    for (
      n = i.pop(), s = n + 1;
      s < t.tokens.length && t.tokens[s].type === "s_close";

    )
      s++;
    s--,
      n !== s &&
        ((c = t.tokens[s]), (t.tokens[s] = t.tokens[n]), (t.tokens[n] = c));
  }
}
Bs.postProcess = function (e) {
  var n,
    s = e.tokens_meta,
    o = e.tokens_meta.length;
  for (Uc(e, e.delimiters), n = 0; n < o; n++)
    s[n] && s[n].delimiters && Uc(e, s[n].delimiters);
};
var Os = {};
Os.tokenize = function (e, n) {
  var s,
    o,
    r,
    c = e.pos,
    i = e.src.charCodeAt(c);
  if (n || (i !== 95 && i !== 42)) return !1;
  for (o = e.scanDelims(e.pos, i === 42), s = 0; s < o.length; s++)
    (r = e.push("text", "", 0)),
      (r.content = String.fromCharCode(i)),
      e.delimiters.push({
        marker: i,
        length: o.length,
        token: e.tokens.length - 1,
        end: -1,
        open: o.can_open,
        close: o.can_close,
      });
  return (e.pos += o.length), !0;
};
function jc(t, e) {
  var n,
    s,
    o,
    r,
    c,
    i,
    l = e.length;
  for (n = l - 1; n >= 0; n--)
    (s = e[n]),
      !(s.marker !== 95 && s.marker !== 42) &&
        s.end !== -1 &&
        ((o = e[s.end]),
        (i =
          n > 0 &&
          e[n - 1].end === s.end + 1 &&
          e[n - 1].marker === s.marker &&
          e[n - 1].token === s.token - 1 &&
          e[s.end + 1].token === o.token + 1),
        (c = String.fromCharCode(s.marker)),
        (r = t.tokens[s.token]),
        (r.type = i ? "strong_open" : "em_open"),
        (r.tag = i ? "strong" : "em"),
        (r.nesting = 1),
        (r.markup = i ? c + c : c),
        (r.content = ""),
        (r = t.tokens[o.token]),
        (r.type = i ? "strong_close" : "em_close"),
        (r.tag = i ? "strong" : "em"),
        (r.nesting = -1),
        (r.markup = i ? c + c : c),
        (r.content = ""),
        i &&
          ((t.tokens[e[n - 1].token].content = ""),
          (t.tokens[e[s.end + 1].token].content = ""),
          n--));
}
Os.postProcess = function (e) {
  var n,
    s = e.tokens_meta,
    o = e.tokens_meta.length;
  for (jc(e, e.delimiters), n = 0; n < o; n++)
    s[n] && s[n].delimiters && jc(e, s[n].delimiters);
};
var SW = pe.normalizeReference,
  io = pe.isSpace,
  DW = function (e, n) {
    var s,
      o,
      r,
      c,
      i,
      l,
      a,
      u,
      f,
      d = "",
      p = "",
      x = e.pos,
      A = e.posMax,
      P = e.pos,
      g = !0;
    if (
      e.src.charCodeAt(e.pos) !== 91 ||
      ((i = e.pos + 1), (c = e.md.helpers.parseLinkLabel(e, e.pos, !0)), c < 0)
    )
      return !1;
    if (((l = c + 1), l < A && e.src.charCodeAt(l) === 40)) {
      for (
        g = !1, l++;
        l < A && ((o = e.src.charCodeAt(l)), !(!io(o) && o !== 10));
        l++
      );
      if (l >= A) return !1;
      if (
        ((P = l),
        (a = e.md.helpers.parseLinkDestination(e.src, l, e.posMax)),
        a.ok)
      ) {
        for (
          d = e.md.normalizeLink(a.str),
            e.md.validateLink(d) ? (l = a.pos) : (d = ""),
            P = l;
          l < A && ((o = e.src.charCodeAt(l)), !(!io(o) && o !== 10));
          l++
        );
        if (
          ((a = e.md.helpers.parseLinkTitle(e.src, l, e.posMax)),
          l < A && P !== l && a.ok)
        )
          for (
            p = a.str, l = a.pos;
            l < A && ((o = e.src.charCodeAt(l)), !(!io(o) && o !== 10));
            l++
          );
      }
      (l >= A || e.src.charCodeAt(l) !== 41) && (g = !0), l++;
    }
    if (g) {
      if (typeof e.env.references > "u") return !1;
      if (
        (l < A && e.src.charCodeAt(l) === 91
          ? ((P = l + 1),
            (l = e.md.helpers.parseLinkLabel(e, l)),
            l >= 0 ? (r = e.src.slice(P, l++)) : (l = c + 1))
          : (l = c + 1),
        r || (r = e.src.slice(i, c)),
        (u = e.env.references[SW(r)]),
        !u)
      )
        return (e.pos = x), !1;
      (d = u.href), (p = u.title);
    }
    return (
      n ||
        ((e.pos = i),
        (e.posMax = c),
        (f = e.push("link_open", "a", 1)),
        (f.attrs = s = [["href", d]]),
        p && s.push(["title", p]),
        e.linkLevel++,
        e.md.inline.tokenize(e),
        e.linkLevel--,
        (f = e.push("link_close", "a", -1))),
      (e.pos = l),
      (e.posMax = A),
      !0
    );
  },
  $W = pe.normalizeReference,
  lo = pe.isSpace,
  PW = function (e, n) {
    var s,
      o,
      r,
      c,
      i,
      l,
      a,
      u,
      f,
      d,
      p,
      x,
      A,
      P = "",
      g = e.pos,
      v = e.posMax;
    if (
      e.src.charCodeAt(e.pos) !== 33 ||
      e.src.charCodeAt(e.pos + 1) !== 91 ||
      ((l = e.pos + 2),
      (i = e.md.helpers.parseLinkLabel(e, e.pos + 1, !1)),
      i < 0)
    )
      return !1;
    if (((a = i + 1), a < v && e.src.charCodeAt(a) === 40)) {
      for (
        a++;
        a < v && ((o = e.src.charCodeAt(a)), !(!lo(o) && o !== 10));
        a++
      );
      if (a >= v) return !1;
      for (
        A = a,
          f = e.md.helpers.parseLinkDestination(e.src, a, e.posMax),
          f.ok &&
            ((P = e.md.normalizeLink(f.str)),
            e.md.validateLink(P) ? (a = f.pos) : (P = "")),
          A = a;
        a < v && ((o = e.src.charCodeAt(a)), !(!lo(o) && o !== 10));
        a++
      );
      if (
        ((f = e.md.helpers.parseLinkTitle(e.src, a, e.posMax)),
        a < v && A !== a && f.ok)
      )
        for (
          d = f.str, a = f.pos;
          a < v && ((o = e.src.charCodeAt(a)), !(!lo(o) && o !== 10));
          a++
        );
      else d = "";
      if (a >= v || e.src.charCodeAt(a) !== 41) return (e.pos = g), !1;
      a++;
    } else {
      if (typeof e.env.references > "u") return !1;
      if (
        (a < v && e.src.charCodeAt(a) === 91
          ? ((A = a + 1),
            (a = e.md.helpers.parseLinkLabel(e, a)),
            a >= 0 ? (c = e.src.slice(A, a++)) : (a = i + 1))
          : (a = i + 1),
        c || (c = e.src.slice(l, i)),
        (u = e.env.references[$W(c)]),
        !u)
      )
        return (e.pos = g), !1;
      (P = u.href), (d = u.title);
    }
    return (
      n ||
        ((r = e.src.slice(l, i)),
        e.md.inline.parse(r, e.md, e.env, (x = [])),
        (p = e.push("image", "img", 0)),
        (p.attrs = s =
          [
            ["src", P],
            ["alt", ""],
          ]),
        (p.children = x),
        (p.content = r),
        d && s.push(["title", d])),
      (e.pos = a),
      (e.posMax = v),
      !0
    );
  },
  TW =
    /^([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,
  qW = /^([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)$/,
  LW = function (e, n) {
    var s,
      o,
      r,
      c,
      i,
      l,
      a = e.pos;
    if (e.src.charCodeAt(a) !== 60) return !1;
    for (i = e.pos, l = e.posMax; ; ) {
      if (++a >= l || ((c = e.src.charCodeAt(a)), c === 60)) return !1;
      if (c === 62) break;
    }
    return (
      (s = e.src.slice(i + 1, a)),
      qW.test(s)
        ? ((o = e.md.normalizeLink(s)),
          e.md.validateLink(o)
            ? (n ||
                ((r = e.push("link_open", "a", 1)),
                (r.attrs = [["href", o]]),
                (r.markup = "autolink"),
                (r.info = "auto"),
                (r = e.push("text", "", 0)),
                (r.content = e.md.normalizeLinkText(s)),
                (r = e.push("link_close", "a", -1)),
                (r.markup = "autolink"),
                (r.info = "auto")),
              (e.pos += s.length + 2),
              !0)
            : !1)
        : TW.test(s)
        ? ((o = e.md.normalizeLink("mailto:" + s)),
          e.md.validateLink(o)
            ? (n ||
                ((r = e.push("link_open", "a", 1)),
                (r.attrs = [["href", o]]),
                (r.markup = "autolink"),
                (r.info = "auto"),
                (r = e.push("text", "", 0)),
                (r.content = e.md.normalizeLinkText(s)),
                (r = e.push("link_close", "a", -1)),
                (r.markup = "autolink"),
                (r.info = "auto")),
              (e.pos += s.length + 2),
              !0)
            : !1)
        : !1
    );
  },
  FW = Vs.HTML_TAG_RE;
function IW(t) {
  return /^<a[>\s]/i.test(t);
}
function MW(t) {
  return /^<\/a\s*>/i.test(t);
}
function VW(t) {
  var e = t | 32;
  return e >= 97 && e <= 122;
}
var RW = function (e, n) {
    var s,
      o,
      r,
      c,
      i = e.pos;
    return !e.md.options.html ||
      ((r = e.posMax), e.src.charCodeAt(i) !== 60 || i + 2 >= r) ||
      ((s = e.src.charCodeAt(i + 1)),
      s !== 33 && s !== 63 && s !== 47 && !VW(s)) ||
      ((o = e.src.slice(i).match(FW)), !o)
      ? !1
      : (n ||
          ((c = e.push("html_inline", "", 0)),
          (c.content = e.src.slice(i, i + o[0].length)),
          IW(c.content) && e.linkLevel++,
          MW(c.content) && e.linkLevel--),
        (e.pos += o[0].length),
        !0);
  },
  Gc = ir.exports,
  NW = pe.has,
  BW = pe.isValidEntityCode,
  Kc = pe.fromCodePoint,
  OW = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,
  zW = /^&([a-z][a-z0-9]{1,31});/i,
  HW = function (e, n) {
    var s,
      o,
      r,
      c,
      i = e.pos,
      l = e.posMax;
    if (e.src.charCodeAt(i) !== 38 || i + 1 >= l) return !1;
    if (((s = e.src.charCodeAt(i + 1)), s === 35)) {
      if (((r = e.src.slice(i).match(OW)), r))
        return (
          n ||
            ((o =
              r[1][0].toLowerCase() === "x"
                ? parseInt(r[1].slice(1), 16)
                : parseInt(r[1], 10)),
            (c = e.push("text_special", "", 0)),
            (c.content = BW(o) ? Kc(o) : Kc(65533)),
            (c.markup = r[0]),
            (c.info = "entity")),
          (e.pos += r[0].length),
          !0
        );
    } else if (((r = e.src.slice(i).match(zW)), r && NW(Gc, r[1])))
      return (
        n ||
          ((c = e.push("text_special", "", 0)),
          (c.content = Gc[r[1]]),
          (c.markup = r[0]),
          (c.info = "entity")),
        (e.pos += r[0].length),
        !0
      );
    return !1;
  };
function Zc(t, e) {
  var n,
    s,
    o,
    r,
    c,
    i,
    l,
    a,
    u = {},
    f = e.length;
  if (!!f) {
    var d = 0,
      p = -2,
      x = [];
    for (n = 0; n < f; n++)
      if (
        ((o = e[n]),
        x.push(0),
        (e[d].marker !== o.marker || p !== o.token - 1) && (d = n),
        (p = o.token),
        (o.length = o.length || 0),
        !!o.close)
      ) {
        for (
          u.hasOwnProperty(o.marker) ||
            (u[o.marker] = [-1, -1, -1, -1, -1, -1]),
            c = u[o.marker][(o.open ? 3 : 0) + (o.length % 3)],
            s = d - x[d] - 1,
            i = s;
          s > c;
          s -= x[s] + 1
        )
          if (
            ((r = e[s]),
            r.marker === o.marker &&
              r.open &&
              r.end < 0 &&
              ((l = !1),
              (r.close || o.open) &&
                (r.length + o.length) % 3 === 0 &&
                (r.length % 3 !== 0 || o.length % 3 !== 0) &&
                (l = !0),
              !l))
          ) {
            (a = s > 0 && !e[s - 1].open ? x[s - 1] + 1 : 0),
              (x[n] = n - s + a),
              (x[s] = a),
              (o.open = !1),
              (r.end = n),
              (r.close = !1),
              (i = -1),
              (p = -2);
            break;
          }
        i !== -1 && (u[o.marker][(o.open ? 3 : 0) + ((o.length || 0) % 3)] = i);
      }
  }
}
var UW = function (e) {
    var n,
      s = e.tokens_meta,
      o = e.tokens_meta.length;
    for (Zc(e, e.delimiters), n = 0; n < o; n++)
      s[n] && s[n].delimiters && Zc(e, s[n].delimiters);
  },
  jW = function (e) {
    var n,
      s,
      o = 0,
      r = e.tokens,
      c = e.tokens.length;
    for (n = s = 0; n < c; n++)
      r[n].nesting < 0 && o--,
        (r[n].level = o),
        r[n].nesting > 0 && o++,
        r[n].type === "text" && n + 1 < c && r[n + 1].type === "text"
          ? (r[n + 1].content = r[n].content + r[n + 1].content)
          : (n !== s && (r[s] = r[n]), s++);
    n !== s && (r.length = s);
  },
  hr = ur,
  Wc = pe.isWhiteSpace,
  Yc = pe.isPunctChar,
  Jc = pe.isMdAsciiPunct;
function Fn(t, e, n, s) {
  (this.src = t),
    (this.env = n),
    (this.md = e),
    (this.tokens = s),
    (this.tokens_meta = Array(s.length)),
    (this.pos = 0),
    (this.posMax = this.src.length),
    (this.level = 0),
    (this.pending = ""),
    (this.pendingLevel = 0),
    (this.cache = {}),
    (this.delimiters = []),
    (this._prev_delimiters = []),
    (this.backticks = {}),
    (this.backticksScanned = !1),
    (this.linkLevel = 0);
}
Fn.prototype.pushPending = function () {
  var t = new hr("text", "", 0);
  return (
    (t.content = this.pending),
    (t.level = this.pendingLevel),
    this.tokens.push(t),
    (this.pending = ""),
    t
  );
};
Fn.prototype.push = function (t, e, n) {
  this.pending && this.pushPending();
  var s = new hr(t, e, n),
    o = null;
  return (
    n < 0 && (this.level--, (this.delimiters = this._prev_delimiters.pop())),
    (s.level = this.level),
    n > 0 &&
      (this.level++,
      this._prev_delimiters.push(this.delimiters),
      (this.delimiters = []),
      (o = { delimiters: this.delimiters })),
    (this.pendingLevel = this.level),
    this.tokens.push(s),
    this.tokens_meta.push(o),
    s
  );
};
Fn.prototype.scanDelims = function (t, e) {
  var n = t,
    s,
    o,
    r,
    c,
    i,
    l,
    a,
    u,
    f,
    d = !0,
    p = !0,
    x = this.posMax,
    A = this.src.charCodeAt(t);
  for (
    s = t > 0 ? this.src.charCodeAt(t - 1) : 32;
    n < x && this.src.charCodeAt(n) === A;

  )
    n++;
  return (
    (r = n - t),
    (o = n < x ? this.src.charCodeAt(n) : 32),
    (a = Jc(s) || Yc(String.fromCharCode(s))),
    (f = Jc(o) || Yc(String.fromCharCode(o))),
    (l = Wc(s)),
    (u = Wc(o)),
    u ? (d = !1) : f && (l || a || (d = !1)),
    l ? (p = !1) : a && (u || f || (p = !1)),
    e ? ((c = d), (i = p)) : ((c = d && (!p || a)), (i = p && (!d || f))),
    { can_open: c, can_close: i, length: r }
  );
};
Fn.prototype.Token = hr;
var GW = Fn,
  Qc = ar,
  ao = [
    ["text", bW],
    ["linkify", yW],
    ["newline", wW],
    ["escape", AW],
    ["backticks", EW],
    ["strikethrough", Bs.tokenize],
    ["emphasis", Os.tokenize],
    ["link", DW],
    ["image", PW],
    ["autolink", LW],
    ["html_inline", RW],
    ["entity", HW],
  ],
  uo = [
    ["balance_pairs", UW],
    ["strikethrough", Bs.postProcess],
    ["emphasis", Os.postProcess],
    ["fragments_join", jW],
  ];
function In() {
  var t;
  for (this.ruler = new Qc(), t = 0; t < ao.length; t++)
    this.ruler.push(ao[t][0], ao[t][1]);
  for (this.ruler2 = new Qc(), t = 0; t < uo.length; t++)
    this.ruler2.push(uo[t][0], uo[t][1]);
}
In.prototype.skipToken = function (t) {
  var e,
    n,
    s = t.pos,
    o = this.ruler.getRules(""),
    r = o.length,
    c = t.md.options.maxNesting,
    i = t.cache;
  if (typeof i[s] < "u") {
    t.pos = i[s];
    return;
  }
  if (t.level < c)
    for (n = 0; n < r && (t.level++, (e = o[n](t, !0)), t.level--, !e); n++);
  else t.pos = t.posMax;
  e || t.pos++, (i[s] = t.pos);
};
In.prototype.tokenize = function (t) {
  for (
    var e,
      n,
      s = this.ruler.getRules(""),
      o = s.length,
      r = t.posMax,
      c = t.md.options.maxNesting;
    t.pos < r;

  ) {
    if (t.level < c) for (n = 0; n < o && ((e = s[n](t, !1)), !e); n++);
    if (e) {
      if (t.pos >= r) break;
      continue;
    }
    t.pending += t.src[t.pos++];
  }
  t.pending && t.pushPending();
};
In.prototype.parse = function (t, e, n, s) {
  var o,
    r,
    c,
    i = new this.State(t, e, n, s);
  for (
    this.tokenize(i), r = this.ruler2.getRules(""), c = r.length, o = 0;
    o < c;
    o++
  )
    r[o](i);
};
In.prototype.State = GW;
var KW = In,
  fo,
  Xc;
function ZW() {
  return (
    Xc ||
      ((Xc = 1),
      (fo = function (t) {
        var e = {};
        (t = t || {}),
          (e.src_Any = ml().source),
          (e.src_Cc = gl().source),
          (e.src_Z = vl().source),
          (e.src_P = lr.source),
          (e.src_ZPCc = [e.src_Z, e.src_P, e.src_Cc].join("|")),
          (e.src_ZCc = [e.src_Z, e.src_Cc].join("|"));
        var n = "[><\uFF5C]";
        return (
          (e.src_pseudo_letter =
            "(?:(?!" + n + "|" + e.src_ZPCc + ")" + e.src_Any + ")"),
          (e.src_ip4 =
            "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)"),
          (e.src_auth = "(?:(?:(?!" + e.src_ZCc + "|[@/\\[\\]()]).)+@)?"),
          (e.src_port =
            "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?"),
          (e.src_host_terminator =
            "(?=$|" +
            n +
            "|" +
            e.src_ZPCc +
            ")(?!" +
            (t["---"] ? "-(?!--)|" : "-|") +
            "_|:\\d|\\.-|\\.(?!$|" +
            e.src_ZPCc +
            "))"),
          (e.src_path =
            "(?:[/?#](?:(?!" +
            e.src_ZCc +
            "|" +
            n +
            `|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!` +
            e.src_ZCc +
            "|\\]).)*\\]|\\((?:(?!" +
            e.src_ZCc +
            "|[)]).)*\\)|\\{(?:(?!" +
            e.src_ZCc +
            '|[}]).)*\\}|\\"(?:(?!' +
            e.src_ZCc +
            `|["]).)+\\"|\\'(?:(?!` +
            e.src_ZCc +
            "|[']).)+\\'|\\'(?=" +
            e.src_pseudo_letter +
            "|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" +
            e.src_ZCc +
            "|[.]|$)|" +
            (t["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") +
            ",(?!" +
            e.src_ZCc +
            "|$)|;(?!" +
            e.src_ZCc +
            "|$)|\\!+(?!" +
            e.src_ZCc +
            "|[!]|$)|\\?(?!" +
            e.src_ZCc +
            "|[?]|$))+|\\/)?"),
          (e.src_email_name =
            '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*'),
          (e.src_xn = "xn--[a-z0-9\\-]{1,59}"),
          (e.src_domain_root =
            "(?:" + e.src_xn + "|" + e.src_pseudo_letter + "{1,63})"),
          (e.src_domain =
            "(?:" +
            e.src_xn +
            "|(?:" +
            e.src_pseudo_letter +
            ")|(?:" +
            e.src_pseudo_letter +
            "(?:-|" +
            e.src_pseudo_letter +
            "){0,61}" +
            e.src_pseudo_letter +
            "))"),
          (e.src_host =
            "(?:(?:(?:(?:" + e.src_domain + ")\\.)*" + e.src_domain + "))"),
          (e.tpl_host_fuzzy =
            "(?:" +
            e.src_ip4 +
            "|(?:(?:(?:" +
            e.src_domain +
            ")\\.)+(?:%TLDS%)))"),
          (e.tpl_host_no_ip_fuzzy =
            "(?:(?:(?:" + e.src_domain + ")\\.)+(?:%TLDS%))"),
          (e.src_host_strict = e.src_host + e.src_host_terminator),
          (e.tpl_host_fuzzy_strict = e.tpl_host_fuzzy + e.src_host_terminator),
          (e.src_host_port_strict =
            e.src_host + e.src_port + e.src_host_terminator),
          (e.tpl_host_port_fuzzy_strict =
            e.tpl_host_fuzzy + e.src_port + e.src_host_terminator),
          (e.tpl_host_port_no_ip_fuzzy_strict =
            e.tpl_host_no_ip_fuzzy + e.src_port + e.src_host_terminator),
          (e.tpl_host_fuzzy_test =
            "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" +
            e.src_ZPCc +
            "|>|$))"),
          (e.tpl_email_fuzzy =
            "(^|" +
            n +
            '|"|\\(|' +
            e.src_ZCc +
            ")(" +
            e.src_email_name +
            "@" +
            e.tpl_host_fuzzy_strict +
            ")"),
          (e.tpl_link_fuzzy =
            "(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|" +
            e.src_ZPCc +
            "))((?![$+<=>^`|\uFF5C])" +
            e.tpl_host_port_fuzzy_strict +
            e.src_path +
            ")"),
          (e.tpl_link_no_ip_fuzzy =
            "(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|" +
            e.src_ZPCc +
            "))((?![$+<=>^`|\uFF5C])" +
            e.tpl_host_port_no_ip_fuzzy_strict +
            e.src_path +
            ")"),
          e
        );
      })),
    fo
  );
}
function To(t) {
  var e = Array.prototype.slice.call(arguments, 1);
  return (
    e.forEach(function (n) {
      !n ||
        Object.keys(n).forEach(function (s) {
          t[s] = n[s];
        });
    }),
    t
  );
}
function zs(t) {
  return Object.prototype.toString.call(t);
}
function WW(t) {
  return zs(t) === "[object String]";
}
function YW(t) {
  return zs(t) === "[object Object]";
}
function JW(t) {
  return zs(t) === "[object RegExp]";
}
function ei(t) {
  return zs(t) === "[object Function]";
}
function QW(t) {
  return t.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
}
var Al = { fuzzyLink: !0, fuzzyEmail: !0, fuzzyIP: !1 };
function XW(t) {
  return Object.keys(t || {}).reduce(function (e, n) {
    return e || Al.hasOwnProperty(n);
  }, !1);
}
var eY = {
    "http:": {
      validate: function (t, e, n) {
        var s = t.slice(e);
        return (
          n.re.http ||
            (n.re.http = new RegExp(
              "^\\/\\/" +
                n.re.src_auth +
                n.re.src_host_port_strict +
                n.re.src_path,
              "i"
            )),
          n.re.http.test(s) ? s.match(n.re.http)[0].length : 0
        );
      },
    },
    "https:": "http:",
    "ftp:": "http:",
    "//": {
      validate: function (t, e, n) {
        var s = t.slice(e);
        return (
          n.re.no_http ||
            (n.re.no_http = new RegExp(
              "^" +
                n.re.src_auth +
                "(?:localhost|(?:(?:" +
                n.re.src_domain +
                ")\\.)+" +
                n.re.src_domain_root +
                ")" +
                n.re.src_port +
                n.re.src_host_terminator +
                n.re.src_path,
              "i"
            )),
          n.re.no_http.test(s)
            ? (e >= 3 && t[e - 3] === ":") || (e >= 3 && t[e - 3] === "/")
              ? 0
              : s.match(n.re.no_http)[0].length
            : 0
        );
      },
    },
    "mailto:": {
      validate: function (t, e, n) {
        var s = t.slice(e);
        return (
          n.re.mailto ||
            (n.re.mailto = new RegExp(
              "^" + n.re.src_email_name + "@" + n.re.src_host_strict,
              "i"
            )),
          n.re.mailto.test(s) ? s.match(n.re.mailto)[0].length : 0
        );
      },
    },
  },
  tY =
    "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",
  nY =
    "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|\u0440\u0444".split(
      "|"
    );
function sY(t) {
  (t.__index__ = -1), (t.__text_cache__ = "");
}
function oY(t) {
  return function (e, n) {
    var s = e.slice(n);
    return t.test(s) ? s.match(t)[0].length : 0;
  };
}
function ti() {
  return function (t, e) {
    e.normalize(t);
  };
}
function ps(t) {
  var e = (t.re = ZW()(t.__opts__)),
    n = t.__tlds__.slice();
  t.onCompile(),
    t.__tlds_replaced__ || n.push(tY),
    n.push(e.src_xn),
    (e.src_tlds = n.join("|"));
  function s(i) {
    return i.replace("%TLDS%", e.src_tlds);
  }
  (e.email_fuzzy = RegExp(s(e.tpl_email_fuzzy), "i")),
    (e.link_fuzzy = RegExp(s(e.tpl_link_fuzzy), "i")),
    (e.link_no_ip_fuzzy = RegExp(s(e.tpl_link_no_ip_fuzzy), "i")),
    (e.host_fuzzy_test = RegExp(s(e.tpl_host_fuzzy_test), "i"));
  var o = [];
  t.__compiled__ = {};
  function r(i, l) {
    throw new Error('(LinkifyIt) Invalid schema "' + i + '": ' + l);
  }
  Object.keys(t.__schemas__).forEach(function (i) {
    var l = t.__schemas__[i];
    if (l !== null) {
      var a = { validate: null, link: null };
      if (((t.__compiled__[i] = a), YW(l))) {
        JW(l.validate)
          ? (a.validate = oY(l.validate))
          : ei(l.validate)
          ? (a.validate = l.validate)
          : r(i, l),
          ei(l.normalize)
            ? (a.normalize = l.normalize)
            : l.normalize
            ? r(i, l)
            : (a.normalize = ti());
        return;
      }
      if (WW(l)) {
        o.push(i);
        return;
      }
      r(i, l);
    }
  }),
    o.forEach(function (i) {
      !t.__compiled__[t.__schemas__[i]] ||
        ((t.__compiled__[i].validate =
          t.__compiled__[t.__schemas__[i]].validate),
        (t.__compiled__[i].normalize =
          t.__compiled__[t.__schemas__[i]].normalize));
    }),
    (t.__compiled__[""] = { validate: null, normalize: ti() });
  var c = Object.keys(t.__compiled__)
    .filter(function (i) {
      return i.length > 0 && t.__compiled__[i];
    })
    .map(QW)
    .join("|");
  (t.re.schema_test = RegExp(
    "(^|(?!_)(?:[><\uFF5C]|" + e.src_ZPCc + "))(" + c + ")",
    "i"
  )),
    (t.re.schema_search = RegExp(
      "(^|(?!_)(?:[><\uFF5C]|" + e.src_ZPCc + "))(" + c + ")",
      "ig"
    )),
    (t.re.schema_at_start = RegExp("^" + t.re.schema_search.source, "i")),
    (t.re.pretest = RegExp(
      "(" +
        t.re.schema_test.source +
        ")|(" +
        t.re.host_fuzzy_test.source +
        ")|@",
      "i"
    )),
    sY(t);
}
function rY(t, e) {
  var n = t.__index__,
    s = t.__last_index__,
    o = t.__text_cache__.slice(n, s);
  (this.schema = t.__schema__.toLowerCase()),
    (this.index = n + e),
    (this.lastIndex = s + e),
    (this.raw = o),
    (this.text = o),
    (this.url = o);
}
function qo(t, e) {
  var n = new rY(t, e);
  return t.__compiled__[n.schema].normalize(n, t), n;
}
function Re(t, e) {
  if (!(this instanceof Re)) return new Re(t, e);
  e || (XW(t) && ((e = t), (t = {}))),
    (this.__opts__ = To({}, Al, e)),
    (this.__index__ = -1),
    (this.__last_index__ = -1),
    (this.__schema__ = ""),
    (this.__text_cache__ = ""),
    (this.__schemas__ = To({}, eY, t)),
    (this.__compiled__ = {}),
    (this.__tlds__ = nY),
    (this.__tlds_replaced__ = !1),
    (this.re = {}),
    ps(this);
}
Re.prototype.add = function (e, n) {
  return (this.__schemas__[e] = n), ps(this), this;
};
Re.prototype.set = function (e) {
  return (this.__opts__ = To(this.__opts__, e)), this;
};
Re.prototype.test = function (e) {
  if (((this.__text_cache__ = e), (this.__index__ = -1), !e.length)) return !1;
  var n, s, o, r, c, i, l, a, u;
  if (this.re.schema_test.test(e)) {
    for (l = this.re.schema_search, l.lastIndex = 0; (n = l.exec(e)) !== null; )
      if (((r = this.testSchemaAt(e, n[2], l.lastIndex)), r)) {
        (this.__schema__ = n[2]),
          (this.__index__ = n.index + n[1].length),
          (this.__last_index__ = n.index + n[0].length + r);
        break;
      }
  }
  return (
    this.__opts__.fuzzyLink &&
      this.__compiled__["http:"] &&
      ((a = e.search(this.re.host_fuzzy_test)),
      a >= 0 &&
        (this.__index__ < 0 || a < this.__index__) &&
        (s = e.match(
          this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy
        )) !== null &&
        ((c = s.index + s[1].length),
        (this.__index__ < 0 || c < this.__index__) &&
          ((this.__schema__ = ""),
          (this.__index__ = c),
          (this.__last_index__ = s.index + s[0].length)))),
    this.__opts__.fuzzyEmail &&
      this.__compiled__["mailto:"] &&
      ((u = e.indexOf("@")),
      u >= 0 &&
        (o = e.match(this.re.email_fuzzy)) !== null &&
        ((c = o.index + o[1].length),
        (i = o.index + o[0].length),
        (this.__index__ < 0 ||
          c < this.__index__ ||
          (c === this.__index__ && i > this.__last_index__)) &&
          ((this.__schema__ = "mailto:"),
          (this.__index__ = c),
          (this.__last_index__ = i)))),
    this.__index__ >= 0
  );
};
Re.prototype.pretest = function (e) {
  return this.re.pretest.test(e);
};
Re.prototype.testSchemaAt = function (e, n, s) {
  return this.__compiled__[n.toLowerCase()]
    ? this.__compiled__[n.toLowerCase()].validate(e, s, this)
    : 0;
};
Re.prototype.match = function (e) {
  var n = 0,
    s = [];
  this.__index__ >= 0 &&
    this.__text_cache__ === e &&
    (s.push(qo(this, n)), (n = this.__last_index__));
  for (var o = n ? e.slice(n) : e; this.test(o); )
    s.push(qo(this, n)),
      (o = o.slice(this.__last_index__)),
      (n += this.__last_index__);
  return s.length ? s : null;
};
Re.prototype.matchAtStart = function (e) {
  if (((this.__text_cache__ = e), (this.__index__ = -1), !e.length))
    return null;
  var n = this.re.schema_at_start.exec(e);
  if (!n) return null;
  var s = this.testSchemaAt(e, n[2], n[0].length);
  return s
    ? ((this.__schema__ = n[2]),
      (this.__index__ = n.index + n[1].length),
      (this.__last_index__ = n.index + n[0].length + s),
      qo(this, 0))
    : null;
};
Re.prototype.tlds = function (e, n) {
  return (
    (e = Array.isArray(e) ? e : [e]),
    n
      ? ((this.__tlds__ = this.__tlds__
          .concat(e)
          .sort()
          .filter(function (s, o, r) {
            return s !== r[o - 1];
          })
          .reverse()),
        ps(this),
        this)
      : ((this.__tlds__ = e.slice()),
        (this.__tlds_replaced__ = !0),
        ps(this),
        this)
  );
};
Re.prototype.normalize = function (e) {
  e.schema || (e.url = "http://" + e.url),
    e.schema === "mailto:" &&
      !/^mailto:/i.test(e.url) &&
      (e.url = "mailto:" + e.url);
};
Re.prototype.onCompile = function () {};
var cY = Re;
const iY = {},
  lY = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: iY },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  aY = Sg(lY);
var uY = {
    options: {
      html: !1,
      xhtmlOut: !1,
      breaks: !1,
      langPrefix: "language-",
      linkify: !1,
      typographer: !1,
      quotes: "\u201C\u201D\u2018\u2019",
      highlight: null,
      maxNesting: 100,
    },
    components: { core: {}, block: {}, inline: {} },
  },
  fY = {
    options: {
      html: !1,
      xhtmlOut: !1,
      breaks: !1,
      langPrefix: "language-",
      linkify: !1,
      typographer: !1,
      quotes: "\u201C\u201D\u2018\u2019",
      highlight: null,
      maxNesting: 20,
    },
    components: {
      core: { rules: ["normalize", "block", "inline", "text_join"] },
      block: { rules: ["paragraph"] },
      inline: { rules: ["text"], rules2: ["balance_pairs", "fragments_join"] },
    },
  },
  dY = {
    options: {
      html: !0,
      xhtmlOut: !0,
      breaks: !1,
      langPrefix: "language-",
      linkify: !1,
      typographer: !1,
      quotes: "\u201C\u201D\u2018\u2019",
      highlight: null,
      maxNesting: 20,
    },
    components: {
      core: { rules: ["normalize", "block", "inline", "text_join"] },
      block: {
        rules: [
          "blockquote",
          "code",
          "fence",
          "heading",
          "hr",
          "html_block",
          "lheading",
          "list",
          "reference",
          "paragraph",
        ],
      },
      inline: {
        rules: [
          "autolink",
          "backticks",
          "emphasis",
          "entity",
          "escape",
          "html_inline",
          "image",
          "link",
          "newline",
          "text",
        ],
        rules2: ["balance_pairs", "emphasis", "fragments_join"],
      },
    },
  },
  kn = pe,
  hY = Ms,
  pY = _Z,
  _Y = NZ,
  mY = gW,
  gY = KW,
  vY = cY,
  It = on,
  El = aY,
  bY = { default: uY, zero: fY, commonmark: dY },
  kY = /^(vbscript|javascript|file|data):/,
  yY = /^data:image\/(gif|png|jpeg|webp);/;
function xY(t) {
  var e = t.trim().toLowerCase();
  return kY.test(e) ? !!yY.test(e) : !0;
}
var Sl = ["http:", "https:", "mailto:"];
function wY(t) {
  var e = It.parse(t, !0);
  if (e.hostname && (!e.protocol || Sl.indexOf(e.protocol) >= 0))
    try {
      e.hostname = El.toASCII(e.hostname);
    } catch {}
  return It.encode(It.format(e));
}
function CY(t) {
  var e = It.parse(t, !0);
  if (e.hostname && (!e.protocol || Sl.indexOf(e.protocol) >= 0))
    try {
      e.hostname = El.toUnicode(e.hostname);
    } catch {}
  return It.decode(It.format(e), It.decode.defaultChars + "%");
}
function Ue(t, e) {
  if (!(this instanceof Ue)) return new Ue(t, e);
  e || kn.isString(t) || ((e = t || {}), (t = "default")),
    (this.inline = new gY()),
    (this.block = new mY()),
    (this.core = new _Y()),
    (this.renderer = new pY()),
    (this.linkify = new vY()),
    (this.validateLink = xY),
    (this.normalizeLink = wY),
    (this.normalizeLinkText = CY),
    (this.utils = kn),
    (this.helpers = kn.assign({}, hY)),
    (this.options = {}),
    this.configure(t),
    e && this.set(e);
}
Ue.prototype.set = function (t) {
  return kn.assign(this.options, t), this;
};
Ue.prototype.configure = function (t) {
  var e = this,
    n;
  if (kn.isString(t) && ((n = t), (t = bY[n]), !t))
    throw new Error('Wrong `markdown-it` preset "' + n + '", check name');
  if (!t) throw new Error("Wrong `markdown-it` preset, can't be empty");
  return (
    t.options && e.set(t.options),
    t.components &&
      Object.keys(t.components).forEach(function (s) {
        t.components[s].rules && e[s].ruler.enableOnly(t.components[s].rules),
          t.components[s].rules2 &&
            e[s].ruler2.enableOnly(t.components[s].rules2);
      }),
    this
  );
};
Ue.prototype.enable = function (t, e) {
  var n = [];
  Array.isArray(t) || (t = [t]),
    ["core", "block", "inline"].forEach(function (o) {
      n = n.concat(this[o].ruler.enable(t, !0));
    }, this),
    (n = n.concat(this.inline.ruler2.enable(t, !0)));
  var s = t.filter(function (o) {
    return n.indexOf(o) < 0;
  });
  if (s.length && !e)
    throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + s);
  return this;
};
Ue.prototype.disable = function (t, e) {
  var n = [];
  Array.isArray(t) || (t = [t]),
    ["core", "block", "inline"].forEach(function (o) {
      n = n.concat(this[o].ruler.disable(t, !0));
    }, this),
    (n = n.concat(this.inline.ruler2.disable(t, !0)));
  var s = t.filter(function (o) {
    return n.indexOf(o) < 0;
  });
  if (s.length && !e)
    throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + s);
  return this;
};
Ue.prototype.use = function (t) {
  var e = [this].concat(Array.prototype.slice.call(arguments, 1));
  return t.apply(t, e), this;
};
Ue.prototype.parse = function (t, e) {
  if (typeof t != "string") throw new Error("Input data should be a String");
  var n = new this.core.State(t, this, e);
  return this.core.process(n), n.tokens;
};
Ue.prototype.render = function (t, e) {
  return (e = e || {}), this.renderer.render(this.parse(t, e), this.options, e);
};
Ue.prototype.parseInline = function (t, e) {
  var n = new this.core.State(t, this, e);
  return (n.inlineMode = !0), this.core.process(n), n.tokens;
};
Ue.prototype.renderInline = function (t, e) {
  return (
    (e = e || {}), this.renderer.render(this.parseInline(t, e), this.options, e)
  );
};
var AY = Ue;
(function (t) {
  t.exports = AY;
})(_l);
const EY = Eg(_l.exports),
  SY = {
    name: "UiMarkdown",
    props: { markdown: { type: String, required: !0 } },
    setup(t) {
      return { renderedMarkdown: new EY({ html: !0 }).render(t.markdown) };
    },
  },
  DY = ["innerHTML"];
function $Y(t, e, n, s, o, r) {
  return (
    _(),
    b(
      "div",
      { class: "text-formatted", innerHTML: s.renderedMarkdown },
      null,
      8,
      DY
    )
  );
}
const PY = H(SY, [["render", $Y]]);
const TY = {
    name: "Tabs",
    data: () => ({ tabs: [], content: [] }),
    mounted() {
      let t = !1;
      this.$slots.default().forEach((e) => {
        e.el.innerText.indexOf("@tab:") > -1
          ? (this.tabs.push(e.el.innerText.split(":")[1]), (t = !0))
          : t === !0
          ? (this.content.push(e.el.outerHTML), (t = !1))
          : (this.content[this.content.length - 1] += e.el.outerHTML);
      }),
        this.$nextTick(() => {
          (document.getElementById("0-content").style.display = "block"),
            (document.getElementById(0).className += " active");
        });
    },
    methods: {
      openTab(t, e) {
        var n, s, o;
        for (
          s = document.getElementsByClassName("tabcontent"), n = 0;
          n < s.length;
          n++
        )
          s[n].style.display = "none";
        for (
          o = document.getElementsByClassName("tablinks"), n = 0;
          n < o.length;
          n++
        )
          o[n].className = o[n].className.replace(" active", "");
        (document.getElementById(e + "-content").style.display = "block"),
          (t.currentTarget.className += " active");
      },
    },
  },
  qY = { class: "tab" },
  LY = ["id", "onClick"],
  FY = ["id", "innerHTML"],
  IY = { style: { display: "none" } };
function MY(t, e, n, s, o, r) {
  return (
    _(),
    b("div", null, [
      C("div", qY, [
        (_(!0),
        b(
          te,
          null,
          xe(
            t.tabs,
            (c, i) => (
              _(),
              b(
                "button",
                {
                  id: i,
                  class: "tablinks",
                  key: i,
                  onClick: (l) => r.openTab(l, i),
                },
                oe(c),
                9,
                LY
              )
            )
          ),
          128
        )),
      ]),
      (_(!0),
      b(
        te,
        null,
        xe(
          t.content,
          (c, i) => (
            _(),
            b(
              "div",
              { id: i + "-content", innerHTML: c, class: "tabcontent", key: i },
              null,
              8,
              FY
            )
          )
        ),
        128
      )),
      C("span", IY, [B(t.$slots, "default", {}, void 0, !0)]),
    ])
  );
}
const VY = H(TY, [
    ["render", MY],
    ["__scopeId", "data-v-21d7ef7a"],
  ]),
  RY = {},
  NY = {
    style: {
      "font-size": "large",
      border: "solid 1px gray",
      "border-radius": ".2em",
      padding: "5px",
    },
  };
function BY(t, e) {
  return _(), b("button", NY, [B(t.$slots, "default")]);
}
const OY = H(RY, [["render", BY]]);
const zY = {
    name: "SearchBtn",
    components: {},
    data: () => ({ showModal: !1, isModalActive: !1 }),
    methods: {
      openModal() {
        this.showModal = !this.showModal;
      },
      onChildClick() {
        console.log("Closing the search dialog"), (this.showModal = !1);
      },
    },
    watch: { $route(t) {} },
    mounted() {
      this.$nextTick(function () {});
    },
  },
  Dl = (t) => (Ne("data-v-f622dca4"), (t = t()), Be(), t),
  HY = { key: 0, class: "api3-search-modal", style: { "user-select": "none" } },
  UY = Dl(() =>
    C(
      "div",
      {
        style: {
          "font-size": "28pt",
          "font-weight": "600",
          transform: "scaleY(0.7)",
        },
      },
      "X",
      -1
    )
  ),
  jY = [UY],
  GY = Dl(() => C("br", null, null, -1));
function KY(t, e, n, s, o, r) {
  const c = Ct("SearchBox");
  return (
    _(),
    b(
      te,
      null,
      [
        (_(),
        re(gu, { to: "body" }, [
          t.isModalActive
            ? (_(),
              b("div", HY, [
                C(
                  "button",
                  {
                    onClick:
                      e[0] ||
                      (e[0] = (i) => (t.isModalActive = !t.isModalActive)),
                    style: { float: "right" },
                  },
                  jY
                ),
                GY,
                M(c),
              ]))
            : Z("", !0),
        ])),
        C("span", null, [
          C(
            "button",
            {
              class: "api3-search-btn",
              style: { "user-select": "none" },
              onClick:
                e[1] || (e[1] = (i) => (t.isModalActive = !t.isModalActive)),
            },
            "\u{1F50D} "
          ),
        ]),
      ],
      64
    )
  );
}
const ZY = H(zY, [
  ["render", KY],
  ["__scopeId", "data-v-f622dca4"],
]);
const WY = {
  name: "SearchBox",
  data() {
    return {
      query: localStorage.getItem("search_query") || "",
      scrollY: localStorage.getItem("scrollY"),
      focused: !1,
      focusIndex: 0,
      suggestionsCnt: 0,
      cntLimit: void 0,
      path: void 0,
      basePaths: YY(),
    };
  },
  computed: {
    showSuggestions() {
      return this.focused && this.suggestions && this.suggestions.length;
    },
    suggestions() {},
  },
  mounted() {
    console.log("========== MOUNTED SEARCH"), console.log(this.basePaths);
  },
  beforeDestroy() {
    document.removeEventListener("keydown", this.onHotkey);
  },
  methods: {
    onClickOutside(t, e) {
      this.$emit("clicked");
    },
    updatePathFromChild(t) {
      this.path = t;
    },
    sortByPath(t, e) {
      return e.path > t.path ? -1 : e.path < t.path ? 1 : 0;
    },
    setPath() {
      const t = this.$route.path.split("/");
      ["airnode", "ois"].includes(t[1])
        ? (this.path = "/" + t[1] + "/" + t[2])
        : (this.path = "/" + t[1]);
    },
    onHotkey(t) {
      t.srcElement === document.body &&
        SEARCH_HOTKEYS.includes(t.key) &&
        (this.$refs.input.focus(), t.preventDefault());
    },
    onUp() {
      this.showSuggestions &&
        (this.focusIndex > 0
          ? this.focusIndex--
          : (this.focusIndex = this.suggestions.length - 1));
    },
    onDown() {
      this.showSuggestions &&
        (this.focusIndex < this.suggestions.length - 1
          ? this.focusIndex++
          : (this.focusIndex = 0));
    },
  },
};
function YY() {
  return {
    "/": "All Documentation",
    "/airnode/v0.7": "Airnode v0.7",
    "/airnode/v0.6": "Airnode v0.6",
    "/airnode/v0.5": "Airnode v0.5",
    "/airnode/v0.4": "Airnode v0.4",
    "/airnode/v0.3": "Airnode v0.3",
    "/airnode/v0.2": "Airnode v0.2",
    "/airnode/pre-alpha": "Airnode pre-alpha",
    "/api3": "API3",
    "/chainapi": "ChainAPI",
    "/dapis": "dAPIs",
    "/dao-members": "DAO Members",
    "/ois/v1.1": "OIS v1.1",
    "/ois/v1.0": "OIS v1.0",
    "/qrng": "QRNG",
  };
}
const Hs = (t) => (Ne("data-v-c4b08cff"), (t = t()), Be(), t),
  JY = { style: { "user-select": "none" } },
  QY = Hs(() => C("br", null, null, -1)),
  XY = Ce(
    " Persistent search goes here. Will work much like the search in original docs. "
  ),
  eJ = { class: "sb-search-input-box" },
  tJ = ["value"],
  nJ = Ce("\xA0\xA0"),
  sJ = { key: 0 },
  oJ = {
    key: 1,
    style: {
      "margin-top": "-11px",
      float: "right",
      "font-size": "x-small",
      color: "red",
    },
  },
  rJ = Hs(() =>
    C("a", { href: "/explore/", style: { color: "green" } }, "Link #1", -1)
  ),
  cJ = Hs(() => C("br", null, null, -1)),
  iJ = Hs(() =>
    C(
      "a",
      { href: "/reference/airnode/latest/", style: { color: "green" } },
      "Link #2",
      -1
    )
  );
function lJ(t, e, n, s, o, r) {
  return (
    _(),
    b("div", JY, [
      QY,
      XY,
      C("div", eJ, [
        C(
          "input",
          {
            ref: "input",
            "aria-label": "Search",
            value: o.query,
            class: _e({ focused: o.focused }),
            placeholder: "minimum 3 characters",
            autocomplete: "off",
            spellcheck: "false",
            onInput: e[0] || (e[0] = (c) => (o.query = c.target.value)),
            onFocus: e[1] || (e[1] = (c) => (o.focused = !0)),
            onBlur: e[2] || (e[2] = (c) => (o.focused = !1)),
            onKeyup: [
              e[3] || (e[3] = nc((...c) => r.onUp && r.onUp(...c), ["up"])),
              e[4] ||
                (e[4] = nc((...c) => r.onDown && r.onDown(...c), ["down"])),
            ],
          },
          null,
          42,
          tJ
        ),
        nJ,
        r.suggestions
          ? (_(), b("span", sJ, "(" + oe(o.suggestionsCnt) + ")", 1))
          : Z("", !0),
        r.suggestions && o.cntLimit
          ? (_(), b("div", oJ, " result set limit reached "))
          : Z("", !0),
      ]),
      rJ,
      cJ,
      iJ,
    ])
  );
}
const aJ = H(WY, [
    ["render", lJ],
    ["__scopeId", "data-v-c4b08cff"],
  ]),
  Rt = {
    ...mg,
    enhanceApp({ app: t }) {
      t.component("VersionPicklist", Ag),
        t.component("UiMarkdown", PY),
        t.component("Tabs", VY),
        t.component("FancyButton", OY),
        t.component("SearchBtn", ZY),
        t.component("SearchBox", aJ);
    },
    globalSearch: { index: { tag: "myTags" } },
  };
function uJ(t, e) {
  let n = [],
    s = !0;
  const o = (r) => {
    if (s) {
      s = !1;
      return;
    }
    n.forEach((c) => document.head.removeChild(c)),
      (n = []),
      r.forEach((c) => {
        const i = fJ(c);
        document.head.appendChild(i), n.push(i);
      });
  };
  An(() => {
    const r = t.data,
      c = e.value,
      i = r && r.description,
      l = (r && r.frontmatter.head) || [];
    (document.title = tl(c, r)),
      document
        .querySelector("meta[name=description]")
        .setAttribute("content", i || c.description),
      o(vf(c.head, hJ(l)));
  });
}
function fJ([t, e, n]) {
  const s = document.createElement(t);
  for (const o in e) s.setAttribute(o, e[o]);
  return n && (s.innerHTML = n), s;
}
function dJ(t) {
  return t[0] === "meta" && t[1] && t[1].name === "description";
}
function hJ(t) {
  return t.filter((e) => !dJ(e));
}
const ho = new Set(),
  $l = () => document.createElement("link"),
  pJ = (t) => {
    const e = $l();
    (e.rel = "prefetch"), (e.href = t), document.head.appendChild(e);
  },
  _J = (t) => {
    const e = new XMLHttpRequest();
    e.open("GET", t, (e.withCredentials = !0)), e.send();
  };
let Zn;
const mJ =
  Le &&
  (Zn = $l()) &&
  Zn.relList &&
  Zn.relList.supports &&
  Zn.relList.supports("prefetch")
    ? pJ
    : _J;
function gJ() {
  if (!Le || !window.IntersectionObserver) return;
  let t;
  if ((t = navigator.connection) && (t.saveData || /2g/.test(t.effectiveType)))
    return;
  const e = window.requestIdleCallback || setTimeout;
  let n = null;
  const s = () => {
    n && n.disconnect(),
      (n = new IntersectionObserver((r) => {
        r.forEach((c) => {
          if (c.isIntersecting) {
            const i = c.target;
            n.unobserve(i);
            const { pathname: l } = i;
            if (!ho.has(l)) {
              ho.add(l);
              const a = nl(l);
              mJ(a);
            }
          }
        });
      })),
      e(() => {
        document.querySelectorAll("#app a").forEach((r) => {
          const { target: c, hostname: i, pathname: l } = r,
            a = l.match(/\.\w+$/);
          (a && a[0] !== ".html") ||
            (c !== "_blank" &&
              i === location.hostname &&
              (l !== location.pathname ? n.observe(r) : ho.add(l)));
        });
      });
  };
  dt(s);
  const o = nt();
  Ye(() => o.path, s),
    nn(() => {
      n && n.disconnect();
    });
}
const vJ = Y({
  setup(t, { slots: e }) {
    const n = Ae(!1);
    return (
      dt(() => {
        n.value = !0;
      }),
      () => (n.value && e.default ? e.default() : null)
    );
  },
});
function bJ() {
  Le &&
    window.addEventListener("click", (t) => {
      var n;
      const e = t.target;
      if (e.matches('div[class*="language-"] > button.copy')) {
        const s = e.parentElement,
          o =
            (n = e.nextElementSibling) == null ? void 0 : n.nextElementSibling;
        if (!s || !o) return;
        const r = /language-(shellscript|shell|bash|sh|zsh)/.test(
          s.classList.toString()
        );
        let { innerText: c = "" } = o;
        r && (c = c.replace(/^ *(\$|>) /gm, "")),
          kJ(c).then(() => {
            e.classList.add("copied"),
              setTimeout(() => {
                e.classList.remove("copied"), e.blur();
              }, 2e3);
          });
      }
    });
}
async function kJ(t) {
  try {
    return navigator.clipboard.writeText(t);
  } catch {
    const e = document.createElement("textarea"),
      n = document.activeElement;
    (e.value = t),
      e.setAttribute("readonly", ""),
      (e.style.contain = "strict"),
      (e.style.position = "absolute"),
      (e.style.left = "-9999px"),
      (e.style.fontSize = "12pt");
    const s = document.getSelection(),
      o = s ? s.rangeCount > 0 && s.getRangeAt(0) : null;
    document.body.appendChild(e),
      e.select(),
      (e.selectionStart = 0),
      (e.selectionEnd = t.length),
      document.execCommand("copy"),
      document.body.removeChild(e),
      o && (s.removeAllRanges(), s.addRange(o)),
      n && n.focus();
  }
}
const Pl = Rt.NotFound || (() => "404 Not Found"),
  yJ = Y({
    name: "VitePressApp",
    setup() {
      const { site: t } = ue();
      return (
        dt(() => {
          Ye(
            () => t.value.lang,
            (e) => {
              document.documentElement.lang = e;
            },
            { immediate: !0 }
          );
        }),
        gJ(),
        bJ(),
        Rt.setup && Rt.setup(),
        () => is(Rt.Layout)
      );
    },
  });
function xJ() {
  const t = CJ(),
    e = wJ();
  e.provide(ol, t);
  const n = kf(t.route);
  return (
    e.provide(sl, n),
    e.provide("NotFound", Pl),
    e.component("Content", wf),
    e.component("ClientOnly", vJ),
    Object.defineProperty(e.config.globalProperties, "$frontmatter", {
      get() {
        return n.frontmatter.value;
      },
    }),
    Rt.enhanceApp && Rt.enhanceApp({ app: e, router: t, siteData: Xt }),
    { app: e, router: t, data: n }
  );
}
function wJ() {
  return af(yJ);
}
function CJ() {
  let t = Le,
    e;
  return xf((n) => {
    let s = nl(n);
    return (
      t && (e = s),
      (t || e === s) && (s = s.replace(/\.js$/, ".lean.js")),
      Le && (t = !1),
      V_(() => import(s), [])
    );
  }, Pl);
}
if (Le) {
  const { app: t, router: e, data: n } = xJ();
  e.go().then(() => {
    uJ(e.route, n.site), t.mount("#app");
  });
}
export {
  te as F,
  AJ as V,
  H as _,
  C as a,
  Ce as b,
  b as c,
  xJ as createApp,
  M as d,
  yu as e,
  xe as f,
  _ as o,
  Ct as r,
  oe as t,
  y as u,
  j as w,
};
