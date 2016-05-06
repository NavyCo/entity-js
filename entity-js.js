
/*== Class/Constructor == */
var ent;

ent = (function() {
  var class1;

  function ent() {
    return class1.apply(this, arguments);
  }

  ent.prototype._output = [];

  ent.prototype.output = function() {
    return this._output.join(';\n');
  };

  ent.prototype.trgt = function() {
    return this.targetname || this.kvs['targetname'] || this.type;
  };

  class1 = (function(type, kvs1, targetname, classname) {
    var k, kvs, trgt, v;
    this.type = type != null ? type : "info_obselete";
    this.kvs = kvs1 != null ? kvs1 : {};
    this.targetname = targetname != null ? targetname : "unkown";
    this.classname = classname != null ? classname : null;
    trgt = (this.targetname ? this.targetname : this.kvs['targetname'] ? this.kvs['targetname'] : this.type ? this.type : null);
    if (this.kvs['targetname'] === null && this.targetname !== null) {
      this.kvs['targetname'] = this.targetname;
    }
    if (this.kvs['classname'] === null && this.classname !== null) {
      this.kvs['classname'] = this.classname;
    }
    kvs = (function() {
      var ref, results;
      ref = this.kvs;
      results = [];
      for (k in ref) {
        v = ref[k];
        results.push("\"" + k + "\" \"" + v + "\"");
      }
      return results;
    }).call(this);
    return this._output.push("ent_create " + this.type + (kvs.length >= 1 ? " " + (kvs.join(' ')) : ''));
  });

  ent.prototype.addoutput = (function(data) {
    this._output.push("ent_fire " + (this.trgt()) + " addoutput \"" + data + "\"");
    "ent_fire " + (this.trgt()) + " addoutput \"" + data + "\"";
  });

  ent.prototype.fire = (function(inp, args) {
    if (args == null) {
      args = "";
    }
    this._output.push("ent_fire " + (this.trgt()) + " " + inp + (args !== '' && (typeof args) === (typeof '') ? ' ' + args : args.length !== 0 && (typeof args) === (typeof []) ? args.join(' ') : void 0));
    return "ent_fire " + (this.trgt()) + " " + inp + (args !== '' && (typeof args) === (typeof '') ? ' ' + args : args.length !== 0 && (typeof args) === (typeof []) ? args.join(' ') : void 0);
  });

  return ent;

})();


/*==== Example ==== */


/*
Ent = new ent "prop_dynamic", {model:"models/headcrab.mdl"}, "t3st_N@m3"
Ent.fire "in", "arg"
Ent.addoutput "addoutput", "origin 0 0 0"
console.log do Ent.output
 */

