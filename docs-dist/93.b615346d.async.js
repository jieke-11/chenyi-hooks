'use strict';
(self.webpackChunkchenyi_hooks = self.webpackChunkchenyi_hooks || []).push([
  [93],
  {
    18086: function (o, n, e) {
      e.r(n),
        e.d(n, {
          createUpdateEffect: function () {
            return a;
          },
        });
      var r = e(75271),
        a = function (s) {
          return function (l, _) {
            var f = (0, r.useRef)(!1);
            s(function () {
              return function () {
                f.current = !1;
              };
            }, []),
              s(function () {
                if (!f.current) f.current = !0;
                else return l();
              }, _);
          };
        };
      n.default = a;
    },
    51490: function (o, n, e) {
      e.r(n),
        e.d(n, {
          createUseStorageState: function () {
            return f;
          },
        });
      var r = e(48305),
        a = e.n(r),
        u = e(75271),
        s = e(53740),
        l = e(645),
        _ = e(29925);
      function f(m) {
        function d(t) {
          var i =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            c,
            v = i.onError,
            p =
              v === void 0
                ? function (O) {
                    console.error(O);
                  }
                : v;
          try {
            c = m();
          } catch (O) {
            p(O);
          }
          var E = function (S) {
              return i.serializer ? i.serializer(S) : JSON.stringify(S);
            },
            T = function (S) {
              return i.deserializer ? i.deserializer(S) : JSON.parse(S);
            };
          function D() {
            try {
              var O,
                S = (O = c) === null || O === void 0 ? void 0 : O.getItem(t);
              if (S) return T(S);
            } catch (P) {
              p(P);
            }
            return (0, _.isFunction)(i.defaultValue)
              ? i.defaultValue()
              : i.defaultValue;
          }
          var M = (0, u.useState)(D),
            h = a()(M, 2),
            U = h[0],
            b = h[1];
          (0, l.default)(
            function () {
              b(D());
            },
            [t],
          );
          var y = function (S) {
            var P = (0, _.isFunction)(S) ? S(U) : S;
            if ((b(P), (0, _.isUndef)(P))) {
              var g;
              (g = c) === null || g === void 0 || g.removeItem(t);
            } else
              try {
                var R;
                (R = c) === null || R === void 0 || R.setItem(t, E(P));
              } catch (C) {
                console.error(C);
              }
          };
          return [U, (0, s.default)(y)];
        }
        return d;
      }
    },
    91831: function (o, n, e) {
      e.r(n),
        e.d(n, {
          createUpdateEffect: function () {
            return r.createUpdateEffect;
          },
          useBoolean: function () {
            return a.default;
          },
          useDebounce: function () {
            return u.default;
          },
          useDebounceFn: function () {
            return s.default;
          },
          useGetState: function () {
            return l.default;
          },
          useLatest: function () {
            return _.default;
          },
          useMemoizedFn: function () {
            return f.default;
          },
          usePrevious: function () {
            return m.default;
          },
          useResetState: function () {
            return d.default;
          },
          useSessionStorageState: function () {
            return t.default;
          },
          useSet: function () {
            return i.default;
          },
          useThrottle: function () {
            return c.default;
          },
          useThrottleFn: function () {
            return v.default;
          },
          useToggle: function () {
            return p.default;
          },
          useUnmount: function () {
            return E.default;
          },
          useUnmountedRef: function () {
            return T.default;
          },
          useUpdateEffect: function () {
            return D.default;
          },
        });
      var r = e(18086),
        a = e(91118),
        u = e(81743),
        s = e(23086),
        l = e(65251),
        _ = e(56574),
        f = e(53740),
        m = e(90884),
        d = e(96587),
        t = e(9156),
        i = e(96605),
        c = e(65509),
        v = e(26808),
        p = e(50541),
        E = e(38797),
        T = e(65215),
        D = e(645);
    },
    91118: function (o, n, e) {
      e.r(n),
        e.d(n, {
          default: function () {
            return l;
          },
        });
      var r = e(48305),
        a = e.n(r),
        u = e(75271),
        s = e(50541);
      function l() {
        var _ =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1,
          f = (0, s.default)(!!_),
          m = a()(f, 2),
          d = m[0],
          t = m[1],
          i = t.toggle,
          c = t.set,
          v = (0, u.useMemo)(function () {
            var p = function () {
                return c(!0);
              },
              E = function () {
                return c(!1);
              };
            return {
              toggle: i,
              set: function (D) {
                return c(!!D);
              },
              setTrue: p,
              setFalse: E,
            };
          }, []);
        return [d, v];
      }
    },
    23086: function (o, n, e) {
      e.r(n);
      var r = e(31759),
        a = e.n(r),
        u = e(99702),
        s = e(75271),
        l = e(56574),
        _ = e(38797),
        f = e(29925),
        m = e(61614);
      function d(t, i) {
        var c;
        m.default &&
          ((0, f.isFunction)(t) ||
            console.error(
              'useDebounceFn expected parameter is a function, got '.concat(
                a()(t),
              ),
            ));
        var v = (0, l.default)(t),
          p =
            (c = i == null ? void 0 : i.wait) !== null && c !== void 0
              ? c
              : 1e3,
          E = (0, s.useMemo)(function () {
            return (0, u.debounce)(
              function () {
                return v.current.apply(v, arguments);
              },
              p,
              i,
            );
          }, []);
        return (
          (0, _.default)(function () {
            E.cancel();
          }),
          { run: E, cancel: E.cancel, flush: E.flush }
        );
      }
      n.default = d;
    },
    81743: function (o, n, e) {
      e.r(n);
      var r = e(48305),
        a = e.n(r),
        u = e(75271),
        s = e(23086);
      function l(_, f) {
        var m = (0, u.useState)(_),
          d = a()(m, 2),
          t = d[0],
          i = d[1],
          c = (0, s.default)(function () {
            i(_);
          }, f),
          v = c.run;
        return (
          (0, u.useEffect)(
            function () {
              v();
            },
            [_],
          ),
          t
        );
      }
      n.default = l;
    },
    65251: function (o, n, e) {
      e.r(n);
      var r = e(48305),
        a = e.n(r),
        u = e(75271);
      function s(l) {
        var _ = (0, u.useState)(l),
          f = a()(_, 2),
          m = f[0],
          d = f[1],
          t = (0, u.useRef)(m);
        t.current = m;
        var i = (0, u.useCallback)(function () {
          return t.current;
        }, []);
        return [m, d, i];
      }
      n.default = s;
    },
    56574: function (o, n, e) {
      e.r(n);
      var r = e(75271);
      function a(u) {
        var s = (0, r.useRef)(u);
        return (s.current = u), s;
      }
      n.default = a;
    },
    53740: function (o, n, e) {
      e.r(n);
      var r = e(31759),
        a = e.n(r),
        u = e(75271),
        s = e(29925),
        l = e(61614);
      function _(f) {
        l.default &&
          ((0, s.isFunction)(f) ||
            console.error(
              'useMemoizedFn expected parameter is a function, got '.concat(
                a()(f),
              ),
            ));
        var m = (0, u.useRef)(f);
        m.current = (0, u.useMemo)(
          function () {
            return f;
          },
          [f],
        );
        var d = (0, u.useRef)();
        return (
          d.current ||
            (d.current = function () {
              for (
                var t = arguments.length, i = new Array(t), c = 0;
                c < t;
                c++
              )
                i[c] = arguments[c];
              return m.current.apply(this, i);
            }),
          d.current
        );
      }
      n.default = _;
    },
    90884: function (o, n, e) {
      e.r(n);
      var r = e(75271),
        a = function (l, _) {
          return !Object.is(l, _);
        };
      function u(s) {
        var l =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : a,
          _ = (0, r.useRef)(),
          f = (0, r.useRef)();
        return (
          l(f.current, s) && ((_.current = f.current), (f.current = s)),
          _.current
        );
      }
      n.default = u;
    },
    96587: function (o, n, e) {
      e.r(n);
      var r = e(48305),
        a = e.n(r),
        u = e(75271),
        s = e(53740),
        l = function (f) {
          var m = (0, u.useState)(f),
            d = a()(m, 2),
            t = d[0],
            i = d[1],
            c = (0, s.default)(function () {
              i(f);
            });
          return [t, i, c];
        };
      n.default = l;
    },
    9156: function (o, n, e) {
      e.r(n);
      var r = e(51490),
        a = e(32641),
        u = (0, r.createUseStorageState)(function () {
          return a.default ? sessionStorage : void 0;
        });
      n.default = u;
    },
    96605: function (o, n, e) {
      e.r(n);
      var r = e(48305),
        a = e.n(r),
        u = e(75271),
        s = e(53740);
      function l(_) {
        var f = function () {
            return new Set(_);
          },
          m = (0, u.useState)(f),
          d = a()(m, 2),
          t = d[0],
          i = d[1],
          c = function (T) {
            t.has(T) ||
              i(function (D) {
                var M = new Set(D);
                return M.add(T), M;
              });
          },
          v = function (T) {
            t.has(T) &&
              i(function (D) {
                var M = new Set(D);
                return M.delete(T), M;
              });
          },
          p = function () {
            return i(f());
          };
        return [
          t,
          {
            add: (0, s.default)(c),
            remove: (0, s.default)(v),
            reset: (0, s.default)(p),
          },
        ];
      }
      n.default = l;
    },
    26808: function (o, n, e) {
      e.r(n);
      var r = e(31759),
        a = e.n(r),
        u = e(20057),
        s = e(75271),
        l = e(56574),
        _ = e(38797),
        f = e(29925),
        m = e(61614);
      function d(t, i) {
        var c;
        m.default &&
          ((0, f.isFunction)(t) ||
            console.error(
              'useThrottleFn expected parameter is a function, got '.concat(
                a()(t),
              ),
            ));
        var v = (0, l.default)(t),
          p =
            (c = i == null ? void 0 : i.wait) !== null && c !== void 0
              ? c
              : 1e3,
          E = (0, s.useMemo)(function () {
            return (0, u.Z)(
              function () {
                return v.current.apply(v, arguments);
              },
              p,
              i,
            );
          }, []);
        return (
          (0, _.default)(function () {
            E.cancel();
          }),
          { run: E, cancel: E.cancel, flush: E.flush }
        );
      }
      n.default = d;
    },
    65509: function (o, n, e) {
      e.r(n);
      var r = e(48305),
        a = e.n(r),
        u = e(75271),
        s = e(26808);
      function l(_, f) {
        var m = (0, u.useState)(_),
          d = a()(m, 2),
          t = d[0],
          i = d[1],
          c = (0, s.default)(function () {
            i(_);
          }, f),
          v = c.run;
        return (
          (0, u.useEffect)(
            function () {
              v();
            },
            [_],
          ),
          t
        );
      }
      n.default = l;
    },
    50541: function (o, n, e) {
      e.r(n);
      var r = e(48305),
        a = e.n(r),
        u = e(75271);
      function s() {
        var l =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1,
          _ = arguments.length > 1 ? arguments[1] : void 0,
          f = (0, u.useState)(l),
          m = a()(f, 2),
          d = m[0],
          t = m[1],
          i = (0, u.useMemo)(function () {
            var c = _ === void 0 ? !l : _,
              v = function () {
                return t(function (M) {
                  return M === l ? c : l;
                });
              },
              p = function (M) {
                return t(M);
              },
              E = function () {
                return t(l);
              },
              T = function () {
                return t(c);
              };
            return { toggle: v, set: p, setLeft: E, setRight: T };
          }, []);
        return [d, i];
      }
      n.default = s;
    },
    38797: function (o, n, e) {
      e.r(n);
      var r = e(31759),
        a = e.n(r),
        u = e(75271),
        s = e(56574),
        l = e(29925),
        _ = e(61614),
        f = function (d) {
          _.default &&
            ((0, l.isFunction)(d) ||
              console.error(
                'useUnmount expected parameter is a function, got '.concat(
                  a()(d),
                ),
              ));
          var t = (0, s.default)(d);
          (0, u.useEffect)(function () {
            return function () {
              t.current();
            };
          }, []);
        };
      n.default = f;
    },
    65215: function (o, n, e) {
      e.r(n);
      var r = e(75271),
        a = function () {
          var s = (0, r.useRef)(!1);
          return (
            (0, r.useEffect)(function () {
              return (
                (s.current = !1),
                function () {
                  s.current = !0;
                }
              );
            }, []),
            s
          );
        };
      n.default = a;
    },
    645: function (o, n, e) {
      e.r(n);
      var r = e(75271),
        a = e(18086);
      n.default = (0, a.createUpdateEffect)(r.useEffect);
    },
    29925: function (o, n, e) {
      e.r(n),
        e.d(n, {
          isBoolean: function () {
            return _;
          },
          isFunction: function () {
            return s;
          },
          isNumber: function () {
            return f;
          },
          isObject: function () {
            return u;
          },
          isString: function () {
            return l;
          },
          isUndef: function () {
            return m;
          },
        });
      var r = e(31759),
        a = e.n(r),
        u = function (t) {
          return t !== null && a()(t) === 'object';
        },
        s = function (t) {
          return typeof t == 'function';
        },
        l = function (t) {
          return typeof t == 'string';
        },
        _ = function (t) {
          return typeof t == 'boolean';
        },
        f = function (t) {
          return typeof t == 'number';
        },
        m = function (t) {
          return typeof t == 'undefined';
        };
    },
    32641: function (o, n, e) {
      e.r(n);
      var r = !!(
        typeof window != 'undefined' &&
        window.document &&
        window.document.createElement
      );
      n.default = r;
    },
    61614: function (o, n, e) {
      e.r(n);
      var r = !1;
      n.default = r;
    },
    99702: function (o, n, e) {
      e.r(n),
        e.d(n, {
          debounce: function () {
            return u.Z;
          },
        });
      var r = e(31759),
        a = e.n(r),
        u = e(65885);
      function s() {
        var l =
            (typeof e.g == 'undefined' || typeof e.g == 'undefined'
              ? 'undefined'
              : a()(e.g)) == 'object' &&
            e.g &&
            e.g.Object === Object &&
            e.g,
          _ =
            (typeof self == 'undefined' ? 'undefined' : a()(self)) ==
              'object' &&
            self &&
            self.Object === Object &&
            self;
        return l || _;
      }
      s() || (e.g.Date = Date);
    },
    99037: function (o, n) {
      n.Z = `import { useRef } from 'react';\r
import type { useEffect, useLayoutEffect } from 'react';\r
\r
type EffectHookType = typeof useEffect | typeof useLayoutEffect;\r
\r
export const createUpdateEffect: (hook: EffectHookType) => EffectHookType =\r
  (hook) => (effect, deps) => {\r
    const isMounted = useRef(false);\r
\r
    // for react-refresh\r
    hook(() => {\r
      return () => {\r
        isMounted.current = false;\r
      };\r
    }, []);\r
\r
    hook(() => {\r
      if (!isMounted.current) {\r
        isMounted.current = true;\r
      } else {\r
        return effect();\r
      }\r
    }, deps);\r
  };\r
\r
export default createUpdateEffect;\r
`;
    },
    83675: function (o, n) {
      n.Z = `import { useState } from 'react';\r
import useMemoizedFn from '../useMemoizedFn';\r
import useUpdateEffect from '../useUpdateEffect';\r
import { isFunction, isUndef } from '../utils';\r
\r
export type SetState<S> = S | ((prevState?: S) => S);\r
\r
export interface Options<T> {\r
  defaultValue?: T | (() => T);\r
  serializer?: (value: T) => string;\r
  deserializer?: (value: string) => T;\r
  onError?: (error: unknown) => void;\r
}\r
\r
export function createUseStorageState(getStorage: () => Storage | undefined) {\r
  function useStorageState<T>(key: string, options: Options<T> = {}) {\r
    let storage: Storage | undefined;\r
    const {\r
      onError = (e) => {\r
        console.error(e);\r
      },\r
    } = options;\r
\r
    // https://github.com/alibaba/hooks/issues/800\r
    try {\r
      storage = getStorage();\r
    } catch (err) {\r
      onError(err);\r
    }\r
\r
    const serializer = (value: T) => {\r
      if (options.serializer) {\r
        return options.serializer(value);\r
      }\r
      return JSON.stringify(value);\r
    };\r
\r
    const deserializer = (value: string): T => {\r
      if (options.deserializer) {\r
        return options.deserializer(value);\r
      }\r
      return JSON.parse(value);\r
    };\r
\r
    function getStoredValue() {\r
      try {\r
        const raw = storage?.getItem(key);\r
        if (raw) {\r
          return deserializer(raw);\r
        }\r
      } catch (e) {\r
        onError(e);\r
      }\r
      if (isFunction(options.defaultValue)) {\r
        return options.defaultValue();\r
      }\r
      return options.defaultValue;\r
    }\r
\r
    const [state, setState] = useState(getStoredValue);\r
\r
    useUpdateEffect(() => {\r
      setState(getStoredValue());\r
    }, [key]);\r
\r
    const updateState = (value?: SetState<T>) => {\r
      const currentState = isFunction(value) ? value(state) : value;\r
      setState(currentState);\r
\r
      if (isUndef(currentState)) {\r
        storage?.removeItem(key);\r
      } else {\r
        try {\r
          storage?.setItem(key, serializer(currentState));\r
        } catch (e) {\r
          console.error(e);\r
        }\r
      }\r
    };\r
\r
    return [state, useMemoizedFn(updateState)] as const;\r
  }\r
  return useStorageState;\r
}\r
`;
    },
    25820: function (o, n) {
      n.Z = `import { createUpdateEffect } from './createUpdateEffect';
import useBoolean from './useBoolean';
import useDebounce from './useDebounce';
import useDebounceFn from './useDebounceFn';
import useGetState from './useGetState';
import useLatest from './useLatest';
import useMemoizedFn from './useMemoizedFn';
import usePrevious from './usePrevious';
import useResetState from './useResetState';
import useSessionStorageState from './useSessionStorageState';
import useSet from './useSet';
import useThrottle from './useThrottle';
import useThrottleFn from './useThrottleFn';
import useToggle from './useToggle';
import useUnmount from './useUnmount';
import useUnmountedRef from './useUnmountedRef';
import useUpdateEffect from './useUpdateEffect';

export {
  createUpdateEffect,
  useBoolean,
  useDebounce,
  useDebounceFn,
  useGetState,
  useLatest,
  useMemoizedFn,
  usePrevious,
  useResetState,
  useSessionStorageState,
  useSet,
  useThrottle,
  useThrottleFn,
  useToggle,
  useUnmount,
  useUnmountedRef,
  useUpdateEffect,
};
`;
    },
    93189: function (o, n) {
      n.Z = `import { useMemo } from 'react';\r
import useToggle from '../useToggle';\r
\r
export interface Actions {\r
  setTrue: () => void;\r
  setFalse: () => void;\r
  set: (value: boolean) => void;\r
  toggle: () => void;\r
}\r
\r
export default function useBoolean(defaultValue = false): [boolean, Actions] {\r
  const [state, { toggle, set }] = useToggle(!!defaultValue);\r
\r
  const actions: Actions = useMemo(() => {\r
    const setTrue = () => set(true);\r
    const setFalse = () => set(false);\r
    return {\r
      toggle,\r
      set: (v) => set(!!v),\r
      setTrue,\r
      setFalse,\r
    };\r
  }, []);\r
\r
  return [state, actions];\r
}\r
`;
    },
    66900: function (o, n) {
      n.Z = `import { debounce } from '../utils/lodash-polyfill';\r
import { useMemo } from 'react';\r
import type { DebounceOptions } from '../useDebounce/debounceOptions';\r
import useLatest from '../useLatest';\r
import useUnmount from '../useUnmount';\r
import { isFunction } from '../utils';\r
import isDev from '../utils/isDev';\r
\r
type noop = (...args: any[]) => any;\r
\r
function useDebounceFn<T extends noop>(fn: T, options?: DebounceOptions) {\r
  if (isDev) {\r
    if (!isFunction(fn)) {\r
      console.error(\`useDebounceFn expected parameter is a function, got \${typeof fn}\`);\r
    }\r
  }\r
\r
  const fnRef = useLatest(fn);\r
\r
  const wait = options?.wait ?? 1000;\r
\r
  const debounced = useMemo(\r
    () =>\r
      debounce(\r
        (...args: Parameters<T>): ReturnType<T> => {\r
          return fnRef.current(...args);\r
        },\r
        wait,\r
        options,\r
      ),\r
    [],\r
  );\r
\r
  useUnmount(() => {\r
    debounced.cancel();\r
  });\r
\r
  return {\r
    run: debounced,\r
    cancel: debounced.cancel,\r
    flush: debounced.flush,\r
  };\r
}\r
\r
export default useDebounceFn;\r
`;
    },
    80943: function (o, n) {
      n.Z = `import { useEffect, useState } from 'react';\r
import useDebounceFn from '../useDebounceFn';\r
import type { DebounceOptions } from './debounceOptions';\r
\r
function useDebounce<T>(value: T, options?: DebounceOptions) {\r
  const [debounced, setDebounced] = useState(value);\r
\r
  const { run } = useDebounceFn(() => {\r
    setDebounced(value);\r
  }, options);\r
\r
  useEffect(() => {\r
    run();\r
  }, [value]);\r
\r
  return debounced;\r
}\r
\r
export default useDebounce;\r
`;
    },
    80166: function (o, n) {
      n.Z = `import type { Dispatch, SetStateAction } from 'react';\r
import { useState, useRef, useCallback } from 'react';\r
\r
type GetStateAction<S> = () => S;\r
\r
function useGetState<S>(\r
  initialState: S | (() => S),\r
): [S, Dispatch<SetStateAction<S>>, GetStateAction<S>];\r
function useGetState<S = undefined>(): [\r
  S | undefined,\r
  Dispatch<SetStateAction<S | undefined>>,\r
  GetStateAction<S | undefined>,\r
];\r
function useGetState<S>(initialState?: S) {\r
  const [state, setState] = useState(initialState);\r
  const stateRef = useRef(state);\r
  stateRef.current = state;\r
\r
  const getState = useCallback(() => stateRef.current, []);\r
\r
  return [state, setState, getState];\r
}\r
\r
export default useGetState;\r
`;
    },
    32041: function (o, n) {
      n.Z = `import { useRef } from 'react';\r
\r
function useLatest<T>(value: T) {\r
  const ref = useRef(value);\r
  ref.current = value;\r
\r
  return ref;\r
}\r
\r
export default useLatest;\r
`;
    },
    91331: function (o, n) {
      n.Z = `import { useMemo, useRef } from 'react';\r
import { isFunction } from '../utils';\r
import isDev from '../utils/isDev';\r
\r
type noop = (this: any, ...args: any[]) => any;\r
\r
type PickFunction<T extends noop> = (\r
  this: ThisParameterType<T>,\r
  ...args: Parameters<T>\r
) => ReturnType<T>;\r
\r
function useMemoizedFn<T extends noop>(fn: T) {\r
  if (isDev) {\r
    if (!isFunction(fn)) {\r
      console.error(\`useMemoizedFn expected parameter is a function, got \${typeof fn}\`);\r
    }\r
  }\r
\r
  const fnRef = useRef<T>(fn);\r
\r
  // why not write \`fnRef.current = fn\`?\r
  // https://github.com/alibaba/hooks/issues/728\r
  fnRef.current = useMemo(() => fn, [fn]);\r
\r
  const memoizedFn = useRef<PickFunction<T>>();\r
  if (!memoizedFn.current) {\r
    memoizedFn.current = function (this, ...args) {\r
      return fnRef.current.apply(this, args);\r
    };\r
  }\r
\r
  return memoizedFn.current as T;\r
}\r
\r
export default useMemoizedFn;\r
`;
    },
    25349: function (o, n) {
      n.Z = `import { useRef } from 'react';\r
\r
export type ShouldUpdateFunc<T> = (prev: T | undefined, next: T) => boolean;\r
\r
const defaultShouldUpdate = <T>(a?: T, b?: T) => !Object.is(a, b);\r
\r
function usePrevious<T>(\r
  state: T,\r
  shouldUpdate: ShouldUpdateFunc<T> = defaultShouldUpdate,\r
): T | undefined {\r
  const prevRef = useRef<T>();\r
  const curRef = useRef<T>();\r
\r
  if (shouldUpdate(curRef.current, state)) {\r
    prevRef.current = curRef.current;\r
    curRef.current = state;\r
  }\r
\r
  return prevRef.current;\r
}\r
\r
export default usePrevious;\r
`;
    },
    85235: function (o, n) {
      n.Z = `import { useState } from 'react';\r
import type { Dispatch, SetStateAction } from 'react';\r
import useMemoizedFn from '../useMemoizedFn';\r
\r
type ResetState = () => void;\r
\r
const useResetState = <S>(\r
  initialState: S | (() => S),\r
): [S, Dispatch<SetStateAction<S>>, ResetState] => {\r
  const [state, setState] = useState(initialState);\r
\r
  const resetState = useMemoizedFn(() => {\r
    setState(initialState);\r
  });\r
\r
  return [state, setState, resetState];\r
};\r
\r
export default useResetState;\r
`;
    },
    31175: function (o, n) {
      n.Z = `import { createUseStorageState } from '../createUseStorageState';\r
import isBrowser from '../utils/isBrowser';\r
\r
const useSessionStorageState = createUseStorageState(() =>\r
  isBrowser ? sessionStorage : undefined,\r
);\r
\r
export default useSessionStorageState;\r
`;
    },
    37678: function (o, n) {
      n.Z = `import { useState } from 'react';\r
import useMemoizedFn from '../useMemoizedFn';\r
\r
function useSet<K>(initialValue?: Iterable<K>) {\r
  const getInitValue = () => new Set(initialValue);\r
  const [set, setSet] = useState<Set<K>>(getInitValue);\r
\r
  const add = (key: K) => {\r
    if (set.has(key)) {\r
      return;\r
    }\r
    setSet((prevSet) => {\r
      const temp = new Set(prevSet);\r
      temp.add(key);\r
      return temp;\r
    });\r
  };\r
\r
  const remove = (key: K) => {\r
    if (!set.has(key)) {\r
      return;\r
    }\r
    setSet((prevSet) => {\r
      const temp = new Set(prevSet);\r
      temp.delete(key);\r
      return temp;\r
    });\r
  };\r
\r
  const reset = () => setSet(getInitValue());\r
\r
  return [\r
    set,\r
    {\r
      add: useMemoizedFn(add),\r
      remove: useMemoizedFn(remove),\r
      reset: useMemoizedFn(reset),\r
    },\r
  ] as const;\r
}\r
\r
export default useSet;\r
`;
    },
    64980: function (o, n) {
      n.Z = `import { throttle } from 'lodash-es';\r
import { useMemo } from 'react';\r
import useLatest from '../useLatest';\r
import type { ThrottleOptions } from '../useThrottle/throttleOptions';\r
import useUnmount from '../useUnmount';\r
import { isFunction } from '../utils';\r
import isDev from '../utils/isDev';\r
\r
type noop = (...args: any[]) => any;\r
\r
function useThrottleFn<T extends noop>(fn: T, options?: ThrottleOptions) {\r
  if (isDev) {\r
    if (!isFunction(fn)) {\r
      console.error(\`useThrottleFn expected parameter is a function, got \${typeof fn}\`);\r
    }\r
  }\r
\r
  const fnRef = useLatest(fn);\r
\r
  const wait = options?.wait ?? 1000;\r
\r
  const throttled = useMemo(\r
    () =>\r
      throttle(\r
        (...args: Parameters<T>): ReturnType<T> => {\r
          return fnRef.current(...args);\r
        },\r
        wait,\r
        options,\r
      ),\r
    [],\r
  );\r
\r
  useUnmount(() => {\r
    throttled.cancel();\r
  });\r
\r
  return {\r
    run: throttled,\r
    cancel: throttled.cancel,\r
    flush: throttled.flush,\r
  };\r
}\r
\r
export default useThrottleFn;\r
`;
    },
    34581: function (o, n) {
      n.Z = `import { useEffect, useState } from 'react';\r
import useThrottleFn from '../useThrottleFn';\r
import type { ThrottleOptions } from './throttleOptions';\r
\r
function useThrottle<T>(value: T, options?: ThrottleOptions) {\r
  const [throttled, setThrottled] = useState(value);\r
\r
  const { run } = useThrottleFn(() => {\r
    setThrottled(value);\r
  }, options);\r
\r
  useEffect(() => {\r
    run();\r
  }, [value]);\r
\r
  return throttled;\r
}\r
\r
export default useThrottle;\r
`;
    },
    98919: function (o, n) {
      n.Z = `import { useMemo, useState } from 'react';\r
\r
export interface Actions<T> {\r
  setLeft: () => void;\r
  setRight: () => void;\r
  set: (value: T) => void;\r
  toggle: () => void;\r
}\r
\r
function useToggle<T = boolean>(): [boolean, Actions<T>];\r
\r
function useToggle<T>(defaultValue: T): [T, Actions<T>];\r
\r
function useToggle<T, U>(defaultValue: T, reverseValue: U): [T | U, Actions<T | U>];\r
\r
function useToggle<D, R>(defaultValue: D = false as unknown as D, reverseValue?: R) {\r
  const [state, setState] = useState<D | R>(defaultValue);\r
\r
  const actions = useMemo(() => {\r
    const reverseValueOrigin = (reverseValue === undefined ? !defaultValue : reverseValue) as D | R;\r
\r
    const toggle = () => setState((s) => (s === defaultValue ? reverseValueOrigin : defaultValue));\r
    const set = (value: D | R) => setState(value);\r
    const setLeft = () => setState(defaultValue);\r
    const setRight = () => setState(reverseValueOrigin);\r
\r
    return {\r
      toggle,\r
      set,\r
      setLeft,\r
      setRight,\r
    };\r
  }, []);\r
\r
  return [state, actions];\r
}\r
\r
export default useToggle;\r
`;
    },
    395: function (o, n) {
      n.Z = `import { useEffect } from 'react';\r
import useLatest from '../useLatest';\r
import { isFunction } from '../utils';\r
import isDev from '../utils/isDev';\r
\r
const useUnmount = (fn: () => void) => {\r
  if (isDev) {\r
    if (!isFunction(fn)) {\r
      console.error(\`useUnmount expected parameter is a function, got \${typeof fn}\`);\r
    }\r
  }\r
\r
  const fnRef = useLatest(fn);\r
\r
  useEffect(\r
    () => () => {\r
      fnRef.current();\r
    },\r
    [],\r
  );\r
};\r
\r
export default useUnmount;\r
`;
    },
    33477: function (o, n) {
      n.Z = `import { useEffect, useRef } from 'react';\r
\r
const useUnmountedRef = () => {\r
  const unmountedRef = useRef(false);\r
  useEffect(() => {\r
    unmountedRef.current = false;\r
    return () => {\r
      unmountedRef.current = true;\r
    };\r
  }, []);\r
  return unmountedRef;\r
};\r
\r
export default useUnmountedRef;\r
`;
    },
    23370: function (o, n) {
      n.Z = `import { useEffect } from 'react';\r
import { createUpdateEffect } from '../createUpdateEffect';\r
\r
export default createUpdateEffect(useEffect);\r
`;
    },
    55808: function (o, n) {
      n.Z = `export const isObject = (value: unknown): value is Record<any, any> =>
  value !== null && typeof value === 'object';
export const isFunction = (value: unknown): value is (...args: any) => any =>
  typeof value === 'function';

export const isString = (value: unknown): value is string => typeof value === 'string';
export const isBoolean = (value: unknown): value is boolean => typeof value === 'boolean';
export const isNumber = (value: unknown): value is number => typeof value === 'number';
export const isUndef = (value: unknown): value is undefined => typeof value === 'undefined';
`;
    },
    28153: function (o, n) {
      n.Z = `const isBrowser = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

export default isBrowser;
`;
    },
    77403: function (o, n) {
      n.Z = `const isDev = process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test';

export default isDev;
`;
    },
    18130: function (o, n) {
      n.Z = `import { debounce } from 'lodash-es';

function isNodeOrWeb() {
  const freeGlobal =
    (typeof global === 'undefined' ? 'undefined' : typeof global) == 'object' &&
    global &&
    global.Object === Object &&
    global;
  const freeSelf = typeof self == 'object' && self && self.Object === Object && self;
  return freeGlobal || freeSelf;
}

if (!isNodeOrWeb()) {
  global.Date = Date;
}

export { debounce };
`;
    },
  },
]);
