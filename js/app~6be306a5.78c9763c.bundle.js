(self.webpackChunkrgm_blog=self.webpackChunkrgm_blog||[]).push([[784],{9640:function(t,n,e){"use strict";e.d(n,{AW:function(){return g},F0:function(){return v},rs:function(){return k},s6:function(){return d},LX:function(){return E},EN:function(){return A}});var r=e(6681),o=e(5466),i=(e(3074),e(5637)),u=e(7914),a=e(3269),c=e(3400),p=e(2508),s=e.n(p),l=(e(9972),e(1198)),h=e(7773),f=e.n(h),m=function(t){var n=(0,u.Z)();return n.displayName=t,n}("Router-History"),d=function(t){var n=(0,u.Z)();return n.displayName=t,n}("Router"),v=function(t){function n(n){var e;return(e=t.call(this,n)||this).state={location:n.history.location},e._isMounted=!1,e._pendingLocation=null,n.staticContext||(e.unlisten=n.history.listen((function(t){e._isMounted?e.setState({location:t}):e._pendingLocation=t}))),e}(0,r.Z)(n,t),n.computeRootMatch=function(t){return{path:"/",url:"/",params:{},isExact:"/"===t}};var e=n.prototype;return e.componentDidMount=function(){this._isMounted=!0,this._pendingLocation&&this.setState({location:this._pendingLocation})},e.componentWillUnmount=function(){this.unlisten&&this.unlisten()},e.render=function(){return o.createElement(d.Provider,{value:{history:this.props.history,location:this.state.location,match:n.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},o.createElement(m.Provider,{children:this.props.children||null,value:this.props.history}))},n}(o.Component);o.Component;o.Component;var y={},C=0;function E(t,n){void 0===n&&(n={}),("string"==typeof n||Array.isArray(n))&&(n={path:n});var e=n,r=e.path,o=e.exact,i=void 0!==o&&o,u=e.strict,a=void 0!==u&&u,c=e.sensitive,p=void 0!==c&&c;return[].concat(r).reduce((function(n,e){if(!e&&""!==e)return null;if(n)return n;var r=function(t,n){var e=""+n.end+n.strict+n.sensitive,r=y[e]||(y[e]={});if(r[t])return r[t];var o=[],i={regexp:s()(t,o,n),keys:o};return C<1e4&&(r[t]=i,C++),i}(e,{end:i,strict:a,sensitive:p}),o=r.regexp,u=r.keys,c=o.exec(t);if(!c)return null;var l=c[0],h=c.slice(1),f=t===l;return i&&!f?null:{path:e,url:"/"===e&&""===l?"/":l,isExact:f,params:u.reduce((function(t,n,e){return t[n.name]=h[e],t}),{})}}),null)}var g=function(t){function n(){return t.apply(this,arguments)||this}return(0,r.Z)(n,t),n.prototype.render=function(){var t=this;return o.createElement(d.Consumer,null,(function(n){n||(0,a.Z)(!1);var e=t.props.location||n.location,r=t.props.computedMatch?t.props.computedMatch:t.props.path?E(e.pathname,t.props):n.match,i=(0,c.Z)({},n,{location:e,match:r}),u=t.props,p=u.children,s=u.component,l=u.render;return Array.isArray(p)&&0===p.length&&(p=null),o.createElement(d.Provider,{value:i},i.match?p?"function"==typeof p?p(i):p:s?o.createElement(s,i):l?l(i):null:"function"==typeof p?p(i):null)}))},n}(o.Component);function Z(t){return"/"===t.charAt(0)?t:"/"+t}function x(t,n){if(!t)return n;var e=Z(t);return 0!==n.pathname.indexOf(e)?n:(0,c.Z)({},n,{pathname:n.pathname.substr(e.length)})}function M(t){return"string"==typeof t?t:(0,i.Ep)(t)}function _(t){return function(){(0,a.Z)(!1)}}function R(){}o.Component;var k=function(t){function n(){return t.apply(this,arguments)||this}return(0,r.Z)(n,t),n.prototype.render=function(){var t=this;return o.createElement(d.Consumer,null,(function(n){n||(0,a.Z)(!1);var e,r,i=t.props.location||n.location;return o.Children.forEach(t.props.children,(function(t){if(null==r&&o.isValidElement(t)){e=t;var u=t.props.path||t.props.from;r=u?E(i.pathname,(0,c.Z)({},t.props,{path:u})):n.match}})),r?o.cloneElement(e,{location:i,computedMatch:r}):null}))},n}(o.Component);function A(t){var n="withRouter("+(t.displayName||t.name)+")",e=function(n){var e=n.wrappedComponentRef,r=(0,l.Z)(n,["wrappedComponentRef"]);return o.createElement(d.Consumer,null,(function(n){return n||(0,a.Z)(!1),o.createElement(t,(0,c.Z)({},r,n,{ref:e}))}))};return e.displayName=n,e.WrappedComponent=t,f()(e,t)}o.useContext}}]);
//# sourceMappingURL=app~6be306a5.78c9763c.bundle.js.map