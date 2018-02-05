define([], function(){

  var ret = {};
  ret.objContainsVal = function(obj, val) {
    const vals = objValues(obj);
    for(var i=0; i<vals.length; i++) {
      if(vals[i] === val) return true;
    }
    return false;
  };

  // Creates a string version of any object that shows all key and value pairs.
  ret.stringObj = function(obj) {
    const keys = Object.keys(obj);
    const vals = Object.values(obj);
    var str = '';
    for(var i=0; i<keys.length; i++) {
      str += keys[i]+': '+vals[i]+'\n';
    }
    return str;
  };

  // Creates a string version of any object that shows all key and value pairs.
  // This recursive version will show the string versions of objects as values.
  // e.g. {a: b, c: { a: b }}
  ret.stringObjRecursive = function(obj, indentLevel) {
    const keys = Object.keys(obj);
    const vals = keys.map(function(key) {
      return obj[key];
    });
    var indents;
    if(indentLevel) {
      indents = indentLevel;
    } else {
      indents = 0;
    }

    var str = '';
    for(var i=0; i<keys.length; i++) {
      for(var j=0; j<indents; j++) {
        str += '   ';
      }
      if(vals[i] instanceof Object) {
        str += keys[i]+': {\n'+this.stringObjRecursive(vals[i], indents+1)+'}\n';
      } else {
        str += keys[i]+': '+vals[i]+'\n';
      }
    }
    return str;
  };

  return ret;
});
