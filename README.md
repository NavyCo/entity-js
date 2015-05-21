# Entity.js
Entity.js is for SourceEngine[1]
## Example
```javascript
var new_entity = n_entity({
"entity": "prop_dynamic",
"targetname": "Alyx",
"classname": "props",
"keyvalues": "\"model\" \"models/alyx.mdl\""
});
var _text = "";
_text += c_entity(new_entity);
_text += "\n";
_text += f_entity(new_entity, "color \"255 0 0\"");
_text += "\n";
_text += a_entity(new_entity, {"target":"!self","trigger":"onuser1","input":"ignitelifetime","input_arg":"0.005","delay":"0.0","repeats":"-1"});
_text += "\n";
_text += a_entity(new_entity, {"target":"!self","trigger":"onuser1","input":"fireuser4","input_arg":"","delay":"0.05","repeats":"-1"});
_text += "\n";
_text += f_entity(new_entity, "fireuser1");
console.log(_text);
```
## Outcome
```
ent_create prop_dynamic "model" "models/alyx.mdl" "classname" "props" "targetname" "Alyx";
ent_fire Alyx color "255 0 0";
ent_fire Alyx addoutput "onuser1 !self, ignitelifetime, 0.005, 0.0, -1";
ent_fire Alyx addoutput "onuser1 !self, fireuser4, , 0.05, -1";
ent_fire Alyx fireuser1;
```
