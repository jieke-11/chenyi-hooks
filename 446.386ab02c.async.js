"use strict";(self.webpackChunkchenyi_hooks=self.webpackChunkchenyi_hooks||[]).push([[446],{6469:function(u,n,e){e.r(n),e.d(n,{createUpdateEffect:function(){return a}});var o=e(67294),a=function(r){return function(l,_){var i=(0,o.useRef)(!1);r(function(){return function(){i.current=!1}},[]),r(function(){if(!i.current)i.current=!0;else return l()},_)}};n.default=a},4729:function(u,n,e){e.r(n),e.d(n,{createUseStorageState:function(){return i}});var o=e(5574),a=e.n(o),s=e(67294),r=e(97096),l=e(62707),_=e(19515);function i(m){function d(t){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c,h=f.onError,v=h===void 0?function(M){console.error(M)}:h;try{c=m()}catch(M){v(M)}var E=function(S){return f.serializer?f.serializer(S):JSON.stringify(S)},p=function(S){return f.deserializer?f.deserializer(S):JSON.parse(S)};function D(){try{var M,S=(M=c)===null||M===void 0?void 0:M.getItem(t);if(S)return p(S)}catch(O){v(O)}return(0,_.isFunction)(f.defaultValue)?f.defaultValue():f.defaultValue}var T=(0,s.useState)(D),R=a()(T,2),U=R[0],y=R[1];(0,l.default)(function(){y(D())},[t]);var b=function(S){var O=(0,_.isFunction)(S)?S(U):S;if(y(O),(0,_.isUndef)(O)){var P;(P=c)===null||P===void 0||P.removeItem(t)}else try{var g;(g=c)===null||g===void 0||g.setItem(t,E(O))}catch(A){console.error(A)}};return[U,(0,r.default)(b)]}return d}},31081:function(u,n,e){e.r(n),e.d(n,{createUpdateEffect:function(){return o.createUpdateEffect},useBoolean:function(){return a.default},useDebounce:function(){return s.default},useDebounceFn:function(){return r.default},useGetState:function(){return l.default},useLatest:function(){return _.default},useMemoizedFn:function(){return i.default},usePrevious:function(){return m.default},useResetState:function(){return d.default},useSessionStorageState:function(){return t.default},useSet:function(){return f.default},useThrottle:function(){return c.default},useThrottleFn:function(){return h.default},useToggle:function(){return v.default},useUnmount:function(){return E.default},useUnmountedRef:function(){return p.default},useUpdateEffect:function(){return D.default}});var o=e(6469),a=e(86908),s=e(88527),r=e(99857),l=e(55170),_=e(91121),i=e(97096),m=e(47496),d=e(60521),t=e(5572),f=e(95754),c=e(59373),h=e(88931),v=e(73044),E=e(79325),p=e(5437),D=e(62707)},86908:function(u,n,e){e.r(n),e.d(n,{default:function(){return l}});var o=e(5574),a=e.n(o),s=e(67294),r=e(73044);function l(){var _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,i=(0,r.default)(!!_),m=a()(i,2),d=m[0],t=m[1],f=t.toggle,c=t.set,h=(0,s.useMemo)(function(){var v=function(){return c(!0)},E=function(){return c(!1)};return{toggle:f,set:function(D){return c(!!D)},setTrue:v,setFalse:E}},[]);return[d,h]}},88527:function(u,n,e){e.r(n);var o=e(5574),a=e.n(o),s=e(67294),r=e(99857);function l(_,i){var m=(0,s.useState)(_),d=a()(m,2),t=d[0],f=d[1],c=(0,r.default)(function(){f(_)},i),h=c.run;return(0,s.useEffect)(function(){h()},[_]),t}n.default=l},99857:function(u,n,e){e.r(n);var o=e(52677),a=e.n(o),s=e(98502),r=e(67294),l=e(91121),_=e(79325),i=e(19515),m=e(85611);function d(t,f){var c;m.default&&((0,i.isFunction)(t)||console.error("useDebounceFn expected parameter is a function, got ".concat(a()(t))));var h=(0,l.default)(t),v=(c=f==null?void 0:f.wait)!==null&&c!==void 0?c:1e3,E=(0,r.useMemo)(function(){return(0,s.debounce)(function(){return h.current.apply(h,arguments)},v,f)},[]);return(0,_.default)(function(){E.cancel()}),{run:E,cancel:E.cancel,flush:E.flush}}n.default=d},55170:function(u,n,e){e.r(n);var o=e(5574),a=e.n(o),s=e(67294);function r(l){var _=(0,s.useState)(l),i=a()(_,2),m=i[0],d=i[1],t=(0,s.useRef)(m);t.current=m;var f=(0,s.useCallback)(function(){return t.current},[]);return[m,d,f]}n.default=r},91121:function(u,n,e){e.r(n);var o=e(67294);function a(s){var r=(0,o.useRef)(s);return r.current=s,r}n.default=a},97096:function(u,n,e){e.r(n);var o=e(52677),a=e.n(o),s=e(67294),r=e(19515),l=e(85611);function _(i){l.default&&((0,r.isFunction)(i)||console.error("useMemoizedFn expected parameter is a function, got ".concat(a()(i))));var m=(0,s.useRef)(i);m.current=(0,s.useMemo)(function(){return i},[i]);var d=(0,s.useRef)();return d.current||(d.current=function(){for(var t=arguments.length,f=new Array(t),c=0;c<t;c++)f[c]=arguments[c];return m.current.apply(this,f)}),d.current}n.default=_},47496:function(u,n,e){e.r(n);var o=e(67294),a=function(l,_){return!Object.is(l,_)};function s(r){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:a,_=(0,o.useRef)(),i=(0,o.useRef)();return l(i.current,r)&&(_.current=i.current,i.current=r),_.current}n.default=s},60521:function(u,n,e){e.r(n);var o=e(5574),a=e.n(o),s=e(67294),r=e(97096),l=function(i){var m=(0,s.useState)(i),d=a()(m,2),t=d[0],f=d[1],c=(0,r.default)(function(){f(i)});return[t,f,c]};n.default=l},5572:function(u,n,e){e.r(n);var o=e(4729),a=e(9741),s=(0,o.createUseStorageState)(function(){return a.default?sessionStorage:void 0});n.default=s},95754:function(u,n,e){e.r(n);var o=e(5574),a=e.n(o),s=e(67294),r=e(97096);function l(_){var i=function(){return new Set(_)},m=(0,s.useState)(i),d=a()(m,2),t=d[0],f=d[1],c=function(p){t.has(p)||f(function(D){var T=new Set(D);return T.add(p),T})},h=function(p){t.has(p)&&f(function(D){var T=new Set(D);return T.delete(p),T})},v=function(){return f(i())};return[t,{add:(0,r.default)(c),remove:(0,r.default)(h),reset:(0,r.default)(v)}]}n.default=l},59373:function(u,n,e){e.r(n);var o=e(5574),a=e.n(o),s=e(67294),r=e(88931);function l(_,i){var m=(0,s.useState)(_),d=a()(m,2),t=d[0],f=d[1],c=(0,r.default)(function(){f(_)},i),h=c.run;return(0,s.useEffect)(function(){h()},[_]),t}n.default=l},88931:function(u,n,e){e.r(n);var o=e(52677),a=e.n(o),s=e(111),r=e(67294),l=e(91121),_=e(79325),i=e(19515),m=e(85611);function d(t,f){var c;m.default&&((0,i.isFunction)(t)||console.error("useThrottleFn expected parameter is a function, got ".concat(a()(t))));var h=(0,l.default)(t),v=(c=f==null?void 0:f.wait)!==null&&c!==void 0?c:1e3,E=(0,r.useMemo)(function(){return(0,s.Z)(function(){return h.current.apply(h,arguments)},v,f)},[]);return(0,_.default)(function(){E.cancel()}),{run:E,cancel:E.cancel,flush:E.flush}}n.default=d},73044:function(u,n,e){e.r(n);var o=e(5574),a=e.n(o),s=e(67294);function r(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,_=arguments.length>1?arguments[1]:void 0,i=(0,s.useState)(l),m=a()(i,2),d=m[0],t=m[1],f=(0,s.useMemo)(function(){var c=_===void 0?!l:_,h=function(){return t(function(T){return T===l?c:l})},v=function(T){return t(T)},E=function(){return t(l)},p=function(){return t(c)};return{toggle:h,set:v,setLeft:E,setRight:p}},[]);return[d,f]}n.default=r},79325:function(u,n,e){e.r(n);var o=e(52677),a=e.n(o),s=e(67294),r=e(91121),l=e(19515),_=e(85611),i=function(d){_.default&&((0,l.isFunction)(d)||console.error("useUnmount expected parameter is a function, got ".concat(a()(d))));var t=(0,r.default)(d);(0,s.useEffect)(function(){return function(){t.current()}},[])};n.default=i},5437:function(u,n,e){e.r(n);var o=e(67294),a=function(){var r=(0,o.useRef)(!1);return(0,o.useEffect)(function(){return r.current=!1,function(){r.current=!0}},[]),r};n.default=a},62707:function(u,n,e){e.r(n);var o=e(67294),a=e(6469);n.default=(0,a.createUpdateEffect)(o.useEffect)},19515:function(u,n,e){e.r(n),e.d(n,{isBoolean:function(){return _},isFunction:function(){return r},isNumber:function(){return i},isObject:function(){return s},isString:function(){return l},isUndef:function(){return m}});var o=e(52677),a=e.n(o),s=function(t){return t!==null&&a()(t)==="object"},r=function(t){return typeof t=="function"},l=function(t){return typeof t=="string"},_=function(t){return typeof t=="boolean"},i=function(t){return typeof t=="number"},m=function(t){return typeof t=="undefined"}},9741:function(u,n,e){e.r(n);var o=!!(typeof window!="undefined"&&window.document&&window.document.createElement);n.default=o},85611:function(u,n,e){e.r(n);var o=!1;n.default=o},98502:function(u,n,e){e.r(n),e.d(n,{debounce:function(){return s.Z}});var o=e(52677),a=e.n(o),s=e(53434);function r(){var l=(typeof e.g=="undefined"||typeof e.g=="undefined"?"undefined":a()(e.g))=="object"&&e.g&&e.g.Object===Object&&e.g,_=(typeof self=="undefined"?"undefined":a()(self))=="object"&&self&&self.Object===Object&&self;return l||_}r()||(e.g.Date=Date)},86861:function(u,n){n.Z=`import { useRef } from 'react';
import type { useEffect, useLayoutEffect } from 'react';

type EffectHookType = typeof useEffect | typeof useLayoutEffect;

export const createUpdateEffect: (hook: EffectHookType) => EffectHookType =
  (hook) => (effect, deps) => {
    const isMounted = useRef(false);

    // for react-refresh
    hook(() => {
      return () => {
        isMounted.current = false;
      };
    }, []);

    hook(() => {
      if (!isMounted.current) {
        isMounted.current = true;
      } else {
        return effect();
      }
    }, deps);
  };

export default createUpdateEffect;
`},53204:function(u,n){n.Z=`import { useState } from 'react';
import useMemoizedFn from '../useMemoizedFn';
import useUpdateEffect from '../useUpdateEffect';
import { isFunction, isUndef } from '../utils';

export type SetState<S> = S | ((prevState?: S) => S);

export interface Options<T> {
  defaultValue?: T | (() => T);
  serializer?: (value: T) => string;
  deserializer?: (value: string) => T;
  onError?: (error: unknown) => void;
}

export function createUseStorageState(getStorage: () => Storage | undefined) {
  function useStorageState<T>(key: string, options: Options<T> = {}) {
    let storage: Storage | undefined;
    const {
      onError = (e) => {
        console.error(e);
      },
    } = options;

    // https://github.com/alibaba/hooks/issues/800
    try {
      storage = getStorage();
    } catch (err) {
      onError(err);
    }

    const serializer = (value: T) => {
      if (options.serializer) {
        return options.serializer(value);
      }
      return JSON.stringify(value);
    };

    const deserializer = (value: string): T => {
      if (options.deserializer) {
        return options.deserializer(value);
      }
      return JSON.parse(value);
    };

    function getStoredValue() {
      try {
        const raw = storage?.getItem(key);
        if (raw) {
          return deserializer(raw);
        }
      } catch (e) {
        onError(e);
      }
      if (isFunction(options.defaultValue)) {
        return options.defaultValue();
      }
      return options.defaultValue;
    }

    const [state, setState] = useState(getStoredValue);

    useUpdateEffect(() => {
      setState(getStoredValue());
    }, [key]);

    const updateState = (value?: SetState<T>) => {
      const currentState = isFunction(value) ? value(state) : value;
      setState(currentState);

      if (isUndef(currentState)) {
        storage?.removeItem(key);
      } else {
        try {
          storage?.setItem(key, serializer(currentState));
        } catch (e) {
          console.error(e);
        }
      }
    };

    return [state, useMemoizedFn(updateState)] as const;
  }
  return useStorageState;
}
`},1825:function(u,n){n.Z=`import { createUpdateEffect } from './createUpdateEffect';
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
`},31897:function(u,n){n.Z=`import { useMemo } from 'react';
import useToggle from '../useToggle';

export interface Actions {
  setTrue: () => void;
  setFalse: () => void;
  set: (value: boolean) => void;
  toggle: () => void;
}

export default function useBoolean(defaultValue = false): [boolean, Actions] {
  const [state, { toggle, set }] = useToggle(!!defaultValue);

  const actions: Actions = useMemo(() => {
    const setTrue = () => set(true);
    const setFalse = () => set(false);
    return {
      toggle,
      set: (v) => set(!!v),
      setTrue,
      setFalse,
    };
  }, []);

  return [state, actions];
}
`},76853:function(u,n){n.Z=`import { useEffect, useState } from 'react';
import useDebounceFn from '../useDebounceFn';
import type { DebounceOptions } from './debounceOptions';

function useDebounce<T>(value: T, options?: DebounceOptions) {
  const [debounced, setDebounced] = useState(value);

  const { run } = useDebounceFn(() => {
    setDebounced(value);
  }, options);

  useEffect(() => {
    run();
  }, [value]);

  return debounced;
}

export default useDebounce;
`},43436:function(u,n){n.Z=`import { debounce } from '../utils/lodash-polyfill';
import { useMemo } from 'react';
import type { DebounceOptions } from '../useDebounce/debounceOptions';
import useLatest from '../useLatest';
import useUnmount from '../useUnmount';
import { isFunction } from '../utils';
import isDev from '../utils/isDev';

type noop = (...args: any[]) => any;

function useDebounceFn<T extends noop>(fn: T, options?: DebounceOptions) {
  if (isDev) {
    if (!isFunction(fn)) {
      console.error(\`useDebounceFn expected parameter is a function, got \${typeof fn}\`);
    }
  }

  const fnRef = useLatest(fn);

  const wait = options?.wait ?? 1000;

  const debounced = useMemo(
    () =>
      debounce(
        (...args: Parameters<T>): ReturnType<T> => {
          return fnRef.current(...args);
        },
        wait,
        options,
      ),
    [],
  );

  useUnmount(() => {
    debounced.cancel();
  });

  return {
    run: debounced,
    cancel: debounced.cancel,
    flush: debounced.flush,
  };
}

export default useDebounceFn;
`},36430:function(u,n){n.Z=`import type { Dispatch, SetStateAction } from 'react';
import { useState, useRef, useCallback } from 'react';

type GetStateAction<S> = () => S;

function useGetState<S>(
  initialState: S | (() => S),
): [S, Dispatch<SetStateAction<S>>, GetStateAction<S>];
function useGetState<S = undefined>(): [
  S | undefined,
  Dispatch<SetStateAction<S | undefined>>,
  GetStateAction<S | undefined>,
];
function useGetState<S>(initialState?: S) {
  const [state, setState] = useState(initialState);
  const stateRef = useRef(state);
  stateRef.current = state;

  const getState = useCallback(() => stateRef.current, []);

  return [state, setState, getState];
}

export default useGetState;
`},29696:function(u,n){n.Z=`import { useRef } from 'react';

function useLatest<T>(value: T) {
  const ref = useRef(value);
  ref.current = value;

  return ref;
}

export default useLatest;
`},47737:function(u,n){n.Z=`import { useMemo, useRef } from 'react';
import { isFunction } from '../utils';
import isDev from '../utils/isDev';

type noop = (this: any, ...args: any[]) => any;

type PickFunction<T extends noop> = (
  this: ThisParameterType<T>,
  ...args: Parameters<T>
) => ReturnType<T>;

function useMemoizedFn<T extends noop>(fn: T) {
  if (isDev) {
    if (!isFunction(fn)) {
      console.error(\`useMemoizedFn expected parameter is a function, got \${typeof fn}\`);
    }
  }

  const fnRef = useRef<T>(fn);

  // why not write \`fnRef.current = fn\`?
  // https://github.com/alibaba/hooks/issues/728
  fnRef.current = useMemo(() => fn, [fn]);

  const memoizedFn = useRef<PickFunction<T>>();
  if (!memoizedFn.current) {
    memoizedFn.current = function (this, ...args) {
      return fnRef.current.apply(this, args);
    };
  }

  return memoizedFn.current as T;
}

export default useMemoizedFn;
`},62441:function(u,n){n.Z=`import { useRef } from 'react';

export type ShouldUpdateFunc<T> = (prev: T | undefined, next: T) => boolean;

const defaultShouldUpdate = <T>(a?: T, b?: T) => !Object.is(a, b);

function usePrevious<T>(
  state: T,
  shouldUpdate: ShouldUpdateFunc<T> = defaultShouldUpdate,
): T | undefined {
  const prevRef = useRef<T>();
  const curRef = useRef<T>();

  if (shouldUpdate(curRef.current, state)) {
    prevRef.current = curRef.current;
    curRef.current = state;
  }

  return prevRef.current;
}

export default usePrevious;
`},69438:function(u,n){n.Z=`import { useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import useMemoizedFn from '../useMemoizedFn';

type ResetState = () => void;

const useResetState = <S>(
  initialState: S | (() => S),
): [S, Dispatch<SetStateAction<S>>, ResetState] => {
  const [state, setState] = useState(initialState);

  const resetState = useMemoizedFn(() => {
    setState(initialState);
  });

  return [state, setState, resetState];
};

export default useResetState;
`},29294:function(u,n){n.Z=`import { createUseStorageState } from '../createUseStorageState';
import isBrowser from '../utils/isBrowser';

const useSessionStorageState = createUseStorageState(() =>
  isBrowser ? sessionStorage : undefined,
);

export default useSessionStorageState;
`},8368:function(u,n){n.Z=`import { useState } from 'react';
import useMemoizedFn from '../useMemoizedFn';

function useSet<K>(initialValue?: Iterable<K>) {
  const getInitValue = () => new Set(initialValue);
  const [set, setSet] = useState<Set<K>>(getInitValue);

  const add = (key: K) => {
    if (set.has(key)) {
      return;
    }
    setSet((prevSet) => {
      const temp = new Set(prevSet);
      temp.add(key);
      return temp;
    });
  };

  const remove = (key: K) => {
    if (!set.has(key)) {
      return;
    }
    setSet((prevSet) => {
      const temp = new Set(prevSet);
      temp.delete(key);
      return temp;
    });
  };

  const reset = () => setSet(getInitValue());

  return [
    set,
    {
      add: useMemoizedFn(add),
      remove: useMemoizedFn(remove),
      reset: useMemoizedFn(reset),
    },
  ] as const;
}

export default useSet;
`},55222:function(u,n){n.Z=`import { useEffect, useState } from 'react';
import useThrottleFn from '../useThrottleFn';
import type { ThrottleOptions } from './throttleOptions';

function useThrottle<T>(value: T, options?: ThrottleOptions) {
  const [throttled, setThrottled] = useState(value);

  const { run } = useThrottleFn(() => {
    setThrottled(value);
  }, options);

  useEffect(() => {
    run();
  }, [value]);

  return throttled;
}

export default useThrottle;
`},9347:function(u,n){n.Z=`import { throttle } from 'lodash-es';
import { useMemo } from 'react';
import useLatest from '../useLatest';
import type { ThrottleOptions } from '../useThrottle/throttleOptions';
import useUnmount from '../useUnmount';
import { isFunction } from '../utils';
import isDev from '../utils/isDev';

type noop = (...args: any[]) => any;

function useThrottleFn<T extends noop>(fn: T, options?: ThrottleOptions) {
  if (isDev) {
    if (!isFunction(fn)) {
      console.error(\`useThrottleFn expected parameter is a function, got \${typeof fn}\`);
    }
  }

  const fnRef = useLatest(fn);

  const wait = options?.wait ?? 1000;

  const throttled = useMemo(
    () =>
      throttle(
        (...args: Parameters<T>): ReturnType<T> => {
          return fnRef.current(...args);
        },
        wait,
        options,
      ),
    [],
  );

  useUnmount(() => {
    throttled.cancel();
  });

  return {
    run: throttled,
    cancel: throttled.cancel,
    flush: throttled.flush,
  };
}

export default useThrottleFn;
`},35498:function(u,n){n.Z=`import { useMemo, useState } from 'react';

export interface Actions<T> {
  setLeft: () => void;
  setRight: () => void;
  set: (value: T) => void;
  toggle: () => void;
}

function useToggle<T = boolean>(): [boolean, Actions<T>];

function useToggle<T>(defaultValue: T): [T, Actions<T>];

function useToggle<T, U>(defaultValue: T, reverseValue: U): [T | U, Actions<T | U>];

function useToggle<D, R>(defaultValue: D = false as unknown as D, reverseValue?: R) {
  const [state, setState] = useState<D | R>(defaultValue);

  const actions = useMemo(() => {
    const reverseValueOrigin = (reverseValue === undefined ? !defaultValue : reverseValue) as D | R;

    const toggle = () => setState((s) => (s === defaultValue ? reverseValueOrigin : defaultValue));
    const set = (value: D | R) => setState(value);
    const setLeft = () => setState(defaultValue);
    const setRight = () => setState(reverseValueOrigin);

    return {
      toggle,
      set,
      setLeft,
      setRight,
    };
  }, []);

  return [state, actions];
}

export default useToggle;
`},25367:function(u,n){n.Z=`import { useEffect } from 'react';
import useLatest from '../useLatest';
import { isFunction } from '../utils';
import isDev from '../utils/isDev';

const useUnmount = (fn: () => void) => {
  if (isDev) {
    if (!isFunction(fn)) {
      console.error(\`useUnmount expected parameter is a function, got \${typeof fn}\`);
    }
  }

  const fnRef = useLatest(fn);

  useEffect(
    () => () => {
      fnRef.current();
    },
    [],
  );
};

export default useUnmount;
`},91975:function(u,n){n.Z=`import { useEffect, useRef } from 'react';

const useUnmountedRef = () => {
  const unmountedRef = useRef(false);
  useEffect(() => {
    unmountedRef.current = false;
    return () => {
      unmountedRef.current = true;
    };
  }, []);
  return unmountedRef;
};

export default useUnmountedRef;
`},68085:function(u,n){n.Z=`import { useEffect } from 'react';
import { createUpdateEffect } from '../createUpdateEffect';

export default createUpdateEffect(useEffect);
`},35225:function(u,n){n.Z=`export const isObject = (value: unknown): value is Record<any, any> =>
  value !== null && typeof value === 'object';
export const isFunction = (value: unknown): value is (...args: any) => any =>
  typeof value === 'function';

export const isString = (value: unknown): value is string => typeof value === 'string';
export const isBoolean = (value: unknown): value is boolean => typeof value === 'boolean';
export const isNumber = (value: unknown): value is number => typeof value === 'number';
export const isUndef = (value: unknown): value is undefined => typeof value === 'undefined';
`},2751:function(u,n){n.Z=`const isBrowser = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

export default isBrowser;
`},70571:function(u,n){n.Z=`const isDev = process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test';

export default isDev;
`},93665:function(u,n){n.Z=`import { debounce } from 'lodash-es';

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
`}}]);
