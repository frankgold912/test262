// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.3-4-7
description: >
    Object.getOwnPropertyDescriptor returns data desc for functions on
    built-ins (Global.isNaN)
includes: [fnGlobalObject.js]
---*/

  var global = fnGlobalObject();
  var desc = Object.getOwnPropertyDescriptor(global,  "isNaN");

assert.sameValue(desc.value, global.isNaN, 'desc.value');
assert.sameValue(desc.writable, true, 'desc.writable');
assert.sameValue(desc.enumerable, false, 'desc.enumerable');
assert.sameValue(desc.configurable, true, 'desc.configurable');
