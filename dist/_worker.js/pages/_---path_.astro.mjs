globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createAstro, f as createComponent, r as renderTemplate, h as addAttribute, k as renderScript, l as renderComponent, n as renderHead, u as unescapeHTML, o as Fragment } from '../chunks/astro/server_CEjs15bK.mjs';
/* empty css                                  */
import { i as isPublishedHref, a as isPublished } from '../chunks/publication_1rfaHzAh.mjs';
import { a as absolute, s as siteName, m as metadata } from '../chunks/seo_DvYtajgg.mjs';
import { l as localizedPath, p as pick, a as place, t, v as value, s as specialties$1, b as specialty$1, c as locations$1, n as num, g as getSpecialtyBySlug, m as medicalText, i as institution, d as provider, e as schedule, f as address, h as doctorsLabel, j as isLocale, k as specialtyLocation, o as doctors$1, q as hospitals$1, r as specialtyLocationTitle, u as getLocationBySlug, w as getRelatedLocations, x as getRelatedSpecialties, y as hospitalSpecialty, z as doctorsFromIds, A as searchDoctors, B as pageSize, C as resolveLocationSlug, D as resolveSpecialtySlug, E as getRelatedDoctors, F as getDoctorBySlug, G as getHospitalBySlug } from '../chunks/directory_DgmtDqBB.mjs';
export { renderers } from '../renderers.mjs';

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$1 = createAstro("https://doclist-bd.com");
const $$Head = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Head;
  const { metadata: m, lang } = Astro2.props;
  const isHome = Astro2.url.pathname === "/" || Astro2.url.pathname === "/en";
  const title = typeof m.title === "string" ? m.title + (isHome ? "" : " | Doclist Bd") : m.title?.absolute || m.title?.default || "Doclist Bd";
  const robots = m.robots;
  const directives = robots ? [robots.index === false ? "noindex" : "index", robots.follow === false ? "nofollow" : "follow"].join(", ") : null;
  const bot = robots?.googleBot;
  const botDirectives = bot ? Object.entries(bot).map(([k, v]) => k === "index" || k === "follow" ? v ? k : "no" + k : k + ":" + v).join(", ") : null;
  const og = m.openGraph, tw = m.twitter;
  const metadataUrl = (url) => /^https?:\/\/[^/]+\/$/.test(url) ? url.slice(0, -1) : url;
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>', "</title>", "", '<link rel="icon" href="/favicon.svg">', "", "", "", "", "", "", "", "", "", "", "", "", "", "<script>\ntry{var s=localStorage.getItem('doclist-theme');var d=s==='dark'||(s!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.dataset.theme=d?'dark':'light'}catch(e){document.documentElement.dataset.theme='light'}\n<\/script>"])), title, m.description && renderTemplate`<meta name="description"${addAttribute(m.description, "content")}>`, m.applicationName && renderTemplate`<meta name="application-name"${addAttribute(m.applicationName, "content")}>`, m.alternates?.canonical && renderTemplate`<link rel="canonical"${addAttribute(metadataUrl(m.alternates.canonical), "href")}>`, Object.entries(m.alternates?.languages || {}).map(([code, href]) => renderTemplate`<link rel="alternate"${addAttribute(code, "hreflang")}${addAttribute(metadataUrl(href), "href")}>`), directives && renderTemplate`<meta name="robots"${addAttribute(directives, "content")}>`, botDirectives && renderTemplate`<meta name="googlebot"${addAttribute(botDirectives, "content")}>`, og?.title && renderTemplate`<meta property="og:title"${addAttribute(og.title, "content")}>`, og?.description && renderTemplate`<meta property="og:description"${addAttribute(og.description, "content")}>`, og?.url && renderTemplate`<meta property="og:url"${addAttribute(metadataUrl(og.url), "content")}>`, og?.siteName && renderTemplate`<meta property="og:site_name"${addAttribute(og.siteName, "content")}>`, og?.type && renderTemplate`<meta property="og:type"${addAttribute(og.type, "content")}>`, og?.locale && renderTemplate`<meta property="og:locale"${addAttribute(og.locale, "content")}>`, og?.alternateLocale?.map((locale) => renderTemplate`<meta property="og:locale:alternate"${addAttribute(locale, "content")}>`), tw?.card && renderTemplate`<meta name="twitter:card"${addAttribute(tw.card, "content")}>`, tw?.title && renderTemplate`<meta name="twitter:title"${addAttribute(tw.title, "content")}>`, tw?.description && renderTemplate`<meta name="twitter:description"${addAttribute(tw.description, "content")}>`);
}, "/workspace/scratch/40addddb4129/astro-work/astro/src/layouts/Head.astro", void 0);

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production = {};

/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_production;

function requireReactJsxRuntime_production () {
	if (hasRequiredReactJsxRuntime_production) return reactJsxRuntime_production;
	hasRequiredReactJsxRuntime_production = 1;
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
	  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
	function jsxProd(type, config, maybeKey) {
	  var key = null;
	  void 0 !== maybeKey && (key = "" + maybeKey);
	  void 0 !== config.key && (key = "" + config.key);
	  if ("key" in config) {
	    maybeKey = {};
	    for (var propName in config)
	      "key" !== propName && (maybeKey[propName] = config[propName]);
	  } else maybeKey = config;
	  config = maybeKey.ref;
	  return {
	    $$typeof: REACT_ELEMENT_TYPE,
	    type: type,
	    key: key,
	    ref: void 0 !== config ? config : null,
	    props: maybeKey
	  };
	}
	reactJsxRuntime_production.Fragment = REACT_FRAGMENT_TYPE;
	reactJsxRuntime_production.jsx = jsxProd;
	reactJsxRuntime_production.jsxs = jsxProd;
	return reactJsxRuntime_production;
}

var hasRequiredJsxRuntime;

function requireJsxRuntime () {
	if (hasRequiredJsxRuntime) return jsxRuntime.exports;
	hasRequiredJsxRuntime = 1;
	{
	  jsxRuntime.exports = requireReactJsxRuntime_production();
	}
	return jsxRuntime.exports;
}

var jsxRuntimeExports = requireJsxRuntime();

function ReleaseLink({ href, children, ...props }) {
  if (href && !isPublishedHref(href)) return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: props.className, lang: props.lang, children });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("a", { ...props, href, children });
}

function PageDates({ path, lang }) {
  const url = absolute(localizedPath(lang, path.replace(/^\/(bn|en)(?=\/|$)/, "") || "/"));
  const data = { "@context": "https://schema.org", "@type": "WebPage", "@id": url + "#webpage", url, inLanguage: lang === "bn" ? "bn-BD" : "en-BD" };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: { __html: JSON.stringify(data).replace(/</g, "\\u003c") } });
}

const listingRows = 5903;
const audit = {
  listingRows};

var react = {exports: {}};

var react_production = {};

/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReact_production;

function requireReact_production () {
	if (hasRequiredReact_production) return react_production;
	hasRequiredReact_production = 1;
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
	  REACT_PORTAL_TYPE = Symbol.for("react.portal"),
	  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
	  REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
	  REACT_PROFILER_TYPE = Symbol.for("react.profiler"),
	  REACT_CONSUMER_TYPE = Symbol.for("react.consumer"),
	  REACT_CONTEXT_TYPE = Symbol.for("react.context"),
	  REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
	  REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
	  REACT_MEMO_TYPE = Symbol.for("react.memo"),
	  REACT_LAZY_TYPE = Symbol.for("react.lazy"),
	  REACT_ACTIVITY_TYPE = Symbol.for("react.activity"),
	  MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
	function getIteratorFn(maybeIterable) {
	  if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
	  maybeIterable =
	    (MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL]) ||
	    maybeIterable["@@iterator"];
	  return "function" === typeof maybeIterable ? maybeIterable : null;
	}
	var ReactNoopUpdateQueue = {
	    isMounted: function () {
	      return false;
	    },
	    enqueueForceUpdate: function () {},
	    enqueueReplaceState: function () {},
	    enqueueSetState: function () {}
	  },
	  assign = Object.assign,
	  emptyObject = {};
	function Component(props, context, updater) {
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  this.updater = updater || ReactNoopUpdateQueue;
	}
	Component.prototype.isReactComponent = {};
	Component.prototype.setState = function (partialState, callback) {
	  if (
	    "object" !== typeof partialState &&
	    "function" !== typeof partialState &&
	    null != partialState
	  )
	    throw Error(
	      "takes an object of state variables to update or a function which returns an object of state variables."
	    );
	  this.updater.enqueueSetState(this, partialState, callback, "setState");
	};
	Component.prototype.forceUpdate = function (callback) {
	  this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
	};
	function ComponentDummy() {}
	ComponentDummy.prototype = Component.prototype;
	function PureComponent(props, context, updater) {
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  this.updater = updater || ReactNoopUpdateQueue;
	}
	var pureComponentPrototype = (PureComponent.prototype = new ComponentDummy());
	pureComponentPrototype.constructor = PureComponent;
	assign(pureComponentPrototype, Component.prototype);
	pureComponentPrototype.isPureReactComponent = true;
	var isArrayImpl = Array.isArray;
	function noop() {}
	var ReactSharedInternals = { H: null, A: null, T: null, S: null },
	  hasOwnProperty = Object.prototype.hasOwnProperty;
	function ReactElement(type, key, props) {
	  var refProp = props.ref;
	  return {
	    $$typeof: REACT_ELEMENT_TYPE,
	    type: type,
	    key: key,
	    ref: void 0 !== refProp ? refProp : null,
	    props: props
	  };
	}
	function cloneAndReplaceKey(oldElement, newKey) {
	  return ReactElement(oldElement.type, newKey, oldElement.props);
	}
	function isValidElement(object) {
	  return (
	    "object" === typeof object &&
	    null !== object &&
	    object.$$typeof === REACT_ELEMENT_TYPE
	  );
	}
	function escape(key) {
	  var escaperLookup = { "=": "=0", ":": "=2" };
	  return (
	    "$" +
	    key.replace(/[=:]/g, function (match) {
	      return escaperLookup[match];
	    })
	  );
	}
	var userProvidedKeyEscapeRegex = /\/+/g;
	function getElementKey(element, index) {
	  return "object" === typeof element && null !== element && null != element.key
	    ? escape("" + element.key)
	    : index.toString(36);
	}
	function resolveThenable(thenable) {
	  switch (thenable.status) {
	    case "fulfilled":
	      return thenable.value;
	    case "rejected":
	      throw thenable.reason;
	    default:
	      switch (
	        ("string" === typeof thenable.status
	          ? thenable.then(noop, noop)
	          : ((thenable.status = "pending"),
	            thenable.then(
	              function (fulfilledValue) {
	                "pending" === thenable.status &&
	                  ((thenable.status = "fulfilled"),
	                  (thenable.value = fulfilledValue));
	              },
	              function (error) {
	                "pending" === thenable.status &&
	                  ((thenable.status = "rejected"), (thenable.reason = error));
	              }
	            )),
	        thenable.status)
	      ) {
	        case "fulfilled":
	          return thenable.value;
	        case "rejected":
	          throw thenable.reason;
	      }
	  }
	  throw thenable;
	}
	function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
	  var type = typeof children;
	  if ("undefined" === type || "boolean" === type) children = null;
	  var invokeCallback = false;
	  if (null === children) invokeCallback = true;
	  else
	    switch (type) {
	      case "bigint":
	      case "string":
	      case "number":
	        invokeCallback = true;
	        break;
	      case "object":
	        switch (children.$$typeof) {
	          case REACT_ELEMENT_TYPE:
	          case REACT_PORTAL_TYPE:
	            invokeCallback = true;
	            break;
	          case REACT_LAZY_TYPE:
	            return (
	              (invokeCallback = children._init),
	              mapIntoArray(
	                invokeCallback(children._payload),
	                array,
	                escapedPrefix,
	                nameSoFar,
	                callback
	              )
	            );
	        }
	    }
	  if (invokeCallback)
	    return (
	      (callback = callback(children)),
	      (invokeCallback =
	        "" === nameSoFar ? "." + getElementKey(children, 0) : nameSoFar),
	      isArrayImpl(callback)
	        ? ((escapedPrefix = ""),
	          null != invokeCallback &&
	            (escapedPrefix =
	              invokeCallback.replace(userProvidedKeyEscapeRegex, "$&/") + "/"),
	          mapIntoArray(callback, array, escapedPrefix, "", function (c) {
	            return c;
	          }))
	        : null != callback &&
	          (isValidElement(callback) &&
	            (callback = cloneAndReplaceKey(
	              callback,
	              escapedPrefix +
	                (null == callback.key ||
	                (children && children.key === callback.key)
	                  ? ""
	                  : ("" + callback.key).replace(
	                      userProvidedKeyEscapeRegex,
	                      "$&/"
	                    ) + "/") +
	                invokeCallback
	            )),
	          array.push(callback)),
	      1
	    );
	  invokeCallback = 0;
	  var nextNamePrefix = "" === nameSoFar ? "." : nameSoFar + ":";
	  if (isArrayImpl(children))
	    for (var i = 0; i < children.length; i++)
	      (nameSoFar = children[i]),
	        (type = nextNamePrefix + getElementKey(nameSoFar, i)),
	        (invokeCallback += mapIntoArray(
	          nameSoFar,
	          array,
	          escapedPrefix,
	          type,
	          callback
	        ));
	  else if (((i = getIteratorFn(children)), "function" === typeof i))
	    for (
	      children = i.call(children), i = 0;
	      !(nameSoFar = children.next()).done;

	    )
	      (nameSoFar = nameSoFar.value),
	        (type = nextNamePrefix + getElementKey(nameSoFar, i++)),
	        (invokeCallback += mapIntoArray(
	          nameSoFar,
	          array,
	          escapedPrefix,
	          type,
	          callback
	        ));
	  else if ("object" === type) {
	    if ("function" === typeof children.then)
	      return mapIntoArray(
	        resolveThenable(children),
	        array,
	        escapedPrefix,
	        nameSoFar,
	        callback
	      );
	    array = String(children);
	    throw Error(
	      "Objects are not valid as a React child (found: " +
	        ("[object Object]" === array
	          ? "object with keys {" + Object.keys(children).join(", ") + "}"
	          : array) +
	        "). If you meant to render a collection of children, use an array instead."
	    );
	  }
	  return invokeCallback;
	}
	function mapChildren(children, func, context) {
	  if (null == children) return children;
	  var result = [],
	    count = 0;
	  mapIntoArray(children, result, "", "", function (child) {
	    return func.call(context, child, count++);
	  });
	  return result;
	}
	function lazyInitializer(payload) {
	  if (-1 === payload._status) {
	    var ctor = payload._result;
	    ctor = ctor();
	    ctor.then(
	      function (moduleObject) {
	        if (0 === payload._status || -1 === payload._status)
	          (payload._status = 1), (payload._result = moduleObject);
	      },
	      function (error) {
	        if (0 === payload._status || -1 === payload._status)
	          (payload._status = 2), (payload._result = error);
	      }
	    );
	    -1 === payload._status && ((payload._status = 0), (payload._result = ctor));
	  }
	  if (1 === payload._status) return payload._result.default;
	  throw payload._result;
	}
	var reportGlobalError =
	    "function" === typeof reportError
	      ? reportError
	      : function (error) {
	          if (
	            "object" === typeof window &&
	            "function" === typeof window.ErrorEvent
	          ) {
	            var event = new window.ErrorEvent("error", {
	              bubbles: true,
	              cancelable: true,
	              message:
	                "object" === typeof error &&
	                null !== error &&
	                "string" === typeof error.message
	                  ? String(error.message)
	                  : String(error),
	              error: error
	            });
	            if (!window.dispatchEvent(event)) return;
	          } else if (
	            "object" === typeof process &&
	            "function" === typeof process.emit
	          ) {
	            process.emit("uncaughtException", error);
	            return;
	          }
	          console.error(error);
	        },
	  Children = {
	    map: mapChildren,
	    forEach: function (children, forEachFunc, forEachContext) {
	      mapChildren(
	        children,
	        function () {
	          forEachFunc.apply(this, arguments);
	        },
	        forEachContext
	      );
	    },
	    count: function (children) {
	      var n = 0;
	      mapChildren(children, function () {
	        n++;
	      });
	      return n;
	    },
	    toArray: function (children) {
	      return (
	        mapChildren(children, function (child) {
	          return child;
	        }) || []
	      );
	    },
	    only: function (children) {
	      if (!isValidElement(children))
	        throw Error(
	          "React.Children.only expected to receive a single React element child."
	        );
	      return children;
	    }
	  };
	react_production.Activity = REACT_ACTIVITY_TYPE;
	react_production.Children = Children;
	react_production.Component = Component;
	react_production.Fragment = REACT_FRAGMENT_TYPE;
	react_production.Profiler = REACT_PROFILER_TYPE;
	react_production.PureComponent = PureComponent;
	react_production.StrictMode = REACT_STRICT_MODE_TYPE;
	react_production.Suspense = REACT_SUSPENSE_TYPE;
	react_production.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
	  ReactSharedInternals;
	react_production.__COMPILER_RUNTIME = {
	  __proto__: null,
	  c: function (size) {
	    return ReactSharedInternals.H.useMemoCache(size);
	  }
	};
	react_production.cache = function (fn) {
	  return function () {
	    return fn.apply(null, arguments);
	  };
	};
	react_production.cacheSignal = function () {
	  return null;
	};
	react_production.cloneElement = function (element, config, children) {
	  if (null === element || void 0 === element)
	    throw Error(
	      "The argument must be a React element, but you passed " + element + "."
	    );
	  var props = assign({}, element.props),
	    key = element.key;
	  if (null != config)
	    for (propName in (void 0 !== config.key && (key = "" + config.key), config))
	      !hasOwnProperty.call(config, propName) ||
	        "key" === propName ||
	        "__self" === propName ||
	        "__source" === propName ||
	        ("ref" === propName && void 0 === config.ref) ||
	        (props[propName] = config[propName]);
	  var propName = arguments.length - 2;
	  if (1 === propName) props.children = children;
	  else if (1 < propName) {
	    for (var childArray = Array(propName), i = 0; i < propName; i++)
	      childArray[i] = arguments[i + 2];
	    props.children = childArray;
	  }
	  return ReactElement(element.type, key, props);
	};
	react_production.createContext = function (defaultValue) {
	  defaultValue = {
	    $$typeof: REACT_CONTEXT_TYPE,
	    _currentValue: defaultValue,
	    _currentValue2: defaultValue,
	    _threadCount: 0,
	    Provider: null,
	    Consumer: null
	  };
	  defaultValue.Provider = defaultValue;
	  defaultValue.Consumer = {
	    $$typeof: REACT_CONSUMER_TYPE,
	    _context: defaultValue
	  };
	  return defaultValue;
	};
	react_production.createElement = function (type, config, children) {
	  var propName,
	    props = {},
	    key = null;
	  if (null != config)
	    for (propName in (void 0 !== config.key && (key = "" + config.key), config))
	      hasOwnProperty.call(config, propName) &&
	        "key" !== propName &&
	        "__self" !== propName &&
	        "__source" !== propName &&
	        (props[propName] = config[propName]);
	  var childrenLength = arguments.length - 2;
	  if (1 === childrenLength) props.children = children;
	  else if (1 < childrenLength) {
	    for (var childArray = Array(childrenLength), i = 0; i < childrenLength; i++)
	      childArray[i] = arguments[i + 2];
	    props.children = childArray;
	  }
	  if (type && type.defaultProps)
	    for (propName in ((childrenLength = type.defaultProps), childrenLength))
	      void 0 === props[propName] &&
	        (props[propName] = childrenLength[propName]);
	  return ReactElement(type, key, props);
	};
	react_production.createRef = function () {
	  return { current: null };
	};
	react_production.forwardRef = function (render) {
	  return { $$typeof: REACT_FORWARD_REF_TYPE, render: render };
	};
	react_production.isValidElement = isValidElement;
	react_production.lazy = function (ctor) {
	  return {
	    $$typeof: REACT_LAZY_TYPE,
	    _payload: { _status: -1, _result: ctor },
	    _init: lazyInitializer
	  };
	};
	react_production.memo = function (type, compare) {
	  return {
	    $$typeof: REACT_MEMO_TYPE,
	    type: type,
	    compare: void 0 === compare ? null : compare
	  };
	};
	react_production.startTransition = function (scope) {
	  var prevTransition = ReactSharedInternals.T,
	    currentTransition = {};
	  ReactSharedInternals.T = currentTransition;
	  try {
	    var returnValue = scope(),
	      onStartTransitionFinish = ReactSharedInternals.S;
	    null !== onStartTransitionFinish &&
	      onStartTransitionFinish(currentTransition, returnValue);
	    "object" === typeof returnValue &&
	      null !== returnValue &&
	      "function" === typeof returnValue.then &&
	      returnValue.then(noop, reportGlobalError);
	  } catch (error) {
	    reportGlobalError(error);
	  } finally {
	    null !== prevTransition &&
	      null !== currentTransition.types &&
	      (prevTransition.types = currentTransition.types),
	      (ReactSharedInternals.T = prevTransition);
	  }
	};
	react_production.unstable_useCacheRefresh = function () {
	  return ReactSharedInternals.H.useCacheRefresh();
	};
	react_production.use = function (usable) {
	  return ReactSharedInternals.H.use(usable);
	};
	react_production.useActionState = function (action, initialState, permalink) {
	  return ReactSharedInternals.H.useActionState(action, initialState, permalink);
	};
	react_production.useCallback = function (callback, deps) {
	  return ReactSharedInternals.H.useCallback(callback, deps);
	};
	react_production.useContext = function (Context) {
	  return ReactSharedInternals.H.useContext(Context);
	};
	react_production.useDebugValue = function () {};
	react_production.useDeferredValue = function (value, initialValue) {
	  return ReactSharedInternals.H.useDeferredValue(value, initialValue);
	};
	react_production.useEffect = function (create, deps) {
	  return ReactSharedInternals.H.useEffect(create, deps);
	};
	react_production.useEffectEvent = function (callback) {
	  return ReactSharedInternals.H.useEffectEvent(callback);
	};
	react_production.useId = function () {
	  return ReactSharedInternals.H.useId();
	};
	react_production.useImperativeHandle = function (ref, create, deps) {
	  return ReactSharedInternals.H.useImperativeHandle(ref, create, deps);
	};
	react_production.useInsertionEffect = function (create, deps) {
	  return ReactSharedInternals.H.useInsertionEffect(create, deps);
	};
	react_production.useLayoutEffect = function (create, deps) {
	  return ReactSharedInternals.H.useLayoutEffect(create, deps);
	};
	react_production.useMemo = function (create, deps) {
	  return ReactSharedInternals.H.useMemo(create, deps);
	};
	react_production.useOptimistic = function (passthrough, reducer) {
	  return ReactSharedInternals.H.useOptimistic(passthrough, reducer);
	};
	react_production.useReducer = function (reducer, initialArg, init) {
	  return ReactSharedInternals.H.useReducer(reducer, initialArg, init);
	};
	react_production.useRef = function (initialValue) {
	  return ReactSharedInternals.H.useRef(initialValue);
	};
	react_production.useState = function (initialState) {
	  return ReactSharedInternals.H.useState(initialState);
	};
	react_production.useSyncExternalStore = function (
	  subscribe,
	  getSnapshot,
	  getServerSnapshot
	) {
	  return ReactSharedInternals.H.useSyncExternalStore(
	    subscribe,
	    getSnapshot,
	    getServerSnapshot
	  );
	};
	react_production.useTransition = function () {
	  return ReactSharedInternals.H.useTransition();
	};
	react_production.version = "19.2.6";
	return react_production;
}

var hasRequiredReact;

function requireReact () {
	if (hasRequiredReact) return react.exports;
	hasRequiredReact = 1;
	{
	  react.exports = requireReact_production();
	}
	return react.exports;
}

var reactExports = requireReact();

function GeographyFields$1({ options, initialDivision = "", initialDistrict = "", lang, prefix = "filter", fixedDivision = "", fixedDistrict = "" }) {
  const [division, setDivision] = reactExports.useState(fixedDivision || initialDivision), [district, setDistrict] = reactExports.useState(fixedDistrict || initialDistrict);
  const districts = options.filter((l) => l.kind === "district" && l.parent === division);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    !fixedDivision ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "field filter-group", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: prefix + "-division", children: pick(lang, "Division", "বিভাগ") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { id: prefix + "-division", name: "division", value: division, onChange: (e) => {
        setDivision(e.target.value);
        setDistrict("");
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: pick(lang, "All divisions", "সব বিভাগ") }),
        options.filter((l) => l.kind === "division").map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: l.slug, children: place(lang, l.name) }, l.slug))
      ] })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "hidden", name: "division", value: fixedDivision }),
    division && (!fixedDistrict ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "field filter-group", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: prefix + "-district", children: pick(lang, "District", "জেলা") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { id: prefix + "-district", name: "district", value: districts.some((d) => d.slug === district) ? district : "", onChange: (e) => setDistrict(e.target.value), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: pick(lang, "All districts in this division", "এই বিভাগের সব জেলা") }),
        districts.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: l.slug, children: place(lang, l.name) }, l.slug))
      ] })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "hidden", name: "district", value: fixedDistrict }))
  ] });
}

const PagePath = reactExports.createContext("/");
function island(name, Component) {
  return function Island(props) {
    const pathname = reactExports.useContext(PagePath);
    const input = name === "Preferences" ? { ...props, pathname } : props;
    return /* @__PURE__ */ jsxRuntimeExports.jsx("doclist-island", { style: { display: "contents" }, "data-component": name, "data-props": JSON.stringify(input), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Component, { ...input }) });
  };
}

const GeographyFields = island("GeographyFields", GeographyFields$1);

function SearchBar({ query = {}, lang }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "search-grid", action: localizedPath(lang, "/doctors"), method: "get", role: "search", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "field", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "doctor-search", children: t(lang, "Name or keyword") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "doctor-search", name: "q", defaultValue: value(query, "q"), placeholder: t(lang, "Doctor, hospital or area"), maxLength: 200 })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "field", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "search-specialty", children: t(lang, "Specialty") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { id: "search-specialty", name: "specialty", defaultValue: value(query, "specialty"), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: t(lang, "Any specialty") }),
        specialties$1.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: s.slug, children: specialty$1(lang, s.name) }, s.slug))
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(GeographyFields, { lang, prefix: "search", options: locations$1.map(({ slug, name, kind, parent }) => ({ slug, name, kind, parent })), initialDivision: value(query, "division"), initialDistrict: value(query, "district") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-primary", type: "submit", children: t(lang, "Search Doctors") })
  ] });
}

const savedDoctorsKey = "doclist-saved-doctors-v1";
const savedDoctorsEvent = "doclist-saved-doctors-change";
const retentionMs = 365 * 24 * 60 * 60 * 1e3;
function parseSavedDoctors(raw, now = Date.now()) {
  try {
    const data = JSON.parse(raw || "[]");
    if (!Array.isArray(data)) return [];
    const unique = /* @__PURE__ */ new Map();
    for (const item of data) {
      if (item && typeof item.id === "string" && item.id.length > 0 && item.id.length < 200 && Number.isFinite(item.expiresAt) && item.expiresAt > now) {
        unique.set(item.id, { id: item.id, expiresAt: item.expiresAt });
      }
    }
    return [...unique.values()];
  } catch {
    return [];
  }
}
function readSavedDoctors() {
  return parseSavedDoctors(localStorage.getItem(savedDoctorsKey));
}
function writeSavedDoctors(items) {
  localStorage.setItem(savedDoctorsKey, JSON.stringify(items));
  window.dispatchEvent(new Event(savedDoctorsEvent));
}

function SaveDoctor$1({ id, lang }) {
  const [saved, setSaved] = reactExports.useState(false);
  const [ready, setReady] = reactExports.useState(false);
  const [error, setError] = reactExports.useState("");
  reactExports.useEffect(() => {
    const sync = () => {
      try {
        setSaved(readSavedDoctors().some((x) => x.id === id));
      } catch {
      }
      setReady(true);
    };
    const storage = (e) => {
      if (e.key === savedDoctorsKey || e.key === null) sync();
    };
    sync();
    window.addEventListener(savedDoctorsEvent, sync);
    window.addEventListener("storage", storage);
    window.addEventListener("focus", sync);
    return () => {
      window.removeEventListener(savedDoctorsEvent, sync);
      window.removeEventListener("storage", storage);
      window.removeEventListener("focus", sync);
    };
  }, [id]);
  function toggle() {
    try {
      const items = readSavedDoctors(), exists = items.some((x) => x.id === id);
      writeSavedDoctors(exists ? items.filter((x) => x.id !== id) : [...items, { id, expiresAt: Date.now() + retentionMs }]);
      setError("");
    } catch {
      setError(lang === "en" ? "Unable to save. Allow browser storage and try again." : "সেভ করা যায়নি। ব্রাউজারের স্টোরেজ চালু করে আবার চেষ্টা করুন।");
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "save-doc-control", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "btn btn-secondary save-doc" + (saved ? " is-saved" : ""), "aria-pressed": saved, disabled: !ready, onClick: toggle, children: saved ? lang === "en" ? "✓ Saved · Remove" : "✓ সেভ হয়েছে · সরান" : lang === "en" ? "Save Doc" : "ডাক্তার সেভ করুন" }),
    error && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "small", role: "alert", children: error })
  ] });
}

const SaveDoctor = island("SaveDoctor", SaveDoctor$1);

function DoctorAvatar$1({ name, image, large = false }) {
  const [failed, setFailed] = reactExports.useState(false);
  const classes = large ? "profile-photo" : "doctor-photo";
  return image && !failed ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { className: classes + " local-portrait", src: image, alt: name, width: large ? 160 : 90, height: large ? 200 : 114, loading: large ? "eager" : "lazy", decoding: "async", onError: () => setFailed(true) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: classes + " initials", "aria-hidden": "true", children: name.replace(/^(prof\.?\s*)?(dr\.?\s*)/i, "").split(/\s+/).slice(0, 2).map((x) => x[0]).join("") });
}

const DoctorAvatar = island("DoctorAvatar", DoctorAvatar$1);

const cache = /* @__PURE__ */ new Map(), listeners = /* @__PURE__ */ new Map();
let visitorReady;
function publish(id, c) {
  const previous = cache.get(id);
  const next = previous ? { loves: Math.max(previous.loves, c.loves), impressions: Math.max(previous.impressions, c.impressions), loved: previous.loved || c.loved } : c;
  cache.set(id, next);
  listeners.get(id)?.forEach((fn) => fn(next));
}
function Icon({ kind, filled = false }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "19", height: "19", viewBox: "0 0 24 24", fill: filled ? "currentColor" : "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: kind === "love" ? /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" }) : kind === "eye" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "12", r: "3" })
  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "18", cy: "5", r: "3" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "6", cy: "12", r: "3" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "18", cy: "19", r: "3" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "m8.6 10.5 6.8-4m-6.8 7 6.8 4" })
  ] }) });
}
function DoctorEngagement$1({ id, slug, name, lang }) {
  const [counts, setCounts] = reactExports.useState(null), [busy, setBusy] = reactExports.useState(false), [message, setMessage] = reactExports.useState(""), [sharing, setSharing] = reactExports.useState(false), [explain, setExplain] = reactExports.useState(false);
  const ref = reactExports.useRef(null), mounted = reactExports.useRef(false);
  const endpoint = "/api/doctors/" + encodeURIComponent(id) + "/engagement";
  reactExports.useEffect(() => {
    mounted.current = true;
    let cancelled = false;
    const subscribers = listeners.get(id) || /* @__PURE__ */ new Set();
    subscribers.add(setCounts);
    listeners.set(id, subscribers);
    if (cache.has(id)) setCounts(cache.get(id));
    const request = async (body) => {
      if (!visitorReady) visitorReady = fetch(endpoint, { cache: "no-store" }).then(async (r) => {
        if (!r.ok) throw new Error("unavailable");
        publish(id, await r.json());
      }).catch((e) => {
        visitorReady = void 0;
        throw e;
      });
      await visitorReady;
      const response = await fetch(endpoint, { method: body ? "POST" : "GET", headers: body ? { "Content-Type": "application/json" } : void 0, body: body ? JSON.stringify(body) : void 0, cache: "no-store" });
      if (!response.ok) throw new Error("unavailable");
      const c = await response.json();
      if (!cancelled) publish(id, c);
    };
    let timer, visible = false, ready = false;
    const impression = () => {
      if (timer) clearTimeout(timer);
      if (visible && ready && document.visibilityState === "visible") timer = setTimeout(() => {
        const event = crypto.randomUUID();
        request({ action: "impression", event }).catch(() => {
          if (!cancelled) setMessage(pick(lang, "Counts unavailable. Try again later.", "কাউন্ট পাওয়া যাচ্ছে না। পরে আবার চেষ্টা করুন।"));
        });
      }, 1e3);
    };
    request().then(() => {
      ready = true;
      impression();
    }).catch(() => {
      if (!cancelled) setMessage(pick(lang, "Counts unavailable. Try again later.", "কাউন্ট পাওয়া যাচ্ছে না। পরে আবার চেষ্টা করুন।"));
    });
    const target = ref.current?.closest("article, .profile-head") || ref.current;
    const observer = new IntersectionObserver((entries) => {
      const next = entries[0].isIntersecting && entries[0].intersectionRatio >= 0.25;
      if (next !== visible) {
        visible = next;
        impression();
      }
    }, { threshold: [0, 0.25] });
    if (target) observer.observe(target);
    const visibility = () => impression();
    document.addEventListener("visibilitychange", visibility);
    return () => {
      cancelled = true;
      mounted.current = false;
      subscribers.delete(setCounts);
      observer.disconnect();
      if (timer) clearTimeout(timer);
      document.removeEventListener("visibilitychange", visibility);
    };
  }, [id, endpoint, lang]);
  async function love() {
    if (!counts || counts.loved || busy) return;
    setBusy(true);
    setMessage("");
    try {
      const r = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ action: "love" }) });
      if (!r.ok) throw new Error();
      const c = await r.json();
      publish(id, c);
    } catch {
      setMessage(pick(lang, "Could not save. Please try again.", "সংরক্ষণ করা যায়নি। আবার চেষ্টা করুন।"));
    } finally {
      if (mounted.current) setBusy(false);
    }
  }
  const profilePath = localizedPath(lang, "/doctor/" + slug);
  async function share() {
    const url = window.location.origin + profilePath;
    if (navigator.share) {
      try {
        await navigator.share({ title: name + " | Doclist Bd", url });
        return;
      } catch (e) {
        if (e instanceof Error && e.name === "AbortError") return;
      }
    }
    setSharing((s) => !s);
  }
  async function copy() {
    try {
      const url = window.location.origin + profilePath;
      if (navigator.clipboard) await navigator.clipboard.writeText(url);
      else {
        const input = document.createElement("textarea");
        input.value = url;
        document.body.appendChild(input);
        input.select();
        if (!document.execCommand("copy")) throw new Error();
        input.remove();
      }
      setMessage(pick(lang, "Link copied", "লিংক কপি হয়েছে"));
      setSharing(false);
    } catch {
      setMessage(pick(lang, "Could not copy. Use the profile link.", "কপি করা যায়নি। প্রোফাইলের লিংক ব্যবহার করুন।"));
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "doctor-engagement", ref, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "engagement-controls", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", className: "engagement-button love-button" + (counts?.loved ? " loved" : ""), disabled: !counts || counts.loved || busy, onClick: love, "aria-pressed": counts?.loved || false, "aria-label": pick(lang, counts?.loved ? "Loved this doctor" : "Love this doctor", counts?.loved ? "লাভ দেওয়া হয়েছে" : "এই ডাক্তারকে লাভ দিন"), title: pick(lang, "One love per browser", "এক browser থেকে একবার লাভ"), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { kind: "love", filled: counts?.loved }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: counts ? num(lang, counts.loves) : "—" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", className: "engagement-button", onClick: () => setExplain((s) => !s), "aria-expanded": explain, "aria-label": pick(lang, "View impression information", "ভিউ সম্পর্কে জানুন"), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { kind: "eye" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: counts ? num(lang, counts.impressions) : "—" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", className: "engagement-button share-button", onClick: share, "aria-label": pick(lang, "Share doctor profile", "ডাক্তারের প্রোফাইল শেয়ার করুন"), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { kind: "share" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: pick(lang, "Share", "শেয়ার") })
      ] })
    ] }),
    explain && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "engagement-note", children: pick(lang, "Views across cards and profiles. Each visible visit counts; this is not a count of unique people.", "কার্ড ও প্রোফাইলের মোট ভিউ। প্রতিবার দৃশ্যমান হলে গণনা হয়; এটি আলাদা মানুষের সংখ্যা নয়।") }),
    sharing && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "share-options", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: copy, children: pick(lang, "Copy link", "লিংক কপি") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { target: "_blank", rel: "noopener noreferrer", href: "https://wa.me/?text=" + encodeURIComponent(name + " " + (typeof window === "undefined" ? "" : window.location.origin) + profilePath), children: "WhatsApp" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { target: "_blank", rel: "noopener noreferrer", href: "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent((typeof window === "undefined" ? "" : window.location.origin) + profilePath), children: "Facebook" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setSharing(false), children: pick(lang, "Close", "বন্ধ") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "engagement-feedback", role: "status", children: message })
  ] });
}

const DoctorEngagement = island("DoctorEngagement", DoctorEngagement$1);

const phoneHref = (phone) => "tel:" + phone.split(/[,/;|]/)[0].replace(/[^+\d]/g, "");
function Avatar({ doctor, large = false }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DoctorAvatar, { name: doctor.name, image: doctor.image, large });
}
function DoctorCard({ doctor, hospitalSlug, locationSlug, lang }) {
  if (!isPublished("/doctor/" + doctor.slug)) return null;
  const c = doctor.chambers.find((c2) => (!hospitalSlug || c2.hospitalSlug === hospitalSlug) && (!locationSlug || c2.locations.includes(locationSlug))) || doctor.chambers[0];
  const url = (p) => localizedPath(lang, p);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "card doctor-card list card-hover", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { doctor }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "doctor-main", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ReleaseLink, { href: url("/doctor/" + doctor.slug), lang: "en", children: doctor.name }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "specialty", children: doctor.specialtySlugs.slice(0, 3).map((s) => specialty$1(lang, getSpecialtyBySlug(s)?.name || "")).filter(Boolean).join(" · ") || medicalText(lang, doctor.rawSpecialties[0] || "Doctor") }),
      doctor.qualifications && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "qualifications", children: medicalText(lang, doctor.qualifications) }),
      doctor.designation && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "designation", children: institution(lang, doctor.designation) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "meta-row", children: [
        doctor.experience !== null && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: pick(lang, `${num(lang, doctor.experience)} years of experience`, `${num(lang, doctor.experience)} বছরের অভিজ্ঞতা`) }),
        c && /* @__PURE__ */ jsxRuntimeExports.jsx(ReleaseLink, { href: url("/hospital/" + c.hospitalSlug), children: provider(lang, c.name) }),
        doctor.chambers.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: pick(lang, `${num(lang, doctor.chambers.length)} chambers`, `${num(lang, doctor.chambers.length)}টি চেম্বার`) })
      ] }),
      c?.schedule && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "schedule", children: schedule(lang, c.schedule) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "doctor-actions", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SaveDoctor, { id: doctor.id, lang }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DoctorEngagement, { id: doctor.id, slug: doctor.slug, name: doctor.name, lang }),
      c?.fee && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fee", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
          "৳",
          num(lang, Number(c.fee))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t(lang, "Listed consultation fee") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ReleaseLink, { className: "btn btn-secondary", href: url("/doctor/" + doctor.slug), children: t(lang, "View Profile") }),
      c?.phone && /* @__PURE__ */ jsxRuntimeExports.jsx(ReleaseLink, { className: "btn btn-primary", href: phoneHref(c.phone), children: t(lang, "Call Chamber") }),
      c && /* @__PURE__ */ jsxRuntimeExports.jsx(ReleaseLink, { className: "btn btn-soft", href: url("/hospital/" + c.hospitalSlug), children: t(lang, "View Hospital") })
    ] })
  ] });
}
function ChamberCard({ chamber, lang }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "content-card chamber-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ReleaseLink, { href: localizedPath(lang, "/hospital/" + chamber.hospitalSlug), children: provider(lang, chamber.name) }) }),
      chamber.address && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: address(lang, chamber.address) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "chamber-meta", children: [
        chamber.schedule && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
            t(lang, "Visiting schedule"),
            ": "
          ] }),
          schedule(lang, chamber.schedule)
        ] }),
        chamber.phone && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
            t(lang, "Appointment phone"),
            ": "
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { lang: "en", children: chamber.phone })
        ] }),
        chamber.fee && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
            t(lang, "Fee"),
            ": "
          ] }),
          "৳",
          num(lang, Number(chamber.fee))
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "small", children: t(lang, "Confirm the latest schedule and fee before visiting.") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "chamber-actions", children: [
      chamber.phone && /* @__PURE__ */ jsxRuntimeExports.jsx(ReleaseLink, { className: "btn btn-primary", href: phoneHref(chamber.phone), children: t(lang, "Call for Appointment") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ReleaseLink, { className: "btn btn-secondary", href: localizedPath(lang, "/hospital/" + chamber.hospitalSlug), children: t(lang, "View Hospital") }),
      chamber.source && /* @__PURE__ */ jsxRuntimeExports.jsx(ReleaseLink, { className: "source-link", href: chamber.source, target: "_blank", rel: "noopener noreferrer", children: t(lang, "Listing source") })
    ] })
  ] });
}

function HospitalCard({ hospital: h, lang }) {
  if (!isPublished("/hospital/" + h.slug)) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "card hospital-card card-hover", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hospital-head", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hospital-logo", "aria-hidden": "true", children: h.name.split(/\s+/).slice(0, 2).map((x) => x[0]).join("") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ReleaseLink, { href: localizedPath(lang, "/hospital/" + h.slug), children: provider(lang, h.name) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t(lang, h.type) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "stats", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: doctorsLabel(lang, h.doctorIds.length) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: pick(lang, `${num(lang, h.specialtySlugs.length)} specialties`, `${num(lang, h.specialtySlugs.length)}টি বিশেষজ্ঞ বিভাগ`) })
    ] }),
    h.addresses[0] && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: address(lang, h.addresses[0]) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ReleaseLink, { className: "btn btn-secondary", href: localizedPath(lang, "/hospital/" + h.slug + "/doctors"), children: t(lang, "View Doctor List") })
  ] });
}
function SpecialtyCard({ specialty: s, lang }) {
  if (!isPublished("/specialty/" + s.slug)) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(ReleaseLink, { className: "card specialty-card card-hover", href: localizedPath(lang, "/specialty/" + s.slug), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "icon-box", "aria-hidden": "true", children: "+" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: specialty$1(lang, s.name) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: doctorsLabel(lang, s.doctorIds.length) })
    ] })
  ] });
}
function LocationCard({ location: l, lang }) {
  if (!isPublished("/doctors/" + l.slug)) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(ReleaseLink, { className: "card location-card card-hover", href: localizedPath(lang, "/doctors/" + l.slug), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pill", children: t(lang, l.kind) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: place(lang, l.name) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: doctorsLabel(lang, l.doctorIds.length) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "browse", children: t(lang, "Browse doctors") })
  ] });
}

function releasedSchema(value) {
  if (Array.isArray(value)) return value.map(releasedSchema);
  if (value && typeof value === "object") return Object.fromEntries(Object.entries(value).filter(([key, v]) => !(["url", "item", "@id"].includes(key) && typeof v === "string" && !isPublishedHref(v))).map(([k, v]) => [k, releasedSchema(v)]));
  return value;
}
function Schema({ data }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: { __html: JSON.stringify(releasedSchema({ "@context": "https://schema.org", ...data })).replace(/</g, "\\u003c") } });
}

function generalFAQs(lang) {
  return [{ q: pick(lang, "How do I find a doctor near me?", "কাছাকাছি এলাকার ডাক্তার কীভাবে খুঁজব?"), a: pick(lang, "Select a specialty and location, or search for a doctor or hospital name. Open a profile to compare qualifications and available chamber details.", "বিশেষজ্ঞ বিভাগ ও এলাকা বেছে নিন অথবা ডাক্তার বা হাসপাতালের নাম দিয়ে খুঁজুন। যোগ্যতা ও চেম্বারের তথ্য তুলনা করতে প্রোফাইল খুলুন।") }, { q: pick(lang, "How can I book an appointment?", "অ্যাপয়েন্টমেন্ট কীভাবে নেব?"), a: pick(lang, "Call the appointment number listed for your chosen chamber. Confirm the current visiting schedule, fee and booking process directly with the provider.", "নির্বাচিত চেম্বারের অ্যাপয়েন্টমেন্ট নম্বরে ফোন করুন। রোগী দেখার বর্তমান সময়, ভিজিট ফি ও অ্যাপয়েন্টমেন্টের নিয়ম সরাসরি প্রতিষ্ঠান থেকে জেনে নিন।") }, { q: pick(lang, "Are the listings verified?", "তালিকার তথ্য কি যাচাই করা?"), a: pick(lang, "The directory uses supplied public listing data. It does not independently verify professional registration or availability. Source links and the dataset check date are provided on doctor profiles.", "এই ডিরেক্টরি প্রকাশ্য তালিকার সরবরাহকৃত তথ্য ব্যবহার করে। পেশাগত নিবন্ধন বা অ্যাপয়েন্টমেন্টের প্রাপ্যতা স্বাধীনভাবে যাচাই করা হয় না। প্রোফাইলে তথ্যের উৎস ও ডেটা যাচাইয়ের তারিখ দেওয়া থাকে।") }, { q: pick(lang, "Why are some fees or schedules missing?", "কিছু ভিজিট ফি বা সময়সূচি নেই কেন?"), a: pick(lang, "Some providers do not publish these details. Contact the chamber for current information; missing details are not estimated.", "কিছু প্রতিষ্ঠান এসব তথ্য প্রকাশ করে না। বর্তমান তথ্যের জন্য চেম্বারে যোগাযোগ করুন; অনুপস্থিত তথ্য অনুমান করে দেখানো হয় না।") }];
}
function FAQ({ items, lang }) {
  const faqs = items || generalFAQs(lang);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "content-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: t(lang, "Frequently Asked Questions") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "faq", children: faqs.map((x) => /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { children: x.q }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: x.a })
    ] }, x.q)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Schema, { data: { "@type": "FAQPage", inLanguage: lang === "bn" ? "bn-BD" : "en-BD", mainEntity: faqs.map((x) => ({ "@type": "Question", name: x.q, acceptedAnswer: { "@type": "Answer", text: x.a } })) } })
  ] });
}

class RouteResponse extends Error {
  constructor(status, location) {
    super(status === 404 ? "Not found" : "Redirect");
    this.status = status;
    this.location = location;
  }
}
function notFound() {
  throw new RouteResponse(404);
}
function permanentRedirect(location) {
  throw new RouteResponse(308, location);
}

function getLocale(lang) {
  if (!isLocale(lang)) notFound();
  return lang;
}

const revalidate$4 = 86400;
async function generateMetadata$f({ params }) {
  const lang = getLocale((await params).lang);
  return metadata(pick(lang, "Find Doctors, Hospitals & Specialists in Bangladesh", "বাংলাদেশের ডাক্তার, হাসপাতাল ও বিশেষজ্ঞ খুঁজুন"), pick(lang, "Search Bangladesh doctor profiles by specialty, location and hospital. Compare qualifications, chambers, available schedules and contact information.", "বিশেষজ্ঞ বিভাগ, এলাকা ও হাসপাতাল অনুযায়ী বাংলাদেশের ডাক্তার খুঁজুন। যোগ্যতা, চেম্বার, সময়সূচি ও যোগাযোগের তথ্য তুলনা করুন।"), "/", {}, lang);
}
async function Home({ params }) {
  const lang = getLocale((await params).lang), url = (p) => localizedPath(lang, p), districts = locations$1.filter((l) => l.kind === "district");
  const popular = ["cardiology/dhaka", "nephrology/dhaka", "neurology/rajshahi", "gynecology/chattogram"].filter((k) => specialtyLocation[k]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageDates, { path: "/", lang }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "hero", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container hero-grid", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: t(lang, "Healthcare discovery across Bangladesh") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: t(lang, "Find the Right Doctor Near You") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t(lang, "Search by specialty, location, hospital or clinic. Compare doctor qualifications and chamber details in one place.") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hero-points", children: ["Browse specialties", "Compare chamber details", "Contact providers directly"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "✓ ",
            t(lang, s)
          ] }, s)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hero-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "trust-card", children: [
          [[doctors$1.length, "Doctor profiles"], [hospitals$1.length, "Hospitals & Clinics"], [districts.length, "Districts represented"], [audit.listingRows, "Specialty/chamber listings"]].map(([count, label]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "metric", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: num(lang, Number(count)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t(lang, String(label)) })
          ] }, label)),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "note-card", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: t(lang, "Plan your visit with confidence") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t(lang, "Check the listed qualifications and chambers, then call the provider to confirm appointments and fees.") })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SearchBar, { lang }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "search-examples", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
            t(lang, "Popular searches"),
            ":"
          ] }),
          popular.map((k) => {
            const [s, l] = k.split("/");
            return /* @__PURE__ */ jsxRuntimeExports.jsx(ReleaseLink, { href: url("/doctors/" + k), children: specialtyLocationTitle(lang, getSpecialtyBySlug(s).name, getLocationBySlug(l).name) }, k);
          })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section section-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "section-heading", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: t(lang, "Browse by care") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: t(lang, "Popular Specialties") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t(lang, "Start with the care you need, then narrow by location or hospital.") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ReleaseLink, { className: "btn btn-secondary", href: url("/specialties"), children: t(lang, "View all specialties") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-4", children: specialties$1.slice(0, 12).map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SpecialtyCard, { lang, specialty: s }, s.slug)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "section-heading", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: t(lang, "Browse by place") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: t(lang, "Doctors by Location") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t(lang, "Explore the districts represented in the directory.") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ReleaseLink, { className: "btn btn-secondary", href: url("/locations"), children: t(lang, "All locations") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-4", children: districts.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(LocationCard, { lang, location: l }, l.slug)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "content-card after-list", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: t(lang, "Browse local areas") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "district-cloud", children: locations$1.filter((l) => l.kind === "area").map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(ReleaseLink, { href: url("/doctors/" + l.slug), children: place(lang, l.name) }, l.slug)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section section-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "section-heading", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: t(lang, "Explore profiles") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: t(lang, "Meet Doctors in the Directory") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t(lang, "Read qualifications and choose a chamber that works for you.") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ReleaseLink, { className: "btn btn-secondary", href: url("/doctors"), children: t(lang, "Browse all doctors") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stack", children: doctors$1.slice(0, 3).map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(DoctorCard, { lang, doctor: d }, d.id)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "section-heading", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: t(lang, "Find a provider") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: t(lang, "Hospitals & Diagnostic Centres") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ReleaseLink, { className: "btn btn-secondary", href: url("/hospitals"), children: t(lang, "View hospital directory") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-3", children: hospitals$1.slice(0, 6).map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(HospitalCard, { lang, hospital: h }, h.slug)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section section-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-heading", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: t(lang, "Before your visit") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: t(lang, "Useful Patient Checklists") })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-3", children: [["Compare the practical details", "Review listed qualifications, the exact chamber address, visiting times and the appointment process."], ["Prepare your appointment", "Bring previous reports, your current medication list, and a short list of symptoms and questions."], ["Confirm fees and schedules", "Call the chamber before travelling. Ask about consultation fees, follow-up fees and available appointment slots."]].map(([h, p]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: t(lang, h) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t(lang, p) })
      ] }, h)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FAQ, { lang }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Schema, { data: { "@type": "WebSite", name: siteName, inLanguage: lang === "bn" ? "bn-BD" : "en-BD", url: absolute(url("/")), potentialAction: { "@type": "SearchAction", target: { "@type": "EntryPoint", urlTemplate: absolute(url("/doctors") + "?q={search_term_string}") }, "query-input": "required name=search_term_string" } } })
  ] });
}

const home = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: Home,
  generateMetadata: generateMetadata$f,
  revalidate: revalidate$4
}, Symbol.toStringTag, { value: 'Module' }));

function Breadcrumbs({ items, lang }) {
  const all = [{ label: t(lang, "Home"), href: localizedPath(lang, "/") }, ...items];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "breadcrumb", "aria-label": lang === "bn" ? "পথ নির্দেশনা" : "Breadcrumb", children: all.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
      i > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sep", "aria-hidden": "true", children: " / " }),
      item.href ? /* @__PURE__ */ jsxRuntimeExports.jsx(ReleaseLink, { href: item.href, children: item.label }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-current": "page", children: item.label })
    ] }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Schema, { data: { "@type": "BreadcrumbList", itemListElement: all.map((x, i) => ({ "@type": "ListItem", position: i + 1, name: x.label, ...x.href ? { item: absolute(x.href) } : {} })) } })
  ] });
}

function Filters({ query, context, lang }) {
  const select = (name, label, options, display = (n) => n) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "filter-group field", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "filter-" + name, children: t(lang, label) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { id: "filter-" + name, name, defaultValue: value(query, name), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: pick(lang, "All " + label.toLowerCase(), "সব " + t(lang, label)) }),
      options.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: o.slug, children: display(o.name) }, o.slug))
    ] })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "filter-panel", open: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { children: t(lang, "Refine your search") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { action: context.path, method: "get", className: "filters card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "filter-group field", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "filter-q", children: t(lang, "Search") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "filter-q", name: "q", defaultValue: value(query, "q"), placeholder: t(lang, "Name, hospital or keyword"), maxLength: 200 })
      ] }),
      !context.specialty && select("specialty", "Specialties", specialties$1, (n) => specialty$1(lang, n)),
      /* @__PURE__ */ jsxRuntimeExports.jsx(GeographyFields, { lang, options: locations$1.map(({ slug, name, kind, parent }) => ({ slug, name, kind, parent })), initialDivision: value(query, "division") || (() => {
        const l = locations$1.find((l2) => l2.slug === (value(query, "district") || value(query, "location")));
        return l?.kind === "division" ? l.slug : l?.kind === "area" ? locations$1.find((d) => d.slug === l.parent)?.parent || "" : l?.parent || "";
      })(), initialDistrict: value(query, "district") || value(query, "location"), fixedDivision: context.location?.kind === "division" ? context.location.slug : context.location?.kind === "district" ? context.location.parent || "" : context.location?.kind === "area" ? locations$1.find((l) => l.slug === context.location.parent)?.parent || "" : "", fixedDistrict: context.location?.kind === "district" ? context.location.slug : context.location?.kind === "area" ? context.location.parent || "" : "" }),
      !context.hospital && select("hospital", "Hospitals", hospitals$1, (n) => provider(lang, n)),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "filter-group field", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "filter-exp", children: t(lang, "Minimum experience") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { id: "filter-exp", name: "experience", defaultValue: value(query, "experience"), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: t(lang, "Any experience") }),
          [5, 10, 15].map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: n, children: pick(lang, `${n}+ years (where listed)`, `${num(lang, n)}+ বছর (তথ্য থাকলে)`) }, n))
        ] })
      ] }),
      doctors$1.some((d) => d.gender) && select("gender", "Gender", [{ slug: "male", name: "Male" }, { slug: "female", name: "Female" }], (n) => t(lang, n)),
      doctors$1.some((d) => d.chambers.some((c) => c.fee)) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "filter-group field", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "filter-fee", children: t(lang, "Maximum fee (BDT)") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "filter-fee", type: "number", min: "0", name: "maxFee", defaultValue: value(query, "maxFee") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "filter-group field", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "filter-sort", children: t(lang, "Sort by") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { id: "filter-sort", name: "sort", defaultValue: value(query, "sort"), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: t(lang, "Directory order") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "name", children: t(lang, "Name A–Z") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "experience", children: t(lang, "Listed experience") })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-primary", type: "submit", children: t(lang, "Apply Filters") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ReleaseLink, { className: "reset-link", href: context.path, children: t(lang, "Clear filters") })
    ] })
  ] });
}

function queryUrl(path, q, page) {
  const params = new URLSearchParams();
  for (const k of Object.keys(q)) {
    const v = value(q, k);
    if (k !== "page" && v) params.set(k, v);
  }
  if (page > 1) params.set("page", String(page));
  return path + (params.size ? "?" + params.toString() : "");
}
function Pagination({ path, query, page, pages, lang }) {
  if (pages <= 1) return null;
  const visible = [.../* @__PURE__ */ new Set([1, page - 1, page, page + 1, pages])].filter((n) => n > 0 && n <= pages).sort((a, b) => a - b);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "pagination", "aria-label": t(lang, "Pagination"), children: [
    page > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(ReleaseLink, { href: queryUrl(path, query, page - 1), rel: "prev", "aria-label": t(lang, "Previous page"), children: "‹" }),
    visible.map((n, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
      i > 0 && n - visible[i - 1] > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ellipsis", children: "…" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ReleaseLink, { href: queryUrl(path, query, n), className: page === n ? "active" : "", "aria-current": page === n ? "page" : void 0, "aria-label": pick(lang, "Page ", "পৃষ্ঠা ") + num(lang, n), children: num(lang, n) })
    ] }, n)),
    page < pages && /* @__PURE__ */ jsxRuntimeExports.jsx(ReleaseLink, { href: queryUrl(path, query, page + 1), rel: "next", "aria-label": t(lang, "Next page"), children: "›" })
  ] });
}

function RelatedLinks({ context: c, lang }) {
  const s = c.specialty?.slug, l = c.location?.slug, h = c.hospital?.slug;
  const nearby = getRelatedLocations(s, l), related = getRelatedSpecialties(l, s, h);
  const hs = hospitals$1.filter((x) => (!l || x.locations.includes(l)) && (!s || !!hospitalSpecialty[x.slug + "/" + s])).slice(0, 5);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "link-groups", "aria-label": lang === "bn" ? "সম্পর্কিত ডিরেক্টরি" : "Related directories", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "link-panel", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: t(lang, s ? "This specialty by location" : "Browse locations") }),
      nearby.map((x) => /* @__PURE__ */ jsxRuntimeExports.jsx(ReleaseLink, { href: localizedPath(lang, s ? "/doctors/" + s + "/" + x.slug : "/doctors/" + x.slug), children: s ? specialtyLocationTitle(lang, c.specialty.name, x.name) : place(lang, x.name) }, x.slug))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "link-panel", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: t(lang, "Related specialties") }),
      related.map((x) => /* @__PURE__ */ jsxRuntimeExports.jsx(ReleaseLink, { href: localizedPath(lang, h ? "/hospital/" + h + "/" + x.slug : l ? "/doctors/" + x.slug + "/" + l : "/specialty/" + x.slug), children: l ? specialtyLocationTitle(lang, x.name, c.location.name) : specialty$1(lang, x.name) }, x.slug))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "link-panel", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: t(lang, "Hospital doctor lists") }),
      hs.map((x) => /* @__PURE__ */ jsxRuntimeExports.jsx(ReleaseLink, { href: localizedPath(lang, "/hospital/" + x.slug + (s ? "/" + s : "/doctors")), children: provider(lang, x.name) }, x.slug))
    ] })
  ] });
}

function SEOContent({ context: c, count, lang }) {
  const subject = c.specialty ? specialty$1(lang, c.specialty.name) + pick(lang, " doctors", " বিশেষজ্ঞ ডাক্তার") : t(lang, "Doctors");
  const where = c.hospital ? provider(lang, c.hospital.name) : c.location ? place(lang, c.location.name) : t(lang, "Bangladesh");
  const providers = hospitals$1.filter((h) => (!c.location || h.locations.includes(c.location.slug)) && (!c.specialty || !!hospitalSpecialty[h.slug + "/" + c.specialty.slug])).slice(0, 6);
  const matches = doctorsFromIds(c.ids || []);
  const districts = [...new Set(matches.flatMap((d) => d.chambers.filter((ch) => (!c.hospital || ch.hospitalSlug === c.hospital.slug) && (!c.location || ch.locations.includes(c.location.slug))).map((ch) => ch.name)))];
  const scheduled = matches.filter((d) => d.chambers.some((ch) => (!c.hospital || ch.hospitalSlug === c.hospital.slug) && (!c.location || ch.locations.includes(c.location.slug)) && ch.schedule)).length;
  const faqs = [{ q: pick(lang, `How can I compare ${subject.toLowerCase()} in ${where}?`, `${where}-এ ${subject} কীভাবে তুলনা করব?`), a: pick(lang, `This directory contains ${count} matching doctors. Compare their listed qualifications, clinical roles and chamber locations. The directory order is not a ranking of medical quality.`, `এই তালিকায় ${num(lang, count)} জন ডাক্তার আছেন। তাঁদের তালিকাভুক্ত যোগ্যতা, পদবি ও চেম্বারের অবস্থান তুলনা করুন। তালিকার ক্রম চিকিৎসার মান অনুযায়ী র‍্যাংকিং নয়।`) }, { q: pick(lang, `How do I confirm an appointment in ${where}?`, `${where}-এ অ্যাপয়েন্টমেন্ট কীভাবে নিশ্চিত করব?`), a: pick(lang, "Open a doctor profile and call the appointment phone for the chamber you intend to visit. Check the visiting hours, availability, consultation fee and follow-up policy directly with the provider.", "ডাক্তারের প্রোফাইল খুলে আপনার নির্বাচিত চেম্বারের অ্যাপয়েন্টমেন্ট নম্বরে ফোন করুন। রোগী দেখার সময়, অ্যাপয়েন্টমেন্টের প্রাপ্যতা, ভিজিট ফি ও ফলোআপের নিয়ম সরাসরি জেনে নিন।") }, { q: pick(lang, `Which hospitals list ${subject.toLowerCase()}?`, `কোন হাসপাতালে ${subject} আছেন?`), a: providers.length ? pick(lang, `Matching listings include ${providers.map((h) => h.name).join("; ")}. Open a hospital doctor list to view profiles.`, `সংশ্লিষ্ট তালিকায় রয়েছে ${providers.map((h) => provider(lang, h.name)).join("; ")}। প্রোফাইল দেখতে হাসপাতালের ডাক্তার তালিকা খুলুন।`) : pick(lang, "Open the hospital links on matching profiles to see their listed chambers.", "সংশ্লিষ্ট প্রোফাইলের হাসপাতালের লিংক খুলে চেম্বারের তথ্য দেখুন।") }, { q: pick(lang, "Are consultation fees available?", "ভিজিট ফির তথ্য কি পাওয়া যায়?"), a: pick(lang, "Fees are displayed only when supplied by the source dataset. If no fee is listed, contact the chamber; there is no assumed or estimated price.", "উৎসে ভিজিট ফি থাকলেই তা দেখানো হয়। ফি দেওয়া না থাকলে চেম্বারে যোগাযোগ করুন; অনুমান করা ফি দেখানো হয় না।") }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "content-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: pick(lang, `Finding ${subject.toLowerCase()} in ${where}`, `${where}-এ ${subject} খোঁজার তথ্য`) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: pick(lang, `Browse ${count} doctor profiles from public listings. Use the specialty and location controls to focus on the care and chamber you are looking for.`, `প্রকাশ্য তালিকা থেকে ${num(lang, count)} জন ডাক্তারের প্রোফাইল দেখুন। প্রয়োজনীয় চিকিৎসা ও সুবিধাজনক চেম্বার খুঁজতে বিশেষজ্ঞ বিভাগ ও এলাকার ফিল্টার ব্যবহার করুন।`) }),
      matches.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: pick(lang, "Available chamber information", "চেম্বার ও সময়সূচির তথ্য") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: pick(lang, `These ${num(lang, matches.length)} profiles include listings at ${num(lang, districts.length)} hospitals or clinics. Visiting schedules are supplied for ${num(lang, scheduled)} profiles. Confirm availability directly before travelling.`, `এই ${num(lang, matches.length)}টি প্রোফাইলে ${num(lang, districts.length)}টি হাসপাতাল বা ক্লিনিকের চেম্বারের তথ্য রয়েছে। ${num(lang, scheduled)}টি প্রোফাইলে রোগী দেখার সময় দেওয়া আছে। যাওয়ার আগে সরাসরি যোগাযোগ করে নিশ্চিত করুন।`) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          pick(lang, "Listed doctors include: ", "তালিকাভুক্ত ডাক্তারদের মধ্যে আছেন: "),
          matches.slice(0, 3).map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            i > 0 ? " · " : "",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ReleaseLink, { href: localizedPath(lang, "/doctor/" + d.slug), lang: "en", children: d.name })
          ] }, d.id))
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: t(lang, "What to compare before booking") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { children: ["Listed qualifications and clinical designation relevant to your needs.", "The exact chamber address and visiting schedule.", "Appointment availability, consultation fee and follow-up arrangements confirmed by phone."].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: t(lang, s) }, s)) }),
      providers.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: t(lang, "Hospitals and clinics in this directory") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "district-cloud", children: providers.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(ReleaseLink, { href: localizedPath(lang, "/hospital/" + h.slug + "/doctors"), children: provider(lang, h.name) }, h.slug)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "small", children: t(lang, "Public listings can become outdated. Directory inclusion does not indicate independent credential verification or an endorsement.") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FAQ, { lang, items: faqs })
  ] });
}

function ListingPage({ context: c, query, lang }) {
  const result = searchDoctors(c.ids, { ...query, ...c.specialty ? { specialty: c.specialty.slug } : {}, ...c.location ? { location: c.location.slug } : {}, ...c.hospital ? { hospital: c.hospital.slug } : {} });
  if (result.invalidPage) notFound();
  const baseCount = c.ids?.length ?? searchDoctors(void 0, {}).total;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageDates, { path: c.path, lang }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "page-hero", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumbs, { lang, items: c.breadcrumbs || [{ label: t(lang, "Doctors") }, { label: c.title }] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: t(lang, "Doctor Directory") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: c.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: c.description }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "seo-stats", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "seo-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: num(lang, baseCount) }),
          t(lang, "Doctor profiles")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "seo-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: t(lang, "Chambers & schedules") }),
          t(lang, "Compare available details")
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "page-layout", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Filters, { lang, query, context: c }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "toolbar", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "count", "aria-live": "polite", children: result.total ? pick(lang, `Showing ${(result.page - 1) * pageSize + 1}–${Math.min(result.page * pageSize, result.total)} of ${result.total} doctors`, `মোট ${num(lang, result.total)} জনের মধ্যে ${num(lang, (result.page - 1) * pageSize + 1)}–${num(lang, Math.min(result.page * pageSize, result.total))} জন দেখানো হচ্ছে`) : t(lang, "No matching doctors") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "small", children: pick(lang, `Page ${result.page} of ${result.pages}`, `পৃষ্ঠা ${num(lang, result.page)} / ${num(lang, result.pages)}`) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "stack", children: [
            result.items.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(DoctorCard, { lang, doctor: d, hospitalSlug: c.hospital?.slug, locationSlug: c.location?.slug }, d.id)),
            !result.total && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "content-card empty-state", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: t(lang, "No matching doctors") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t(lang, "Try a different keyword or clear your filters.") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ReleaseLink, { className: "btn btn-primary", href: c.path, children: t(lang, "Reset Search") })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Pagination, { lang, path: c.path, query, page: result.page, pages: result.pages })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "stack after-list", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SEOContent, { lang, context: c, count: baseCount }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(RelatedLinks, { lang, context: c })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Schema, { data: { "@type": "CollectionPage", inLanguage: lang === "bn" ? "bn-BD" : "en-BD", name: c.title, url: absolute(c.path + (result.page > 1 ? "?page=" + result.page : "")), description: c.description, mainEntity: { "@type": "ItemList", numberOfItems: result.total, itemListElement: result.items.map((d, i) => ({ "@type": "ListItem", position: (result.page - 1) * pageSize + i + 1, url: absolute(localizedPath(lang, "/doctor/" + d.slug)), name: d.name })) } } })
  ] });
}

function context$4(lang) {
  return { title: pick(lang, "Doctor List in Bangladesh", "বাংলাদেশের ডাক্তার তালিকা"), description: pick(lang, "Browse doctors across Bangladesh. Filter by specialty, location and hospital to compare qualifications, chambers and appointment information.", "বাংলাদেশের ডাক্তারদের প্রোফাইল দেখুন। যোগ্যতা, চেম্বার ও অ্যাপয়েন্টমেন্টের তথ্য তুলনা করতে বিশেষজ্ঞ বিভাগ, এলাকা ও হাসপাতাল অনুযায়ী খুঁজুন।"), path: localizedPath(lang, "/doctors"), breadcrumbs: [{ label: t(lang, "Doctors") }] };
}
async function generateMetadata$e({ params, searchParams }) {
  const lang = getLocale((await params).lang), c = context$4(lang);
  return metadata(c.title, c.description, c.path, await searchParams, lang);
}
async function Page$e({ params, searchParams }) {
  const lang = getLocale((await params).lang);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ListingPage, { lang, context: context$4(lang), query: await searchParams });
}

const doctors = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: Page$e,
  generateMetadata: generateMetadata$e
}, Symbol.toStringTag, { value: 'Module' }));

function context$3(slug, lang) {
  const l = getLocationBySlug(slug);
  if (!l) notFound();
  const name = place(lang, l.name);
  return { title: pick(lang, `Doctor List in ${name}`, `${name}-এর ডাক্তার তালিকা`), description: pick(lang, `Find ${l.doctorIds.length} doctors with chambers in ${name}. Compare specialties, qualifications, hospitals and appointment contacts.`, `${name}-এ চেম্বার রয়েছে এমন ${num(lang, l.doctorIds.length)} জন ডাক্তার দেখুন। বিশেষজ্ঞ বিভাগ, যোগ্যতা, হাসপাতাল ও অ্যাপয়েন্টমেন্টের তথ্য তুলনা করুন।`), path: localizedPath(lang, "/doctors/" + l.slug), location: l, ids: l.doctorIds, breadcrumbs: [{ label: t(lang, "Doctors"), href: localizedPath(lang, "/doctors") }, { label: name }] };
}
function generateStaticParams$4() {
  return locations$1.filter((l) => l.kind === "district").map((l) => ({ segment: l.slug }));
}
async function generateMetadata$d({ params, searchParams }) {
  const p = await params, lang = getLocale(p.lang), c = context$3(p.segment, lang);
  return metadata(c.title, c.description, c.path, await searchParams, lang);
}
async function Page$d({ params, searchParams }) {
  const p = await params, lang = getLocale(p.lang), normalized = resolveLocationSlug(p.segment);
  if (normalized !== p.segment) permanentRedirect(localizedPath(lang, "/doctors/" + normalized));
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ListingPage, { lang, context: context$3(p.segment, lang), query: await searchParams });
}

const location = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: Page$d,
  generateMetadata: generateMetadata$d,
  generateStaticParams: generateStaticParams$4
}, Symbol.toStringTag, { value: 'Module' }));

function context$2(s, l, lang) {
  const sp = getSpecialtyBySlug(s), loc = getLocationBySlug(l);
  const ids = specialtyLocation[resolveSpecialtySlug(s) + "/" + resolveLocationSlug(l)];
  if (!sp || !loc || !ids?.length) notFound();
  return { title: specialtyLocationTitle(lang, sp.name, loc.name), description: pick(lang, `Compare ${ids.length} ${sp.name.toLowerCase()} doctors with chambers in ${loc.name}. View qualifications, hospitals, schedules and appointment contact details.`, `${place(lang, loc.name)}-এ ${specialty$1(lang, sp.name)} বিভাগের ${num(lang, ids.length)} জন ডাক্তার তুলনা করুন। যোগ্যতা, হাসপাতাল, সময়সূচি ও অ্যাপয়েন্টমেন্টের যোগাযোগের তথ্য দেখুন।`), path: localizedPath(lang, `/doctors/${sp.slug}/${loc.slug}`), ids, specialty: sp, location: loc, breadcrumbs: [{ label: t(lang, "Doctors"), href: localizedPath(lang, "/doctors") }, { label: place(lang, loc.name), href: localizedPath(lang, "/doctors/" + loc.slug) }, { label: specialty$1(lang, sp.name) }] };
}
function generateStaticParams$3() {
  return Object.keys(specialtyLocation).filter((k) => ["cardiology/dhaka", "nephrology/dhaka", "gynecology/chattogram"].includes(k)).map((k) => {
    const [segment, location] = k.split("/");
    return { segment, location };
  });
}
async function generateMetadata$c({ params, searchParams }) {
  const p = await params, lang = getLocale(p.lang), c = context$2(p.segment, p.location, lang);
  return metadata(c.title, c.description, c.path, await searchParams, lang);
}
async function Page$c({ params, searchParams }) {
  const p = await params, lang = getLocale(p.lang), c = context$2(p.segment, p.location, lang);
  if (p.segment !== c.specialty.slug || p.location !== c.location.slug) permanentRedirect(c.path);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ListingPage, { lang, context: c, query: await searchParams });
}

const combination = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: Page$c,
  generateMetadata: generateMetadata$c,
  generateStaticParams: generateStaticParams$3
}, Symbol.toStringTag, { value: 'Module' }));

const revalidate$3 = 86400;
const dynamicParams = true;
function generateStaticParams$2() {
  return doctors$1.slice(0, 12).map((d) => ({ slug: d.slug }));
}
function get$1(slug) {
  const d = getDoctorBySlug(slug);
  if (!d) notFound();
  return d;
}
async function generateMetadata$b({ params }) {
  const p = await params, lang = getLocale(p.lang), d = get$1(p.slug), district = d.locationSlugs.map(getLocationBySlug).find((l) => l?.kind === "district"), city = district ? place(lang, district.name) : pick(lang, "Bangladesh", "বাংলাদেশ"), s = d.specialtySlugs.map((k) => specialty$1(lang, getSpecialtyBySlug(k)?.name || "")).filter(Boolean).slice(0, 3).join(", ");
  return metadata(d.name + " — " + (s || pick(lang, "Doctor Profile", "ডাক্তারের প্রোফাইল")) + " — " + city, pick(lang, `View ${d.name}'s qualifications, ${city} chamber addresses, ${d.chambers.length} chambers, schedules and appointment contact information.`, `${d.name}-এর যোগ্যতা, ${city}-এর চেম্বারের ঠিকানা, ${num(lang, d.chambers.length)}টি চেম্বার, সময়সূচি ও অ্যাপয়েন্টমেন্টের যোগাযোগের তথ্য দেখুন।`), "/doctor/" + d.slug, {}, lang);
}
async function Page$b({ params }) {
  const p = await params, lang = getLocale(p.lang), d = get$1(p.slug), district = d.locationSlugs.map(getLocationBySlug).find((l) => l?.kind === "district"), related = getRelatedDoctors(d), first = d.chambers[0], url = (path) => localizedPath(lang, path);
  const faqs = [{ q: pick(lang, `Where does ${d.name} see patients?`, `${d.name} কোথায় রোগী দেখেন?`), a: d.chambers.map((c) => provider(lang, c.name) + (c.address ? " — " + address(lang, c.address) : "")).join("; ") || pick(lang, "A chamber address is not available in the supplied listing.", "মূল তালিকায় চেম্বারের ঠিকানা পাওয়া যায়নি।") }, { q: pick(lang, `How can I book an appointment with ${d.name}?`, `${d.name}-এর অ্যাপয়েন্টমেন্ট কীভাবে নেব?`), a: first?.phone ? pick(lang, `Call the listed chamber number, ${first.phone}, and confirm the current schedule and appointment process. Other chamber contacts are shown above when available.`, `তালিকাভুক্ত চেম্বার নম্বর ${first.phone}-এ কল করে বর্তমান সময়সূচি ও অ্যাপয়েন্টমেন্টের নিয়ম নিশ্চিত করুন। অন্যান্য চেম্বারের যোগাযোগের তথ্য থাকলে উপরে দেখানো হয়েছে।`) : pick(lang, "No appointment phone is supplied. Confirm contact details directly with the listed provider.", "অ্যাপয়েন্টমেন্টের ফোন নম্বর দেওয়া নেই। তালিকাভুক্ত প্রতিষ্ঠান থেকে সরাসরি যোগাযোগের তথ্য জেনে নিন।") }, { q: pick(lang, `What are ${d.name}'s listed qualifications?`, `${d.name}-এর তালিকাভুক্ত যোগ্যতা কী?`), a: d.qualifications ? medicalText(lang, d.qualifications) : pick(lang, "Qualifications are not available in this dataset. Confirm them directly with the provider.", "এই তালিকায় যোগ্যতার তথ্য নেই। সরাসরি প্রতিষ্ঠান থেকে নিশ্চিত করুন।") }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageDates, { path: "/doctor/" + d.slug, lang }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "profile-hero", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumbs, { lang, items: [{ label: t(lang, "Doctors"), href: url("/doctors") }, ...district ? [{ label: place(lang, district.name), href: url("/doctors/" + district.slug) }] : [], { label: d.name }] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "profile-head", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { doctor: d, large: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "profile-info", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { lang: "en", children: d.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "specialty", children: d.specialtySlugs.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(ReleaseLink, { className: "pill brand", href: url("/specialty/" + s), children: specialty$1(lang, getSpecialtyBySlug(s)?.name || "") }, s)) }),
          d.qualifications && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "qualifications", children: medicalText(lang, d.qualifications) }),
          d.designation && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "designation", children: institution(lang, d.designation) }),
          d.institute && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: institution(lang, d.institute) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DoctorEngagement, { id: d.id, slug: d.slug, name: d.name, lang }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "info-list", children: [
            d.experience !== null && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: pick(lang, `${d.experience} years of listed experience`, `${num(lang, d.experience)} বছরের তালিকাভুক্ত অভিজ্ঞতা`) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: pick(lang, `${d.chambers.length} chambers`, `${num(lang, d.chambers.length)}টি চেম্বার`) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "profile-book", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SaveDoctor, { id: d.id, lang }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: t(lang, "Plan Your Appointment") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t(lang, "Confirm schedule and fee with the chamber.") }),
          first?.phone && /* @__PURE__ */ jsxRuntimeExports.jsx(ReleaseLink, { className: "btn btn-primary", href: phoneHref(first.phone), children: t(lang, "Call Chamber") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ReleaseLink, { className: "btn btn-secondary", href: "#chambers", children: t(lang, "View Chambers") })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container section profile-layout", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "stack", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "content-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: pick(lang, "About " + d.name, d.name + " সম্পর্কে") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: pick(lang, `${d.name} is listed under ${d.specialtySlugs.map((s) => getSpecialtyBySlug(s)?.name).filter(Boolean).join(", ")}${district ? " in " + district.name : ""}. This profile brings together listed qualifications, chamber addresses and appointment contacts.`, `${d.name}-এর ${d.specialtySlugs.map((s) => specialty$1(lang, getSpecialtyBySlug(s)?.name || "")).filter(Boolean).join(", ")} বিভাগের প্রোফাইলে${district ? " " + place(lang, district.name) + "-এর" : ""} চেম্বার, যোগ্যতা ও অ্যাপয়েন্টমেন্টের তথ্য একসঙ্গে দেখুন।`) }),
          d.designation && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            pick(lang, "Listed designation: ", "তালিকাভুক্ত পদবি: "),
            institution(lang, d.designation)
          ] }),
          d.qualifications && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            pick(lang, "Listed qualifications: ", "তালিকাভুক্ত যোগ্যতা: "),
            medicalText(lang, d.qualifications)
          ] }),
          d.rawSpecialties.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: t(lang, "Specialty Details from the Listings") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: d.rawSpecialties.map((s) => medicalText(lang, s)).join(" · ") })
          ] }),
          d.registration && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
              t(lang, "Listed BMDC registration"),
              ": "
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { lang: "en", children: d.registration })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "small", children: t(lang, "Information reflects source listings. Professional registration and availability are not independently verified by this directory.") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "chambers", className: "stack", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: t(lang, "Chambers & Appointment Details") }),
          d.chambers.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(ChamberCard, { lang, chamber: c }, c.id))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FAQ, { lang, items: faqs }),
        related.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: t(lang, "Related Doctor Profiles") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stack", children: related.map((x) => /* @__PURE__ */ jsxRuntimeExports.jsx(DoctorCard, { lang, doctor: x }, x.id)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "content-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: t(lang, "Sources & Data Notes") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            pick(lang, "Source observation date: ", "উৎসে তথ্য পর্যবেক্ষণের তারিখ: "),
            d.lastChecked ? new Intl.DateTimeFormat(lang === "bn" ? "bn-BD" : "en-BD", { dateStyle: "long", timeZone: "UTC" }).format(/* @__PURE__ */ new Date(d.lastChecked + "T00:00:00Z")) : "",
            "। ",
            t(lang, "This date comes from the supplied files.")
          ] }),
          d.flags.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "notice-inline", children: t(lang, "One or more source records carry data quality notes. Confirm identity, schedule and other details directly with the provider.") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "source-list", children: d.sources.map((u) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ReleaseLink, { href: u, target: "_blank", rel: "noopener noreferrer", lang: "en", children: u }) }, u)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "profile-sidebar", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "side-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: t(lang, "Browse Nearby Doctors") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stack", children: d.locationSlugs.map((s) => {
            const l = getLocationBySlug(s);
            return l ? /* @__PURE__ */ jsxRuntimeExports.jsx(ReleaseLink, { href: url("/doctors/" + s), children: pick(lang, l.name + " doctor list", place(lang, l.name) + "-এর ডাক্তার তালিকা") }, s) : null;
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "side-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: t(lang, "Specialty Directories") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stack", children: d.specialtySlugs.slice(0, 6).map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(ReleaseLink, { href: url(district && specialtyLocation[s + "/" + district.slug] ? "/doctors/" + s + "/" + district.slug : "/specialty/" + s), children: district && specialtyLocation[s + "/" + district.slug] ? specialtyLocationTitle(lang, getSpecialtyBySlug(s).name, district.name) : specialty$1(lang, getSpecialtyBySlug(s)?.name || "") }, s)) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Schema, { data: { "@type": "Person", name: d.name, url: absolute(url("/doctor/" + d.slug)), ...d.designation ? { jobTitle: institution(lang, d.designation) } : {}, ...d.qualifications ? { description: medicalText(lang, d.qualifications) } : {}, ...d.image ? { image: absolute(d.image) } : {}, worksFor: d.chambers.map((c) => ({ "@type": "MedicalOrganization", name: provider(lang, c.name), url: absolute(url("/hospital/" + c.hospitalSlug)) })) } }),
    d.chambers.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(Schema, { data: { "@type": "Physician", name: d.name + " — " + provider(lang, c.name), url: absolute(url("/doctor/" + d.slug)), ...c.address ? { address: { "@type": "PostalAddress", streetAddress: address(lang, c.address), addressCountry: "BD" } } : {}, ...c.phone ? { telephone: c.phone } : {} } }, c.id))
  ] });
}

const doctor = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: Page$b,
  dynamicParams,
  generateMetadata: generateMetadata$b,
  generateStaticParams: generateStaticParams$2,
  revalidate: revalidate$3
}, Symbol.toStringTag, { value: 'Module' }));

const revalidate$2 = 86400;
async function generateMetadata$a({ params }) {
  const lang = getLocale((await params).lang);
  return metadata(pick(lang, "Medical Specialties in Bangladesh", "বাংলাদেশের চিকিৎসার বিশেষজ্ঞ বিভাগ"), pick(lang, "Browse medical specialties and compare doctors, locations and chambers.", "চিকিৎসার বিশেষজ্ঞ বিভাগ বেছে নিয়ে ডাক্তার, এলাকা ও চেম্বারের তথ্য তুলনা করুন।"), "/specialties", {}, lang);
}
async function Page$a({ params }) {
  const lang = getLocale((await params).lang);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageDates, { path: "/specialties", lang }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "page-hero", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumbs, { lang, items: [{ label: t(lang, "Specialties") }] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: t(lang, "Find Doctors by Specialty") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: pick(lang, `${specialties$1.length} specialty categories represented in public doctor listings.`, `প্রকাশ্য ডাক্তার তালিকা থেকে ${num(lang, specialties$1.length)}টি বিশেষজ্ঞ বিভাগ।`) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container grid grid-4", children: specialties$1.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SpecialtyCard, { lang, specialty: s }, s.slug)) }) })
  ] });
}

const specialties = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: Page$a,
  generateMetadata: generateMetadata$a,
  revalidate: revalidate$2
}, Symbol.toStringTag, { value: 'Module' }));

function context$1(slug, lang) {
  const s = getSpecialtyBySlug(slug);
  if (!s) notFound();
  return { title: pick(lang, `${s.name} Doctors in Bangladesh`, `বাংলাদেশের ${specialty$1(lang, s.name)} বিশেষজ্ঞ ডাক্তার`), description: pick(lang, `Browse ${s.doctorIds.length} doctors listed under ${s.name} in Bangladesh. Compare qualifications, locations, hospital chambers and available appointment details.`, `বাংলাদেশের ${specialty$1(lang, s.name)} বিভাগের ${num(lang, s.doctorIds.length)} জন ডাক্তার দেখুন। যোগ্যতা, এলাকা, হাসপাতালের চেম্বার ও অ্যাপয়েন্টমেন্টের তথ্য তুলনা করুন।`), path: localizedPath(lang, "/specialty/" + s.slug), specialty: s, ids: s.doctorIds, breadcrumbs: [{ label: t(lang, "Specialties"), href: localizedPath(lang, "/specialties") }, { label: specialty$1(lang, s.name) }] };
}
function generateStaticParams$1() {
  return specialties$1.slice(0, 8).map((s) => ({ slug: s.slug }));
}
async function generateMetadata$9({ params, searchParams }) {
  const p = await params, lang = getLocale(p.lang), c = context$1(p.slug, lang);
  return metadata(c.title, c.description, c.path, await searchParams, lang);
}
async function Page$9({ params, searchParams }) {
  const p = await params, lang = getLocale(p.lang), c = context$1(p.slug, lang);
  if (p.slug !== c.specialty.slug) permanentRedirect(c.path);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ListingPage, { lang, context: c, query: await searchParams });
}

const specialty = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: Page$9,
  generateMetadata: generateMetadata$9,
  generateStaticParams: generateStaticParams$1
}, Symbol.toStringTag, { value: 'Module' }));

async function generateMetadata$8({ params, searchParams }) {
  const lang = getLocale((await params).lang);
  return metadata(pick(lang, "Hospitals & Clinics in Bangladesh", "বাংলাদেশের হাসপাতাল ও ক্লিনিক"), pick(lang, "Browse hospitals, clinics and diagnostic centres and their doctor lists.", "হাসপাতাল, ক্লিনিক ও ডায়াগনস্টিক সেন্টারের ডাক্তার তালিকা ও যোগাযোগের তথ্য দেখুন।"), "/hospitals", await searchParams, lang);
}
async function Page$8({ params, searchParams }) {
  const lang = getLocale((await params).lang), q = await searchParams, term = value(q, "q").toLowerCase(), location = getLocationBySlug(value(q, "location")), sp = getSpecialtyBySlug(value(q, "specialty"));
  const list = hospitals$1.filter((h) => (h.name + " " + h.addresses.join(" ") + " " + provider("bn", h.name) + " " + h.addresses.map((a) => address("bn", a)).join(" ")).toLowerCase().includes(term) && (!value(q, "location") || !!location && h.locations.includes(location.slug)) && (!value(q, "specialty") || !!sp && !!hospitalSpecialty[h.slug + "/" + sp.slug]));
  const pages = Math.max(1, Math.ceil(list.length / pageSize)), page = Number(value(q, "page") || 1);
  if (!Number.isSafeInteger(page) || page < 1 || page > pages) notFound();
  const path = localizedPath(lang, "/hospitals");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageDates, { path: "/hospitals", lang }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "page-hero", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumbs, { lang, items: [{ label: t(lang, "Hospitals") }] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: pick(lang, "Hospitals & Clinics in Bangladesh", "বাংলাদেশের হাসপাতাল ও ক্লিনিক") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: pick(lang, `Browse ${hospitals$1.length} listed providers and their doctor directories.`, `${num(lang, hospitals$1.length)}টি তালিকাভুক্ত প্রতিষ্ঠান ও তাদের ডাক্তার তালিকা দেখুন।`) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { action: path, className: "hospital-search", method: "get", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "field", children: [
          t(lang, "Hospital or address"),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name: "q", defaultValue: value(q, "q"), placeholder: t(lang, "Search hospitals"), maxLength: 200 })
        ] }),
        value(q, "location") && /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "hidden", name: "location", value: value(q, "location") }),
        value(q, "specialty") && /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "hidden", name: "specialty", value: value(q, "specialty") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-primary", children: t(lang, "Search") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ReleaseLink, { className: "btn btn-secondary", href: path, children: t(lang, "Reset") })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: pick(lang, `${list.length} matching providers`, `${num(lang, list.length)}টি প্রতিষ্ঠান পাওয়া গেছে`) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-3", children: [
        list.slice((page - 1) * pageSize, page * pageSize).map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(HospitalCard, { lang, hospital: h }, h.slug)),
        !list.length && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "content-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: t(lang, "No matching hospitals") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t(lang, "Try a different search term.") })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Pagination, { lang, path, query: q, page, pages })
    ] }) })
  ] });
}

const hospitals = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: Page$8,
  generateMetadata: generateMetadata$8
}, Symbol.toStringTag, { value: 'Module' }));

const revalidate$1 = 86400;
function generateStaticParams() {
  return hospitals$1.slice(0, 6).map((h) => ({ slug: h.slug }));
}
function get(slug) {
  const h = getHospitalBySlug(slug);
  if (!h) notFound();
  return h;
}
async function generateMetadata$7({ params }) {
  const p = await params, lang = getLocale(p.lang), h = get(p.slug), name = provider(lang, h.name);
  return metadata(pick(lang, name + " — Doctors & Chamber Information", name + " — ডাক্তার ও চেম্বারের তথ্য"), pick(lang, `Explore ${h.doctorIds.length} doctors listed at ${h.name}. Browse specialties, addresses, contacts and chamber details.`, `${name}-এ তালিকাভুক্ত ${num(lang, h.doctorIds.length)} জন ডাক্তার দেখুন। বিশেষজ্ঞ বিভাগ, ঠিকানা, যোগাযোগ ও চেম্বারের তথ্য জানুন।`), "/hospital/" + h.slug, {}, lang);
}
async function Page$7({ params }) {
  const p = await params, lang = getLocale(p.lang), h = get(p.slug), district = getLocationBySlug(h.district), name = provider(lang, h.name), url = (path) => localizedPath(lang, path);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageDates, { path: "/hospital/" + h.slug, lang }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "profile-hero", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumbs, { lang, items: [{ label: t(lang, "Hospitals"), href: url("/hospitals") }, ...district ? [{ label: place(lang, district.name), href: url("/hospitals") + "?location=" + district.slug }] : [], { label: name }] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hospital-header", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hospital-logo", "aria-hidden": "true", children: h.name.split(/\s+/).slice(0, 2).map((x) => x[0]).join("") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pill brand", children: t(lang, h.type) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: name }),
          h.addresses.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: address(lang, a) }, a)),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "info-list", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: pick(lang, `${h.doctorIds.length} listed doctors`, `${num(lang, h.doctorIds.length)} জন তালিকাভুক্ত ডাক্তার`) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: pick(lang, `${h.specialtySlugs.length} specialty categories`, `${num(lang, h.specialtySlugs.length)}টি বিশেষজ্ঞ বিভাগ`) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ReleaseLink, { className: "btn btn-primary", href: url("/hospital/" + h.slug + "/doctors"), children: t(lang, "View All Doctors") })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container section stack", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "content-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: t(lang, "Appointment Information") }),
        h.phones.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "district-cloud", children: h.phones.map((p2) => /* @__PURE__ */ jsxRuntimeExports.jsxs(ReleaseLink, { href: phoneHref(p2), children: [
          t(lang, "Call"),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { lang: "en", children: p2 })
        ] }, p2)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t(lang, "Appointment contact details are not listed for this provider.") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t(lang, "Confirm the doctor’s chamber, schedule and consultation fee directly with the provider before visiting.") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "content-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: pick(lang, "Doctors by Specialty at " + name, name + "-এর বিশেষজ্ঞ বিভাগ অনুযায়ী ডাক্তার") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "district-cloud", children: h.specialtySlugs.map((s) => {
          const sp = getSpecialtyBySlug(s);
          return sp && hospitalSpecialty[h.slug + "/" + s] ? /* @__PURE__ */ jsxRuntimeExports.jsxs(ReleaseLink, { href: url("/hospital/" + h.slug + "/" + s), children: [
            specialty$1(lang, sp.name),
            " (",
            num(lang, hospitalSpecialty[h.slug + "/" + s].length),
            ")"
          ] }, s) : null;
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "section-heading", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: t(lang, "Doctor Profiles") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ReleaseLink, { className: "btn btn-secondary", href: url("/hospital/" + h.slug + "/doctors"), children: t(lang, "Full Doctor List") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stack", children: doctorsFromIds(h.doctorIds).slice(0, 4).map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(DoctorCard, { lang, doctor: d, hospitalSlug: h.slug }, d.id)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FAQ, { lang }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "content-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: t(lang, "Listing Sources") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "source-list", children: h.sources.map((u) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ReleaseLink, { href: u, target: "_blank", rel: "noopener noreferrer", lang: "en", children: u }) }, u)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Schema, { data: { "@type": h.type.toLowerCase().includes("hospital") ? "Hospital" : "MedicalOrganization", name, alternateName: h.name, url: absolute(url("/hospital/" + h.slug)), ...h.addresses[0] ? { address: { "@type": "PostalAddress", streetAddress: address(lang, h.addresses[0]), addressCountry: "BD" } } : {}, ...h.phones[0] ? { telephone: h.phones[0] } : {} } })
  ] });
}

const hospital = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: Page$7,
  generateMetadata: generateMetadata$7,
  generateStaticParams,
  revalidate: revalidate$1
}, Symbol.toStringTag, { value: 'Module' }));

const dynamic = "force-dynamic";
function context(slug, section, lang) {
  const h = getHospitalBySlug(slug);
  if (!h) notFound();
  const s = section === "doctors" ? void 0 : getSpecialtyBySlug(section);
  const ids = section === "doctors" ? h.doctorIds : s ? hospitalSpecialty[h.slug + "/" + s.slug] : void 0;
  if (!ids?.length) notFound();
  const name = provider(lang, h.name);
  return { title: section === "doctors" ? pick(lang, `${name} Doctor List`, `${name}-এর ডাক্তার তালিকা`) : pick(lang, `${s.name} Doctors at ${name}`, `${name}-এ ${specialty$1(lang, s.name)} বিশেষজ্ঞ ডাক্তার`), description: pick(lang, `Compare ${ids.length} ${s ? s.name.toLowerCase() + " " : ""}doctors listed at ${h.name}. View qualifications, chambers, schedules and appointment contacts.`, `${name}-এ তালিকাভুক্ত ${num(lang, ids.length)} জন ${s ? specialty$1(lang, s.name) + " বিভাগের " : ""}ডাক্তার দেখুন। যোগ্যতা, চেম্বার, সময়সূচি ও অ্যাপয়েন্টমেন্টের তথ্য তুলনা করুন।`), path: localizedPath(lang, "/hospital/" + h.slug + "/" + (s ? s.slug : "doctors")), hospital: h, specialty: s, ids, breadcrumbs: [{ label: t(lang, "Hospitals"), href: localizedPath(lang, "/hospitals") }, { label: name, href: localizedPath(lang, "/hospital/" + h.slug) }, { label: s ? specialty$1(lang, s.name) : t(lang, "Full Doctor List") }] };
}
async function generateMetadata$6({ params, searchParams }) {
  const p = await params, lang = getLocale(p.lang), c = context(p.slug, p.section, lang);
  return metadata(c.title, c.description, c.path, await searchParams, lang);
}
async function Page$6({ params, searchParams }) {
  const p = await params, lang = getLocale(p.lang), c = context(p.slug, p.section, lang);
  if (c.specialty && p.section !== c.specialty.slug) permanentRedirect(c.path);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ListingPage, { lang, context: c, query: await searchParams });
}

const section = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: Page$6,
  dynamic,
  generateMetadata: generateMetadata$6
}, Symbol.toStringTag, { value: 'Module' }));

const revalidate = 86400;
async function generateMetadata$5({ params }) {
  const lang = getLocale((await params).lang);
  return metadata(pick(lang, "Doctors by District, Division and Area", "জেলা, বিভাগ ও এলাকা অনুযায়ী ডাক্তার"), pick(lang, "Explore Bangladesh doctor listings by district, division and local area.", "জেলা, বিভাগ ও স্থানীয় এলাকা অনুযায়ী বাংলাদেশের ডাক্তার তালিকা দেখুন।"), "/locations", {}, lang);
}
async function Page$5({ params }) {
  const lang = getLocale((await params).lang);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageDates, { path: "/locations", lang }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "page-hero", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumbs, { lang, items: [{ label: t(lang, "Locations") }] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: t(lang, "Find Doctors by Location") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t(lang, "Browse locations represented in the current dataset. Counts reflect distinct doctor profiles.") })
    ] }) }),
    ["district", "division", "area"].map((kind) => /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-heading", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: t(lang, kind === "district" ? "Districts" : kind === "division" ? "Divisions" : "Local Areas") }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-4", children: locations$1.filter((l) => l.kind === kind).map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(LocationCard, { lang, location: l }, l.slug)) })
    ] }) }, kind))
  ] });
}

const locations = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: Page$5,
  generateMetadata: generateMetadata$5,
  revalidate
}, Symbol.toStringTag, { value: 'Module' }));

function MyDoctors$1({ lang }) {
  const [docs, setDocs] = reactExports.useState([]), [loading, setLoading] = reactExports.useState(true), [error, setError] = reactExports.useState(""), [retry, setRetry] = reactExports.useState(0);
  reactExports.useEffect(() => {
    let alive = true;
    let controller;
    async function sync() {
      controller?.abort();
      controller = new AbortController();
      const signal = controller.signal;
      try {
        const items = readSavedDoctors();
        const clean = JSON.stringify(items);
        if (localStorage.getItem(savedDoctorsKey) !== clean) localStorage.setItem(savedDoctorsKey, clean);
        setLoading(true);
        setError("");
        if (!items.length) {
          setDocs([]);
          setLoading(false);
          return;
        }
        const response = await fetch("/api/my-doc", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(items.map((x) => x.id)), signal });
        if (!response.ok) throw new Error();
        const data = await response.json();
        if (alive && !signal.aborted) {
          const byId = new Map(data.map((d) => [d.id, d]));
          setDocs(items.flatMap((x) => byId.has(x.id) ? [byId.get(x.id)] : []));
          setLoading(false);
        }
      } catch {
        if (alive && !signal.aborted) {
          setError(lang === "en" ? "Could not load your saved doctors. Allow browser storage and try again." : "তালিকা লোড হয়নি। ব্রাউজারের স্টোরেজ চালু রেখে আবার চেষ্টা করুন।");
          setLoading(false);
        }
      }
    }
    const storage = (e) => {
      if (e.key === savedDoctorsKey || e.key === null) void sync();
    };
    void sync();
    window.addEventListener(savedDoctorsEvent, sync);
    window.addEventListener("storage", storage);
    window.addEventListener("focus", sync);
    const timer = window.setInterval(sync, 6e4);
    return () => {
      alive = false;
      controller?.abort();
      window.clearInterval(timer);
      window.removeEventListener(savedDoctorsEvent, sync);
      window.removeEventListener("storage", storage);
      window.removeEventListener("focus", sync);
    };
  }, [lang, retry]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-live": "polite", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: lang === "en" ? "Loading your doctors…" : "আপনার ডাক্তার তালিকা লোড হচ্ছে…" }) : error ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { role: "alert", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: error }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-secondary", onClick: () => setRetry((x) => x + 1), children: lang === "en" ? "Try again" : "আবার চেষ্টা করুন" })
  ] }) : docs.length ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "small", children: lang === "en" ? `${docs.length} saved doctors` : `${new Intl.NumberFormat("bn-BD").format(docs.length)} জন সেভ করা ডাক্তার` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stack", children: docs.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "card doctor-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DoctorAvatar$1, { name: d.name, image: d.image }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "doctor-main", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: localizedPath(lang, "/doctor/" + d.slug), children: d.name }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "specialty", children: d.specialties.slice(0, 3).join(" · ") }),
        d.qualifications && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "qualifications", children: d.qualifications })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "doctor-actions", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SaveDoctor$1, { id: d.id, lang }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "btn btn-secondary", href: localizedPath(lang, "/doctor/" + d.slug), children: lang === "en" ? "View Profile" : "প্রোফাইল দেখুন" }),
        d.phone && /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "btn btn-primary", href: "tel:" + d.phone.split(/[,/;|]/)[0].replace(/[^+\d]/g, ""), children: lang === "en" ? "Call Chamber" : "চেম্বারে কল করুন" })
      ] })
    ] }, d.id)) })
  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "content-card empty-state", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: lang === "en" ? "No saved doctors yet" : "এখনো কোনো ডাক্তার সেভ করেননি" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: lang === "en" ? "Use Save Doc on a doctor card to build your personal list." : "ডাক্তার কার্ডের সেভ বাটন দিয়ে নিজের তালিকা তৈরি করুন।" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "btn btn-primary", href: localizedPath(lang, "/doctors"), children: lang === "en" ? "Browse Doctors" : "ডাক্তার খুঁজুন" })
  ] }) });
}

const MyDoctors = island("MyDoctors", MyDoctors$1);

async function generateMetadata$4({ params }) {
  const lang = getLocale((await params).lang);
  return { title: lang === "en" ? "Saved Docs" : "আমার ডাক্তার", robots: { index: false, follow: true } };
}
async function Page$4({ params }) {
  const lang = getLocale((await params).lang);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "page-hero", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: lang === "en" ? "Saved Docs" : "আমার ডাক্তার" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: lang === "en" ? "Your personal doctor list. Saved on this browser for 365 days from each save. Clearing browser data removes this list; it does not sync to other devices." : "আপনার ব্যক্তিগত ডাক্তার তালিকা। সেভ করার পর ৩৬৫ দিন এই ব্রাউজারে থাকবে। ব্রাউজারের ডেটা মুছলে তালিকা মুছে যাবে; অন্য ডিভাইসে তালিকা পাওয়া যাবে না।" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MyDoctors, { lang }) }) })
  ] });
}

const saved = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: Page$4,
  generateMetadata: generateMetadata$4
}, Symbol.toStringTag, { value: 'Module' }));

const contactEmail = "ads.taslimul@gmail.com";
const contactPhone = "01521405639";
const whatsappUrl = "https://wa.me/8801521405639";
function essentialContent(key, lang) {
  const choose = (en, bn) => pick(lang, en, bn);
  const content = {
    "privacy-policy": {
      title: choose("Privacy Policy", "গোপনীয়তা নীতি"),
      description: choose("How Doclist Bd handles saved doctors, browser preferences, engagement information and contact messages.", "Doclist Bd-তে সেভ করা ডাক্তার, ব্রাউজার পছন্দ, likes/views ও যোগাযোগের তথ্য কীভাবে ব্যবহৃত হয়।"),
      sections: [
        { title: choose("Saved doctors and preferences", "সেভ করা ডাক্তার ও আপনার পছন্দ"), paragraphs: [choose("Your Saved Docs list stores doctor IDs and expiry dates in this browser. Each saved entry expires 365 days after saving. Theme and language preferences are also stored in your browser. You can remove saved doctors individually or clear browser data. The list does not automatically sync to another device or browser.", "“আমার ডাক্তার” তালিকায় ডাক্তারের ID ও মেয়াদ শেষের তারিখ এই ব্রাউজারে সংরক্ষিত থাকে। প্রতিটি এন্ট্রি সেভ করার ৩৬৫ দিন পর মেয়াদ শেষ হয়। থিম ও ভাষার পছন্দও ব্রাউজারে থাকে। তালিকা থেকে ডাক্তার সরাতে পারেন বা ব্রাউজারের ডেটা মুছতে পারেন। তালিকা অন্য ডিভাইস বা ব্রাউজারে স্বয়ংক্রিয়ভাবে যায় না।")] },
        { title: choose("Likes, views and cookies", "Likes, views ও cookie"), paragraphs: [choose("Doctor engagement features use a randomly generated visitor cookie, with a lifetime of up to 365 days, to recognise a browser. Doctor likes and view events may be stored on the server using this identifier and event IDs. These features do not ask you to create an account. Hosting services may process technical request information to deliver the website.", "ডাক্তারদের likes ও views-এর জন্য একটি random visitor cookie ব্যবহার করে ব্রাউজার চেনা হয়; cookie-টির মেয়াদ সর্বোচ্চ ৩৬৫ দিন। এই identifier ও event ID ব্যবহার করে সার্ভারে likes ও view event রাখা হতে পারে। এসব সুবিধার জন্য অ্যাকাউন্ট খুলতে হয় না। ওয়েবসাইট চালাতে hosting service প্রযুক্তিগত request information প্রক্রিয়াকরণ করতে পারে।")] },
        { title: choose("Messages and external services", "বার্তা ও বাইরের সেবা"), paragraphs: [choose("If you contact us by email or WhatsApp, your contact details and the information you send are used to respond to your enquiry. Email, WhatsApp and other external links are handled by their respective providers under their own privacy policies.", "ইমেইল বা WhatsApp-এ যোগাযোগ করলে আপনার দেওয়া যোগাযোগের তথ্য ও বার্তা আপনার অনুরোধের উত্তর দিতে ব্যবহার করা হয়। ইমেইল, WhatsApp ও অন্যান্য বাইরের লিংকের সেবা সংশ্লিষ্ট provider-এর নিজস্ব গোপনীয়তা নীতির অধীনে পরিচালিত হয়।")] },
        { title: choose("Questions or corrections", "প্রশ্ন বা সংশোধন"), paragraphs: [choose("Contact us using the email or WhatsApp details on our Contact page to ask about your information or request a directory correction. This policy was updated on 17 October 2026.", "আপনার তথ্য নিয়ে প্রশ্ন বা directory-তে সংশোধনের অনুরোধ করতে Contact পেজের ইমেইল বা WhatsApp ব্যবহার করুন। এই নীতি ১৭ অক্টোবর ২০২৬-এ হালনাগাদ করা হয়েছে।")] }
      ]
    },
    "terms-of-use": {
      title: choose("Terms of Use", "ব্যবহারের শর্তাবলি"),
      description: choose("Terms for using the Doclist Bd doctor directory and its personal saved-doctor features.", "Doclist Bd-এর ডাক্তার directory ও ব্যক্তিগত সেভ করা তালিকা ব্যবহারের শর্তাবলি।"),
      sections: [
        { title: choose("Using the directory", "Directory ব্যবহার"), paragraphs: [choose("Doclist Bd helps you find publicly listed doctor, hospital and chamber information. Directory inclusion is not an endorsement or independent verification of professional credentials. Listing information is for discovery and does not replace advice from a qualified healthcare professional or emergency services.", "Doclist Bd প্রকাশ্যে তালিকাভুক্ত ডাক্তার, হাসপাতাল ও চেম্বারের তথ্য খুঁজতে সাহায্য করে। তালিকায় থাকা কোনো অনুমোদন বা পেশাগত যোগ্যতার স্বাধীন যাচাই বোঝায় না। এই তথ্য খোঁজার সুবিধার জন্য; এটি যোগ্য চিকিৎসকের পরামর্শ বা জরুরি সেবার বিকল্প নয়।")] },
        { title: choose("Appointments and listing accuracy", "অ্যাপয়েন্টমেন্ট ও তথ্যের নির্ভুলতা"), paragraphs: [choose("Qualifications, locations, telephone numbers, schedules and fees may change. Confirm current details directly with the doctor or chamber before visiting. Phone and WhatsApp links connect you to external providers; the directory does not itself confirm appointments.", "যোগ্যতা, অবস্থান, ফোন নম্বর, সময়সূচি ও ফি পরিবর্তিত হতে পারে। যাওয়ার আগে ডাক্তার বা চেম্বার থেকে বর্তমান তথ্য নিশ্চিত করুন। ফোন ও WhatsApp লিংক বাইরের সেবায় নিয়ে যায়; directory নিজে অ্যাপয়েন্টমেন্ট নিশ্চিত করে না।")] },
        { title: choose("Responsible use and content", "দায়িত্বশীল ব্যবহার ও কনটেন্ট"), paragraphs: [choose("Use the website without interfering with its operation, submitting misleading information or attempting unauthorised access. Public listing text and images may belong to their respective rights holders. Report incorrect information or concerns about content through our Contact page.", "ওয়েবসাইটের কাজ ব্যাহত করা, বিভ্রান্তিকর তথ্য জমা দেওয়া বা অননুমোদিত প্রবেশের চেষ্টা ছাড়া সাইট ব্যবহার করুন। প্রকাশ্য listing-এর লেখা ও ছবির অধিকার সংশ্লিষ্ট স্বত্বাধিকারীর হতে পারে। ভুল তথ্য বা কনটেন্ট নিয়ে উদ্বেগ থাকলে Contact পেজ দিয়ে জানান।")] },
        { title: choose("Saved lists and availability", "ব্যক্তিগত তালিকা ও সেবার প্রাপ্যতা"), paragraphs: [choose("Saved Docs depends on this browser’s storage. Clearing storage, changing browsers or expiry can remove entries. Website features and these terms may be updated. For questions, contact us. Last updated: 17 October 2026.", "“আমার ডাক্তার” তালিকা এই ব্রাউজারের storage-এর ওপর নির্ভর করে। storage মুছলে, ব্রাউজার বদলালে বা মেয়াদ শেষ হলে এন্ট্রি মুছে যেতে পারে। ওয়েবসাইটের সুবিধা ও এই শর্তাবলি হালনাগাদ হতে পারে। প্রশ্ন থাকলে যোগাযোগ করুন। সর্বশেষ হালনাগাদ: ১৭ অক্টোবর ২০২৬।")] }
      ]
    },
    contact: {
      title: choose("Contact", "যোগাযোগ"),
      description: choose("Contact Doclist Bd about doctor information, website feedback or general enquiries.", "ডাক্তারের তথ্য সংশোধন, ওয়েবসাইটের মতামত বা সাধারণ প্রশ্নে Doclist Bd-এর সঙ্গে যোগাযোগ করুন।"),
      sections: [
        { title: choose("Listing corrections and feedback", "তথ্য সংশোধন ও মতামত"), paragraphs: [choose("For a correction, include the doctor or hospital name, the profile link and the information that needs updating. A relevant source link helps us review your request.", "সংশোধনের জন্য ডাক্তার বা হাসপাতালের নাম, profile link এবং কোন তথ্য বদলানো প্রয়োজন তা লিখুন। প্রাসঙ্গিক source link দিলে অনুরোধ যাচাই করতে সুবিধা হবে।")] },
        { title: choose("Get in touch", "সরাসরি যোগাযোগ"), paragraphs: [choose("Use the email or WhatsApp links below for website questions and feedback. For a doctor’s appointment, use the chamber contact details on the relevant doctor profile.", "ওয়েবসাইট সংক্রান্ত প্রশ্ন ও মতামতের জন্য নিচের ইমেইল বা WhatsApp লিংক ব্যবহার করুন। ডাক্তারের অ্যাপয়েন্টমেন্টের জন্য সংশ্লিষ্ট profile-এ দেওয়া চেম্বারের নম্বরে যোগাযোগ করুন।")] }
      ]
    },
    sponsorship: {
      title: choose("Sponsorship", "স্পনসরশিপ"),
      description: choose("Discuss sponsorship and advertising opportunities with Doclist Bd.", "Doclist Bd-তে স্পনসরশিপ ও বিজ্ঞাপনের সুযোগ নিয়ে আলোচনা করুন।"),
      sections: [
        { title: choose("Work with Doclist Bd", "Doclist Bd-এর সঙ্গে কাজ করুন"), paragraphs: [choose("Contact us to discuss relevant brand visibility, banner placements and sponsorship campaigns for the directory audience.", "Directory-এর পাঠকদের কাছে প্রাসঙ্গিক brand visibility, banner placement ও sponsorship campaign নিয়ে আলোচনা করতে যোগাযোগ করুন।")] },
        { title: choose("Tell us about your campaign", "আপনার campaign সম্পর্কে জানান"), paragraphs: [choose("Please include your company or brand name, website, campaign goal, preferred placement, dates and proposed budget. Sponsorship does not confer a verified-doctor status or influence a doctor’s listed qualifications.", "আপনার প্রতিষ্ঠান বা brand-এর নাম, ওয়েবসাইট, campaign-এর লক্ষ্য, পছন্দের placement, সময়কাল ও প্রস্তাবিত বাজেট লিখুন। স্পনসরশিপ কোনো ডাক্তারকে verified status দেয় না বা তালিকাভুক্ত যোগ্যতা বদলায় না।")] }
      ]
    }
  };
  return content[key];
}
function essentialMetadata(key, lang) {
  const c = essentialContent(key, lang), path = "/" + key, canonical = absolute(localizedPath(lang, path));
  return { title: c.title, description: c.description, robots: { index: true, follow: true }, alternates: { canonical, languages: { "bn-BD": absolute(localizedPath("bn", path)), "en-BD": absolute(localizedPath("en", path)), "x-default": absolute(localizedPath("bn", path)) } }, openGraph: { title: c.title, description: c.description, url: canonical, type: "website", locale: lang === "bn" ? "bn_BD" : "en_BD" } };
}

function EssentialPage({ page, lang }) {
  const c = essentialContent(page, lang), contact = page === "contact" || page === "sponsorship";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "page-hero", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumbs, { lang, items: [{ label: c.title }] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: c.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: c.description })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container essential-content", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "stack", children: [
      c.sections.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "content-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: s.title }),
        s.paragraphs.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: p }, p))
      ] }, s.title)),
      contact ? /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "content-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: pick(lang, "Email & WhatsApp", "ইমেইল ও WhatsApp") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: pick(lang, "Email: ", "ইমেইল: ") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:" + contactEmail, children: contactEmail })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "WhatsApp: " }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: whatsappUrl, target: "_blank", rel: "noopener noreferrer", lang: "en", children: contactPhone })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "contact-actions", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "btn btn-primary", href: "mailto:" + contactEmail, children: pick(lang, "Send Email", "ইমেইল করুন") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "btn btn-secondary", href: whatsappUrl, target: "_blank", rel: "noopener noreferrer", children: pick(lang, "Chat on WhatsApp", "WhatsApp-এ কথা বলুন") })
        ] })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "small", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: localizedPath(lang, "/contact"), children: pick(lang, "Contact us", "আমাদের সঙ্গে যোগাযোগ করুন") }) })
    ] }) }) })
  ] });
}

async function generateMetadata$3({ params }) {
  return essentialMetadata("privacy-policy", getLocale((await params).lang));
}
async function Page$3({ params }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(EssentialPage, { page: "privacy-policy", lang: getLocale((await params).lang) });
}

const privacy = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: Page$3,
  generateMetadata: generateMetadata$3
}, Symbol.toStringTag, { value: 'Module' }));

async function generateMetadata$2({ params }) {
  return essentialMetadata("terms-of-use", getLocale((await params).lang));
}
async function Page$2({ params }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(EssentialPage, { page: "terms-of-use", lang: getLocale((await params).lang) });
}

const terms = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: Page$2,
  generateMetadata: generateMetadata$2
}, Symbol.toStringTag, { value: 'Module' }));

async function generateMetadata$1({ params }) {
  return essentialMetadata("contact", getLocale((await params).lang));
}
async function Page$1({ params }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(EssentialPage, { page: "contact", lang: getLocale((await params).lang) });
}

const contact = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: Page$1,
  generateMetadata: generateMetadata$1
}, Symbol.toStringTag, { value: 'Module' }));

async function generateMetadata({ params }) {
  return essentialMetadata("sponsorship", getLocale((await params).lang));
}
async function Page({ params }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(EssentialPage, { page: "sponsorship", lang: getLocale((await params).lang) });
}

const sponsorship = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: Page,
  generateMetadata
}, Symbol.toStringTag, { value: 'Module' }));

function resolveRoute(pathname) {
  let path;
  try {
    path = decodeURI(pathname).replace(/\/+$/, "") || "/";
  } catch {
    return notFound();
  }
  const lang = /^\/en(?:\/|$)/.test(path) ? "en" : "bn";
  const base = path.replace(/^\/en(?=\/|$)/, "") || "/";
  const params = { lang };
  const fixed = {
    "/": home,
    "/doctors": doctors,
    "/specialties": specialties,
    "/hospitals": hospitals,
    "/locations": locations,
    "/my-doc": saved,
    "/privacy-policy": privacy,
    "/terms-of-use": terms,
    "/contact": contact,
    "/sponsorship": sponsorship
  };
  if (fixed[base]) return { module: fixed[base], params };
  const patterns = [
    [/^\/doctor\/([^/]+)$/, doctor, ["slug"]],
    [/^\/doctors\/([^/]+)\/([^/]+)$/, combination, ["segment", "location"]],
    [/^\/doctors\/([^/]+)$/, location, ["segment"]],
    [/^\/specialty\/([^/]+)$/, specialty, ["slug"]],
    [/^\/hospital\/([^/]+)\/([^/]+)$/, section, ["slug", "section"]],
    [/^\/hospital\/([^/]+)$/, hospital, ["slug"]]
  ];
  for (const [pattern, module, keys] of patterns) {
    const match = base.match(pattern);
    if (match) {
      keys.forEach((key, i) => params[key] = match[i + 1]);
      return { module, params };
    }
  }
  return notFound();
}
function requestQuery(url) {
  const result = {};
  for (const key of new Set(url.searchParams.keys())) {
    const values = url.searchParams.getAll(key);
    result[key] = values.length > 1 ? values : values[0];
  }
  return result;
}

var server_browser = {};

var reactDomServerLegacy_browser_production = {};

var reactDom = {exports: {}};

var reactDom_production = {};

/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactDom_production;

function requireReactDom_production () {
	if (hasRequiredReactDom_production) return reactDom_production;
	hasRequiredReactDom_production = 1;
	var React = requireReact();
	function formatProdErrorMessage(code) {
	  var url = "https://react.dev/errors/" + code;
	  if (1 < arguments.length) {
	    url += "?args[]=" + encodeURIComponent(arguments[1]);
	    for (var i = 2; i < arguments.length; i++)
	      url += "&args[]=" + encodeURIComponent(arguments[i]);
	  }
	  return (
	    "Minified React error #" +
	    code +
	    "; visit " +
	    url +
	    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
	  );
	}
	function noop() {}
	var Internals = {
	    d: {
	      f: noop,
	      r: function () {
	        throw Error(formatProdErrorMessage(522));
	      },
	      D: noop,
	      C: noop,
	      L: noop,
	      m: noop,
	      X: noop,
	      S: noop,
	      M: noop
	    },
	    p: 0,
	    findDOMNode: null
	  },
	  REACT_PORTAL_TYPE = Symbol.for("react.portal");
	function createPortal$1(children, containerInfo, implementation) {
	  var key =
	    3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
	  return {
	    $$typeof: REACT_PORTAL_TYPE,
	    key: null == key ? null : "" + key,
	    children: children,
	    containerInfo: containerInfo,
	    implementation: implementation
	  };
	}
	var ReactSharedInternals =
	  React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	function getCrossOriginStringAs(as, input) {
	  if ("font" === as) return "";
	  if ("string" === typeof input)
	    return "use-credentials" === input ? input : "";
	}
	reactDom_production.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
	  Internals;
	reactDom_production.createPortal = function (children, container) {
	  var key =
	    2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
	  if (
	    !container ||
	    (1 !== container.nodeType &&
	      9 !== container.nodeType &&
	      11 !== container.nodeType)
	  )
	    throw Error(formatProdErrorMessage(299));
	  return createPortal$1(children, container, null, key);
	};
	reactDom_production.flushSync = function (fn) {
	  var previousTransition = ReactSharedInternals.T,
	    previousUpdatePriority = Internals.p;
	  try {
	    if (((ReactSharedInternals.T = null), (Internals.p = 2), fn)) return fn();
	  } finally {
	    (ReactSharedInternals.T = previousTransition),
	      (Internals.p = previousUpdatePriority),
	      Internals.d.f();
	  }
	};
	reactDom_production.preconnect = function (href, options) {
	  "string" === typeof href &&
	    (options
	      ? ((options = options.crossOrigin),
	        (options =
	          "string" === typeof options
	            ? "use-credentials" === options
	              ? options
	              : ""
	            : void 0))
	      : (options = null),
	    Internals.d.C(href, options));
	};
	reactDom_production.prefetchDNS = function (href) {
	  "string" === typeof href && Internals.d.D(href);
	};
	reactDom_production.preinit = function (href, options) {
	  if ("string" === typeof href && options && "string" === typeof options.as) {
	    var as = options.as,
	      crossOrigin = getCrossOriginStringAs(as, options.crossOrigin),
	      integrity =
	        "string" === typeof options.integrity ? options.integrity : void 0,
	      fetchPriority =
	        "string" === typeof options.fetchPriority
	          ? options.fetchPriority
	          : void 0;
	    "style" === as
	      ? Internals.d.S(
	          href,
	          "string" === typeof options.precedence ? options.precedence : void 0,
	          {
	            crossOrigin: crossOrigin,
	            integrity: integrity,
	            fetchPriority: fetchPriority
	          }
	        )
	      : "script" === as &&
	        Internals.d.X(href, {
	          crossOrigin: crossOrigin,
	          integrity: integrity,
	          fetchPriority: fetchPriority,
	          nonce: "string" === typeof options.nonce ? options.nonce : void 0
	        });
	  }
	};
	reactDom_production.preinitModule = function (href, options) {
	  if ("string" === typeof href)
	    if ("object" === typeof options && null !== options) {
	      if (null == options.as || "script" === options.as) {
	        var crossOrigin = getCrossOriginStringAs(
	          options.as,
	          options.crossOrigin
	        );
	        Internals.d.M(href, {
	          crossOrigin: crossOrigin,
	          integrity:
	            "string" === typeof options.integrity ? options.integrity : void 0,
	          nonce: "string" === typeof options.nonce ? options.nonce : void 0
	        });
	      }
	    } else null == options && Internals.d.M(href);
	};
	reactDom_production.preload = function (href, options) {
	  if (
	    "string" === typeof href &&
	    "object" === typeof options &&
	    null !== options &&
	    "string" === typeof options.as
	  ) {
	    var as = options.as,
	      crossOrigin = getCrossOriginStringAs(as, options.crossOrigin);
	    Internals.d.L(href, as, {
	      crossOrigin: crossOrigin,
	      integrity:
	        "string" === typeof options.integrity ? options.integrity : void 0,
	      nonce: "string" === typeof options.nonce ? options.nonce : void 0,
	      type: "string" === typeof options.type ? options.type : void 0,
	      fetchPriority:
	        "string" === typeof options.fetchPriority
	          ? options.fetchPriority
	          : void 0,
	      referrerPolicy:
	        "string" === typeof options.referrerPolicy
	          ? options.referrerPolicy
	          : void 0,
	      imageSrcSet:
	        "string" === typeof options.imageSrcSet ? options.imageSrcSet : void 0,
	      imageSizes:
	        "string" === typeof options.imageSizes ? options.imageSizes : void 0,
	      media: "string" === typeof options.media ? options.media : void 0
	    });
	  }
	};
	reactDom_production.preloadModule = function (href, options) {
	  if ("string" === typeof href)
	    if (options) {
	      var crossOrigin = getCrossOriginStringAs(options.as, options.crossOrigin);
	      Internals.d.m(href, {
	        as:
	          "string" === typeof options.as && "script" !== options.as
	            ? options.as
	            : void 0,
	        crossOrigin: crossOrigin,
	        integrity:
	          "string" === typeof options.integrity ? options.integrity : void 0
	      });
	    } else Internals.d.m(href);
	};
	reactDom_production.requestFormReset = function (form) {
	  Internals.d.r(form);
	};
	reactDom_production.unstable_batchedUpdates = function (fn, a) {
	  return fn(a);
	};
	reactDom_production.useFormState = function (action, initialState, permalink) {
	  return ReactSharedInternals.H.useFormState(action, initialState, permalink);
	};
	reactDom_production.useFormStatus = function () {
	  return ReactSharedInternals.H.useHostTransitionStatus();
	};
	reactDom_production.version = "19.2.6";
	return reactDom_production;
}

var hasRequiredReactDom;

function requireReactDom () {
	if (hasRequiredReactDom) return reactDom.exports;
	hasRequiredReactDom = 1;
	function checkDCE() {
	  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
	    return;
	  }
	  try {
	    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
	  } catch (err) {
	    console.error(err);
	  }
	}
	{
	  checkDCE();
	  reactDom.exports = requireReactDom_production();
	}
	return reactDom.exports;
}

/**
 * @license React
 * react-dom-server-legacy.browser.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactDomServerLegacy_browser_production;

function requireReactDomServerLegacy_browser_production () {
	if (hasRequiredReactDomServerLegacy_browser_production) return reactDomServerLegacy_browser_production;
	hasRequiredReactDomServerLegacy_browser_production = 1;
	var React = requireReact(),
	  ReactDOM = requireReactDom();
	function formatProdErrorMessage(code) {
	  var url = "https://react.dev/errors/" + code;
	  if (1 < arguments.length) {
	    url += "?args[]=" + encodeURIComponent(arguments[1]);
	    for (var i = 2; i < arguments.length; i++)
	      url += "&args[]=" + encodeURIComponent(arguments[i]);
	  }
	  return (
	    "Minified React error #" +
	    code +
	    "; visit " +
	    url +
	    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
	  );
	}
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
	  REACT_PORTAL_TYPE = Symbol.for("react.portal"),
	  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
	  REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
	  REACT_PROFILER_TYPE = Symbol.for("react.profiler"),
	  REACT_CONSUMER_TYPE = Symbol.for("react.consumer"),
	  REACT_CONTEXT_TYPE = Symbol.for("react.context"),
	  REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
	  REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
	  REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"),
	  REACT_MEMO_TYPE = Symbol.for("react.memo"),
	  REACT_LAZY_TYPE = Symbol.for("react.lazy"),
	  REACT_SCOPE_TYPE = Symbol.for("react.scope"),
	  REACT_ACTIVITY_TYPE = Symbol.for("react.activity"),
	  REACT_LEGACY_HIDDEN_TYPE = Symbol.for("react.legacy_hidden"),
	  REACT_MEMO_CACHE_SENTINEL = Symbol.for("react.memo_cache_sentinel"),
	  REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"),
	  MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
	function getIteratorFn(maybeIterable) {
	  if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
	  maybeIterable =
	    (MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL]) ||
	    maybeIterable["@@iterator"];
	  return "function" === typeof maybeIterable ? maybeIterable : null;
	}
	var isArrayImpl = Array.isArray;
	function murmurhash3_32_gc(key, seed) {
	  var remainder = key.length & 3;
	  var bytes = key.length - remainder;
	  var h1 = seed;
	  for (seed = 0; seed < bytes; ) {
	    var k1 =
	      (key.charCodeAt(seed) & 255) |
	      ((key.charCodeAt(++seed) & 255) << 8) |
	      ((key.charCodeAt(++seed) & 255) << 16) |
	      ((key.charCodeAt(++seed) & 255) << 24);
	    ++seed;
	    k1 =
	      (3432918353 * (k1 & 65535) +
	        (((3432918353 * (k1 >>> 16)) & 65535) << 16)) &
	      4294967295;
	    k1 = (k1 << 15) | (k1 >>> 17);
	    k1 =
	      (461845907 * (k1 & 65535) + (((461845907 * (k1 >>> 16)) & 65535) << 16)) &
	      4294967295;
	    h1 ^= k1;
	    h1 = (h1 << 13) | (h1 >>> 19);
	    h1 = (5 * (h1 & 65535) + (((5 * (h1 >>> 16)) & 65535) << 16)) & 4294967295;
	    h1 = (h1 & 65535) + 27492 + ((((h1 >>> 16) + 58964) & 65535) << 16);
	  }
	  k1 = 0;
	  switch (remainder) {
	    case 3:
	      k1 ^= (key.charCodeAt(seed + 2) & 255) << 16;
	    case 2:
	      k1 ^= (key.charCodeAt(seed + 1) & 255) << 8;
	    case 1:
	      (k1 ^= key.charCodeAt(seed) & 255),
	        (k1 =
	          (3432918353 * (k1 & 65535) +
	            (((3432918353 * (k1 >>> 16)) & 65535) << 16)) &
	          4294967295),
	        (k1 = (k1 << 15) | (k1 >>> 17)),
	        (h1 ^=
	          (461845907 * (k1 & 65535) +
	            (((461845907 * (k1 >>> 16)) & 65535) << 16)) &
	          4294967295);
	  }
	  h1 ^= key.length;
	  h1 ^= h1 >>> 16;
	  h1 =
	    (2246822507 * (h1 & 65535) + (((2246822507 * (h1 >>> 16)) & 65535) << 16)) &
	    4294967295;
	  h1 ^= h1 >>> 13;
	  h1 =
	    (3266489909 * (h1 & 65535) + (((3266489909 * (h1 >>> 16)) & 65535) << 16)) &
	    4294967295;
	  return (h1 ^ (h1 >>> 16)) >>> 0;
	}
	var assign = Object.assign,
	  hasOwnProperty = Object.prototype.hasOwnProperty,
	  VALID_ATTRIBUTE_NAME_REGEX = RegExp(
	    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
	  ),
	  illegalAttributeNameCache = {},
	  validatedAttributeNameCache = {};
	function isAttributeNameSafe(attributeName) {
	  if (hasOwnProperty.call(validatedAttributeNameCache, attributeName))
	    return true;
	  if (hasOwnProperty.call(illegalAttributeNameCache, attributeName)) return false;
	  if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName))
	    return (validatedAttributeNameCache[attributeName] = true);
	  illegalAttributeNameCache[attributeName] = true;
	  return false;
	}
	var unitlessNumbers = new Set(
	    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
	      " "
	    )
	  ),
	  aliases = new Map([
	    ["acceptCharset", "accept-charset"],
	    ["htmlFor", "for"],
	    ["httpEquiv", "http-equiv"],
	    ["crossOrigin", "crossorigin"],
	    ["accentHeight", "accent-height"],
	    ["alignmentBaseline", "alignment-baseline"],
	    ["arabicForm", "arabic-form"],
	    ["baselineShift", "baseline-shift"],
	    ["capHeight", "cap-height"],
	    ["clipPath", "clip-path"],
	    ["clipRule", "clip-rule"],
	    ["colorInterpolation", "color-interpolation"],
	    ["colorInterpolationFilters", "color-interpolation-filters"],
	    ["colorProfile", "color-profile"],
	    ["colorRendering", "color-rendering"],
	    ["dominantBaseline", "dominant-baseline"],
	    ["enableBackground", "enable-background"],
	    ["fillOpacity", "fill-opacity"],
	    ["fillRule", "fill-rule"],
	    ["floodColor", "flood-color"],
	    ["floodOpacity", "flood-opacity"],
	    ["fontFamily", "font-family"],
	    ["fontSize", "font-size"],
	    ["fontSizeAdjust", "font-size-adjust"],
	    ["fontStretch", "font-stretch"],
	    ["fontStyle", "font-style"],
	    ["fontVariant", "font-variant"],
	    ["fontWeight", "font-weight"],
	    ["glyphName", "glyph-name"],
	    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
	    ["glyphOrientationVertical", "glyph-orientation-vertical"],
	    ["horizAdvX", "horiz-adv-x"],
	    ["horizOriginX", "horiz-origin-x"],
	    ["imageRendering", "image-rendering"],
	    ["letterSpacing", "letter-spacing"],
	    ["lightingColor", "lighting-color"],
	    ["markerEnd", "marker-end"],
	    ["markerMid", "marker-mid"],
	    ["markerStart", "marker-start"],
	    ["overlinePosition", "overline-position"],
	    ["overlineThickness", "overline-thickness"],
	    ["paintOrder", "paint-order"],
	    ["panose-1", "panose-1"],
	    ["pointerEvents", "pointer-events"],
	    ["renderingIntent", "rendering-intent"],
	    ["shapeRendering", "shape-rendering"],
	    ["stopColor", "stop-color"],
	    ["stopOpacity", "stop-opacity"],
	    ["strikethroughPosition", "strikethrough-position"],
	    ["strikethroughThickness", "strikethrough-thickness"],
	    ["strokeDasharray", "stroke-dasharray"],
	    ["strokeDashoffset", "stroke-dashoffset"],
	    ["strokeLinecap", "stroke-linecap"],
	    ["strokeLinejoin", "stroke-linejoin"],
	    ["strokeMiterlimit", "stroke-miterlimit"],
	    ["strokeOpacity", "stroke-opacity"],
	    ["strokeWidth", "stroke-width"],
	    ["textAnchor", "text-anchor"],
	    ["textDecoration", "text-decoration"],
	    ["textRendering", "text-rendering"],
	    ["transformOrigin", "transform-origin"],
	    ["underlinePosition", "underline-position"],
	    ["underlineThickness", "underline-thickness"],
	    ["unicodeBidi", "unicode-bidi"],
	    ["unicodeRange", "unicode-range"],
	    ["unitsPerEm", "units-per-em"],
	    ["vAlphabetic", "v-alphabetic"],
	    ["vHanging", "v-hanging"],
	    ["vIdeographic", "v-ideographic"],
	    ["vMathematical", "v-mathematical"],
	    ["vectorEffect", "vector-effect"],
	    ["vertAdvY", "vert-adv-y"],
	    ["vertOriginX", "vert-origin-x"],
	    ["vertOriginY", "vert-origin-y"],
	    ["wordSpacing", "word-spacing"],
	    ["writingMode", "writing-mode"],
	    ["xmlnsXlink", "xmlns:xlink"],
	    ["xHeight", "x-height"]
	  ]),
	  matchHtmlRegExp = /["'&<>]/;
	function escapeTextForBrowser(text) {
	  if (
	    "boolean" === typeof text ||
	    "number" === typeof text ||
	    "bigint" === typeof text
	  )
	    return "" + text;
	  text = "" + text;
	  var match = matchHtmlRegExp.exec(text);
	  if (match) {
	    var html = "",
	      index,
	      lastIndex = 0;
	    for (index = match.index; index < text.length; index++) {
	      switch (text.charCodeAt(index)) {
	        case 34:
	          match = "&quot;";
	          break;
	        case 38:
	          match = "&amp;";
	          break;
	        case 39:
	          match = "&#x27;";
	          break;
	        case 60:
	          match = "&lt;";
	          break;
	        case 62:
	          match = "&gt;";
	          break;
	        default:
	          continue;
	      }
	      lastIndex !== index && (html += text.slice(lastIndex, index));
	      lastIndex = index + 1;
	      html += match;
	    }
	    text = lastIndex !== index ? html + text.slice(lastIndex, index) : html;
	  }
	  return text;
	}
	var uppercasePattern = /([A-Z])/g,
	  msPattern = /^ms-/,
	  isJavaScriptProtocol =
	    /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
	function sanitizeURL(url) {
	  return isJavaScriptProtocol.test("" + url)
	    ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
	    : url;
	}
	var ReactSharedInternals =
	    React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
	  ReactDOMSharedInternals =
	    ReactDOM.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
	  sharedNotPendingObject = {
	    pending: false,
	    data: null,
	    method: null,
	    action: null
	  },
	  previousDispatcher = ReactDOMSharedInternals.d;
	ReactDOMSharedInternals.d = {
	  f: previousDispatcher.f,
	  r: previousDispatcher.r,
	  D: prefetchDNS,
	  C: preconnect,
	  L: preload,
	  m: preloadModule,
	  X: preinitScript,
	  S: preinitStyle,
	  M: preinitModuleScript
	};
	var PRELOAD_NO_CREDS = [],
	  currentlyFlushingRenderState = null,
	  scriptRegex = /(<\/|<)(s)(cript)/gi;
	function scriptReplacer(match, prefix, s, suffix) {
	  return "" + prefix + ("s" === s ? "\\u0073" : "\\u0053") + suffix;
	}
	function createResumableState(
	  identifierPrefix,
	  externalRuntimeConfig,
	  bootstrapScriptContent,
	  bootstrapScripts,
	  bootstrapModules
	) {
	  return {
	    idPrefix: void 0 === identifierPrefix ? "" : identifierPrefix,
	    nextFormID: 0,
	    streamingFormat: 0,
	    bootstrapScriptContent: bootstrapScriptContent,
	    bootstrapScripts: bootstrapScripts,
	    bootstrapModules: bootstrapModules,
	    instructions: 0,
	    hasBody: false,
	    hasHtml: false,
	    unknownResources: {},
	    dnsResources: {},
	    connectResources: { default: {}, anonymous: {}, credentials: {} },
	    imageResources: {},
	    styleResources: {},
	    scriptResources: {},
	    moduleUnknownResources: {},
	    moduleScriptResources: {}
	  };
	}
	function createFormatContext(
	  insertionMode,
	  selectedValue,
	  tagScope,
	  viewTransition
	) {
	  return {
	    insertionMode: insertionMode,
	    selectedValue: selectedValue,
	    tagScope: tagScope,
	    viewTransition: viewTransition
	  };
	}
	function getChildFormatContext(parentContext, type, props) {
	  var subtreeScope = parentContext.tagScope & -25;
	  switch (type) {
	    case "noscript":
	      return createFormatContext(2, null, subtreeScope | 1, null);
	    case "select":
	      return createFormatContext(
	        2,
	        null != props.value ? props.value : props.defaultValue,
	        subtreeScope,
	        null
	      );
	    case "svg":
	      return createFormatContext(4, null, subtreeScope, null);
	    case "picture":
	      return createFormatContext(2, null, subtreeScope | 2, null);
	    case "math":
	      return createFormatContext(5, null, subtreeScope, null);
	    case "foreignObject":
	      return createFormatContext(2, null, subtreeScope, null);
	    case "table":
	      return createFormatContext(6, null, subtreeScope, null);
	    case "thead":
	    case "tbody":
	    case "tfoot":
	      return createFormatContext(7, null, subtreeScope, null);
	    case "colgroup":
	      return createFormatContext(9, null, subtreeScope, null);
	    case "tr":
	      return createFormatContext(8, null, subtreeScope, null);
	    case "head":
	      if (2 > parentContext.insertionMode)
	        return createFormatContext(3, null, subtreeScope, null);
	      break;
	    case "html":
	      if (0 === parentContext.insertionMode)
	        return createFormatContext(1, null, subtreeScope, null);
	  }
	  return 6 <= parentContext.insertionMode || 2 > parentContext.insertionMode
	    ? createFormatContext(2, null, subtreeScope, null)
	    : parentContext.tagScope !== subtreeScope
	      ? createFormatContext(
	          parentContext.insertionMode,
	          parentContext.selectedValue,
	          subtreeScope,
	          null
	        )
	      : parentContext;
	}
	function getSuspenseViewTransition(parentViewTransition) {
	  return null === parentViewTransition
	    ? null
	    : {
	        update: parentViewTransition.update,
	        enter: "none",
	        exit: "none",
	        share: parentViewTransition.update,
	        name: parentViewTransition.autoName,
	        autoName: parentViewTransition.autoName,
	        nameIdx: 0
	      };
	}
	function getSuspenseFallbackFormatContext(resumableState, parentContext) {
	  parentContext.tagScope & 32 && (resumableState.instructions |= 128);
	  return createFormatContext(
	    parentContext.insertionMode,
	    parentContext.selectedValue,
	    parentContext.tagScope | 12,
	    getSuspenseViewTransition(parentContext.viewTransition)
	  );
	}
	function getSuspenseContentFormatContext(resumableState, parentContext) {
	  resumableState = getSuspenseViewTransition(parentContext.viewTransition);
	  var subtreeScope = parentContext.tagScope | 16;
	  null !== resumableState &&
	    "none" !== resumableState.share &&
	    (subtreeScope |= 64);
	  return createFormatContext(
	    parentContext.insertionMode,
	    parentContext.selectedValue,
	    subtreeScope,
	    resumableState
	  );
	}
	var styleNameCache = new Map();
	function pushStyleAttribute(target, style) {
	  if ("object" !== typeof style) throw Error(formatProdErrorMessage(62));
	  var isFirst = true,
	    styleName;
	  for (styleName in style)
	    if (hasOwnProperty.call(style, styleName)) {
	      var styleValue = style[styleName];
	      if (
	        null != styleValue &&
	        "boolean" !== typeof styleValue &&
	        "" !== styleValue
	      ) {
	        if (0 === styleName.indexOf("--")) {
	          var nameChunk = escapeTextForBrowser(styleName);
	          styleValue = escapeTextForBrowser(("" + styleValue).trim());
	        } else
	          (nameChunk = styleNameCache.get(styleName)),
	            void 0 === nameChunk &&
	              ((nameChunk = escapeTextForBrowser(
	                styleName
	                  .replace(uppercasePattern, "-$1")
	                  .toLowerCase()
	                  .replace(msPattern, "-ms-")
	              )),
	              styleNameCache.set(styleName, nameChunk)),
	            (styleValue =
	              "number" === typeof styleValue
	                ? 0 === styleValue || unitlessNumbers.has(styleName)
	                  ? "" + styleValue
	                  : styleValue + "px"
	                : escapeTextForBrowser(("" + styleValue).trim()));
	        isFirst
	          ? ((isFirst = false),
	            target.push(' style="', nameChunk, ":", styleValue))
	          : target.push(";", nameChunk, ":", styleValue);
	      }
	    }
	  isFirst || target.push('"');
	}
	function pushBooleanAttribute(target, name, value) {
	  value &&
	    "function" !== typeof value &&
	    "symbol" !== typeof value &&
	    target.push(" ", name, '=""');
	}
	function pushStringAttribute(target, name, value) {
	  "function" !== typeof value &&
	    "symbol" !== typeof value &&
	    "boolean" !== typeof value &&
	    target.push(" ", name, '="', escapeTextForBrowser(value), '"');
	}
	var actionJavaScriptURL = escapeTextForBrowser(
	  "javascript:throw new Error('React form unexpectedly submitted.')"
	);
	function pushAdditionalFormField(value, key) {
	  this.push('<input type="hidden"');
	  validateAdditionalFormField(value);
	  pushStringAttribute(this, "name", key);
	  pushStringAttribute(this, "value", value);
	  this.push("/>");
	}
	function validateAdditionalFormField(value) {
	  if ("string" !== typeof value) throw Error(formatProdErrorMessage(480));
	}
	function getCustomFormFields(resumableState, formAction) {
	  if ("function" === typeof formAction.$$FORM_ACTION) {
	    var id = resumableState.nextFormID++;
	    resumableState = resumableState.idPrefix + id;
	    try {
	      var customFields = formAction.$$FORM_ACTION(resumableState);
	      if (customFields) {
	        var formData = customFields.data;
	        null != formData && formData.forEach(validateAdditionalFormField);
	      }
	      return customFields;
	    } catch (x) {
	      if ("object" === typeof x && null !== x && "function" === typeof x.then)
	        throw x;
	    }
	  }
	  return null;
	}
	function pushFormActionAttribute(
	  target,
	  resumableState,
	  renderState,
	  formAction,
	  formEncType,
	  formMethod,
	  formTarget,
	  name
	) {
	  var formData = null;
	  if ("function" === typeof formAction) {
	    var customFields = getCustomFormFields(resumableState, formAction);
	    null !== customFields
	      ? ((name = customFields.name),
	        (formAction = customFields.action || ""),
	        (formEncType = customFields.encType),
	        (formMethod = customFields.method),
	        (formTarget = customFields.target),
	        (formData = customFields.data))
	      : (target.push(" ", "formAction", '="', actionJavaScriptURL, '"'),
	        (formTarget = formMethod = formEncType = formAction = name = null),
	        injectFormReplayingRuntime(resumableState, renderState));
	  }
	  null != name && pushAttribute(target, "name", name);
	  null != formAction && pushAttribute(target, "formAction", formAction);
	  null != formEncType && pushAttribute(target, "formEncType", formEncType);
	  null != formMethod && pushAttribute(target, "formMethod", formMethod);
	  null != formTarget && pushAttribute(target, "formTarget", formTarget);
	  return formData;
	}
	function pushAttribute(target, name, value) {
	  switch (name) {
	    case "className":
	      pushStringAttribute(target, "class", value);
	      break;
	    case "tabIndex":
	      pushStringAttribute(target, "tabindex", value);
	      break;
	    case "dir":
	    case "role":
	    case "viewBox":
	    case "width":
	    case "height":
	      pushStringAttribute(target, name, value);
	      break;
	    case "style":
	      pushStyleAttribute(target, value);
	      break;
	    case "src":
	    case "href":
	      if ("" === value) break;
	    case "action":
	    case "formAction":
	      if (
	        null == value ||
	        "function" === typeof value ||
	        "symbol" === typeof value ||
	        "boolean" === typeof value
	      )
	        break;
	      value = sanitizeURL("" + value);
	      target.push(" ", name, '="', escapeTextForBrowser(value), '"');
	      break;
	    case "defaultValue":
	    case "defaultChecked":
	    case "innerHTML":
	    case "suppressContentEditableWarning":
	    case "suppressHydrationWarning":
	    case "ref":
	      break;
	    case "autoFocus":
	    case "multiple":
	    case "muted":
	      pushBooleanAttribute(target, name.toLowerCase(), value);
	      break;
	    case "xlinkHref":
	      if (
	        "function" === typeof value ||
	        "symbol" === typeof value ||
	        "boolean" === typeof value
	      )
	        break;
	      value = sanitizeURL("" + value);
	      target.push(" ", "xlink:href", '="', escapeTextForBrowser(value), '"');
	      break;
	    case "contentEditable":
	    case "spellCheck":
	    case "draggable":
	    case "value":
	    case "autoReverse":
	    case "externalResourcesRequired":
	    case "focusable":
	    case "preserveAlpha":
	      "function" !== typeof value &&
	        "symbol" !== typeof value &&
	        target.push(" ", name, '="', escapeTextForBrowser(value), '"');
	      break;
	    case "inert":
	    case "allowFullScreen":
	    case "async":
	    case "autoPlay":
	    case "controls":
	    case "default":
	    case "defer":
	    case "disabled":
	    case "disablePictureInPicture":
	    case "disableRemotePlayback":
	    case "formNoValidate":
	    case "hidden":
	    case "loop":
	    case "noModule":
	    case "noValidate":
	    case "open":
	    case "playsInline":
	    case "readOnly":
	    case "required":
	    case "reversed":
	    case "scoped":
	    case "seamless":
	    case "itemScope":
	      value &&
	        "function" !== typeof value &&
	        "symbol" !== typeof value &&
	        target.push(" ", name, '=""');
	      break;
	    case "capture":
	    case "download":
	      true === value
	        ? target.push(" ", name, '=""')
	        : false !== value &&
	          "function" !== typeof value &&
	          "symbol" !== typeof value &&
	          target.push(" ", name, '="', escapeTextForBrowser(value), '"');
	      break;
	    case "cols":
	    case "rows":
	    case "size":
	    case "span":
	      "function" !== typeof value &&
	        "symbol" !== typeof value &&
	        !isNaN(value) &&
	        1 <= value &&
	        target.push(" ", name, '="', escapeTextForBrowser(value), '"');
	      break;
	    case "rowSpan":
	    case "start":
	      "function" === typeof value ||
	        "symbol" === typeof value ||
	        isNaN(value) ||
	        target.push(" ", name, '="', escapeTextForBrowser(value), '"');
	      break;
	    case "xlinkActuate":
	      pushStringAttribute(target, "xlink:actuate", value);
	      break;
	    case "xlinkArcrole":
	      pushStringAttribute(target, "xlink:arcrole", value);
	      break;
	    case "xlinkRole":
	      pushStringAttribute(target, "xlink:role", value);
	      break;
	    case "xlinkShow":
	      pushStringAttribute(target, "xlink:show", value);
	      break;
	    case "xlinkTitle":
	      pushStringAttribute(target, "xlink:title", value);
	      break;
	    case "xlinkType":
	      pushStringAttribute(target, "xlink:type", value);
	      break;
	    case "xmlBase":
	      pushStringAttribute(target, "xml:base", value);
	      break;
	    case "xmlLang":
	      pushStringAttribute(target, "xml:lang", value);
	      break;
	    case "xmlSpace":
	      pushStringAttribute(target, "xml:space", value);
	      break;
	    default:
	      if (
	        !(2 < name.length) ||
	        ("o" !== name[0] && "O" !== name[0]) ||
	        ("n" !== name[1] && "N" !== name[1])
	      )
	        if (((name = aliases.get(name) || name), isAttributeNameSafe(name))) {
	          switch (typeof value) {
	            case "function":
	            case "symbol":
	              return;
	            case "boolean":
	              var prefix$8 = name.toLowerCase().slice(0, 5);
	              if ("data-" !== prefix$8 && "aria-" !== prefix$8) return;
	          }
	          target.push(" ", name, '="', escapeTextForBrowser(value), '"');
	        }
	  }
	}
	function pushInnerHTML(target, innerHTML, children) {
	  if (null != innerHTML) {
	    if (null != children) throw Error(formatProdErrorMessage(60));
	    if ("object" !== typeof innerHTML || !("__html" in innerHTML))
	      throw Error(formatProdErrorMessage(61));
	    innerHTML = innerHTML.__html;
	    null !== innerHTML && void 0 !== innerHTML && target.push("" + innerHTML);
	  }
	}
	function flattenOptionChildren(children) {
	  var content = "";
	  React.Children.forEach(children, function (child) {
	    null != child && (content += child);
	  });
	  return content;
	}
	function injectFormReplayingRuntime(resumableState, renderState) {
	  if (0 === (resumableState.instructions & 16)) {
	    resumableState.instructions |= 16;
	    var preamble = renderState.preamble,
	      bootstrapChunks = renderState.bootstrapChunks;
	    (preamble.htmlChunks || preamble.headChunks) && 0 === bootstrapChunks.length
	      ? (bootstrapChunks.push(renderState.startInlineScript),
	        pushCompletedShellIdAttribute(bootstrapChunks, resumableState),
	        bootstrapChunks.push(
	          ">",
	          'addEventListener("submit",function(a){if(!a.defaultPrevented){var c=a.target,d=a.submitter,e=c.action,b=d;if(d){var f=d.getAttribute("formAction");null!=f&&(e=f,b=null)}"javascript:throw new Error(\'React form unexpectedly submitted.\')"===e&&(a.preventDefault(),b?(a=document.createElement("input"),a.name=b.name,a.value=b.value,b.parentNode.insertBefore(a,b),b=new FormData(c),a.parentNode.removeChild(a)):b=new FormData(c),a=c.ownerDocument||c,(a.$$reactFormReplay=a.$$reactFormReplay||[]).push(c,d,b))}});',
	          "\x3c/script>"
	        ))
	      : bootstrapChunks.unshift(
	          renderState.startInlineScript,
	          ">",
	          'addEventListener("submit",function(a){if(!a.defaultPrevented){var c=a.target,d=a.submitter,e=c.action,b=d;if(d){var f=d.getAttribute("formAction");null!=f&&(e=f,b=null)}"javascript:throw new Error(\'React form unexpectedly submitted.\')"===e&&(a.preventDefault(),b?(a=document.createElement("input"),a.name=b.name,a.value=b.value,b.parentNode.insertBefore(a,b),b=new FormData(c),a.parentNode.removeChild(a)):b=new FormData(c),a=c.ownerDocument||c,(a.$$reactFormReplay=a.$$reactFormReplay||[]).push(c,d,b))}});',
	          "\x3c/script>"
	        );
	  }
	}
	function pushLinkImpl(target, props) {
	  target.push(startChunkForTag("link"));
	  for (var propKey in props)
	    if (hasOwnProperty.call(props, propKey)) {
	      var propValue = props[propKey];
	      if (null != propValue)
	        switch (propKey) {
	          case "children":
	          case "dangerouslySetInnerHTML":
	            throw Error(formatProdErrorMessage(399, "link"));
	          default:
	            pushAttribute(target, propKey, propValue);
	        }
	    }
	  target.push("/>");
	  return null;
	}
	var styleRegex = /(<\/|<)(s)(tyle)/gi;
	function styleReplacer(match, prefix, s, suffix) {
	  return "" + prefix + ("s" === s ? "\\73 " : "\\53 ") + suffix;
	}
	function pushSelfClosing(target, props, tag) {
	  target.push(startChunkForTag(tag));
	  for (var propKey in props)
	    if (hasOwnProperty.call(props, propKey)) {
	      var propValue = props[propKey];
	      if (null != propValue)
	        switch (propKey) {
	          case "children":
	          case "dangerouslySetInnerHTML":
	            throw Error(formatProdErrorMessage(399, tag));
	          default:
	            pushAttribute(target, propKey, propValue);
	        }
	    }
	  target.push("/>");
	  return null;
	}
	function pushTitleImpl(target, props) {
	  target.push(startChunkForTag("title"));
	  var children = null,
	    innerHTML = null,
	    propKey;
	  for (propKey in props)
	    if (hasOwnProperty.call(props, propKey)) {
	      var propValue = props[propKey];
	      if (null != propValue)
	        switch (propKey) {
	          case "children":
	            children = propValue;
	            break;
	          case "dangerouslySetInnerHTML":
	            innerHTML = propValue;
	            break;
	          default:
	            pushAttribute(target, propKey, propValue);
	        }
	    }
	  target.push(">");
	  props = Array.isArray(children)
	    ? 2 > children.length
	      ? children[0]
	      : null
	    : children;
	  "function" !== typeof props &&
	    "symbol" !== typeof props &&
	    null !== props &&
	    void 0 !== props &&
	    target.push(escapeTextForBrowser("" + props));
	  pushInnerHTML(target, innerHTML, children);
	  target.push(endChunkForTag("title"));
	  return null;
	}
	function pushScriptImpl(target, props) {
	  target.push(startChunkForTag("script"));
	  var children = null,
	    innerHTML = null,
	    propKey;
	  for (propKey in props)
	    if (hasOwnProperty.call(props, propKey)) {
	      var propValue = props[propKey];
	      if (null != propValue)
	        switch (propKey) {
	          case "children":
	            children = propValue;
	            break;
	          case "dangerouslySetInnerHTML":
	            innerHTML = propValue;
	            break;
	          default:
	            pushAttribute(target, propKey, propValue);
	        }
	    }
	  target.push(">");
	  pushInnerHTML(target, innerHTML, children);
	  "string" === typeof children &&
	    target.push(("" + children).replace(scriptRegex, scriptReplacer));
	  target.push(endChunkForTag("script"));
	  return null;
	}
	function pushStartSingletonElement(target, props, tag) {
	  target.push(startChunkForTag(tag));
	  var innerHTML = (tag = null),
	    propKey;
	  for (propKey in props)
	    if (hasOwnProperty.call(props, propKey)) {
	      var propValue = props[propKey];
	      if (null != propValue)
	        switch (propKey) {
	          case "children":
	            tag = propValue;
	            break;
	          case "dangerouslySetInnerHTML":
	            innerHTML = propValue;
	            break;
	          default:
	            pushAttribute(target, propKey, propValue);
	        }
	    }
	  target.push(">");
	  pushInnerHTML(target, innerHTML, tag);
	  return tag;
	}
	function pushStartGenericElement(target, props, tag) {
	  target.push(startChunkForTag(tag));
	  var innerHTML = (tag = null),
	    propKey;
	  for (propKey in props)
	    if (hasOwnProperty.call(props, propKey)) {
	      var propValue = props[propKey];
	      if (null != propValue)
	        switch (propKey) {
	          case "children":
	            tag = propValue;
	            break;
	          case "dangerouslySetInnerHTML":
	            innerHTML = propValue;
	            break;
	          default:
	            pushAttribute(target, propKey, propValue);
	        }
	    }
	  target.push(">");
	  pushInnerHTML(target, innerHTML, tag);
	  return "string" === typeof tag
	    ? (target.push(escapeTextForBrowser(tag)), null)
	    : tag;
	}
	var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
	  validatedTagCache = new Map();
	function startChunkForTag(tag) {
	  var tagStartChunk = validatedTagCache.get(tag);
	  if (void 0 === tagStartChunk) {
	    if (!VALID_TAG_REGEX.test(tag))
	      throw Error(formatProdErrorMessage(65, tag));
	    tagStartChunk = "<" + tag;
	    validatedTagCache.set(tag, tagStartChunk);
	  }
	  return tagStartChunk;
	}
	function pushStartInstance(
	  target$jscomp$0,
	  type,
	  props,
	  resumableState,
	  renderState,
	  preambleState,
	  hoistableState,
	  formatContext,
	  textEmbedded
	) {
	  switch (type) {
	    case "div":
	    case "span":
	    case "svg":
	    case "path":
	      break;
	    case "a":
	      target$jscomp$0.push(startChunkForTag("a"));
	      var children = null,
	        innerHTML = null,
	        propKey;
	      for (propKey in props)
	        if (hasOwnProperty.call(props, propKey)) {
	          var propValue = props[propKey];
	          if (null != propValue)
	            switch (propKey) {
	              case "children":
	                children = propValue;
	                break;
	              case "dangerouslySetInnerHTML":
	                innerHTML = propValue;
	                break;
	              case "href":
	                "" === propValue
	                  ? pushStringAttribute(target$jscomp$0, "href", "")
	                  : pushAttribute(target$jscomp$0, propKey, propValue);
	                break;
	              default:
	                pushAttribute(target$jscomp$0, propKey, propValue);
	            }
	        }
	      target$jscomp$0.push(">");
	      pushInnerHTML(target$jscomp$0, innerHTML, children);
	      if ("string" === typeof children) {
	        target$jscomp$0.push(escapeTextForBrowser(children));
	        var JSCompiler_inline_result = null;
	      } else JSCompiler_inline_result = children;
	      return JSCompiler_inline_result;
	    case "g":
	    case "p":
	    case "li":
	      break;
	    case "select":
	      target$jscomp$0.push(startChunkForTag("select"));
	      var children$jscomp$0 = null,
	        innerHTML$jscomp$0 = null,
	        propKey$jscomp$0;
	      for (propKey$jscomp$0 in props)
	        if (hasOwnProperty.call(props, propKey$jscomp$0)) {
	          var propValue$jscomp$0 = props[propKey$jscomp$0];
	          if (null != propValue$jscomp$0)
	            switch (propKey$jscomp$0) {
	              case "children":
	                children$jscomp$0 = propValue$jscomp$0;
	                break;
	              case "dangerouslySetInnerHTML":
	                innerHTML$jscomp$0 = propValue$jscomp$0;
	                break;
	              case "defaultValue":
	              case "value":
	                break;
	              default:
	                pushAttribute(
	                  target$jscomp$0,
	                  propKey$jscomp$0,
	                  propValue$jscomp$0
	                );
	            }
	        }
	      target$jscomp$0.push(">");
	      pushInnerHTML(target$jscomp$0, innerHTML$jscomp$0, children$jscomp$0);
	      return children$jscomp$0;
	    case "option":
	      var selectedValue = formatContext.selectedValue;
	      target$jscomp$0.push(startChunkForTag("option"));
	      var children$jscomp$1 = null,
	        value = null,
	        selected = null,
	        innerHTML$jscomp$1 = null,
	        propKey$jscomp$1;
	      for (propKey$jscomp$1 in props)
	        if (hasOwnProperty.call(props, propKey$jscomp$1)) {
	          var propValue$jscomp$1 = props[propKey$jscomp$1];
	          if (null != propValue$jscomp$1)
	            switch (propKey$jscomp$1) {
	              case "children":
	                children$jscomp$1 = propValue$jscomp$1;
	                break;
	              case "selected":
	                selected = propValue$jscomp$1;
	                break;
	              case "dangerouslySetInnerHTML":
	                innerHTML$jscomp$1 = propValue$jscomp$1;
	                break;
	              case "value":
	                value = propValue$jscomp$1;
	              default:
	                pushAttribute(
	                  target$jscomp$0,
	                  propKey$jscomp$1,
	                  propValue$jscomp$1
	                );
	            }
	        }
	      if (null != selectedValue) {
	        var stringValue =
	          null !== value
	            ? "" + value
	            : flattenOptionChildren(children$jscomp$1);
	        if (isArrayImpl(selectedValue))
	          for (var i = 0; i < selectedValue.length; i++) {
	            if ("" + selectedValue[i] === stringValue) {
	              target$jscomp$0.push(' selected=""');
	              break;
	            }
	          }
	        else
	          "" + selectedValue === stringValue &&
	            target$jscomp$0.push(' selected=""');
	      } else selected && target$jscomp$0.push(' selected=""');
	      target$jscomp$0.push(">");
	      pushInnerHTML(target$jscomp$0, innerHTML$jscomp$1, children$jscomp$1);
	      return children$jscomp$1;
	    case "textarea":
	      target$jscomp$0.push(startChunkForTag("textarea"));
	      var value$jscomp$0 = null,
	        defaultValue = null,
	        children$jscomp$2 = null,
	        propKey$jscomp$2;
	      for (propKey$jscomp$2 in props)
	        if (hasOwnProperty.call(props, propKey$jscomp$2)) {
	          var propValue$jscomp$2 = props[propKey$jscomp$2];
	          if (null != propValue$jscomp$2)
	            switch (propKey$jscomp$2) {
	              case "children":
	                children$jscomp$2 = propValue$jscomp$2;
	                break;
	              case "value":
	                value$jscomp$0 = propValue$jscomp$2;
	                break;
	              case "defaultValue":
	                defaultValue = propValue$jscomp$2;
	                break;
	              case "dangerouslySetInnerHTML":
	                throw Error(formatProdErrorMessage(91));
	              default:
	                pushAttribute(
	                  target$jscomp$0,
	                  propKey$jscomp$2,
	                  propValue$jscomp$2
	                );
	            }
	        }
	      null === value$jscomp$0 &&
	        null !== defaultValue &&
	        (value$jscomp$0 = defaultValue);
	      target$jscomp$0.push(">");
	      if (null != children$jscomp$2) {
	        if (null != value$jscomp$0) throw Error(formatProdErrorMessage(92));
	        if (isArrayImpl(children$jscomp$2)) {
	          if (1 < children$jscomp$2.length)
	            throw Error(formatProdErrorMessage(93));
	          value$jscomp$0 = "" + children$jscomp$2[0];
	        }
	        value$jscomp$0 = "" + children$jscomp$2;
	      }
	      "string" === typeof value$jscomp$0 &&
	        "\n" === value$jscomp$0[0] &&
	        target$jscomp$0.push("\n");
	      null !== value$jscomp$0 &&
	        target$jscomp$0.push(escapeTextForBrowser("" + value$jscomp$0));
	      return null;
	    case "input":
	      target$jscomp$0.push(startChunkForTag("input"));
	      var name = null,
	        formAction = null,
	        formEncType = null,
	        formMethod = null,
	        formTarget = null,
	        value$jscomp$1 = null,
	        defaultValue$jscomp$0 = null,
	        checked = null,
	        defaultChecked = null,
	        propKey$jscomp$3;
	      for (propKey$jscomp$3 in props)
	        if (hasOwnProperty.call(props, propKey$jscomp$3)) {
	          var propValue$jscomp$3 = props[propKey$jscomp$3];
	          if (null != propValue$jscomp$3)
	            switch (propKey$jscomp$3) {
	              case "children":
	              case "dangerouslySetInnerHTML":
	                throw Error(formatProdErrorMessage(399, "input"));
	              case "name":
	                name = propValue$jscomp$3;
	                break;
	              case "formAction":
	                formAction = propValue$jscomp$3;
	                break;
	              case "formEncType":
	                formEncType = propValue$jscomp$3;
	                break;
	              case "formMethod":
	                formMethod = propValue$jscomp$3;
	                break;
	              case "formTarget":
	                formTarget = propValue$jscomp$3;
	                break;
	              case "defaultChecked":
	                defaultChecked = propValue$jscomp$3;
	                break;
	              case "defaultValue":
	                defaultValue$jscomp$0 = propValue$jscomp$3;
	                break;
	              case "checked":
	                checked = propValue$jscomp$3;
	                break;
	              case "value":
	                value$jscomp$1 = propValue$jscomp$3;
	                break;
	              default:
	                pushAttribute(
	                  target$jscomp$0,
	                  propKey$jscomp$3,
	                  propValue$jscomp$3
	                );
	            }
	        }
	      var formData = pushFormActionAttribute(
	        target$jscomp$0,
	        resumableState,
	        renderState,
	        formAction,
	        formEncType,
	        formMethod,
	        formTarget,
	        name
	      );
	      null !== checked
	        ? pushBooleanAttribute(target$jscomp$0, "checked", checked)
	        : null !== defaultChecked &&
	          pushBooleanAttribute(target$jscomp$0, "checked", defaultChecked);
	      null !== value$jscomp$1
	        ? pushAttribute(target$jscomp$0, "value", value$jscomp$1)
	        : null !== defaultValue$jscomp$0 &&
	          pushAttribute(target$jscomp$0, "value", defaultValue$jscomp$0);
	      target$jscomp$0.push("/>");
	      null != formData &&
	        formData.forEach(pushAdditionalFormField, target$jscomp$0);
	      return null;
	    case "button":
	      target$jscomp$0.push(startChunkForTag("button"));
	      var children$jscomp$3 = null,
	        innerHTML$jscomp$2 = null,
	        name$jscomp$0 = null,
	        formAction$jscomp$0 = null,
	        formEncType$jscomp$0 = null,
	        formMethod$jscomp$0 = null,
	        formTarget$jscomp$0 = null,
	        propKey$jscomp$4;
	      for (propKey$jscomp$4 in props)
	        if (hasOwnProperty.call(props, propKey$jscomp$4)) {
	          var propValue$jscomp$4 = props[propKey$jscomp$4];
	          if (null != propValue$jscomp$4)
	            switch (propKey$jscomp$4) {
	              case "children":
	                children$jscomp$3 = propValue$jscomp$4;
	                break;
	              case "dangerouslySetInnerHTML":
	                innerHTML$jscomp$2 = propValue$jscomp$4;
	                break;
	              case "name":
	                name$jscomp$0 = propValue$jscomp$4;
	                break;
	              case "formAction":
	                formAction$jscomp$0 = propValue$jscomp$4;
	                break;
	              case "formEncType":
	                formEncType$jscomp$0 = propValue$jscomp$4;
	                break;
	              case "formMethod":
	                formMethod$jscomp$0 = propValue$jscomp$4;
	                break;
	              case "formTarget":
	                formTarget$jscomp$0 = propValue$jscomp$4;
	                break;
	              default:
	                pushAttribute(
	                  target$jscomp$0,
	                  propKey$jscomp$4,
	                  propValue$jscomp$4
	                );
	            }
	        }
	      var formData$jscomp$0 = pushFormActionAttribute(
	        target$jscomp$0,
	        resumableState,
	        renderState,
	        formAction$jscomp$0,
	        formEncType$jscomp$0,
	        formMethod$jscomp$0,
	        formTarget$jscomp$0,
	        name$jscomp$0
	      );
	      target$jscomp$0.push(">");
	      null != formData$jscomp$0 &&
	        formData$jscomp$0.forEach(pushAdditionalFormField, target$jscomp$0);
	      pushInnerHTML(target$jscomp$0, innerHTML$jscomp$2, children$jscomp$3);
	      if ("string" === typeof children$jscomp$3) {
	        target$jscomp$0.push(escapeTextForBrowser(children$jscomp$3));
	        var JSCompiler_inline_result$jscomp$0 = null;
	      } else JSCompiler_inline_result$jscomp$0 = children$jscomp$3;
	      return JSCompiler_inline_result$jscomp$0;
	    case "form":
	      target$jscomp$0.push(startChunkForTag("form"));
	      var children$jscomp$4 = null,
	        innerHTML$jscomp$3 = null,
	        formAction$jscomp$1 = null,
	        formEncType$jscomp$1 = null,
	        formMethod$jscomp$1 = null,
	        formTarget$jscomp$1 = null,
	        propKey$jscomp$5;
	      for (propKey$jscomp$5 in props)
	        if (hasOwnProperty.call(props, propKey$jscomp$5)) {
	          var propValue$jscomp$5 = props[propKey$jscomp$5];
	          if (null != propValue$jscomp$5)
	            switch (propKey$jscomp$5) {
	              case "children":
	                children$jscomp$4 = propValue$jscomp$5;
	                break;
	              case "dangerouslySetInnerHTML":
	                innerHTML$jscomp$3 = propValue$jscomp$5;
	                break;
	              case "action":
	                formAction$jscomp$1 = propValue$jscomp$5;
	                break;
	              case "encType":
	                formEncType$jscomp$1 = propValue$jscomp$5;
	                break;
	              case "method":
	                formMethod$jscomp$1 = propValue$jscomp$5;
	                break;
	              case "target":
	                formTarget$jscomp$1 = propValue$jscomp$5;
	                break;
	              default:
	                pushAttribute(
	                  target$jscomp$0,
	                  propKey$jscomp$5,
	                  propValue$jscomp$5
	                );
	            }
	        }
	      var formData$jscomp$1 = null,
	        formActionName = null;
	      if ("function" === typeof formAction$jscomp$1) {
	        var customFields = getCustomFormFields(
	          resumableState,
	          formAction$jscomp$1
	        );
	        null !== customFields
	          ? ((formAction$jscomp$1 = customFields.action || ""),
	            (formEncType$jscomp$1 = customFields.encType),
	            (formMethod$jscomp$1 = customFields.method),
	            (formTarget$jscomp$1 = customFields.target),
	            (formData$jscomp$1 = customFields.data),
	            (formActionName = customFields.name))
	          : (target$jscomp$0.push(
	              " ",
	              "action",
	              '="',
	              actionJavaScriptURL,
	              '"'
	            ),
	            (formTarget$jscomp$1 =
	              formMethod$jscomp$1 =
	              formEncType$jscomp$1 =
	              formAction$jscomp$1 =
	                null),
	            injectFormReplayingRuntime(resumableState, renderState));
	      }
	      null != formAction$jscomp$1 &&
	        pushAttribute(target$jscomp$0, "action", formAction$jscomp$1);
	      null != formEncType$jscomp$1 &&
	        pushAttribute(target$jscomp$0, "encType", formEncType$jscomp$1);
	      null != formMethod$jscomp$1 &&
	        pushAttribute(target$jscomp$0, "method", formMethod$jscomp$1);
	      null != formTarget$jscomp$1 &&
	        pushAttribute(target$jscomp$0, "target", formTarget$jscomp$1);
	      target$jscomp$0.push(">");
	      null !== formActionName &&
	        (target$jscomp$0.push('<input type="hidden"'),
	        pushStringAttribute(target$jscomp$0, "name", formActionName),
	        target$jscomp$0.push("/>"),
	        null != formData$jscomp$1 &&
	          formData$jscomp$1.forEach(pushAdditionalFormField, target$jscomp$0));
	      pushInnerHTML(target$jscomp$0, innerHTML$jscomp$3, children$jscomp$4);
	      if ("string" === typeof children$jscomp$4) {
	        target$jscomp$0.push(escapeTextForBrowser(children$jscomp$4));
	        var JSCompiler_inline_result$jscomp$1 = null;
	      } else JSCompiler_inline_result$jscomp$1 = children$jscomp$4;
	      return JSCompiler_inline_result$jscomp$1;
	    case "menuitem":
	      target$jscomp$0.push(startChunkForTag("menuitem"));
	      for (var propKey$jscomp$6 in props)
	        if (hasOwnProperty.call(props, propKey$jscomp$6)) {
	          var propValue$jscomp$6 = props[propKey$jscomp$6];
	          if (null != propValue$jscomp$6)
	            switch (propKey$jscomp$6) {
	              case "children":
	              case "dangerouslySetInnerHTML":
	                throw Error(formatProdErrorMessage(400));
	              default:
	                pushAttribute(
	                  target$jscomp$0,
	                  propKey$jscomp$6,
	                  propValue$jscomp$6
	                );
	            }
	        }
	      target$jscomp$0.push(">");
	      return null;
	    case "object":
	      target$jscomp$0.push(startChunkForTag("object"));
	      var children$jscomp$5 = null,
	        innerHTML$jscomp$4 = null,
	        propKey$jscomp$7;
	      for (propKey$jscomp$7 in props)
	        if (hasOwnProperty.call(props, propKey$jscomp$7)) {
	          var propValue$jscomp$7 = props[propKey$jscomp$7];
	          if (null != propValue$jscomp$7)
	            switch (propKey$jscomp$7) {
	              case "children":
	                children$jscomp$5 = propValue$jscomp$7;
	                break;
	              case "dangerouslySetInnerHTML":
	                innerHTML$jscomp$4 = propValue$jscomp$7;
	                break;
	              case "data":
	                var sanitizedValue = sanitizeURL("" + propValue$jscomp$7);
	                if ("" === sanitizedValue) break;
	                target$jscomp$0.push(
	                  " ",
	                  "data",
	                  '="',
	                  escapeTextForBrowser(sanitizedValue),
	                  '"'
	                );
	                break;
	              default:
	                pushAttribute(
	                  target$jscomp$0,
	                  propKey$jscomp$7,
	                  propValue$jscomp$7
	                );
	            }
	        }
	      target$jscomp$0.push(">");
	      pushInnerHTML(target$jscomp$0, innerHTML$jscomp$4, children$jscomp$5);
	      if ("string" === typeof children$jscomp$5) {
	        target$jscomp$0.push(escapeTextForBrowser(children$jscomp$5));
	        var JSCompiler_inline_result$jscomp$2 = null;
	      } else JSCompiler_inline_result$jscomp$2 = children$jscomp$5;
	      return JSCompiler_inline_result$jscomp$2;
	    case "title":
	      var noscriptTagInScope = formatContext.tagScope & 1,
	        isFallback = formatContext.tagScope & 4;
	      if (
	        4 === formatContext.insertionMode ||
	        noscriptTagInScope ||
	        null != props.itemProp
	      )
	        var JSCompiler_inline_result$jscomp$3 = pushTitleImpl(
	          target$jscomp$0,
	          props
	        );
	      else
	        isFallback
	          ? (JSCompiler_inline_result$jscomp$3 = null)
	          : (pushTitleImpl(renderState.hoistableChunks, props),
	            (JSCompiler_inline_result$jscomp$3 = void 0));
	      return JSCompiler_inline_result$jscomp$3;
	    case "link":
	      var noscriptTagInScope$jscomp$0 = formatContext.tagScope & 1,
	        isFallback$jscomp$0 = formatContext.tagScope & 4,
	        rel = props.rel,
	        href = props.href,
	        precedence = props.precedence;
	      if (
	        4 === formatContext.insertionMode ||
	        noscriptTagInScope$jscomp$0 ||
	        null != props.itemProp ||
	        "string" !== typeof rel ||
	        "string" !== typeof href ||
	        "" === href
	      ) {
	        pushLinkImpl(target$jscomp$0, props);
	        var JSCompiler_inline_result$jscomp$4 = null;
	      } else if ("stylesheet" === props.rel)
	        if (
	          "string" !== typeof precedence ||
	          null != props.disabled ||
	          props.onLoad ||
	          props.onError
	        )
	          JSCompiler_inline_result$jscomp$4 = pushLinkImpl(
	            target$jscomp$0,
	            props
	          );
	        else {
	          var styleQueue = renderState.styles.get(precedence),
	            resourceState = resumableState.styleResources.hasOwnProperty(href)
	              ? resumableState.styleResources[href]
	              : void 0;
	          if (null !== resourceState) {
	            resumableState.styleResources[href] = null;
	            styleQueue ||
	              ((styleQueue = {
	                precedence: escapeTextForBrowser(precedence),
	                rules: [],
	                hrefs: [],
	                sheets: new Map()
	              }),
	              renderState.styles.set(precedence, styleQueue));
	            var resource = {
	              state: 0,
	              props: assign({}, props, {
	                "data-precedence": props.precedence,
	                precedence: null
	              })
	            };
	            if (resourceState) {
	              2 === resourceState.length &&
	                adoptPreloadCredentials(resource.props, resourceState);
	              var preloadResource = renderState.preloads.stylesheets.get(href);
	              preloadResource && 0 < preloadResource.length
	                ? (preloadResource.length = 0)
	                : (resource.state = 1);
	            }
	            styleQueue.sheets.set(href, resource);
	            hoistableState && hoistableState.stylesheets.add(resource);
	          } else if (styleQueue) {
	            var resource$9 = styleQueue.sheets.get(href);
	            resource$9 &&
	              hoistableState &&
	              hoistableState.stylesheets.add(resource$9);
	          }
	          textEmbedded && target$jscomp$0.push("\x3c!-- --\x3e");
	          JSCompiler_inline_result$jscomp$4 = null;
	        }
	      else
	        props.onLoad || props.onError
	          ? (JSCompiler_inline_result$jscomp$4 = pushLinkImpl(
	              target$jscomp$0,
	              props
	            ))
	          : (textEmbedded && target$jscomp$0.push("\x3c!-- --\x3e"),
	            (JSCompiler_inline_result$jscomp$4 = isFallback$jscomp$0
	              ? null
	              : pushLinkImpl(renderState.hoistableChunks, props)));
	      return JSCompiler_inline_result$jscomp$4;
	    case "script":
	      var noscriptTagInScope$jscomp$1 = formatContext.tagScope & 1,
	        asyncProp = props.async;
	      if (
	        "string" !== typeof props.src ||
	        !props.src ||
	        !asyncProp ||
	        "function" === typeof asyncProp ||
	        "symbol" === typeof asyncProp ||
	        props.onLoad ||
	        props.onError ||
	        4 === formatContext.insertionMode ||
	        noscriptTagInScope$jscomp$1 ||
	        null != props.itemProp
	      )
	        var JSCompiler_inline_result$jscomp$5 = pushScriptImpl(
	          target$jscomp$0,
	          props
	        );
	      else {
	        var key = props.src;
	        if ("module" === props.type) {
	          var resources = resumableState.moduleScriptResources;
	          var preloads = renderState.preloads.moduleScripts;
	        } else
	          (resources = resumableState.scriptResources),
	            (preloads = renderState.preloads.scripts);
	        var resourceState$jscomp$0 = resources.hasOwnProperty(key)
	          ? resources[key]
	          : void 0;
	        if (null !== resourceState$jscomp$0) {
	          resources[key] = null;
	          var scriptProps = props;
	          if (resourceState$jscomp$0) {
	            2 === resourceState$jscomp$0.length &&
	              ((scriptProps = assign({}, props)),
	              adoptPreloadCredentials(scriptProps, resourceState$jscomp$0));
	            var preloadResource$jscomp$0 = preloads.get(key);
	            preloadResource$jscomp$0 && (preloadResource$jscomp$0.length = 0);
	          }
	          var resource$jscomp$0 = [];
	          renderState.scripts.add(resource$jscomp$0);
	          pushScriptImpl(resource$jscomp$0, scriptProps);
	        }
	        textEmbedded && target$jscomp$0.push("\x3c!-- --\x3e");
	        JSCompiler_inline_result$jscomp$5 = null;
	      }
	      return JSCompiler_inline_result$jscomp$5;
	    case "style":
	      var noscriptTagInScope$jscomp$2 = formatContext.tagScope & 1,
	        precedence$jscomp$0 = props.precedence,
	        href$jscomp$0 = props.href,
	        nonce = props.nonce;
	      if (
	        4 === formatContext.insertionMode ||
	        noscriptTagInScope$jscomp$2 ||
	        null != props.itemProp ||
	        "string" !== typeof precedence$jscomp$0 ||
	        "string" !== typeof href$jscomp$0 ||
	        "" === href$jscomp$0
	      ) {
	        target$jscomp$0.push(startChunkForTag("style"));
	        var children$jscomp$6 = null,
	          innerHTML$jscomp$5 = null,
	          propKey$jscomp$8;
	        for (propKey$jscomp$8 in props)
	          if (hasOwnProperty.call(props, propKey$jscomp$8)) {
	            var propValue$jscomp$8 = props[propKey$jscomp$8];
	            if (null != propValue$jscomp$8)
	              switch (propKey$jscomp$8) {
	                case "children":
	                  children$jscomp$6 = propValue$jscomp$8;
	                  break;
	                case "dangerouslySetInnerHTML":
	                  innerHTML$jscomp$5 = propValue$jscomp$8;
	                  break;
	                default:
	                  pushAttribute(
	                    target$jscomp$0,
	                    propKey$jscomp$8,
	                    propValue$jscomp$8
	                  );
	              }
	          }
	        target$jscomp$0.push(">");
	        var child = Array.isArray(children$jscomp$6)
	          ? 2 > children$jscomp$6.length
	            ? children$jscomp$6[0]
	            : null
	          : children$jscomp$6;
	        "function" !== typeof child &&
	          "symbol" !== typeof child &&
	          null !== child &&
	          void 0 !== child &&
	          target$jscomp$0.push(("" + child).replace(styleRegex, styleReplacer));
	        pushInnerHTML(target$jscomp$0, innerHTML$jscomp$5, children$jscomp$6);
	        target$jscomp$0.push(endChunkForTag("style"));
	        var JSCompiler_inline_result$jscomp$6 = null;
	      } else {
	        var styleQueue$jscomp$0 = renderState.styles.get(precedence$jscomp$0);
	        if (
	          null !==
	          (resumableState.styleResources.hasOwnProperty(href$jscomp$0)
	            ? resumableState.styleResources[href$jscomp$0]
	            : void 0)
	        ) {
	          resumableState.styleResources[href$jscomp$0] = null;
	          styleQueue$jscomp$0 ||
	            ((styleQueue$jscomp$0 = {
	              precedence: escapeTextForBrowser(precedence$jscomp$0),
	              rules: [],
	              hrefs: [],
	              sheets: new Map()
	            }),
	            renderState.styles.set(precedence$jscomp$0, styleQueue$jscomp$0));
	          var nonceStyle = renderState.nonce.style;
	          if (!nonceStyle || nonceStyle === nonce) {
	            styleQueue$jscomp$0.hrefs.push(escapeTextForBrowser(href$jscomp$0));
	            var target = styleQueue$jscomp$0.rules,
	              children$jscomp$7 = null,
	              innerHTML$jscomp$6 = null,
	              propKey$jscomp$9;
	            for (propKey$jscomp$9 in props)
	              if (hasOwnProperty.call(props, propKey$jscomp$9)) {
	                var propValue$jscomp$9 = props[propKey$jscomp$9];
	                if (null != propValue$jscomp$9)
	                  switch (propKey$jscomp$9) {
	                    case "children":
	                      children$jscomp$7 = propValue$jscomp$9;
	                      break;
	                    case "dangerouslySetInnerHTML":
	                      innerHTML$jscomp$6 = propValue$jscomp$9;
	                  }
	              }
	            var child$jscomp$0 = Array.isArray(children$jscomp$7)
	              ? 2 > children$jscomp$7.length
	                ? children$jscomp$7[0]
	                : null
	              : children$jscomp$7;
	            "function" !== typeof child$jscomp$0 &&
	              "symbol" !== typeof child$jscomp$0 &&
	              null !== child$jscomp$0 &&
	              void 0 !== child$jscomp$0 &&
	              target.push(
	                ("" + child$jscomp$0).replace(styleRegex, styleReplacer)
	              );
	            pushInnerHTML(target, innerHTML$jscomp$6, children$jscomp$7);
	          }
	        }
	        styleQueue$jscomp$0 &&
	          hoistableState &&
	          hoistableState.styles.add(styleQueue$jscomp$0);
	        textEmbedded && target$jscomp$0.push("\x3c!-- --\x3e");
	        JSCompiler_inline_result$jscomp$6 = void 0;
	      }
	      return JSCompiler_inline_result$jscomp$6;
	    case "meta":
	      var noscriptTagInScope$jscomp$3 = formatContext.tagScope & 1,
	        isFallback$jscomp$1 = formatContext.tagScope & 4;
	      if (
	        4 === formatContext.insertionMode ||
	        noscriptTagInScope$jscomp$3 ||
	        null != props.itemProp
	      )
	        var JSCompiler_inline_result$jscomp$7 = pushSelfClosing(
	          target$jscomp$0,
	          props,
	          "meta"
	        );
	      else
	        textEmbedded && target$jscomp$0.push("\x3c!-- --\x3e"),
	          (JSCompiler_inline_result$jscomp$7 = isFallback$jscomp$1
	            ? null
	            : "string" === typeof props.charSet
	              ? pushSelfClosing(renderState.charsetChunks, props, "meta")
	              : "viewport" === props.name
	                ? pushSelfClosing(renderState.viewportChunks, props, "meta")
	                : pushSelfClosing(renderState.hoistableChunks, props, "meta"));
	      return JSCompiler_inline_result$jscomp$7;
	    case "listing":
	    case "pre":
	      target$jscomp$0.push(startChunkForTag(type));
	      var children$jscomp$8 = null,
	        innerHTML$jscomp$7 = null,
	        propKey$jscomp$10;
	      for (propKey$jscomp$10 in props)
	        if (hasOwnProperty.call(props, propKey$jscomp$10)) {
	          var propValue$jscomp$10 = props[propKey$jscomp$10];
	          if (null != propValue$jscomp$10)
	            switch (propKey$jscomp$10) {
	              case "children":
	                children$jscomp$8 = propValue$jscomp$10;
	                break;
	              case "dangerouslySetInnerHTML":
	                innerHTML$jscomp$7 = propValue$jscomp$10;
	                break;
	              default:
	                pushAttribute(
	                  target$jscomp$0,
	                  propKey$jscomp$10,
	                  propValue$jscomp$10
	                );
	            }
	        }
	      target$jscomp$0.push(">");
	      if (null != innerHTML$jscomp$7) {
	        if (null != children$jscomp$8) throw Error(formatProdErrorMessage(60));
	        if (
	          "object" !== typeof innerHTML$jscomp$7 ||
	          !("__html" in innerHTML$jscomp$7)
	        )
	          throw Error(formatProdErrorMessage(61));
	        var html = innerHTML$jscomp$7.__html;
	        null !== html &&
	          void 0 !== html &&
	          ("string" === typeof html && 0 < html.length && "\n" === html[0]
	            ? target$jscomp$0.push("\n", html)
	            : target$jscomp$0.push("" + html));
	      }
	      "string" === typeof children$jscomp$8 &&
	        "\n" === children$jscomp$8[0] &&
	        target$jscomp$0.push("\n");
	      return children$jscomp$8;
	    case "img":
	      var pictureOrNoScriptTagInScope = formatContext.tagScope & 3,
	        src = props.src,
	        srcSet = props.srcSet;
	      if (
	        !(
	          "lazy" === props.loading ||
	          (!src && !srcSet) ||
	          ("string" !== typeof src && null != src) ||
	          ("string" !== typeof srcSet && null != srcSet) ||
	          "low" === props.fetchPriority ||
	          pictureOrNoScriptTagInScope
	        ) &&
	        ("string" !== typeof src ||
	          ":" !== src[4] ||
	          ("d" !== src[0] && "D" !== src[0]) ||
	          ("a" !== src[1] && "A" !== src[1]) ||
	          ("t" !== src[2] && "T" !== src[2]) ||
	          ("a" !== src[3] && "A" !== src[3])) &&
	        ("string" !== typeof srcSet ||
	          ":" !== srcSet[4] ||
	          ("d" !== srcSet[0] && "D" !== srcSet[0]) ||
	          ("a" !== srcSet[1] && "A" !== srcSet[1]) ||
	          ("t" !== srcSet[2] && "T" !== srcSet[2]) ||
	          ("a" !== srcSet[3] && "A" !== srcSet[3]))
	      ) {
	        null !== hoistableState &&
	          formatContext.tagScope & 64 &&
	          (hoistableState.suspenseyImages = true);
	        var sizes = "string" === typeof props.sizes ? props.sizes : void 0,
	          key$jscomp$0 = srcSet ? srcSet + "\n" + (sizes || "") : src,
	          promotablePreloads = renderState.preloads.images,
	          resource$jscomp$1 = promotablePreloads.get(key$jscomp$0);
	        if (resource$jscomp$1) {
	          if (
	            "high" === props.fetchPriority ||
	            10 > renderState.highImagePreloads.size
	          )
	            promotablePreloads.delete(key$jscomp$0),
	              renderState.highImagePreloads.add(resource$jscomp$1);
	        } else if (
	          !resumableState.imageResources.hasOwnProperty(key$jscomp$0)
	        ) {
	          resumableState.imageResources[key$jscomp$0] = PRELOAD_NO_CREDS;
	          var input = props.crossOrigin;
	          var JSCompiler_inline_result$jscomp$8 =
	            "string" === typeof input
	              ? "use-credentials" === input
	                ? input
	                : ""
	              : void 0;
	          var headers = renderState.headers,
	            header;
	          headers &&
	          0 < headers.remainingCapacity &&
	          "string" !== typeof props.srcSet &&
	          ("high" === props.fetchPriority ||
	            500 > headers.highImagePreloads.length) &&
	          ((header = getPreloadAsHeader(src, "image", {
	            imageSrcSet: props.srcSet,
	            imageSizes: props.sizes,
	            crossOrigin: JSCompiler_inline_result$jscomp$8,
	            integrity: props.integrity,
	            nonce: props.nonce,
	            type: props.type,
	            fetchPriority: props.fetchPriority,
	            referrerPolicy: props.refererPolicy
	          })),
	          0 <= (headers.remainingCapacity -= header.length + 2))
	            ? ((renderState.resets.image[key$jscomp$0] = PRELOAD_NO_CREDS),
	              headers.highImagePreloads && (headers.highImagePreloads += ", "),
	              (headers.highImagePreloads += header))
	            : ((resource$jscomp$1 = []),
	              pushLinkImpl(resource$jscomp$1, {
	                rel: "preload",
	                as: "image",
	                href: srcSet ? void 0 : src,
	                imageSrcSet: srcSet,
	                imageSizes: sizes,
	                crossOrigin: JSCompiler_inline_result$jscomp$8,
	                integrity: props.integrity,
	                type: props.type,
	                fetchPriority: props.fetchPriority,
	                referrerPolicy: props.referrerPolicy
	              }),
	              "high" === props.fetchPriority ||
	              10 > renderState.highImagePreloads.size
	                ? renderState.highImagePreloads.add(resource$jscomp$1)
	                : (renderState.bulkPreloads.add(resource$jscomp$1),
	                  promotablePreloads.set(key$jscomp$0, resource$jscomp$1)));
	        }
	      }
	      return pushSelfClosing(target$jscomp$0, props, "img");
	    case "base":
	    case "area":
	    case "br":
	    case "col":
	    case "embed":
	    case "hr":
	    case "keygen":
	    case "param":
	    case "source":
	    case "track":
	    case "wbr":
	      return pushSelfClosing(target$jscomp$0, props, type);
	    case "annotation-xml":
	    case "color-profile":
	    case "font-face":
	    case "font-face-src":
	    case "font-face-uri":
	    case "font-face-format":
	    case "font-face-name":
	    case "missing-glyph":
	      break;
	    case "head":
	      if (2 > formatContext.insertionMode) {
	        var preamble = preambleState || renderState.preamble;
	        if (preamble.headChunks)
	          throw Error(formatProdErrorMessage(545, "`<head>`"));
	        null !== preambleState && target$jscomp$0.push("\x3c!--head--\x3e");
	        preamble.headChunks = [];
	        var JSCompiler_inline_result$jscomp$9 = pushStartSingletonElement(
	          preamble.headChunks,
	          props,
	          "head"
	        );
	      } else
	        JSCompiler_inline_result$jscomp$9 = pushStartGenericElement(
	          target$jscomp$0,
	          props,
	          "head"
	        );
	      return JSCompiler_inline_result$jscomp$9;
	    case "body":
	      if (2 > formatContext.insertionMode) {
	        var preamble$jscomp$0 = preambleState || renderState.preamble;
	        if (preamble$jscomp$0.bodyChunks)
	          throw Error(formatProdErrorMessage(545, "`<body>`"));
	        null !== preambleState && target$jscomp$0.push("\x3c!--body--\x3e");
	        preamble$jscomp$0.bodyChunks = [];
	        var JSCompiler_inline_result$jscomp$10 = pushStartSingletonElement(
	          preamble$jscomp$0.bodyChunks,
	          props,
	          "body"
	        );
	      } else
	        JSCompiler_inline_result$jscomp$10 = pushStartGenericElement(
	          target$jscomp$0,
	          props,
	          "body"
	        );
	      return JSCompiler_inline_result$jscomp$10;
	    case "html":
	      if (0 === formatContext.insertionMode) {
	        var preamble$jscomp$1 = preambleState || renderState.preamble;
	        if (preamble$jscomp$1.htmlChunks)
	          throw Error(formatProdErrorMessage(545, "`<html>`"));
	        null !== preambleState && target$jscomp$0.push("\x3c!--html--\x3e");
	        preamble$jscomp$1.htmlChunks = [""];
	        var JSCompiler_inline_result$jscomp$11 = pushStartSingletonElement(
	          preamble$jscomp$1.htmlChunks,
	          props,
	          "html"
	        );
	      } else
	        JSCompiler_inline_result$jscomp$11 = pushStartGenericElement(
	          target$jscomp$0,
	          props,
	          "html"
	        );
	      return JSCompiler_inline_result$jscomp$11;
	    default:
	      if (-1 !== type.indexOf("-")) {
	        target$jscomp$0.push(startChunkForTag(type));
	        var children$jscomp$9 = null,
	          innerHTML$jscomp$8 = null,
	          propKey$jscomp$11;
	        for (propKey$jscomp$11 in props)
	          if (hasOwnProperty.call(props, propKey$jscomp$11)) {
	            var propValue$jscomp$11 = props[propKey$jscomp$11];
	            if (null != propValue$jscomp$11) {
	              var attributeName = propKey$jscomp$11;
	              switch (propKey$jscomp$11) {
	                case "children":
	                  children$jscomp$9 = propValue$jscomp$11;
	                  break;
	                case "dangerouslySetInnerHTML":
	                  innerHTML$jscomp$8 = propValue$jscomp$11;
	                  break;
	                case "style":
	                  pushStyleAttribute(target$jscomp$0, propValue$jscomp$11);
	                  break;
	                case "suppressContentEditableWarning":
	                case "suppressHydrationWarning":
	                case "ref":
	                  break;
	                case "className":
	                  attributeName = "class";
	                default:
	                  if (
	                    isAttributeNameSafe(propKey$jscomp$11) &&
	                    "function" !== typeof propValue$jscomp$11 &&
	                    "symbol" !== typeof propValue$jscomp$11 &&
	                    false !== propValue$jscomp$11
	                  ) {
	                    if (true === propValue$jscomp$11) propValue$jscomp$11 = "";
	                    else if ("object" === typeof propValue$jscomp$11) continue;
	                    target$jscomp$0.push(
	                      " ",
	                      attributeName,
	                      '="',
	                      escapeTextForBrowser(propValue$jscomp$11),
	                      '"'
	                    );
	                  }
	              }
	            }
	          }
	        target$jscomp$0.push(">");
	        pushInnerHTML(target$jscomp$0, innerHTML$jscomp$8, children$jscomp$9);
	        return children$jscomp$9;
	      }
	  }
	  return pushStartGenericElement(target$jscomp$0, props, type);
	}
	var endTagCache = new Map();
	function endChunkForTag(tag) {
	  var chunk = endTagCache.get(tag);
	  void 0 === chunk && ((chunk = "</" + tag + ">"), endTagCache.set(tag, chunk));
	  return chunk;
	}
	function hoistPreambleState(renderState, preambleState) {
	  renderState = renderState.preamble;
	  null === renderState.htmlChunks &&
	    preambleState.htmlChunks &&
	    (renderState.htmlChunks = preambleState.htmlChunks);
	  null === renderState.headChunks &&
	    preambleState.headChunks &&
	    (renderState.headChunks = preambleState.headChunks);
	  null === renderState.bodyChunks &&
	    preambleState.bodyChunks &&
	    (renderState.bodyChunks = preambleState.bodyChunks);
	}
	function writeBootstrap(destination, renderState) {
	  renderState = renderState.bootstrapChunks;
	  for (var i = 0; i < renderState.length - 1; i++)
	    destination.push(renderState[i]);
	  return i < renderState.length
	    ? ((i = renderState[i]), (renderState.length = 0), destination.push(i))
	    : true;
	}
	function writeStartPendingSuspenseBoundary(destination, renderState, id) {
	  destination.push('\x3c!--$?--\x3e<template id="');
	  if (null === id) throw Error(formatProdErrorMessage(395));
	  destination.push(renderState.boundaryPrefix);
	  renderState = id.toString(16);
	  destination.push(renderState);
	  return destination.push('"></template>');
	}
	function writeStartSegment(destination, renderState, formatContext, id) {
	  switch (formatContext.insertionMode) {
	    case 0:
	    case 1:
	    case 3:
	    case 2:
	      return (
	        destination.push('<div hidden id="'),
	        destination.push(renderState.segmentPrefix),
	        (renderState = id.toString(16)),
	        destination.push(renderState),
	        destination.push('">')
	      );
	    case 4:
	      return (
	        destination.push('<svg aria-hidden="true" style="display:none" id="'),
	        destination.push(renderState.segmentPrefix),
	        (renderState = id.toString(16)),
	        destination.push(renderState),
	        destination.push('">')
	      );
	    case 5:
	      return (
	        destination.push('<math aria-hidden="true" style="display:none" id="'),
	        destination.push(renderState.segmentPrefix),
	        (renderState = id.toString(16)),
	        destination.push(renderState),
	        destination.push('">')
	      );
	    case 6:
	      return (
	        destination.push('<table hidden id="'),
	        destination.push(renderState.segmentPrefix),
	        (renderState = id.toString(16)),
	        destination.push(renderState),
	        destination.push('">')
	      );
	    case 7:
	      return (
	        destination.push('<table hidden><tbody id="'),
	        destination.push(renderState.segmentPrefix),
	        (renderState = id.toString(16)),
	        destination.push(renderState),
	        destination.push('">')
	      );
	    case 8:
	      return (
	        destination.push('<table hidden><tr id="'),
	        destination.push(renderState.segmentPrefix),
	        (renderState = id.toString(16)),
	        destination.push(renderState),
	        destination.push('">')
	      );
	    case 9:
	      return (
	        destination.push('<table hidden><colgroup id="'),
	        destination.push(renderState.segmentPrefix),
	        (renderState = id.toString(16)),
	        destination.push(renderState),
	        destination.push('">')
	      );
	    default:
	      throw Error(formatProdErrorMessage(397));
	  }
	}
	function writeEndSegment(destination, formatContext) {
	  switch (formatContext.insertionMode) {
	    case 0:
	    case 1:
	    case 3:
	    case 2:
	      return destination.push("</div>");
	    case 4:
	      return destination.push("</svg>");
	    case 5:
	      return destination.push("</math>");
	    case 6:
	      return destination.push("</table>");
	    case 7:
	      return destination.push("</tbody></table>");
	    case 8:
	      return destination.push("</tr></table>");
	    case 9:
	      return destination.push("</colgroup></table>");
	    default:
	      throw Error(formatProdErrorMessage(397));
	  }
	}
	var regexForJSStringsInInstructionScripts = /[<\u2028\u2029]/g;
	function escapeJSStringsForInstructionScripts(input) {
	  return JSON.stringify(input).replace(
	    regexForJSStringsInInstructionScripts,
	    function (match) {
	      switch (match) {
	        case "<":
	          return "\\u003c";
	        case "\u2028":
	          return "\\u2028";
	        case "\u2029":
	          return "\\u2029";
	        default:
	          throw Error(
	            "escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
	          );
	      }
	    }
	  );
	}
	var regexForJSStringsInScripts = /[&><\u2028\u2029]/g;
	function escapeJSObjectForInstructionScripts(input) {
	  return JSON.stringify(input).replace(
	    regexForJSStringsInScripts,
	    function (match) {
	      switch (match) {
	        case "&":
	          return "\\u0026";
	        case ">":
	          return "\\u003e";
	        case "<":
	          return "\\u003c";
	        case "\u2028":
	          return "\\u2028";
	        case "\u2029":
	          return "\\u2029";
	        default:
	          throw Error(
	            "escapeJSObjectForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
	          );
	      }
	    }
	  );
	}
	var currentlyRenderingBoundaryHasStylesToHoist = false,
	  destinationHasCapacity = true;
	function flushStyleTagsLateForBoundary(styleQueue) {
	  var rules = styleQueue.rules,
	    hrefs = styleQueue.hrefs,
	    i = 0;
	  if (hrefs.length) {
	    this.push(currentlyFlushingRenderState.startInlineStyle);
	    this.push(' media="not all" data-precedence="');
	    this.push(styleQueue.precedence);
	    for (this.push('" data-href="'); i < hrefs.length - 1; i++)
	      this.push(hrefs[i]), this.push(" ");
	    this.push(hrefs[i]);
	    this.push('">');
	    for (i = 0; i < rules.length; i++) this.push(rules[i]);
	    destinationHasCapacity = this.push("</style>");
	    currentlyRenderingBoundaryHasStylesToHoist = true;
	    rules.length = 0;
	    hrefs.length = 0;
	  }
	}
	function hasStylesToHoist(stylesheet) {
	  return 2 !== stylesheet.state
	    ? (currentlyRenderingBoundaryHasStylesToHoist = true)
	    : false;
	}
	function writeHoistablesForBoundary(destination, hoistableState, renderState) {
	  currentlyRenderingBoundaryHasStylesToHoist = false;
	  destinationHasCapacity = true;
	  currentlyFlushingRenderState = renderState;
	  hoistableState.styles.forEach(flushStyleTagsLateForBoundary, destination);
	  currentlyFlushingRenderState = null;
	  hoistableState.stylesheets.forEach(hasStylesToHoist);
	  currentlyRenderingBoundaryHasStylesToHoist &&
	    (renderState.stylesToHoist = true);
	  return destinationHasCapacity;
	}
	function flushResource(resource) {
	  for (var i = 0; i < resource.length; i++) this.push(resource[i]);
	  resource.length = 0;
	}
	var stylesheetFlushingQueue = [];
	function flushStyleInPreamble(stylesheet) {
	  pushLinkImpl(stylesheetFlushingQueue, stylesheet.props);
	  for (var i = 0; i < stylesheetFlushingQueue.length; i++)
	    this.push(stylesheetFlushingQueue[i]);
	  stylesheetFlushingQueue.length = 0;
	  stylesheet.state = 2;
	}
	function flushStylesInPreamble(styleQueue) {
	  var hasStylesheets = 0 < styleQueue.sheets.size;
	  styleQueue.sheets.forEach(flushStyleInPreamble, this);
	  styleQueue.sheets.clear();
	  var rules = styleQueue.rules,
	    hrefs = styleQueue.hrefs;
	  if (!hasStylesheets || hrefs.length) {
	    this.push(currentlyFlushingRenderState.startInlineStyle);
	    this.push(' data-precedence="');
	    this.push(styleQueue.precedence);
	    styleQueue = 0;
	    if (hrefs.length) {
	      for (
	        this.push('" data-href="');
	        styleQueue < hrefs.length - 1;
	        styleQueue++
	      )
	        this.push(hrefs[styleQueue]), this.push(" ");
	      this.push(hrefs[styleQueue]);
	    }
	    this.push('">');
	    for (styleQueue = 0; styleQueue < rules.length; styleQueue++)
	      this.push(rules[styleQueue]);
	    this.push("</style>");
	    rules.length = 0;
	    hrefs.length = 0;
	  }
	}
	function preloadLateStyle(stylesheet) {
	  if (0 === stylesheet.state) {
	    stylesheet.state = 1;
	    var props = stylesheet.props;
	    pushLinkImpl(stylesheetFlushingQueue, {
	      rel: "preload",
	      as: "style",
	      href: stylesheet.props.href,
	      crossOrigin: props.crossOrigin,
	      fetchPriority: props.fetchPriority,
	      integrity: props.integrity,
	      media: props.media,
	      hrefLang: props.hrefLang,
	      referrerPolicy: props.referrerPolicy
	    });
	    for (
	      stylesheet = 0;
	      stylesheet < stylesheetFlushingQueue.length;
	      stylesheet++
	    )
	      this.push(stylesheetFlushingQueue[stylesheet]);
	    stylesheetFlushingQueue.length = 0;
	  }
	}
	function preloadLateStyles(styleQueue) {
	  styleQueue.sheets.forEach(preloadLateStyle, this);
	  styleQueue.sheets.clear();
	}
	function pushCompletedShellIdAttribute(target, resumableState) {
	  0 === (resumableState.instructions & 32) &&
	    ((resumableState.instructions |= 32),
	    target.push(
	      ' id="',
	      escapeTextForBrowser("_" + resumableState.idPrefix + "R_"),
	      '"'
	    ));
	}
	function writeStyleResourceDependenciesInJS(destination, hoistableState) {
	  destination.push("[");
	  var nextArrayOpenBrackChunk = "[";
	  hoistableState.stylesheets.forEach(function (resource) {
	    if (2 !== resource.state)
	      if (3 === resource.state)
	        destination.push(nextArrayOpenBrackChunk),
	          (resource = escapeJSObjectForInstructionScripts(
	            "" + resource.props.href
	          )),
	          destination.push(resource),
	          destination.push("]"),
	          (nextArrayOpenBrackChunk = ",[");
	      else {
	        destination.push(nextArrayOpenBrackChunk);
	        var precedence = resource.props["data-precedence"],
	          props = resource.props,
	          coercedHref = sanitizeURL("" + resource.props.href);
	        coercedHref = escapeJSObjectForInstructionScripts(coercedHref);
	        destination.push(coercedHref);
	        precedence = "" + precedence;
	        destination.push(",");
	        precedence = escapeJSObjectForInstructionScripts(precedence);
	        destination.push(precedence);
	        for (var propKey in props)
	          if (
	            hasOwnProperty.call(props, propKey) &&
	            ((precedence = props[propKey]), null != precedence)
	          )
	            switch (propKey) {
	              case "href":
	              case "rel":
	              case "precedence":
	              case "data-precedence":
	                break;
	              case "children":
	              case "dangerouslySetInnerHTML":
	                throw Error(formatProdErrorMessage(399, "link"));
	              default:
	                writeStyleResourceAttributeInJS(
	                  destination,
	                  propKey,
	                  precedence
	                );
	            }
	        destination.push("]");
	        nextArrayOpenBrackChunk = ",[";
	        resource.state = 3;
	      }
	  });
	  destination.push("]");
	}
	function writeStyleResourceAttributeInJS(destination, name, value) {
	  var attributeName = name.toLowerCase();
	  switch (typeof value) {
	    case "function":
	    case "symbol":
	      return;
	  }
	  switch (name) {
	    case "innerHTML":
	    case "dangerouslySetInnerHTML":
	    case "suppressContentEditableWarning":
	    case "suppressHydrationWarning":
	    case "style":
	    case "ref":
	      return;
	    case "className":
	      attributeName = "class";
	      name = "" + value;
	      break;
	    case "hidden":
	      if (false === value) return;
	      name = "";
	      break;
	    case "src":
	    case "href":
	      value = sanitizeURL(value);
	      name = "" + value;
	      break;
	    default:
	      if (
	        (2 < name.length &&
	          ("o" === name[0] || "O" === name[0]) &&
	          ("n" === name[1] || "N" === name[1])) ||
	        !isAttributeNameSafe(name)
	      )
	        return;
	      name = "" + value;
	  }
	  destination.push(",");
	  attributeName = escapeJSObjectForInstructionScripts(attributeName);
	  destination.push(attributeName);
	  destination.push(",");
	  attributeName = escapeJSObjectForInstructionScripts(name);
	  destination.push(attributeName);
	}
	function createHoistableState() {
	  return { styles: new Set(), stylesheets: new Set(), suspenseyImages: false };
	}
	function prefetchDNS(href) {
	  var request = currentRequest ? currentRequest : null;
	  if (request) {
	    var resumableState = request.resumableState,
	      renderState = request.renderState;
	    if ("string" === typeof href && href) {
	      if (!resumableState.dnsResources.hasOwnProperty(href)) {
	        resumableState.dnsResources[href] = null;
	        resumableState = renderState.headers;
	        var header, JSCompiler_temp;
	        if (
	          (JSCompiler_temp =
	            resumableState && 0 < resumableState.remainingCapacity)
	        )
	          JSCompiler_temp =
	            ((header =
	              "<" +
	              ("" + href).replace(
	                regexForHrefInLinkHeaderURLContext,
	                escapeHrefForLinkHeaderURLContextReplacer
	              ) +
	              ">; rel=dns-prefetch"),
	            0 <= (resumableState.remainingCapacity -= header.length + 2));
	        JSCompiler_temp
	          ? ((renderState.resets.dns[href] = null),
	            resumableState.preconnects && (resumableState.preconnects += ", "),
	            (resumableState.preconnects += header))
	          : ((header = []),
	            pushLinkImpl(header, { href: href, rel: "dns-prefetch" }),
	            renderState.preconnects.add(header));
	      }
	      enqueueFlush(request);
	    }
	  } else previousDispatcher.D(href);
	}
	function preconnect(href, crossOrigin) {
	  var request = currentRequest ? currentRequest : null;
	  if (request) {
	    var resumableState = request.resumableState,
	      renderState = request.renderState;
	    if ("string" === typeof href && href) {
	      var bucket =
	        "use-credentials" === crossOrigin
	          ? "credentials"
	          : "string" === typeof crossOrigin
	            ? "anonymous"
	            : "default";
	      if (!resumableState.connectResources[bucket].hasOwnProperty(href)) {
	        resumableState.connectResources[bucket][href] = null;
	        resumableState = renderState.headers;
	        var header, JSCompiler_temp;
	        if (
	          (JSCompiler_temp =
	            resumableState && 0 < resumableState.remainingCapacity)
	        ) {
	          JSCompiler_temp =
	            "<" +
	            ("" + href).replace(
	              regexForHrefInLinkHeaderURLContext,
	              escapeHrefForLinkHeaderURLContextReplacer
	            ) +
	            ">; rel=preconnect";
	          if ("string" === typeof crossOrigin) {
	            var escapedCrossOrigin = ("" + crossOrigin).replace(
	              regexForLinkHeaderQuotedParamValueContext,
	              escapeStringForLinkHeaderQuotedParamValueContextReplacer
	            );
	            JSCompiler_temp += '; crossorigin="' + escapedCrossOrigin + '"';
	          }
	          JSCompiler_temp =
	            ((header = JSCompiler_temp),
	            0 <= (resumableState.remainingCapacity -= header.length + 2));
	        }
	        JSCompiler_temp
	          ? ((renderState.resets.connect[bucket][href] = null),
	            resumableState.preconnects && (resumableState.preconnects += ", "),
	            (resumableState.preconnects += header))
	          : ((bucket = []),
	            pushLinkImpl(bucket, {
	              rel: "preconnect",
	              href: href,
	              crossOrigin: crossOrigin
	            }),
	            renderState.preconnects.add(bucket));
	      }
	      enqueueFlush(request);
	    }
	  } else previousDispatcher.C(href, crossOrigin);
	}
	function preload(href, as, options) {
	  var request = currentRequest ? currentRequest : null;
	  if (request) {
	    var resumableState = request.resumableState,
	      renderState = request.renderState;
	    if (as && href) {
	      switch (as) {
	        case "image":
	          if (options) {
	            var imageSrcSet = options.imageSrcSet;
	            var imageSizes = options.imageSizes;
	            var fetchPriority = options.fetchPriority;
	          }
	          var key = imageSrcSet
	            ? imageSrcSet + "\n" + (imageSizes || "")
	            : href;
	          if (resumableState.imageResources.hasOwnProperty(key)) return;
	          resumableState.imageResources[key] = PRELOAD_NO_CREDS;
	          resumableState = renderState.headers;
	          var header;
	          resumableState &&
	          0 < resumableState.remainingCapacity &&
	          "string" !== typeof imageSrcSet &&
	          "high" === fetchPriority &&
	          ((header = getPreloadAsHeader(href, as, options)),
	          0 <= (resumableState.remainingCapacity -= header.length + 2))
	            ? ((renderState.resets.image[key] = PRELOAD_NO_CREDS),
	              resumableState.highImagePreloads &&
	                (resumableState.highImagePreloads += ", "),
	              (resumableState.highImagePreloads += header))
	            : ((resumableState = []),
	              pushLinkImpl(
	                resumableState,
	                assign(
	                  { rel: "preload", href: imageSrcSet ? void 0 : href, as: as },
	                  options
	                )
	              ),
	              "high" === fetchPriority
	                ? renderState.highImagePreloads.add(resumableState)
	                : (renderState.bulkPreloads.add(resumableState),
	                  renderState.preloads.images.set(key, resumableState)));
	          break;
	        case "style":
	          if (resumableState.styleResources.hasOwnProperty(href)) return;
	          imageSrcSet = [];
	          pushLinkImpl(
	            imageSrcSet,
	            assign({ rel: "preload", href: href, as: as }, options)
	          );
	          resumableState.styleResources[href] =
	            !options ||
	            ("string" !== typeof options.crossOrigin &&
	              "string" !== typeof options.integrity)
	              ? PRELOAD_NO_CREDS
	              : [options.crossOrigin, options.integrity];
	          renderState.preloads.stylesheets.set(href, imageSrcSet);
	          renderState.bulkPreloads.add(imageSrcSet);
	          break;
	        case "script":
	          if (resumableState.scriptResources.hasOwnProperty(href)) return;
	          imageSrcSet = [];
	          renderState.preloads.scripts.set(href, imageSrcSet);
	          renderState.bulkPreloads.add(imageSrcSet);
	          pushLinkImpl(
	            imageSrcSet,
	            assign({ rel: "preload", href: href, as: as }, options)
	          );
	          resumableState.scriptResources[href] =
	            !options ||
	            ("string" !== typeof options.crossOrigin &&
	              "string" !== typeof options.integrity)
	              ? PRELOAD_NO_CREDS
	              : [options.crossOrigin, options.integrity];
	          break;
	        default:
	          if (resumableState.unknownResources.hasOwnProperty(as)) {
	            if (
	              ((imageSrcSet = resumableState.unknownResources[as]),
	              imageSrcSet.hasOwnProperty(href))
	            )
	              return;
	          } else
	            (imageSrcSet = {}),
	              (resumableState.unknownResources[as] = imageSrcSet);
	          imageSrcSet[href] = PRELOAD_NO_CREDS;
	          if (
	            (resumableState = renderState.headers) &&
	            0 < resumableState.remainingCapacity &&
	            "font" === as &&
	            ((key = getPreloadAsHeader(href, as, options)),
	            0 <= (resumableState.remainingCapacity -= key.length + 2))
	          )
	            (renderState.resets.font[href] = PRELOAD_NO_CREDS),
	              resumableState.fontPreloads &&
	                (resumableState.fontPreloads += ", "),
	              (resumableState.fontPreloads += key);
	          else
	            switch (
	              ((resumableState = []),
	              (href = assign({ rel: "preload", href: href, as: as }, options)),
	              pushLinkImpl(resumableState, href),
	              as)
	            ) {
	              case "font":
	                renderState.fontPreloads.add(resumableState);
	                break;
	              default:
	                renderState.bulkPreloads.add(resumableState);
	            }
	      }
	      enqueueFlush(request);
	    }
	  } else previousDispatcher.L(href, as, options);
	}
	function preloadModule(href, options) {
	  var request = currentRequest ? currentRequest : null;
	  if (request) {
	    var resumableState = request.resumableState,
	      renderState = request.renderState;
	    if (href) {
	      var as =
	        options && "string" === typeof options.as ? options.as : "script";
	      switch (as) {
	        case "script":
	          if (resumableState.moduleScriptResources.hasOwnProperty(href)) return;
	          as = [];
	          resumableState.moduleScriptResources[href] =
	            !options ||
	            ("string" !== typeof options.crossOrigin &&
	              "string" !== typeof options.integrity)
	              ? PRELOAD_NO_CREDS
	              : [options.crossOrigin, options.integrity];
	          renderState.preloads.moduleScripts.set(href, as);
	          break;
	        default:
	          if (resumableState.moduleUnknownResources.hasOwnProperty(as)) {
	            var resources = resumableState.unknownResources[as];
	            if (resources.hasOwnProperty(href)) return;
	          } else
	            (resources = {}),
	              (resumableState.moduleUnknownResources[as] = resources);
	          as = [];
	          resources[href] = PRELOAD_NO_CREDS;
	      }
	      pushLinkImpl(as, assign({ rel: "modulepreload", href: href }, options));
	      renderState.bulkPreloads.add(as);
	      enqueueFlush(request);
	    }
	  } else previousDispatcher.m(href, options);
	}
	function preinitStyle(href, precedence, options) {
	  var request = currentRequest ? currentRequest : null;
	  if (request) {
	    var resumableState = request.resumableState,
	      renderState = request.renderState;
	    if (href) {
	      precedence = precedence || "default";
	      var styleQueue = renderState.styles.get(precedence),
	        resourceState = resumableState.styleResources.hasOwnProperty(href)
	          ? resumableState.styleResources[href]
	          : void 0;
	      null !== resourceState &&
	        ((resumableState.styleResources[href] = null),
	        styleQueue ||
	          ((styleQueue = {
	            precedence: escapeTextForBrowser(precedence),
	            rules: [],
	            hrefs: [],
	            sheets: new Map()
	          }),
	          renderState.styles.set(precedence, styleQueue)),
	        (precedence = {
	          state: 0,
	          props: assign(
	            { rel: "stylesheet", href: href, "data-precedence": precedence },
	            options
	          )
	        }),
	        resourceState &&
	          (2 === resourceState.length &&
	            adoptPreloadCredentials(precedence.props, resourceState),
	          (renderState = renderState.preloads.stylesheets.get(href)) &&
	          0 < renderState.length
	            ? (renderState.length = 0)
	            : (precedence.state = 1)),
	        styleQueue.sheets.set(href, precedence),
	        enqueueFlush(request));
	    }
	  } else previousDispatcher.S(href, precedence, options);
	}
	function preinitScript(src, options) {
	  var request = currentRequest ? currentRequest : null;
	  if (request) {
	    var resumableState = request.resumableState,
	      renderState = request.renderState;
	    if (src) {
	      var resourceState = resumableState.scriptResources.hasOwnProperty(src)
	        ? resumableState.scriptResources[src]
	        : void 0;
	      null !== resourceState &&
	        ((resumableState.scriptResources[src] = null),
	        (options = assign({ src: src, async: true }, options)),
	        resourceState &&
	          (2 === resourceState.length &&
	            adoptPreloadCredentials(options, resourceState),
	          (src = renderState.preloads.scripts.get(src))) &&
	          (src.length = 0),
	        (src = []),
	        renderState.scripts.add(src),
	        pushScriptImpl(src, options),
	        enqueueFlush(request));
	    }
	  } else previousDispatcher.X(src, options);
	}
	function preinitModuleScript(src, options) {
	  var request = currentRequest ? currentRequest : null;
	  if (request) {
	    var resumableState = request.resumableState,
	      renderState = request.renderState;
	    if (src) {
	      var resourceState = resumableState.moduleScriptResources.hasOwnProperty(
	        src
	      )
	        ? resumableState.moduleScriptResources[src]
	        : void 0;
	      null !== resourceState &&
	        ((resumableState.moduleScriptResources[src] = null),
	        (options = assign({ src: src, type: "module", async: true }, options)),
	        resourceState &&
	          (2 === resourceState.length &&
	            adoptPreloadCredentials(options, resourceState),
	          (src = renderState.preloads.moduleScripts.get(src))) &&
	          (src.length = 0),
	        (src = []),
	        renderState.scripts.add(src),
	        pushScriptImpl(src, options),
	        enqueueFlush(request));
	    }
	  } else previousDispatcher.M(src, options);
	}
	function adoptPreloadCredentials(target, preloadState) {
	  null == target.crossOrigin && (target.crossOrigin = preloadState[0]);
	  null == target.integrity && (target.integrity = preloadState[1]);
	}
	function getPreloadAsHeader(href, as, params) {
	  href = ("" + href).replace(
	    regexForHrefInLinkHeaderURLContext,
	    escapeHrefForLinkHeaderURLContextReplacer
	  );
	  as = ("" + as).replace(
	    regexForLinkHeaderQuotedParamValueContext,
	    escapeStringForLinkHeaderQuotedParamValueContextReplacer
	  );
	  as = "<" + href + '>; rel=preload; as="' + as + '"';
	  for (var paramName in params)
	    hasOwnProperty.call(params, paramName) &&
	      ((href = params[paramName]),
	      "string" === typeof href &&
	        (as +=
	          "; " +
	          paramName.toLowerCase() +
	          '="' +
	          ("" + href).replace(
	            regexForLinkHeaderQuotedParamValueContext,
	            escapeStringForLinkHeaderQuotedParamValueContextReplacer
	          ) +
	          '"'));
	  return as;
	}
	var regexForHrefInLinkHeaderURLContext = /[<>\r\n]/g;
	function escapeHrefForLinkHeaderURLContextReplacer(match) {
	  switch (match) {
	    case "<":
	      return "%3C";
	    case ">":
	      return "%3E";
	    case "\n":
	      return "%0A";
	    case "\r":
	      return "%0D";
	    default:
	      throw Error(
	        "escapeLinkHrefForHeaderContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
	      );
	  }
	}
	var regexForLinkHeaderQuotedParamValueContext = /["';,\r\n]/g;
	function escapeStringForLinkHeaderQuotedParamValueContextReplacer(match) {
	  switch (match) {
	    case '"':
	      return "%22";
	    case "'":
	      return "%27";
	    case ";":
	      return "%3B";
	    case ",":
	      return "%2C";
	    case "\n":
	      return "%0A";
	    case "\r":
	      return "%0D";
	    default:
	      throw Error(
	        "escapeStringForLinkHeaderQuotedParamValueContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
	      );
	  }
	}
	function hoistStyleQueueDependency(styleQueue) {
	  this.styles.add(styleQueue);
	}
	function hoistStylesheetDependency(stylesheet) {
	  this.stylesheets.add(stylesheet);
	}
	function hoistHoistables(parentState, childState) {
	  childState.styles.forEach(hoistStyleQueueDependency, parentState);
	  childState.stylesheets.forEach(hoistStylesheetDependency, parentState);
	  childState.suspenseyImages && (parentState.suspenseyImages = true);
	}
	function createRenderState(resumableState, generateStaticMarkup) {
	  var idPrefix = resumableState.idPrefix,
	    bootstrapChunks = [],
	    bootstrapScriptContent = resumableState.bootstrapScriptContent,
	    bootstrapScripts = resumableState.bootstrapScripts,
	    bootstrapModules = resumableState.bootstrapModules;
	  void 0 !== bootstrapScriptContent &&
	    (bootstrapChunks.push("<script"),
	    pushCompletedShellIdAttribute(bootstrapChunks, resumableState),
	    bootstrapChunks.push(
	      ">",
	      ("" + bootstrapScriptContent).replace(scriptRegex, scriptReplacer),
	      "\x3c/script>"
	    ));
	  bootstrapScriptContent = idPrefix + "P:";
	  var JSCompiler_object_inline_segmentPrefix_1673 = idPrefix + "S:";
	  idPrefix += "B:";
	  var JSCompiler_object_inline_preconnects_1687 = new Set(),
	    JSCompiler_object_inline_fontPreloads_1688 = new Set(),
	    JSCompiler_object_inline_highImagePreloads_1689 = new Set(),
	    JSCompiler_object_inline_styles_1690 = new Map(),
	    JSCompiler_object_inline_bootstrapScripts_1691 = new Set(),
	    JSCompiler_object_inline_scripts_1692 = new Set(),
	    JSCompiler_object_inline_bulkPreloads_1693 = new Set(),
	    JSCompiler_object_inline_preloads_1694 = {
	      images: new Map(),
	      stylesheets: new Map(),
	      scripts: new Map(),
	      moduleScripts: new Map()
	    };
	  if (void 0 !== bootstrapScripts)
	    for (var i = 0; i < bootstrapScripts.length; i++) {
	      var scriptConfig = bootstrapScripts[i],
	        src,
	        crossOrigin = void 0,
	        integrity = void 0,
	        props = {
	          rel: "preload",
	          as: "script",
	          fetchPriority: "low",
	          nonce: void 0
	        };
	      "string" === typeof scriptConfig
	        ? (props.href = src = scriptConfig)
	        : ((props.href = src = scriptConfig.src),
	          (props.integrity = integrity =
	            "string" === typeof scriptConfig.integrity
	              ? scriptConfig.integrity
	              : void 0),
	          (props.crossOrigin = crossOrigin =
	            "string" === typeof scriptConfig || null == scriptConfig.crossOrigin
	              ? void 0
	              : "use-credentials" === scriptConfig.crossOrigin
	                ? "use-credentials"
	                : ""));
	      scriptConfig = resumableState;
	      var href = src;
	      scriptConfig.scriptResources[href] = null;
	      scriptConfig.moduleScriptResources[href] = null;
	      scriptConfig = [];
	      pushLinkImpl(scriptConfig, props);
	      JSCompiler_object_inline_bootstrapScripts_1691.add(scriptConfig);
	      bootstrapChunks.push('<script src="', escapeTextForBrowser(src), '"');
	      "string" === typeof integrity &&
	        bootstrapChunks.push(
	          ' integrity="',
	          escapeTextForBrowser(integrity),
	          '"'
	        );
	      "string" === typeof crossOrigin &&
	        bootstrapChunks.push(
	          ' crossorigin="',
	          escapeTextForBrowser(crossOrigin),
	          '"'
	        );
	      pushCompletedShellIdAttribute(bootstrapChunks, resumableState);
	      bootstrapChunks.push(' async="">\x3c/script>');
	    }
	  if (void 0 !== bootstrapModules)
	    for (
	      bootstrapScripts = 0;
	      bootstrapScripts < bootstrapModules.length;
	      bootstrapScripts++
	    )
	      (props = bootstrapModules[bootstrapScripts]),
	        (crossOrigin = src = void 0),
	        (integrity = {
	          rel: "modulepreload",
	          fetchPriority: "low",
	          nonce: void 0
	        }),
	        "string" === typeof props
	          ? (integrity.href = i = props)
	          : ((integrity.href = i = props.src),
	            (integrity.integrity = crossOrigin =
	              "string" === typeof props.integrity ? props.integrity : void 0),
	            (integrity.crossOrigin = src =
	              "string" === typeof props || null == props.crossOrigin
	                ? void 0
	                : "use-credentials" === props.crossOrigin
	                  ? "use-credentials"
	                  : "")),
	        (props = resumableState),
	        (scriptConfig = i),
	        (props.scriptResources[scriptConfig] = null),
	        (props.moduleScriptResources[scriptConfig] = null),
	        (props = []),
	        pushLinkImpl(props, integrity),
	        JSCompiler_object_inline_bootstrapScripts_1691.add(props),
	        bootstrapChunks.push(
	          '<script type="module" src="',
	          escapeTextForBrowser(i),
	          '"'
	        ),
	        "string" === typeof crossOrigin &&
	          bootstrapChunks.push(
	            ' integrity="',
	            escapeTextForBrowser(crossOrigin),
	            '"'
	          ),
	        "string" === typeof src &&
	          bootstrapChunks.push(
	            ' crossorigin="',
	            escapeTextForBrowser(src),
	            '"'
	          ),
	        pushCompletedShellIdAttribute(bootstrapChunks, resumableState),
	        bootstrapChunks.push(' async="">\x3c/script>');
	  return {
	    placeholderPrefix: bootstrapScriptContent,
	    segmentPrefix: JSCompiler_object_inline_segmentPrefix_1673,
	    boundaryPrefix: idPrefix,
	    startInlineScript: "<script",
	    startInlineStyle: "<style",
	    preamble: { htmlChunks: null, headChunks: null, bodyChunks: null },
	    externalRuntimeScript: null,
	    bootstrapChunks: bootstrapChunks,
	    importMapChunks: [],
	    onHeaders: void 0,
	    headers: null,
	    resets: {
	      font: {},
	      dns: {},
	      connect: { default: {}, anonymous: {}, credentials: {} },
	      image: {},
	      style: {}
	    },
	    charsetChunks: [],
	    viewportChunks: [],
	    hoistableChunks: [],
	    preconnects: JSCompiler_object_inline_preconnects_1687,
	    fontPreloads: JSCompiler_object_inline_fontPreloads_1688,
	    highImagePreloads: JSCompiler_object_inline_highImagePreloads_1689,
	    styles: JSCompiler_object_inline_styles_1690,
	    bootstrapScripts: JSCompiler_object_inline_bootstrapScripts_1691,
	    scripts: JSCompiler_object_inline_scripts_1692,
	    bulkPreloads: JSCompiler_object_inline_bulkPreloads_1693,
	    preloads: JSCompiler_object_inline_preloads_1694,
	    nonce: { script: void 0, style: void 0 },
	    stylesToHoist: false,
	    generateStaticMarkup: generateStaticMarkup
	  };
	}
	function pushTextInstance(target, text, renderState, textEmbedded) {
	  if (renderState.generateStaticMarkup)
	    return target.push(escapeTextForBrowser(text)), false;
	  "" === text
	    ? (target = textEmbedded)
	    : (textEmbedded && target.push("\x3c!-- --\x3e"),
	      target.push(escapeTextForBrowser(text)),
	      (target = true));
	  return target;
	}
	function pushSegmentFinale(target, renderState, lastPushedText, textEmbedded) {
	  renderState.generateStaticMarkup ||
	    (lastPushedText && textEmbedded && target.push("\x3c!-- --\x3e"));
	}
	var bind = Function.prototype.bind,
	  REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference");
	function getComponentNameFromType(type) {
	  if (null == type) return null;
	  if ("function" === typeof type)
	    return type.$$typeof === REACT_CLIENT_REFERENCE
	      ? null
	      : type.displayName || type.name || null;
	  if ("string" === typeof type) return type;
	  switch (type) {
	    case REACT_FRAGMENT_TYPE:
	      return "Fragment";
	    case REACT_PROFILER_TYPE:
	      return "Profiler";
	    case REACT_STRICT_MODE_TYPE:
	      return "StrictMode";
	    case REACT_SUSPENSE_TYPE:
	      return "Suspense";
	    case REACT_SUSPENSE_LIST_TYPE:
	      return "SuspenseList";
	    case REACT_ACTIVITY_TYPE:
	      return "Activity";
	  }
	  if ("object" === typeof type)
	    switch (type.$$typeof) {
	      case REACT_PORTAL_TYPE:
	        return "Portal";
	      case REACT_CONTEXT_TYPE:
	        return type.displayName || "Context";
	      case REACT_CONSUMER_TYPE:
	        return (type._context.displayName || "Context") + ".Consumer";
	      case REACT_FORWARD_REF_TYPE:
	        var innerType = type.render;
	        type = type.displayName;
	        type ||
	          ((type = innerType.displayName || innerType.name || ""),
	          (type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef"));
	        return type;
	      case REACT_MEMO_TYPE:
	        return (
	          (innerType = type.displayName || null),
	          null !== innerType
	            ? innerType
	            : getComponentNameFromType(type.type) || "Memo"
	        );
	      case REACT_LAZY_TYPE:
	        innerType = type._payload;
	        type = type._init;
	        try {
	          return getComponentNameFromType(type(innerType));
	        } catch (x) {}
	    }
	  return null;
	}
	var emptyContextObject = {},
	  currentActiveSnapshot = null;
	function popToNearestCommonAncestor(prev, next) {
	  if (prev !== next) {
	    prev.context._currentValue2 = prev.parentValue;
	    prev = prev.parent;
	    var parentNext = next.parent;
	    if (null === prev) {
	      if (null !== parentNext) throw Error(formatProdErrorMessage(401));
	    } else {
	      if (null === parentNext) throw Error(formatProdErrorMessage(401));
	      popToNearestCommonAncestor(prev, parentNext);
	    }
	    next.context._currentValue2 = next.value;
	  }
	}
	function popAllPrevious(prev) {
	  prev.context._currentValue2 = prev.parentValue;
	  prev = prev.parent;
	  null !== prev && popAllPrevious(prev);
	}
	function pushAllNext(next) {
	  var parentNext = next.parent;
	  null !== parentNext && pushAllNext(parentNext);
	  next.context._currentValue2 = next.value;
	}
	function popPreviousToCommonLevel(prev, next) {
	  prev.context._currentValue2 = prev.parentValue;
	  prev = prev.parent;
	  if (null === prev) throw Error(formatProdErrorMessage(402));
	  prev.depth === next.depth
	    ? popToNearestCommonAncestor(prev, next)
	    : popPreviousToCommonLevel(prev, next);
	}
	function popNextToCommonLevel(prev, next) {
	  var parentNext = next.parent;
	  if (null === parentNext) throw Error(formatProdErrorMessage(402));
	  prev.depth === parentNext.depth
	    ? popToNearestCommonAncestor(prev, parentNext)
	    : popNextToCommonLevel(prev, parentNext);
	  next.context._currentValue2 = next.value;
	}
	function switchContext(newSnapshot) {
	  var prev = currentActiveSnapshot;
	  prev !== newSnapshot &&
	    (null === prev
	      ? pushAllNext(newSnapshot)
	      : null === newSnapshot
	        ? popAllPrevious(prev)
	        : prev.depth === newSnapshot.depth
	          ? popToNearestCommonAncestor(prev, newSnapshot)
	          : prev.depth > newSnapshot.depth
	            ? popPreviousToCommonLevel(prev, newSnapshot)
	            : popNextToCommonLevel(prev, newSnapshot),
	    (currentActiveSnapshot = newSnapshot));
	}
	var classComponentUpdater = {
	    enqueueSetState: function (inst, payload) {
	      inst = inst._reactInternals;
	      null !== inst.queue && inst.queue.push(payload);
	    },
	    enqueueReplaceState: function (inst, payload) {
	      inst = inst._reactInternals;
	      inst.replace = true;
	      inst.queue = [payload];
	    },
	    enqueueForceUpdate: function () {}
	  },
	  emptyTreeContext = { id: 1, overflow: "" };
	function pushTreeContext(baseContext, totalChildren, index) {
	  var baseIdWithLeadingBit = baseContext.id;
	  baseContext = baseContext.overflow;
	  var baseLength = 32 - clz32(baseIdWithLeadingBit) - 1;
	  baseIdWithLeadingBit &= ~(1 << baseLength);
	  index += 1;
	  var length = 32 - clz32(totalChildren) + baseLength;
	  if (30 < length) {
	    var numberOfOverflowBits = baseLength - (baseLength % 5);
	    length = (
	      baseIdWithLeadingBit &
	      ((1 << numberOfOverflowBits) - 1)
	    ).toString(32);
	    baseIdWithLeadingBit >>= numberOfOverflowBits;
	    baseLength -= numberOfOverflowBits;
	    return {
	      id:
	        (1 << (32 - clz32(totalChildren) + baseLength)) |
	        (index << baseLength) |
	        baseIdWithLeadingBit,
	      overflow: length + baseContext
	    };
	  }
	  return {
	    id: (1 << length) | (index << baseLength) | baseIdWithLeadingBit,
	    overflow: baseContext
	  };
	}
	var clz32 = Math.clz32 ? Math.clz32 : clz32Fallback,
	  log = Math.log,
	  LN2 = Math.LN2;
	function clz32Fallback(x) {
	  x >>>= 0;
	  return 0 === x ? 32 : (31 - ((log(x) / LN2) | 0)) | 0;
	}
	function noop() {}
	var SuspenseException = Error(formatProdErrorMessage(460));
	function trackUsedThenable(thenableState, thenable, index) {
	  index = thenableState[index];
	  void 0 === index
	    ? thenableState.push(thenable)
	    : index !== thenable && (thenable.then(noop, noop), (thenable = index));
	  switch (thenable.status) {
	    case "fulfilled":
	      return thenable.value;
	    case "rejected":
	      throw thenable.reason;
	    default:
	      "string" === typeof thenable.status
	        ? thenable.then(noop, noop)
	        : ((thenableState = thenable),
	          (thenableState.status = "pending"),
	          thenableState.then(
	            function (fulfilledValue) {
	              if ("pending" === thenable.status) {
	                var fulfilledThenable = thenable;
	                fulfilledThenable.status = "fulfilled";
	                fulfilledThenable.value = fulfilledValue;
	              }
	            },
	            function (error) {
	              if ("pending" === thenable.status) {
	                var rejectedThenable = thenable;
	                rejectedThenable.status = "rejected";
	                rejectedThenable.reason = error;
	              }
	            }
	          ));
	      switch (thenable.status) {
	        case "fulfilled":
	          return thenable.value;
	        case "rejected":
	          throw thenable.reason;
	      }
	      suspendedThenable = thenable;
	      throw SuspenseException;
	  }
	}
	var suspendedThenable = null;
	function getSuspendedThenable() {
	  if (null === suspendedThenable) throw Error(formatProdErrorMessage(459));
	  var thenable = suspendedThenable;
	  suspendedThenable = null;
	  return thenable;
	}
	function is(x, y) {
	  return (x === y && (0 !== x || 1 / x === 1 / y)) || (x !== x && y !== y);
	}
	var objectIs = "function" === typeof Object.is ? Object.is : is,
	  currentlyRenderingComponent = null,
	  currentlyRenderingTask = null,
	  currentlyRenderingRequest = null,
	  currentlyRenderingKeyPath = null,
	  firstWorkInProgressHook = null,
	  workInProgressHook = null,
	  isReRender = false,
	  didScheduleRenderPhaseUpdate = false,
	  localIdCounter = 0,
	  actionStateCounter = 0,
	  actionStateMatchingIndex = -1,
	  thenableIndexCounter = 0,
	  thenableState = null,
	  renderPhaseUpdates = null,
	  numberOfReRenders = 0;
	function resolveCurrentlyRenderingComponent() {
	  if (null === currentlyRenderingComponent)
	    throw Error(formatProdErrorMessage(321));
	  return currentlyRenderingComponent;
	}
	function createHook() {
	  if (0 < numberOfReRenders) throw Error(formatProdErrorMessage(312));
	  return { memoizedState: null, queue: null, next: null };
	}
	function createWorkInProgressHook() {
	  null === workInProgressHook
	    ? null === firstWorkInProgressHook
	      ? ((isReRender = false),
	        (firstWorkInProgressHook = workInProgressHook = createHook()))
	      : ((isReRender = true), (workInProgressHook = firstWorkInProgressHook))
	    : null === workInProgressHook.next
	      ? ((isReRender = false),
	        (workInProgressHook = workInProgressHook.next = createHook()))
	      : ((isReRender = true), (workInProgressHook = workInProgressHook.next));
	  return workInProgressHook;
	}
	function getThenableStateAfterSuspending() {
	  var state = thenableState;
	  thenableState = null;
	  return state;
	}
	function resetHooksState() {
	  currentlyRenderingKeyPath =
	    currentlyRenderingRequest =
	    currentlyRenderingTask =
	    currentlyRenderingComponent =
	      null;
	  didScheduleRenderPhaseUpdate = false;
	  firstWorkInProgressHook = null;
	  numberOfReRenders = 0;
	  workInProgressHook = renderPhaseUpdates = null;
	}
	function basicStateReducer(state, action) {
	  return "function" === typeof action ? action(state) : action;
	}
	function useReducer(reducer, initialArg, init) {
	  currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
	  workInProgressHook = createWorkInProgressHook();
	  if (isReRender) {
	    var queue = workInProgressHook.queue;
	    initialArg = queue.dispatch;
	    if (
	      null !== renderPhaseUpdates &&
	      ((init = renderPhaseUpdates.get(queue)), void 0 !== init)
	    ) {
	      renderPhaseUpdates.delete(queue);
	      queue = workInProgressHook.memoizedState;
	      do (queue = reducer(queue, init.action)), (init = init.next);
	      while (null !== init);
	      workInProgressHook.memoizedState = queue;
	      return [queue, initialArg];
	    }
	    return [workInProgressHook.memoizedState, initialArg];
	  }
	  reducer =
	    reducer === basicStateReducer
	      ? "function" === typeof initialArg
	        ? initialArg()
	        : initialArg
	      : void 0 !== init
	        ? init(initialArg)
	        : initialArg;
	  workInProgressHook.memoizedState = reducer;
	  reducer = workInProgressHook.queue = { last: null, dispatch: null };
	  reducer = reducer.dispatch = dispatchAction.bind(
	    null,
	    currentlyRenderingComponent,
	    reducer
	  );
	  return [workInProgressHook.memoizedState, reducer];
	}
	function useMemo(nextCreate, deps) {
	  currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
	  workInProgressHook = createWorkInProgressHook();
	  deps = void 0 === deps ? null : deps;
	  if (null !== workInProgressHook) {
	    var prevState = workInProgressHook.memoizedState;
	    if (null !== prevState && null !== deps) {
	      var prevDeps = prevState[1];
	      a: if (null === prevDeps) prevDeps = false;
	      else {
	        for (var i = 0; i < prevDeps.length && i < deps.length; i++)
	          if (!objectIs(deps[i], prevDeps[i])) {
	            prevDeps = false;
	            break a;
	          }
	        prevDeps = true;
	      }
	      if (prevDeps) return prevState[0];
	    }
	  }
	  nextCreate = nextCreate();
	  workInProgressHook.memoizedState = [nextCreate, deps];
	  return nextCreate;
	}
	function dispatchAction(componentIdentity, queue, action) {
	  if (25 <= numberOfReRenders) throw Error(formatProdErrorMessage(301));
	  if (componentIdentity === currentlyRenderingComponent)
	    if (
	      ((didScheduleRenderPhaseUpdate = true),
	      (componentIdentity = { action: action, next: null }),
	      null === renderPhaseUpdates && (renderPhaseUpdates = new Map()),
	      (action = renderPhaseUpdates.get(queue)),
	      void 0 === action)
	    )
	      renderPhaseUpdates.set(queue, componentIdentity);
	    else {
	      for (queue = action; null !== queue.next; ) queue = queue.next;
	      queue.next = componentIdentity;
	    }
	}
	function throwOnUseEffectEventCall() {
	  throw Error(formatProdErrorMessage(440));
	}
	function unsupportedStartTransition() {
	  throw Error(formatProdErrorMessage(394));
	}
	function unsupportedSetOptimisticState() {
	  throw Error(formatProdErrorMessage(479));
	}
	function useActionState(action, initialState, permalink) {
	  resolveCurrentlyRenderingComponent();
	  var actionStateHookIndex = actionStateCounter++,
	    request = currentlyRenderingRequest;
	  if ("function" === typeof action.$$FORM_ACTION) {
	    var nextPostbackStateKey = null,
	      componentKeyPath = currentlyRenderingKeyPath;
	    request = request.formState;
	    var isSignatureEqual = action.$$IS_SIGNATURE_EQUAL;
	    if (null !== request && "function" === typeof isSignatureEqual) {
	      var postbackKey = request[1];
	      isSignatureEqual.call(action, request[2], request[3]) &&
	        ((nextPostbackStateKey =
	          void 0 !== permalink
	            ? "p" + permalink
	            : "k" +
	              murmurhash3_32_gc(
	                JSON.stringify([componentKeyPath, null, actionStateHookIndex]),
	                0
	              )),
	        postbackKey === nextPostbackStateKey &&
	          ((actionStateMatchingIndex = actionStateHookIndex),
	          (initialState = request[0])));
	    }
	    var boundAction = action.bind(null, initialState);
	    action = function (payload) {
	      boundAction(payload);
	    };
	    "function" === typeof boundAction.$$FORM_ACTION &&
	      (action.$$FORM_ACTION = function (prefix) {
	        prefix = boundAction.$$FORM_ACTION(prefix);
	        void 0 !== permalink &&
	          ((permalink += ""), (prefix.action = permalink));
	        var formData = prefix.data;
	        formData &&
	          (null === nextPostbackStateKey &&
	            (nextPostbackStateKey =
	              void 0 !== permalink
	                ? "p" + permalink
	                : "k" +
	                  murmurhash3_32_gc(
	                    JSON.stringify([
	                      componentKeyPath,
	                      null,
	                      actionStateHookIndex
	                    ]),
	                    0
	                  )),
	          formData.append("$ACTION_KEY", nextPostbackStateKey));
	        return prefix;
	      });
	    return [initialState, action, false];
	  }
	  var boundAction$22 = action.bind(null, initialState);
	  return [
	    initialState,
	    function (payload) {
	      boundAction$22(payload);
	    },
	    false
	  ];
	}
	function unwrapThenable(thenable) {
	  var index = thenableIndexCounter;
	  thenableIndexCounter += 1;
	  null === thenableState && (thenableState = []);
	  return trackUsedThenable(thenableState, thenable, index);
	}
	function unsupportedRefresh() {
	  throw Error(formatProdErrorMessage(393));
	}
	var HooksDispatcher = {
	    readContext: function (context) {
	      return context._currentValue2;
	    },
	    use: function (usable) {
	      if (null !== usable && "object" === typeof usable) {
	        if ("function" === typeof usable.then) return unwrapThenable(usable);
	        if (usable.$$typeof === REACT_CONTEXT_TYPE)
	          return usable._currentValue2;
	      }
	      throw Error(formatProdErrorMessage(438, String(usable)));
	    },
	    useContext: function (context) {
	      resolveCurrentlyRenderingComponent();
	      return context._currentValue2;
	    },
	    useMemo: useMemo,
	    useReducer: useReducer,
	    useRef: function (initialValue) {
	      currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
	      workInProgressHook = createWorkInProgressHook();
	      var previousRef = workInProgressHook.memoizedState;
	      return null === previousRef
	        ? ((initialValue = { current: initialValue }),
	          (workInProgressHook.memoizedState = initialValue))
	        : previousRef;
	    },
	    useState: function (initialState) {
	      return useReducer(basicStateReducer, initialState);
	    },
	    useInsertionEffect: noop,
	    useLayoutEffect: noop,
	    useCallback: function (callback, deps) {
	      return useMemo(function () {
	        return callback;
	      }, deps);
	    },
	    useImperativeHandle: noop,
	    useEffect: noop,
	    useDebugValue: noop,
	    useDeferredValue: function (value, initialValue) {
	      resolveCurrentlyRenderingComponent();
	      return void 0 !== initialValue ? initialValue : value;
	    },
	    useTransition: function () {
	      resolveCurrentlyRenderingComponent();
	      return [false, unsupportedStartTransition];
	    },
	    useId: function () {
	      var JSCompiler_inline_result = currentlyRenderingTask.treeContext;
	      var overflow = JSCompiler_inline_result.overflow;
	      JSCompiler_inline_result = JSCompiler_inline_result.id;
	      JSCompiler_inline_result =
	        (
	          JSCompiler_inline_result &
	          ~(1 << (32 - clz32(JSCompiler_inline_result) - 1))
	        ).toString(32) + overflow;
	      var resumableState = currentResumableState;
	      if (null === resumableState) throw Error(formatProdErrorMessage(404));
	      overflow = localIdCounter++;
	      JSCompiler_inline_result =
	        "_" + resumableState.idPrefix + "R_" + JSCompiler_inline_result;
	      0 < overflow && (JSCompiler_inline_result += "H" + overflow.toString(32));
	      return JSCompiler_inline_result + "_";
	    },
	    useSyncExternalStore: function (subscribe, getSnapshot, getServerSnapshot) {
	      if (void 0 === getServerSnapshot)
	        throw Error(formatProdErrorMessage(407));
	      return getServerSnapshot();
	    },
	    useOptimistic: function (passthrough) {
	      resolveCurrentlyRenderingComponent();
	      return [passthrough, unsupportedSetOptimisticState];
	    },
	    useActionState: useActionState,
	    useFormState: useActionState,
	    useHostTransitionStatus: function () {
	      resolveCurrentlyRenderingComponent();
	      return sharedNotPendingObject;
	    },
	    useMemoCache: function (size) {
	      for (var data = Array(size), i = 0; i < size; i++)
	        data[i] = REACT_MEMO_CACHE_SENTINEL;
	      return data;
	    },
	    useCacheRefresh: function () {
	      return unsupportedRefresh;
	    },
	    useEffectEvent: function () {
	      return throwOnUseEffectEventCall;
	    }
	  },
	  currentResumableState = null,
	  DefaultAsyncDispatcher = {
	    getCacheForType: function () {
	      throw Error(formatProdErrorMessage(248));
	    },
	    cacheSignal: function () {
	      throw Error(formatProdErrorMessage(248));
	    }
	  },
	  prefix,
	  suffix;
	function describeBuiltInComponentFrame(name) {
	  if (void 0 === prefix)
	    try {
	      throw Error();
	    } catch (x) {
	      var match = x.stack.trim().match(/\n( *(at )?)/);
	      prefix = (match && match[1]) || "";
	      suffix =
	        -1 < x.stack.indexOf("\n    at")
	          ? " (<anonymous>)"
	          : -1 < x.stack.indexOf("@")
	            ? "@unknown:0:0"
	            : "";
	    }
	  return "\n" + prefix + name + suffix;
	}
	var reentry = false;
	function describeNativeComponentFrame(fn, construct) {
	  if (!fn || reentry) return "";
	  reentry = true;
	  var previousPrepareStackTrace = Error.prepareStackTrace;
	  Error.prepareStackTrace = void 0;
	  try {
	    var RunInRootFrame = {
	      DetermineComponentFrameRoot: function () {
	        try {
	          if (construct) {
	            var Fake = function () {
	              throw Error();
	            };
	            Object.defineProperty(Fake.prototype, "props", {
	              set: function () {
	                throw Error();
	              }
	            });
	            if ("object" === typeof Reflect && Reflect.construct) {
	              try {
	                Reflect.construct(Fake, []);
	              } catch (x) {
	                var control = x;
	              }
	              Reflect.construct(fn, [], Fake);
	            } else {
	              try {
	                Fake.call();
	              } catch (x$24) {
	                control = x$24;
	              }
	              fn.call(Fake.prototype);
	            }
	          } else {
	            try {
	              throw Error();
	            } catch (x$25) {
	              control = x$25;
	            }
	            (Fake = fn()) &&
	              "function" === typeof Fake.catch &&
	              Fake.catch(function () {});
	          }
	        } catch (sample) {
	          if (sample && control && "string" === typeof sample.stack)
	            return [sample.stack, control.stack];
	        }
	        return [null, null];
	      }
	    };
	    RunInRootFrame.DetermineComponentFrameRoot.displayName =
	      "DetermineComponentFrameRoot";
	    var namePropDescriptor = Object.getOwnPropertyDescriptor(
	      RunInRootFrame.DetermineComponentFrameRoot,
	      "name"
	    );
	    namePropDescriptor &&
	      namePropDescriptor.configurable &&
	      Object.defineProperty(
	        RunInRootFrame.DetermineComponentFrameRoot,
	        "name",
	        { value: "DetermineComponentFrameRoot" }
	      );
	    var _RunInRootFrame$Deter = RunInRootFrame.DetermineComponentFrameRoot(),
	      sampleStack = _RunInRootFrame$Deter[0],
	      controlStack = _RunInRootFrame$Deter[1];
	    if (sampleStack && controlStack) {
	      var sampleLines = sampleStack.split("\n"),
	        controlLines = controlStack.split("\n");
	      for (
	        namePropDescriptor = RunInRootFrame = 0;
	        RunInRootFrame < sampleLines.length &&
	        !sampleLines[RunInRootFrame].includes("DetermineComponentFrameRoot");

	      )
	        RunInRootFrame++;
	      for (
	        ;
	        namePropDescriptor < controlLines.length &&
	        !controlLines[namePropDescriptor].includes(
	          "DetermineComponentFrameRoot"
	        );

	      )
	        namePropDescriptor++;
	      if (
	        RunInRootFrame === sampleLines.length ||
	        namePropDescriptor === controlLines.length
	      )
	        for (
	          RunInRootFrame = sampleLines.length - 1,
	            namePropDescriptor = controlLines.length - 1;
	          1 <= RunInRootFrame &&
	          0 <= namePropDescriptor &&
	          sampleLines[RunInRootFrame] !== controlLines[namePropDescriptor];

	        )
	          namePropDescriptor--;
	      for (
	        ;
	        1 <= RunInRootFrame && 0 <= namePropDescriptor;
	        RunInRootFrame--, namePropDescriptor--
	      )
	        if (sampleLines[RunInRootFrame] !== controlLines[namePropDescriptor]) {
	          if (1 !== RunInRootFrame || 1 !== namePropDescriptor) {
	            do
	              if (
	                (RunInRootFrame--,
	                namePropDescriptor--,
	                0 > namePropDescriptor ||
	                  sampleLines[RunInRootFrame] !==
	                    controlLines[namePropDescriptor])
	              ) {
	                var frame =
	                  "\n" +
	                  sampleLines[RunInRootFrame].replace(" at new ", " at ");
	                fn.displayName &&
	                  frame.includes("<anonymous>") &&
	                  (frame = frame.replace("<anonymous>", fn.displayName));
	                return frame;
	              }
	            while (1 <= RunInRootFrame && 0 <= namePropDescriptor);
	          }
	          break;
	        }
	    }
	  } finally {
	    (reentry = false), (Error.prepareStackTrace = previousPrepareStackTrace);
	  }
	  return (previousPrepareStackTrace = fn ? fn.displayName || fn.name : "")
	    ? describeBuiltInComponentFrame(previousPrepareStackTrace)
	    : "";
	}
	function describeComponentStackByType(type) {
	  if ("string" === typeof type) return describeBuiltInComponentFrame(type);
	  if ("function" === typeof type)
	    return type.prototype && type.prototype.isReactComponent
	      ? describeNativeComponentFrame(type, true)
	      : describeNativeComponentFrame(type, false);
	  if ("object" === typeof type && null !== type) {
	    switch (type.$$typeof) {
	      case REACT_FORWARD_REF_TYPE:
	        return describeNativeComponentFrame(type.render, false);
	      case REACT_MEMO_TYPE:
	        return describeNativeComponentFrame(type.type, false);
	      case REACT_LAZY_TYPE:
	        var lazyComponent = type,
	          payload = lazyComponent._payload;
	        lazyComponent = lazyComponent._init;
	        try {
	          type = lazyComponent(payload);
	        } catch (x) {
	          return describeBuiltInComponentFrame("Lazy");
	        }
	        return describeComponentStackByType(type);
	    }
	    if ("string" === typeof type.name) {
	      a: {
	        payload = type.name;
	        lazyComponent = type.env;
	        var location = type.debugLocation;
	        if (
	          null != location &&
	          ((type = Error.prepareStackTrace),
	          (Error.prepareStackTrace = void 0),
	          (location = location.stack),
	          (Error.prepareStackTrace = type),
	          location.startsWith("Error: react-stack-top-frame\n") &&
	            (location = location.slice(29)),
	          (type = location.indexOf("\n")),
	          -1 !== type && (location = location.slice(type + 1)),
	          (type = location.indexOf("react_stack_bottom_frame")),
	          -1 !== type && (type = location.lastIndexOf("\n", type)),
	          (type = -1 !== type ? (location = location.slice(0, type)) : ""),
	          (location = type.lastIndexOf("\n")),
	          (type = -1 === location ? type : type.slice(location + 1)),
	          -1 !== type.indexOf(payload))
	        ) {
	          payload = "\n" + type;
	          break a;
	        }
	        payload = describeBuiltInComponentFrame(
	          payload + (lazyComponent ? " [" + lazyComponent + "]" : "")
	        );
	      }
	      return payload;
	    }
	  }
	  switch (type) {
	    case REACT_SUSPENSE_LIST_TYPE:
	      return describeBuiltInComponentFrame("SuspenseList");
	    case REACT_SUSPENSE_TYPE:
	      return describeBuiltInComponentFrame("Suspense");
	  }
	  return "";
	}
	function isEligibleForOutlining(request, boundary) {
	  return (500 < boundary.byteSize || false) && null === boundary.contentPreamble;
	}
	function defaultErrorHandler(error) {
	  if (
	    "object" === typeof error &&
	    null !== error &&
	    "string" === typeof error.environmentName
	  ) {
	    var JSCompiler_inline_result = error.environmentName;
	    error = [error].slice(0);
	    "string" === typeof error[0]
	      ? error.splice(
	          0,
	          1,
	          "[%s] " + error[0],
	          " " + JSCompiler_inline_result + " "
	        )
	      : error.splice(0, 0, "[%s]", " " + JSCompiler_inline_result + " ");
	    error.unshift(console);
	    JSCompiler_inline_result = bind.apply(console.error, error);
	    JSCompiler_inline_result();
	  } else console.error(error);
	  return null;
	}
	function RequestInstance(
	  resumableState,
	  renderState,
	  rootFormatContext,
	  progressiveChunkSize,
	  onError,
	  onAllReady,
	  onShellReady,
	  onShellError,
	  onFatalError,
	  onPostpone,
	  formState
	) {
	  var abortSet = new Set();
	  this.destination = null;
	  this.flushScheduled = false;
	  this.resumableState = resumableState;
	  this.renderState = renderState;
	  this.rootFormatContext = rootFormatContext;
	  this.progressiveChunkSize =
	    void 0 === progressiveChunkSize ? 12800 : progressiveChunkSize;
	  this.status = 10;
	  this.fatalError = null;
	  this.pendingRootTasks = this.allPendingTasks = this.nextSegmentId = 0;
	  this.completedPreambleSegments = this.completedRootSegment = null;
	  this.byteSize = 0;
	  this.abortableTasks = abortSet;
	  this.pingedTasks = [];
	  this.clientRenderedBoundaries = [];
	  this.completedBoundaries = [];
	  this.partialBoundaries = [];
	  this.trackedPostpones = null;
	  this.onError = void 0 === onError ? defaultErrorHandler : onError;
	  this.onPostpone = void 0 === onPostpone ? noop : onPostpone;
	  this.onAllReady = void 0 === onAllReady ? noop : onAllReady;
	  this.onShellReady = void 0 === onShellReady ? noop : onShellReady;
	  this.onShellError = void 0 === onShellError ? noop : onShellError;
	  this.onFatalError = void 0 === onFatalError ? noop : onFatalError;
	  this.formState = void 0 === formState ? null : formState;
	}
	function createRequest(
	  children,
	  resumableState,
	  renderState,
	  rootFormatContext,
	  progressiveChunkSize,
	  onError,
	  onAllReady,
	  onShellReady,
	  onShellError,
	  onFatalError,
	  onPostpone,
	  formState
	) {
	  resumableState = new RequestInstance(
	    resumableState,
	    renderState,
	    rootFormatContext,
	    progressiveChunkSize,
	    onError,
	    onAllReady,
	    onShellReady,
	    onShellError,
	    onFatalError,
	    onPostpone,
	    formState
	  );
	  renderState = createPendingSegment(
	    resumableState,
	    0,
	    null,
	    rootFormatContext,
	    false,
	    false
	  );
	  renderState.parentFlushed = true;
	  children = createRenderTask(
	    resumableState,
	    null,
	    children,
	    -1,
	    null,
	    renderState,
	    null,
	    null,
	    resumableState.abortableTasks,
	    null,
	    rootFormatContext,
	    null,
	    emptyTreeContext,
	    null,
	    null
	  );
	  pushComponentStack(children);
	  resumableState.pingedTasks.push(children);
	  return resumableState;
	}
	var currentRequest = null;
	function pingTask(request, task) {
	  request.pingedTasks.push(task);
	  1 === request.pingedTasks.length &&
	    ((request.flushScheduled = null !== request.destination),
	    performWork(request));
	}
	function createSuspenseBoundary(
	  request,
	  row,
	  fallbackAbortableTasks,
	  contentPreamble,
	  fallbackPreamble
	) {
	  fallbackAbortableTasks = {
	    status: 0,
	    rootSegmentID: -1,
	    parentFlushed: false,
	    pendingTasks: 0,
	    row: row,
	    completedSegments: [],
	    byteSize: 0,
	    fallbackAbortableTasks: fallbackAbortableTasks,
	    errorDigest: null,
	    contentState: createHoistableState(),
	    fallbackState: createHoistableState(),
	    contentPreamble: contentPreamble,
	    fallbackPreamble: fallbackPreamble,
	    trackedContentKeyPath: null,
	    trackedFallbackNode: null
	  };
	  null !== row &&
	    (row.pendingTasks++,
	    (contentPreamble = row.boundaries),
	    null !== contentPreamble &&
	      (request.allPendingTasks++,
	      fallbackAbortableTasks.pendingTasks++,
	      contentPreamble.push(fallbackAbortableTasks)),
	    (request = row.inheritedHoistables),
	    null !== request &&
	      hoistHoistables(fallbackAbortableTasks.contentState, request));
	  return fallbackAbortableTasks;
	}
	function createRenderTask(
	  request,
	  thenableState,
	  node,
	  childIndex,
	  blockedBoundary,
	  blockedSegment,
	  blockedPreamble,
	  hoistableState,
	  abortSet,
	  keyPath,
	  formatContext,
	  context,
	  treeContext,
	  row,
	  componentStack
	) {
	  request.allPendingTasks++;
	  null === blockedBoundary
	    ? request.pendingRootTasks++
	    : blockedBoundary.pendingTasks++;
	  null !== row && row.pendingTasks++;
	  var task = {
	    replay: null,
	    node: node,
	    childIndex: childIndex,
	    ping: function () {
	      return pingTask(request, task);
	    },
	    blockedBoundary: blockedBoundary,
	    blockedSegment: blockedSegment,
	    blockedPreamble: blockedPreamble,
	    hoistableState: hoistableState,
	    abortSet: abortSet,
	    keyPath: keyPath,
	    formatContext: formatContext,
	    context: context,
	    treeContext: treeContext,
	    row: row,
	    componentStack: componentStack,
	    thenableState: thenableState
	  };
	  abortSet.add(task);
	  return task;
	}
	function createReplayTask(
	  request,
	  thenableState,
	  replay,
	  node,
	  childIndex,
	  blockedBoundary,
	  hoistableState,
	  abortSet,
	  keyPath,
	  formatContext,
	  context,
	  treeContext,
	  row,
	  componentStack
	) {
	  request.allPendingTasks++;
	  null === blockedBoundary
	    ? request.pendingRootTasks++
	    : blockedBoundary.pendingTasks++;
	  null !== row && row.pendingTasks++;
	  replay.pendingTasks++;
	  var task = {
	    replay: replay,
	    node: node,
	    childIndex: childIndex,
	    ping: function () {
	      return pingTask(request, task);
	    },
	    blockedBoundary: blockedBoundary,
	    blockedSegment: null,
	    blockedPreamble: null,
	    hoistableState: hoistableState,
	    abortSet: abortSet,
	    keyPath: keyPath,
	    formatContext: formatContext,
	    context: context,
	    treeContext: treeContext,
	    row: row,
	    componentStack: componentStack,
	    thenableState: thenableState
	  };
	  abortSet.add(task);
	  return task;
	}
	function createPendingSegment(
	  request,
	  index,
	  boundary,
	  parentFormatContext,
	  lastPushedText,
	  textEmbedded
	) {
	  return {
	    status: 0,
	    parentFlushed: false,
	    id: -1,
	    index: index,
	    chunks: [],
	    children: [],
	    preambleChildren: [],
	    parentFormatContext: parentFormatContext,
	    boundary: boundary,
	    lastPushedText: lastPushedText,
	    textEmbedded: textEmbedded
	  };
	}
	function pushComponentStack(task) {
	  var node = task.node;
	  if ("object" === typeof node && null !== node)
	    switch (node.$$typeof) {
	      case REACT_ELEMENT_TYPE:
	        task.componentStack = { parent: task.componentStack, type: node.type };
	    }
	}
	function replaceSuspenseComponentStackWithSuspenseFallbackStack(
	  componentStack
	) {
	  return null === componentStack
	    ? null
	    : { parent: componentStack.parent, type: "Suspense Fallback" };
	}
	function getThrownInfo(node$jscomp$0) {
	  var errorInfo = {};
	  node$jscomp$0 &&
	    Object.defineProperty(errorInfo, "componentStack", {
	      configurable: true,
	      enumerable: true,
	      get: function () {
	        try {
	          var info = "",
	            node = node$jscomp$0;
	          do
	            (info += describeComponentStackByType(node.type)),
	              (node = node.parent);
	          while (node);
	          var JSCompiler_inline_result = info;
	        } catch (x) {
	          JSCompiler_inline_result =
	            "\nError generating stack: " + x.message + "\n" + x.stack;
	        }
	        Object.defineProperty(errorInfo, "componentStack", {
	          value: JSCompiler_inline_result
	        });
	        return JSCompiler_inline_result;
	      }
	    });
	  return errorInfo;
	}
	function logRecoverableError(request, error, errorInfo) {
	  request = request.onError;
	  error = request(error, errorInfo);
	  if (null == error || "string" === typeof error) return error;
	}
	function fatalError(request, error) {
	  var onShellError = request.onShellError,
	    onFatalError = request.onFatalError;
	  onShellError(error);
	  onFatalError(error);
	  null !== request.destination
	    ? ((request.status = 14), request.destination.destroy(error))
	    : ((request.status = 13), (request.fatalError = error));
	}
	function finishSuspenseListRow(request, row) {
	  unblockSuspenseListRow(request, row.next, row.hoistables);
	}
	function unblockSuspenseListRow(request, unblockedRow, inheritedHoistables) {
	  for (; null !== unblockedRow; ) {
	    null !== inheritedHoistables &&
	      (hoistHoistables(unblockedRow.hoistables, inheritedHoistables),
	      (unblockedRow.inheritedHoistables = inheritedHoistables));
	    var unblockedBoundaries = unblockedRow.boundaries;
	    if (null !== unblockedBoundaries) {
	      unblockedRow.boundaries = null;
	      for (var i = 0; i < unblockedBoundaries.length; i++) {
	        var unblockedBoundary = unblockedBoundaries[i];
	        null !== inheritedHoistables &&
	          hoistHoistables(unblockedBoundary.contentState, inheritedHoistables);
	        finishedTask(request, unblockedBoundary, null, null);
	      }
	    }
	    unblockedRow.pendingTasks--;
	    if (0 < unblockedRow.pendingTasks) break;
	    inheritedHoistables = unblockedRow.hoistables;
	    unblockedRow = unblockedRow.next;
	  }
	}
	function tryToResolveTogetherRow(request, togetherRow) {
	  var boundaries = togetherRow.boundaries;
	  if (null !== boundaries && togetherRow.pendingTasks === boundaries.length) {
	    for (var allCompleteAndInlinable = true, i = 0; i < boundaries.length; i++) {
	      var rowBoundary = boundaries[i];
	      if (
	        1 !== rowBoundary.pendingTasks ||
	        rowBoundary.parentFlushed ||
	        isEligibleForOutlining(request, rowBoundary)
	      ) {
	        allCompleteAndInlinable = false;
	        break;
	      }
	    }
	    allCompleteAndInlinable &&
	      unblockSuspenseListRow(request, togetherRow, togetherRow.hoistables);
	  }
	}
	function createSuspenseListRow(previousRow) {
	  var newRow = {
	    pendingTasks: 1,
	    boundaries: null,
	    hoistables: createHoistableState(),
	    inheritedHoistables: null,
	    together: false,
	    next: null
	  };
	  null !== previousRow &&
	    0 < previousRow.pendingTasks &&
	    (newRow.pendingTasks++,
	    (newRow.boundaries = []),
	    (previousRow.next = newRow));
	  return newRow;
	}
	function renderSuspenseListRows(request, task, keyPath, rows, revealOrder) {
	  var prevKeyPath = task.keyPath,
	    prevTreeContext = task.treeContext,
	    prevRow = task.row;
	  task.keyPath = keyPath;
	  keyPath = rows.length;
	  var previousSuspenseListRow = null;
	  if (null !== task.replay) {
	    var resumeSlots = task.replay.slots;
	    if (null !== resumeSlots && "object" === typeof resumeSlots)
	      for (var n = 0; n < keyPath; n++) {
	        var i =
	            "backwards" !== revealOrder &&
	            "unstable_legacy-backwards" !== revealOrder
	              ? n
	              : keyPath - 1 - n,
	          node = rows[i];
	        task.row = previousSuspenseListRow = createSuspenseListRow(
	          previousSuspenseListRow
	        );
	        task.treeContext = pushTreeContext(prevTreeContext, keyPath, i);
	        var resumeSegmentID = resumeSlots[i];
	        "number" === typeof resumeSegmentID
	          ? (resumeNode(request, task, resumeSegmentID, node, i),
	            delete resumeSlots[i])
	          : renderNode(request, task, node, i);
	        0 === --previousSuspenseListRow.pendingTasks &&
	          finishSuspenseListRow(request, previousSuspenseListRow);
	      }
	    else
	      for (resumeSlots = 0; resumeSlots < keyPath; resumeSlots++)
	        (n =
	          "backwards" !== revealOrder &&
	          "unstable_legacy-backwards" !== revealOrder
	            ? resumeSlots
	            : keyPath - 1 - resumeSlots),
	          (i = rows[n]),
	          (task.row = previousSuspenseListRow =
	            createSuspenseListRow(previousSuspenseListRow)),
	          (task.treeContext = pushTreeContext(prevTreeContext, keyPath, n)),
	          renderNode(request, task, i, n),
	          0 === --previousSuspenseListRow.pendingTasks &&
	            finishSuspenseListRow(request, previousSuspenseListRow);
	  } else if (
	    "backwards" !== revealOrder &&
	    "unstable_legacy-backwards" !== revealOrder
	  )
	    for (revealOrder = 0; revealOrder < keyPath; revealOrder++)
	      (resumeSlots = rows[revealOrder]),
	        (task.row = previousSuspenseListRow =
	          createSuspenseListRow(previousSuspenseListRow)),
	        (task.treeContext = pushTreeContext(
	          prevTreeContext,
	          keyPath,
	          revealOrder
	        )),
	        renderNode(request, task, resumeSlots, revealOrder),
	        0 === --previousSuspenseListRow.pendingTasks &&
	          finishSuspenseListRow(request, previousSuspenseListRow);
	  else {
	    revealOrder = task.blockedSegment;
	    resumeSlots = revealOrder.children.length;
	    n = revealOrder.chunks.length;
	    for (i = keyPath - 1; 0 <= i; i--) {
	      node = rows[i];
	      task.row = previousSuspenseListRow = createSuspenseListRow(
	        previousSuspenseListRow
	      );
	      task.treeContext = pushTreeContext(prevTreeContext, keyPath, i);
	      resumeSegmentID = createPendingSegment(
	        request,
	        n,
	        null,
	        task.formatContext,
	        0 === i ? revealOrder.lastPushedText : true,
	        true
	      );
	      revealOrder.children.splice(resumeSlots, 0, resumeSegmentID);
	      task.blockedSegment = resumeSegmentID;
	      try {
	        renderNode(request, task, node, i),
	          pushSegmentFinale(
	            resumeSegmentID.chunks,
	            request.renderState,
	            resumeSegmentID.lastPushedText,
	            resumeSegmentID.textEmbedded
	          ),
	          (resumeSegmentID.status = 1),
	          0 === --previousSuspenseListRow.pendingTasks &&
	            finishSuspenseListRow(request, previousSuspenseListRow);
	      } catch (thrownValue) {
	        throw (
	          ((resumeSegmentID.status = 12 === request.status ? 3 : 4),
	          thrownValue)
	        );
	      }
	    }
	    task.blockedSegment = revealOrder;
	    revealOrder.lastPushedText = false;
	  }
	  null !== prevRow &&
	    null !== previousSuspenseListRow &&
	    0 < previousSuspenseListRow.pendingTasks &&
	    (prevRow.pendingTasks++, (previousSuspenseListRow.next = prevRow));
	  task.treeContext = prevTreeContext;
	  task.row = prevRow;
	  task.keyPath = prevKeyPath;
	}
	function renderWithHooks(request, task, keyPath, Component, props, secondArg) {
	  var prevThenableState = task.thenableState;
	  task.thenableState = null;
	  currentlyRenderingComponent = {};
	  currentlyRenderingTask = task;
	  currentlyRenderingRequest = request;
	  currentlyRenderingKeyPath = keyPath;
	  actionStateCounter = localIdCounter = 0;
	  actionStateMatchingIndex = -1;
	  thenableIndexCounter = 0;
	  thenableState = prevThenableState;
	  for (request = Component(props, secondArg); didScheduleRenderPhaseUpdate; )
	    (didScheduleRenderPhaseUpdate = false),
	      (actionStateCounter = localIdCounter = 0),
	      (actionStateMatchingIndex = -1),
	      (thenableIndexCounter = 0),
	      (numberOfReRenders += 1),
	      (workInProgressHook = null),
	      (request = Component(props, secondArg));
	  resetHooksState();
	  return request;
	}
	function finishFunctionComponent(
	  request,
	  task,
	  keyPath,
	  children,
	  hasId,
	  actionStateCount,
	  actionStateMatchingIndex
	) {
	  var didEmitActionStateMarkers = false;
	  if (0 !== actionStateCount && null !== request.formState) {
	    var segment = task.blockedSegment;
	    if (null !== segment) {
	      didEmitActionStateMarkers = true;
	      segment = segment.chunks;
	      for (var i = 0; i < actionStateCount; i++)
	        i === actionStateMatchingIndex
	          ? segment.push("\x3c!--F!--\x3e")
	          : segment.push("\x3c!--F--\x3e");
	    }
	  }
	  actionStateCount = task.keyPath;
	  task.keyPath = keyPath;
	  hasId
	    ? ((keyPath = task.treeContext),
	      (task.treeContext = pushTreeContext(keyPath, 1, 0)),
	      renderNode(request, task, children, -1),
	      (task.treeContext = keyPath))
	    : didEmitActionStateMarkers
	      ? renderNode(request, task, children, -1)
	      : renderNodeDestructive(request, task, children, -1);
	  task.keyPath = actionStateCount;
	}
	function renderElement(request, task, keyPath, type, props, ref) {
	  if ("function" === typeof type)
	    if (type.prototype && type.prototype.isReactComponent) {
	      var newProps = props;
	      if ("ref" in props) {
	        newProps = {};
	        for (var propName in props)
	          "ref" !== propName && (newProps[propName] = props[propName]);
	      }
	      var defaultProps = type.defaultProps;
	      if (defaultProps) {
	        newProps === props && (newProps = assign({}, newProps, props));
	        for (var propName$43 in defaultProps)
	          void 0 === newProps[propName$43] &&
	            (newProps[propName$43] = defaultProps[propName$43]);
	      }
	      props = newProps;
	      newProps = emptyContextObject;
	      defaultProps = type.contextType;
	      "object" === typeof defaultProps &&
	        null !== defaultProps &&
	        (newProps = defaultProps._currentValue2);
	      newProps = new type(props, newProps);
	      var initialState = void 0 !== newProps.state ? newProps.state : null;
	      newProps.updater = classComponentUpdater;
	      newProps.props = props;
	      newProps.state = initialState;
	      defaultProps = { queue: [], replace: false };
	      newProps._reactInternals = defaultProps;
	      ref = type.contextType;
	      newProps.context =
	        "object" === typeof ref && null !== ref
	          ? ref._currentValue2
	          : emptyContextObject;
	      ref = type.getDerivedStateFromProps;
	      "function" === typeof ref &&
	        ((ref = ref(props, initialState)),
	        (initialState =
	          null === ref || void 0 === ref
	            ? initialState
	            : assign({}, initialState, ref)),
	        (newProps.state = initialState));
	      if (
	        "function" !== typeof type.getDerivedStateFromProps &&
	        "function" !== typeof newProps.getSnapshotBeforeUpdate &&
	        ("function" === typeof newProps.UNSAFE_componentWillMount ||
	          "function" === typeof newProps.componentWillMount)
	      )
	        if (
	          ((type = newProps.state),
	          "function" === typeof newProps.componentWillMount &&
	            newProps.componentWillMount(),
	          "function" === typeof newProps.UNSAFE_componentWillMount &&
	            newProps.UNSAFE_componentWillMount(),
	          type !== newProps.state &&
	            classComponentUpdater.enqueueReplaceState(
	              newProps,
	              newProps.state,
	              null
	            ),
	          null !== defaultProps.queue && 0 < defaultProps.queue.length)
	        )
	          if (
	            ((type = defaultProps.queue),
	            (ref = defaultProps.replace),
	            (defaultProps.queue = null),
	            (defaultProps.replace = false),
	            ref && 1 === type.length)
	          )
	            newProps.state = type[0];
	          else {
	            defaultProps = ref ? type[0] : newProps.state;
	            initialState = true;
	            for (ref = ref ? 1 : 0; ref < type.length; ref++)
	              (propName$43 = type[ref]),
	                (propName$43 =
	                  "function" === typeof propName$43
	                    ? propName$43.call(newProps, defaultProps, props, void 0)
	                    : propName$43),
	                null != propName$43 &&
	                  (initialState
	                    ? ((initialState = false),
	                      (defaultProps = assign({}, defaultProps, propName$43)))
	                    : assign(defaultProps, propName$43));
	            newProps.state = defaultProps;
	          }
	        else defaultProps.queue = null;
	      type = newProps.render();
	      if (12 === request.status) throw null;
	      props = task.keyPath;
	      task.keyPath = keyPath;
	      renderNodeDestructive(request, task, type, -1);
	      task.keyPath = props;
	    } else {
	      type = renderWithHooks(request, task, keyPath, type, props, void 0);
	      if (12 === request.status) throw null;
	      finishFunctionComponent(
	        request,
	        task,
	        keyPath,
	        type,
	        0 !== localIdCounter,
	        actionStateCounter,
	        actionStateMatchingIndex
	      );
	    }
	  else if ("string" === typeof type)
	    if (((newProps = task.blockedSegment), null === newProps))
	      (newProps = props.children),
	        (defaultProps = task.formatContext),
	        (initialState = task.keyPath),
	        (task.formatContext = getChildFormatContext(defaultProps, type, props)),
	        (task.keyPath = keyPath),
	        renderNode(request, task, newProps, -1),
	        (task.formatContext = defaultProps),
	        (task.keyPath = initialState);
	    else {
	      initialState = pushStartInstance(
	        newProps.chunks,
	        type,
	        props,
	        request.resumableState,
	        request.renderState,
	        task.blockedPreamble,
	        task.hoistableState,
	        task.formatContext,
	        newProps.lastPushedText
	      );
	      newProps.lastPushedText = false;
	      defaultProps = task.formatContext;
	      ref = task.keyPath;
	      task.keyPath = keyPath;
	      if (
	        3 ===
	        (task.formatContext = getChildFormatContext(defaultProps, type, props))
	          .insertionMode
	      ) {
	        keyPath = createPendingSegment(
	          request,
	          0,
	          null,
	          task.formatContext,
	          false,
	          false
	        );
	        newProps.preambleChildren.push(keyPath);
	        task.blockedSegment = keyPath;
	        try {
	          (keyPath.status = 6),
	            renderNode(request, task, initialState, -1),
	            pushSegmentFinale(
	              keyPath.chunks,
	              request.renderState,
	              keyPath.lastPushedText,
	              keyPath.textEmbedded
	            ),
	            (keyPath.status = 1);
	        } finally {
	          task.blockedSegment = newProps;
	        }
	      } else renderNode(request, task, initialState, -1);
	      task.formatContext = defaultProps;
	      task.keyPath = ref;
	      a: {
	        task = newProps.chunks;
	        request = request.resumableState;
	        switch (type) {
	          case "title":
	          case "style":
	          case "script":
	          case "area":
	          case "base":
	          case "br":
	          case "col":
	          case "embed":
	          case "hr":
	          case "img":
	          case "input":
	          case "keygen":
	          case "link":
	          case "meta":
	          case "param":
	          case "source":
	          case "track":
	          case "wbr":
	            break a;
	          case "body":
	            if (1 >= defaultProps.insertionMode) {
	              request.hasBody = true;
	              break a;
	            }
	            break;
	          case "html":
	            if (0 === defaultProps.insertionMode) {
	              request.hasHtml = true;
	              break a;
	            }
	            break;
	          case "head":
	            if (1 >= defaultProps.insertionMode) break a;
	        }
	        task.push(endChunkForTag(type));
	      }
	      newProps.lastPushedText = false;
	    }
	  else {
	    switch (type) {
	      case REACT_LEGACY_HIDDEN_TYPE:
	      case REACT_STRICT_MODE_TYPE:
	      case REACT_PROFILER_TYPE:
	      case REACT_FRAGMENT_TYPE:
	        type = task.keyPath;
	        task.keyPath = keyPath;
	        renderNodeDestructive(request, task, props.children, -1);
	        task.keyPath = type;
	        return;
	      case REACT_ACTIVITY_TYPE:
	        type = task.blockedSegment;
	        null === type
	          ? "hidden" !== props.mode &&
	            ((type = task.keyPath),
	            (task.keyPath = keyPath),
	            renderNode(request, task, props.children, -1),
	            (task.keyPath = type))
	          : "hidden" !== props.mode &&
	            (request.renderState.generateStaticMarkup ||
	              type.chunks.push("\x3c!--&--\x3e"),
	            (type.lastPushedText = false),
	            (newProps = task.keyPath),
	            (task.keyPath = keyPath),
	            renderNode(request, task, props.children, -1),
	            (task.keyPath = newProps),
	            request.renderState.generateStaticMarkup ||
	              type.chunks.push("\x3c!--/&--\x3e"),
	            (type.lastPushedText = false));
	        return;
	      case REACT_SUSPENSE_LIST_TYPE:
	        a: {
	          type = props.children;
	          props = props.revealOrder;
	          if (
	            "forwards" === props ||
	            "backwards" === props ||
	            "unstable_legacy-backwards" === props
	          ) {
	            if (isArrayImpl(type)) {
	              renderSuspenseListRows(request, task, keyPath, type, props);
	              break a;
	            }
	            if ((newProps = getIteratorFn(type)))
	              if ((newProps = newProps.call(type))) {
	                defaultProps = newProps.next();
	                if (!defaultProps.done) {
	                  do defaultProps = newProps.next();
	                  while (!defaultProps.done);
	                  renderSuspenseListRows(request, task, keyPath, type, props);
	                }
	                break a;
	              }
	          }
	          "together" === props
	            ? ((props = task.keyPath),
	              (newProps = task.row),
	              (defaultProps = task.row = createSuspenseListRow(null)),
	              (defaultProps.boundaries = []),
	              (defaultProps.together = true),
	              (task.keyPath = keyPath),
	              renderNodeDestructive(request, task, type, -1),
	              0 === --defaultProps.pendingTasks &&
	                finishSuspenseListRow(request, defaultProps),
	              (task.keyPath = props),
	              (task.row = newProps),
	              null !== newProps &&
	                0 < defaultProps.pendingTasks &&
	                (newProps.pendingTasks++, (defaultProps.next = newProps)))
	            : ((props = task.keyPath),
	              (task.keyPath = keyPath),
	              renderNodeDestructive(request, task, type, -1),
	              (task.keyPath = props));
	        }
	        return;
	      case REACT_VIEW_TRANSITION_TYPE:
	      case REACT_SCOPE_TYPE:
	        throw Error(formatProdErrorMessage(343));
	      case REACT_SUSPENSE_TYPE:
	        a: if (null !== task.replay) {
	          type = task.keyPath;
	          newProps = task.formatContext;
	          defaultProps = task.row;
	          task.keyPath = keyPath;
	          task.formatContext = getSuspenseContentFormatContext(
	            request.resumableState,
	            newProps
	          );
	          task.row = null;
	          keyPath = props.children;
	          try {
	            renderNode(request, task, keyPath, -1);
	          } finally {
	            (task.keyPath = type),
	              (task.formatContext = newProps),
	              (task.row = defaultProps);
	          }
	        } else {
	          type = task.keyPath;
	          ref = task.formatContext;
	          var prevRow = task.row,
	            parentBoundary = task.blockedBoundary;
	          propName$43 = task.blockedPreamble;
	          var parentHoistableState = task.hoistableState;
	          propName = task.blockedSegment;
	          var fallback = props.fallback;
	          props = props.children;
	          var fallbackAbortSet = new Set();
	          var newBoundary = createSuspenseBoundary(
	            request,
	            task.row,
	            fallbackAbortSet,
	            null,
	            null
	          );
	          null !== request.trackedPostpones &&
	            (newBoundary.trackedContentKeyPath = keyPath);
	          var boundarySegment = createPendingSegment(
	            request,
	            propName.chunks.length,
	            newBoundary,
	            task.formatContext,
	            false,
	            false
	          );
	          propName.children.push(boundarySegment);
	          propName.lastPushedText = false;
	          var contentRootSegment = createPendingSegment(
	            request,
	            0,
	            null,
	            task.formatContext,
	            false,
	            false
	          );
	          contentRootSegment.parentFlushed = true;
	          if (null !== request.trackedPostpones) {
	            newProps = task.componentStack;
	            defaultProps = [keyPath[0], "Suspense Fallback", keyPath[2]];
	            initialState = [defaultProps[1], defaultProps[2], [], null];
	            request.trackedPostpones.workingMap.set(defaultProps, initialState);
	            newBoundary.trackedFallbackNode = initialState;
	            task.blockedSegment = boundarySegment;
	            task.blockedPreamble = newBoundary.fallbackPreamble;
	            task.keyPath = defaultProps;
	            task.formatContext = getSuspenseFallbackFormatContext(
	              request.resumableState,
	              ref
	            );
	            task.componentStack =
	              replaceSuspenseComponentStackWithSuspenseFallbackStack(newProps);
	            boundarySegment.status = 6;
	            try {
	              renderNode(request, task, fallback, -1),
	                pushSegmentFinale(
	                  boundarySegment.chunks,
	                  request.renderState,
	                  boundarySegment.lastPushedText,
	                  boundarySegment.textEmbedded
	                ),
	                (boundarySegment.status = 1);
	            } catch (thrownValue) {
	              throw (
	                ((boundarySegment.status = 12 === request.status ? 3 : 4),
	                thrownValue)
	              );
	            } finally {
	              (task.blockedSegment = propName),
	                (task.blockedPreamble = propName$43),
	                (task.keyPath = type),
	                (task.formatContext = ref);
	            }
	            task = createRenderTask(
	              request,
	              null,
	              props,
	              -1,
	              newBoundary,
	              contentRootSegment,
	              newBoundary.contentPreamble,
	              newBoundary.contentState,
	              task.abortSet,
	              keyPath,
	              getSuspenseContentFormatContext(
	                request.resumableState,
	                task.formatContext
	              ),
	              task.context,
	              task.treeContext,
	              null,
	              newProps
	            );
	            pushComponentStack(task);
	            request.pingedTasks.push(task);
	          } else {
	            task.blockedBoundary = newBoundary;
	            task.blockedPreamble = newBoundary.contentPreamble;
	            task.hoistableState = newBoundary.contentState;
	            task.blockedSegment = contentRootSegment;
	            task.keyPath = keyPath;
	            task.formatContext = getSuspenseContentFormatContext(
	              request.resumableState,
	              ref
	            );
	            task.row = null;
	            contentRootSegment.status = 6;
	            try {
	              if (
	                (renderNode(request, task, props, -1),
	                pushSegmentFinale(
	                  contentRootSegment.chunks,
	                  request.renderState,
	                  contentRootSegment.lastPushedText,
	                  contentRootSegment.textEmbedded
	                ),
	                (contentRootSegment.status = 1),
	                queueCompletedSegment(newBoundary, contentRootSegment),
	                0 === newBoundary.pendingTasks && 0 === newBoundary.status)
	              ) {
	                if (
	                  ((newBoundary.status = 1),
	                  !isEligibleForOutlining(request, newBoundary))
	                ) {
	                  null !== prevRow &&
	                    0 === --prevRow.pendingTasks &&
	                    finishSuspenseListRow(request, prevRow);
	                  0 === request.pendingRootTasks &&
	                    task.blockedPreamble &&
	                    preparePreamble(request);
	                  break a;
	                }
	              } else
	                null !== prevRow &&
	                  prevRow.together &&
	                  tryToResolveTogetherRow(request, prevRow);
	            } catch (thrownValue$30) {
	              (newBoundary.status = 4),
	                12 === request.status
	                  ? ((contentRootSegment.status = 3),
	                    (newProps = request.fatalError))
	                  : ((contentRootSegment.status = 4),
	                    (newProps = thrownValue$30)),
	                (defaultProps = getThrownInfo(task.componentStack)),
	                (initialState = logRecoverableError(
	                  request,
	                  newProps,
	                  defaultProps
	                )),
	                (newBoundary.errorDigest = initialState),
	                untrackBoundary(request, newBoundary);
	            } finally {
	              (task.blockedBoundary = parentBoundary),
	                (task.blockedPreamble = propName$43),
	                (task.hoistableState = parentHoistableState),
	                (task.blockedSegment = propName),
	                (task.keyPath = type),
	                (task.formatContext = ref),
	                (task.row = prevRow);
	            }
	            task = createRenderTask(
	              request,
	              null,
	              fallback,
	              -1,
	              parentBoundary,
	              boundarySegment,
	              newBoundary.fallbackPreamble,
	              newBoundary.fallbackState,
	              fallbackAbortSet,
	              [keyPath[0], "Suspense Fallback", keyPath[2]],
	              getSuspenseFallbackFormatContext(
	                request.resumableState,
	                task.formatContext
	              ),
	              task.context,
	              task.treeContext,
	              task.row,
	              replaceSuspenseComponentStackWithSuspenseFallbackStack(
	                task.componentStack
	              )
	            );
	            pushComponentStack(task);
	            request.pingedTasks.push(task);
	          }
	        }
	        return;
	    }
	    if ("object" === typeof type && null !== type)
	      switch (type.$$typeof) {
	        case REACT_FORWARD_REF_TYPE:
	          if ("ref" in props)
	            for (fallback in ((newProps = {}), props))
	              "ref" !== fallback && (newProps[fallback] = props[fallback]);
	          else newProps = props;
	          type = renderWithHooks(
	            request,
	            task,
	            keyPath,
	            type.render,
	            newProps,
	            ref
	          );
	          finishFunctionComponent(
	            request,
	            task,
	            keyPath,
	            type,
	            0 !== localIdCounter,
	            actionStateCounter,
	            actionStateMatchingIndex
	          );
	          return;
	        case REACT_MEMO_TYPE:
	          renderElement(request, task, keyPath, type.type, props, ref);
	          return;
	        case REACT_CONTEXT_TYPE:
	          defaultProps = props.children;
	          newProps = task.keyPath;
	          props = props.value;
	          initialState = type._currentValue2;
	          type._currentValue2 = props;
	          ref = currentActiveSnapshot;
	          currentActiveSnapshot = type = {
	            parent: ref,
	            depth: null === ref ? 0 : ref.depth + 1,
	            context: type,
	            parentValue: initialState,
	            value: props
	          };
	          task.context = type;
	          task.keyPath = keyPath;
	          renderNodeDestructive(request, task, defaultProps, -1);
	          request = currentActiveSnapshot;
	          if (null === request) throw Error(formatProdErrorMessage(403));
	          request.context._currentValue2 = request.parentValue;
	          request = currentActiveSnapshot = request.parent;
	          task.context = request;
	          task.keyPath = newProps;
	          return;
	        case REACT_CONSUMER_TYPE:
	          props = props.children;
	          type = props(type._context._currentValue2);
	          props = task.keyPath;
	          task.keyPath = keyPath;
	          renderNodeDestructive(request, task, type, -1);
	          task.keyPath = props;
	          return;
	        case REACT_LAZY_TYPE:
	          newProps = type._init;
	          type = newProps(type._payload);
	          if (12 === request.status) throw null;
	          renderElement(request, task, keyPath, type, props, ref);
	          return;
	      }
	    throw Error(
	      formatProdErrorMessage(130, null == type ? type : typeof type, "")
	    );
	  }
	}
	function resumeNode(request, task, segmentId, node, childIndex) {
	  var prevReplay = task.replay,
	    blockedBoundary = task.blockedBoundary,
	    resumedSegment = createPendingSegment(
	      request,
	      0,
	      null,
	      task.formatContext,
	      false,
	      false
	    );
	  resumedSegment.id = segmentId;
	  resumedSegment.parentFlushed = true;
	  try {
	    (task.replay = null),
	      (task.blockedSegment = resumedSegment),
	      renderNode(request, task, node, childIndex),
	      (resumedSegment.status = 1),
	      null === blockedBoundary
	        ? (request.completedRootSegment = resumedSegment)
	        : (queueCompletedSegment(blockedBoundary, resumedSegment),
	          blockedBoundary.parentFlushed &&
	            request.partialBoundaries.push(blockedBoundary));
	  } finally {
	    (task.replay = prevReplay), (task.blockedSegment = null);
	  }
	}
	function renderNodeDestructive(request, task, node, childIndex) {
	  null !== task.replay && "number" === typeof task.replay.slots
	    ? resumeNode(request, task, task.replay.slots, node, childIndex)
	    : ((task.node = node),
	      (task.childIndex = childIndex),
	      (node = task.componentStack),
	      pushComponentStack(task),
	      retryNode(request, task),
	      (task.componentStack = node));
	}
	function retryNode(request, task) {
	  var node = task.node,
	    childIndex = task.childIndex;
	  if (null !== node) {
	    if ("object" === typeof node) {
	      switch (node.$$typeof) {
	        case REACT_ELEMENT_TYPE:
	          var type = node.type,
	            key = node.key,
	            props = node.props;
	          node = props.ref;
	          var ref = void 0 !== node ? node : null,
	            name = getComponentNameFromType(type),
	            keyOrIndex =
	              null == key ? (-1 === childIndex ? 0 : childIndex) : key;
	          key = [task.keyPath, name, keyOrIndex];
	          if (null !== task.replay)
	            a: {
	              var replay = task.replay;
	              childIndex = replay.nodes;
	              for (node = 0; node < childIndex.length; node++) {
	                var node$jscomp$0 = childIndex[node];
	                if (keyOrIndex === node$jscomp$0[1]) {
	                  if (4 === node$jscomp$0.length) {
	                    if (null !== name && name !== node$jscomp$0[0])
	                      throw Error(
	                        formatProdErrorMessage(490, node$jscomp$0[0], name)
	                      );
	                    var childNodes = node$jscomp$0[2];
	                    name = node$jscomp$0[3];
	                    keyOrIndex = task.node;
	                    task.replay = {
	                      nodes: childNodes,
	                      slots: name,
	                      pendingTasks: 1
	                    };
	                    try {
	                      renderElement(request, task, key, type, props, ref);
	                      if (
	                        1 === task.replay.pendingTasks &&
	                        0 < task.replay.nodes.length
	                      )
	                        throw Error(formatProdErrorMessage(488));
	                      task.replay.pendingTasks--;
	                    } catch (x) {
	                      if (
	                        "object" === typeof x &&
	                        null !== x &&
	                        (x === SuspenseException ||
	                          "function" === typeof x.then)
	                      )
	                        throw (
	                          (task.node === keyOrIndex
	                            ? (task.replay = replay)
	                            : childIndex.splice(node, 1),
	                          x)
	                        );
	                      task.replay.pendingTasks--;
	                      props = getThrownInfo(task.componentStack);
	                      key = request;
	                      request = task.blockedBoundary;
	                      type = x;
	                      props = logRecoverableError(key, type, props);
	                      abortRemainingReplayNodes(
	                        key,
	                        request,
	                        childNodes,
	                        name,
	                        type,
	                        props
	                      );
	                    }
	                    task.replay = replay;
	                  } else {
	                    if (type !== REACT_SUSPENSE_TYPE)
	                      throw Error(
	                        formatProdErrorMessage(
	                          490,
	                          "Suspense",
	                          getComponentNameFromType(type) || "Unknown"
	                        )
	                      );
	                    b: {
	                      replay = void 0;
	                      type = node$jscomp$0[5];
	                      ref = node$jscomp$0[2];
	                      name = node$jscomp$0[3];
	                      keyOrIndex =
	                        null === node$jscomp$0[4] ? [] : node$jscomp$0[4][2];
	                      node$jscomp$0 =
	                        null === node$jscomp$0[4] ? null : node$jscomp$0[4][3];
	                      var prevKeyPath = task.keyPath,
	                        prevContext = task.formatContext,
	                        prevRow = task.row,
	                        previousReplaySet = task.replay,
	                        parentBoundary = task.blockedBoundary,
	                        parentHoistableState = task.hoistableState,
	                        content = props.children,
	                        fallback = props.fallback,
	                        fallbackAbortSet = new Set();
	                      props = createSuspenseBoundary(
	                        request,
	                        task.row,
	                        fallbackAbortSet,
	                        null,
	                        null
	                      );
	                      props.parentFlushed = true;
	                      props.rootSegmentID = type;
	                      task.blockedBoundary = props;
	                      task.hoistableState = props.contentState;
	                      task.keyPath = key;
	                      task.formatContext = getSuspenseContentFormatContext(
	                        request.resumableState,
	                        prevContext
	                      );
	                      task.row = null;
	                      task.replay = {
	                        nodes: ref,
	                        slots: name,
	                        pendingTasks: 1
	                      };
	                      try {
	                        renderNode(request, task, content, -1);
	                        if (
	                          1 === task.replay.pendingTasks &&
	                          0 < task.replay.nodes.length
	                        )
	                          throw Error(formatProdErrorMessage(488));
	                        task.replay.pendingTasks--;
	                        if (0 === props.pendingTasks && 0 === props.status) {
	                          props.status = 1;
	                          request.completedBoundaries.push(props);
	                          break b;
	                        }
	                      } catch (error) {
	                        (props.status = 4),
	                          (childNodes = getThrownInfo(task.componentStack)),
	                          (replay = logRecoverableError(
	                            request,
	                            error,
	                            childNodes
	                          )),
	                          (props.errorDigest = replay),
	                          task.replay.pendingTasks--,
	                          request.clientRenderedBoundaries.push(props);
	                      } finally {
	                        (task.blockedBoundary = parentBoundary),
	                          (task.hoistableState = parentHoistableState),
	                          (task.replay = previousReplaySet),
	                          (task.keyPath = prevKeyPath),
	                          (task.formatContext = prevContext),
	                          (task.row = prevRow);
	                      }
	                      childNodes = createReplayTask(
	                        request,
	                        null,
	                        {
	                          nodes: keyOrIndex,
	                          slots: node$jscomp$0,
	                          pendingTasks: 0
	                        },
	                        fallback,
	                        -1,
	                        parentBoundary,
	                        props.fallbackState,
	                        fallbackAbortSet,
	                        [key[0], "Suspense Fallback", key[2]],
	                        getSuspenseFallbackFormatContext(
	                          request.resumableState,
	                          task.formatContext
	                        ),
	                        task.context,
	                        task.treeContext,
	                        task.row,
	                        replaceSuspenseComponentStackWithSuspenseFallbackStack(
	                          task.componentStack
	                        )
	                      );
	                      pushComponentStack(childNodes);
	                      request.pingedTasks.push(childNodes);
	                    }
	                  }
	                  childIndex.splice(node, 1);
	                  break a;
	                }
	              }
	            }
	          else renderElement(request, task, key, type, props, ref);
	          return;
	        case REACT_PORTAL_TYPE:
	          throw Error(formatProdErrorMessage(257));
	        case REACT_LAZY_TYPE:
	          childNodes = node._init;
	          node = childNodes(node._payload);
	          if (12 === request.status) throw null;
	          renderNodeDestructive(request, task, node, childIndex);
	          return;
	      }
	      if (isArrayImpl(node)) {
	        renderChildrenArray(request, task, node, childIndex);
	        return;
	      }
	      if ((childNodes = getIteratorFn(node)))
	        if ((childNodes = childNodes.call(node))) {
	          node = childNodes.next();
	          if (!node.done) {
	            props = [];
	            do props.push(node.value), (node = childNodes.next());
	            while (!node.done);
	            renderChildrenArray(request, task, props, childIndex);
	          }
	          return;
	        }
	      if ("function" === typeof node.then)
	        return (
	          (task.thenableState = null),
	          renderNodeDestructive(request, task, unwrapThenable(node), childIndex)
	        );
	      if (node.$$typeof === REACT_CONTEXT_TYPE)
	        return renderNodeDestructive(
	          request,
	          task,
	          node._currentValue2,
	          childIndex
	        );
	      childIndex = Object.prototype.toString.call(node);
	      throw Error(
	        formatProdErrorMessage(
	          31,
	          "[object Object]" === childIndex
	            ? "object with keys {" + Object.keys(node).join(", ") + "}"
	            : childIndex
	        )
	      );
	    }
	    if ("string" === typeof node)
	      (childIndex = task.blockedSegment),
	        null !== childIndex &&
	          (childIndex.lastPushedText = pushTextInstance(
	            childIndex.chunks,
	            node,
	            request.renderState,
	            childIndex.lastPushedText
	          ));
	    else if ("number" === typeof node || "bigint" === typeof node)
	      (childIndex = task.blockedSegment),
	        null !== childIndex &&
	          (childIndex.lastPushedText = pushTextInstance(
	            childIndex.chunks,
	            "" + node,
	            request.renderState,
	            childIndex.lastPushedText
	          ));
	  }
	}
	function renderChildrenArray(request, task, children, childIndex) {
	  var prevKeyPath = task.keyPath;
	  if (
	    -1 !== childIndex &&
	    ((task.keyPath = [task.keyPath, "Fragment", childIndex]),
	    null !== task.replay)
	  ) {
	    for (
	      var replay = task.replay, replayNodes = replay.nodes, j = 0;
	      j < replayNodes.length;
	      j++
	    ) {
	      var node = replayNodes[j];
	      if (node[1] === childIndex) {
	        childIndex = node[2];
	        node = node[3];
	        task.replay = { nodes: childIndex, slots: node, pendingTasks: 1 };
	        try {
	          renderChildrenArray(request, task, children, -1);
	          if (1 === task.replay.pendingTasks && 0 < task.replay.nodes.length)
	            throw Error(formatProdErrorMessage(488));
	          task.replay.pendingTasks--;
	        } catch (x) {
	          if (
	            "object" === typeof x &&
	            null !== x &&
	            (x === SuspenseException || "function" === typeof x.then)
	          )
	            throw x;
	          task.replay.pendingTasks--;
	          children = getThrownInfo(task.componentStack);
	          var boundary = task.blockedBoundary,
	            error = x;
	          children = logRecoverableError(request, error, children);
	          abortRemainingReplayNodes(
	            request,
	            boundary,
	            childIndex,
	            node,
	            error,
	            children
	          );
	        }
	        task.replay = replay;
	        replayNodes.splice(j, 1);
	        break;
	      }
	    }
	    task.keyPath = prevKeyPath;
	    return;
	  }
	  replay = task.treeContext;
	  replayNodes = children.length;
	  if (
	    null !== task.replay &&
	    ((j = task.replay.slots), null !== j && "object" === typeof j)
	  ) {
	    for (childIndex = 0; childIndex < replayNodes; childIndex++)
	      (node = children[childIndex]),
	        (task.treeContext = pushTreeContext(replay, replayNodes, childIndex)),
	        (boundary = j[childIndex]),
	        "number" === typeof boundary
	          ? (resumeNode(request, task, boundary, node, childIndex),
	            delete j[childIndex])
	          : renderNode(request, task, node, childIndex);
	    task.treeContext = replay;
	    task.keyPath = prevKeyPath;
	    return;
	  }
	  for (j = 0; j < replayNodes; j++)
	    (childIndex = children[j]),
	      (task.treeContext = pushTreeContext(replay, replayNodes, j)),
	      renderNode(request, task, childIndex, j);
	  task.treeContext = replay;
	  task.keyPath = prevKeyPath;
	}
	function trackPostponedBoundary(request, trackedPostpones, boundary) {
	  boundary.status = 5;
	  boundary.rootSegmentID = request.nextSegmentId++;
	  request = boundary.trackedContentKeyPath;
	  if (null === request) throw Error(formatProdErrorMessage(486));
	  var fallbackReplayNode = boundary.trackedFallbackNode,
	    children = [],
	    boundaryNode = trackedPostpones.workingMap.get(request);
	  if (void 0 === boundaryNode)
	    return (
	      (boundary = [
	        request[1],
	        request[2],
	        children,
	        null,
	        fallbackReplayNode,
	        boundary.rootSegmentID
	      ]),
	      trackedPostpones.workingMap.set(request, boundary),
	      addToReplayParent(boundary, request[0], trackedPostpones),
	      boundary
	    );
	  boundaryNode[4] = fallbackReplayNode;
	  boundaryNode[5] = boundary.rootSegmentID;
	  return boundaryNode;
	}
	function trackPostpone(request, trackedPostpones, task, segment) {
	  segment.status = 5;
	  var keyPath = task.keyPath,
	    boundary = task.blockedBoundary;
	  if (null === boundary)
	    (segment.id = request.nextSegmentId++),
	      (trackedPostpones.rootSlots = segment.id),
	      null !== request.completedRootSegment &&
	        (request.completedRootSegment.status = 5);
	  else {
	    if (null !== boundary && 0 === boundary.status) {
	      var boundaryNode = trackPostponedBoundary(
	        request,
	        trackedPostpones,
	        boundary
	      );
	      if (
	        boundary.trackedContentKeyPath === keyPath &&
	        -1 === task.childIndex
	      ) {
	        -1 === segment.id &&
	          (segment.id = segment.parentFlushed
	            ? boundary.rootSegmentID
	            : request.nextSegmentId++);
	        boundaryNode[3] = segment.id;
	        return;
	      }
	    }
	    -1 === segment.id &&
	      (segment.id =
	        segment.parentFlushed && null !== boundary
	          ? boundary.rootSegmentID
	          : request.nextSegmentId++);
	    if (-1 === task.childIndex)
	      null === keyPath
	        ? (trackedPostpones.rootSlots = segment.id)
	        : ((task = trackedPostpones.workingMap.get(keyPath)),
	          void 0 === task
	            ? ((task = [keyPath[1], keyPath[2], [], segment.id]),
	              addToReplayParent(task, keyPath[0], trackedPostpones))
	            : (task[3] = segment.id));
	    else {
	      if (null === keyPath)
	        if (((request = trackedPostpones.rootSlots), null === request))
	          request = trackedPostpones.rootSlots = {};
	        else {
	          if ("number" === typeof request)
	            throw Error(formatProdErrorMessage(491));
	        }
	      else if (
	        ((boundary = trackedPostpones.workingMap),
	        (boundaryNode = boundary.get(keyPath)),
	        void 0 === boundaryNode)
	      )
	        (request = {}),
	          (boundaryNode = [keyPath[1], keyPath[2], [], request]),
	          boundary.set(keyPath, boundaryNode),
	          addToReplayParent(boundaryNode, keyPath[0], trackedPostpones);
	      else if (((request = boundaryNode[3]), null === request))
	        request = boundaryNode[3] = {};
	      else if ("number" === typeof request)
	        throw Error(formatProdErrorMessage(491));
	      request[task.childIndex] = segment.id;
	    }
	  }
	}
	function untrackBoundary(request, boundary) {
	  request = request.trackedPostpones;
	  null !== request &&
	    ((boundary = boundary.trackedContentKeyPath),
	    null !== boundary &&
	      ((boundary = request.workingMap.get(boundary)),
	      void 0 !== boundary &&
	        ((boundary.length = 4), (boundary[2] = []), (boundary[3] = null))));
	}
	function spawnNewSuspendedReplayTask(request, task, thenableState) {
	  return createReplayTask(
	    request,
	    thenableState,
	    task.replay,
	    task.node,
	    task.childIndex,
	    task.blockedBoundary,
	    task.hoistableState,
	    task.abortSet,
	    task.keyPath,
	    task.formatContext,
	    task.context,
	    task.treeContext,
	    task.row,
	    task.componentStack
	  );
	}
	function spawnNewSuspendedRenderTask(request, task, thenableState) {
	  var segment = task.blockedSegment,
	    newSegment = createPendingSegment(
	      request,
	      segment.chunks.length,
	      null,
	      task.formatContext,
	      segment.lastPushedText,
	      true
	    );
	  segment.children.push(newSegment);
	  segment.lastPushedText = false;
	  return createRenderTask(
	    request,
	    thenableState,
	    task.node,
	    task.childIndex,
	    task.blockedBoundary,
	    newSegment,
	    task.blockedPreamble,
	    task.hoistableState,
	    task.abortSet,
	    task.keyPath,
	    task.formatContext,
	    task.context,
	    task.treeContext,
	    task.row,
	    task.componentStack
	  );
	}
	function renderNode(request, task, node, childIndex) {
	  var previousFormatContext = task.formatContext,
	    previousContext = task.context,
	    previousKeyPath = task.keyPath,
	    previousTreeContext = task.treeContext,
	    previousComponentStack = task.componentStack,
	    segment = task.blockedSegment;
	  if (null === segment) {
	    segment = task.replay;
	    try {
	      return renderNodeDestructive(request, task, node, childIndex);
	    } catch (thrownValue) {
	      if (
	        (resetHooksState(),
	        (node =
	          thrownValue === SuspenseException
	            ? getSuspendedThenable()
	            : thrownValue),
	        12 !== request.status && "object" === typeof node && null !== node)
	      ) {
	        if ("function" === typeof node.then) {
	          childIndex =
	            thrownValue === SuspenseException
	              ? getThenableStateAfterSuspending()
	              : null;
	          request = spawnNewSuspendedReplayTask(request, task, childIndex).ping;
	          node.then(request, request);
	          task.formatContext = previousFormatContext;
	          task.context = previousContext;
	          task.keyPath = previousKeyPath;
	          task.treeContext = previousTreeContext;
	          task.componentStack = previousComponentStack;
	          task.replay = segment;
	          switchContext(previousContext);
	          return;
	        }
	        if ("Maximum call stack size exceeded" === node.message) {
	          node =
	            thrownValue === SuspenseException
	              ? getThenableStateAfterSuspending()
	              : null;
	          node = spawnNewSuspendedReplayTask(request, task, node);
	          request.pingedTasks.push(node);
	          task.formatContext = previousFormatContext;
	          task.context = previousContext;
	          task.keyPath = previousKeyPath;
	          task.treeContext = previousTreeContext;
	          task.componentStack = previousComponentStack;
	          task.replay = segment;
	          switchContext(previousContext);
	          return;
	        }
	      }
	    }
	  } else {
	    var childrenLength = segment.children.length,
	      chunkLength = segment.chunks.length;
	    try {
	      return renderNodeDestructive(request, task, node, childIndex);
	    } catch (thrownValue$62) {
	      if (
	        (resetHooksState(),
	        (segment.children.length = childrenLength),
	        (segment.chunks.length = chunkLength),
	        (node =
	          thrownValue$62 === SuspenseException
	            ? getSuspendedThenable()
	            : thrownValue$62),
	        12 !== request.status && "object" === typeof node && null !== node)
	      ) {
	        if ("function" === typeof node.then) {
	          segment = node;
	          node =
	            thrownValue$62 === SuspenseException
	              ? getThenableStateAfterSuspending()
	              : null;
	          request = spawnNewSuspendedRenderTask(request, task, node).ping;
	          segment.then(request, request);
	          task.formatContext = previousFormatContext;
	          task.context = previousContext;
	          task.keyPath = previousKeyPath;
	          task.treeContext = previousTreeContext;
	          task.componentStack = previousComponentStack;
	          switchContext(previousContext);
	          return;
	        }
	        if ("Maximum call stack size exceeded" === node.message) {
	          segment =
	            thrownValue$62 === SuspenseException
	              ? getThenableStateAfterSuspending()
	              : null;
	          segment = spawnNewSuspendedRenderTask(request, task, segment);
	          request.pingedTasks.push(segment);
	          task.formatContext = previousFormatContext;
	          task.context = previousContext;
	          task.keyPath = previousKeyPath;
	          task.treeContext = previousTreeContext;
	          task.componentStack = previousComponentStack;
	          switchContext(previousContext);
	          return;
	        }
	      }
	    }
	  }
	  task.formatContext = previousFormatContext;
	  task.context = previousContext;
	  task.keyPath = previousKeyPath;
	  task.treeContext = previousTreeContext;
	  switchContext(previousContext);
	  throw node;
	}
	function abortTaskSoft(task) {
	  var boundary = task.blockedBoundary,
	    segment = task.blockedSegment;
	  null !== segment &&
	    ((segment.status = 3), finishedTask(this, boundary, task.row, segment));
	}
	function abortRemainingReplayNodes(
	  request$jscomp$0,
	  boundary,
	  nodes,
	  slots,
	  error,
	  errorDigest$jscomp$0
	) {
	  for (var i = 0; i < nodes.length; i++) {
	    var node = nodes[i];
	    if (4 === node.length)
	      abortRemainingReplayNodes(
	        request$jscomp$0,
	        boundary,
	        node[2],
	        node[3],
	        error,
	        errorDigest$jscomp$0
	      );
	    else {
	      node = node[5];
	      var request = request$jscomp$0,
	        errorDigest = errorDigest$jscomp$0,
	        resumedBoundary = createSuspenseBoundary(
	          request,
	          null,
	          new Set(),
	          null,
	          null
	        );
	      resumedBoundary.parentFlushed = true;
	      resumedBoundary.rootSegmentID = node;
	      resumedBoundary.status = 4;
	      resumedBoundary.errorDigest = errorDigest;
	      resumedBoundary.parentFlushed &&
	        request.clientRenderedBoundaries.push(resumedBoundary);
	    }
	  }
	  nodes.length = 0;
	  if (null !== slots) {
	    if (null === boundary) throw Error(formatProdErrorMessage(487));
	    4 !== boundary.status &&
	      ((boundary.status = 4),
	      (boundary.errorDigest = errorDigest$jscomp$0),
	      boundary.parentFlushed &&
	        request$jscomp$0.clientRenderedBoundaries.push(boundary));
	    if ("object" === typeof slots) for (var index in slots) delete slots[index];
	  }
	}
	function abortTask(task, request, error) {
	  var boundary = task.blockedBoundary,
	    segment = task.blockedSegment;
	  if (null !== segment) {
	    if (6 === segment.status) return;
	    segment.status = 3;
	  }
	  var errorInfo = getThrownInfo(task.componentStack);
	  if (null === boundary) {
	    if (13 !== request.status && 14 !== request.status) {
	      boundary = task.replay;
	      if (null === boundary) {
	        null !== request.trackedPostpones && null !== segment
	          ? ((boundary = request.trackedPostpones),
	            logRecoverableError(request, error, errorInfo),
	            trackPostpone(request, boundary, task, segment),
	            finishedTask(request, null, task.row, segment))
	          : (logRecoverableError(request, error, errorInfo),
	            fatalError(request, error));
	        return;
	      }
	      boundary.pendingTasks--;
	      0 === boundary.pendingTasks &&
	        0 < boundary.nodes.length &&
	        ((segment = logRecoverableError(request, error, errorInfo)),
	        abortRemainingReplayNodes(
	          request,
	          null,
	          boundary.nodes,
	          boundary.slots,
	          error,
	          segment
	        ));
	      request.pendingRootTasks--;
	      0 === request.pendingRootTasks && completeShell(request);
	    }
	  } else {
	    var trackedPostpones$63 = request.trackedPostpones;
	    if (4 !== boundary.status) {
	      if (null !== trackedPostpones$63 && null !== segment)
	        return (
	          logRecoverableError(request, error, errorInfo),
	          trackPostpone(request, trackedPostpones$63, task, segment),
	          boundary.fallbackAbortableTasks.forEach(function (fallbackTask) {
	            return abortTask(fallbackTask, request, error);
	          }),
	          boundary.fallbackAbortableTasks.clear(),
	          finishedTask(request, boundary, task.row, segment)
	        );
	      boundary.status = 4;
	      segment = logRecoverableError(request, error, errorInfo);
	      boundary.status = 4;
	      boundary.errorDigest = segment;
	      untrackBoundary(request, boundary);
	      boundary.parentFlushed && request.clientRenderedBoundaries.push(boundary);
	    }
	    boundary.pendingTasks--;
	    segment = boundary.row;
	    null !== segment &&
	      0 === --segment.pendingTasks &&
	      finishSuspenseListRow(request, segment);
	    boundary.fallbackAbortableTasks.forEach(function (fallbackTask) {
	      return abortTask(fallbackTask, request, error);
	    });
	    boundary.fallbackAbortableTasks.clear();
	  }
	  task = task.row;
	  null !== task &&
	    0 === --task.pendingTasks &&
	    finishSuspenseListRow(request, task);
	  request.allPendingTasks--;
	  0 === request.allPendingTasks && completeAll(request);
	}
	function safelyEmitEarlyPreloads(request, shellComplete) {
	  try {
	    var renderState = request.renderState,
	      onHeaders = renderState.onHeaders;
	    if (onHeaders) {
	      var headers = renderState.headers;
	      if (headers) {
	        renderState.headers = null;
	        var linkHeader = headers.preconnects;
	        headers.fontPreloads &&
	          (linkHeader && (linkHeader += ", "),
	          (linkHeader += headers.fontPreloads));
	        headers.highImagePreloads &&
	          (linkHeader && (linkHeader += ", "),
	          (linkHeader += headers.highImagePreloads));
	        if (!shellComplete) {
	          var queueIter = renderState.styles.values(),
	            queueStep = queueIter.next();
	          b: for (
	            ;
	            0 < headers.remainingCapacity && !queueStep.done;
	            queueStep = queueIter.next()
	          )
	            for (
	              var sheetIter = queueStep.value.sheets.values(),
	                sheetStep = sheetIter.next();
	              0 < headers.remainingCapacity && !sheetStep.done;
	              sheetStep = sheetIter.next()
	            ) {
	              var sheet = sheetStep.value,
	                props = sheet.props,
	                key = props.href,
	                props$jscomp$0 = sheet.props,
	                header = getPreloadAsHeader(props$jscomp$0.href, "style", {
	                  crossOrigin: props$jscomp$0.crossOrigin,
	                  integrity: props$jscomp$0.integrity,
	                  nonce: props$jscomp$0.nonce,
	                  type: props$jscomp$0.type,
	                  fetchPriority: props$jscomp$0.fetchPriority,
	                  referrerPolicy: props$jscomp$0.referrerPolicy,
	                  media: props$jscomp$0.media
	                });
	              if (0 <= (headers.remainingCapacity -= header.length + 2))
	                (renderState.resets.style[key] = PRELOAD_NO_CREDS),
	                  linkHeader && (linkHeader += ", "),
	                  (linkHeader += header),
	                  (renderState.resets.style[key] =
	                    "string" === typeof props.crossOrigin ||
	                    "string" === typeof props.integrity
	                      ? [props.crossOrigin, props.integrity]
	                      : PRELOAD_NO_CREDS);
	              else break b;
	            }
	        }
	        linkHeader ? onHeaders({ Link: linkHeader }) : onHeaders({});
	      }
	    }
	  } catch (error) {
	    logRecoverableError(request, error, {});
	  }
	}
	function completeShell(request) {
	  null === request.trackedPostpones && safelyEmitEarlyPreloads(request, true);
	  null === request.trackedPostpones && preparePreamble(request);
	  request.onShellError = noop;
	  request = request.onShellReady;
	  request();
	}
	function completeAll(request) {
	  safelyEmitEarlyPreloads(
	    request,
	    null === request.trackedPostpones
	      ? true
	      : null === request.completedRootSegment ||
	          5 !== request.completedRootSegment.status
	  );
	  preparePreamble(request);
	  request = request.onAllReady;
	  request();
	}
	function queueCompletedSegment(boundary, segment) {
	  if (
	    0 === segment.chunks.length &&
	    1 === segment.children.length &&
	    null === segment.children[0].boundary &&
	    -1 === segment.children[0].id
	  ) {
	    var childSegment = segment.children[0];
	    childSegment.id = segment.id;
	    childSegment.parentFlushed = true;
	    (1 !== childSegment.status &&
	      3 !== childSegment.status &&
	      4 !== childSegment.status) ||
	      queueCompletedSegment(boundary, childSegment);
	  } else boundary.completedSegments.push(segment);
	}
	function finishedTask(request, boundary, row, segment) {
	  null !== row &&
	    (0 === --row.pendingTasks
	      ? finishSuspenseListRow(request, row)
	      : row.together && tryToResolveTogetherRow(request, row));
	  request.allPendingTasks--;
	  if (null === boundary) {
	    if (null !== segment && segment.parentFlushed) {
	      if (null !== request.completedRootSegment)
	        throw Error(formatProdErrorMessage(389));
	      request.completedRootSegment = segment;
	    }
	    request.pendingRootTasks--;
	    0 === request.pendingRootTasks && completeShell(request);
	  } else if ((boundary.pendingTasks--, 4 !== boundary.status))
	    if (0 === boundary.pendingTasks)
	      if (
	        (0 === boundary.status && (boundary.status = 1),
	        null !== segment &&
	          segment.parentFlushed &&
	          (1 === segment.status || 3 === segment.status) &&
	          queueCompletedSegment(boundary, segment),
	        boundary.parentFlushed && request.completedBoundaries.push(boundary),
	        1 === boundary.status)
	      )
	        (row = boundary.row),
	          null !== row &&
	            hoistHoistables(row.hoistables, boundary.contentState),
	          isEligibleForOutlining(request, boundary) ||
	            (boundary.fallbackAbortableTasks.forEach(abortTaskSoft, request),
	            boundary.fallbackAbortableTasks.clear(),
	            null !== row &&
	              0 === --row.pendingTasks &&
	              finishSuspenseListRow(request, row)),
	          0 === request.pendingRootTasks &&
	            null === request.trackedPostpones &&
	            null !== boundary.contentPreamble &&
	            preparePreamble(request);
	      else {
	        if (
	          5 === boundary.status &&
	          ((boundary = boundary.row), null !== boundary)
	        ) {
	          if (null !== request.trackedPostpones) {
	            row = request.trackedPostpones;
	            var postponedRow = boundary.next;
	            if (
	              null !== postponedRow &&
	              ((segment = postponedRow.boundaries), null !== segment)
	            )
	              for (
	                postponedRow.boundaries = null, postponedRow = 0;
	                postponedRow < segment.length;
	                postponedRow++
	              ) {
	                var postponedBoundary = segment[postponedRow];
	                trackPostponedBoundary(request, row, postponedBoundary);
	                finishedTask(request, postponedBoundary, null, null);
	              }
	          }
	          0 === --boundary.pendingTasks &&
	            finishSuspenseListRow(request, boundary);
	        }
	      }
	    else
	      null === segment ||
	        !segment.parentFlushed ||
	        (1 !== segment.status && 3 !== segment.status) ||
	        (queueCompletedSegment(boundary, segment),
	        1 === boundary.completedSegments.length &&
	          boundary.parentFlushed &&
	          request.partialBoundaries.push(boundary)),
	        (boundary = boundary.row),
	        null !== boundary &&
	          boundary.together &&
	          tryToResolveTogetherRow(request, boundary);
	  0 === request.allPendingTasks && completeAll(request);
	}
	function performWork(request$jscomp$2) {
	  if (14 !== request$jscomp$2.status && 13 !== request$jscomp$2.status) {
	    var prevContext = currentActiveSnapshot,
	      prevDispatcher = ReactSharedInternals.H;
	    ReactSharedInternals.H = HooksDispatcher;
	    var prevAsyncDispatcher = ReactSharedInternals.A;
	    ReactSharedInternals.A = DefaultAsyncDispatcher;
	    var prevRequest = currentRequest;
	    currentRequest = request$jscomp$2;
	    var prevResumableState = currentResumableState;
	    currentResumableState = request$jscomp$2.resumableState;
	    try {
	      var pingedTasks = request$jscomp$2.pingedTasks,
	        i;
	      for (i = 0; i < pingedTasks.length; i++) {
	        var task = pingedTasks[i],
	          request = request$jscomp$2,
	          segment = task.blockedSegment;
	        if (null === segment) {
	          var request$jscomp$0 = request;
	          if (0 !== task.replay.pendingTasks) {
	            switchContext(task.context);
	            try {
	              "number" === typeof task.replay.slots
	                ? resumeNode(
	                    request$jscomp$0,
	                    task,
	                    task.replay.slots,
	                    task.node,
	                    task.childIndex
	                  )
	                : retryNode(request$jscomp$0, task);
	              if (
	                1 === task.replay.pendingTasks &&
	                0 < task.replay.nodes.length
	              )
	                throw Error(formatProdErrorMessage(488));
	              task.replay.pendingTasks--;
	              task.abortSet.delete(task);
	              finishedTask(
	                request$jscomp$0,
	                task.blockedBoundary,
	                task.row,
	                null
	              );
	            } catch (thrownValue) {
	              resetHooksState();
	              var x =
	                thrownValue === SuspenseException
	                  ? getSuspendedThenable()
	                  : thrownValue;
	              if (
	                "object" === typeof x &&
	                null !== x &&
	                "function" === typeof x.then
	              ) {
	                var ping = task.ping;
	                x.then(ping, ping);
	                task.thenableState =
	                  thrownValue === SuspenseException
	                    ? getThenableStateAfterSuspending()
	                    : null;
	              } else {
	                task.replay.pendingTasks--;
	                task.abortSet.delete(task);
	                var errorInfo = getThrownInfo(task.componentStack);
	                request = void 0;
	                var request$jscomp$1 = request$jscomp$0,
	                  boundary = task.blockedBoundary,
	                  error$jscomp$0 =
	                    12 === request$jscomp$0.status
	                      ? request$jscomp$0.fatalError
	                      : x,
	                  replayNodes = task.replay.nodes,
	                  resumeSlots = task.replay.slots;
	                request = logRecoverableError(
	                  request$jscomp$1,
	                  error$jscomp$0,
	                  errorInfo
	                );
	                abortRemainingReplayNodes(
	                  request$jscomp$1,
	                  boundary,
	                  replayNodes,
	                  resumeSlots,
	                  error$jscomp$0,
	                  request
	                );
	                request$jscomp$0.pendingRootTasks--;
	                0 === request$jscomp$0.pendingRootTasks &&
	                  completeShell(request$jscomp$0);
	                request$jscomp$0.allPendingTasks--;
	                0 === request$jscomp$0.allPendingTasks &&
	                  completeAll(request$jscomp$0);
	              }
	            } finally {
	            }
	          }
	        } else if (
	          ((request$jscomp$0 = void 0),
	          (request$jscomp$1 = segment),
	          0 === request$jscomp$1.status)
	        ) {
	          request$jscomp$1.status = 6;
	          switchContext(task.context);
	          var childrenLength = request$jscomp$1.children.length,
	            chunkLength = request$jscomp$1.chunks.length;
	          try {
	            retryNode(request, task),
	              pushSegmentFinale(
	                request$jscomp$1.chunks,
	                request.renderState,
	                request$jscomp$1.lastPushedText,
	                request$jscomp$1.textEmbedded
	              ),
	              task.abortSet.delete(task),
	              (request$jscomp$1.status = 1),
	              finishedTask(
	                request,
	                task.blockedBoundary,
	                task.row,
	                request$jscomp$1
	              );
	          } catch (thrownValue) {
	            resetHooksState();
	            request$jscomp$1.children.length = childrenLength;
	            request$jscomp$1.chunks.length = chunkLength;
	            var x$jscomp$0 =
	              thrownValue === SuspenseException
	                ? getSuspendedThenable()
	                : 12 === request.status
	                  ? request.fatalError
	                  : thrownValue;
	            if (12 === request.status && null !== request.trackedPostpones) {
	              var trackedPostpones = request.trackedPostpones,
	                thrownInfo = getThrownInfo(task.componentStack);
	              task.abortSet.delete(task);
	              logRecoverableError(request, x$jscomp$0, thrownInfo);
	              trackPostpone(request, trackedPostpones, task, request$jscomp$1);
	              finishedTask(
	                request,
	                task.blockedBoundary,
	                task.row,
	                request$jscomp$1
	              );
	            } else if (
	              "object" === typeof x$jscomp$0 &&
	              null !== x$jscomp$0 &&
	              "function" === typeof x$jscomp$0.then
	            ) {
	              request$jscomp$1.status = 0;
	              task.thenableState =
	                thrownValue === SuspenseException
	                  ? getThenableStateAfterSuspending()
	                  : null;
	              var ping$jscomp$0 = task.ping;
	              x$jscomp$0.then(ping$jscomp$0, ping$jscomp$0);
	            } else {
	              var errorInfo$jscomp$0 = getThrownInfo(task.componentStack);
	              task.abortSet.delete(task);
	              request$jscomp$1.status = 4;
	              var boundary$jscomp$0 = task.blockedBoundary,
	                row = task.row;
	              null !== row &&
	                0 === --row.pendingTasks &&
	                finishSuspenseListRow(request, row);
	              request.allPendingTasks--;
	              request$jscomp$0 = logRecoverableError(
	                request,
	                x$jscomp$0,
	                errorInfo$jscomp$0
	              );
	              if (null === boundary$jscomp$0) fatalError(request, x$jscomp$0);
	              else if (
	                (boundary$jscomp$0.pendingTasks--,
	                4 !== boundary$jscomp$0.status)
	              ) {
	                boundary$jscomp$0.status = 4;
	                boundary$jscomp$0.errorDigest = request$jscomp$0;
	                untrackBoundary(request, boundary$jscomp$0);
	                var boundaryRow = boundary$jscomp$0.row;
	                null !== boundaryRow &&
	                  0 === --boundaryRow.pendingTasks &&
	                  finishSuspenseListRow(request, boundaryRow);
	                boundary$jscomp$0.parentFlushed &&
	                  request.clientRenderedBoundaries.push(boundary$jscomp$0);
	                0 === request.pendingRootTasks &&
	                  null === request.trackedPostpones &&
	                  null !== boundary$jscomp$0.contentPreamble &&
	                  preparePreamble(request);
	              }
	              0 === request.allPendingTasks && completeAll(request);
	            }
	          } finally {
	          }
	        }
	      }
	      pingedTasks.splice(0, i);
	      null !== request$jscomp$2.destination &&
	        flushCompletedQueues(request$jscomp$2, request$jscomp$2.destination);
	    } catch (error) {
	      logRecoverableError(request$jscomp$2, error, {}),
	        fatalError(request$jscomp$2, error);
	    } finally {
	      (currentResumableState = prevResumableState),
	        (ReactSharedInternals.H = prevDispatcher),
	        (ReactSharedInternals.A = prevAsyncDispatcher),
	        prevDispatcher === HooksDispatcher && switchContext(prevContext),
	        (currentRequest = prevRequest);
	    }
	  }
	}
	function preparePreambleFromSubtree(
	  request,
	  segment,
	  collectedPreambleSegments
	) {
	  segment.preambleChildren.length &&
	    collectedPreambleSegments.push(segment.preambleChildren);
	  for (var pendingPreambles = false, i = 0; i < segment.children.length; i++)
	    pendingPreambles =
	      preparePreambleFromSegment(
	        request,
	        segment.children[i],
	        collectedPreambleSegments
	      ) || pendingPreambles;
	  return pendingPreambles;
	}
	function preparePreambleFromSegment(
	  request,
	  segment,
	  collectedPreambleSegments
	) {
	  var boundary = segment.boundary;
	  if (null === boundary)
	    return preparePreambleFromSubtree(
	      request,
	      segment,
	      collectedPreambleSegments
	    );
	  var preamble = boundary.contentPreamble,
	    fallbackPreamble = boundary.fallbackPreamble;
	  if (null === preamble || null === fallbackPreamble) return false;
	  switch (boundary.status) {
	    case 1:
	      hoistPreambleState(request.renderState, preamble);
	      request.byteSize += boundary.byteSize;
	      segment = boundary.completedSegments[0];
	      if (!segment) throw Error(formatProdErrorMessage(391));
	      return preparePreambleFromSubtree(
	        request,
	        segment,
	        collectedPreambleSegments
	      );
	    case 5:
	      if (null !== request.trackedPostpones) return true;
	    case 4:
	      if (1 === segment.status)
	        return (
	          hoistPreambleState(request.renderState, fallbackPreamble),
	          preparePreambleFromSubtree(
	            request,
	            segment,
	            collectedPreambleSegments
	          )
	        );
	    default:
	      return true;
	  }
	}
	function preparePreamble(request) {
	  if (
	    request.completedRootSegment &&
	    null === request.completedPreambleSegments
	  ) {
	    var collectedPreambleSegments = [],
	      originalRequestByteSize = request.byteSize,
	      hasPendingPreambles = preparePreambleFromSegment(
	        request,
	        request.completedRootSegment,
	        collectedPreambleSegments
	      ),
	      preamble = request.renderState.preamble;
	    false === hasPendingPreambles || (preamble.headChunks && preamble.bodyChunks)
	      ? (request.completedPreambleSegments = collectedPreambleSegments)
	      : (request.byteSize = originalRequestByteSize);
	  }
	}
	function flushSubtree(request, destination, segment, hoistableState) {
	  segment.parentFlushed = true;
	  switch (segment.status) {
	    case 0:
	      segment.id = request.nextSegmentId++;
	    case 5:
	      return (
	        (hoistableState = segment.id),
	        (segment.lastPushedText = false),
	        (segment.textEmbedded = false),
	        (request = request.renderState),
	        destination.push('<template id="'),
	        destination.push(request.placeholderPrefix),
	        (request = hoistableState.toString(16)),
	        destination.push(request),
	        destination.push('"></template>')
	      );
	    case 1:
	      segment.status = 2;
	      var r = true,
	        chunks = segment.chunks,
	        chunkIdx = 0;
	      segment = segment.children;
	      for (var childIdx = 0; childIdx < segment.length; childIdx++) {
	        for (r = segment[childIdx]; chunkIdx < r.index; chunkIdx++)
	          destination.push(chunks[chunkIdx]);
	        r = flushSegment(request, destination, r, hoistableState);
	      }
	      for (; chunkIdx < chunks.length - 1; chunkIdx++)
	        destination.push(chunks[chunkIdx]);
	      chunkIdx < chunks.length && (r = destination.push(chunks[chunkIdx]));
	      return r;
	    case 3:
	      return true;
	    default:
	      throw Error(formatProdErrorMessage(390));
	  }
	}
	var flushedByteSize = 0;
	function flushSegment(request, destination, segment, hoistableState) {
	  var boundary = segment.boundary;
	  if (null === boundary)
	    return flushSubtree(request, destination, segment, hoistableState);
	  boundary.parentFlushed = true;
	  if (4 === boundary.status) {
	    var row = boundary.row;
	    null !== row &&
	      0 === --row.pendingTasks &&
	      finishSuspenseListRow(request, row);
	    request.renderState.generateStaticMarkup ||
	      ((boundary = boundary.errorDigest),
	      destination.push("\x3c!--$!--\x3e"),
	      destination.push("<template"),
	      boundary &&
	        (destination.push(' data-dgst="'),
	        (boundary = escapeTextForBrowser(boundary)),
	        destination.push(boundary),
	        destination.push('"')),
	      destination.push("></template>"));
	    flushSubtree(request, destination, segment, hoistableState);
	    request = request.renderState.generateStaticMarkup
	      ? true
	      : destination.push("\x3c!--/$--\x3e");
	    return request;
	  }
	  if (1 !== boundary.status)
	    return (
	      0 === boundary.status &&
	        (boundary.rootSegmentID = request.nextSegmentId++),
	      0 < boundary.completedSegments.length &&
	        request.partialBoundaries.push(boundary),
	      writeStartPendingSuspenseBoundary(
	        destination,
	        request.renderState,
	        boundary.rootSegmentID
	      ),
	      hoistableState && hoistHoistables(hoistableState, boundary.fallbackState),
	      flushSubtree(request, destination, segment, hoistableState),
	      destination.push("\x3c!--/$--\x3e")
	    );
	  if (
	    !flushingPartialBoundaries &&
	    isEligibleForOutlining(request, boundary) &&
	    flushedByteSize + boundary.byteSize > request.progressiveChunkSize
	  )
	    return (
	      (boundary.rootSegmentID = request.nextSegmentId++),
	      request.completedBoundaries.push(boundary),
	      writeStartPendingSuspenseBoundary(
	        destination,
	        request.renderState,
	        boundary.rootSegmentID
	      ),
	      flushSubtree(request, destination, segment, hoistableState),
	      destination.push("\x3c!--/$--\x3e")
	    );
	  flushedByteSize += boundary.byteSize;
	  hoistableState && hoistHoistables(hoistableState, boundary.contentState);
	  segment = boundary.row;
	  null !== segment &&
	    isEligibleForOutlining(request, boundary) &&
	    0 === --segment.pendingTasks &&
	    finishSuspenseListRow(request, segment);
	  request.renderState.generateStaticMarkup ||
	    destination.push("\x3c!--$--\x3e");
	  segment = boundary.completedSegments;
	  if (1 !== segment.length) throw Error(formatProdErrorMessage(391));
	  flushSegment(request, destination, segment[0], hoistableState);
	  request = request.renderState.generateStaticMarkup
	    ? true
	    : destination.push("\x3c!--/$--\x3e");
	  return request;
	}
	function flushSegmentContainer(request, destination, segment, hoistableState) {
	  writeStartSegment(
	    destination,
	    request.renderState,
	    segment.parentFormatContext,
	    segment.id
	  );
	  flushSegment(request, destination, segment, hoistableState);
	  return writeEndSegment(destination, segment.parentFormatContext);
	}
	function flushCompletedBoundary(request, destination, boundary) {
	  flushedByteSize = boundary.byteSize;
	  for (
	    var completedSegments = boundary.completedSegments, i = 0;
	    i < completedSegments.length;
	    i++
	  )
	    flushPartiallyCompletedSegment(
	      request,
	      destination,
	      boundary,
	      completedSegments[i]
	    );
	  completedSegments.length = 0;
	  completedSegments = boundary.row;
	  null !== completedSegments &&
	    isEligibleForOutlining(request, boundary) &&
	    0 === --completedSegments.pendingTasks &&
	    finishSuspenseListRow(request, completedSegments);
	  writeHoistablesForBoundary(
	    destination,
	    boundary.contentState,
	    request.renderState
	  );
	  completedSegments = request.resumableState;
	  request = request.renderState;
	  i = boundary.rootSegmentID;
	  boundary = boundary.contentState;
	  var requiresStyleInsertion = request.stylesToHoist;
	  request.stylesToHoist = false;
	  destination.push(request.startInlineScript);
	  destination.push(">");
	  requiresStyleInsertion
	    ? (0 === (completedSegments.instructions & 4) &&
	        ((completedSegments.instructions |= 4),
	        destination.push(
	          '$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};'
	        )),
	      0 === (completedSegments.instructions & 2) &&
	        ((completedSegments.instructions |= 2),
	        destination.push(
	          '$RB=[];$RV=function(a){$RT=performance.now();for(var b=0;b<a.length;b+=2){var c=a[b],e=a[b+1];null!==e.parentNode&&e.parentNode.removeChild(e);var f=c.parentNode;if(f){var g=c.previousSibling,h=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d||"/&"===d)if(0===h)break;else h--;else"$"!==d&&"$?"!==d&&"$~"!==d&&"$!"!==d&&"&"!==d||h++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;e.firstChild;)f.insertBefore(e.firstChild,c);g.data="$";g._reactRetry&&requestAnimationFrame(g._reactRetry)}}a.length=0};\n$RC=function(a,b){if(b=document.getElementById(b))(a=document.getElementById(a))?(a.previousSibling.data="$~",$RB.push(a,b),2===$RB.length&&("number"!==typeof $RT?requestAnimationFrame($RV.bind(null,$RB)):(a=performance.now(),setTimeout($RV.bind(null,$RB),2300>a&&2E3<a?2300-a:$RT+300-a)))):b.parentNode.removeChild(b)};'
	        )),
	      0 === (completedSegments.instructions & 8)
	        ? ((completedSegments.instructions |= 8),
	          destination.push(
	            '$RM=new Map;$RR=function(n,w,p){function u(q){this._p=null;q()}for(var r=new Map,t=document,h,b,e=t.querySelectorAll("link[data-precedence],style[data-precedence]"),v=[],k=0;b=e[k++];)"not all"===b.getAttribute("media")?v.push(b):("LINK"===b.tagName&&$RM.set(b.getAttribute("href"),b),r.set(b.dataset.precedence,h=b));e=0;b=[];var l,a;for(k=!0;;){if(k){var f=p[e++];if(!f){k=!1;e=0;continue}var c=!1,m=0;var d=f[m++];if(a=$RM.get(d)){var g=a._p;c=!0}else{a=t.createElement("link");a.href=d;a.rel=\n"stylesheet";for(a.dataset.precedence=l=f[m++];g=f[m++];)a.setAttribute(g,f[m++]);g=a._p=new Promise(function(q,x){a.onload=u.bind(a,q);a.onerror=u.bind(a,x)});$RM.set(d,a)}d=a.getAttribute("media");!g||d&&!matchMedia(d).matches||b.push(g);if(c)continue}else{a=v[e++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=r.get(l)||h;c===h&&(h=a);r.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=t.head,c.insertBefore(a,c.firstChild))}if(p=document.getElementById(n))p.previousSibling.data=\n"$~";Promise.all(b).then($RC.bind(null,n,w),$RX.bind(null,n,"CSS failed to load"))};$RR("'
	          ))
	        : destination.push('$RR("'))
	    : (0 === (completedSegments.instructions & 2) &&
	        ((completedSegments.instructions |= 2),
	        destination.push(
	          '$RB=[];$RV=function(a){$RT=performance.now();for(var b=0;b<a.length;b+=2){var c=a[b],e=a[b+1];null!==e.parentNode&&e.parentNode.removeChild(e);var f=c.parentNode;if(f){var g=c.previousSibling,h=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d||"/&"===d)if(0===h)break;else h--;else"$"!==d&&"$?"!==d&&"$~"!==d&&"$!"!==d&&"&"!==d||h++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;e.firstChild;)f.insertBefore(e.firstChild,c);g.data="$";g._reactRetry&&requestAnimationFrame(g._reactRetry)}}a.length=0};\n$RC=function(a,b){if(b=document.getElementById(b))(a=document.getElementById(a))?(a.previousSibling.data="$~",$RB.push(a,b),2===$RB.length&&("number"!==typeof $RT?requestAnimationFrame($RV.bind(null,$RB)):(a=performance.now(),setTimeout($RV.bind(null,$RB),2300>a&&2E3<a?2300-a:$RT+300-a)))):b.parentNode.removeChild(b)};'
	        )),
	      destination.push('$RC("'));
	  completedSegments = i.toString(16);
	  destination.push(request.boundaryPrefix);
	  destination.push(completedSegments);
	  destination.push('","');
	  destination.push(request.segmentPrefix);
	  destination.push(completedSegments);
	  requiresStyleInsertion
	    ? (destination.push('",'),
	      writeStyleResourceDependenciesInJS(destination, boundary))
	    : destination.push('"');
	  boundary = destination.push(")\x3c/script>");
	  return writeBootstrap(destination, request) && boundary;
	}
	function flushPartiallyCompletedSegment(
	  request,
	  destination,
	  boundary,
	  segment
	) {
	  if (2 === segment.status) return true;
	  var hoistableState = boundary.contentState,
	    segmentID = segment.id;
	  if (-1 === segmentID) {
	    if (-1 === (segment.id = boundary.rootSegmentID))
	      throw Error(formatProdErrorMessage(392));
	    return flushSegmentContainer(request, destination, segment, hoistableState);
	  }
	  if (segmentID === boundary.rootSegmentID)
	    return flushSegmentContainer(request, destination, segment, hoistableState);
	  flushSegmentContainer(request, destination, segment, hoistableState);
	  boundary = request.resumableState;
	  request = request.renderState;
	  destination.push(request.startInlineScript);
	  destination.push(">");
	  0 === (boundary.instructions & 1)
	    ? ((boundary.instructions |= 1),
	      destination.push(
	        '$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'
	      ))
	    : destination.push('$RS("');
	  destination.push(request.segmentPrefix);
	  segmentID = segmentID.toString(16);
	  destination.push(segmentID);
	  destination.push('","');
	  destination.push(request.placeholderPrefix);
	  destination.push(segmentID);
	  destination = destination.push('")\x3c/script>');
	  return destination;
	}
	var flushingPartialBoundaries = false;
	function flushCompletedQueues(request, destination) {
	  try {
	    if (!(0 < request.pendingRootTasks)) {
	      var i,
	        completedRootSegment = request.completedRootSegment;
	      if (null !== completedRootSegment) {
	        if (5 === completedRootSegment.status) return;
	        var completedPreambleSegments = request.completedPreambleSegments;
	        if (null === completedPreambleSegments) return;
	        flushedByteSize = request.byteSize;
	        var resumableState = request.resumableState,
	          renderState = request.renderState,
	          preamble = renderState.preamble,
	          htmlChunks = preamble.htmlChunks,
	          headChunks = preamble.headChunks,
	          i$jscomp$0;
	        if (htmlChunks) {
	          for (i$jscomp$0 = 0; i$jscomp$0 < htmlChunks.length; i$jscomp$0++)
	            destination.push(htmlChunks[i$jscomp$0]);
	          if (headChunks)
	            for (i$jscomp$0 = 0; i$jscomp$0 < headChunks.length; i$jscomp$0++)
	              destination.push(headChunks[i$jscomp$0]);
	          else {
	            var chunk = startChunkForTag("head");
	            destination.push(chunk);
	            destination.push(">");
	          }
	        } else if (headChunks)
	          for (i$jscomp$0 = 0; i$jscomp$0 < headChunks.length; i$jscomp$0++)
	            destination.push(headChunks[i$jscomp$0]);
	        var charsetChunks = renderState.charsetChunks;
	        for (i$jscomp$0 = 0; i$jscomp$0 < charsetChunks.length; i$jscomp$0++)
	          destination.push(charsetChunks[i$jscomp$0]);
	        charsetChunks.length = 0;
	        renderState.preconnects.forEach(flushResource, destination);
	        renderState.preconnects.clear();
	        var viewportChunks = renderState.viewportChunks;
	        for (i$jscomp$0 = 0; i$jscomp$0 < viewportChunks.length; i$jscomp$0++)
	          destination.push(viewportChunks[i$jscomp$0]);
	        viewportChunks.length = 0;
	        renderState.fontPreloads.forEach(flushResource, destination);
	        renderState.fontPreloads.clear();
	        renderState.highImagePreloads.forEach(flushResource, destination);
	        renderState.highImagePreloads.clear();
	        currentlyFlushingRenderState = renderState;
	        renderState.styles.forEach(flushStylesInPreamble, destination);
	        currentlyFlushingRenderState = null;
	        var importMapChunks = renderState.importMapChunks;
	        for (i$jscomp$0 = 0; i$jscomp$0 < importMapChunks.length; i$jscomp$0++)
	          destination.push(importMapChunks[i$jscomp$0]);
	        importMapChunks.length = 0;
	        renderState.bootstrapScripts.forEach(flushResource, destination);
	        renderState.scripts.forEach(flushResource, destination);
	        renderState.scripts.clear();
	        renderState.bulkPreloads.forEach(flushResource, destination);
	        renderState.bulkPreloads.clear();
	        resumableState.instructions |= 32;
	        var hoistableChunks = renderState.hoistableChunks;
	        for (i$jscomp$0 = 0; i$jscomp$0 < hoistableChunks.length; i$jscomp$0++)
	          destination.push(hoistableChunks[i$jscomp$0]);
	        for (
	          resumableState = hoistableChunks.length = 0;
	          resumableState < completedPreambleSegments.length;
	          resumableState++
	        ) {
	          var segments = completedPreambleSegments[resumableState];
	          for (renderState = 0; renderState < segments.length; renderState++)
	            flushSegment(request, destination, segments[renderState], null);
	        }
	        var preamble$jscomp$0 = request.renderState.preamble,
	          headChunks$jscomp$0 = preamble$jscomp$0.headChunks;
	        if (preamble$jscomp$0.htmlChunks || headChunks$jscomp$0) {
	          var chunk$jscomp$0 = endChunkForTag("head");
	          destination.push(chunk$jscomp$0);
	        }
	        var bodyChunks = preamble$jscomp$0.bodyChunks;
	        if (bodyChunks)
	          for (
	            completedPreambleSegments = 0;
	            completedPreambleSegments < bodyChunks.length;
	            completedPreambleSegments++
	          )
	            destination.push(bodyChunks[completedPreambleSegments]);
	        flushSegment(request, destination, completedRootSegment, null);
	        request.completedRootSegment = null;
	        var renderState$jscomp$0 = request.renderState;
	        if (
	          0 !== request.allPendingTasks ||
	          0 !== request.clientRenderedBoundaries.length ||
	          0 !== request.completedBoundaries.length ||
	          (null !== request.trackedPostpones &&
	            (0 !== request.trackedPostpones.rootNodes.length ||
	              null !== request.trackedPostpones.rootSlots))
	        ) {
	          var resumableState$jscomp$0 = request.resumableState;
	          if (0 === (resumableState$jscomp$0.instructions & 64)) {
	            resumableState$jscomp$0.instructions |= 64;
	            destination.push(renderState$jscomp$0.startInlineScript);
	            if (0 === (resumableState$jscomp$0.instructions & 32)) {
	              resumableState$jscomp$0.instructions |= 32;
	              var shellId = "_" + resumableState$jscomp$0.idPrefix + "R_";
	              destination.push(' id="');
	              var chunk$jscomp$1 = escapeTextForBrowser(shellId);
	              destination.push(chunk$jscomp$1);
	              destination.push('"');
	            }
	            destination.push(">");
	            destination.push(
	              "requestAnimationFrame(function(){$RT=performance.now()});"
	            );
	            destination.push("\x3c/script>");
	          }
	        }
	        writeBootstrap(destination, renderState$jscomp$0);
	      }
	      var renderState$jscomp$1 = request.renderState;
	      completedRootSegment = 0;
	      var viewportChunks$jscomp$0 = renderState$jscomp$1.viewportChunks;
	      for (
	        completedRootSegment = 0;
	        completedRootSegment < viewportChunks$jscomp$0.length;
	        completedRootSegment++
	      )
	        destination.push(viewportChunks$jscomp$0[completedRootSegment]);
	      viewportChunks$jscomp$0.length = 0;
	      renderState$jscomp$1.preconnects.forEach(flushResource, destination);
	      renderState$jscomp$1.preconnects.clear();
	      renderState$jscomp$1.fontPreloads.forEach(flushResource, destination);
	      renderState$jscomp$1.fontPreloads.clear();
	      renderState$jscomp$1.highImagePreloads.forEach(
	        flushResource,
	        destination
	      );
	      renderState$jscomp$1.highImagePreloads.clear();
	      renderState$jscomp$1.styles.forEach(preloadLateStyles, destination);
	      renderState$jscomp$1.scripts.forEach(flushResource, destination);
	      renderState$jscomp$1.scripts.clear();
	      renderState$jscomp$1.bulkPreloads.forEach(flushResource, destination);
	      renderState$jscomp$1.bulkPreloads.clear();
	      var hoistableChunks$jscomp$0 = renderState$jscomp$1.hoistableChunks;
	      for (
	        completedRootSegment = 0;
	        completedRootSegment < hoistableChunks$jscomp$0.length;
	        completedRootSegment++
	      )
	        destination.push(hoistableChunks$jscomp$0[completedRootSegment]);
	      hoistableChunks$jscomp$0.length = 0;
	      var clientRenderedBoundaries = request.clientRenderedBoundaries;
	      for (i = 0; i < clientRenderedBoundaries.length; i++) {
	        var boundary = clientRenderedBoundaries[i];
	        renderState$jscomp$1 = destination;
	        var resumableState$jscomp$1 = request.resumableState,
	          renderState$jscomp$2 = request.renderState,
	          id = boundary.rootSegmentID,
	          errorDigest = boundary.errorDigest;
	        renderState$jscomp$1.push(renderState$jscomp$2.startInlineScript);
	        renderState$jscomp$1.push(">");
	        0 === (resumableState$jscomp$1.instructions & 4)
	          ? ((resumableState$jscomp$1.instructions |= 4),
	            renderState$jscomp$1.push(
	              '$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};;$RX("'
	            ))
	          : renderState$jscomp$1.push('$RX("');
	        renderState$jscomp$1.push(renderState$jscomp$2.boundaryPrefix);
	        var chunk$jscomp$2 = id.toString(16);
	        renderState$jscomp$1.push(chunk$jscomp$2);
	        renderState$jscomp$1.push('"');
	        if (errorDigest) {
	          renderState$jscomp$1.push(",");
	          var chunk$jscomp$3 = escapeJSStringsForInstructionScripts(
	            errorDigest || ""
	          );
	          renderState$jscomp$1.push(chunk$jscomp$3);
	        }
	        var JSCompiler_inline_result =
	          renderState$jscomp$1.push(")\x3c/script>");
	        if (!JSCompiler_inline_result) {
	          request.destination = null;
	          i++;
	          clientRenderedBoundaries.splice(0, i);
	          return;
	        }
	      }
	      clientRenderedBoundaries.splice(0, i);
	      var completedBoundaries = request.completedBoundaries;
	      for (i = 0; i < completedBoundaries.length; i++)
	        if (
	          !flushCompletedBoundary(request, destination, completedBoundaries[i])
	        ) {
	          request.destination = null;
	          i++;
	          completedBoundaries.splice(0, i);
	          return;
	        }
	      completedBoundaries.splice(0, i);
	      flushingPartialBoundaries = !0;
	      var partialBoundaries = request.partialBoundaries;
	      for (i = 0; i < partialBoundaries.length; i++) {
	        var boundary$69 = partialBoundaries[i];
	        a: {
	          clientRenderedBoundaries = request;
	          boundary = destination;
	          flushedByteSize = boundary$69.byteSize;
	          var completedSegments = boundary$69.completedSegments;
	          for (
	            JSCompiler_inline_result = 0;
	            JSCompiler_inline_result < completedSegments.length;
	            JSCompiler_inline_result++
	          )
	            if (
	              !flushPartiallyCompletedSegment(
	                clientRenderedBoundaries,
	                boundary,
	                boundary$69,
	                completedSegments[JSCompiler_inline_result]
	              )
	            ) {
	              JSCompiler_inline_result++;
	              completedSegments.splice(0, JSCompiler_inline_result);
	              var JSCompiler_inline_result$jscomp$0 = !1;
	              break a;
	            }
	          completedSegments.splice(0, JSCompiler_inline_result);
	          var row = boundary$69.row;
	          null !== row &&
	            row.together &&
	            1 === boundary$69.pendingTasks &&
	            (1 === row.pendingTasks
	              ? unblockSuspenseListRow(
	                  clientRenderedBoundaries,
	                  row,
	                  row.hoistables
	                )
	              : row.pendingTasks--);
	          JSCompiler_inline_result$jscomp$0 = writeHoistablesForBoundary(
	            boundary,
	            boundary$69.contentState,
	            clientRenderedBoundaries.renderState
	          );
	        }
	        if (!JSCompiler_inline_result$jscomp$0) {
	          request.destination = null;
	          i++;
	          partialBoundaries.splice(0, i);
	          return;
	        }
	      }
	      partialBoundaries.splice(0, i);
	      flushingPartialBoundaries = !1;
	      var largeBoundaries = request.completedBoundaries;
	      for (i = 0; i < largeBoundaries.length; i++)
	        if (!flushCompletedBoundary(request, destination, largeBoundaries[i])) {
	          request.destination = null;
	          i++;
	          largeBoundaries.splice(0, i);
	          return;
	        }
	      largeBoundaries.splice(0, i);
	    }
	  } finally {
	    (flushingPartialBoundaries = false),
	      0 === request.allPendingTasks &&
	        0 === request.clientRenderedBoundaries.length &&
	        0 === request.completedBoundaries.length &&
	        ((request.flushScheduled = false),
	        (i = request.resumableState),
	        i.hasBody &&
	          ((partialBoundaries = endChunkForTag("body")),
	          destination.push(partialBoundaries)),
	        i.hasHtml && ((i = endChunkForTag("html")), destination.push(i)),
	        (request.status = 14),
	        destination.push(null),
	        (request.destination = null));
	  }
	}
	function enqueueFlush(request) {
	  if (
	    false === request.flushScheduled &&
	    0 === request.pingedTasks.length &&
	    null !== request.destination
	  ) {
	    request.flushScheduled = true;
	    var destination = request.destination;
	    destination
	      ? flushCompletedQueues(request, destination)
	      : (request.flushScheduled = false);
	  }
	}
	function startFlowing(request, destination) {
	  if (13 === request.status)
	    (request.status = 14), destination.destroy(request.fatalError);
	  else if (14 !== request.status && null === request.destination) {
	    request.destination = destination;
	    try {
	      flushCompletedQueues(request, destination);
	    } catch (error) {
	      logRecoverableError(request, error, {}), fatalError(request, error);
	    }
	  }
	}
	function abort(request, reason) {
	  if (11 === request.status || 10 === request.status) request.status = 12;
	  try {
	    var abortableTasks = request.abortableTasks;
	    if (0 < abortableTasks.size) {
	      var error =
	        void 0 === reason
	          ? Error(formatProdErrorMessage(432))
	          : "object" === typeof reason &&
	              null !== reason &&
	              "function" === typeof reason.then
	            ? Error(formatProdErrorMessage(530))
	            : reason;
	      request.fatalError = error;
	      abortableTasks.forEach(function (task) {
	        return abortTask(task, request, error);
	      });
	      abortableTasks.clear();
	    }
	    null !== request.destination &&
	      flushCompletedQueues(request, request.destination);
	  } catch (error$71) {
	    logRecoverableError(request, error$71, {}), fatalError(request, error$71);
	  }
	}
	function addToReplayParent(node, parentKeyPath, trackedPostpones) {
	  if (null === parentKeyPath) trackedPostpones.rootNodes.push(node);
	  else {
	    var workingMap = trackedPostpones.workingMap,
	      parentNode = workingMap.get(parentKeyPath);
	    void 0 === parentNode &&
	      ((parentNode = [parentKeyPath[1], parentKeyPath[2], [], null]),
	      workingMap.set(parentKeyPath, parentNode),
	      addToReplayParent(parentNode, parentKeyPath[0], trackedPostpones));
	    parentNode[2].push(node);
	  }
	}
	function onError() {}
	function renderToStringImpl(
	  children,
	  options,
	  generateStaticMarkup,
	  abortReason
	) {
	  var didFatal = false,
	    fatalError = null,
	    result = "",
	    readyToStream = false;
	  options = createResumableState(options ? options.identifierPrefix : void 0);
	  children = createRequest(
	    children,
	    options,
	    createRenderState(options, generateStaticMarkup),
	    createFormatContext(0, null, 0, null),
	    Infinity,
	    onError,
	    void 0,
	    function () {
	      readyToStream = true;
	    },
	    void 0,
	    void 0,
	    void 0
	  );
	  children.flushScheduled = null !== children.destination;
	  performWork(children);
	  10 === children.status && (children.status = 11);
	  null === children.trackedPostpones &&
	    safelyEmitEarlyPreloads(children, 0 === children.pendingRootTasks);
	  abort(children, abortReason);
	  startFlowing(children, {
	    push: function (chunk) {
	      null !== chunk && (result += chunk);
	      return true;
	    },
	    destroy: function (error) {
	      didFatal = true;
	      fatalError = error;
	    }
	  });
	  if (didFatal && fatalError !== abortReason) throw fatalError;
	  if (!readyToStream) throw Error(formatProdErrorMessage(426));
	  return result;
	}
	reactDomServerLegacy_browser_production.renderToStaticMarkup = function (children, options) {
	  return renderToStringImpl(
	    children,
	    options,
	    true,
	    'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server'
	  );
	};
	reactDomServerLegacy_browser_production.renderToString = function (children, options) {
	  return renderToStringImpl(
	    children,
	    options,
	    false,
	    'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server'
	  );
	};
	reactDomServerLegacy_browser_production.version = "19.2.6";
	return reactDomServerLegacy_browser_production;
}

var reactDomServer_browser_production = {};

/**
 * @license React
 * react-dom-server.browser.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactDomServer_browser_production;

function requireReactDomServer_browser_production () {
	if (hasRequiredReactDomServer_browser_production) return reactDomServer_browser_production;
	hasRequiredReactDomServer_browser_production = 1;
	var React = requireReact(),
	  ReactDOM = requireReactDom();
	function formatProdErrorMessage(code) {
	  var url = "https://react.dev/errors/" + code;
	  if (1 < arguments.length) {
	    url += "?args[]=" + encodeURIComponent(arguments[1]);
	    for (var i = 2; i < arguments.length; i++)
	      url += "&args[]=" + encodeURIComponent(arguments[i]);
	  }
	  return (
	    "Minified React error #" +
	    code +
	    "; visit " +
	    url +
	    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
	  );
	}
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
	  REACT_PORTAL_TYPE = Symbol.for("react.portal"),
	  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
	  REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
	  REACT_PROFILER_TYPE = Symbol.for("react.profiler"),
	  REACT_CONSUMER_TYPE = Symbol.for("react.consumer"),
	  REACT_CONTEXT_TYPE = Symbol.for("react.context"),
	  REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
	  REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
	  REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"),
	  REACT_MEMO_TYPE = Symbol.for("react.memo"),
	  REACT_LAZY_TYPE = Symbol.for("react.lazy"),
	  REACT_SCOPE_TYPE = Symbol.for("react.scope"),
	  REACT_ACTIVITY_TYPE = Symbol.for("react.activity"),
	  REACT_LEGACY_HIDDEN_TYPE = Symbol.for("react.legacy_hidden"),
	  REACT_MEMO_CACHE_SENTINEL = Symbol.for("react.memo_cache_sentinel"),
	  REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"),
	  MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
	function getIteratorFn(maybeIterable) {
	  if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
	  maybeIterable =
	    (MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL]) ||
	    maybeIterable["@@iterator"];
	  return "function" === typeof maybeIterable ? maybeIterable : null;
	}
	var isArrayImpl = Array.isArray;
	function murmurhash3_32_gc(key, seed) {
	  var remainder = key.length & 3;
	  var bytes = key.length - remainder;
	  var h1 = seed;
	  for (seed = 0; seed < bytes; ) {
	    var k1 =
	      (key.charCodeAt(seed) & 255) |
	      ((key.charCodeAt(++seed) & 255) << 8) |
	      ((key.charCodeAt(++seed) & 255) << 16) |
	      ((key.charCodeAt(++seed) & 255) << 24);
	    ++seed;
	    k1 =
	      (3432918353 * (k1 & 65535) +
	        (((3432918353 * (k1 >>> 16)) & 65535) << 16)) &
	      4294967295;
	    k1 = (k1 << 15) | (k1 >>> 17);
	    k1 =
	      (461845907 * (k1 & 65535) + (((461845907 * (k1 >>> 16)) & 65535) << 16)) &
	      4294967295;
	    h1 ^= k1;
	    h1 = (h1 << 13) | (h1 >>> 19);
	    h1 = (5 * (h1 & 65535) + (((5 * (h1 >>> 16)) & 65535) << 16)) & 4294967295;
	    h1 = (h1 & 65535) + 27492 + ((((h1 >>> 16) + 58964) & 65535) << 16);
	  }
	  k1 = 0;
	  switch (remainder) {
	    case 3:
	      k1 ^= (key.charCodeAt(seed + 2) & 255) << 16;
	    case 2:
	      k1 ^= (key.charCodeAt(seed + 1) & 255) << 8;
	    case 1:
	      (k1 ^= key.charCodeAt(seed) & 255),
	        (k1 =
	          (3432918353 * (k1 & 65535) +
	            (((3432918353 * (k1 >>> 16)) & 65535) << 16)) &
	          4294967295),
	        (k1 = (k1 << 15) | (k1 >>> 17)),
	        (h1 ^=
	          (461845907 * (k1 & 65535) +
	            (((461845907 * (k1 >>> 16)) & 65535) << 16)) &
	          4294967295);
	  }
	  h1 ^= key.length;
	  h1 ^= h1 >>> 16;
	  h1 =
	    (2246822507 * (h1 & 65535) + (((2246822507 * (h1 >>> 16)) & 65535) << 16)) &
	    4294967295;
	  h1 ^= h1 >>> 13;
	  h1 =
	    (3266489909 * (h1 & 65535) + (((3266489909 * (h1 >>> 16)) & 65535) << 16)) &
	    4294967295;
	  return (h1 ^ (h1 >>> 16)) >>> 0;
	}
	var channel = new MessageChannel(),
	  taskQueue = [];
	channel.port1.onmessage = function () {
	  var task = taskQueue.shift();
	  task && task();
	};
	function scheduleWork(callback) {
	  taskQueue.push(callback);
	  channel.port2.postMessage(null);
	}
	function handleErrorInNextTick(error) {
	  setTimeout(function () {
	    throw error;
	  });
	}
	var LocalPromise = Promise,
	  scheduleMicrotask =
	    "function" === typeof queueMicrotask
	      ? queueMicrotask
	      : function (callback) {
	          LocalPromise.resolve(null)
	            .then(callback)
	            .catch(handleErrorInNextTick);
	        },
	  currentView = null,
	  writtenBytes = 0;
	function writeChunk(destination, chunk) {
	  if (0 !== chunk.byteLength)
	    if (2048 < chunk.byteLength)
	      0 < writtenBytes &&
	        (destination.enqueue(
	          new Uint8Array(currentView.buffer, 0, writtenBytes)
	        ),
	        (currentView = new Uint8Array(2048)),
	        (writtenBytes = 0)),
	        destination.enqueue(chunk);
	    else {
	      var allowableBytes = currentView.length - writtenBytes;
	      allowableBytes < chunk.byteLength &&
	        (0 === allowableBytes
	          ? destination.enqueue(currentView)
	          : (currentView.set(chunk.subarray(0, allowableBytes), writtenBytes),
	            destination.enqueue(currentView),
	            (chunk = chunk.subarray(allowableBytes))),
	        (currentView = new Uint8Array(2048)),
	        (writtenBytes = 0));
	      currentView.set(chunk, writtenBytes);
	      writtenBytes += chunk.byteLength;
	    }
	}
	function writeChunkAndReturn(destination, chunk) {
	  writeChunk(destination, chunk);
	  return true;
	}
	function completeWriting(destination) {
	  currentView &&
	    0 < writtenBytes &&
	    (destination.enqueue(new Uint8Array(currentView.buffer, 0, writtenBytes)),
	    (currentView = null),
	    (writtenBytes = 0));
	}
	var textEncoder = new TextEncoder();
	function stringToChunk(content) {
	  return textEncoder.encode(content);
	}
	function stringToPrecomputedChunk(content) {
	  return textEncoder.encode(content);
	}
	function byteLengthOfChunk(chunk) {
	  return chunk.byteLength;
	}
	function closeWithError(destination, error) {
	  "function" === typeof destination.error
	    ? destination.error(error)
	    : destination.close();
	}
	var assign = Object.assign,
	  hasOwnProperty = Object.prototype.hasOwnProperty,
	  VALID_ATTRIBUTE_NAME_REGEX = RegExp(
	    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
	  ),
	  illegalAttributeNameCache = {},
	  validatedAttributeNameCache = {};
	function isAttributeNameSafe(attributeName) {
	  if (hasOwnProperty.call(validatedAttributeNameCache, attributeName))
	    return true;
	  if (hasOwnProperty.call(illegalAttributeNameCache, attributeName)) return false;
	  if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName))
	    return (validatedAttributeNameCache[attributeName] = true);
	  illegalAttributeNameCache[attributeName] = true;
	  return false;
	}
	var unitlessNumbers = new Set(
	    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
	      " "
	    )
	  ),
	  aliases = new Map([
	    ["acceptCharset", "accept-charset"],
	    ["htmlFor", "for"],
	    ["httpEquiv", "http-equiv"],
	    ["crossOrigin", "crossorigin"],
	    ["accentHeight", "accent-height"],
	    ["alignmentBaseline", "alignment-baseline"],
	    ["arabicForm", "arabic-form"],
	    ["baselineShift", "baseline-shift"],
	    ["capHeight", "cap-height"],
	    ["clipPath", "clip-path"],
	    ["clipRule", "clip-rule"],
	    ["colorInterpolation", "color-interpolation"],
	    ["colorInterpolationFilters", "color-interpolation-filters"],
	    ["colorProfile", "color-profile"],
	    ["colorRendering", "color-rendering"],
	    ["dominantBaseline", "dominant-baseline"],
	    ["enableBackground", "enable-background"],
	    ["fillOpacity", "fill-opacity"],
	    ["fillRule", "fill-rule"],
	    ["floodColor", "flood-color"],
	    ["floodOpacity", "flood-opacity"],
	    ["fontFamily", "font-family"],
	    ["fontSize", "font-size"],
	    ["fontSizeAdjust", "font-size-adjust"],
	    ["fontStretch", "font-stretch"],
	    ["fontStyle", "font-style"],
	    ["fontVariant", "font-variant"],
	    ["fontWeight", "font-weight"],
	    ["glyphName", "glyph-name"],
	    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
	    ["glyphOrientationVertical", "glyph-orientation-vertical"],
	    ["horizAdvX", "horiz-adv-x"],
	    ["horizOriginX", "horiz-origin-x"],
	    ["imageRendering", "image-rendering"],
	    ["letterSpacing", "letter-spacing"],
	    ["lightingColor", "lighting-color"],
	    ["markerEnd", "marker-end"],
	    ["markerMid", "marker-mid"],
	    ["markerStart", "marker-start"],
	    ["overlinePosition", "overline-position"],
	    ["overlineThickness", "overline-thickness"],
	    ["paintOrder", "paint-order"],
	    ["panose-1", "panose-1"],
	    ["pointerEvents", "pointer-events"],
	    ["renderingIntent", "rendering-intent"],
	    ["shapeRendering", "shape-rendering"],
	    ["stopColor", "stop-color"],
	    ["stopOpacity", "stop-opacity"],
	    ["strikethroughPosition", "strikethrough-position"],
	    ["strikethroughThickness", "strikethrough-thickness"],
	    ["strokeDasharray", "stroke-dasharray"],
	    ["strokeDashoffset", "stroke-dashoffset"],
	    ["strokeLinecap", "stroke-linecap"],
	    ["strokeLinejoin", "stroke-linejoin"],
	    ["strokeMiterlimit", "stroke-miterlimit"],
	    ["strokeOpacity", "stroke-opacity"],
	    ["strokeWidth", "stroke-width"],
	    ["textAnchor", "text-anchor"],
	    ["textDecoration", "text-decoration"],
	    ["textRendering", "text-rendering"],
	    ["transformOrigin", "transform-origin"],
	    ["underlinePosition", "underline-position"],
	    ["underlineThickness", "underline-thickness"],
	    ["unicodeBidi", "unicode-bidi"],
	    ["unicodeRange", "unicode-range"],
	    ["unitsPerEm", "units-per-em"],
	    ["vAlphabetic", "v-alphabetic"],
	    ["vHanging", "v-hanging"],
	    ["vIdeographic", "v-ideographic"],
	    ["vMathematical", "v-mathematical"],
	    ["vectorEffect", "vector-effect"],
	    ["vertAdvY", "vert-adv-y"],
	    ["vertOriginX", "vert-origin-x"],
	    ["vertOriginY", "vert-origin-y"],
	    ["wordSpacing", "word-spacing"],
	    ["writingMode", "writing-mode"],
	    ["xmlnsXlink", "xmlns:xlink"],
	    ["xHeight", "x-height"]
	  ]),
	  matchHtmlRegExp = /["'&<>]/;
	function escapeTextForBrowser(text) {
	  if (
	    "boolean" === typeof text ||
	    "number" === typeof text ||
	    "bigint" === typeof text
	  )
	    return "" + text;
	  text = "" + text;
	  var match = matchHtmlRegExp.exec(text);
	  if (match) {
	    var html = "",
	      index,
	      lastIndex = 0;
	    for (index = match.index; index < text.length; index++) {
	      switch (text.charCodeAt(index)) {
	        case 34:
	          match = "&quot;";
	          break;
	        case 38:
	          match = "&amp;";
	          break;
	        case 39:
	          match = "&#x27;";
	          break;
	        case 60:
	          match = "&lt;";
	          break;
	        case 62:
	          match = "&gt;";
	          break;
	        default:
	          continue;
	      }
	      lastIndex !== index && (html += text.slice(lastIndex, index));
	      lastIndex = index + 1;
	      html += match;
	    }
	    text = lastIndex !== index ? html + text.slice(lastIndex, index) : html;
	  }
	  return text;
	}
	var uppercasePattern = /([A-Z])/g,
	  msPattern = /^ms-/,
	  isJavaScriptProtocol =
	    /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
	function sanitizeURL(url) {
	  return isJavaScriptProtocol.test("" + url)
	    ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
	    : url;
	}
	var ReactSharedInternals =
	    React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
	  ReactDOMSharedInternals =
	    ReactDOM.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
	  sharedNotPendingObject = {
	    pending: false,
	    data: null,
	    method: null,
	    action: null
	  },
	  previousDispatcher = ReactDOMSharedInternals.d;
	ReactDOMSharedInternals.d = {
	  f: previousDispatcher.f,
	  r: previousDispatcher.r,
	  D: prefetchDNS,
	  C: preconnect,
	  L: preload,
	  m: preloadModule,
	  X: preinitScript,
	  S: preinitStyle,
	  M: preinitModuleScript
	};
	var PRELOAD_NO_CREDS = [],
	  currentlyFlushingRenderState = null;
	stringToPrecomputedChunk('"></template>');
	var startInlineScript = stringToPrecomputedChunk("<script"),
	  endInlineScript = stringToPrecomputedChunk("\x3c/script>"),
	  startScriptSrc = stringToPrecomputedChunk('<script src="'),
	  startModuleSrc = stringToPrecomputedChunk('<script type="module" src="'),
	  scriptNonce = stringToPrecomputedChunk(' nonce="'),
	  scriptIntegirty = stringToPrecomputedChunk(' integrity="'),
	  scriptCrossOrigin = stringToPrecomputedChunk(' crossorigin="'),
	  endAsyncScript = stringToPrecomputedChunk(' async="">\x3c/script>'),
	  startInlineStyle = stringToPrecomputedChunk("<style"),
	  scriptRegex = /(<\/|<)(s)(cript)/gi;
	function scriptReplacer(match, prefix, s, suffix) {
	  return "" + prefix + ("s" === s ? "\\u0073" : "\\u0053") + suffix;
	}
	var importMapScriptStart = stringToPrecomputedChunk(
	    '<script type="importmap">'
	  ),
	  importMapScriptEnd = stringToPrecomputedChunk("\x3c/script>");
	function createRenderState(
	  resumableState,
	  nonce,
	  externalRuntimeConfig,
	  importMap,
	  onHeaders,
	  maxHeadersLength
	) {
	  externalRuntimeConfig =
	    "string" === typeof nonce ? nonce : nonce && nonce.script;
	  var inlineScriptWithNonce =
	      void 0 === externalRuntimeConfig
	        ? startInlineScript
	        : stringToPrecomputedChunk(
	            '<script nonce="' +
	              escapeTextForBrowser(externalRuntimeConfig) +
	              '"'
	          ),
	    nonceStyle = "string" === typeof nonce ? void 0 : nonce && nonce.style,
	    inlineStyleWithNonce =
	      void 0 === nonceStyle
	        ? startInlineStyle
	        : stringToPrecomputedChunk(
	            '<style nonce="' + escapeTextForBrowser(nonceStyle) + '"'
	          ),
	    idPrefix = resumableState.idPrefix,
	    bootstrapChunks = [],
	    bootstrapScriptContent = resumableState.bootstrapScriptContent,
	    bootstrapScripts = resumableState.bootstrapScripts,
	    bootstrapModules = resumableState.bootstrapModules;
	  void 0 !== bootstrapScriptContent &&
	    (bootstrapChunks.push(inlineScriptWithNonce),
	    pushCompletedShellIdAttribute(bootstrapChunks, resumableState),
	    bootstrapChunks.push(
	      endOfStartTag,
	      stringToChunk(
	        ("" + bootstrapScriptContent).replace(scriptRegex, scriptReplacer)
	      ),
	      endInlineScript
	    ));
	  bootstrapScriptContent = [];
	  void 0 !== importMap &&
	    (bootstrapScriptContent.push(importMapScriptStart),
	    bootstrapScriptContent.push(
	      stringToChunk(
	        ("" + JSON.stringify(importMap)).replace(scriptRegex, scriptReplacer)
	      )
	    ),
	    bootstrapScriptContent.push(importMapScriptEnd));
	  importMap = onHeaders
	    ? {
	        preconnects: "",
	        fontPreloads: "",
	        highImagePreloads: "",
	        remainingCapacity:
	          2 + ("number" === typeof maxHeadersLength ? maxHeadersLength : 2e3)
	      }
	    : null;
	  onHeaders = {
	    placeholderPrefix: stringToPrecomputedChunk(idPrefix + "P:"),
	    segmentPrefix: stringToPrecomputedChunk(idPrefix + "S:"),
	    boundaryPrefix: stringToPrecomputedChunk(idPrefix + "B:"),
	    startInlineScript: inlineScriptWithNonce,
	    startInlineStyle: inlineStyleWithNonce,
	    preamble: createPreambleState(),
	    externalRuntimeScript: null,
	    bootstrapChunks: bootstrapChunks,
	    importMapChunks: bootstrapScriptContent,
	    onHeaders: onHeaders,
	    headers: importMap,
	    resets: {
	      font: {},
	      dns: {},
	      connect: { default: {}, anonymous: {}, credentials: {} },
	      image: {},
	      style: {}
	    },
	    charsetChunks: [],
	    viewportChunks: [],
	    hoistableChunks: [],
	    preconnects: new Set(),
	    fontPreloads: new Set(),
	    highImagePreloads: new Set(),
	    styles: new Map(),
	    bootstrapScripts: new Set(),
	    scripts: new Set(),
	    bulkPreloads: new Set(),
	    preloads: {
	      images: new Map(),
	      stylesheets: new Map(),
	      scripts: new Map(),
	      moduleScripts: new Map()
	    },
	    nonce: { script: externalRuntimeConfig, style: nonceStyle },
	    hoistableState: null,
	    stylesToHoist: false
	  };
	  if (void 0 !== bootstrapScripts)
	    for (importMap = 0; importMap < bootstrapScripts.length; importMap++)
	      (idPrefix = bootstrapScripts[importMap]),
	        (nonceStyle = inlineScriptWithNonce = void 0),
	        (inlineStyleWithNonce = {
	          rel: "preload",
	          as: "script",
	          fetchPriority: "low",
	          nonce: nonce
	        }),
	        "string" === typeof idPrefix
	          ? (inlineStyleWithNonce.href = maxHeadersLength = idPrefix)
	          : ((inlineStyleWithNonce.href = maxHeadersLength = idPrefix.src),
	            (inlineStyleWithNonce.integrity = nonceStyle =
	              "string" === typeof idPrefix.integrity
	                ? idPrefix.integrity
	                : void 0),
	            (inlineStyleWithNonce.crossOrigin = inlineScriptWithNonce =
	              "string" === typeof idPrefix || null == idPrefix.crossOrigin
	                ? void 0
	                : "use-credentials" === idPrefix.crossOrigin
	                  ? "use-credentials"
	                  : "")),
	        (idPrefix = resumableState),
	        (bootstrapScriptContent = maxHeadersLength),
	        (idPrefix.scriptResources[bootstrapScriptContent] = null),
	        (idPrefix.moduleScriptResources[bootstrapScriptContent] = null),
	        (idPrefix = []),
	        pushLinkImpl(idPrefix, inlineStyleWithNonce),
	        onHeaders.bootstrapScripts.add(idPrefix),
	        bootstrapChunks.push(
	          startScriptSrc,
	          stringToChunk(escapeTextForBrowser(maxHeadersLength)),
	          attributeEnd
	        ),
	        externalRuntimeConfig &&
	          bootstrapChunks.push(
	            scriptNonce,
	            stringToChunk(escapeTextForBrowser(externalRuntimeConfig)),
	            attributeEnd
	          ),
	        "string" === typeof nonceStyle &&
	          bootstrapChunks.push(
	            scriptIntegirty,
	            stringToChunk(escapeTextForBrowser(nonceStyle)),
	            attributeEnd
	          ),
	        "string" === typeof inlineScriptWithNonce &&
	          bootstrapChunks.push(
	            scriptCrossOrigin,
	            stringToChunk(escapeTextForBrowser(inlineScriptWithNonce)),
	            attributeEnd
	          ),
	        pushCompletedShellIdAttribute(bootstrapChunks, resumableState),
	        bootstrapChunks.push(endAsyncScript);
	  if (void 0 !== bootstrapModules)
	    for (nonce = 0; nonce < bootstrapModules.length; nonce++)
	      (nonceStyle = bootstrapModules[nonce]),
	        (maxHeadersLength = importMap = void 0),
	        (inlineScriptWithNonce = {
	          rel: "modulepreload",
	          fetchPriority: "low",
	          nonce: externalRuntimeConfig
	        }),
	        "string" === typeof nonceStyle
	          ? (inlineScriptWithNonce.href = bootstrapScripts = nonceStyle)
	          : ((inlineScriptWithNonce.href = bootstrapScripts = nonceStyle.src),
	            (inlineScriptWithNonce.integrity = maxHeadersLength =
	              "string" === typeof nonceStyle.integrity
	                ? nonceStyle.integrity
	                : void 0),
	            (inlineScriptWithNonce.crossOrigin = importMap =
	              "string" === typeof nonceStyle || null == nonceStyle.crossOrigin
	                ? void 0
	                : "use-credentials" === nonceStyle.crossOrigin
	                  ? "use-credentials"
	                  : "")),
	        (nonceStyle = resumableState),
	        (inlineStyleWithNonce = bootstrapScripts),
	        (nonceStyle.scriptResources[inlineStyleWithNonce] = null),
	        (nonceStyle.moduleScriptResources[inlineStyleWithNonce] = null),
	        (nonceStyle = []),
	        pushLinkImpl(nonceStyle, inlineScriptWithNonce),
	        onHeaders.bootstrapScripts.add(nonceStyle),
	        bootstrapChunks.push(
	          startModuleSrc,
	          stringToChunk(escapeTextForBrowser(bootstrapScripts)),
	          attributeEnd
	        ),
	        externalRuntimeConfig &&
	          bootstrapChunks.push(
	            scriptNonce,
	            stringToChunk(escapeTextForBrowser(externalRuntimeConfig)),
	            attributeEnd
	          ),
	        "string" === typeof maxHeadersLength &&
	          bootstrapChunks.push(
	            scriptIntegirty,
	            stringToChunk(escapeTextForBrowser(maxHeadersLength)),
	            attributeEnd
	          ),
	        "string" === typeof importMap &&
	          bootstrapChunks.push(
	            scriptCrossOrigin,
	            stringToChunk(escapeTextForBrowser(importMap)),
	            attributeEnd
	          ),
	        pushCompletedShellIdAttribute(bootstrapChunks, resumableState),
	        bootstrapChunks.push(endAsyncScript);
	  return onHeaders;
	}
	function createResumableState(
	  identifierPrefix,
	  externalRuntimeConfig,
	  bootstrapScriptContent,
	  bootstrapScripts,
	  bootstrapModules
	) {
	  return {
	    idPrefix: void 0 === identifierPrefix ? "" : identifierPrefix,
	    nextFormID: 0,
	    streamingFormat: 0,
	    bootstrapScriptContent: bootstrapScriptContent,
	    bootstrapScripts: bootstrapScripts,
	    bootstrapModules: bootstrapModules,
	    instructions: 0,
	    hasBody: false,
	    hasHtml: false,
	    unknownResources: {},
	    dnsResources: {},
	    connectResources: { default: {}, anonymous: {}, credentials: {} },
	    imageResources: {},
	    styleResources: {},
	    scriptResources: {},
	    moduleUnknownResources: {},
	    moduleScriptResources: {}
	  };
	}
	function createPreambleState() {
	  return { htmlChunks: null, headChunks: null, bodyChunks: null };
	}
	function createFormatContext(
	  insertionMode,
	  selectedValue,
	  tagScope,
	  viewTransition
	) {
	  return {
	    insertionMode: insertionMode,
	    selectedValue: selectedValue,
	    tagScope: tagScope,
	    viewTransition: viewTransition
	  };
	}
	function createRootFormatContext(namespaceURI) {
	  return createFormatContext(
	    "http://www.w3.org/2000/svg" === namespaceURI
	      ? 4
	      : "http://www.w3.org/1998/Math/MathML" === namespaceURI
	        ? 5
	        : 0,
	    null,
	    0,
	    null
	  );
	}
	function getChildFormatContext(parentContext, type, props) {
	  var subtreeScope = parentContext.tagScope & -25;
	  switch (type) {
	    case "noscript":
	      return createFormatContext(2, null, subtreeScope | 1, null);
	    case "select":
	      return createFormatContext(
	        2,
	        null != props.value ? props.value : props.defaultValue,
	        subtreeScope,
	        null
	      );
	    case "svg":
	      return createFormatContext(4, null, subtreeScope, null);
	    case "picture":
	      return createFormatContext(2, null, subtreeScope | 2, null);
	    case "math":
	      return createFormatContext(5, null, subtreeScope, null);
	    case "foreignObject":
	      return createFormatContext(2, null, subtreeScope, null);
	    case "table":
	      return createFormatContext(6, null, subtreeScope, null);
	    case "thead":
	    case "tbody":
	    case "tfoot":
	      return createFormatContext(7, null, subtreeScope, null);
	    case "colgroup":
	      return createFormatContext(9, null, subtreeScope, null);
	    case "tr":
	      return createFormatContext(8, null, subtreeScope, null);
	    case "head":
	      if (2 > parentContext.insertionMode)
	        return createFormatContext(3, null, subtreeScope, null);
	      break;
	    case "html":
	      if (0 === parentContext.insertionMode)
	        return createFormatContext(1, null, subtreeScope, null);
	  }
	  return 6 <= parentContext.insertionMode || 2 > parentContext.insertionMode
	    ? createFormatContext(2, null, subtreeScope, null)
	    : parentContext.tagScope !== subtreeScope
	      ? createFormatContext(
	          parentContext.insertionMode,
	          parentContext.selectedValue,
	          subtreeScope,
	          null
	        )
	      : parentContext;
	}
	function getSuspenseViewTransition(parentViewTransition) {
	  return null === parentViewTransition
	    ? null
	    : {
	        update: parentViewTransition.update,
	        enter: "none",
	        exit: "none",
	        share: parentViewTransition.update,
	        name: parentViewTransition.autoName,
	        autoName: parentViewTransition.autoName,
	        nameIdx: 0
	      };
	}
	function getSuspenseFallbackFormatContext(resumableState, parentContext) {
	  parentContext.tagScope & 32 && (resumableState.instructions |= 128);
	  return createFormatContext(
	    parentContext.insertionMode,
	    parentContext.selectedValue,
	    parentContext.tagScope | 12,
	    getSuspenseViewTransition(parentContext.viewTransition)
	  );
	}
	function getSuspenseContentFormatContext(resumableState, parentContext) {
	  resumableState = getSuspenseViewTransition(parentContext.viewTransition);
	  var subtreeScope = parentContext.tagScope | 16;
	  null !== resumableState &&
	    "none" !== resumableState.share &&
	    (subtreeScope |= 64);
	  return createFormatContext(
	    parentContext.insertionMode,
	    parentContext.selectedValue,
	    subtreeScope,
	    resumableState
	  );
	}
	var textSeparator = stringToPrecomputedChunk("\x3c!-- --\x3e");
	function pushTextInstance(target, text, renderState, textEmbedded) {
	  if ("" === text) return textEmbedded;
	  textEmbedded && target.push(textSeparator);
	  target.push(stringToChunk(escapeTextForBrowser(text)));
	  return true;
	}
	var styleNameCache = new Map(),
	  styleAttributeStart = stringToPrecomputedChunk(' style="'),
	  styleAssign = stringToPrecomputedChunk(":"),
	  styleSeparator = stringToPrecomputedChunk(";");
	function pushStyleAttribute(target, style) {
	  if ("object" !== typeof style) throw Error(formatProdErrorMessage(62));
	  var isFirst = true,
	    styleName;
	  for (styleName in style)
	    if (hasOwnProperty.call(style, styleName)) {
	      var styleValue = style[styleName];
	      if (
	        null != styleValue &&
	        "boolean" !== typeof styleValue &&
	        "" !== styleValue
	      ) {
	        if (0 === styleName.indexOf("--")) {
	          var nameChunk = stringToChunk(escapeTextForBrowser(styleName));
	          styleValue = stringToChunk(
	            escapeTextForBrowser(("" + styleValue).trim())
	          );
	        } else
	          (nameChunk = styleNameCache.get(styleName)),
	            void 0 === nameChunk &&
	              ((nameChunk = stringToPrecomputedChunk(
	                escapeTextForBrowser(
	                  styleName
	                    .replace(uppercasePattern, "-$1")
	                    .toLowerCase()
	                    .replace(msPattern, "-ms-")
	                )
	              )),
	              styleNameCache.set(styleName, nameChunk)),
	            (styleValue =
	              "number" === typeof styleValue
	                ? 0 === styleValue || unitlessNumbers.has(styleName)
	                  ? stringToChunk("" + styleValue)
	                  : stringToChunk(styleValue + "px")
	                : stringToChunk(
	                    escapeTextForBrowser(("" + styleValue).trim())
	                  ));
	        isFirst
	          ? ((isFirst = false),
	            target.push(
	              styleAttributeStart,
	              nameChunk,
	              styleAssign,
	              styleValue
	            ))
	          : target.push(styleSeparator, nameChunk, styleAssign, styleValue);
	      }
	    }
	  isFirst || target.push(attributeEnd);
	}
	var attributeSeparator = stringToPrecomputedChunk(" "),
	  attributeAssign = stringToPrecomputedChunk('="'),
	  attributeEnd = stringToPrecomputedChunk('"'),
	  attributeEmptyString = stringToPrecomputedChunk('=""');
	function pushBooleanAttribute(target, name, value) {
	  value &&
	    "function" !== typeof value &&
	    "symbol" !== typeof value &&
	    target.push(attributeSeparator, stringToChunk(name), attributeEmptyString);
	}
	function pushStringAttribute(target, name, value) {
	  "function" !== typeof value &&
	    "symbol" !== typeof value &&
	    "boolean" !== typeof value &&
	    target.push(
	      attributeSeparator,
	      stringToChunk(name),
	      attributeAssign,
	      stringToChunk(escapeTextForBrowser(value)),
	      attributeEnd
	    );
	}
	var actionJavaScriptURL = stringToPrecomputedChunk(
	    escapeTextForBrowser(
	      "javascript:throw new Error('React form unexpectedly submitted.')"
	    )
	  ),
	  startHiddenInputChunk = stringToPrecomputedChunk('<input type="hidden"');
	function pushAdditionalFormField(value, key) {
	  this.push(startHiddenInputChunk);
	  validateAdditionalFormField(value);
	  pushStringAttribute(this, "name", key);
	  pushStringAttribute(this, "value", value);
	  this.push(endOfStartTagSelfClosing);
	}
	function validateAdditionalFormField(value) {
	  if ("string" !== typeof value) throw Error(formatProdErrorMessage(480));
	}
	function getCustomFormFields(resumableState, formAction) {
	  if ("function" === typeof formAction.$$FORM_ACTION) {
	    var id = resumableState.nextFormID++;
	    resumableState = resumableState.idPrefix + id;
	    try {
	      var customFields = formAction.$$FORM_ACTION(resumableState);
	      if (customFields) {
	        var formData = customFields.data;
	        null != formData && formData.forEach(validateAdditionalFormField);
	      }
	      return customFields;
	    } catch (x) {
	      if ("object" === typeof x && null !== x && "function" === typeof x.then)
	        throw x;
	    }
	  }
	  return null;
	}
	function pushFormActionAttribute(
	  target,
	  resumableState,
	  renderState,
	  formAction,
	  formEncType,
	  formMethod,
	  formTarget,
	  name
	) {
	  var formData = null;
	  if ("function" === typeof formAction) {
	    var customFields = getCustomFormFields(resumableState, formAction);
	    null !== customFields
	      ? ((name = customFields.name),
	        (formAction = customFields.action || ""),
	        (formEncType = customFields.encType),
	        (formMethod = customFields.method),
	        (formTarget = customFields.target),
	        (formData = customFields.data))
	      : (target.push(
	          attributeSeparator,
	          stringToChunk("formAction"),
	          attributeAssign,
	          actionJavaScriptURL,
	          attributeEnd
	        ),
	        (formTarget = formMethod = formEncType = formAction = name = null),
	        injectFormReplayingRuntime(resumableState, renderState));
	  }
	  null != name && pushAttribute(target, "name", name);
	  null != formAction && pushAttribute(target, "formAction", formAction);
	  null != formEncType && pushAttribute(target, "formEncType", formEncType);
	  null != formMethod && pushAttribute(target, "formMethod", formMethod);
	  null != formTarget && pushAttribute(target, "formTarget", formTarget);
	  return formData;
	}
	function pushAttribute(target, name, value) {
	  switch (name) {
	    case "className":
	      pushStringAttribute(target, "class", value);
	      break;
	    case "tabIndex":
	      pushStringAttribute(target, "tabindex", value);
	      break;
	    case "dir":
	    case "role":
	    case "viewBox":
	    case "width":
	    case "height":
	      pushStringAttribute(target, name, value);
	      break;
	    case "style":
	      pushStyleAttribute(target, value);
	      break;
	    case "src":
	    case "href":
	      if ("" === value) break;
	    case "action":
	    case "formAction":
	      if (
	        null == value ||
	        "function" === typeof value ||
	        "symbol" === typeof value ||
	        "boolean" === typeof value
	      )
	        break;
	      value = sanitizeURL("" + value);
	      target.push(
	        attributeSeparator,
	        stringToChunk(name),
	        attributeAssign,
	        stringToChunk(escapeTextForBrowser(value)),
	        attributeEnd
	      );
	      break;
	    case "defaultValue":
	    case "defaultChecked":
	    case "innerHTML":
	    case "suppressContentEditableWarning":
	    case "suppressHydrationWarning":
	    case "ref":
	      break;
	    case "autoFocus":
	    case "multiple":
	    case "muted":
	      pushBooleanAttribute(target, name.toLowerCase(), value);
	      break;
	    case "xlinkHref":
	      if (
	        "function" === typeof value ||
	        "symbol" === typeof value ||
	        "boolean" === typeof value
	      )
	        break;
	      value = sanitizeURL("" + value);
	      target.push(
	        attributeSeparator,
	        stringToChunk("xlink:href"),
	        attributeAssign,
	        stringToChunk(escapeTextForBrowser(value)),
	        attributeEnd
	      );
	      break;
	    case "contentEditable":
	    case "spellCheck":
	    case "draggable":
	    case "value":
	    case "autoReverse":
	    case "externalResourcesRequired":
	    case "focusable":
	    case "preserveAlpha":
	      "function" !== typeof value &&
	        "symbol" !== typeof value &&
	        target.push(
	          attributeSeparator,
	          stringToChunk(name),
	          attributeAssign,
	          stringToChunk(escapeTextForBrowser(value)),
	          attributeEnd
	        );
	      break;
	    case "inert":
	    case "allowFullScreen":
	    case "async":
	    case "autoPlay":
	    case "controls":
	    case "default":
	    case "defer":
	    case "disabled":
	    case "disablePictureInPicture":
	    case "disableRemotePlayback":
	    case "formNoValidate":
	    case "hidden":
	    case "loop":
	    case "noModule":
	    case "noValidate":
	    case "open":
	    case "playsInline":
	    case "readOnly":
	    case "required":
	    case "reversed":
	    case "scoped":
	    case "seamless":
	    case "itemScope":
	      value &&
	        "function" !== typeof value &&
	        "symbol" !== typeof value &&
	        target.push(
	          attributeSeparator,
	          stringToChunk(name),
	          attributeEmptyString
	        );
	      break;
	    case "capture":
	    case "download":
	      true === value
	        ? target.push(
	            attributeSeparator,
	            stringToChunk(name),
	            attributeEmptyString
	          )
	        : false !== value &&
	          "function" !== typeof value &&
	          "symbol" !== typeof value &&
	          target.push(
	            attributeSeparator,
	            stringToChunk(name),
	            attributeAssign,
	            stringToChunk(escapeTextForBrowser(value)),
	            attributeEnd
	          );
	      break;
	    case "cols":
	    case "rows":
	    case "size":
	    case "span":
	      "function" !== typeof value &&
	        "symbol" !== typeof value &&
	        !isNaN(value) &&
	        1 <= value &&
	        target.push(
	          attributeSeparator,
	          stringToChunk(name),
	          attributeAssign,
	          stringToChunk(escapeTextForBrowser(value)),
	          attributeEnd
	        );
	      break;
	    case "rowSpan":
	    case "start":
	      "function" === typeof value ||
	        "symbol" === typeof value ||
	        isNaN(value) ||
	        target.push(
	          attributeSeparator,
	          stringToChunk(name),
	          attributeAssign,
	          stringToChunk(escapeTextForBrowser(value)),
	          attributeEnd
	        );
	      break;
	    case "xlinkActuate":
	      pushStringAttribute(target, "xlink:actuate", value);
	      break;
	    case "xlinkArcrole":
	      pushStringAttribute(target, "xlink:arcrole", value);
	      break;
	    case "xlinkRole":
	      pushStringAttribute(target, "xlink:role", value);
	      break;
	    case "xlinkShow":
	      pushStringAttribute(target, "xlink:show", value);
	      break;
	    case "xlinkTitle":
	      pushStringAttribute(target, "xlink:title", value);
	      break;
	    case "xlinkType":
	      pushStringAttribute(target, "xlink:type", value);
	      break;
	    case "xmlBase":
	      pushStringAttribute(target, "xml:base", value);
	      break;
	    case "xmlLang":
	      pushStringAttribute(target, "xml:lang", value);
	      break;
	    case "xmlSpace":
	      pushStringAttribute(target, "xml:space", value);
	      break;
	    default:
	      if (
	        !(2 < name.length) ||
	        ("o" !== name[0] && "O" !== name[0]) ||
	        ("n" !== name[1] && "N" !== name[1])
	      )
	        if (((name = aliases.get(name) || name), isAttributeNameSafe(name))) {
	          switch (typeof value) {
	            case "function":
	            case "symbol":
	              return;
	            case "boolean":
	              var prefix$8 = name.toLowerCase().slice(0, 5);
	              if ("data-" !== prefix$8 && "aria-" !== prefix$8) return;
	          }
	          target.push(
	            attributeSeparator,
	            stringToChunk(name),
	            attributeAssign,
	            stringToChunk(escapeTextForBrowser(value)),
	            attributeEnd
	          );
	        }
	  }
	}
	var endOfStartTag = stringToPrecomputedChunk(">"),
	  endOfStartTagSelfClosing = stringToPrecomputedChunk("/>");
	function pushInnerHTML(target, innerHTML, children) {
	  if (null != innerHTML) {
	    if (null != children) throw Error(formatProdErrorMessage(60));
	    if ("object" !== typeof innerHTML || !("__html" in innerHTML))
	      throw Error(formatProdErrorMessage(61));
	    innerHTML = innerHTML.__html;
	    null !== innerHTML &&
	      void 0 !== innerHTML &&
	      target.push(stringToChunk("" + innerHTML));
	  }
	}
	function flattenOptionChildren(children) {
	  var content = "";
	  React.Children.forEach(children, function (child) {
	    null != child && (content += child);
	  });
	  return content;
	}
	var selectedMarkerAttribute = stringToPrecomputedChunk(' selected=""'),
	  formReplayingRuntimeScript = stringToPrecomputedChunk(
	    'addEventListener("submit",function(a){if(!a.defaultPrevented){var c=a.target,d=a.submitter,e=c.action,b=d;if(d){var f=d.getAttribute("formAction");null!=f&&(e=f,b=null)}"javascript:throw new Error(\'React form unexpectedly submitted.\')"===e&&(a.preventDefault(),b?(a=document.createElement("input"),a.name=b.name,a.value=b.value,b.parentNode.insertBefore(a,b),b=new FormData(c),a.parentNode.removeChild(a)):b=new FormData(c),a=c.ownerDocument||c,(a.$$reactFormReplay=a.$$reactFormReplay||[]).push(c,d,b))}});'
	  );
	function injectFormReplayingRuntime(resumableState, renderState) {
	  if (0 === (resumableState.instructions & 16)) {
	    resumableState.instructions |= 16;
	    var preamble = renderState.preamble,
	      bootstrapChunks = renderState.bootstrapChunks;
	    (preamble.htmlChunks || preamble.headChunks) && 0 === bootstrapChunks.length
	      ? (bootstrapChunks.push(renderState.startInlineScript),
	        pushCompletedShellIdAttribute(bootstrapChunks, resumableState),
	        bootstrapChunks.push(
	          endOfStartTag,
	          formReplayingRuntimeScript,
	          endInlineScript
	        ))
	      : bootstrapChunks.unshift(
	          renderState.startInlineScript,
	          endOfStartTag,
	          formReplayingRuntimeScript,
	          endInlineScript
	        );
	  }
	}
	var formStateMarkerIsMatching = stringToPrecomputedChunk("\x3c!--F!--\x3e"),
	  formStateMarkerIsNotMatching = stringToPrecomputedChunk("\x3c!--F--\x3e");
	function pushLinkImpl(target, props) {
	  target.push(startChunkForTag("link"));
	  for (var propKey in props)
	    if (hasOwnProperty.call(props, propKey)) {
	      var propValue = props[propKey];
	      if (null != propValue)
	        switch (propKey) {
	          case "children":
	          case "dangerouslySetInnerHTML":
	            throw Error(formatProdErrorMessage(399, "link"));
	          default:
	            pushAttribute(target, propKey, propValue);
	        }
	    }
	  target.push(endOfStartTagSelfClosing);
	  return null;
	}
	var styleRegex = /(<\/|<)(s)(tyle)/gi;
	function styleReplacer(match, prefix, s, suffix) {
	  return "" + prefix + ("s" === s ? "\\73 " : "\\53 ") + suffix;
	}
	function pushSelfClosing(target, props, tag) {
	  target.push(startChunkForTag(tag));
	  for (var propKey in props)
	    if (hasOwnProperty.call(props, propKey)) {
	      var propValue = props[propKey];
	      if (null != propValue)
	        switch (propKey) {
	          case "children":
	          case "dangerouslySetInnerHTML":
	            throw Error(formatProdErrorMessage(399, tag));
	          default:
	            pushAttribute(target, propKey, propValue);
	        }
	    }
	  target.push(endOfStartTagSelfClosing);
	  return null;
	}
	function pushTitleImpl(target, props) {
	  target.push(startChunkForTag("title"));
	  var children = null,
	    innerHTML = null,
	    propKey;
	  for (propKey in props)
	    if (hasOwnProperty.call(props, propKey)) {
	      var propValue = props[propKey];
	      if (null != propValue)
	        switch (propKey) {
	          case "children":
	            children = propValue;
	            break;
	          case "dangerouslySetInnerHTML":
	            innerHTML = propValue;
	            break;
	          default:
	            pushAttribute(target, propKey, propValue);
	        }
	    }
	  target.push(endOfStartTag);
	  props = Array.isArray(children)
	    ? 2 > children.length
	      ? children[0]
	      : null
	    : children;
	  "function" !== typeof props &&
	    "symbol" !== typeof props &&
	    null !== props &&
	    void 0 !== props &&
	    target.push(stringToChunk(escapeTextForBrowser("" + props)));
	  pushInnerHTML(target, innerHTML, children);
	  target.push(endChunkForTag("title"));
	  return null;
	}
	var headPreambleContributionChunk =
	    stringToPrecomputedChunk("\x3c!--head--\x3e"),
	  bodyPreambleContributionChunk = stringToPrecomputedChunk("\x3c!--body--\x3e"),
	  htmlPreambleContributionChunk = stringToPrecomputedChunk("\x3c!--html--\x3e");
	function pushScriptImpl(target, props) {
	  target.push(startChunkForTag("script"));
	  var children = null,
	    innerHTML = null,
	    propKey;
	  for (propKey in props)
	    if (hasOwnProperty.call(props, propKey)) {
	      var propValue = props[propKey];
	      if (null != propValue)
	        switch (propKey) {
	          case "children":
	            children = propValue;
	            break;
	          case "dangerouslySetInnerHTML":
	            innerHTML = propValue;
	            break;
	          default:
	            pushAttribute(target, propKey, propValue);
	        }
	    }
	  target.push(endOfStartTag);
	  pushInnerHTML(target, innerHTML, children);
	  "string" === typeof children &&
	    target.push(
	      stringToChunk(("" + children).replace(scriptRegex, scriptReplacer))
	    );
	  target.push(endChunkForTag("script"));
	  return null;
	}
	function pushStartSingletonElement(target, props, tag) {
	  target.push(startChunkForTag(tag));
	  var innerHTML = (tag = null),
	    propKey;
	  for (propKey in props)
	    if (hasOwnProperty.call(props, propKey)) {
	      var propValue = props[propKey];
	      if (null != propValue)
	        switch (propKey) {
	          case "children":
	            tag = propValue;
	            break;
	          case "dangerouslySetInnerHTML":
	            innerHTML = propValue;
	            break;
	          default:
	            pushAttribute(target, propKey, propValue);
	        }
	    }
	  target.push(endOfStartTag);
	  pushInnerHTML(target, innerHTML, tag);
	  return tag;
	}
	function pushStartGenericElement(target, props, tag) {
	  target.push(startChunkForTag(tag));
	  var innerHTML = (tag = null),
	    propKey;
	  for (propKey in props)
	    if (hasOwnProperty.call(props, propKey)) {
	      var propValue = props[propKey];
	      if (null != propValue)
	        switch (propKey) {
	          case "children":
	            tag = propValue;
	            break;
	          case "dangerouslySetInnerHTML":
	            innerHTML = propValue;
	            break;
	          default:
	            pushAttribute(target, propKey, propValue);
	        }
	    }
	  target.push(endOfStartTag);
	  pushInnerHTML(target, innerHTML, tag);
	  return "string" === typeof tag
	    ? (target.push(stringToChunk(escapeTextForBrowser(tag))), null)
	    : tag;
	}
	var leadingNewline = stringToPrecomputedChunk("\n"),
	  VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
	  validatedTagCache = new Map();
	function startChunkForTag(tag) {
	  var tagStartChunk = validatedTagCache.get(tag);
	  if (void 0 === tagStartChunk) {
	    if (!VALID_TAG_REGEX.test(tag))
	      throw Error(formatProdErrorMessage(65, tag));
	    tagStartChunk = stringToPrecomputedChunk("<" + tag);
	    validatedTagCache.set(tag, tagStartChunk);
	  }
	  return tagStartChunk;
	}
	var doctypeChunk = stringToPrecomputedChunk("<!DOCTYPE html>");
	function pushStartInstance(
	  target$jscomp$0,
	  type,
	  props,
	  resumableState,
	  renderState,
	  preambleState,
	  hoistableState,
	  formatContext,
	  textEmbedded
	) {
	  switch (type) {
	    case "div":
	    case "span":
	    case "svg":
	    case "path":
	      break;
	    case "a":
	      target$jscomp$0.push(startChunkForTag("a"));
	      var children = null,
	        innerHTML = null,
	        propKey;
	      for (propKey in props)
	        if (hasOwnProperty.call(props, propKey)) {
	          var propValue = props[propKey];
	          if (null != propValue)
	            switch (propKey) {
	              case "children":
	                children = propValue;
	                break;
	              case "dangerouslySetInnerHTML":
	                innerHTML = propValue;
	                break;
	              case "href":
	                "" === propValue
	                  ? pushStringAttribute(target$jscomp$0, "href", "")
	                  : pushAttribute(target$jscomp$0, propKey, propValue);
	                break;
	              default:
	                pushAttribute(target$jscomp$0, propKey, propValue);
	            }
	        }
	      target$jscomp$0.push(endOfStartTag);
	      pushInnerHTML(target$jscomp$0, innerHTML, children);
	      if ("string" === typeof children) {
	        target$jscomp$0.push(stringToChunk(escapeTextForBrowser(children)));
	        var JSCompiler_inline_result = null;
	      } else JSCompiler_inline_result = children;
	      return JSCompiler_inline_result;
	    case "g":
	    case "p":
	    case "li":
	      break;
	    case "select":
	      target$jscomp$0.push(startChunkForTag("select"));
	      var children$jscomp$0 = null,
	        innerHTML$jscomp$0 = null,
	        propKey$jscomp$0;
	      for (propKey$jscomp$0 in props)
	        if (hasOwnProperty.call(props, propKey$jscomp$0)) {
	          var propValue$jscomp$0 = props[propKey$jscomp$0];
	          if (null != propValue$jscomp$0)
	            switch (propKey$jscomp$0) {
	              case "children":
	                children$jscomp$0 = propValue$jscomp$0;
	                break;
	              case "dangerouslySetInnerHTML":
	                innerHTML$jscomp$0 = propValue$jscomp$0;
	                break;
	              case "defaultValue":
	              case "value":
	                break;
	              default:
	                pushAttribute(
	                  target$jscomp$0,
	                  propKey$jscomp$0,
	                  propValue$jscomp$0
	                );
	            }
	        }
	      target$jscomp$0.push(endOfStartTag);
	      pushInnerHTML(target$jscomp$0, innerHTML$jscomp$0, children$jscomp$0);
	      return children$jscomp$0;
	    case "option":
	      var selectedValue = formatContext.selectedValue;
	      target$jscomp$0.push(startChunkForTag("option"));
	      var children$jscomp$1 = null,
	        value = null,
	        selected = null,
	        innerHTML$jscomp$1 = null,
	        propKey$jscomp$1;
	      for (propKey$jscomp$1 in props)
	        if (hasOwnProperty.call(props, propKey$jscomp$1)) {
	          var propValue$jscomp$1 = props[propKey$jscomp$1];
	          if (null != propValue$jscomp$1)
	            switch (propKey$jscomp$1) {
	              case "children":
	                children$jscomp$1 = propValue$jscomp$1;
	                break;
	              case "selected":
	                selected = propValue$jscomp$1;
	                break;
	              case "dangerouslySetInnerHTML":
	                innerHTML$jscomp$1 = propValue$jscomp$1;
	                break;
	              case "value":
	                value = propValue$jscomp$1;
	              default:
	                pushAttribute(
	                  target$jscomp$0,
	                  propKey$jscomp$1,
	                  propValue$jscomp$1
	                );
	            }
	        }
	      if (null != selectedValue) {
	        var stringValue =
	          null !== value
	            ? "" + value
	            : flattenOptionChildren(children$jscomp$1);
	        if (isArrayImpl(selectedValue))
	          for (var i = 0; i < selectedValue.length; i++) {
	            if ("" + selectedValue[i] === stringValue) {
	              target$jscomp$0.push(selectedMarkerAttribute);
	              break;
	            }
	          }
	        else
	          "" + selectedValue === stringValue &&
	            target$jscomp$0.push(selectedMarkerAttribute);
	      } else selected && target$jscomp$0.push(selectedMarkerAttribute);
	      target$jscomp$0.push(endOfStartTag);
	      pushInnerHTML(target$jscomp$0, innerHTML$jscomp$1, children$jscomp$1);
	      return children$jscomp$1;
	    case "textarea":
	      target$jscomp$0.push(startChunkForTag("textarea"));
	      var value$jscomp$0 = null,
	        defaultValue = null,
	        children$jscomp$2 = null,
	        propKey$jscomp$2;
	      for (propKey$jscomp$2 in props)
	        if (hasOwnProperty.call(props, propKey$jscomp$2)) {
	          var propValue$jscomp$2 = props[propKey$jscomp$2];
	          if (null != propValue$jscomp$2)
	            switch (propKey$jscomp$2) {
	              case "children":
	                children$jscomp$2 = propValue$jscomp$2;
	                break;
	              case "value":
	                value$jscomp$0 = propValue$jscomp$2;
	                break;
	              case "defaultValue":
	                defaultValue = propValue$jscomp$2;
	                break;
	              case "dangerouslySetInnerHTML":
	                throw Error(formatProdErrorMessage(91));
	              default:
	                pushAttribute(
	                  target$jscomp$0,
	                  propKey$jscomp$2,
	                  propValue$jscomp$2
	                );
	            }
	        }
	      null === value$jscomp$0 &&
	        null !== defaultValue &&
	        (value$jscomp$0 = defaultValue);
	      target$jscomp$0.push(endOfStartTag);
	      if (null != children$jscomp$2) {
	        if (null != value$jscomp$0) throw Error(formatProdErrorMessage(92));
	        if (isArrayImpl(children$jscomp$2)) {
	          if (1 < children$jscomp$2.length)
	            throw Error(formatProdErrorMessage(93));
	          value$jscomp$0 = "" + children$jscomp$2[0];
	        }
	        value$jscomp$0 = "" + children$jscomp$2;
	      }
	      "string" === typeof value$jscomp$0 &&
	        "\n" === value$jscomp$0[0] &&
	        target$jscomp$0.push(leadingNewline);
	      null !== value$jscomp$0 &&
	        target$jscomp$0.push(
	          stringToChunk(escapeTextForBrowser("" + value$jscomp$0))
	        );
	      return null;
	    case "input":
	      target$jscomp$0.push(startChunkForTag("input"));
	      var name = null,
	        formAction = null,
	        formEncType = null,
	        formMethod = null,
	        formTarget = null,
	        value$jscomp$1 = null,
	        defaultValue$jscomp$0 = null,
	        checked = null,
	        defaultChecked = null,
	        propKey$jscomp$3;
	      for (propKey$jscomp$3 in props)
	        if (hasOwnProperty.call(props, propKey$jscomp$3)) {
	          var propValue$jscomp$3 = props[propKey$jscomp$3];
	          if (null != propValue$jscomp$3)
	            switch (propKey$jscomp$3) {
	              case "children":
	              case "dangerouslySetInnerHTML":
	                throw Error(formatProdErrorMessage(399, "input"));
	              case "name":
	                name = propValue$jscomp$3;
	                break;
	              case "formAction":
	                formAction = propValue$jscomp$3;
	                break;
	              case "formEncType":
	                formEncType = propValue$jscomp$3;
	                break;
	              case "formMethod":
	                formMethod = propValue$jscomp$3;
	                break;
	              case "formTarget":
	                formTarget = propValue$jscomp$3;
	                break;
	              case "defaultChecked":
	                defaultChecked = propValue$jscomp$3;
	                break;
	              case "defaultValue":
	                defaultValue$jscomp$0 = propValue$jscomp$3;
	                break;
	              case "checked":
	                checked = propValue$jscomp$3;
	                break;
	              case "value":
	                value$jscomp$1 = propValue$jscomp$3;
	                break;
	              default:
	                pushAttribute(
	                  target$jscomp$0,
	                  propKey$jscomp$3,
	                  propValue$jscomp$3
	                );
	            }
	        }
	      var formData = pushFormActionAttribute(
	        target$jscomp$0,
	        resumableState,
	        renderState,
	        formAction,
	        formEncType,
	        formMethod,
	        formTarget,
	        name
	      );
	      null !== checked
	        ? pushBooleanAttribute(target$jscomp$0, "checked", checked)
	        : null !== defaultChecked &&
	          pushBooleanAttribute(target$jscomp$0, "checked", defaultChecked);
	      null !== value$jscomp$1
	        ? pushAttribute(target$jscomp$0, "value", value$jscomp$1)
	        : null !== defaultValue$jscomp$0 &&
	          pushAttribute(target$jscomp$0, "value", defaultValue$jscomp$0);
	      target$jscomp$0.push(endOfStartTagSelfClosing);
	      null != formData &&
	        formData.forEach(pushAdditionalFormField, target$jscomp$0);
	      return null;
	    case "button":
	      target$jscomp$0.push(startChunkForTag("button"));
	      var children$jscomp$3 = null,
	        innerHTML$jscomp$2 = null,
	        name$jscomp$0 = null,
	        formAction$jscomp$0 = null,
	        formEncType$jscomp$0 = null,
	        formMethod$jscomp$0 = null,
	        formTarget$jscomp$0 = null,
	        propKey$jscomp$4;
	      for (propKey$jscomp$4 in props)
	        if (hasOwnProperty.call(props, propKey$jscomp$4)) {
	          var propValue$jscomp$4 = props[propKey$jscomp$4];
	          if (null != propValue$jscomp$4)
	            switch (propKey$jscomp$4) {
	              case "children":
	                children$jscomp$3 = propValue$jscomp$4;
	                break;
	              case "dangerouslySetInnerHTML":
	                innerHTML$jscomp$2 = propValue$jscomp$4;
	                break;
	              case "name":
	                name$jscomp$0 = propValue$jscomp$4;
	                break;
	              case "formAction":
	                formAction$jscomp$0 = propValue$jscomp$4;
	                break;
	              case "formEncType":
	                formEncType$jscomp$0 = propValue$jscomp$4;
	                break;
	              case "formMethod":
	                formMethod$jscomp$0 = propValue$jscomp$4;
	                break;
	              case "formTarget":
	                formTarget$jscomp$0 = propValue$jscomp$4;
	                break;
	              default:
	                pushAttribute(
	                  target$jscomp$0,
	                  propKey$jscomp$4,
	                  propValue$jscomp$4
	                );
	            }
	        }
	      var formData$jscomp$0 = pushFormActionAttribute(
	        target$jscomp$0,
	        resumableState,
	        renderState,
	        formAction$jscomp$0,
	        formEncType$jscomp$0,
	        formMethod$jscomp$0,
	        formTarget$jscomp$0,
	        name$jscomp$0
	      );
	      target$jscomp$0.push(endOfStartTag);
	      null != formData$jscomp$0 &&
	        formData$jscomp$0.forEach(pushAdditionalFormField, target$jscomp$0);
	      pushInnerHTML(target$jscomp$0, innerHTML$jscomp$2, children$jscomp$3);
	      if ("string" === typeof children$jscomp$3) {
	        target$jscomp$0.push(
	          stringToChunk(escapeTextForBrowser(children$jscomp$3))
	        );
	        var JSCompiler_inline_result$jscomp$0 = null;
	      } else JSCompiler_inline_result$jscomp$0 = children$jscomp$3;
	      return JSCompiler_inline_result$jscomp$0;
	    case "form":
	      target$jscomp$0.push(startChunkForTag("form"));
	      var children$jscomp$4 = null,
	        innerHTML$jscomp$3 = null,
	        formAction$jscomp$1 = null,
	        formEncType$jscomp$1 = null,
	        formMethod$jscomp$1 = null,
	        formTarget$jscomp$1 = null,
	        propKey$jscomp$5;
	      for (propKey$jscomp$5 in props)
	        if (hasOwnProperty.call(props, propKey$jscomp$5)) {
	          var propValue$jscomp$5 = props[propKey$jscomp$5];
	          if (null != propValue$jscomp$5)
	            switch (propKey$jscomp$5) {
	              case "children":
	                children$jscomp$4 = propValue$jscomp$5;
	                break;
	              case "dangerouslySetInnerHTML":
	                innerHTML$jscomp$3 = propValue$jscomp$5;
	                break;
	              case "action":
	                formAction$jscomp$1 = propValue$jscomp$5;
	                break;
	              case "encType":
	                formEncType$jscomp$1 = propValue$jscomp$5;
	                break;
	              case "method":
	                formMethod$jscomp$1 = propValue$jscomp$5;
	                break;
	              case "target":
	                formTarget$jscomp$1 = propValue$jscomp$5;
	                break;
	              default:
	                pushAttribute(
	                  target$jscomp$0,
	                  propKey$jscomp$5,
	                  propValue$jscomp$5
	                );
	            }
	        }
	      var formData$jscomp$1 = null,
	        formActionName = null;
	      if ("function" === typeof formAction$jscomp$1) {
	        var customFields = getCustomFormFields(
	          resumableState,
	          formAction$jscomp$1
	        );
	        null !== customFields
	          ? ((formAction$jscomp$1 = customFields.action || ""),
	            (formEncType$jscomp$1 = customFields.encType),
	            (formMethod$jscomp$1 = customFields.method),
	            (formTarget$jscomp$1 = customFields.target),
	            (formData$jscomp$1 = customFields.data),
	            (formActionName = customFields.name))
	          : (target$jscomp$0.push(
	              attributeSeparator,
	              stringToChunk("action"),
	              attributeAssign,
	              actionJavaScriptURL,
	              attributeEnd
	            ),
	            (formTarget$jscomp$1 =
	              formMethod$jscomp$1 =
	              formEncType$jscomp$1 =
	              formAction$jscomp$1 =
	                null),
	            injectFormReplayingRuntime(resumableState, renderState));
	      }
	      null != formAction$jscomp$1 &&
	        pushAttribute(target$jscomp$0, "action", formAction$jscomp$1);
	      null != formEncType$jscomp$1 &&
	        pushAttribute(target$jscomp$0, "encType", formEncType$jscomp$1);
	      null != formMethod$jscomp$1 &&
	        pushAttribute(target$jscomp$0, "method", formMethod$jscomp$1);
	      null != formTarget$jscomp$1 &&
	        pushAttribute(target$jscomp$0, "target", formTarget$jscomp$1);
	      target$jscomp$0.push(endOfStartTag);
	      null !== formActionName &&
	        (target$jscomp$0.push(startHiddenInputChunk),
	        pushStringAttribute(target$jscomp$0, "name", formActionName),
	        target$jscomp$0.push(endOfStartTagSelfClosing),
	        null != formData$jscomp$1 &&
	          formData$jscomp$1.forEach(pushAdditionalFormField, target$jscomp$0));
	      pushInnerHTML(target$jscomp$0, innerHTML$jscomp$3, children$jscomp$4);
	      if ("string" === typeof children$jscomp$4) {
	        target$jscomp$0.push(
	          stringToChunk(escapeTextForBrowser(children$jscomp$4))
	        );
	        var JSCompiler_inline_result$jscomp$1 = null;
	      } else JSCompiler_inline_result$jscomp$1 = children$jscomp$4;
	      return JSCompiler_inline_result$jscomp$1;
	    case "menuitem":
	      target$jscomp$0.push(startChunkForTag("menuitem"));
	      for (var propKey$jscomp$6 in props)
	        if (hasOwnProperty.call(props, propKey$jscomp$6)) {
	          var propValue$jscomp$6 = props[propKey$jscomp$6];
	          if (null != propValue$jscomp$6)
	            switch (propKey$jscomp$6) {
	              case "children":
	              case "dangerouslySetInnerHTML":
	                throw Error(formatProdErrorMessage(400));
	              default:
	                pushAttribute(
	                  target$jscomp$0,
	                  propKey$jscomp$6,
	                  propValue$jscomp$6
	                );
	            }
	        }
	      target$jscomp$0.push(endOfStartTag);
	      return null;
	    case "object":
	      target$jscomp$0.push(startChunkForTag("object"));
	      var children$jscomp$5 = null,
	        innerHTML$jscomp$4 = null,
	        propKey$jscomp$7;
	      for (propKey$jscomp$7 in props)
	        if (hasOwnProperty.call(props, propKey$jscomp$7)) {
	          var propValue$jscomp$7 = props[propKey$jscomp$7];
	          if (null != propValue$jscomp$7)
	            switch (propKey$jscomp$7) {
	              case "children":
	                children$jscomp$5 = propValue$jscomp$7;
	                break;
	              case "dangerouslySetInnerHTML":
	                innerHTML$jscomp$4 = propValue$jscomp$7;
	                break;
	              case "data":
	                var sanitizedValue = sanitizeURL("" + propValue$jscomp$7);
	                if ("" === sanitizedValue) break;
	                target$jscomp$0.push(
	                  attributeSeparator,
	                  stringToChunk("data"),
	                  attributeAssign,
	                  stringToChunk(escapeTextForBrowser(sanitizedValue)),
	                  attributeEnd
	                );
	                break;
	              default:
	                pushAttribute(
	                  target$jscomp$0,
	                  propKey$jscomp$7,
	                  propValue$jscomp$7
	                );
	            }
	        }
	      target$jscomp$0.push(endOfStartTag);
	      pushInnerHTML(target$jscomp$0, innerHTML$jscomp$4, children$jscomp$5);
	      if ("string" === typeof children$jscomp$5) {
	        target$jscomp$0.push(
	          stringToChunk(escapeTextForBrowser(children$jscomp$5))
	        );
	        var JSCompiler_inline_result$jscomp$2 = null;
	      } else JSCompiler_inline_result$jscomp$2 = children$jscomp$5;
	      return JSCompiler_inline_result$jscomp$2;
	    case "title":
	      var noscriptTagInScope = formatContext.tagScope & 1,
	        isFallback = formatContext.tagScope & 4;
	      if (
	        4 === formatContext.insertionMode ||
	        noscriptTagInScope ||
	        null != props.itemProp
	      )
	        var JSCompiler_inline_result$jscomp$3 = pushTitleImpl(
	          target$jscomp$0,
	          props
	        );
	      else
	        isFallback
	          ? (JSCompiler_inline_result$jscomp$3 = null)
	          : (pushTitleImpl(renderState.hoistableChunks, props),
	            (JSCompiler_inline_result$jscomp$3 = void 0));
	      return JSCompiler_inline_result$jscomp$3;
	    case "link":
	      var noscriptTagInScope$jscomp$0 = formatContext.tagScope & 1,
	        isFallback$jscomp$0 = formatContext.tagScope & 4,
	        rel = props.rel,
	        href = props.href,
	        precedence = props.precedence;
	      if (
	        4 === formatContext.insertionMode ||
	        noscriptTagInScope$jscomp$0 ||
	        null != props.itemProp ||
	        "string" !== typeof rel ||
	        "string" !== typeof href ||
	        "" === href
	      ) {
	        pushLinkImpl(target$jscomp$0, props);
	        var JSCompiler_inline_result$jscomp$4 = null;
	      } else if ("stylesheet" === props.rel)
	        if (
	          "string" !== typeof precedence ||
	          null != props.disabled ||
	          props.onLoad ||
	          props.onError
	        )
	          JSCompiler_inline_result$jscomp$4 = pushLinkImpl(
	            target$jscomp$0,
	            props
	          );
	        else {
	          var styleQueue = renderState.styles.get(precedence),
	            resourceState = resumableState.styleResources.hasOwnProperty(href)
	              ? resumableState.styleResources[href]
	              : void 0;
	          if (null !== resourceState) {
	            resumableState.styleResources[href] = null;
	            styleQueue ||
	              ((styleQueue = {
	                precedence: stringToChunk(escapeTextForBrowser(precedence)),
	                rules: [],
	                hrefs: [],
	                sheets: new Map()
	              }),
	              renderState.styles.set(precedence, styleQueue));
	            var resource = {
	              state: 0,
	              props: assign({}, props, {
	                "data-precedence": props.precedence,
	                precedence: null
	              })
	            };
	            if (resourceState) {
	              2 === resourceState.length &&
	                adoptPreloadCredentials(resource.props, resourceState);
	              var preloadResource = renderState.preloads.stylesheets.get(href);
	              preloadResource && 0 < preloadResource.length
	                ? (preloadResource.length = 0)
	                : (resource.state = 1);
	            }
	            styleQueue.sheets.set(href, resource);
	            hoistableState && hoistableState.stylesheets.add(resource);
	          } else if (styleQueue) {
	            var resource$9 = styleQueue.sheets.get(href);
	            resource$9 &&
	              hoistableState &&
	              hoistableState.stylesheets.add(resource$9);
	          }
	          textEmbedded && target$jscomp$0.push(textSeparator);
	          JSCompiler_inline_result$jscomp$4 = null;
	        }
	      else
	        props.onLoad || props.onError
	          ? (JSCompiler_inline_result$jscomp$4 = pushLinkImpl(
	              target$jscomp$0,
	              props
	            ))
	          : (textEmbedded && target$jscomp$0.push(textSeparator),
	            (JSCompiler_inline_result$jscomp$4 = isFallback$jscomp$0
	              ? null
	              : pushLinkImpl(renderState.hoistableChunks, props)));
	      return JSCompiler_inline_result$jscomp$4;
	    case "script":
	      var noscriptTagInScope$jscomp$1 = formatContext.tagScope & 1,
	        asyncProp = props.async;
	      if (
	        "string" !== typeof props.src ||
	        !props.src ||
	        !asyncProp ||
	        "function" === typeof asyncProp ||
	        "symbol" === typeof asyncProp ||
	        props.onLoad ||
	        props.onError ||
	        4 === formatContext.insertionMode ||
	        noscriptTagInScope$jscomp$1 ||
	        null != props.itemProp
	      )
	        var JSCompiler_inline_result$jscomp$5 = pushScriptImpl(
	          target$jscomp$0,
	          props
	        );
	      else {
	        var key = props.src;
	        if ("module" === props.type) {
	          var resources = resumableState.moduleScriptResources;
	          var preloads = renderState.preloads.moduleScripts;
	        } else
	          (resources = resumableState.scriptResources),
	            (preloads = renderState.preloads.scripts);
	        var resourceState$jscomp$0 = resources.hasOwnProperty(key)
	          ? resources[key]
	          : void 0;
	        if (null !== resourceState$jscomp$0) {
	          resources[key] = null;
	          var scriptProps = props;
	          if (resourceState$jscomp$0) {
	            2 === resourceState$jscomp$0.length &&
	              ((scriptProps = assign({}, props)),
	              adoptPreloadCredentials(scriptProps, resourceState$jscomp$0));
	            var preloadResource$jscomp$0 = preloads.get(key);
	            preloadResource$jscomp$0 && (preloadResource$jscomp$0.length = 0);
	          }
	          var resource$jscomp$0 = [];
	          renderState.scripts.add(resource$jscomp$0);
	          pushScriptImpl(resource$jscomp$0, scriptProps);
	        }
	        textEmbedded && target$jscomp$0.push(textSeparator);
	        JSCompiler_inline_result$jscomp$5 = null;
	      }
	      return JSCompiler_inline_result$jscomp$5;
	    case "style":
	      var noscriptTagInScope$jscomp$2 = formatContext.tagScope & 1,
	        precedence$jscomp$0 = props.precedence,
	        href$jscomp$0 = props.href,
	        nonce = props.nonce;
	      if (
	        4 === formatContext.insertionMode ||
	        noscriptTagInScope$jscomp$2 ||
	        null != props.itemProp ||
	        "string" !== typeof precedence$jscomp$0 ||
	        "string" !== typeof href$jscomp$0 ||
	        "" === href$jscomp$0
	      ) {
	        target$jscomp$0.push(startChunkForTag("style"));
	        var children$jscomp$6 = null,
	          innerHTML$jscomp$5 = null,
	          propKey$jscomp$8;
	        for (propKey$jscomp$8 in props)
	          if (hasOwnProperty.call(props, propKey$jscomp$8)) {
	            var propValue$jscomp$8 = props[propKey$jscomp$8];
	            if (null != propValue$jscomp$8)
	              switch (propKey$jscomp$8) {
	                case "children":
	                  children$jscomp$6 = propValue$jscomp$8;
	                  break;
	                case "dangerouslySetInnerHTML":
	                  innerHTML$jscomp$5 = propValue$jscomp$8;
	                  break;
	                default:
	                  pushAttribute(
	                    target$jscomp$0,
	                    propKey$jscomp$8,
	                    propValue$jscomp$8
	                  );
	              }
	          }
	        target$jscomp$0.push(endOfStartTag);
	        var child = Array.isArray(children$jscomp$6)
	          ? 2 > children$jscomp$6.length
	            ? children$jscomp$6[0]
	            : null
	          : children$jscomp$6;
	        "function" !== typeof child &&
	          "symbol" !== typeof child &&
	          null !== child &&
	          void 0 !== child &&
	          target$jscomp$0.push(
	            stringToChunk(("" + child).replace(styleRegex, styleReplacer))
	          );
	        pushInnerHTML(target$jscomp$0, innerHTML$jscomp$5, children$jscomp$6);
	        target$jscomp$0.push(endChunkForTag("style"));
	        var JSCompiler_inline_result$jscomp$6 = null;
	      } else {
	        var styleQueue$jscomp$0 = renderState.styles.get(precedence$jscomp$0);
	        if (
	          null !==
	          (resumableState.styleResources.hasOwnProperty(href$jscomp$0)
	            ? resumableState.styleResources[href$jscomp$0]
	            : void 0)
	        ) {
	          resumableState.styleResources[href$jscomp$0] = null;
	          styleQueue$jscomp$0 ||
	            ((styleQueue$jscomp$0 = {
	              precedence: stringToChunk(
	                escapeTextForBrowser(precedence$jscomp$0)
	              ),
	              rules: [],
	              hrefs: [],
	              sheets: new Map()
	            }),
	            renderState.styles.set(precedence$jscomp$0, styleQueue$jscomp$0));
	          var nonceStyle = renderState.nonce.style;
	          if (!nonceStyle || nonceStyle === nonce) {
	            styleQueue$jscomp$0.hrefs.push(
	              stringToChunk(escapeTextForBrowser(href$jscomp$0))
	            );
	            var target = styleQueue$jscomp$0.rules,
	              children$jscomp$7 = null,
	              innerHTML$jscomp$6 = null,
	              propKey$jscomp$9;
	            for (propKey$jscomp$9 in props)
	              if (hasOwnProperty.call(props, propKey$jscomp$9)) {
	                var propValue$jscomp$9 = props[propKey$jscomp$9];
	                if (null != propValue$jscomp$9)
	                  switch (propKey$jscomp$9) {
	                    case "children":
	                      children$jscomp$7 = propValue$jscomp$9;
	                      break;
	                    case "dangerouslySetInnerHTML":
	                      innerHTML$jscomp$6 = propValue$jscomp$9;
	                  }
	              }
	            var child$jscomp$0 = Array.isArray(children$jscomp$7)
	              ? 2 > children$jscomp$7.length
	                ? children$jscomp$7[0]
	                : null
	              : children$jscomp$7;
	            "function" !== typeof child$jscomp$0 &&
	              "symbol" !== typeof child$jscomp$0 &&
	              null !== child$jscomp$0 &&
	              void 0 !== child$jscomp$0 &&
	              target.push(
	                stringToChunk(
	                  ("" + child$jscomp$0).replace(styleRegex, styleReplacer)
	                )
	              );
	            pushInnerHTML(target, innerHTML$jscomp$6, children$jscomp$7);
	          }
	        }
	        styleQueue$jscomp$0 &&
	          hoistableState &&
	          hoistableState.styles.add(styleQueue$jscomp$0);
	        textEmbedded && target$jscomp$0.push(textSeparator);
	        JSCompiler_inline_result$jscomp$6 = void 0;
	      }
	      return JSCompiler_inline_result$jscomp$6;
	    case "meta":
	      var noscriptTagInScope$jscomp$3 = formatContext.tagScope & 1,
	        isFallback$jscomp$1 = formatContext.tagScope & 4;
	      if (
	        4 === formatContext.insertionMode ||
	        noscriptTagInScope$jscomp$3 ||
	        null != props.itemProp
	      )
	        var JSCompiler_inline_result$jscomp$7 = pushSelfClosing(
	          target$jscomp$0,
	          props,
	          "meta"
	        );
	      else
	        textEmbedded && target$jscomp$0.push(textSeparator),
	          (JSCompiler_inline_result$jscomp$7 = isFallback$jscomp$1
	            ? null
	            : "string" === typeof props.charSet
	              ? pushSelfClosing(renderState.charsetChunks, props, "meta")
	              : "viewport" === props.name
	                ? pushSelfClosing(renderState.viewportChunks, props, "meta")
	                : pushSelfClosing(renderState.hoistableChunks, props, "meta"));
	      return JSCompiler_inline_result$jscomp$7;
	    case "listing":
	    case "pre":
	      target$jscomp$0.push(startChunkForTag(type));
	      var children$jscomp$8 = null,
	        innerHTML$jscomp$7 = null,
	        propKey$jscomp$10;
	      for (propKey$jscomp$10 in props)
	        if (hasOwnProperty.call(props, propKey$jscomp$10)) {
	          var propValue$jscomp$10 = props[propKey$jscomp$10];
	          if (null != propValue$jscomp$10)
	            switch (propKey$jscomp$10) {
	              case "children":
	                children$jscomp$8 = propValue$jscomp$10;
	                break;
	              case "dangerouslySetInnerHTML":
	                innerHTML$jscomp$7 = propValue$jscomp$10;
	                break;
	              default:
	                pushAttribute(
	                  target$jscomp$0,
	                  propKey$jscomp$10,
	                  propValue$jscomp$10
	                );
	            }
	        }
	      target$jscomp$0.push(endOfStartTag);
	      if (null != innerHTML$jscomp$7) {
	        if (null != children$jscomp$8) throw Error(formatProdErrorMessage(60));
	        if (
	          "object" !== typeof innerHTML$jscomp$7 ||
	          !("__html" in innerHTML$jscomp$7)
	        )
	          throw Error(formatProdErrorMessage(61));
	        var html = innerHTML$jscomp$7.__html;
	        null !== html &&
	          void 0 !== html &&
	          ("string" === typeof html && 0 < html.length && "\n" === html[0]
	            ? target$jscomp$0.push(leadingNewline, stringToChunk(html))
	            : target$jscomp$0.push(stringToChunk("" + html)));
	      }
	      "string" === typeof children$jscomp$8 &&
	        "\n" === children$jscomp$8[0] &&
	        target$jscomp$0.push(leadingNewline);
	      return children$jscomp$8;
	    case "img":
	      var pictureOrNoScriptTagInScope = formatContext.tagScope & 3,
	        src = props.src,
	        srcSet = props.srcSet;
	      if (
	        !(
	          "lazy" === props.loading ||
	          (!src && !srcSet) ||
	          ("string" !== typeof src && null != src) ||
	          ("string" !== typeof srcSet && null != srcSet) ||
	          "low" === props.fetchPriority ||
	          pictureOrNoScriptTagInScope
	        ) &&
	        ("string" !== typeof src ||
	          ":" !== src[4] ||
	          ("d" !== src[0] && "D" !== src[0]) ||
	          ("a" !== src[1] && "A" !== src[1]) ||
	          ("t" !== src[2] && "T" !== src[2]) ||
	          ("a" !== src[3] && "A" !== src[3])) &&
	        ("string" !== typeof srcSet ||
	          ":" !== srcSet[4] ||
	          ("d" !== srcSet[0] && "D" !== srcSet[0]) ||
	          ("a" !== srcSet[1] && "A" !== srcSet[1]) ||
	          ("t" !== srcSet[2] && "T" !== srcSet[2]) ||
	          ("a" !== srcSet[3] && "A" !== srcSet[3]))
	      ) {
	        null !== hoistableState &&
	          formatContext.tagScope & 64 &&
	          (hoistableState.suspenseyImages = true);
	        var sizes = "string" === typeof props.sizes ? props.sizes : void 0,
	          key$jscomp$0 = srcSet ? srcSet + "\n" + (sizes || "") : src,
	          promotablePreloads = renderState.preloads.images,
	          resource$jscomp$1 = promotablePreloads.get(key$jscomp$0);
	        if (resource$jscomp$1) {
	          if (
	            "high" === props.fetchPriority ||
	            10 > renderState.highImagePreloads.size
	          )
	            promotablePreloads.delete(key$jscomp$0),
	              renderState.highImagePreloads.add(resource$jscomp$1);
	        } else if (
	          !resumableState.imageResources.hasOwnProperty(key$jscomp$0)
	        ) {
	          resumableState.imageResources[key$jscomp$0] = PRELOAD_NO_CREDS;
	          var input = props.crossOrigin;
	          var JSCompiler_inline_result$jscomp$8 =
	            "string" === typeof input
	              ? "use-credentials" === input
	                ? input
	                : ""
	              : void 0;
	          var headers = renderState.headers,
	            header;
	          headers &&
	          0 < headers.remainingCapacity &&
	          "string" !== typeof props.srcSet &&
	          ("high" === props.fetchPriority ||
	            500 > headers.highImagePreloads.length) &&
	          ((header = getPreloadAsHeader(src, "image", {
	            imageSrcSet: props.srcSet,
	            imageSizes: props.sizes,
	            crossOrigin: JSCompiler_inline_result$jscomp$8,
	            integrity: props.integrity,
	            nonce: props.nonce,
	            type: props.type,
	            fetchPriority: props.fetchPriority,
	            referrerPolicy: props.refererPolicy
	          })),
	          0 <= (headers.remainingCapacity -= header.length + 2))
	            ? ((renderState.resets.image[key$jscomp$0] = PRELOAD_NO_CREDS),
	              headers.highImagePreloads && (headers.highImagePreloads += ", "),
	              (headers.highImagePreloads += header))
	            : ((resource$jscomp$1 = []),
	              pushLinkImpl(resource$jscomp$1, {
	                rel: "preload",
	                as: "image",
	                href: srcSet ? void 0 : src,
	                imageSrcSet: srcSet,
	                imageSizes: sizes,
	                crossOrigin: JSCompiler_inline_result$jscomp$8,
	                integrity: props.integrity,
	                type: props.type,
	                fetchPriority: props.fetchPriority,
	                referrerPolicy: props.referrerPolicy
	              }),
	              "high" === props.fetchPriority ||
	              10 > renderState.highImagePreloads.size
	                ? renderState.highImagePreloads.add(resource$jscomp$1)
	                : (renderState.bulkPreloads.add(resource$jscomp$1),
	                  promotablePreloads.set(key$jscomp$0, resource$jscomp$1)));
	        }
	      }
	      return pushSelfClosing(target$jscomp$0, props, "img");
	    case "base":
	    case "area":
	    case "br":
	    case "col":
	    case "embed":
	    case "hr":
	    case "keygen":
	    case "param":
	    case "source":
	    case "track":
	    case "wbr":
	      return pushSelfClosing(target$jscomp$0, props, type);
	    case "annotation-xml":
	    case "color-profile":
	    case "font-face":
	    case "font-face-src":
	    case "font-face-uri":
	    case "font-face-format":
	    case "font-face-name":
	    case "missing-glyph":
	      break;
	    case "head":
	      if (2 > formatContext.insertionMode) {
	        var preamble = preambleState || renderState.preamble;
	        if (preamble.headChunks)
	          throw Error(formatProdErrorMessage(545, "`<head>`"));
	        null !== preambleState &&
	          target$jscomp$0.push(headPreambleContributionChunk);
	        preamble.headChunks = [];
	        var JSCompiler_inline_result$jscomp$9 = pushStartSingletonElement(
	          preamble.headChunks,
	          props,
	          "head"
	        );
	      } else
	        JSCompiler_inline_result$jscomp$9 = pushStartGenericElement(
	          target$jscomp$0,
	          props,
	          "head"
	        );
	      return JSCompiler_inline_result$jscomp$9;
	    case "body":
	      if (2 > formatContext.insertionMode) {
	        var preamble$jscomp$0 = preambleState || renderState.preamble;
	        if (preamble$jscomp$0.bodyChunks)
	          throw Error(formatProdErrorMessage(545, "`<body>`"));
	        null !== preambleState &&
	          target$jscomp$0.push(bodyPreambleContributionChunk);
	        preamble$jscomp$0.bodyChunks = [];
	        var JSCompiler_inline_result$jscomp$10 = pushStartSingletonElement(
	          preamble$jscomp$0.bodyChunks,
	          props,
	          "body"
	        );
	      } else
	        JSCompiler_inline_result$jscomp$10 = pushStartGenericElement(
	          target$jscomp$0,
	          props,
	          "body"
	        );
	      return JSCompiler_inline_result$jscomp$10;
	    case "html":
	      if (0 === formatContext.insertionMode) {
	        var preamble$jscomp$1 = preambleState || renderState.preamble;
	        if (preamble$jscomp$1.htmlChunks)
	          throw Error(formatProdErrorMessage(545, "`<html>`"));
	        null !== preambleState &&
	          target$jscomp$0.push(htmlPreambleContributionChunk);
	        preamble$jscomp$1.htmlChunks = [doctypeChunk];
	        var JSCompiler_inline_result$jscomp$11 = pushStartSingletonElement(
	          preamble$jscomp$1.htmlChunks,
	          props,
	          "html"
	        );
	      } else
	        JSCompiler_inline_result$jscomp$11 = pushStartGenericElement(
	          target$jscomp$0,
	          props,
	          "html"
	        );
	      return JSCompiler_inline_result$jscomp$11;
	    default:
	      if (-1 !== type.indexOf("-")) {
	        target$jscomp$0.push(startChunkForTag(type));
	        var children$jscomp$9 = null,
	          innerHTML$jscomp$8 = null,
	          propKey$jscomp$11;
	        for (propKey$jscomp$11 in props)
	          if (hasOwnProperty.call(props, propKey$jscomp$11)) {
	            var propValue$jscomp$11 = props[propKey$jscomp$11];
	            if (null != propValue$jscomp$11) {
	              var attributeName = propKey$jscomp$11;
	              switch (propKey$jscomp$11) {
	                case "children":
	                  children$jscomp$9 = propValue$jscomp$11;
	                  break;
	                case "dangerouslySetInnerHTML":
	                  innerHTML$jscomp$8 = propValue$jscomp$11;
	                  break;
	                case "style":
	                  pushStyleAttribute(target$jscomp$0, propValue$jscomp$11);
	                  break;
	                case "suppressContentEditableWarning":
	                case "suppressHydrationWarning":
	                case "ref":
	                  break;
	                case "className":
	                  attributeName = "class";
	                default:
	                  if (
	                    isAttributeNameSafe(propKey$jscomp$11) &&
	                    "function" !== typeof propValue$jscomp$11 &&
	                    "symbol" !== typeof propValue$jscomp$11 &&
	                    false !== propValue$jscomp$11
	                  ) {
	                    if (true === propValue$jscomp$11) propValue$jscomp$11 = "";
	                    else if ("object" === typeof propValue$jscomp$11) continue;
	                    target$jscomp$0.push(
	                      attributeSeparator,
	                      stringToChunk(attributeName),
	                      attributeAssign,
	                      stringToChunk(escapeTextForBrowser(propValue$jscomp$11)),
	                      attributeEnd
	                    );
	                  }
	              }
	            }
	          }
	        target$jscomp$0.push(endOfStartTag);
	        pushInnerHTML(target$jscomp$0, innerHTML$jscomp$8, children$jscomp$9);
	        return children$jscomp$9;
	      }
	  }
	  return pushStartGenericElement(target$jscomp$0, props, type);
	}
	var endTagCache = new Map();
	function endChunkForTag(tag) {
	  var chunk = endTagCache.get(tag);
	  void 0 === chunk &&
	    ((chunk = stringToPrecomputedChunk("</" + tag + ">")),
	    endTagCache.set(tag, chunk));
	  return chunk;
	}
	function hoistPreambleState(renderState, preambleState) {
	  renderState = renderState.preamble;
	  null === renderState.htmlChunks &&
	    preambleState.htmlChunks &&
	    (renderState.htmlChunks = preambleState.htmlChunks);
	  null === renderState.headChunks &&
	    preambleState.headChunks &&
	    (renderState.headChunks = preambleState.headChunks);
	  null === renderState.bodyChunks &&
	    preambleState.bodyChunks &&
	    (renderState.bodyChunks = preambleState.bodyChunks);
	}
	function writeBootstrap(destination, renderState) {
	  renderState = renderState.bootstrapChunks;
	  for (var i = 0; i < renderState.length - 1; i++)
	    writeChunk(destination, renderState[i]);
	  return i < renderState.length
	    ? ((i = renderState[i]),
	      (renderState.length = 0),
	      writeChunkAndReturn(destination, i))
	    : true;
	}
	var shellTimeRuntimeScript = stringToPrecomputedChunk(
	    "requestAnimationFrame(function(){$RT=performance.now()});"
	  ),
	  placeholder1 = stringToPrecomputedChunk('<template id="'),
	  placeholder2 = stringToPrecomputedChunk('"></template>'),
	  startActivityBoundary = stringToPrecomputedChunk("\x3c!--&--\x3e"),
	  endActivityBoundary = stringToPrecomputedChunk("\x3c!--/&--\x3e"),
	  startCompletedSuspenseBoundary = stringToPrecomputedChunk("\x3c!--$--\x3e"),
	  startPendingSuspenseBoundary1 = stringToPrecomputedChunk(
	    '\x3c!--$?--\x3e<template id="'
	  ),
	  startPendingSuspenseBoundary2 = stringToPrecomputedChunk('"></template>'),
	  startClientRenderedSuspenseBoundary =
	    stringToPrecomputedChunk("\x3c!--$!--\x3e"),
	  endSuspenseBoundary = stringToPrecomputedChunk("\x3c!--/$--\x3e"),
	  clientRenderedSuspenseBoundaryError1 = stringToPrecomputedChunk("<template"),
	  clientRenderedSuspenseBoundaryErrorAttrInterstitial =
	    stringToPrecomputedChunk('"'),
	  clientRenderedSuspenseBoundaryError1A =
	    stringToPrecomputedChunk(' data-dgst="');
	stringToPrecomputedChunk(' data-msg="');
	stringToPrecomputedChunk(' data-stck="');
	stringToPrecomputedChunk(' data-cstck="');
	var clientRenderedSuspenseBoundaryError2 =
	  stringToPrecomputedChunk("></template>");
	function writeStartPendingSuspenseBoundary(destination, renderState, id) {
	  writeChunk(destination, startPendingSuspenseBoundary1);
	  if (null === id) throw Error(formatProdErrorMessage(395));
	  writeChunk(destination, renderState.boundaryPrefix);
	  writeChunk(destination, stringToChunk(id.toString(16)));
	  return writeChunkAndReturn(destination, startPendingSuspenseBoundary2);
	}
	var startSegmentHTML = stringToPrecomputedChunk('<div hidden id="'),
	  startSegmentHTML2 = stringToPrecomputedChunk('">'),
	  endSegmentHTML = stringToPrecomputedChunk("</div>"),
	  startSegmentSVG = stringToPrecomputedChunk(
	    '<svg aria-hidden="true" style="display:none" id="'
	  ),
	  startSegmentSVG2 = stringToPrecomputedChunk('">'),
	  endSegmentSVG = stringToPrecomputedChunk("</svg>"),
	  startSegmentMathML = stringToPrecomputedChunk(
	    '<math aria-hidden="true" style="display:none" id="'
	  ),
	  startSegmentMathML2 = stringToPrecomputedChunk('">'),
	  endSegmentMathML = stringToPrecomputedChunk("</math>"),
	  startSegmentTable = stringToPrecomputedChunk('<table hidden id="'),
	  startSegmentTable2 = stringToPrecomputedChunk('">'),
	  endSegmentTable = stringToPrecomputedChunk("</table>"),
	  startSegmentTableBody = stringToPrecomputedChunk('<table hidden><tbody id="'),
	  startSegmentTableBody2 = stringToPrecomputedChunk('">'),
	  endSegmentTableBody = stringToPrecomputedChunk("</tbody></table>"),
	  startSegmentTableRow = stringToPrecomputedChunk('<table hidden><tr id="'),
	  startSegmentTableRow2 = stringToPrecomputedChunk('">'),
	  endSegmentTableRow = stringToPrecomputedChunk("</tr></table>"),
	  startSegmentColGroup = stringToPrecomputedChunk(
	    '<table hidden><colgroup id="'
	  ),
	  startSegmentColGroup2 = stringToPrecomputedChunk('">'),
	  endSegmentColGroup = stringToPrecomputedChunk("</colgroup></table>");
	function writeStartSegment(destination, renderState, formatContext, id) {
	  switch (formatContext.insertionMode) {
	    case 0:
	    case 1:
	    case 3:
	    case 2:
	      return (
	        writeChunk(destination, startSegmentHTML),
	        writeChunk(destination, renderState.segmentPrefix),
	        writeChunk(destination, stringToChunk(id.toString(16))),
	        writeChunkAndReturn(destination, startSegmentHTML2)
	      );
	    case 4:
	      return (
	        writeChunk(destination, startSegmentSVG),
	        writeChunk(destination, renderState.segmentPrefix),
	        writeChunk(destination, stringToChunk(id.toString(16))),
	        writeChunkAndReturn(destination, startSegmentSVG2)
	      );
	    case 5:
	      return (
	        writeChunk(destination, startSegmentMathML),
	        writeChunk(destination, renderState.segmentPrefix),
	        writeChunk(destination, stringToChunk(id.toString(16))),
	        writeChunkAndReturn(destination, startSegmentMathML2)
	      );
	    case 6:
	      return (
	        writeChunk(destination, startSegmentTable),
	        writeChunk(destination, renderState.segmentPrefix),
	        writeChunk(destination, stringToChunk(id.toString(16))),
	        writeChunkAndReturn(destination, startSegmentTable2)
	      );
	    case 7:
	      return (
	        writeChunk(destination, startSegmentTableBody),
	        writeChunk(destination, renderState.segmentPrefix),
	        writeChunk(destination, stringToChunk(id.toString(16))),
	        writeChunkAndReturn(destination, startSegmentTableBody2)
	      );
	    case 8:
	      return (
	        writeChunk(destination, startSegmentTableRow),
	        writeChunk(destination, renderState.segmentPrefix),
	        writeChunk(destination, stringToChunk(id.toString(16))),
	        writeChunkAndReturn(destination, startSegmentTableRow2)
	      );
	    case 9:
	      return (
	        writeChunk(destination, startSegmentColGroup),
	        writeChunk(destination, renderState.segmentPrefix),
	        writeChunk(destination, stringToChunk(id.toString(16))),
	        writeChunkAndReturn(destination, startSegmentColGroup2)
	      );
	    default:
	      throw Error(formatProdErrorMessage(397));
	  }
	}
	function writeEndSegment(destination, formatContext) {
	  switch (formatContext.insertionMode) {
	    case 0:
	    case 1:
	    case 3:
	    case 2:
	      return writeChunkAndReturn(destination, endSegmentHTML);
	    case 4:
	      return writeChunkAndReturn(destination, endSegmentSVG);
	    case 5:
	      return writeChunkAndReturn(destination, endSegmentMathML);
	    case 6:
	      return writeChunkAndReturn(destination, endSegmentTable);
	    case 7:
	      return writeChunkAndReturn(destination, endSegmentTableBody);
	    case 8:
	      return writeChunkAndReturn(destination, endSegmentTableRow);
	    case 9:
	      return writeChunkAndReturn(destination, endSegmentColGroup);
	    default:
	      throw Error(formatProdErrorMessage(397));
	  }
	}
	var completeSegmentScript1Full = stringToPrecomputedChunk(
	    '$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'
	  ),
	  completeSegmentScript1Partial = stringToPrecomputedChunk('$RS("'),
	  completeSegmentScript2 = stringToPrecomputedChunk('","'),
	  completeSegmentScriptEnd = stringToPrecomputedChunk('")\x3c/script>');
	stringToPrecomputedChunk('<template data-rsi="" data-sid="');
	stringToPrecomputedChunk('" data-pid="');
	var completeBoundaryScriptFunctionOnly = stringToPrecomputedChunk(
	  '$RB=[];$RV=function(a){$RT=performance.now();for(var b=0;b<a.length;b+=2){var c=a[b],e=a[b+1];null!==e.parentNode&&e.parentNode.removeChild(e);var f=c.parentNode;if(f){var g=c.previousSibling,h=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d||"/&"===d)if(0===h)break;else h--;else"$"!==d&&"$?"!==d&&"$~"!==d&&"$!"!==d&&"&"!==d||h++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;e.firstChild;)f.insertBefore(e.firstChild,c);g.data="$";g._reactRetry&&requestAnimationFrame(g._reactRetry)}}a.length=0};\n$RC=function(a,b){if(b=document.getElementById(b))(a=document.getElementById(a))?(a.previousSibling.data="$~",$RB.push(a,b),2===$RB.length&&("number"!==typeof $RT?requestAnimationFrame($RV.bind(null,$RB)):(a=performance.now(),setTimeout($RV.bind(null,$RB),2300>a&&2E3<a?2300-a:$RT+300-a)))):b.parentNode.removeChild(b)};'
	);
	stringToChunk(
	  '$RV=function(A,g){function k(a,b){var e=a.getAttribute(b);e&&(b=a.style,l.push(a,b.viewTransitionName,b.viewTransitionClass),"auto"!==e&&(b.viewTransitionClass=e),(a=a.getAttribute("vt-name"))||(a="_T_"+K++ +"_"),b.viewTransitionName=a,B=!0)}var B=!1,K=0,l=[];try{var f=document.__reactViewTransition;if(f){f.finished.finally($RV.bind(null,g));return}var m=new Map;for(f=1;f<g.length;f+=2)for(var h=g[f].querySelectorAll("[vt-share]"),d=0;d<h.length;d++){var c=h[d];m.set(c.getAttribute("vt-name"),c)}var u=[];for(h=0;h<g.length;h+=2){var C=g[h],x=C.parentNode;if(x){var v=x.getBoundingClientRect();if(v.left||v.top||v.width||v.height){c=C;for(f=0;c;){if(8===c.nodeType){var r=c.data;if("/$"===r)if(0===f)break;else f--;else"$"!==r&&"$?"!==r&&"$~"!==r&&"$!"!==r||f++}else if(1===c.nodeType){d=c;var D=d.getAttribute("vt-name"),y=m.get(D);k(d,y?"vt-share":"vt-exit");y&&(k(y,"vt-share"),m.set(D,null));var E=d.querySelectorAll("[vt-share]");for(d=0;d<E.length;d++){var F=E[d],G=F.getAttribute("vt-name"),\nH=m.get(G);H&&(k(F,"vt-share"),k(H,"vt-share"),m.set(G,null))}}c=c.nextSibling}for(var I=g[h+1],t=I.firstElementChild;t;)null!==m.get(t.getAttribute("vt-name"))&&k(t,"vt-enter"),t=t.nextElementSibling;c=x;do for(var n=c.firstElementChild;n;){var J=n.getAttribute("vt-update");J&&"none"!==J&&!l.includes(n)&&k(n,"vt-update");n=n.nextElementSibling}while((c=c.parentNode)&&1===c.nodeType&&"none"!==c.getAttribute("vt-update"));u.push.apply(u,I.querySelectorAll(\'img[src]:not([loading="lazy"])\'))}}}if(B){var z=\ndocument.__reactViewTransition=document.startViewTransition({update:function(){A(g);for(var a=[document.documentElement.clientHeight,document.fonts.ready],b={},e=0;e<u.length;b={g:b.g},e++)if(b.g=u[e],!b.g.complete){var p=b.g.getBoundingClientRect();0<p.bottom&&0<p.right&&p.top<window.innerHeight&&p.left<window.innerWidth&&(p=new Promise(function(w){return function(q){w.g.addEventListener("load",q);w.g.addEventListener("error",q)}}(b)),a.push(p))}return Promise.race([Promise.all(a),new Promise(function(w){var q=\nperformance.now();setTimeout(w,2300>q&&2E3<q?2300-q:500)})])},types:[]});z.ready.finally(function(){for(var a=l.length-3;0<=a;a-=3){var b=l[a],e=b.style;e.viewTransitionName=l[a+1];e.viewTransitionClass=l[a+1];""===b.getAttribute("style")&&b.removeAttribute("style")}});z.finished.finally(function(){document.__reactViewTransition===z&&(document.__reactViewTransition=null)});$RB=[];return}}catch(a){}A(g)}.bind(null,$RV);'
	);
	var completeBoundaryScript1Partial = stringToPrecomputedChunk('$RC("'),
	  completeBoundaryWithStylesScript1FullPartial = stringToPrecomputedChunk(
	    '$RM=new Map;$RR=function(n,w,p){function u(q){this._p=null;q()}for(var r=new Map,t=document,h,b,e=t.querySelectorAll("link[data-precedence],style[data-precedence]"),v=[],k=0;b=e[k++];)"not all"===b.getAttribute("media")?v.push(b):("LINK"===b.tagName&&$RM.set(b.getAttribute("href"),b),r.set(b.dataset.precedence,h=b));e=0;b=[];var l,a;for(k=!0;;){if(k){var f=p[e++];if(!f){k=!1;e=0;continue}var c=!1,m=0;var d=f[m++];if(a=$RM.get(d)){var g=a._p;c=!0}else{a=t.createElement("link");a.href=d;a.rel=\n"stylesheet";for(a.dataset.precedence=l=f[m++];g=f[m++];)a.setAttribute(g,f[m++]);g=a._p=new Promise(function(q,x){a.onload=u.bind(a,q);a.onerror=u.bind(a,x)});$RM.set(d,a)}d=a.getAttribute("media");!g||d&&!matchMedia(d).matches||b.push(g);if(c)continue}else{a=v[e++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=r.get(l)||h;c===h&&(h=a);r.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=t.head,c.insertBefore(a,c.firstChild))}if(p=document.getElementById(n))p.previousSibling.data=\n"$~";Promise.all(b).then($RC.bind(null,n,w),$RX.bind(null,n,"CSS failed to load"))};$RR("'
	  ),
	  completeBoundaryWithStylesScript1Partial = stringToPrecomputedChunk('$RR("'),
	  completeBoundaryScript2 = stringToPrecomputedChunk('","'),
	  completeBoundaryScript3a = stringToPrecomputedChunk('",'),
	  completeBoundaryScript3b = stringToPrecomputedChunk('"'),
	  completeBoundaryScriptEnd = stringToPrecomputedChunk(")\x3c/script>");
	stringToPrecomputedChunk('<template data-rci="" data-bid="');
	stringToPrecomputedChunk('<template data-rri="" data-bid="');
	stringToPrecomputedChunk('" data-sid="');
	stringToPrecomputedChunk('" data-sty="');
	var clientRenderScriptFunctionOnly = stringToPrecomputedChunk(
	    '$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};'
	  ),
	  clientRenderScript1Full = stringToPrecomputedChunk(
	    '$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};;$RX("'
	  ),
	  clientRenderScript1Partial = stringToPrecomputedChunk('$RX("'),
	  clientRenderScript1A = stringToPrecomputedChunk('"'),
	  clientRenderErrorScriptArgInterstitial = stringToPrecomputedChunk(","),
	  clientRenderScriptEnd = stringToPrecomputedChunk(")\x3c/script>");
	stringToPrecomputedChunk('<template data-rxi="" data-bid="');
	stringToPrecomputedChunk('" data-dgst="');
	stringToPrecomputedChunk('" data-msg="');
	stringToPrecomputedChunk('" data-stck="');
	stringToPrecomputedChunk('" data-cstck="');
	var regexForJSStringsInInstructionScripts = /[<\u2028\u2029]/g;
	function escapeJSStringsForInstructionScripts(input) {
	  return JSON.stringify(input).replace(
	    regexForJSStringsInInstructionScripts,
	    function (match) {
	      switch (match) {
	        case "<":
	          return "\\u003c";
	        case "\u2028":
	          return "\\u2028";
	        case "\u2029":
	          return "\\u2029";
	        default:
	          throw Error(
	            "escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
	          );
	      }
	    }
	  );
	}
	var regexForJSStringsInScripts = /[&><\u2028\u2029]/g;
	function escapeJSObjectForInstructionScripts(input) {
	  return JSON.stringify(input).replace(
	    regexForJSStringsInScripts,
	    function (match) {
	      switch (match) {
	        case "&":
	          return "\\u0026";
	        case ">":
	          return "\\u003e";
	        case "<":
	          return "\\u003c";
	        case "\u2028":
	          return "\\u2028";
	        case "\u2029":
	          return "\\u2029";
	        default:
	          throw Error(
	            "escapeJSObjectForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
	          );
	      }
	    }
	  );
	}
	var lateStyleTagResourceOpen1 = stringToPrecomputedChunk(
	    ' media="not all" data-precedence="'
	  ),
	  lateStyleTagResourceOpen2 = stringToPrecomputedChunk('" data-href="'),
	  lateStyleTagResourceOpen3 = stringToPrecomputedChunk('">'),
	  lateStyleTagTemplateClose = stringToPrecomputedChunk("</style>"),
	  currentlyRenderingBoundaryHasStylesToHoist = false,
	  destinationHasCapacity = true;
	function flushStyleTagsLateForBoundary(styleQueue) {
	  var rules = styleQueue.rules,
	    hrefs = styleQueue.hrefs,
	    i = 0;
	  if (hrefs.length) {
	    writeChunk(this, currentlyFlushingRenderState.startInlineStyle);
	    writeChunk(this, lateStyleTagResourceOpen1);
	    writeChunk(this, styleQueue.precedence);
	    for (writeChunk(this, lateStyleTagResourceOpen2); i < hrefs.length - 1; i++)
	      writeChunk(this, hrefs[i]), writeChunk(this, spaceSeparator);
	    writeChunk(this, hrefs[i]);
	    writeChunk(this, lateStyleTagResourceOpen3);
	    for (i = 0; i < rules.length; i++) writeChunk(this, rules[i]);
	    destinationHasCapacity = writeChunkAndReturn(
	      this,
	      lateStyleTagTemplateClose
	    );
	    currentlyRenderingBoundaryHasStylesToHoist = true;
	    rules.length = 0;
	    hrefs.length = 0;
	  }
	}
	function hasStylesToHoist(stylesheet) {
	  return 2 !== stylesheet.state
	    ? (currentlyRenderingBoundaryHasStylesToHoist = true)
	    : false;
	}
	function writeHoistablesForBoundary(destination, hoistableState, renderState) {
	  currentlyRenderingBoundaryHasStylesToHoist = false;
	  destinationHasCapacity = true;
	  currentlyFlushingRenderState = renderState;
	  hoistableState.styles.forEach(flushStyleTagsLateForBoundary, destination);
	  currentlyFlushingRenderState = null;
	  hoistableState.stylesheets.forEach(hasStylesToHoist);
	  currentlyRenderingBoundaryHasStylesToHoist &&
	    (renderState.stylesToHoist = true);
	  return destinationHasCapacity;
	}
	function flushResource(resource) {
	  for (var i = 0; i < resource.length; i++) writeChunk(this, resource[i]);
	  resource.length = 0;
	}
	var stylesheetFlushingQueue = [];
	function flushStyleInPreamble(stylesheet) {
	  pushLinkImpl(stylesheetFlushingQueue, stylesheet.props);
	  for (var i = 0; i < stylesheetFlushingQueue.length; i++)
	    writeChunk(this, stylesheetFlushingQueue[i]);
	  stylesheetFlushingQueue.length = 0;
	  stylesheet.state = 2;
	}
	var styleTagResourceOpen1 = stringToPrecomputedChunk(' data-precedence="'),
	  styleTagResourceOpen2 = stringToPrecomputedChunk('" data-href="'),
	  spaceSeparator = stringToPrecomputedChunk(" "),
	  styleTagResourceOpen3 = stringToPrecomputedChunk('">'),
	  styleTagResourceClose = stringToPrecomputedChunk("</style>");
	function flushStylesInPreamble(styleQueue) {
	  var hasStylesheets = 0 < styleQueue.sheets.size;
	  styleQueue.sheets.forEach(flushStyleInPreamble, this);
	  styleQueue.sheets.clear();
	  var rules = styleQueue.rules,
	    hrefs = styleQueue.hrefs;
	  if (!hasStylesheets || hrefs.length) {
	    writeChunk(this, currentlyFlushingRenderState.startInlineStyle);
	    writeChunk(this, styleTagResourceOpen1);
	    writeChunk(this, styleQueue.precedence);
	    styleQueue = 0;
	    if (hrefs.length) {
	      for (
	        writeChunk(this, styleTagResourceOpen2);
	        styleQueue < hrefs.length - 1;
	        styleQueue++
	      )
	        writeChunk(this, hrefs[styleQueue]), writeChunk(this, spaceSeparator);
	      writeChunk(this, hrefs[styleQueue]);
	    }
	    writeChunk(this, styleTagResourceOpen3);
	    for (styleQueue = 0; styleQueue < rules.length; styleQueue++)
	      writeChunk(this, rules[styleQueue]);
	    writeChunk(this, styleTagResourceClose);
	    rules.length = 0;
	    hrefs.length = 0;
	  }
	}
	function preloadLateStyle(stylesheet) {
	  if (0 === stylesheet.state) {
	    stylesheet.state = 1;
	    var props = stylesheet.props;
	    pushLinkImpl(stylesheetFlushingQueue, {
	      rel: "preload",
	      as: "style",
	      href: stylesheet.props.href,
	      crossOrigin: props.crossOrigin,
	      fetchPriority: props.fetchPriority,
	      integrity: props.integrity,
	      media: props.media,
	      hrefLang: props.hrefLang,
	      referrerPolicy: props.referrerPolicy
	    });
	    for (
	      stylesheet = 0;
	      stylesheet < stylesheetFlushingQueue.length;
	      stylesheet++
	    )
	      writeChunk(this, stylesheetFlushingQueue[stylesheet]);
	    stylesheetFlushingQueue.length = 0;
	  }
	}
	function preloadLateStyles(styleQueue) {
	  styleQueue.sheets.forEach(preloadLateStyle, this);
	  styleQueue.sheets.clear();
	}
	stringToPrecomputedChunk('<link rel="expect" href="#');
	stringToPrecomputedChunk('" blocking="render"/>');
	var completedShellIdAttributeStart = stringToPrecomputedChunk(' id="');
	function pushCompletedShellIdAttribute(target, resumableState) {
	  0 === (resumableState.instructions & 32) &&
	    ((resumableState.instructions |= 32),
	    target.push(
	      completedShellIdAttributeStart,
	      stringToChunk(escapeTextForBrowser("_" + resumableState.idPrefix + "R_")),
	      attributeEnd
	    ));
	}
	var arrayFirstOpenBracket = stringToPrecomputedChunk("["),
	  arraySubsequentOpenBracket = stringToPrecomputedChunk(",["),
	  arrayInterstitial = stringToPrecomputedChunk(","),
	  arrayCloseBracket = stringToPrecomputedChunk("]");
	function writeStyleResourceDependenciesInJS(destination, hoistableState) {
	  writeChunk(destination, arrayFirstOpenBracket);
	  var nextArrayOpenBrackChunk = arrayFirstOpenBracket;
	  hoistableState.stylesheets.forEach(function (resource) {
	    if (2 !== resource.state)
	      if (3 === resource.state)
	        writeChunk(destination, nextArrayOpenBrackChunk),
	          writeChunk(
	            destination,
	            stringToChunk(
	              escapeJSObjectForInstructionScripts("" + resource.props.href)
	            )
	          ),
	          writeChunk(destination, arrayCloseBracket),
	          (nextArrayOpenBrackChunk = arraySubsequentOpenBracket);
	      else {
	        writeChunk(destination, nextArrayOpenBrackChunk);
	        var precedence = resource.props["data-precedence"],
	          props = resource.props,
	          coercedHref = sanitizeURL("" + resource.props.href);
	        writeChunk(
	          destination,
	          stringToChunk(escapeJSObjectForInstructionScripts(coercedHref))
	        );
	        precedence = "" + precedence;
	        writeChunk(destination, arrayInterstitial);
	        writeChunk(
	          destination,
	          stringToChunk(escapeJSObjectForInstructionScripts(precedence))
	        );
	        for (var propKey in props)
	          if (
	            hasOwnProperty.call(props, propKey) &&
	            ((precedence = props[propKey]), null != precedence)
	          )
	            switch (propKey) {
	              case "href":
	              case "rel":
	              case "precedence":
	              case "data-precedence":
	                break;
	              case "children":
	              case "dangerouslySetInnerHTML":
	                throw Error(formatProdErrorMessage(399, "link"));
	              default:
	                writeStyleResourceAttributeInJS(
	                  destination,
	                  propKey,
	                  precedence
	                );
	            }
	        writeChunk(destination, arrayCloseBracket);
	        nextArrayOpenBrackChunk = arraySubsequentOpenBracket;
	        resource.state = 3;
	      }
	  });
	  writeChunk(destination, arrayCloseBracket);
	}
	function writeStyleResourceAttributeInJS(destination, name, value) {
	  var attributeName = name.toLowerCase();
	  switch (typeof value) {
	    case "function":
	    case "symbol":
	      return;
	  }
	  switch (name) {
	    case "innerHTML":
	    case "dangerouslySetInnerHTML":
	    case "suppressContentEditableWarning":
	    case "suppressHydrationWarning":
	    case "style":
	    case "ref":
	      return;
	    case "className":
	      attributeName = "class";
	      name = "" + value;
	      break;
	    case "hidden":
	      if (false === value) return;
	      name = "";
	      break;
	    case "src":
	    case "href":
	      value = sanitizeURL(value);
	      name = "" + value;
	      break;
	    default:
	      if (
	        (2 < name.length &&
	          ("o" === name[0] || "O" === name[0]) &&
	          ("n" === name[1] || "N" === name[1])) ||
	        !isAttributeNameSafe(name)
	      )
	        return;
	      name = "" + value;
	  }
	  writeChunk(destination, arrayInterstitial);
	  writeChunk(
	    destination,
	    stringToChunk(escapeJSObjectForInstructionScripts(attributeName))
	  );
	  writeChunk(destination, arrayInterstitial);
	  writeChunk(
	    destination,
	    stringToChunk(escapeJSObjectForInstructionScripts(name))
	  );
	}
	function createHoistableState() {
	  return { styles: new Set(), stylesheets: new Set(), suspenseyImages: false };
	}
	function prefetchDNS(href) {
	  var request = currentRequest ? currentRequest : null;
	  if (request) {
	    var resumableState = request.resumableState,
	      renderState = request.renderState;
	    if ("string" === typeof href && href) {
	      if (!resumableState.dnsResources.hasOwnProperty(href)) {
	        resumableState.dnsResources[href] = null;
	        resumableState = renderState.headers;
	        var header, JSCompiler_temp;
	        if (
	          (JSCompiler_temp =
	            resumableState && 0 < resumableState.remainingCapacity)
	        )
	          JSCompiler_temp =
	            ((header =
	              "<" +
	              ("" + href).replace(
	                regexForHrefInLinkHeaderURLContext,
	                escapeHrefForLinkHeaderURLContextReplacer
	              ) +
	              ">; rel=dns-prefetch"),
	            0 <= (resumableState.remainingCapacity -= header.length + 2));
	        JSCompiler_temp
	          ? ((renderState.resets.dns[href] = null),
	            resumableState.preconnects && (resumableState.preconnects += ", "),
	            (resumableState.preconnects += header))
	          : ((header = []),
	            pushLinkImpl(header, { href: href, rel: "dns-prefetch" }),
	            renderState.preconnects.add(header));
	      }
	      enqueueFlush(request);
	    }
	  } else previousDispatcher.D(href);
	}
	function preconnect(href, crossOrigin) {
	  var request = currentRequest ? currentRequest : null;
	  if (request) {
	    var resumableState = request.resumableState,
	      renderState = request.renderState;
	    if ("string" === typeof href && href) {
	      var bucket =
	        "use-credentials" === crossOrigin
	          ? "credentials"
	          : "string" === typeof crossOrigin
	            ? "anonymous"
	            : "default";
	      if (!resumableState.connectResources[bucket].hasOwnProperty(href)) {
	        resumableState.connectResources[bucket][href] = null;
	        resumableState = renderState.headers;
	        var header, JSCompiler_temp;
	        if (
	          (JSCompiler_temp =
	            resumableState && 0 < resumableState.remainingCapacity)
	        ) {
	          JSCompiler_temp =
	            "<" +
	            ("" + href).replace(
	              regexForHrefInLinkHeaderURLContext,
	              escapeHrefForLinkHeaderURLContextReplacer
	            ) +
	            ">; rel=preconnect";
	          if ("string" === typeof crossOrigin) {
	            var escapedCrossOrigin = ("" + crossOrigin).replace(
	              regexForLinkHeaderQuotedParamValueContext,
	              escapeStringForLinkHeaderQuotedParamValueContextReplacer
	            );
	            JSCompiler_temp += '; crossorigin="' + escapedCrossOrigin + '"';
	          }
	          JSCompiler_temp =
	            ((header = JSCompiler_temp),
	            0 <= (resumableState.remainingCapacity -= header.length + 2));
	        }
	        JSCompiler_temp
	          ? ((renderState.resets.connect[bucket][href] = null),
	            resumableState.preconnects && (resumableState.preconnects += ", "),
	            (resumableState.preconnects += header))
	          : ((bucket = []),
	            pushLinkImpl(bucket, {
	              rel: "preconnect",
	              href: href,
	              crossOrigin: crossOrigin
	            }),
	            renderState.preconnects.add(bucket));
	      }
	      enqueueFlush(request);
	    }
	  } else previousDispatcher.C(href, crossOrigin);
	}
	function preload(href, as, options) {
	  var request = currentRequest ? currentRequest : null;
	  if (request) {
	    var resumableState = request.resumableState,
	      renderState = request.renderState;
	    if (as && href) {
	      switch (as) {
	        case "image":
	          if (options) {
	            var imageSrcSet = options.imageSrcSet;
	            var imageSizes = options.imageSizes;
	            var fetchPriority = options.fetchPriority;
	          }
	          var key = imageSrcSet
	            ? imageSrcSet + "\n" + (imageSizes || "")
	            : href;
	          if (resumableState.imageResources.hasOwnProperty(key)) return;
	          resumableState.imageResources[key] = PRELOAD_NO_CREDS;
	          resumableState = renderState.headers;
	          var header;
	          resumableState &&
	          0 < resumableState.remainingCapacity &&
	          "string" !== typeof imageSrcSet &&
	          "high" === fetchPriority &&
	          ((header = getPreloadAsHeader(href, as, options)),
	          0 <= (resumableState.remainingCapacity -= header.length + 2))
	            ? ((renderState.resets.image[key] = PRELOAD_NO_CREDS),
	              resumableState.highImagePreloads &&
	                (resumableState.highImagePreloads += ", "),
	              (resumableState.highImagePreloads += header))
	            : ((resumableState = []),
	              pushLinkImpl(
	                resumableState,
	                assign(
	                  { rel: "preload", href: imageSrcSet ? void 0 : href, as: as },
	                  options
	                )
	              ),
	              "high" === fetchPriority
	                ? renderState.highImagePreloads.add(resumableState)
	                : (renderState.bulkPreloads.add(resumableState),
	                  renderState.preloads.images.set(key, resumableState)));
	          break;
	        case "style":
	          if (resumableState.styleResources.hasOwnProperty(href)) return;
	          imageSrcSet = [];
	          pushLinkImpl(
	            imageSrcSet,
	            assign({ rel: "preload", href: href, as: as }, options)
	          );
	          resumableState.styleResources[href] =
	            !options ||
	            ("string" !== typeof options.crossOrigin &&
	              "string" !== typeof options.integrity)
	              ? PRELOAD_NO_CREDS
	              : [options.crossOrigin, options.integrity];
	          renderState.preloads.stylesheets.set(href, imageSrcSet);
	          renderState.bulkPreloads.add(imageSrcSet);
	          break;
	        case "script":
	          if (resumableState.scriptResources.hasOwnProperty(href)) return;
	          imageSrcSet = [];
	          renderState.preloads.scripts.set(href, imageSrcSet);
	          renderState.bulkPreloads.add(imageSrcSet);
	          pushLinkImpl(
	            imageSrcSet,
	            assign({ rel: "preload", href: href, as: as }, options)
	          );
	          resumableState.scriptResources[href] =
	            !options ||
	            ("string" !== typeof options.crossOrigin &&
	              "string" !== typeof options.integrity)
	              ? PRELOAD_NO_CREDS
	              : [options.crossOrigin, options.integrity];
	          break;
	        default:
	          if (resumableState.unknownResources.hasOwnProperty(as)) {
	            if (
	              ((imageSrcSet = resumableState.unknownResources[as]),
	              imageSrcSet.hasOwnProperty(href))
	            )
	              return;
	          } else
	            (imageSrcSet = {}),
	              (resumableState.unknownResources[as] = imageSrcSet);
	          imageSrcSet[href] = PRELOAD_NO_CREDS;
	          if (
	            (resumableState = renderState.headers) &&
	            0 < resumableState.remainingCapacity &&
	            "font" === as &&
	            ((key = getPreloadAsHeader(href, as, options)),
	            0 <= (resumableState.remainingCapacity -= key.length + 2))
	          )
	            (renderState.resets.font[href] = PRELOAD_NO_CREDS),
	              resumableState.fontPreloads &&
	                (resumableState.fontPreloads += ", "),
	              (resumableState.fontPreloads += key);
	          else
	            switch (
	              ((resumableState = []),
	              (href = assign({ rel: "preload", href: href, as: as }, options)),
	              pushLinkImpl(resumableState, href),
	              as)
	            ) {
	              case "font":
	                renderState.fontPreloads.add(resumableState);
	                break;
	              default:
	                renderState.bulkPreloads.add(resumableState);
	            }
	      }
	      enqueueFlush(request);
	    }
	  } else previousDispatcher.L(href, as, options);
	}
	function preloadModule(href, options) {
	  var request = currentRequest ? currentRequest : null;
	  if (request) {
	    var resumableState = request.resumableState,
	      renderState = request.renderState;
	    if (href) {
	      var as =
	        options && "string" === typeof options.as ? options.as : "script";
	      switch (as) {
	        case "script":
	          if (resumableState.moduleScriptResources.hasOwnProperty(href)) return;
	          as = [];
	          resumableState.moduleScriptResources[href] =
	            !options ||
	            ("string" !== typeof options.crossOrigin &&
	              "string" !== typeof options.integrity)
	              ? PRELOAD_NO_CREDS
	              : [options.crossOrigin, options.integrity];
	          renderState.preloads.moduleScripts.set(href, as);
	          break;
	        default:
	          if (resumableState.moduleUnknownResources.hasOwnProperty(as)) {
	            var resources = resumableState.unknownResources[as];
	            if (resources.hasOwnProperty(href)) return;
	          } else
	            (resources = {}),
	              (resumableState.moduleUnknownResources[as] = resources);
	          as = [];
	          resources[href] = PRELOAD_NO_CREDS;
	      }
	      pushLinkImpl(as, assign({ rel: "modulepreload", href: href }, options));
	      renderState.bulkPreloads.add(as);
	      enqueueFlush(request);
	    }
	  } else previousDispatcher.m(href, options);
	}
	function preinitStyle(href, precedence, options) {
	  var request = currentRequest ? currentRequest : null;
	  if (request) {
	    var resumableState = request.resumableState,
	      renderState = request.renderState;
	    if (href) {
	      precedence = precedence || "default";
	      var styleQueue = renderState.styles.get(precedence),
	        resourceState = resumableState.styleResources.hasOwnProperty(href)
	          ? resumableState.styleResources[href]
	          : void 0;
	      null !== resourceState &&
	        ((resumableState.styleResources[href] = null),
	        styleQueue ||
	          ((styleQueue = {
	            precedence: stringToChunk(escapeTextForBrowser(precedence)),
	            rules: [],
	            hrefs: [],
	            sheets: new Map()
	          }),
	          renderState.styles.set(precedence, styleQueue)),
	        (precedence = {
	          state: 0,
	          props: assign(
	            { rel: "stylesheet", href: href, "data-precedence": precedence },
	            options
	          )
	        }),
	        resourceState &&
	          (2 === resourceState.length &&
	            adoptPreloadCredentials(precedence.props, resourceState),
	          (renderState = renderState.preloads.stylesheets.get(href)) &&
	          0 < renderState.length
	            ? (renderState.length = 0)
	            : (precedence.state = 1)),
	        styleQueue.sheets.set(href, precedence),
	        enqueueFlush(request));
	    }
	  } else previousDispatcher.S(href, precedence, options);
	}
	function preinitScript(src, options) {
	  var request = currentRequest ? currentRequest : null;
	  if (request) {
	    var resumableState = request.resumableState,
	      renderState = request.renderState;
	    if (src) {
	      var resourceState = resumableState.scriptResources.hasOwnProperty(src)
	        ? resumableState.scriptResources[src]
	        : void 0;
	      null !== resourceState &&
	        ((resumableState.scriptResources[src] = null),
	        (options = assign({ src: src, async: true }, options)),
	        resourceState &&
	          (2 === resourceState.length &&
	            adoptPreloadCredentials(options, resourceState),
	          (src = renderState.preloads.scripts.get(src))) &&
	          (src.length = 0),
	        (src = []),
	        renderState.scripts.add(src),
	        pushScriptImpl(src, options),
	        enqueueFlush(request));
	    }
	  } else previousDispatcher.X(src, options);
	}
	function preinitModuleScript(src, options) {
	  var request = currentRequest ? currentRequest : null;
	  if (request) {
	    var resumableState = request.resumableState,
	      renderState = request.renderState;
	    if (src) {
	      var resourceState = resumableState.moduleScriptResources.hasOwnProperty(
	        src
	      )
	        ? resumableState.moduleScriptResources[src]
	        : void 0;
	      null !== resourceState &&
	        ((resumableState.moduleScriptResources[src] = null),
	        (options = assign({ src: src, type: "module", async: true }, options)),
	        resourceState &&
	          (2 === resourceState.length &&
	            adoptPreloadCredentials(options, resourceState),
	          (src = renderState.preloads.moduleScripts.get(src))) &&
	          (src.length = 0),
	        (src = []),
	        renderState.scripts.add(src),
	        pushScriptImpl(src, options),
	        enqueueFlush(request));
	    }
	  } else previousDispatcher.M(src, options);
	}
	function adoptPreloadCredentials(target, preloadState) {
	  null == target.crossOrigin && (target.crossOrigin = preloadState[0]);
	  null == target.integrity && (target.integrity = preloadState[1]);
	}
	function getPreloadAsHeader(href, as, params) {
	  href = ("" + href).replace(
	    regexForHrefInLinkHeaderURLContext,
	    escapeHrefForLinkHeaderURLContextReplacer
	  );
	  as = ("" + as).replace(
	    regexForLinkHeaderQuotedParamValueContext,
	    escapeStringForLinkHeaderQuotedParamValueContextReplacer
	  );
	  as = "<" + href + '>; rel=preload; as="' + as + '"';
	  for (var paramName in params)
	    hasOwnProperty.call(params, paramName) &&
	      ((href = params[paramName]),
	      "string" === typeof href &&
	        (as +=
	          "; " +
	          paramName.toLowerCase() +
	          '="' +
	          ("" + href).replace(
	            regexForLinkHeaderQuotedParamValueContext,
	            escapeStringForLinkHeaderQuotedParamValueContextReplacer
	          ) +
	          '"'));
	  return as;
	}
	var regexForHrefInLinkHeaderURLContext = /[<>\r\n]/g;
	function escapeHrefForLinkHeaderURLContextReplacer(match) {
	  switch (match) {
	    case "<":
	      return "%3C";
	    case ">":
	      return "%3E";
	    case "\n":
	      return "%0A";
	    case "\r":
	      return "%0D";
	    default:
	      throw Error(
	        "escapeLinkHrefForHeaderContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
	      );
	  }
	}
	var regexForLinkHeaderQuotedParamValueContext = /["';,\r\n]/g;
	function escapeStringForLinkHeaderQuotedParamValueContextReplacer(match) {
	  switch (match) {
	    case '"':
	      return "%22";
	    case "'":
	      return "%27";
	    case ";":
	      return "%3B";
	    case ",":
	      return "%2C";
	    case "\n":
	      return "%0A";
	    case "\r":
	      return "%0D";
	    default:
	      throw Error(
	        "escapeStringForLinkHeaderQuotedParamValueContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
	      );
	  }
	}
	function hoistStyleQueueDependency(styleQueue) {
	  this.styles.add(styleQueue);
	}
	function hoistStylesheetDependency(stylesheet) {
	  this.stylesheets.add(stylesheet);
	}
	function hoistHoistables(parentState, childState) {
	  childState.styles.forEach(hoistStyleQueueDependency, parentState);
	  childState.stylesheets.forEach(hoistStylesheetDependency, parentState);
	  childState.suspenseyImages && (parentState.suspenseyImages = true);
	}
	function hasSuspenseyContent(hoistableState) {
	  return 0 < hoistableState.stylesheets.size || hoistableState.suspenseyImages;
	}
	var bind = Function.prototype.bind,
	  REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference");
	function getComponentNameFromType(type) {
	  if (null == type) return null;
	  if ("function" === typeof type)
	    return type.$$typeof === REACT_CLIENT_REFERENCE
	      ? null
	      : type.displayName || type.name || null;
	  if ("string" === typeof type) return type;
	  switch (type) {
	    case REACT_FRAGMENT_TYPE:
	      return "Fragment";
	    case REACT_PROFILER_TYPE:
	      return "Profiler";
	    case REACT_STRICT_MODE_TYPE:
	      return "StrictMode";
	    case REACT_SUSPENSE_TYPE:
	      return "Suspense";
	    case REACT_SUSPENSE_LIST_TYPE:
	      return "SuspenseList";
	    case REACT_ACTIVITY_TYPE:
	      return "Activity";
	  }
	  if ("object" === typeof type)
	    switch (type.$$typeof) {
	      case REACT_PORTAL_TYPE:
	        return "Portal";
	      case REACT_CONTEXT_TYPE:
	        return type.displayName || "Context";
	      case REACT_CONSUMER_TYPE:
	        return (type._context.displayName || "Context") + ".Consumer";
	      case REACT_FORWARD_REF_TYPE:
	        var innerType = type.render;
	        type = type.displayName;
	        type ||
	          ((type = innerType.displayName || innerType.name || ""),
	          (type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef"));
	        return type;
	      case REACT_MEMO_TYPE:
	        return (
	          (innerType = type.displayName || null),
	          null !== innerType
	            ? innerType
	            : getComponentNameFromType(type.type) || "Memo"
	        );
	      case REACT_LAZY_TYPE:
	        innerType = type._payload;
	        type = type._init;
	        try {
	          return getComponentNameFromType(type(innerType));
	        } catch (x) {}
	    }
	  return null;
	}
	var emptyContextObject = {},
	  currentActiveSnapshot = null;
	function popToNearestCommonAncestor(prev, next) {
	  if (prev !== next) {
	    prev.context._currentValue = prev.parentValue;
	    prev = prev.parent;
	    var parentNext = next.parent;
	    if (null === prev) {
	      if (null !== parentNext) throw Error(formatProdErrorMessage(401));
	    } else {
	      if (null === parentNext) throw Error(formatProdErrorMessage(401));
	      popToNearestCommonAncestor(prev, parentNext);
	    }
	    next.context._currentValue = next.value;
	  }
	}
	function popAllPrevious(prev) {
	  prev.context._currentValue = prev.parentValue;
	  prev = prev.parent;
	  null !== prev && popAllPrevious(prev);
	}
	function pushAllNext(next) {
	  var parentNext = next.parent;
	  null !== parentNext && pushAllNext(parentNext);
	  next.context._currentValue = next.value;
	}
	function popPreviousToCommonLevel(prev, next) {
	  prev.context._currentValue = prev.parentValue;
	  prev = prev.parent;
	  if (null === prev) throw Error(formatProdErrorMessage(402));
	  prev.depth === next.depth
	    ? popToNearestCommonAncestor(prev, next)
	    : popPreviousToCommonLevel(prev, next);
	}
	function popNextToCommonLevel(prev, next) {
	  var parentNext = next.parent;
	  if (null === parentNext) throw Error(formatProdErrorMessage(402));
	  prev.depth === parentNext.depth
	    ? popToNearestCommonAncestor(prev, parentNext)
	    : popNextToCommonLevel(prev, parentNext);
	  next.context._currentValue = next.value;
	}
	function switchContext(newSnapshot) {
	  var prev = currentActiveSnapshot;
	  prev !== newSnapshot &&
	    (null === prev
	      ? pushAllNext(newSnapshot)
	      : null === newSnapshot
	        ? popAllPrevious(prev)
	        : prev.depth === newSnapshot.depth
	          ? popToNearestCommonAncestor(prev, newSnapshot)
	          : prev.depth > newSnapshot.depth
	            ? popPreviousToCommonLevel(prev, newSnapshot)
	            : popNextToCommonLevel(prev, newSnapshot),
	    (currentActiveSnapshot = newSnapshot));
	}
	var classComponentUpdater = {
	    enqueueSetState: function (inst, payload) {
	      inst = inst._reactInternals;
	      null !== inst.queue && inst.queue.push(payload);
	    },
	    enqueueReplaceState: function (inst, payload) {
	      inst = inst._reactInternals;
	      inst.replace = true;
	      inst.queue = [payload];
	    },
	    enqueueForceUpdate: function () {}
	  },
	  emptyTreeContext = { id: 1, overflow: "" };
	function pushTreeContext(baseContext, totalChildren, index) {
	  var baseIdWithLeadingBit = baseContext.id;
	  baseContext = baseContext.overflow;
	  var baseLength = 32 - clz32(baseIdWithLeadingBit) - 1;
	  baseIdWithLeadingBit &= ~(1 << baseLength);
	  index += 1;
	  var length = 32 - clz32(totalChildren) + baseLength;
	  if (30 < length) {
	    var numberOfOverflowBits = baseLength - (baseLength % 5);
	    length = (
	      baseIdWithLeadingBit &
	      ((1 << numberOfOverflowBits) - 1)
	    ).toString(32);
	    baseIdWithLeadingBit >>= numberOfOverflowBits;
	    baseLength -= numberOfOverflowBits;
	    return {
	      id:
	        (1 << (32 - clz32(totalChildren) + baseLength)) |
	        (index << baseLength) |
	        baseIdWithLeadingBit,
	      overflow: length + baseContext
	    };
	  }
	  return {
	    id: (1 << length) | (index << baseLength) | baseIdWithLeadingBit,
	    overflow: baseContext
	  };
	}
	var clz32 = Math.clz32 ? Math.clz32 : clz32Fallback,
	  log = Math.log,
	  LN2 = Math.LN2;
	function clz32Fallback(x) {
	  x >>>= 0;
	  return 0 === x ? 32 : (31 - ((log(x) / LN2) | 0)) | 0;
	}
	function noop() {}
	var SuspenseException = Error(formatProdErrorMessage(460));
	function trackUsedThenable(thenableState, thenable, index) {
	  index = thenableState[index];
	  void 0 === index
	    ? thenableState.push(thenable)
	    : index !== thenable && (thenable.then(noop, noop), (thenable = index));
	  switch (thenable.status) {
	    case "fulfilled":
	      return thenable.value;
	    case "rejected":
	      throw thenable.reason;
	    default:
	      "string" === typeof thenable.status
	        ? thenable.then(noop, noop)
	        : ((thenableState = thenable),
	          (thenableState.status = "pending"),
	          thenableState.then(
	            function (fulfilledValue) {
	              if ("pending" === thenable.status) {
	                var fulfilledThenable = thenable;
	                fulfilledThenable.status = "fulfilled";
	                fulfilledThenable.value = fulfilledValue;
	              }
	            },
	            function (error) {
	              if ("pending" === thenable.status) {
	                var rejectedThenable = thenable;
	                rejectedThenable.status = "rejected";
	                rejectedThenable.reason = error;
	              }
	            }
	          ));
	      switch (thenable.status) {
	        case "fulfilled":
	          return thenable.value;
	        case "rejected":
	          throw thenable.reason;
	      }
	      suspendedThenable = thenable;
	      throw SuspenseException;
	  }
	}
	var suspendedThenable = null;
	function getSuspendedThenable() {
	  if (null === suspendedThenable) throw Error(formatProdErrorMessage(459));
	  var thenable = suspendedThenable;
	  suspendedThenable = null;
	  return thenable;
	}
	function is(x, y) {
	  return (x === y && (0 !== x || 1 / x === 1 / y)) || (x !== x && y !== y);
	}
	var objectIs = "function" === typeof Object.is ? Object.is : is,
	  currentlyRenderingComponent = null,
	  currentlyRenderingTask = null,
	  currentlyRenderingRequest = null,
	  currentlyRenderingKeyPath = null,
	  firstWorkInProgressHook = null,
	  workInProgressHook = null,
	  isReRender = false,
	  didScheduleRenderPhaseUpdate = false,
	  localIdCounter = 0,
	  actionStateCounter = 0,
	  actionStateMatchingIndex = -1,
	  thenableIndexCounter = 0,
	  thenableState = null,
	  renderPhaseUpdates = null,
	  numberOfReRenders = 0;
	function resolveCurrentlyRenderingComponent() {
	  if (null === currentlyRenderingComponent)
	    throw Error(formatProdErrorMessage(321));
	  return currentlyRenderingComponent;
	}
	function createHook() {
	  if (0 < numberOfReRenders) throw Error(formatProdErrorMessage(312));
	  return { memoizedState: null, queue: null, next: null };
	}
	function createWorkInProgressHook() {
	  null === workInProgressHook
	    ? null === firstWorkInProgressHook
	      ? ((isReRender = false),
	        (firstWorkInProgressHook = workInProgressHook = createHook()))
	      : ((isReRender = true), (workInProgressHook = firstWorkInProgressHook))
	    : null === workInProgressHook.next
	      ? ((isReRender = false),
	        (workInProgressHook = workInProgressHook.next = createHook()))
	      : ((isReRender = true), (workInProgressHook = workInProgressHook.next));
	  return workInProgressHook;
	}
	function getThenableStateAfterSuspending() {
	  var state = thenableState;
	  thenableState = null;
	  return state;
	}
	function resetHooksState() {
	  currentlyRenderingKeyPath =
	    currentlyRenderingRequest =
	    currentlyRenderingTask =
	    currentlyRenderingComponent =
	      null;
	  didScheduleRenderPhaseUpdate = false;
	  firstWorkInProgressHook = null;
	  numberOfReRenders = 0;
	  workInProgressHook = renderPhaseUpdates = null;
	}
	function basicStateReducer(state, action) {
	  return "function" === typeof action ? action(state) : action;
	}
	function useReducer(reducer, initialArg, init) {
	  currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
	  workInProgressHook = createWorkInProgressHook();
	  if (isReRender) {
	    var queue = workInProgressHook.queue;
	    initialArg = queue.dispatch;
	    if (
	      null !== renderPhaseUpdates &&
	      ((init = renderPhaseUpdates.get(queue)), void 0 !== init)
	    ) {
	      renderPhaseUpdates.delete(queue);
	      queue = workInProgressHook.memoizedState;
	      do (queue = reducer(queue, init.action)), (init = init.next);
	      while (null !== init);
	      workInProgressHook.memoizedState = queue;
	      return [queue, initialArg];
	    }
	    return [workInProgressHook.memoizedState, initialArg];
	  }
	  reducer =
	    reducer === basicStateReducer
	      ? "function" === typeof initialArg
	        ? initialArg()
	        : initialArg
	      : void 0 !== init
	        ? init(initialArg)
	        : initialArg;
	  workInProgressHook.memoizedState = reducer;
	  reducer = workInProgressHook.queue = { last: null, dispatch: null };
	  reducer = reducer.dispatch = dispatchAction.bind(
	    null,
	    currentlyRenderingComponent,
	    reducer
	  );
	  return [workInProgressHook.memoizedState, reducer];
	}
	function useMemo(nextCreate, deps) {
	  currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
	  workInProgressHook = createWorkInProgressHook();
	  deps = void 0 === deps ? null : deps;
	  if (null !== workInProgressHook) {
	    var prevState = workInProgressHook.memoizedState;
	    if (null !== prevState && null !== deps) {
	      var prevDeps = prevState[1];
	      a: if (null === prevDeps) prevDeps = false;
	      else {
	        for (var i = 0; i < prevDeps.length && i < deps.length; i++)
	          if (!objectIs(deps[i], prevDeps[i])) {
	            prevDeps = false;
	            break a;
	          }
	        prevDeps = true;
	      }
	      if (prevDeps) return prevState[0];
	    }
	  }
	  nextCreate = nextCreate();
	  workInProgressHook.memoizedState = [nextCreate, deps];
	  return nextCreate;
	}
	function dispatchAction(componentIdentity, queue, action) {
	  if (25 <= numberOfReRenders) throw Error(formatProdErrorMessage(301));
	  if (componentIdentity === currentlyRenderingComponent)
	    if (
	      ((didScheduleRenderPhaseUpdate = true),
	      (componentIdentity = { action: action, next: null }),
	      null === renderPhaseUpdates && (renderPhaseUpdates = new Map()),
	      (action = renderPhaseUpdates.get(queue)),
	      void 0 === action)
	    )
	      renderPhaseUpdates.set(queue, componentIdentity);
	    else {
	      for (queue = action; null !== queue.next; ) queue = queue.next;
	      queue.next = componentIdentity;
	    }
	}
	function throwOnUseEffectEventCall() {
	  throw Error(formatProdErrorMessage(440));
	}
	function unsupportedStartTransition() {
	  throw Error(formatProdErrorMessage(394));
	}
	function unsupportedSetOptimisticState() {
	  throw Error(formatProdErrorMessage(479));
	}
	function useActionState(action, initialState, permalink) {
	  resolveCurrentlyRenderingComponent();
	  var actionStateHookIndex = actionStateCounter++,
	    request = currentlyRenderingRequest;
	  if ("function" === typeof action.$$FORM_ACTION) {
	    var nextPostbackStateKey = null,
	      componentKeyPath = currentlyRenderingKeyPath;
	    request = request.formState;
	    var isSignatureEqual = action.$$IS_SIGNATURE_EQUAL;
	    if (null !== request && "function" === typeof isSignatureEqual) {
	      var postbackKey = request[1];
	      isSignatureEqual.call(action, request[2], request[3]) &&
	        ((nextPostbackStateKey =
	          void 0 !== permalink
	            ? "p" + permalink
	            : "k" +
	              murmurhash3_32_gc(
	                JSON.stringify([componentKeyPath, null, actionStateHookIndex]),
	                0
	              )),
	        postbackKey === nextPostbackStateKey &&
	          ((actionStateMatchingIndex = actionStateHookIndex),
	          (initialState = request[0])));
	    }
	    var boundAction = action.bind(null, initialState);
	    action = function (payload) {
	      boundAction(payload);
	    };
	    "function" === typeof boundAction.$$FORM_ACTION &&
	      (action.$$FORM_ACTION = function (prefix) {
	        prefix = boundAction.$$FORM_ACTION(prefix);
	        void 0 !== permalink &&
	          ((permalink += ""), (prefix.action = permalink));
	        var formData = prefix.data;
	        formData &&
	          (null === nextPostbackStateKey &&
	            (nextPostbackStateKey =
	              void 0 !== permalink
	                ? "p" + permalink
	                : "k" +
	                  murmurhash3_32_gc(
	                    JSON.stringify([
	                      componentKeyPath,
	                      null,
	                      actionStateHookIndex
	                    ]),
	                    0
	                  )),
	          formData.append("$ACTION_KEY", nextPostbackStateKey));
	        return prefix;
	      });
	    return [initialState, action, false];
	  }
	  var boundAction$22 = action.bind(null, initialState);
	  return [
	    initialState,
	    function (payload) {
	      boundAction$22(payload);
	    },
	    false
	  ];
	}
	function unwrapThenable(thenable) {
	  var index = thenableIndexCounter;
	  thenableIndexCounter += 1;
	  null === thenableState && (thenableState = []);
	  return trackUsedThenable(thenableState, thenable, index);
	}
	function unsupportedRefresh() {
	  throw Error(formatProdErrorMessage(393));
	}
	var HooksDispatcher = {
	    readContext: function (context) {
	      return context._currentValue;
	    },
	    use: function (usable) {
	      if (null !== usable && "object" === typeof usable) {
	        if ("function" === typeof usable.then) return unwrapThenable(usable);
	        if (usable.$$typeof === REACT_CONTEXT_TYPE) return usable._currentValue;
	      }
	      throw Error(formatProdErrorMessage(438, String(usable)));
	    },
	    useContext: function (context) {
	      resolveCurrentlyRenderingComponent();
	      return context._currentValue;
	    },
	    useMemo: useMemo,
	    useReducer: useReducer,
	    useRef: function (initialValue) {
	      currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
	      workInProgressHook = createWorkInProgressHook();
	      var previousRef = workInProgressHook.memoizedState;
	      return null === previousRef
	        ? ((initialValue = { current: initialValue }),
	          (workInProgressHook.memoizedState = initialValue))
	        : previousRef;
	    },
	    useState: function (initialState) {
	      return useReducer(basicStateReducer, initialState);
	    },
	    useInsertionEffect: noop,
	    useLayoutEffect: noop,
	    useCallback: function (callback, deps) {
	      return useMemo(function () {
	        return callback;
	      }, deps);
	    },
	    useImperativeHandle: noop,
	    useEffect: noop,
	    useDebugValue: noop,
	    useDeferredValue: function (value, initialValue) {
	      resolveCurrentlyRenderingComponent();
	      return void 0 !== initialValue ? initialValue : value;
	    },
	    useTransition: function () {
	      resolveCurrentlyRenderingComponent();
	      return [false, unsupportedStartTransition];
	    },
	    useId: function () {
	      var JSCompiler_inline_result = currentlyRenderingTask.treeContext;
	      var overflow = JSCompiler_inline_result.overflow;
	      JSCompiler_inline_result = JSCompiler_inline_result.id;
	      JSCompiler_inline_result =
	        (
	          JSCompiler_inline_result &
	          ~(1 << (32 - clz32(JSCompiler_inline_result) - 1))
	        ).toString(32) + overflow;
	      var resumableState = currentResumableState;
	      if (null === resumableState) throw Error(formatProdErrorMessage(404));
	      overflow = localIdCounter++;
	      JSCompiler_inline_result =
	        "_" + resumableState.idPrefix + "R_" + JSCompiler_inline_result;
	      0 < overflow && (JSCompiler_inline_result += "H" + overflow.toString(32));
	      return JSCompiler_inline_result + "_";
	    },
	    useSyncExternalStore: function (subscribe, getSnapshot, getServerSnapshot) {
	      if (void 0 === getServerSnapshot)
	        throw Error(formatProdErrorMessage(407));
	      return getServerSnapshot();
	    },
	    useOptimistic: function (passthrough) {
	      resolveCurrentlyRenderingComponent();
	      return [passthrough, unsupportedSetOptimisticState];
	    },
	    useActionState: useActionState,
	    useFormState: useActionState,
	    useHostTransitionStatus: function () {
	      resolveCurrentlyRenderingComponent();
	      return sharedNotPendingObject;
	    },
	    useMemoCache: function (size) {
	      for (var data = Array(size), i = 0; i < size; i++)
	        data[i] = REACT_MEMO_CACHE_SENTINEL;
	      return data;
	    },
	    useCacheRefresh: function () {
	      return unsupportedRefresh;
	    },
	    useEffectEvent: function () {
	      return throwOnUseEffectEventCall;
	    }
	  },
	  currentResumableState = null,
	  DefaultAsyncDispatcher = {
	    getCacheForType: function () {
	      throw Error(formatProdErrorMessage(248));
	    },
	    cacheSignal: function () {
	      throw Error(formatProdErrorMessage(248));
	    }
	  },
	  prefix,
	  suffix;
	function describeBuiltInComponentFrame(name) {
	  if (void 0 === prefix)
	    try {
	      throw Error();
	    } catch (x) {
	      var match = x.stack.trim().match(/\n( *(at )?)/);
	      prefix = (match && match[1]) || "";
	      suffix =
	        -1 < x.stack.indexOf("\n    at")
	          ? " (<anonymous>)"
	          : -1 < x.stack.indexOf("@")
	            ? "@unknown:0:0"
	            : "";
	    }
	  return "\n" + prefix + name + suffix;
	}
	var reentry = false;
	function describeNativeComponentFrame(fn, construct) {
	  if (!fn || reentry) return "";
	  reentry = true;
	  var previousPrepareStackTrace = Error.prepareStackTrace;
	  Error.prepareStackTrace = void 0;
	  try {
	    var RunInRootFrame = {
	      DetermineComponentFrameRoot: function () {
	        try {
	          if (construct) {
	            var Fake = function () {
	              throw Error();
	            };
	            Object.defineProperty(Fake.prototype, "props", {
	              set: function () {
	                throw Error();
	              }
	            });
	            if ("object" === typeof Reflect && Reflect.construct) {
	              try {
	                Reflect.construct(Fake, []);
	              } catch (x) {
	                var control = x;
	              }
	              Reflect.construct(fn, [], Fake);
	            } else {
	              try {
	                Fake.call();
	              } catch (x$24) {
	                control = x$24;
	              }
	              fn.call(Fake.prototype);
	            }
	          } else {
	            try {
	              throw Error();
	            } catch (x$25) {
	              control = x$25;
	            }
	            (Fake = fn()) &&
	              "function" === typeof Fake.catch &&
	              Fake.catch(function () {});
	          }
	        } catch (sample) {
	          if (sample && control && "string" === typeof sample.stack)
	            return [sample.stack, control.stack];
	        }
	        return [null, null];
	      }
	    };
	    RunInRootFrame.DetermineComponentFrameRoot.displayName =
	      "DetermineComponentFrameRoot";
	    var namePropDescriptor = Object.getOwnPropertyDescriptor(
	      RunInRootFrame.DetermineComponentFrameRoot,
	      "name"
	    );
	    namePropDescriptor &&
	      namePropDescriptor.configurable &&
	      Object.defineProperty(
	        RunInRootFrame.DetermineComponentFrameRoot,
	        "name",
	        { value: "DetermineComponentFrameRoot" }
	      );
	    var _RunInRootFrame$Deter = RunInRootFrame.DetermineComponentFrameRoot(),
	      sampleStack = _RunInRootFrame$Deter[0],
	      controlStack = _RunInRootFrame$Deter[1];
	    if (sampleStack && controlStack) {
	      var sampleLines = sampleStack.split("\n"),
	        controlLines = controlStack.split("\n");
	      for (
	        namePropDescriptor = RunInRootFrame = 0;
	        RunInRootFrame < sampleLines.length &&
	        !sampleLines[RunInRootFrame].includes("DetermineComponentFrameRoot");

	      )
	        RunInRootFrame++;
	      for (
	        ;
	        namePropDescriptor < controlLines.length &&
	        !controlLines[namePropDescriptor].includes(
	          "DetermineComponentFrameRoot"
	        );

	      )
	        namePropDescriptor++;
	      if (
	        RunInRootFrame === sampleLines.length ||
	        namePropDescriptor === controlLines.length
	      )
	        for (
	          RunInRootFrame = sampleLines.length - 1,
	            namePropDescriptor = controlLines.length - 1;
	          1 <= RunInRootFrame &&
	          0 <= namePropDescriptor &&
	          sampleLines[RunInRootFrame] !== controlLines[namePropDescriptor];

	        )
	          namePropDescriptor--;
	      for (
	        ;
	        1 <= RunInRootFrame && 0 <= namePropDescriptor;
	        RunInRootFrame--, namePropDescriptor--
	      )
	        if (sampleLines[RunInRootFrame] !== controlLines[namePropDescriptor]) {
	          if (1 !== RunInRootFrame || 1 !== namePropDescriptor) {
	            do
	              if (
	                (RunInRootFrame--,
	                namePropDescriptor--,
	                0 > namePropDescriptor ||
	                  sampleLines[RunInRootFrame] !==
	                    controlLines[namePropDescriptor])
	              ) {
	                var frame =
	                  "\n" +
	                  sampleLines[RunInRootFrame].replace(" at new ", " at ");
	                fn.displayName &&
	                  frame.includes("<anonymous>") &&
	                  (frame = frame.replace("<anonymous>", fn.displayName));
	                return frame;
	              }
	            while (1 <= RunInRootFrame && 0 <= namePropDescriptor);
	          }
	          break;
	        }
	    }
	  } finally {
	    (reentry = false), (Error.prepareStackTrace = previousPrepareStackTrace);
	  }
	  return (previousPrepareStackTrace = fn ? fn.displayName || fn.name : "")
	    ? describeBuiltInComponentFrame(previousPrepareStackTrace)
	    : "";
	}
	function describeComponentStackByType(type) {
	  if ("string" === typeof type) return describeBuiltInComponentFrame(type);
	  if ("function" === typeof type)
	    return type.prototype && type.prototype.isReactComponent
	      ? describeNativeComponentFrame(type, true)
	      : describeNativeComponentFrame(type, false);
	  if ("object" === typeof type && null !== type) {
	    switch (type.$$typeof) {
	      case REACT_FORWARD_REF_TYPE:
	        return describeNativeComponentFrame(type.render, false);
	      case REACT_MEMO_TYPE:
	        return describeNativeComponentFrame(type.type, false);
	      case REACT_LAZY_TYPE:
	        var lazyComponent = type,
	          payload = lazyComponent._payload;
	        lazyComponent = lazyComponent._init;
	        try {
	          type = lazyComponent(payload);
	        } catch (x) {
	          return describeBuiltInComponentFrame("Lazy");
	        }
	        return describeComponentStackByType(type);
	    }
	    if ("string" === typeof type.name) {
	      a: {
	        payload = type.name;
	        lazyComponent = type.env;
	        var location = type.debugLocation;
	        if (
	          null != location &&
	          ((type = Error.prepareStackTrace),
	          (Error.prepareStackTrace = void 0),
	          (location = location.stack),
	          (Error.prepareStackTrace = type),
	          location.startsWith("Error: react-stack-top-frame\n") &&
	            (location = location.slice(29)),
	          (type = location.indexOf("\n")),
	          -1 !== type && (location = location.slice(type + 1)),
	          (type = location.indexOf("react_stack_bottom_frame")),
	          -1 !== type && (type = location.lastIndexOf("\n", type)),
	          (type = -1 !== type ? (location = location.slice(0, type)) : ""),
	          (location = type.lastIndexOf("\n")),
	          (type = -1 === location ? type : type.slice(location + 1)),
	          -1 !== type.indexOf(payload))
	        ) {
	          payload = "\n" + type;
	          break a;
	        }
	        payload = describeBuiltInComponentFrame(
	          payload + (lazyComponent ? " [" + lazyComponent + "]" : "")
	        );
	      }
	      return payload;
	    }
	  }
	  switch (type) {
	    case REACT_SUSPENSE_LIST_TYPE:
	      return describeBuiltInComponentFrame("SuspenseList");
	    case REACT_SUSPENSE_TYPE:
	      return describeBuiltInComponentFrame("Suspense");
	  }
	  return "";
	}
	function isEligibleForOutlining(request, boundary) {
	  return (
	    (500 < boundary.byteSize || hasSuspenseyContent(boundary.contentState)) &&
	    null === boundary.contentPreamble
	  );
	}
	function defaultErrorHandler(error) {
	  if (
	    "object" === typeof error &&
	    null !== error &&
	    "string" === typeof error.environmentName
	  ) {
	    var JSCompiler_inline_result = error.environmentName;
	    error = [error].slice(0);
	    "string" === typeof error[0]
	      ? error.splice(
	          0,
	          1,
	          "%c%s%c " + error[0],
	          "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px",
	          " " + JSCompiler_inline_result + " ",
	          ""
	        )
	      : error.splice(
	          0,
	          0,
	          "%c%s%c",
	          "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px",
	          " " + JSCompiler_inline_result + " ",
	          ""
	        );
	    error.unshift(console);
	    JSCompiler_inline_result = bind.apply(console.error, error);
	    JSCompiler_inline_result();
	  } else console.error(error);
	  return null;
	}
	function RequestInstance(
	  resumableState,
	  renderState,
	  rootFormatContext,
	  progressiveChunkSize,
	  onError,
	  onAllReady,
	  onShellReady,
	  onShellError,
	  onFatalError,
	  onPostpone,
	  formState
	) {
	  var abortSet = new Set();
	  this.destination = null;
	  this.flushScheduled = false;
	  this.resumableState = resumableState;
	  this.renderState = renderState;
	  this.rootFormatContext = rootFormatContext;
	  this.progressiveChunkSize =
	    void 0 === progressiveChunkSize ? 12800 : progressiveChunkSize;
	  this.status = 10;
	  this.fatalError = null;
	  this.pendingRootTasks = this.allPendingTasks = this.nextSegmentId = 0;
	  this.completedPreambleSegments = this.completedRootSegment = null;
	  this.byteSize = 0;
	  this.abortableTasks = abortSet;
	  this.pingedTasks = [];
	  this.clientRenderedBoundaries = [];
	  this.completedBoundaries = [];
	  this.partialBoundaries = [];
	  this.trackedPostpones = null;
	  this.onError = void 0 === onError ? defaultErrorHandler : onError;
	  this.onPostpone = void 0 === onPostpone ? noop : onPostpone;
	  this.onAllReady = void 0 === onAllReady ? noop : onAllReady;
	  this.onShellReady = void 0 === onShellReady ? noop : onShellReady;
	  this.onShellError = void 0 === onShellError ? noop : onShellError;
	  this.onFatalError = void 0 === onFatalError ? noop : onFatalError;
	  this.formState = void 0 === formState ? null : formState;
	}
	function createRequest(
	  children,
	  resumableState,
	  renderState,
	  rootFormatContext,
	  progressiveChunkSize,
	  onError,
	  onAllReady,
	  onShellReady,
	  onShellError,
	  onFatalError,
	  onPostpone,
	  formState
	) {
	  resumableState = new RequestInstance(
	    resumableState,
	    renderState,
	    rootFormatContext,
	    progressiveChunkSize,
	    onError,
	    onAllReady,
	    onShellReady,
	    onShellError,
	    onFatalError,
	    onPostpone,
	    formState
	  );
	  renderState = createPendingSegment(
	    resumableState,
	    0,
	    null,
	    rootFormatContext,
	    false,
	    false
	  );
	  renderState.parentFlushed = true;
	  children = createRenderTask(
	    resumableState,
	    null,
	    children,
	    -1,
	    null,
	    renderState,
	    null,
	    null,
	    resumableState.abortableTasks,
	    null,
	    rootFormatContext,
	    null,
	    emptyTreeContext,
	    null,
	    null
	  );
	  pushComponentStack(children);
	  resumableState.pingedTasks.push(children);
	  return resumableState;
	}
	function createPrerenderRequest(
	  children,
	  resumableState,
	  renderState,
	  rootFormatContext,
	  progressiveChunkSize,
	  onError,
	  onAllReady,
	  onShellReady,
	  onShellError,
	  onFatalError,
	  onPostpone
	) {
	  children = createRequest(
	    children,
	    resumableState,
	    renderState,
	    rootFormatContext,
	    progressiveChunkSize,
	    onError,
	    onAllReady,
	    onShellReady,
	    onShellError,
	    onFatalError,
	    onPostpone,
	    void 0
	  );
	  children.trackedPostpones = {
	    workingMap: new Map(),
	    rootNodes: [],
	    rootSlots: null
	  };
	  return children;
	}
	function resumeRequest(
	  children,
	  postponedState,
	  renderState,
	  onError,
	  onAllReady,
	  onShellReady,
	  onShellError,
	  onFatalError,
	  onPostpone
	) {
	  renderState = new RequestInstance(
	    postponedState.resumableState,
	    renderState,
	    postponedState.rootFormatContext,
	    postponedState.progressiveChunkSize,
	    onError,
	    onAllReady,
	    onShellReady,
	    onShellError,
	    onFatalError,
	    onPostpone,
	    null
	  );
	  renderState.nextSegmentId = postponedState.nextSegmentId;
	  if ("number" === typeof postponedState.replaySlots)
	    return (
	      (onError = createPendingSegment(
	        renderState,
	        0,
	        null,
	        postponedState.rootFormatContext,
	        false,
	        false
	      )),
	      (onError.parentFlushed = true),
	      (children = createRenderTask(
	        renderState,
	        null,
	        children,
	        -1,
	        null,
	        onError,
	        null,
	        null,
	        renderState.abortableTasks,
	        null,
	        postponedState.rootFormatContext,
	        null,
	        emptyTreeContext,
	        null,
	        null
	      )),
	      pushComponentStack(children),
	      renderState.pingedTasks.push(children),
	      renderState
	    );
	  children = createReplayTask(
	    renderState,
	    null,
	    {
	      nodes: postponedState.replayNodes,
	      slots: postponedState.replaySlots,
	      pendingTasks: 0
	    },
	    children,
	    -1,
	    null,
	    null,
	    renderState.abortableTasks,
	    null,
	    postponedState.rootFormatContext,
	    null,
	    emptyTreeContext,
	    null,
	    null
	  );
	  pushComponentStack(children);
	  renderState.pingedTasks.push(children);
	  return renderState;
	}
	function resumeAndPrerenderRequest(
	  children,
	  postponedState,
	  renderState,
	  onError,
	  onAllReady,
	  onShellReady,
	  onShellError,
	  onFatalError,
	  onPostpone
	) {
	  children = resumeRequest(
	    children,
	    postponedState,
	    renderState,
	    onError,
	    onAllReady,
	    onShellReady,
	    onShellError,
	    onFatalError,
	    onPostpone
	  );
	  children.trackedPostpones = {
	    workingMap: new Map(),
	    rootNodes: [],
	    rootSlots: null
	  };
	  return children;
	}
	var currentRequest = null;
	function pingTask(request, task) {
	  request.pingedTasks.push(task);
	  1 === request.pingedTasks.length &&
	    ((request.flushScheduled = null !== request.destination),
	    null !== request.trackedPostpones || 10 === request.status
	      ? scheduleMicrotask(function () {
	          return performWork(request);
	        })
	      : scheduleWork(function () {
	          return performWork(request);
	        }));
	}
	function createSuspenseBoundary(
	  request,
	  row,
	  fallbackAbortableTasks,
	  contentPreamble,
	  fallbackPreamble
	) {
	  fallbackAbortableTasks = {
	    status: 0,
	    rootSegmentID: -1,
	    parentFlushed: false,
	    pendingTasks: 0,
	    row: row,
	    completedSegments: [],
	    byteSize: 0,
	    fallbackAbortableTasks: fallbackAbortableTasks,
	    errorDigest: null,
	    contentState: createHoistableState(),
	    fallbackState: createHoistableState(),
	    contentPreamble: contentPreamble,
	    fallbackPreamble: fallbackPreamble,
	    trackedContentKeyPath: null,
	    trackedFallbackNode: null
	  };
	  null !== row &&
	    (row.pendingTasks++,
	    (contentPreamble = row.boundaries),
	    null !== contentPreamble &&
	      (request.allPendingTasks++,
	      fallbackAbortableTasks.pendingTasks++,
	      contentPreamble.push(fallbackAbortableTasks)),
	    (request = row.inheritedHoistables),
	    null !== request &&
	      hoistHoistables(fallbackAbortableTasks.contentState, request));
	  return fallbackAbortableTasks;
	}
	function createRenderTask(
	  request,
	  thenableState,
	  node,
	  childIndex,
	  blockedBoundary,
	  blockedSegment,
	  blockedPreamble,
	  hoistableState,
	  abortSet,
	  keyPath,
	  formatContext,
	  context,
	  treeContext,
	  row,
	  componentStack
	) {
	  request.allPendingTasks++;
	  null === blockedBoundary
	    ? request.pendingRootTasks++
	    : blockedBoundary.pendingTasks++;
	  null !== row && row.pendingTasks++;
	  var task = {
	    replay: null,
	    node: node,
	    childIndex: childIndex,
	    ping: function () {
	      return pingTask(request, task);
	    },
	    blockedBoundary: blockedBoundary,
	    blockedSegment: blockedSegment,
	    blockedPreamble: blockedPreamble,
	    hoistableState: hoistableState,
	    abortSet: abortSet,
	    keyPath: keyPath,
	    formatContext: formatContext,
	    context: context,
	    treeContext: treeContext,
	    row: row,
	    componentStack: componentStack,
	    thenableState: thenableState
	  };
	  abortSet.add(task);
	  return task;
	}
	function createReplayTask(
	  request,
	  thenableState,
	  replay,
	  node,
	  childIndex,
	  blockedBoundary,
	  hoistableState,
	  abortSet,
	  keyPath,
	  formatContext,
	  context,
	  treeContext,
	  row,
	  componentStack
	) {
	  request.allPendingTasks++;
	  null === blockedBoundary
	    ? request.pendingRootTasks++
	    : blockedBoundary.pendingTasks++;
	  null !== row && row.pendingTasks++;
	  replay.pendingTasks++;
	  var task = {
	    replay: replay,
	    node: node,
	    childIndex: childIndex,
	    ping: function () {
	      return pingTask(request, task);
	    },
	    blockedBoundary: blockedBoundary,
	    blockedSegment: null,
	    blockedPreamble: null,
	    hoistableState: hoistableState,
	    abortSet: abortSet,
	    keyPath: keyPath,
	    formatContext: formatContext,
	    context: context,
	    treeContext: treeContext,
	    row: row,
	    componentStack: componentStack,
	    thenableState: thenableState
	  };
	  abortSet.add(task);
	  return task;
	}
	function createPendingSegment(
	  request,
	  index,
	  boundary,
	  parentFormatContext,
	  lastPushedText,
	  textEmbedded
	) {
	  return {
	    status: 0,
	    parentFlushed: false,
	    id: -1,
	    index: index,
	    chunks: [],
	    children: [],
	    preambleChildren: [],
	    parentFormatContext: parentFormatContext,
	    boundary: boundary,
	    lastPushedText: lastPushedText,
	    textEmbedded: textEmbedded
	  };
	}
	function pushComponentStack(task) {
	  var node = task.node;
	  if ("object" === typeof node && null !== node)
	    switch (node.$$typeof) {
	      case REACT_ELEMENT_TYPE:
	        task.componentStack = { parent: task.componentStack, type: node.type };
	    }
	}
	function replaceSuspenseComponentStackWithSuspenseFallbackStack(
	  componentStack
	) {
	  return null === componentStack
	    ? null
	    : { parent: componentStack.parent, type: "Suspense Fallback" };
	}
	function getThrownInfo(node$jscomp$0) {
	  var errorInfo = {};
	  node$jscomp$0 &&
	    Object.defineProperty(errorInfo, "componentStack", {
	      configurable: true,
	      enumerable: true,
	      get: function () {
	        try {
	          var info = "",
	            node = node$jscomp$0;
	          do
	            (info += describeComponentStackByType(node.type)),
	              (node = node.parent);
	          while (node);
	          var JSCompiler_inline_result = info;
	        } catch (x) {
	          JSCompiler_inline_result =
	            "\nError generating stack: " + x.message + "\n" + x.stack;
	        }
	        Object.defineProperty(errorInfo, "componentStack", {
	          value: JSCompiler_inline_result
	        });
	        return JSCompiler_inline_result;
	      }
	    });
	  return errorInfo;
	}
	function logRecoverableError(request, error, errorInfo) {
	  request = request.onError;
	  error = request(error, errorInfo);
	  if (null == error || "string" === typeof error) return error;
	}
	function fatalError(request, error) {
	  var onShellError = request.onShellError,
	    onFatalError = request.onFatalError;
	  onShellError(error);
	  onFatalError(error);
	  null !== request.destination
	    ? ((request.status = 14), closeWithError(request.destination, error))
	    : ((request.status = 13), (request.fatalError = error));
	}
	function finishSuspenseListRow(request, row) {
	  unblockSuspenseListRow(request, row.next, row.hoistables);
	}
	function unblockSuspenseListRow(request, unblockedRow, inheritedHoistables) {
	  for (; null !== unblockedRow; ) {
	    null !== inheritedHoistables &&
	      (hoistHoistables(unblockedRow.hoistables, inheritedHoistables),
	      (unblockedRow.inheritedHoistables = inheritedHoistables));
	    var unblockedBoundaries = unblockedRow.boundaries;
	    if (null !== unblockedBoundaries) {
	      unblockedRow.boundaries = null;
	      for (var i = 0; i < unblockedBoundaries.length; i++) {
	        var unblockedBoundary = unblockedBoundaries[i];
	        null !== inheritedHoistables &&
	          hoistHoistables(unblockedBoundary.contentState, inheritedHoistables);
	        finishedTask(request, unblockedBoundary, null, null);
	      }
	    }
	    unblockedRow.pendingTasks--;
	    if (0 < unblockedRow.pendingTasks) break;
	    inheritedHoistables = unblockedRow.hoistables;
	    unblockedRow = unblockedRow.next;
	  }
	}
	function tryToResolveTogetherRow(request, togetherRow) {
	  var boundaries = togetherRow.boundaries;
	  if (null !== boundaries && togetherRow.pendingTasks === boundaries.length) {
	    for (var allCompleteAndInlinable = true, i = 0; i < boundaries.length; i++) {
	      var rowBoundary = boundaries[i];
	      if (
	        1 !== rowBoundary.pendingTasks ||
	        rowBoundary.parentFlushed ||
	        isEligibleForOutlining(request, rowBoundary)
	      ) {
	        allCompleteAndInlinable = false;
	        break;
	      }
	    }
	    allCompleteAndInlinable &&
	      unblockSuspenseListRow(request, togetherRow, togetherRow.hoistables);
	  }
	}
	function createSuspenseListRow(previousRow) {
	  var newRow = {
	    pendingTasks: 1,
	    boundaries: null,
	    hoistables: createHoistableState(),
	    inheritedHoistables: null,
	    together: false,
	    next: null
	  };
	  null !== previousRow &&
	    0 < previousRow.pendingTasks &&
	    (newRow.pendingTasks++,
	    (newRow.boundaries = []),
	    (previousRow.next = newRow));
	  return newRow;
	}
	function renderSuspenseListRows(request, task, keyPath, rows, revealOrder) {
	  var prevKeyPath = task.keyPath,
	    prevTreeContext = task.treeContext,
	    prevRow = task.row;
	  task.keyPath = keyPath;
	  keyPath = rows.length;
	  var previousSuspenseListRow = null;
	  if (null !== task.replay) {
	    var resumeSlots = task.replay.slots;
	    if (null !== resumeSlots && "object" === typeof resumeSlots)
	      for (var n = 0; n < keyPath; n++) {
	        var i =
	            "backwards" !== revealOrder &&
	            "unstable_legacy-backwards" !== revealOrder
	              ? n
	              : keyPath - 1 - n,
	          node = rows[i];
	        task.row = previousSuspenseListRow = createSuspenseListRow(
	          previousSuspenseListRow
	        );
	        task.treeContext = pushTreeContext(prevTreeContext, keyPath, i);
	        var resumeSegmentID = resumeSlots[i];
	        "number" === typeof resumeSegmentID
	          ? (resumeNode(request, task, resumeSegmentID, node, i),
	            delete resumeSlots[i])
	          : renderNode(request, task, node, i);
	        0 === --previousSuspenseListRow.pendingTasks &&
	          finishSuspenseListRow(request, previousSuspenseListRow);
	      }
	    else
	      for (resumeSlots = 0; resumeSlots < keyPath; resumeSlots++)
	        (n =
	          "backwards" !== revealOrder &&
	          "unstable_legacy-backwards" !== revealOrder
	            ? resumeSlots
	            : keyPath - 1 - resumeSlots),
	          (i = rows[n]),
	          (task.row = previousSuspenseListRow =
	            createSuspenseListRow(previousSuspenseListRow)),
	          (task.treeContext = pushTreeContext(prevTreeContext, keyPath, n)),
	          renderNode(request, task, i, n),
	          0 === --previousSuspenseListRow.pendingTasks &&
	            finishSuspenseListRow(request, previousSuspenseListRow);
	  } else if (
	    "backwards" !== revealOrder &&
	    "unstable_legacy-backwards" !== revealOrder
	  )
	    for (revealOrder = 0; revealOrder < keyPath; revealOrder++)
	      (resumeSlots = rows[revealOrder]),
	        (task.row = previousSuspenseListRow =
	          createSuspenseListRow(previousSuspenseListRow)),
	        (task.treeContext = pushTreeContext(
	          prevTreeContext,
	          keyPath,
	          revealOrder
	        )),
	        renderNode(request, task, resumeSlots, revealOrder),
	        0 === --previousSuspenseListRow.pendingTasks &&
	          finishSuspenseListRow(request, previousSuspenseListRow);
	  else {
	    revealOrder = task.blockedSegment;
	    resumeSlots = revealOrder.children.length;
	    n = revealOrder.chunks.length;
	    for (i = keyPath - 1; 0 <= i; i--) {
	      node = rows[i];
	      task.row = previousSuspenseListRow = createSuspenseListRow(
	        previousSuspenseListRow
	      );
	      task.treeContext = pushTreeContext(prevTreeContext, keyPath, i);
	      resumeSegmentID = createPendingSegment(
	        request,
	        n,
	        null,
	        task.formatContext,
	        0 === i ? revealOrder.lastPushedText : true,
	        true
	      );
	      revealOrder.children.splice(resumeSlots, 0, resumeSegmentID);
	      task.blockedSegment = resumeSegmentID;
	      try {
	        renderNode(request, task, node, i),
	          resumeSegmentID.lastPushedText &&
	            resumeSegmentID.textEmbedded &&
	            resumeSegmentID.chunks.push(textSeparator),
	          (resumeSegmentID.status = 1),
	          finishedSegment(request, task.blockedBoundary, resumeSegmentID),
	          0 === --previousSuspenseListRow.pendingTasks &&
	            finishSuspenseListRow(request, previousSuspenseListRow);
	      } catch (thrownValue) {
	        throw (
	          ((resumeSegmentID.status = 12 === request.status ? 3 : 4),
	          thrownValue)
	        );
	      }
	    }
	    task.blockedSegment = revealOrder;
	    revealOrder.lastPushedText = false;
	  }
	  null !== prevRow &&
	    null !== previousSuspenseListRow &&
	    0 < previousSuspenseListRow.pendingTasks &&
	    (prevRow.pendingTasks++, (previousSuspenseListRow.next = prevRow));
	  task.treeContext = prevTreeContext;
	  task.row = prevRow;
	  task.keyPath = prevKeyPath;
	}
	function renderWithHooks(request, task, keyPath, Component, props, secondArg) {
	  var prevThenableState = task.thenableState;
	  task.thenableState = null;
	  currentlyRenderingComponent = {};
	  currentlyRenderingTask = task;
	  currentlyRenderingRequest = request;
	  currentlyRenderingKeyPath = keyPath;
	  actionStateCounter = localIdCounter = 0;
	  actionStateMatchingIndex = -1;
	  thenableIndexCounter = 0;
	  thenableState = prevThenableState;
	  for (request = Component(props, secondArg); didScheduleRenderPhaseUpdate; )
	    (didScheduleRenderPhaseUpdate = false),
	      (actionStateCounter = localIdCounter = 0),
	      (actionStateMatchingIndex = -1),
	      (thenableIndexCounter = 0),
	      (numberOfReRenders += 1),
	      (workInProgressHook = null),
	      (request = Component(props, secondArg));
	  resetHooksState();
	  return request;
	}
	function finishFunctionComponent(
	  request,
	  task,
	  keyPath,
	  children,
	  hasId,
	  actionStateCount,
	  actionStateMatchingIndex
	) {
	  var didEmitActionStateMarkers = false;
	  if (0 !== actionStateCount && null !== request.formState) {
	    var segment = task.blockedSegment;
	    if (null !== segment) {
	      didEmitActionStateMarkers = true;
	      segment = segment.chunks;
	      for (var i = 0; i < actionStateCount; i++)
	        i === actionStateMatchingIndex
	          ? segment.push(formStateMarkerIsMatching)
	          : segment.push(formStateMarkerIsNotMatching);
	    }
	  }
	  actionStateCount = task.keyPath;
	  task.keyPath = keyPath;
	  hasId
	    ? ((keyPath = task.treeContext),
	      (task.treeContext = pushTreeContext(keyPath, 1, 0)),
	      renderNode(request, task, children, -1),
	      (task.treeContext = keyPath))
	    : didEmitActionStateMarkers
	      ? renderNode(request, task, children, -1)
	      : renderNodeDestructive(request, task, children, -1);
	  task.keyPath = actionStateCount;
	}
	function renderElement(request, task, keyPath, type, props, ref) {
	  if ("function" === typeof type)
	    if (type.prototype && type.prototype.isReactComponent) {
	      var newProps = props;
	      if ("ref" in props) {
	        newProps = {};
	        for (var propName in props)
	          "ref" !== propName && (newProps[propName] = props[propName]);
	      }
	      var defaultProps = type.defaultProps;
	      if (defaultProps) {
	        newProps === props && (newProps = assign({}, newProps, props));
	        for (var propName$44 in defaultProps)
	          void 0 === newProps[propName$44] &&
	            (newProps[propName$44] = defaultProps[propName$44]);
	      }
	      props = newProps;
	      newProps = emptyContextObject;
	      defaultProps = type.contextType;
	      "object" === typeof defaultProps &&
	        null !== defaultProps &&
	        (newProps = defaultProps._currentValue);
	      newProps = new type(props, newProps);
	      var initialState = void 0 !== newProps.state ? newProps.state : null;
	      newProps.updater = classComponentUpdater;
	      newProps.props = props;
	      newProps.state = initialState;
	      defaultProps = { queue: [], replace: false };
	      newProps._reactInternals = defaultProps;
	      ref = type.contextType;
	      newProps.context =
	        "object" === typeof ref && null !== ref
	          ? ref._currentValue
	          : emptyContextObject;
	      ref = type.getDerivedStateFromProps;
	      "function" === typeof ref &&
	        ((ref = ref(props, initialState)),
	        (initialState =
	          null === ref || void 0 === ref
	            ? initialState
	            : assign({}, initialState, ref)),
	        (newProps.state = initialState));
	      if (
	        "function" !== typeof type.getDerivedStateFromProps &&
	        "function" !== typeof newProps.getSnapshotBeforeUpdate &&
	        ("function" === typeof newProps.UNSAFE_componentWillMount ||
	          "function" === typeof newProps.componentWillMount)
	      )
	        if (
	          ((type = newProps.state),
	          "function" === typeof newProps.componentWillMount &&
	            newProps.componentWillMount(),
	          "function" === typeof newProps.UNSAFE_componentWillMount &&
	            newProps.UNSAFE_componentWillMount(),
	          type !== newProps.state &&
	            classComponentUpdater.enqueueReplaceState(
	              newProps,
	              newProps.state,
	              null
	            ),
	          null !== defaultProps.queue && 0 < defaultProps.queue.length)
	        )
	          if (
	            ((type = defaultProps.queue),
	            (ref = defaultProps.replace),
	            (defaultProps.queue = null),
	            (defaultProps.replace = false),
	            ref && 1 === type.length)
	          )
	            newProps.state = type[0];
	          else {
	            defaultProps = ref ? type[0] : newProps.state;
	            initialState = true;
	            for (ref = ref ? 1 : 0; ref < type.length; ref++)
	              (propName$44 = type[ref]),
	                (propName$44 =
	                  "function" === typeof propName$44
	                    ? propName$44.call(newProps, defaultProps, props, void 0)
	                    : propName$44),
	                null != propName$44 &&
	                  (initialState
	                    ? ((initialState = false),
	                      (defaultProps = assign({}, defaultProps, propName$44)))
	                    : assign(defaultProps, propName$44));
	            newProps.state = defaultProps;
	          }
	        else defaultProps.queue = null;
	      type = newProps.render();
	      if (12 === request.status) throw null;
	      props = task.keyPath;
	      task.keyPath = keyPath;
	      renderNodeDestructive(request, task, type, -1);
	      task.keyPath = props;
	    } else {
	      type = renderWithHooks(request, task, keyPath, type, props, void 0);
	      if (12 === request.status) throw null;
	      finishFunctionComponent(
	        request,
	        task,
	        keyPath,
	        type,
	        0 !== localIdCounter,
	        actionStateCounter,
	        actionStateMatchingIndex
	      );
	    }
	  else if ("string" === typeof type)
	    if (((newProps = task.blockedSegment), null === newProps))
	      (newProps = props.children),
	        (defaultProps = task.formatContext),
	        (initialState = task.keyPath),
	        (task.formatContext = getChildFormatContext(defaultProps, type, props)),
	        (task.keyPath = keyPath),
	        renderNode(request, task, newProps, -1),
	        (task.formatContext = defaultProps),
	        (task.keyPath = initialState);
	    else {
	      initialState = pushStartInstance(
	        newProps.chunks,
	        type,
	        props,
	        request.resumableState,
	        request.renderState,
	        task.blockedPreamble,
	        task.hoistableState,
	        task.formatContext,
	        newProps.lastPushedText
	      );
	      newProps.lastPushedText = false;
	      defaultProps = task.formatContext;
	      ref = task.keyPath;
	      task.keyPath = keyPath;
	      if (
	        3 ===
	        (task.formatContext = getChildFormatContext(defaultProps, type, props))
	          .insertionMode
	      ) {
	        keyPath = createPendingSegment(
	          request,
	          0,
	          null,
	          task.formatContext,
	          false,
	          false
	        );
	        newProps.preambleChildren.push(keyPath);
	        task.blockedSegment = keyPath;
	        try {
	          (keyPath.status = 6),
	            renderNode(request, task, initialState, -1),
	            keyPath.lastPushedText &&
	              keyPath.textEmbedded &&
	              keyPath.chunks.push(textSeparator),
	            (keyPath.status = 1),
	            finishedSegment(request, task.blockedBoundary, keyPath);
	        } finally {
	          task.blockedSegment = newProps;
	        }
	      } else renderNode(request, task, initialState, -1);
	      task.formatContext = defaultProps;
	      task.keyPath = ref;
	      a: {
	        task = newProps.chunks;
	        request = request.resumableState;
	        switch (type) {
	          case "title":
	          case "style":
	          case "script":
	          case "area":
	          case "base":
	          case "br":
	          case "col":
	          case "embed":
	          case "hr":
	          case "img":
	          case "input":
	          case "keygen":
	          case "link":
	          case "meta":
	          case "param":
	          case "source":
	          case "track":
	          case "wbr":
	            break a;
	          case "body":
	            if (1 >= defaultProps.insertionMode) {
	              request.hasBody = true;
	              break a;
	            }
	            break;
	          case "html":
	            if (0 === defaultProps.insertionMode) {
	              request.hasHtml = true;
	              break a;
	            }
	            break;
	          case "head":
	            if (1 >= defaultProps.insertionMode) break a;
	        }
	        task.push(endChunkForTag(type));
	      }
	      newProps.lastPushedText = false;
	    }
	  else {
	    switch (type) {
	      case REACT_LEGACY_HIDDEN_TYPE:
	      case REACT_STRICT_MODE_TYPE:
	      case REACT_PROFILER_TYPE:
	      case REACT_FRAGMENT_TYPE:
	        type = task.keyPath;
	        task.keyPath = keyPath;
	        renderNodeDestructive(request, task, props.children, -1);
	        task.keyPath = type;
	        return;
	      case REACT_ACTIVITY_TYPE:
	        type = task.blockedSegment;
	        null === type
	          ? "hidden" !== props.mode &&
	            ((type = task.keyPath),
	            (task.keyPath = keyPath),
	            renderNode(request, task, props.children, -1),
	            (task.keyPath = type))
	          : "hidden" !== props.mode &&
	            (type.chunks.push(startActivityBoundary),
	            (type.lastPushedText = false),
	            (newProps = task.keyPath),
	            (task.keyPath = keyPath),
	            renderNode(request, task, props.children, -1),
	            (task.keyPath = newProps),
	            type.chunks.push(endActivityBoundary),
	            (type.lastPushedText = false));
	        return;
	      case REACT_SUSPENSE_LIST_TYPE:
	        a: {
	          type = props.children;
	          props = props.revealOrder;
	          if (
	            "forwards" === props ||
	            "backwards" === props ||
	            "unstable_legacy-backwards" === props
	          ) {
	            if (isArrayImpl(type)) {
	              renderSuspenseListRows(request, task, keyPath, type, props);
	              break a;
	            }
	            if ((newProps = getIteratorFn(type)))
	              if ((newProps = newProps.call(type))) {
	                defaultProps = newProps.next();
	                if (!defaultProps.done) {
	                  do defaultProps = newProps.next();
	                  while (!defaultProps.done);
	                  renderSuspenseListRows(request, task, keyPath, type, props);
	                }
	                break a;
	              }
	          }
	          "together" === props
	            ? ((props = task.keyPath),
	              (newProps = task.row),
	              (defaultProps = task.row = createSuspenseListRow(null)),
	              (defaultProps.boundaries = []),
	              (defaultProps.together = true),
	              (task.keyPath = keyPath),
	              renderNodeDestructive(request, task, type, -1),
	              0 === --defaultProps.pendingTasks &&
	                finishSuspenseListRow(request, defaultProps),
	              (task.keyPath = props),
	              (task.row = newProps),
	              null !== newProps &&
	                0 < defaultProps.pendingTasks &&
	                (newProps.pendingTasks++, (defaultProps.next = newProps)))
	            : ((props = task.keyPath),
	              (task.keyPath = keyPath),
	              renderNodeDestructive(request, task, type, -1),
	              (task.keyPath = props));
	        }
	        return;
	      case REACT_VIEW_TRANSITION_TYPE:
	      case REACT_SCOPE_TYPE:
	        throw Error(formatProdErrorMessage(343));
	      case REACT_SUSPENSE_TYPE:
	        a: if (null !== task.replay) {
	          type = task.keyPath;
	          newProps = task.formatContext;
	          defaultProps = task.row;
	          task.keyPath = keyPath;
	          task.formatContext = getSuspenseContentFormatContext(
	            request.resumableState,
	            newProps
	          );
	          task.row = null;
	          keyPath = props.children;
	          try {
	            renderNode(request, task, keyPath, -1);
	          } finally {
	            (task.keyPath = type),
	              (task.formatContext = newProps),
	              (task.row = defaultProps);
	          }
	        } else {
	          type = task.keyPath;
	          ref = task.formatContext;
	          var prevRow = task.row;
	          propName$44 = task.blockedBoundary;
	          propName = task.blockedPreamble;
	          var parentHoistableState = task.hoistableState,
	            parentSegment = task.blockedSegment,
	            fallback = props.fallback;
	          props = props.children;
	          var fallbackAbortSet = new Set();
	          var newBoundary =
	            2 > task.formatContext.insertionMode
	              ? createSuspenseBoundary(
	                  request,
	                  task.row,
	                  fallbackAbortSet,
	                  createPreambleState(),
	                  createPreambleState()
	                )
	              : createSuspenseBoundary(
	                  request,
	                  task.row,
	                  fallbackAbortSet,
	                  null,
	                  null
	                );
	          null !== request.trackedPostpones &&
	            (newBoundary.trackedContentKeyPath = keyPath);
	          var boundarySegment = createPendingSegment(
	            request,
	            parentSegment.chunks.length,
	            newBoundary,
	            task.formatContext,
	            false,
	            false
	          );
	          parentSegment.children.push(boundarySegment);
	          parentSegment.lastPushedText = false;
	          var contentRootSegment = createPendingSegment(
	            request,
	            0,
	            null,
	            task.formatContext,
	            false,
	            false
	          );
	          contentRootSegment.parentFlushed = true;
	          if (null !== request.trackedPostpones) {
	            newProps = task.componentStack;
	            defaultProps = [keyPath[0], "Suspense Fallback", keyPath[2]];
	            initialState = [defaultProps[1], defaultProps[2], [], null];
	            request.trackedPostpones.workingMap.set(defaultProps, initialState);
	            newBoundary.trackedFallbackNode = initialState;
	            task.blockedSegment = boundarySegment;
	            task.blockedPreamble = newBoundary.fallbackPreamble;
	            task.keyPath = defaultProps;
	            task.formatContext = getSuspenseFallbackFormatContext(
	              request.resumableState,
	              ref
	            );
	            task.componentStack =
	              replaceSuspenseComponentStackWithSuspenseFallbackStack(newProps);
	            boundarySegment.status = 6;
	            try {
	              renderNode(request, task, fallback, -1),
	                boundarySegment.lastPushedText &&
	                  boundarySegment.textEmbedded &&
	                  boundarySegment.chunks.push(textSeparator),
	                (boundarySegment.status = 1),
	                finishedSegment(request, propName$44, boundarySegment);
	            } catch (thrownValue) {
	              throw (
	                ((boundarySegment.status = 12 === request.status ? 3 : 4),
	                thrownValue)
	              );
	            } finally {
	              (task.blockedSegment = parentSegment),
	                (task.blockedPreamble = propName),
	                (task.keyPath = type),
	                (task.formatContext = ref);
	            }
	            task = createRenderTask(
	              request,
	              null,
	              props,
	              -1,
	              newBoundary,
	              contentRootSegment,
	              newBoundary.contentPreamble,
	              newBoundary.contentState,
	              task.abortSet,
	              keyPath,
	              getSuspenseContentFormatContext(
	                request.resumableState,
	                task.formatContext
	              ),
	              task.context,
	              task.treeContext,
	              null,
	              newProps
	            );
	            pushComponentStack(task);
	            request.pingedTasks.push(task);
	          } else {
	            task.blockedBoundary = newBoundary;
	            task.blockedPreamble = newBoundary.contentPreamble;
	            task.hoistableState = newBoundary.contentState;
	            task.blockedSegment = contentRootSegment;
	            task.keyPath = keyPath;
	            task.formatContext = getSuspenseContentFormatContext(
	              request.resumableState,
	              ref
	            );
	            task.row = null;
	            contentRootSegment.status = 6;
	            try {
	              if (
	                (renderNode(request, task, props, -1),
	                contentRootSegment.lastPushedText &&
	                  contentRootSegment.textEmbedded &&
	                  contentRootSegment.chunks.push(textSeparator),
	                (contentRootSegment.status = 1),
	                finishedSegment(request, newBoundary, contentRootSegment),
	                queueCompletedSegment(newBoundary, contentRootSegment),
	                0 === newBoundary.pendingTasks && 0 === newBoundary.status)
	              ) {
	                if (
	                  ((newBoundary.status = 1),
	                  !isEligibleForOutlining(request, newBoundary))
	                ) {
	                  null !== prevRow &&
	                    0 === --prevRow.pendingTasks &&
	                    finishSuspenseListRow(request, prevRow);
	                  0 === request.pendingRootTasks &&
	                    task.blockedPreamble &&
	                    preparePreamble(request);
	                  break a;
	                }
	              } else
	                null !== prevRow &&
	                  prevRow.together &&
	                  tryToResolveTogetherRow(request, prevRow);
	            } catch (thrownValue$31) {
	              (newBoundary.status = 4),
	                12 === request.status
	                  ? ((contentRootSegment.status = 3),
	                    (newProps = request.fatalError))
	                  : ((contentRootSegment.status = 4),
	                    (newProps = thrownValue$31)),
	                (defaultProps = getThrownInfo(task.componentStack)),
	                (initialState = logRecoverableError(
	                  request,
	                  newProps,
	                  defaultProps
	                )),
	                (newBoundary.errorDigest = initialState),
	                untrackBoundary(request, newBoundary);
	            } finally {
	              (task.blockedBoundary = propName$44),
	                (task.blockedPreamble = propName),
	                (task.hoistableState = parentHoistableState),
	                (task.blockedSegment = parentSegment),
	                (task.keyPath = type),
	                (task.formatContext = ref),
	                (task.row = prevRow);
	            }
	            task = createRenderTask(
	              request,
	              null,
	              fallback,
	              -1,
	              propName$44,
	              boundarySegment,
	              newBoundary.fallbackPreamble,
	              newBoundary.fallbackState,
	              fallbackAbortSet,
	              [keyPath[0], "Suspense Fallback", keyPath[2]],
	              getSuspenseFallbackFormatContext(
	                request.resumableState,
	                task.formatContext
	              ),
	              task.context,
	              task.treeContext,
	              task.row,
	              replaceSuspenseComponentStackWithSuspenseFallbackStack(
	                task.componentStack
	              )
	            );
	            pushComponentStack(task);
	            request.pingedTasks.push(task);
	          }
	        }
	        return;
	    }
	    if ("object" === typeof type && null !== type)
	      switch (type.$$typeof) {
	        case REACT_FORWARD_REF_TYPE:
	          if ("ref" in props)
	            for (parentSegment in ((newProps = {}), props))
	              "ref" !== parentSegment &&
	                (newProps[parentSegment] = props[parentSegment]);
	          else newProps = props;
	          type = renderWithHooks(
	            request,
	            task,
	            keyPath,
	            type.render,
	            newProps,
	            ref
	          );
	          finishFunctionComponent(
	            request,
	            task,
	            keyPath,
	            type,
	            0 !== localIdCounter,
	            actionStateCounter,
	            actionStateMatchingIndex
	          );
	          return;
	        case REACT_MEMO_TYPE:
	          renderElement(request, task, keyPath, type.type, props, ref);
	          return;
	        case REACT_CONTEXT_TYPE:
	          defaultProps = props.children;
	          newProps = task.keyPath;
	          props = props.value;
	          initialState = type._currentValue;
	          type._currentValue = props;
	          ref = currentActiveSnapshot;
	          currentActiveSnapshot = type = {
	            parent: ref,
	            depth: null === ref ? 0 : ref.depth + 1,
	            context: type,
	            parentValue: initialState,
	            value: props
	          };
	          task.context = type;
	          task.keyPath = keyPath;
	          renderNodeDestructive(request, task, defaultProps, -1);
	          request = currentActiveSnapshot;
	          if (null === request) throw Error(formatProdErrorMessage(403));
	          request.context._currentValue = request.parentValue;
	          request = currentActiveSnapshot = request.parent;
	          task.context = request;
	          task.keyPath = newProps;
	          return;
	        case REACT_CONSUMER_TYPE:
	          props = props.children;
	          type = props(type._context._currentValue);
	          props = task.keyPath;
	          task.keyPath = keyPath;
	          renderNodeDestructive(request, task, type, -1);
	          task.keyPath = props;
	          return;
	        case REACT_LAZY_TYPE:
	          newProps = type._init;
	          type = newProps(type._payload);
	          if (12 === request.status) throw null;
	          renderElement(request, task, keyPath, type, props, ref);
	          return;
	      }
	    throw Error(
	      formatProdErrorMessage(130, null == type ? type : typeof type, "")
	    );
	  }
	}
	function resumeNode(request, task, segmentId, node, childIndex) {
	  var prevReplay = task.replay,
	    blockedBoundary = task.blockedBoundary,
	    resumedSegment = createPendingSegment(
	      request,
	      0,
	      null,
	      task.formatContext,
	      false,
	      false
	    );
	  resumedSegment.id = segmentId;
	  resumedSegment.parentFlushed = true;
	  try {
	    (task.replay = null),
	      (task.blockedSegment = resumedSegment),
	      renderNode(request, task, node, childIndex),
	      (resumedSegment.status = 1),
	      finishedSegment(request, blockedBoundary, resumedSegment),
	      null === blockedBoundary
	        ? (request.completedRootSegment = resumedSegment)
	        : (queueCompletedSegment(blockedBoundary, resumedSegment),
	          blockedBoundary.parentFlushed &&
	            request.partialBoundaries.push(blockedBoundary));
	  } finally {
	    (task.replay = prevReplay), (task.blockedSegment = null);
	  }
	}
	function renderNodeDestructive(request, task, node, childIndex) {
	  null !== task.replay && "number" === typeof task.replay.slots
	    ? resumeNode(request, task, task.replay.slots, node, childIndex)
	    : ((task.node = node),
	      (task.childIndex = childIndex),
	      (node = task.componentStack),
	      pushComponentStack(task),
	      retryNode(request, task),
	      (task.componentStack = node));
	}
	function retryNode(request, task) {
	  var node = task.node,
	    childIndex = task.childIndex;
	  if (null !== node) {
	    if ("object" === typeof node) {
	      switch (node.$$typeof) {
	        case REACT_ELEMENT_TYPE:
	          var type = node.type,
	            key = node.key,
	            props = node.props;
	          node = props.ref;
	          var ref = void 0 !== node ? node : null,
	            name = getComponentNameFromType(type),
	            keyOrIndex =
	              null == key ? (-1 === childIndex ? 0 : childIndex) : key;
	          key = [task.keyPath, name, keyOrIndex];
	          if (null !== task.replay)
	            a: {
	              var replay = task.replay;
	              childIndex = replay.nodes;
	              for (node = 0; node < childIndex.length; node++) {
	                var node$jscomp$0 = childIndex[node];
	                if (keyOrIndex === node$jscomp$0[1]) {
	                  if (4 === node$jscomp$0.length) {
	                    if (null !== name && name !== node$jscomp$0[0])
	                      throw Error(
	                        formatProdErrorMessage(490, node$jscomp$0[0], name)
	                      );
	                    var childNodes = node$jscomp$0[2];
	                    name = node$jscomp$0[3];
	                    keyOrIndex = task.node;
	                    task.replay = {
	                      nodes: childNodes,
	                      slots: name,
	                      pendingTasks: 1
	                    };
	                    try {
	                      renderElement(request, task, key, type, props, ref);
	                      if (
	                        1 === task.replay.pendingTasks &&
	                        0 < task.replay.nodes.length
	                      )
	                        throw Error(formatProdErrorMessage(488));
	                      task.replay.pendingTasks--;
	                    } catch (x) {
	                      if (
	                        "object" === typeof x &&
	                        null !== x &&
	                        (x === SuspenseException ||
	                          "function" === typeof x.then)
	                      )
	                        throw (
	                          (task.node === keyOrIndex
	                            ? (task.replay = replay)
	                            : childIndex.splice(node, 1),
	                          x)
	                        );
	                      task.replay.pendingTasks--;
	                      props = getThrownInfo(task.componentStack);
	                      key = request;
	                      request = task.blockedBoundary;
	                      type = x;
	                      props = logRecoverableError(key, type, props);
	                      abortRemainingReplayNodes(
	                        key,
	                        request,
	                        childNodes,
	                        name,
	                        type,
	                        props
	                      );
	                    }
	                    task.replay = replay;
	                  } else {
	                    if (type !== REACT_SUSPENSE_TYPE)
	                      throw Error(
	                        formatProdErrorMessage(
	                          490,
	                          "Suspense",
	                          getComponentNameFromType(type) || "Unknown"
	                        )
	                      );
	                    b: {
	                      replay = void 0;
	                      type = node$jscomp$0[5];
	                      ref = node$jscomp$0[2];
	                      name = node$jscomp$0[3];
	                      keyOrIndex =
	                        null === node$jscomp$0[4] ? [] : node$jscomp$0[4][2];
	                      node$jscomp$0 =
	                        null === node$jscomp$0[4] ? null : node$jscomp$0[4][3];
	                      var prevKeyPath = task.keyPath,
	                        prevContext = task.formatContext,
	                        prevRow = task.row,
	                        previousReplaySet = task.replay,
	                        parentBoundary = task.blockedBoundary,
	                        parentHoistableState = task.hoistableState,
	                        content = props.children,
	                        fallback = props.fallback,
	                        fallbackAbortSet = new Set();
	                      props =
	                        2 > task.formatContext.insertionMode
	                          ? createSuspenseBoundary(
	                              request,
	                              task.row,
	                              fallbackAbortSet,
	                              createPreambleState(),
	                              createPreambleState()
	                            )
	                          : createSuspenseBoundary(
	                              request,
	                              task.row,
	                              fallbackAbortSet,
	                              null,
	                              null
	                            );
	                      props.parentFlushed = true;
	                      props.rootSegmentID = type;
	                      task.blockedBoundary = props;
	                      task.hoistableState = props.contentState;
	                      task.keyPath = key;
	                      task.formatContext = getSuspenseContentFormatContext(
	                        request.resumableState,
	                        prevContext
	                      );
	                      task.row = null;
	                      task.replay = {
	                        nodes: ref,
	                        slots: name,
	                        pendingTasks: 1
	                      };
	                      try {
	                        renderNode(request, task, content, -1);
	                        if (
	                          1 === task.replay.pendingTasks &&
	                          0 < task.replay.nodes.length
	                        )
	                          throw Error(formatProdErrorMessage(488));
	                        task.replay.pendingTasks--;
	                        if (0 === props.pendingTasks && 0 === props.status) {
	                          props.status = 1;
	                          request.completedBoundaries.push(props);
	                          break b;
	                        }
	                      } catch (error) {
	                        (props.status = 4),
	                          (childNodes = getThrownInfo(task.componentStack)),
	                          (replay = logRecoverableError(
	                            request,
	                            error,
	                            childNodes
	                          )),
	                          (props.errorDigest = replay),
	                          task.replay.pendingTasks--,
	                          request.clientRenderedBoundaries.push(props);
	                      } finally {
	                        (task.blockedBoundary = parentBoundary),
	                          (task.hoistableState = parentHoistableState),
	                          (task.replay = previousReplaySet),
	                          (task.keyPath = prevKeyPath),
	                          (task.formatContext = prevContext),
	                          (task.row = prevRow);
	                      }
	                      childNodes = createReplayTask(
	                        request,
	                        null,
	                        {
	                          nodes: keyOrIndex,
	                          slots: node$jscomp$0,
	                          pendingTasks: 0
	                        },
	                        fallback,
	                        -1,
	                        parentBoundary,
	                        props.fallbackState,
	                        fallbackAbortSet,
	                        [key[0], "Suspense Fallback", key[2]],
	                        getSuspenseFallbackFormatContext(
	                          request.resumableState,
	                          task.formatContext
	                        ),
	                        task.context,
	                        task.treeContext,
	                        task.row,
	                        replaceSuspenseComponentStackWithSuspenseFallbackStack(
	                          task.componentStack
	                        )
	                      );
	                      pushComponentStack(childNodes);
	                      request.pingedTasks.push(childNodes);
	                    }
	                  }
	                  childIndex.splice(node, 1);
	                  break a;
	                }
	              }
	            }
	          else renderElement(request, task, key, type, props, ref);
	          return;
	        case REACT_PORTAL_TYPE:
	          throw Error(formatProdErrorMessage(257));
	        case REACT_LAZY_TYPE:
	          childNodes = node._init;
	          node = childNodes(node._payload);
	          if (12 === request.status) throw null;
	          renderNodeDestructive(request, task, node, childIndex);
	          return;
	      }
	      if (isArrayImpl(node)) {
	        renderChildrenArray(request, task, node, childIndex);
	        return;
	      }
	      if ((childNodes = getIteratorFn(node)))
	        if ((childNodes = childNodes.call(node))) {
	          node = childNodes.next();
	          if (!node.done) {
	            props = [];
	            do props.push(node.value), (node = childNodes.next());
	            while (!node.done);
	            renderChildrenArray(request, task, props, childIndex);
	          }
	          return;
	        }
	      if ("function" === typeof node.then)
	        return (
	          (task.thenableState = null),
	          renderNodeDestructive(request, task, unwrapThenable(node), childIndex)
	        );
	      if (node.$$typeof === REACT_CONTEXT_TYPE)
	        return renderNodeDestructive(
	          request,
	          task,
	          node._currentValue,
	          childIndex
	        );
	      childIndex = Object.prototype.toString.call(node);
	      throw Error(
	        formatProdErrorMessage(
	          31,
	          "[object Object]" === childIndex
	            ? "object with keys {" + Object.keys(node).join(", ") + "}"
	            : childIndex
	        )
	      );
	    }
	    if ("string" === typeof node)
	      (childIndex = task.blockedSegment),
	        null !== childIndex &&
	          (childIndex.lastPushedText = pushTextInstance(
	            childIndex.chunks,
	            node,
	            request.renderState,
	            childIndex.lastPushedText
	          ));
	    else if ("number" === typeof node || "bigint" === typeof node)
	      (childIndex = task.blockedSegment),
	        null !== childIndex &&
	          (childIndex.lastPushedText = pushTextInstance(
	            childIndex.chunks,
	            "" + node,
	            request.renderState,
	            childIndex.lastPushedText
	          ));
	  }
	}
	function renderChildrenArray(request, task, children, childIndex) {
	  var prevKeyPath = task.keyPath;
	  if (
	    -1 !== childIndex &&
	    ((task.keyPath = [task.keyPath, "Fragment", childIndex]),
	    null !== task.replay)
	  ) {
	    for (
	      var replay = task.replay, replayNodes = replay.nodes, j = 0;
	      j < replayNodes.length;
	      j++
	    ) {
	      var node = replayNodes[j];
	      if (node[1] === childIndex) {
	        childIndex = node[2];
	        node = node[3];
	        task.replay = { nodes: childIndex, slots: node, pendingTasks: 1 };
	        try {
	          renderChildrenArray(request, task, children, -1);
	          if (1 === task.replay.pendingTasks && 0 < task.replay.nodes.length)
	            throw Error(formatProdErrorMessage(488));
	          task.replay.pendingTasks--;
	        } catch (x) {
	          if (
	            "object" === typeof x &&
	            null !== x &&
	            (x === SuspenseException || "function" === typeof x.then)
	          )
	            throw x;
	          task.replay.pendingTasks--;
	          children = getThrownInfo(task.componentStack);
	          var boundary = task.blockedBoundary,
	            error = x;
	          children = logRecoverableError(request, error, children);
	          abortRemainingReplayNodes(
	            request,
	            boundary,
	            childIndex,
	            node,
	            error,
	            children
	          );
	        }
	        task.replay = replay;
	        replayNodes.splice(j, 1);
	        break;
	      }
	    }
	    task.keyPath = prevKeyPath;
	    return;
	  }
	  replay = task.treeContext;
	  replayNodes = children.length;
	  if (
	    null !== task.replay &&
	    ((j = task.replay.slots), null !== j && "object" === typeof j)
	  ) {
	    for (childIndex = 0; childIndex < replayNodes; childIndex++)
	      (node = children[childIndex]),
	        (task.treeContext = pushTreeContext(replay, replayNodes, childIndex)),
	        (boundary = j[childIndex]),
	        "number" === typeof boundary
	          ? (resumeNode(request, task, boundary, node, childIndex),
	            delete j[childIndex])
	          : renderNode(request, task, node, childIndex);
	    task.treeContext = replay;
	    task.keyPath = prevKeyPath;
	    return;
	  }
	  for (j = 0; j < replayNodes; j++)
	    (childIndex = children[j]),
	      (task.treeContext = pushTreeContext(replay, replayNodes, j)),
	      renderNode(request, task, childIndex, j);
	  task.treeContext = replay;
	  task.keyPath = prevKeyPath;
	}
	function trackPostponedBoundary(request, trackedPostpones, boundary) {
	  boundary.status = 5;
	  boundary.rootSegmentID = request.nextSegmentId++;
	  request = boundary.trackedContentKeyPath;
	  if (null === request) throw Error(formatProdErrorMessage(486));
	  var fallbackReplayNode = boundary.trackedFallbackNode,
	    children = [],
	    boundaryNode = trackedPostpones.workingMap.get(request);
	  if (void 0 === boundaryNode)
	    return (
	      (boundary = [
	        request[1],
	        request[2],
	        children,
	        null,
	        fallbackReplayNode,
	        boundary.rootSegmentID
	      ]),
	      trackedPostpones.workingMap.set(request, boundary),
	      addToReplayParent(boundary, request[0], trackedPostpones),
	      boundary
	    );
	  boundaryNode[4] = fallbackReplayNode;
	  boundaryNode[5] = boundary.rootSegmentID;
	  return boundaryNode;
	}
	function trackPostpone(request, trackedPostpones, task, segment) {
	  segment.status = 5;
	  var keyPath = task.keyPath,
	    boundary = task.blockedBoundary;
	  if (null === boundary)
	    (segment.id = request.nextSegmentId++),
	      (trackedPostpones.rootSlots = segment.id),
	      null !== request.completedRootSegment &&
	        (request.completedRootSegment.status = 5);
	  else {
	    if (null !== boundary && 0 === boundary.status) {
	      var boundaryNode = trackPostponedBoundary(
	        request,
	        trackedPostpones,
	        boundary
	      );
	      if (
	        boundary.trackedContentKeyPath === keyPath &&
	        -1 === task.childIndex
	      ) {
	        -1 === segment.id &&
	          (segment.id = segment.parentFlushed
	            ? boundary.rootSegmentID
	            : request.nextSegmentId++);
	        boundaryNode[3] = segment.id;
	        return;
	      }
	    }
	    -1 === segment.id &&
	      (segment.id =
	        segment.parentFlushed && null !== boundary
	          ? boundary.rootSegmentID
	          : request.nextSegmentId++);
	    if (-1 === task.childIndex)
	      null === keyPath
	        ? (trackedPostpones.rootSlots = segment.id)
	        : ((task = trackedPostpones.workingMap.get(keyPath)),
	          void 0 === task
	            ? ((task = [keyPath[1], keyPath[2], [], segment.id]),
	              addToReplayParent(task, keyPath[0], trackedPostpones))
	            : (task[3] = segment.id));
	    else {
	      if (null === keyPath)
	        if (((request = trackedPostpones.rootSlots), null === request))
	          request = trackedPostpones.rootSlots = {};
	        else {
	          if ("number" === typeof request)
	            throw Error(formatProdErrorMessage(491));
	        }
	      else if (
	        ((boundary = trackedPostpones.workingMap),
	        (boundaryNode = boundary.get(keyPath)),
	        void 0 === boundaryNode)
	      )
	        (request = {}),
	          (boundaryNode = [keyPath[1], keyPath[2], [], request]),
	          boundary.set(keyPath, boundaryNode),
	          addToReplayParent(boundaryNode, keyPath[0], trackedPostpones);
	      else if (((request = boundaryNode[3]), null === request))
	        request = boundaryNode[3] = {};
	      else if ("number" === typeof request)
	        throw Error(formatProdErrorMessage(491));
	      request[task.childIndex] = segment.id;
	    }
	  }
	}
	function untrackBoundary(request, boundary) {
	  request = request.trackedPostpones;
	  null !== request &&
	    ((boundary = boundary.trackedContentKeyPath),
	    null !== boundary &&
	      ((boundary = request.workingMap.get(boundary)),
	      void 0 !== boundary &&
	        ((boundary.length = 4), (boundary[2] = []), (boundary[3] = null))));
	}
	function spawnNewSuspendedReplayTask(request, task, thenableState) {
	  return createReplayTask(
	    request,
	    thenableState,
	    task.replay,
	    task.node,
	    task.childIndex,
	    task.blockedBoundary,
	    task.hoistableState,
	    task.abortSet,
	    task.keyPath,
	    task.formatContext,
	    task.context,
	    task.treeContext,
	    task.row,
	    task.componentStack
	  );
	}
	function spawnNewSuspendedRenderTask(request, task, thenableState) {
	  var segment = task.blockedSegment,
	    newSegment = createPendingSegment(
	      request,
	      segment.chunks.length,
	      null,
	      task.formatContext,
	      segment.lastPushedText,
	      true
	    );
	  segment.children.push(newSegment);
	  segment.lastPushedText = false;
	  return createRenderTask(
	    request,
	    thenableState,
	    task.node,
	    task.childIndex,
	    task.blockedBoundary,
	    newSegment,
	    task.blockedPreamble,
	    task.hoistableState,
	    task.abortSet,
	    task.keyPath,
	    task.formatContext,
	    task.context,
	    task.treeContext,
	    task.row,
	    task.componentStack
	  );
	}
	function renderNode(request, task, node, childIndex) {
	  var previousFormatContext = task.formatContext,
	    previousContext = task.context,
	    previousKeyPath = task.keyPath,
	    previousTreeContext = task.treeContext,
	    previousComponentStack = task.componentStack,
	    segment = task.blockedSegment;
	  if (null === segment) {
	    segment = task.replay;
	    try {
	      return renderNodeDestructive(request, task, node, childIndex);
	    } catch (thrownValue) {
	      if (
	        (resetHooksState(),
	        (node =
	          thrownValue === SuspenseException
	            ? getSuspendedThenable()
	            : thrownValue),
	        12 !== request.status && "object" === typeof node && null !== node)
	      ) {
	        if ("function" === typeof node.then) {
	          childIndex =
	            thrownValue === SuspenseException
	              ? getThenableStateAfterSuspending()
	              : null;
	          request = spawnNewSuspendedReplayTask(request, task, childIndex).ping;
	          node.then(request, request);
	          task.formatContext = previousFormatContext;
	          task.context = previousContext;
	          task.keyPath = previousKeyPath;
	          task.treeContext = previousTreeContext;
	          task.componentStack = previousComponentStack;
	          task.replay = segment;
	          switchContext(previousContext);
	          return;
	        }
	        if ("Maximum call stack size exceeded" === node.message) {
	          node =
	            thrownValue === SuspenseException
	              ? getThenableStateAfterSuspending()
	              : null;
	          node = spawnNewSuspendedReplayTask(request, task, node);
	          request.pingedTasks.push(node);
	          task.formatContext = previousFormatContext;
	          task.context = previousContext;
	          task.keyPath = previousKeyPath;
	          task.treeContext = previousTreeContext;
	          task.componentStack = previousComponentStack;
	          task.replay = segment;
	          switchContext(previousContext);
	          return;
	        }
	      }
	    }
	  } else {
	    var childrenLength = segment.children.length,
	      chunkLength = segment.chunks.length;
	    try {
	      return renderNodeDestructive(request, task, node, childIndex);
	    } catch (thrownValue$63) {
	      if (
	        (resetHooksState(),
	        (segment.children.length = childrenLength),
	        (segment.chunks.length = chunkLength),
	        (node =
	          thrownValue$63 === SuspenseException
	            ? getSuspendedThenable()
	            : thrownValue$63),
	        12 !== request.status && "object" === typeof node && null !== node)
	      ) {
	        if ("function" === typeof node.then) {
	          segment = node;
	          node =
	            thrownValue$63 === SuspenseException
	              ? getThenableStateAfterSuspending()
	              : null;
	          request = spawnNewSuspendedRenderTask(request, task, node).ping;
	          segment.then(request, request);
	          task.formatContext = previousFormatContext;
	          task.context = previousContext;
	          task.keyPath = previousKeyPath;
	          task.treeContext = previousTreeContext;
	          task.componentStack = previousComponentStack;
	          switchContext(previousContext);
	          return;
	        }
	        if ("Maximum call stack size exceeded" === node.message) {
	          segment =
	            thrownValue$63 === SuspenseException
	              ? getThenableStateAfterSuspending()
	              : null;
	          segment = spawnNewSuspendedRenderTask(request, task, segment);
	          request.pingedTasks.push(segment);
	          task.formatContext = previousFormatContext;
	          task.context = previousContext;
	          task.keyPath = previousKeyPath;
	          task.treeContext = previousTreeContext;
	          task.componentStack = previousComponentStack;
	          switchContext(previousContext);
	          return;
	        }
	      }
	    }
	  }
	  task.formatContext = previousFormatContext;
	  task.context = previousContext;
	  task.keyPath = previousKeyPath;
	  task.treeContext = previousTreeContext;
	  switchContext(previousContext);
	  throw node;
	}
	function abortTaskSoft(task) {
	  var boundary = task.blockedBoundary,
	    segment = task.blockedSegment;
	  null !== segment &&
	    ((segment.status = 3), finishedTask(this, boundary, task.row, segment));
	}
	function abortRemainingReplayNodes(
	  request$jscomp$0,
	  boundary,
	  nodes,
	  slots,
	  error,
	  errorDigest$jscomp$0
	) {
	  for (var i = 0; i < nodes.length; i++) {
	    var node = nodes[i];
	    if (4 === node.length)
	      abortRemainingReplayNodes(
	        request$jscomp$0,
	        boundary,
	        node[2],
	        node[3],
	        error,
	        errorDigest$jscomp$0
	      );
	    else {
	      node = node[5];
	      var request = request$jscomp$0,
	        errorDigest = errorDigest$jscomp$0,
	        resumedBoundary = createSuspenseBoundary(
	          request,
	          null,
	          new Set(),
	          null,
	          null
	        );
	      resumedBoundary.parentFlushed = true;
	      resumedBoundary.rootSegmentID = node;
	      resumedBoundary.status = 4;
	      resumedBoundary.errorDigest = errorDigest;
	      resumedBoundary.parentFlushed &&
	        request.clientRenderedBoundaries.push(resumedBoundary);
	    }
	  }
	  nodes.length = 0;
	  if (null !== slots) {
	    if (null === boundary) throw Error(formatProdErrorMessage(487));
	    4 !== boundary.status &&
	      ((boundary.status = 4),
	      (boundary.errorDigest = errorDigest$jscomp$0),
	      boundary.parentFlushed &&
	        request$jscomp$0.clientRenderedBoundaries.push(boundary));
	    if ("object" === typeof slots) for (var index in slots) delete slots[index];
	  }
	}
	function abortTask(task, request, error) {
	  var boundary = task.blockedBoundary,
	    segment = task.blockedSegment;
	  if (null !== segment) {
	    if (6 === segment.status) return;
	    segment.status = 3;
	  }
	  var errorInfo = getThrownInfo(task.componentStack);
	  if (null === boundary) {
	    if (13 !== request.status && 14 !== request.status) {
	      boundary = task.replay;
	      if (null === boundary) {
	        null !== request.trackedPostpones && null !== segment
	          ? ((boundary = request.trackedPostpones),
	            logRecoverableError(request, error, errorInfo),
	            trackPostpone(request, boundary, task, segment),
	            finishedTask(request, null, task.row, segment))
	          : (logRecoverableError(request, error, errorInfo),
	            fatalError(request, error));
	        return;
	      }
	      boundary.pendingTasks--;
	      0 === boundary.pendingTasks &&
	        0 < boundary.nodes.length &&
	        ((segment = logRecoverableError(request, error, errorInfo)),
	        abortRemainingReplayNodes(
	          request,
	          null,
	          boundary.nodes,
	          boundary.slots,
	          error,
	          segment
	        ));
	      request.pendingRootTasks--;
	      0 === request.pendingRootTasks && completeShell(request);
	    }
	  } else {
	    var trackedPostpones$64 = request.trackedPostpones;
	    if (4 !== boundary.status) {
	      if (null !== trackedPostpones$64 && null !== segment)
	        return (
	          logRecoverableError(request, error, errorInfo),
	          trackPostpone(request, trackedPostpones$64, task, segment),
	          boundary.fallbackAbortableTasks.forEach(function (fallbackTask) {
	            return abortTask(fallbackTask, request, error);
	          }),
	          boundary.fallbackAbortableTasks.clear(),
	          finishedTask(request, boundary, task.row, segment)
	        );
	      boundary.status = 4;
	      segment = logRecoverableError(request, error, errorInfo);
	      boundary.status = 4;
	      boundary.errorDigest = segment;
	      untrackBoundary(request, boundary);
	      boundary.parentFlushed && request.clientRenderedBoundaries.push(boundary);
	    }
	    boundary.pendingTasks--;
	    segment = boundary.row;
	    null !== segment &&
	      0 === --segment.pendingTasks &&
	      finishSuspenseListRow(request, segment);
	    boundary.fallbackAbortableTasks.forEach(function (fallbackTask) {
	      return abortTask(fallbackTask, request, error);
	    });
	    boundary.fallbackAbortableTasks.clear();
	  }
	  task = task.row;
	  null !== task &&
	    0 === --task.pendingTasks &&
	    finishSuspenseListRow(request, task);
	  request.allPendingTasks--;
	  0 === request.allPendingTasks && completeAll(request);
	}
	function safelyEmitEarlyPreloads(request, shellComplete) {
	  try {
	    var renderState = request.renderState,
	      onHeaders = renderState.onHeaders;
	    if (onHeaders) {
	      var headers = renderState.headers;
	      if (headers) {
	        renderState.headers = null;
	        var linkHeader = headers.preconnects;
	        headers.fontPreloads &&
	          (linkHeader && (linkHeader += ", "),
	          (linkHeader += headers.fontPreloads));
	        headers.highImagePreloads &&
	          (linkHeader && (linkHeader += ", "),
	          (linkHeader += headers.highImagePreloads));
	        if (!shellComplete) {
	          var queueIter = renderState.styles.values(),
	            queueStep = queueIter.next();
	          b: for (
	            ;
	            0 < headers.remainingCapacity && !queueStep.done;
	            queueStep = queueIter.next()
	          )
	            for (
	              var sheetIter = queueStep.value.sheets.values(),
	                sheetStep = sheetIter.next();
	              0 < headers.remainingCapacity && !sheetStep.done;
	              sheetStep = sheetIter.next()
	            ) {
	              var sheet = sheetStep.value,
	                props = sheet.props,
	                key = props.href,
	                props$jscomp$0 = sheet.props,
	                header = getPreloadAsHeader(props$jscomp$0.href, "style", {
	                  crossOrigin: props$jscomp$0.crossOrigin,
	                  integrity: props$jscomp$0.integrity,
	                  nonce: props$jscomp$0.nonce,
	                  type: props$jscomp$0.type,
	                  fetchPriority: props$jscomp$0.fetchPriority,
	                  referrerPolicy: props$jscomp$0.referrerPolicy,
	                  media: props$jscomp$0.media
	                });
	              if (0 <= (headers.remainingCapacity -= header.length + 2))
	                (renderState.resets.style[key] = PRELOAD_NO_CREDS),
	                  linkHeader && (linkHeader += ", "),
	                  (linkHeader += header),
	                  (renderState.resets.style[key] =
	                    "string" === typeof props.crossOrigin ||
	                    "string" === typeof props.integrity
	                      ? [props.crossOrigin, props.integrity]
	                      : PRELOAD_NO_CREDS);
	              else break b;
	            }
	        }
	        linkHeader ? onHeaders({ Link: linkHeader }) : onHeaders({});
	      }
	    }
	  } catch (error) {
	    logRecoverableError(request, error, {});
	  }
	}
	function completeShell(request) {
	  null === request.trackedPostpones && safelyEmitEarlyPreloads(request, true);
	  null === request.trackedPostpones && preparePreamble(request);
	  request.onShellError = noop;
	  request = request.onShellReady;
	  request();
	}
	function completeAll(request) {
	  safelyEmitEarlyPreloads(
	    request,
	    null === request.trackedPostpones
	      ? true
	      : null === request.completedRootSegment ||
	          5 !== request.completedRootSegment.status
	  );
	  preparePreamble(request);
	  request = request.onAllReady;
	  request();
	}
	function queueCompletedSegment(boundary, segment) {
	  if (
	    0 === segment.chunks.length &&
	    1 === segment.children.length &&
	    null === segment.children[0].boundary &&
	    -1 === segment.children[0].id
	  ) {
	    var childSegment = segment.children[0];
	    childSegment.id = segment.id;
	    childSegment.parentFlushed = true;
	    (1 !== childSegment.status &&
	      3 !== childSegment.status &&
	      4 !== childSegment.status) ||
	      queueCompletedSegment(boundary, childSegment);
	  } else boundary.completedSegments.push(segment);
	}
	function finishedSegment(request, boundary, segment) {
	  if (null !== byteLengthOfChunk) {
	    segment = segment.chunks;
	    for (var segmentByteSize = 0, i = 0; i < segment.length; i++)
	      segmentByteSize += segment[i].byteLength;
	    null === boundary
	      ? (request.byteSize += segmentByteSize)
	      : (boundary.byteSize += segmentByteSize);
	  }
	}
	function finishedTask(request, boundary, row, segment) {
	  null !== row &&
	    (0 === --row.pendingTasks
	      ? finishSuspenseListRow(request, row)
	      : row.together && tryToResolveTogetherRow(request, row));
	  request.allPendingTasks--;
	  if (null === boundary) {
	    if (null !== segment && segment.parentFlushed) {
	      if (null !== request.completedRootSegment)
	        throw Error(formatProdErrorMessage(389));
	      request.completedRootSegment = segment;
	    }
	    request.pendingRootTasks--;
	    0 === request.pendingRootTasks && completeShell(request);
	  } else if ((boundary.pendingTasks--, 4 !== boundary.status))
	    if (0 === boundary.pendingTasks)
	      if (
	        (0 === boundary.status && (boundary.status = 1),
	        null !== segment &&
	          segment.parentFlushed &&
	          (1 === segment.status || 3 === segment.status) &&
	          queueCompletedSegment(boundary, segment),
	        boundary.parentFlushed && request.completedBoundaries.push(boundary),
	        1 === boundary.status)
	      )
	        (row = boundary.row),
	          null !== row &&
	            hoistHoistables(row.hoistables, boundary.contentState),
	          isEligibleForOutlining(request, boundary) ||
	            (boundary.fallbackAbortableTasks.forEach(abortTaskSoft, request),
	            boundary.fallbackAbortableTasks.clear(),
	            null !== row &&
	              0 === --row.pendingTasks &&
	              finishSuspenseListRow(request, row)),
	          0 === request.pendingRootTasks &&
	            null === request.trackedPostpones &&
	            null !== boundary.contentPreamble &&
	            preparePreamble(request);
	      else {
	        if (
	          5 === boundary.status &&
	          ((boundary = boundary.row), null !== boundary)
	        ) {
	          if (null !== request.trackedPostpones) {
	            row = request.trackedPostpones;
	            var postponedRow = boundary.next;
	            if (
	              null !== postponedRow &&
	              ((segment = postponedRow.boundaries), null !== segment)
	            )
	              for (
	                postponedRow.boundaries = null, postponedRow = 0;
	                postponedRow < segment.length;
	                postponedRow++
	              ) {
	                var postponedBoundary = segment[postponedRow];
	                trackPostponedBoundary(request, row, postponedBoundary);
	                finishedTask(request, postponedBoundary, null, null);
	              }
	          }
	          0 === --boundary.pendingTasks &&
	            finishSuspenseListRow(request, boundary);
	        }
	      }
	    else
	      null === segment ||
	        !segment.parentFlushed ||
	        (1 !== segment.status && 3 !== segment.status) ||
	        (queueCompletedSegment(boundary, segment),
	        1 === boundary.completedSegments.length &&
	          boundary.parentFlushed &&
	          request.partialBoundaries.push(boundary)),
	        (boundary = boundary.row),
	        null !== boundary &&
	          boundary.together &&
	          tryToResolveTogetherRow(request, boundary);
	  0 === request.allPendingTasks && completeAll(request);
	}
	function performWork(request$jscomp$2) {
	  if (14 !== request$jscomp$2.status && 13 !== request$jscomp$2.status) {
	    var prevContext = currentActiveSnapshot,
	      prevDispatcher = ReactSharedInternals.H;
	    ReactSharedInternals.H = HooksDispatcher;
	    var prevAsyncDispatcher = ReactSharedInternals.A;
	    ReactSharedInternals.A = DefaultAsyncDispatcher;
	    var prevRequest = currentRequest;
	    currentRequest = request$jscomp$2;
	    var prevResumableState = currentResumableState;
	    currentResumableState = request$jscomp$2.resumableState;
	    try {
	      var pingedTasks = request$jscomp$2.pingedTasks,
	        i;
	      for (i = 0; i < pingedTasks.length; i++) {
	        var task = pingedTasks[i],
	          request = request$jscomp$2,
	          segment = task.blockedSegment;
	        if (null === segment) {
	          var request$jscomp$0 = request;
	          if (0 !== task.replay.pendingTasks) {
	            switchContext(task.context);
	            try {
	              "number" === typeof task.replay.slots
	                ? resumeNode(
	                    request$jscomp$0,
	                    task,
	                    task.replay.slots,
	                    task.node,
	                    task.childIndex
	                  )
	                : retryNode(request$jscomp$0, task);
	              if (
	                1 === task.replay.pendingTasks &&
	                0 < task.replay.nodes.length
	              )
	                throw Error(formatProdErrorMessage(488));
	              task.replay.pendingTasks--;
	              task.abortSet.delete(task);
	              finishedTask(
	                request$jscomp$0,
	                task.blockedBoundary,
	                task.row,
	                null
	              );
	            } catch (thrownValue) {
	              resetHooksState();
	              var x =
	                thrownValue === SuspenseException
	                  ? getSuspendedThenable()
	                  : thrownValue;
	              if (
	                "object" === typeof x &&
	                null !== x &&
	                "function" === typeof x.then
	              ) {
	                var ping = task.ping;
	                x.then(ping, ping);
	                task.thenableState =
	                  thrownValue === SuspenseException
	                    ? getThenableStateAfterSuspending()
	                    : null;
	              } else {
	                task.replay.pendingTasks--;
	                task.abortSet.delete(task);
	                var errorInfo = getThrownInfo(task.componentStack);
	                request = void 0;
	                var request$jscomp$1 = request$jscomp$0,
	                  boundary = task.blockedBoundary,
	                  error$jscomp$0 =
	                    12 === request$jscomp$0.status
	                      ? request$jscomp$0.fatalError
	                      : x,
	                  replayNodes = task.replay.nodes,
	                  resumeSlots = task.replay.slots;
	                request = logRecoverableError(
	                  request$jscomp$1,
	                  error$jscomp$0,
	                  errorInfo
	                );
	                abortRemainingReplayNodes(
	                  request$jscomp$1,
	                  boundary,
	                  replayNodes,
	                  resumeSlots,
	                  error$jscomp$0,
	                  request
	                );
	                request$jscomp$0.pendingRootTasks--;
	                0 === request$jscomp$0.pendingRootTasks &&
	                  completeShell(request$jscomp$0);
	                request$jscomp$0.allPendingTasks--;
	                0 === request$jscomp$0.allPendingTasks &&
	                  completeAll(request$jscomp$0);
	              }
	            } finally {
	            }
	          }
	        } else if (
	          ((request$jscomp$0 = void 0),
	          (request$jscomp$1 = segment),
	          0 === request$jscomp$1.status)
	        ) {
	          request$jscomp$1.status = 6;
	          switchContext(task.context);
	          var childrenLength = request$jscomp$1.children.length,
	            chunkLength = request$jscomp$1.chunks.length;
	          try {
	            retryNode(request, task),
	              request$jscomp$1.lastPushedText &&
	                request$jscomp$1.textEmbedded &&
	                request$jscomp$1.chunks.push(textSeparator),
	              task.abortSet.delete(task),
	              (request$jscomp$1.status = 1),
	              finishedSegment(request, task.blockedBoundary, request$jscomp$1),
	              finishedTask(
	                request,
	                task.blockedBoundary,
	                task.row,
	                request$jscomp$1
	              );
	          } catch (thrownValue) {
	            resetHooksState();
	            request$jscomp$1.children.length = childrenLength;
	            request$jscomp$1.chunks.length = chunkLength;
	            var x$jscomp$0 =
	              thrownValue === SuspenseException
	                ? getSuspendedThenable()
	                : 12 === request.status
	                  ? request.fatalError
	                  : thrownValue;
	            if (12 === request.status && null !== request.trackedPostpones) {
	              var trackedPostpones = request.trackedPostpones,
	                thrownInfo = getThrownInfo(task.componentStack);
	              task.abortSet.delete(task);
	              logRecoverableError(request, x$jscomp$0, thrownInfo);
	              trackPostpone(request, trackedPostpones, task, request$jscomp$1);
	              finishedTask(
	                request,
	                task.blockedBoundary,
	                task.row,
	                request$jscomp$1
	              );
	            } else if (
	              "object" === typeof x$jscomp$0 &&
	              null !== x$jscomp$0 &&
	              "function" === typeof x$jscomp$0.then
	            ) {
	              request$jscomp$1.status = 0;
	              task.thenableState =
	                thrownValue === SuspenseException
	                  ? getThenableStateAfterSuspending()
	                  : null;
	              var ping$jscomp$0 = task.ping;
	              x$jscomp$0.then(ping$jscomp$0, ping$jscomp$0);
	            } else {
	              var errorInfo$jscomp$0 = getThrownInfo(task.componentStack);
	              task.abortSet.delete(task);
	              request$jscomp$1.status = 4;
	              var boundary$jscomp$0 = task.blockedBoundary,
	                row = task.row;
	              null !== row &&
	                0 === --row.pendingTasks &&
	                finishSuspenseListRow(request, row);
	              request.allPendingTasks--;
	              request$jscomp$0 = logRecoverableError(
	                request,
	                x$jscomp$0,
	                errorInfo$jscomp$0
	              );
	              if (null === boundary$jscomp$0) fatalError(request, x$jscomp$0);
	              else if (
	                (boundary$jscomp$0.pendingTasks--,
	                4 !== boundary$jscomp$0.status)
	              ) {
	                boundary$jscomp$0.status = 4;
	                boundary$jscomp$0.errorDigest = request$jscomp$0;
	                untrackBoundary(request, boundary$jscomp$0);
	                var boundaryRow = boundary$jscomp$0.row;
	                null !== boundaryRow &&
	                  0 === --boundaryRow.pendingTasks &&
	                  finishSuspenseListRow(request, boundaryRow);
	                boundary$jscomp$0.parentFlushed &&
	                  request.clientRenderedBoundaries.push(boundary$jscomp$0);
	                0 === request.pendingRootTasks &&
	                  null === request.trackedPostpones &&
	                  null !== boundary$jscomp$0.contentPreamble &&
	                  preparePreamble(request);
	              }
	              0 === request.allPendingTasks && completeAll(request);
	            }
	          } finally {
	          }
	        }
	      }
	      pingedTasks.splice(0, i);
	      null !== request$jscomp$2.destination &&
	        flushCompletedQueues(request$jscomp$2, request$jscomp$2.destination);
	    } catch (error) {
	      logRecoverableError(request$jscomp$2, error, {}),
	        fatalError(request$jscomp$2, error);
	    } finally {
	      (currentResumableState = prevResumableState),
	        (ReactSharedInternals.H = prevDispatcher),
	        (ReactSharedInternals.A = prevAsyncDispatcher),
	        prevDispatcher === HooksDispatcher && switchContext(prevContext),
	        (currentRequest = prevRequest);
	    }
	  }
	}
	function preparePreambleFromSubtree(
	  request,
	  segment,
	  collectedPreambleSegments
	) {
	  segment.preambleChildren.length &&
	    collectedPreambleSegments.push(segment.preambleChildren);
	  for (var pendingPreambles = false, i = 0; i < segment.children.length; i++)
	    pendingPreambles =
	      preparePreambleFromSegment(
	        request,
	        segment.children[i],
	        collectedPreambleSegments
	      ) || pendingPreambles;
	  return pendingPreambles;
	}
	function preparePreambleFromSegment(
	  request,
	  segment,
	  collectedPreambleSegments
	) {
	  var boundary = segment.boundary;
	  if (null === boundary)
	    return preparePreambleFromSubtree(
	      request,
	      segment,
	      collectedPreambleSegments
	    );
	  var preamble = boundary.contentPreamble,
	    fallbackPreamble = boundary.fallbackPreamble;
	  if (null === preamble || null === fallbackPreamble) return false;
	  switch (boundary.status) {
	    case 1:
	      hoistPreambleState(request.renderState, preamble);
	      request.byteSize += boundary.byteSize;
	      segment = boundary.completedSegments[0];
	      if (!segment) throw Error(formatProdErrorMessage(391));
	      return preparePreambleFromSubtree(
	        request,
	        segment,
	        collectedPreambleSegments
	      );
	    case 5:
	      if (null !== request.trackedPostpones) return true;
	    case 4:
	      if (1 === segment.status)
	        return (
	          hoistPreambleState(request.renderState, fallbackPreamble),
	          preparePreambleFromSubtree(
	            request,
	            segment,
	            collectedPreambleSegments
	          )
	        );
	    default:
	      return true;
	  }
	}
	function preparePreamble(request) {
	  if (
	    request.completedRootSegment &&
	    null === request.completedPreambleSegments
	  ) {
	    var collectedPreambleSegments = [],
	      originalRequestByteSize = request.byteSize,
	      hasPendingPreambles = preparePreambleFromSegment(
	        request,
	        request.completedRootSegment,
	        collectedPreambleSegments
	      ),
	      preamble = request.renderState.preamble;
	    false === hasPendingPreambles || (preamble.headChunks && preamble.bodyChunks)
	      ? (request.completedPreambleSegments = collectedPreambleSegments)
	      : (request.byteSize = originalRequestByteSize);
	  }
	}
	function flushSubtree(request, destination, segment, hoistableState) {
	  segment.parentFlushed = true;
	  switch (segment.status) {
	    case 0:
	      segment.id = request.nextSegmentId++;
	    case 5:
	      return (
	        (hoistableState = segment.id),
	        (segment.lastPushedText = false),
	        (segment.textEmbedded = false),
	        (request = request.renderState),
	        writeChunk(destination, placeholder1),
	        writeChunk(destination, request.placeholderPrefix),
	        (request = stringToChunk(hoistableState.toString(16))),
	        writeChunk(destination, request),
	        writeChunkAndReturn(destination, placeholder2)
	      );
	    case 1:
	      segment.status = 2;
	      var r = true,
	        chunks = segment.chunks,
	        chunkIdx = 0;
	      segment = segment.children;
	      for (var childIdx = 0; childIdx < segment.length; childIdx++) {
	        for (r = segment[childIdx]; chunkIdx < r.index; chunkIdx++)
	          writeChunk(destination, chunks[chunkIdx]);
	        r = flushSegment(request, destination, r, hoistableState);
	      }
	      for (; chunkIdx < chunks.length - 1; chunkIdx++)
	        writeChunk(destination, chunks[chunkIdx]);
	      chunkIdx < chunks.length &&
	        (r = writeChunkAndReturn(destination, chunks[chunkIdx]));
	      return r;
	    case 3:
	      return true;
	    default:
	      throw Error(formatProdErrorMessage(390));
	  }
	}
	var flushedByteSize = 0;
	function flushSegment(request, destination, segment, hoistableState) {
	  var boundary = segment.boundary;
	  if (null === boundary)
	    return flushSubtree(request, destination, segment, hoistableState);
	  boundary.parentFlushed = true;
	  if (4 === boundary.status) {
	    var row = boundary.row;
	    null !== row &&
	      0 === --row.pendingTasks &&
	      finishSuspenseListRow(request, row);
	    boundary = boundary.errorDigest;
	    writeChunkAndReturn(destination, startClientRenderedSuspenseBoundary);
	    writeChunk(destination, clientRenderedSuspenseBoundaryError1);
	    boundary &&
	      (writeChunk(destination, clientRenderedSuspenseBoundaryError1A),
	      writeChunk(destination, stringToChunk(escapeTextForBrowser(boundary))),
	      writeChunk(
	        destination,
	        clientRenderedSuspenseBoundaryErrorAttrInterstitial
	      ));
	    writeChunkAndReturn(destination, clientRenderedSuspenseBoundaryError2);
	    flushSubtree(request, destination, segment, hoistableState);
	  } else if (1 !== boundary.status)
	    0 === boundary.status && (boundary.rootSegmentID = request.nextSegmentId++),
	      0 < boundary.completedSegments.length &&
	        request.partialBoundaries.push(boundary),
	      writeStartPendingSuspenseBoundary(
	        destination,
	        request.renderState,
	        boundary.rootSegmentID
	      ),
	      hoistableState && hoistHoistables(hoistableState, boundary.fallbackState),
	      flushSubtree(request, destination, segment, hoistableState);
	  else if (
	    !flushingPartialBoundaries &&
	    isEligibleForOutlining(request, boundary) &&
	    (flushedByteSize + boundary.byteSize > request.progressiveChunkSize ||
	      hasSuspenseyContent(boundary.contentState))
	  )
	    (boundary.rootSegmentID = request.nextSegmentId++),
	      request.completedBoundaries.push(boundary),
	      writeStartPendingSuspenseBoundary(
	        destination,
	        request.renderState,
	        boundary.rootSegmentID
	      ),
	      flushSubtree(request, destination, segment, hoistableState);
	  else {
	    flushedByteSize += boundary.byteSize;
	    hoistableState && hoistHoistables(hoistableState, boundary.contentState);
	    segment = boundary.row;
	    null !== segment &&
	      isEligibleForOutlining(request, boundary) &&
	      0 === --segment.pendingTasks &&
	      finishSuspenseListRow(request, segment);
	    writeChunkAndReturn(destination, startCompletedSuspenseBoundary);
	    segment = boundary.completedSegments;
	    if (1 !== segment.length) throw Error(formatProdErrorMessage(391));
	    flushSegment(request, destination, segment[0], hoistableState);
	  }
	  return writeChunkAndReturn(destination, endSuspenseBoundary);
	}
	function flushSegmentContainer(request, destination, segment, hoistableState) {
	  writeStartSegment(
	    destination,
	    request.renderState,
	    segment.parentFormatContext,
	    segment.id
	  );
	  flushSegment(request, destination, segment, hoistableState);
	  return writeEndSegment(destination, segment.parentFormatContext);
	}
	function flushCompletedBoundary(request, destination, boundary) {
	  flushedByteSize = boundary.byteSize;
	  for (
	    var completedSegments = boundary.completedSegments, i = 0;
	    i < completedSegments.length;
	    i++
	  )
	    flushPartiallyCompletedSegment(
	      request,
	      destination,
	      boundary,
	      completedSegments[i]
	    );
	  completedSegments.length = 0;
	  completedSegments = boundary.row;
	  null !== completedSegments &&
	    isEligibleForOutlining(request, boundary) &&
	    0 === --completedSegments.pendingTasks &&
	    finishSuspenseListRow(request, completedSegments);
	  writeHoistablesForBoundary(
	    destination,
	    boundary.contentState,
	    request.renderState
	  );
	  completedSegments = request.resumableState;
	  request = request.renderState;
	  i = boundary.rootSegmentID;
	  boundary = boundary.contentState;
	  var requiresStyleInsertion = request.stylesToHoist;
	  request.stylesToHoist = false;
	  writeChunk(destination, request.startInlineScript);
	  writeChunk(destination, endOfStartTag);
	  requiresStyleInsertion
	    ? (0 === (completedSegments.instructions & 4) &&
	        ((completedSegments.instructions |= 4),
	        writeChunk(destination, clientRenderScriptFunctionOnly)),
	      0 === (completedSegments.instructions & 2) &&
	        ((completedSegments.instructions |= 2),
	        writeChunk(destination, completeBoundaryScriptFunctionOnly)),
	      0 === (completedSegments.instructions & 8)
	        ? ((completedSegments.instructions |= 8),
	          writeChunk(destination, completeBoundaryWithStylesScript1FullPartial))
	        : writeChunk(destination, completeBoundaryWithStylesScript1Partial))
	    : (0 === (completedSegments.instructions & 2) &&
	        ((completedSegments.instructions |= 2),
	        writeChunk(destination, completeBoundaryScriptFunctionOnly)),
	      writeChunk(destination, completeBoundaryScript1Partial));
	  completedSegments = stringToChunk(i.toString(16));
	  writeChunk(destination, request.boundaryPrefix);
	  writeChunk(destination, completedSegments);
	  writeChunk(destination, completeBoundaryScript2);
	  writeChunk(destination, request.segmentPrefix);
	  writeChunk(destination, completedSegments);
	  requiresStyleInsertion
	    ? (writeChunk(destination, completeBoundaryScript3a),
	      writeStyleResourceDependenciesInJS(destination, boundary))
	    : writeChunk(destination, completeBoundaryScript3b);
	  boundary = writeChunkAndReturn(destination, completeBoundaryScriptEnd);
	  return writeBootstrap(destination, request) && boundary;
	}
	function flushPartiallyCompletedSegment(
	  request,
	  destination,
	  boundary,
	  segment
	) {
	  if (2 === segment.status) return true;
	  var hoistableState = boundary.contentState,
	    segmentID = segment.id;
	  if (-1 === segmentID) {
	    if (-1 === (segment.id = boundary.rootSegmentID))
	      throw Error(formatProdErrorMessage(392));
	    return flushSegmentContainer(request, destination, segment, hoistableState);
	  }
	  if (segmentID === boundary.rootSegmentID)
	    return flushSegmentContainer(request, destination, segment, hoistableState);
	  flushSegmentContainer(request, destination, segment, hoistableState);
	  boundary = request.resumableState;
	  request = request.renderState;
	  writeChunk(destination, request.startInlineScript);
	  writeChunk(destination, endOfStartTag);
	  0 === (boundary.instructions & 1)
	    ? ((boundary.instructions |= 1),
	      writeChunk(destination, completeSegmentScript1Full))
	    : writeChunk(destination, completeSegmentScript1Partial);
	  writeChunk(destination, request.segmentPrefix);
	  segmentID = stringToChunk(segmentID.toString(16));
	  writeChunk(destination, segmentID);
	  writeChunk(destination, completeSegmentScript2);
	  writeChunk(destination, request.placeholderPrefix);
	  writeChunk(destination, segmentID);
	  destination = writeChunkAndReturn(destination, completeSegmentScriptEnd);
	  return destination;
	}
	var flushingPartialBoundaries = false;
	function flushCompletedQueues(request, destination) {
	  currentView = new Uint8Array(2048);
	  writtenBytes = 0;
	  try {
	    if (!(0 < request.pendingRootTasks)) {
	      var i,
	        completedRootSegment = request.completedRootSegment;
	      if (null !== completedRootSegment) {
	        if (5 === completedRootSegment.status) return;
	        var completedPreambleSegments = request.completedPreambleSegments;
	        if (null === completedPreambleSegments) return;
	        flushedByteSize = request.byteSize;
	        var resumableState = request.resumableState,
	          renderState = request.renderState,
	          preamble = renderState.preamble,
	          htmlChunks = preamble.htmlChunks,
	          headChunks = preamble.headChunks,
	          i$jscomp$0;
	        if (htmlChunks) {
	          for (i$jscomp$0 = 0; i$jscomp$0 < htmlChunks.length; i$jscomp$0++)
	            writeChunk(destination, htmlChunks[i$jscomp$0]);
	          if (headChunks)
	            for (i$jscomp$0 = 0; i$jscomp$0 < headChunks.length; i$jscomp$0++)
	              writeChunk(destination, headChunks[i$jscomp$0]);
	          else
	            writeChunk(destination, startChunkForTag("head")),
	              writeChunk(destination, endOfStartTag);
	        } else if (headChunks)
	          for (i$jscomp$0 = 0; i$jscomp$0 < headChunks.length; i$jscomp$0++)
	            writeChunk(destination, headChunks[i$jscomp$0]);
	        var charsetChunks = renderState.charsetChunks;
	        for (i$jscomp$0 = 0; i$jscomp$0 < charsetChunks.length; i$jscomp$0++)
	          writeChunk(destination, charsetChunks[i$jscomp$0]);
	        charsetChunks.length = 0;
	        renderState.preconnects.forEach(flushResource, destination);
	        renderState.preconnects.clear();
	        var viewportChunks = renderState.viewportChunks;
	        for (i$jscomp$0 = 0; i$jscomp$0 < viewportChunks.length; i$jscomp$0++)
	          writeChunk(destination, viewportChunks[i$jscomp$0]);
	        viewportChunks.length = 0;
	        renderState.fontPreloads.forEach(flushResource, destination);
	        renderState.fontPreloads.clear();
	        renderState.highImagePreloads.forEach(flushResource, destination);
	        renderState.highImagePreloads.clear();
	        currentlyFlushingRenderState = renderState;
	        renderState.styles.forEach(flushStylesInPreamble, destination);
	        currentlyFlushingRenderState = null;
	        var importMapChunks = renderState.importMapChunks;
	        for (i$jscomp$0 = 0; i$jscomp$0 < importMapChunks.length; i$jscomp$0++)
	          writeChunk(destination, importMapChunks[i$jscomp$0]);
	        importMapChunks.length = 0;
	        renderState.bootstrapScripts.forEach(flushResource, destination);
	        renderState.scripts.forEach(flushResource, destination);
	        renderState.scripts.clear();
	        renderState.bulkPreloads.forEach(flushResource, destination);
	        renderState.bulkPreloads.clear();
	        htmlChunks || headChunks || (resumableState.instructions |= 32);
	        var hoistableChunks = renderState.hoistableChunks;
	        for (i$jscomp$0 = 0; i$jscomp$0 < hoistableChunks.length; i$jscomp$0++)
	          writeChunk(destination, hoistableChunks[i$jscomp$0]);
	        for (
	          resumableState = hoistableChunks.length = 0;
	          resumableState < completedPreambleSegments.length;
	          resumableState++
	        ) {
	          var segments = completedPreambleSegments[resumableState];
	          for (renderState = 0; renderState < segments.length; renderState++)
	            flushSegment(request, destination, segments[renderState], null);
	        }
	        var preamble$jscomp$0 = request.renderState.preamble,
	          headChunks$jscomp$0 = preamble$jscomp$0.headChunks;
	        (preamble$jscomp$0.htmlChunks || headChunks$jscomp$0) &&
	          writeChunk(destination, endChunkForTag("head"));
	        var bodyChunks = preamble$jscomp$0.bodyChunks;
	        if (bodyChunks)
	          for (
	            completedPreambleSegments = 0;
	            completedPreambleSegments < bodyChunks.length;
	            completedPreambleSegments++
	          )
	            writeChunk(destination, bodyChunks[completedPreambleSegments]);
	        flushSegment(request, destination, completedRootSegment, null);
	        request.completedRootSegment = null;
	        var renderState$jscomp$0 = request.renderState;
	        if (
	          0 !== request.allPendingTasks ||
	          0 !== request.clientRenderedBoundaries.length ||
	          0 !== request.completedBoundaries.length ||
	          (null !== request.trackedPostpones &&
	            (0 !== request.trackedPostpones.rootNodes.length ||
	              null !== request.trackedPostpones.rootSlots))
	        ) {
	          var resumableState$jscomp$0 = request.resumableState;
	          if (0 === (resumableState$jscomp$0.instructions & 64)) {
	            resumableState$jscomp$0.instructions |= 64;
	            writeChunk(destination, renderState$jscomp$0.startInlineScript);
	            if (0 === (resumableState$jscomp$0.instructions & 32)) {
	              resumableState$jscomp$0.instructions |= 32;
	              var shellId = "_" + resumableState$jscomp$0.idPrefix + "R_";
	              writeChunk(destination, completedShellIdAttributeStart);
	              writeChunk(
	                destination,
	                stringToChunk(escapeTextForBrowser(shellId))
	              );
	              writeChunk(destination, attributeEnd);
	            }
	            writeChunk(destination, endOfStartTag);
	            writeChunk(destination, shellTimeRuntimeScript);
	            writeChunkAndReturn(destination, endInlineScript);
	          }
	        }
	        writeBootstrap(destination, renderState$jscomp$0);
	      }
	      var renderState$jscomp$1 = request.renderState;
	      completedRootSegment = 0;
	      var viewportChunks$jscomp$0 = renderState$jscomp$1.viewportChunks;
	      for (
	        completedRootSegment = 0;
	        completedRootSegment < viewportChunks$jscomp$0.length;
	        completedRootSegment++
	      )
	        writeChunk(destination, viewportChunks$jscomp$0[completedRootSegment]);
	      viewportChunks$jscomp$0.length = 0;
	      renderState$jscomp$1.preconnects.forEach(flushResource, destination);
	      renderState$jscomp$1.preconnects.clear();
	      renderState$jscomp$1.fontPreloads.forEach(flushResource, destination);
	      renderState$jscomp$1.fontPreloads.clear();
	      renderState$jscomp$1.highImagePreloads.forEach(
	        flushResource,
	        destination
	      );
	      renderState$jscomp$1.highImagePreloads.clear();
	      renderState$jscomp$1.styles.forEach(preloadLateStyles, destination);
	      renderState$jscomp$1.scripts.forEach(flushResource, destination);
	      renderState$jscomp$1.scripts.clear();
	      renderState$jscomp$1.bulkPreloads.forEach(flushResource, destination);
	      renderState$jscomp$1.bulkPreloads.clear();
	      var hoistableChunks$jscomp$0 = renderState$jscomp$1.hoistableChunks;
	      for (
	        completedRootSegment = 0;
	        completedRootSegment < hoistableChunks$jscomp$0.length;
	        completedRootSegment++
	      )
	        writeChunk(destination, hoistableChunks$jscomp$0[completedRootSegment]);
	      hoistableChunks$jscomp$0.length = 0;
	      var clientRenderedBoundaries = request.clientRenderedBoundaries;
	      for (i = 0; i < clientRenderedBoundaries.length; i++) {
	        var boundary = clientRenderedBoundaries[i];
	        renderState$jscomp$1 = destination;
	        var resumableState$jscomp$1 = request.resumableState,
	          renderState$jscomp$2 = request.renderState,
	          id = boundary.rootSegmentID,
	          errorDigest = boundary.errorDigest;
	        writeChunk(
	          renderState$jscomp$1,
	          renderState$jscomp$2.startInlineScript
	        );
	        writeChunk(renderState$jscomp$1, endOfStartTag);
	        0 === (resumableState$jscomp$1.instructions & 4)
	          ? ((resumableState$jscomp$1.instructions |= 4),
	            writeChunk(renderState$jscomp$1, clientRenderScript1Full))
	          : writeChunk(renderState$jscomp$1, clientRenderScript1Partial);
	        writeChunk(renderState$jscomp$1, renderState$jscomp$2.boundaryPrefix);
	        writeChunk(renderState$jscomp$1, stringToChunk(id.toString(16)));
	        writeChunk(renderState$jscomp$1, clientRenderScript1A);
	        errorDigest &&
	          (writeChunk(
	            renderState$jscomp$1,
	            clientRenderErrorScriptArgInterstitial
	          ),
	          writeChunk(
	            renderState$jscomp$1,
	            stringToChunk(
	              escapeJSStringsForInstructionScripts(errorDigest || "")
	            )
	          ));
	        var JSCompiler_inline_result = writeChunkAndReturn(
	          renderState$jscomp$1,
	          clientRenderScriptEnd
	        );
	        if (!JSCompiler_inline_result) {
	          request.destination = null;
	          i++;
	          clientRenderedBoundaries.splice(0, i);
	          return;
	        }
	      }
	      clientRenderedBoundaries.splice(0, i);
	      var completedBoundaries = request.completedBoundaries;
	      for (i = 0; i < completedBoundaries.length; i++)
	        if (
	          !flushCompletedBoundary(request, destination, completedBoundaries[i])
	        ) {
	          request.destination = null;
	          i++;
	          completedBoundaries.splice(0, i);
	          return;
	        }
	      completedBoundaries.splice(0, i);
	      completeWriting(destination);
	      currentView = new Uint8Array(2048);
	      writtenBytes = 0;
	      flushingPartialBoundaries = !0;
	      var partialBoundaries = request.partialBoundaries;
	      for (i = 0; i < partialBoundaries.length; i++) {
	        var boundary$70 = partialBoundaries[i];
	        a: {
	          clientRenderedBoundaries = request;
	          boundary = destination;
	          flushedByteSize = boundary$70.byteSize;
	          var completedSegments = boundary$70.completedSegments;
	          for (
	            JSCompiler_inline_result = 0;
	            JSCompiler_inline_result < completedSegments.length;
	            JSCompiler_inline_result++
	          )
	            if (
	              !flushPartiallyCompletedSegment(
	                clientRenderedBoundaries,
	                boundary,
	                boundary$70,
	                completedSegments[JSCompiler_inline_result]
	              )
	            ) {
	              JSCompiler_inline_result++;
	              completedSegments.splice(0, JSCompiler_inline_result);
	              var JSCompiler_inline_result$jscomp$0 = !1;
	              break a;
	            }
	          completedSegments.splice(0, JSCompiler_inline_result);
	          var row = boundary$70.row;
	          null !== row &&
	            row.together &&
	            1 === boundary$70.pendingTasks &&
	            (1 === row.pendingTasks
	              ? unblockSuspenseListRow(
	                  clientRenderedBoundaries,
	                  row,
	                  row.hoistables
	                )
	              : row.pendingTasks--);
	          JSCompiler_inline_result$jscomp$0 = writeHoistablesForBoundary(
	            boundary,
	            boundary$70.contentState,
	            clientRenderedBoundaries.renderState
	          );
	        }
	        if (!JSCompiler_inline_result$jscomp$0) {
	          request.destination = null;
	          i++;
	          partialBoundaries.splice(0, i);
	          return;
	        }
	      }
	      partialBoundaries.splice(0, i);
	      flushingPartialBoundaries = !1;
	      var largeBoundaries = request.completedBoundaries;
	      for (i = 0; i < largeBoundaries.length; i++)
	        if (!flushCompletedBoundary(request, destination, largeBoundaries[i])) {
	          request.destination = null;
	          i++;
	          largeBoundaries.splice(0, i);
	          return;
	        }
	      largeBoundaries.splice(0, i);
	    }
	  } finally {
	    (flushingPartialBoundaries = false),
	      0 === request.allPendingTasks &&
	      0 === request.clientRenderedBoundaries.length &&
	      0 === request.completedBoundaries.length
	        ? ((request.flushScheduled = false),
	          (i = request.resumableState),
	          i.hasBody && writeChunk(destination, endChunkForTag("body")),
	          i.hasHtml && writeChunk(destination, endChunkForTag("html")),
	          completeWriting(destination),
	          (request.status = 14),
	          destination.close(),
	          (request.destination = null))
	        : completeWriting(destination);
	  }
	}
	function startWork(request) {
	  request.flushScheduled = null !== request.destination;
	  scheduleMicrotask(function () {
	    return performWork(request);
	  });
	  scheduleWork(function () {
	    10 === request.status && (request.status = 11);
	    null === request.trackedPostpones &&
	      safelyEmitEarlyPreloads(request, 0 === request.pendingRootTasks);
	  });
	}
	function enqueueFlush(request) {
	  false === request.flushScheduled &&
	    0 === request.pingedTasks.length &&
	    null !== request.destination &&
	    ((request.flushScheduled = true),
	    scheduleWork(function () {
	      var destination = request.destination;
	      destination
	        ? flushCompletedQueues(request, destination)
	        : (request.flushScheduled = false);
	    }));
	}
	function startFlowing(request, destination) {
	  if (13 === request.status)
	    (request.status = 14), closeWithError(destination, request.fatalError);
	  else if (14 !== request.status && null === request.destination) {
	    request.destination = destination;
	    try {
	      flushCompletedQueues(request, destination);
	    } catch (error) {
	      logRecoverableError(request, error, {}), fatalError(request, error);
	    }
	  }
	}
	function abort(request, reason) {
	  if (11 === request.status || 10 === request.status) request.status = 12;
	  try {
	    var abortableTasks = request.abortableTasks;
	    if (0 < abortableTasks.size) {
	      var error =
	        void 0 === reason
	          ? Error(formatProdErrorMessage(432))
	          : "object" === typeof reason &&
	              null !== reason &&
	              "function" === typeof reason.then
	            ? Error(formatProdErrorMessage(530))
	            : reason;
	      request.fatalError = error;
	      abortableTasks.forEach(function (task) {
	        return abortTask(task, request, error);
	      });
	      abortableTasks.clear();
	    }
	    null !== request.destination &&
	      flushCompletedQueues(request, request.destination);
	  } catch (error$72) {
	    logRecoverableError(request, error$72, {}), fatalError(request, error$72);
	  }
	}
	function addToReplayParent(node, parentKeyPath, trackedPostpones) {
	  if (null === parentKeyPath) trackedPostpones.rootNodes.push(node);
	  else {
	    var workingMap = trackedPostpones.workingMap,
	      parentNode = workingMap.get(parentKeyPath);
	    void 0 === parentNode &&
	      ((parentNode = [parentKeyPath[1], parentKeyPath[2], [], null]),
	      workingMap.set(parentKeyPath, parentNode),
	      addToReplayParent(parentNode, parentKeyPath[0], trackedPostpones));
	    parentNode[2].push(node);
	  }
	}
	function getPostponedState(request) {
	  var trackedPostpones = request.trackedPostpones;
	  if (
	    null === trackedPostpones ||
	    (0 === trackedPostpones.rootNodes.length &&
	      null === trackedPostpones.rootSlots)
	  )
	    return (request.trackedPostpones = null);
	  if (
	    null === request.completedRootSegment ||
	    (5 !== request.completedRootSegment.status &&
	      null !== request.completedPreambleSegments)
	  ) {
	    var nextSegmentId = request.nextSegmentId;
	    var replaySlots = trackedPostpones.rootSlots;
	    var resumableState = request.resumableState;
	    resumableState.bootstrapScriptContent = void 0;
	    resumableState.bootstrapScripts = void 0;
	    resumableState.bootstrapModules = void 0;
	  } else {
	    nextSegmentId = 0;
	    replaySlots = -1;
	    resumableState = request.resumableState;
	    var renderState = request.renderState;
	    resumableState.nextFormID = 0;
	    resumableState.hasBody = false;
	    resumableState.hasHtml = false;
	    resumableState.unknownResources = { font: renderState.resets.font };
	    resumableState.dnsResources = renderState.resets.dns;
	    resumableState.connectResources = renderState.resets.connect;
	    resumableState.imageResources = renderState.resets.image;
	    resumableState.styleResources = renderState.resets.style;
	    resumableState.scriptResources = {};
	    resumableState.moduleUnknownResources = {};
	    resumableState.moduleScriptResources = {};
	    resumableState.instructions = 0;
	  }
	  return {
	    nextSegmentId: nextSegmentId,
	    rootFormatContext: request.rootFormatContext,
	    progressiveChunkSize: request.progressiveChunkSize,
	    resumableState: request.resumableState,
	    replayNodes: trackedPostpones.rootNodes,
	    replaySlots: replaySlots
	  };
	}
	function ensureCorrectIsomorphicReactVersion() {
	  var isomorphicReactPackageVersion = React.version;
	  if ("19.2.6" !== isomorphicReactPackageVersion)
	    throw Error(
	      formatProdErrorMessage(
	        527,
	        isomorphicReactPackageVersion,
	        "19.2.6"
	      )
	    );
	}
	ensureCorrectIsomorphicReactVersion();
	ensureCorrectIsomorphicReactVersion();
	reactDomServer_browser_production.prerender = function (children, options) {
	  return new Promise(function (resolve, reject) {
	    var onHeaders = options ? options.onHeaders : void 0,
	      onHeadersImpl;
	    onHeaders &&
	      (onHeadersImpl = function (headersDescriptor) {
	        onHeaders(new Headers(headersDescriptor));
	      });
	    var resources = createResumableState(
	        options ? options.identifierPrefix : void 0,
	        options ? options.unstable_externalRuntimeSrc : void 0,
	        options ? options.bootstrapScriptContent : void 0,
	        options ? options.bootstrapScripts : void 0,
	        options ? options.bootstrapModules : void 0
	      ),
	      request = createPrerenderRequest(
	        children,
	        resources,
	        createRenderState(
	          resources,
	          void 0,
	          options ? options.unstable_externalRuntimeSrc : void 0,
	          options ? options.importMap : void 0,
	          onHeadersImpl,
	          options ? options.maxHeadersLength : void 0
	        ),
	        createRootFormatContext(options ? options.namespaceURI : void 0),
	        options ? options.progressiveChunkSize : void 0,
	        options ? options.onError : void 0,
	        function () {
	          var stream = new ReadableStream(
	            {
	              type: "bytes",
	              pull: function (controller) {
	                startFlowing(request, controller);
	              },
	              cancel: function (reason) {
	                request.destination = null;
	                abort(request, reason);
	              }
	            },
	            { highWaterMark: 0 }
	          );
	          stream = { postponed: getPostponedState(request), prelude: stream };
	          resolve(stream);
	        },
	        void 0,
	        void 0,
	        reject,
	        options ? options.onPostpone : void 0
	      );
	    if (options && options.signal) {
	      var signal = options.signal;
	      if (signal.aborted) abort(request, signal.reason);
	      else {
	        var listener = function () {
	          abort(request, signal.reason);
	          signal.removeEventListener("abort", listener);
	        };
	        signal.addEventListener("abort", listener);
	      }
	    }
	    startWork(request);
	  });
	};
	reactDomServer_browser_production.renderToReadableStream = function (children, options) {
	  return new Promise(function (resolve, reject) {
	    var onFatalError,
	      onAllReady,
	      allReady = new Promise(function (res, rej) {
	        onAllReady = res;
	        onFatalError = rej;
	      }),
	      onHeaders = options ? options.onHeaders : void 0,
	      onHeadersImpl;
	    onHeaders &&
	      (onHeadersImpl = function (headersDescriptor) {
	        onHeaders(new Headers(headersDescriptor));
	      });
	    var resumableState = createResumableState(
	        options ? options.identifierPrefix : void 0,
	        options ? options.unstable_externalRuntimeSrc : void 0,
	        options ? options.bootstrapScriptContent : void 0,
	        options ? options.bootstrapScripts : void 0,
	        options ? options.bootstrapModules : void 0
	      ),
	      request = createRequest(
	        children,
	        resumableState,
	        createRenderState(
	          resumableState,
	          options ? options.nonce : void 0,
	          options ? options.unstable_externalRuntimeSrc : void 0,
	          options ? options.importMap : void 0,
	          onHeadersImpl,
	          options ? options.maxHeadersLength : void 0
	        ),
	        createRootFormatContext(options ? options.namespaceURI : void 0),
	        options ? options.progressiveChunkSize : void 0,
	        options ? options.onError : void 0,
	        onAllReady,
	        function () {
	          var stream = new ReadableStream(
	            {
	              type: "bytes",
	              pull: function (controller) {
	                startFlowing(request, controller);
	              },
	              cancel: function (reason) {
	                request.destination = null;
	                abort(request, reason);
	              }
	            },
	            { highWaterMark: 0 }
	          );
	          stream.allReady = allReady;
	          resolve(stream);
	        },
	        function (error) {
	          allReady.catch(function () {});
	          reject(error);
	        },
	        onFatalError,
	        options ? options.onPostpone : void 0,
	        options ? options.formState : void 0
	      );
	    if (options && options.signal) {
	      var signal = options.signal;
	      if (signal.aborted) abort(request, signal.reason);
	      else {
	        var listener = function () {
	          abort(request, signal.reason);
	          signal.removeEventListener("abort", listener);
	        };
	        signal.addEventListener("abort", listener);
	      }
	    }
	    startWork(request);
	  });
	};
	reactDomServer_browser_production.resume = function (children, postponedState, options) {
	  return new Promise(function (resolve, reject) {
	    var onFatalError,
	      onAllReady,
	      allReady = new Promise(function (res, rej) {
	        onAllReady = res;
	        onFatalError = rej;
	      }),
	      request = resumeRequest(
	        children,
	        postponedState,
	        createRenderState(
	          postponedState.resumableState,
	          options ? options.nonce : void 0,
	          void 0,
	          void 0,
	          void 0,
	          void 0
	        ),
	        options ? options.onError : void 0,
	        onAllReady,
	        function () {
	          var stream = new ReadableStream(
	            {
	              type: "bytes",
	              pull: function (controller) {
	                startFlowing(request, controller);
	              },
	              cancel: function (reason) {
	                request.destination = null;
	                abort(request, reason);
	              }
	            },
	            { highWaterMark: 0 }
	          );
	          stream.allReady = allReady;
	          resolve(stream);
	        },
	        function (error) {
	          allReady.catch(function () {});
	          reject(error);
	        },
	        onFatalError,
	        options ? options.onPostpone : void 0
	      );
	    if (options && options.signal) {
	      var signal = options.signal;
	      if (signal.aborted) abort(request, signal.reason);
	      else {
	        var listener = function () {
	          abort(request, signal.reason);
	          signal.removeEventListener("abort", listener);
	        };
	        signal.addEventListener("abort", listener);
	      }
	    }
	    startWork(request);
	  });
	};
	reactDomServer_browser_production.resumeAndPrerender = function (children, postponedState, options) {
	  return new Promise(function (resolve, reject) {
	    var request = resumeAndPrerenderRequest(
	      children,
	      postponedState,
	      createRenderState(
	        postponedState.resumableState,
	        void 0,
	        void 0,
	        void 0,
	        void 0,
	        void 0
	      ),
	      options ? options.onError : void 0,
	      function () {
	        var stream = new ReadableStream(
	          {
	            type: "bytes",
	            pull: function (controller) {
	              startFlowing(request, controller);
	            },
	            cancel: function (reason) {
	              request.destination = null;
	              abort(request, reason);
	            }
	          },
	          { highWaterMark: 0 }
	        );
	        stream = { postponed: getPostponedState(request), prelude: stream };
	        resolve(stream);
	      },
	      void 0,
	      void 0,
	      reject,
	      options ? options.onPostpone : void 0
	    );
	    if (options && options.signal) {
	      var signal = options.signal;
	      if (signal.aborted) abort(request, signal.reason);
	      else {
	        var listener = function () {
	          abort(request, signal.reason);
	          signal.removeEventListener("abort", listener);
	        };
	        signal.addEventListener("abort", listener);
	      }
	    }
	    startWork(request);
	  });
	};
	reactDomServer_browser_production.version = "19.2.6";
	return reactDomServer_browser_production;
}

var hasRequiredServer_browser;

function requireServer_browser () {
	if (hasRequiredServer_browser) return server_browser;
	hasRequiredServer_browser = 1;
	var l, s;
	{
	  l = requireReactDomServerLegacy_browser_production();
	  s = requireReactDomServer_browser_production();
	}
	server_browser.version = l.version;
	server_browser.renderToString = l.renderToString;
	server_browser.renderToStaticMarkup = l.renderToStaticMarkup;
	server_browser.renderToReadableStream = s.renderToReadableStream;
	server_browser.resume = s.resume;
	return server_browser;
}

var server_browserExports = requireServer_browser();

function Preferences$1({ lang, pathname = "/" }) {
  const [theme, setTheme] = reactExports.useState("light");
  const [query, setQuery] = reactExports.useState("");
  reactExports.useEffect(() => {
    setTheme(document.documentElement.dataset.theme || "light");
    setQuery(window.location.search);
  }, [pathname]);
  const other = lang === "bn" ? "en" : "bn";
  const basePath = pathname.replace(/^\/(bn|en)(?=\/|$)/, "") || "/";
  const switchPath = other === "en" ? basePath === "/" ? "/en" : "/en" + basePath : basePath;
  function toggle() {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    setTheme(next);
    try {
      localStorage.setItem("doclist-theme", next);
    } catch {
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "preferences", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "language-switch", href: switchPath + query, hrefLang: other, lang: other, "aria-label": lang === "bn" ? "Switch to English" : "বাংলায় দেখুন", onClick: () => {
      try {
        localStorage.setItem("doclist-language", other);
      } catch {
      }
    }, children: lang === "bn" ? "English" : "বাংলা" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "theme-toggle", type: "button", onClick: toggle, "aria-pressed": theme === "dark", "aria-label": t(lang, theme === "dark" ? "Switch to light mode" : "Switch to dark mode"), title: t(lang, theme === "dark" ? "Light mode" : "Dark mode"), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: theme === "dark" ? "☀" : "☾" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "theme-label", children: t(lang, theme === "dark" ? "Light mode" : "Dark mode") })
    ] })
  ] });
}

const Preferences = island("Preferences", Preferences$1);

function Header({ lang }) {
  const nav = [["Home", "/"], ["Doctors", "/doctors"], ["Specialties", "/specialties"], ["Hospitals", "/hospitals"], ["Locations", "/locations"], ["Saved Docs", "/my-doc"]];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "site-header", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "topbar", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t(lang, "Bangladesh Doctor Directory") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t(lang, "Confirm appointments directly with the chamber") })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container nav-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(ReleaseLink, { className: "brand", href: localizedPath(lang, "/"), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "brand-mark", "aria-hidden": "true", children: "+" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "Doclist Bd",
          /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: t(lang, "Bangladesh") })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "main-nav", "aria-label": t(lang, "Navigation menu"), children: nav.map(([label, href]) => /* @__PURE__ */ jsxRuntimeExports.jsx(ReleaseLink, { href: localizedPath(lang, href), children: t(lang, label) }, href)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Preferences, { lang }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "mobile-menu", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { "aria-label": t(lang, "Navigation menu"), children: "☰" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { "aria-label": t(lang, "Navigation menu"), children: nav.map(([label, href]) => /* @__PURE__ */ jsxRuntimeExports.jsx(ReleaseLink, { href: localizedPath(lang, href), children: t(lang, label) }, href)) })
      ] })
    ] })
  ] });
}

function Footer({ lang }) {
  const url = (p) => localizedPath(lang, p);
  const essential = [["Privacy Policy", "গোপনীয়তা নীতি", "/privacy-policy"], ["Terms of Use", "ব্যবহারের শর্তাবলি", "/terms-of-use"], ["Contact", "যোগাযোগ", "/contact"], ["Sponsorship", "স্পনসরশিপ", "/sponsorship"]];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "site-footer", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "footer-cta", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: t(lang, "Find the right care, faster.") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t(lang, "Browse qualifications, chambers and appointment details.") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ReleaseLink, { className: "btn btn-primary", href: url("/doctors"), children: t(lang, "Search Doctors") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "footer-grid", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "footer-brand", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "brand", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "brand-mark", children: "+" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "Doclist Bd",
            /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: t(lang, "Bangladesh") })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t(lang, "A doctor and hospital directory built from public listings. Confirm current details with your chosen provider.") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "footer-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: t(lang, "Locations") }),
        locations$1.filter((l) => l.kind === "district").slice(0, 5).map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(ReleaseLink, { href: url("/doctors/" + l.slug), children: place(lang, l.name) }, l.slug))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "footer-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: t(lang, "Hospitals & Clinics") }),
        hospitals$1.slice(0, 4).map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(ReleaseLink, { href: url("/hospital/" + h.slug), children: provider(lang, h.name) }, h.slug))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "footer-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Essential Links" }),
        essential.map(([en, bn, path]) => /* @__PURE__ */ jsxRuntimeExports.jsx(ReleaseLink, { href: url(path), children: pick(lang, en, bn) }, path))
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "footer-bottom", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "© ",
        num(lang, (/* @__PURE__ */ new Date()).getFullYear()),
        " Doclist Bd"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t(lang, "Public listing information; provider details may change.") })
    ] })
  ] }) });
}

function renderPage(children, lang, pathname) {
  return server_browserExports.renderToString(/* @__PURE__ */ jsxRuntimeExports.jsxs(PagePath.Provider, { value: pathname, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#main-content", className: "skip-link", children: t(lang, "Skip to content") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, { lang }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { id: "main-content", children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, { lang })
  ] }));
}
function missingPage(lang) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container section empty-state", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: t(lang, "This directory page was not found") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t(lang, "The doctor, provider or specialty/location combination may not be in this dataset.") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "btn btn-primary", href: localizedPath(lang, "/doctors"), children: t(lang, "Find a Doctor") })
  ] });
}
function errorPage(lang) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container section empty-state", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: t(lang, "We couldn’t load this page") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t(lang, "Please try again.") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-primary", "data-retry": true, type: "button", children: t(lang, "Try Again") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "btn btn-secondary", href: localizedPath(lang, "/doctors"), children: t(lang, "Doctor Directory") })
  ] });
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://doclist-bd.com");
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const lang = /^\/en(?:\/|$)/.test(Astro2.url.pathname) ? "en" : "bn";
  let metadata = {}, html = "";
  try {
    const { module, params } = resolveRoute(Astro2.url.pathname);
    const props = { params: Promise.resolve(params), searchParams: Promise.resolve(requestQuery(Astro2.url)) };
    metadata = await module.generateMetadata(props);
    html = renderPage(await module.default(props), lang, Astro2.url.pathname);
  } catch (error) {
    if (error instanceof RouteResponse && error.location) return Astro2.redirect(error.location, 308);
    const missing = error instanceof RouteResponse && error.status === 404;
    Astro2.response.status = missing ? 404 : 500;
    Astro2.response.headers.set("X-Robots-Tag", "noindex, follow");
    if (!missing) console.error("Directory render failed", error);
    metadata = { title: missing ? lang === "en" ? "Page not found" : "\u09AA\u09C3\u09B7\u09CD\u09A0\u09BE\u099F\u09BF \u09AA\u09BE\u0993\u09AF\u09BC\u09BE \u09AF\u09BE\u09AF\u09BC\u09A8\u09BF" : lang === "en" ? "Something went wrong" : "\u0995\u09BF\u099B\u09C1 \u09B8\u09AE\u09B8\u09CD\u09AF\u09BE \u09B9\u09AF\u09BC\u09C7\u099B\u09C7", robots: { index: false, follow: true } };
    html = renderPage(missing ? missingPage(lang) : errorPage(lang), lang, Astro2.url.pathname);
  }
  return renderTemplate(_a || (_a = __template(["<html", "> <head>", "", "</head> <body> ", " ", ` <script id="google-analytics">
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-SJSQXS7FJ9');
    <\/script> <script async src="https://www.googletagmanager.com/gtag/js?id=G-SJSQXS7FJ9"><\/script> </body> </html>`])), addAttribute(lang, "lang"), renderComponent($$result, "Head", $$Head, { "metadata": metadata, "lang": lang }), renderHead(), renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`${unescapeHTML(html)}` }), renderScript($$result, "/workspace/scratch/40addddb4129/astro-work/astro/src/pages/[...path].astro?astro&type=script&index=0&lang.ts"));
}, "/workspace/scratch/40addddb4129/astro-work/astro/src/pages/[...path].astro", void 0);

const $$file = "/workspace/scratch/40addddb4129/astro-work/astro/src/pages/[...path].astro";
const $$url = "/[...path]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
