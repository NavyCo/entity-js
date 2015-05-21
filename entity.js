/*

Copyright(c) 2015 by Nicholas Phillips.
All Rights Reserved.

*/
function n_entity(obj) {
    var repeat = function(s, x) {
        var o = "";
        for (var i = 0; Number(x) > i; i++) {
            o += s;
        }
        return o;
    };
    var errors = ["Argument[1] is not an Object ( {} )",
        "Argument[1] does not contain \"entity\":\"TEXT\"...\n|?? That part of the object MUST contain TEXT!\nEX.\r"
    ];
    var template = 'Example of usage:\n\nvar new_entity = n_entity({\n\t"entity": "prop_dynamic",\n\t"targetname": "Alyx",\n\t"classname": "props",\n\t"keyvalues": "\\"model\\" \\"models/alyx.mdl\\""\n});\r\nc_entity(new_entity);\n\n' +
        repeat("-", 10) +
        "\n\tThis is for Source Engine ^1 games!\n\t\tSuch as Half-Life 2(*) games!" +
        "\n" + repeat("-", 10) + "";
    if (typeof(obj) !== typeof(Object({})) || (obj === undefined || obj === "")) {
        console.info(template);
    } else {
        if (typeof(obj) === typeof(Object({}))) {
            var obj2 = {};
            if (obj.entity === undefined && obj.entity === "") {
                console.error(errors[1]);
            } else {
                if (obj.entity !== undefined) {
                    obj2.entity = obj.entity;
                }
                if (obj.targetname !== undefined) {
                    obj2.targetname = obj.targetname;
                }
                if (obj.classname !== undefined) {
                    obj2.classname = obj.classname;
                }
                if (obj.keyvalues !== undefined) {
                    obj2.keyvalues = obj.keyvalues;
                }
                return (obj2);
            }
        } else {
            console.error(errors[0]);
        }
    }
}

function c_entity(obj) {
    var ent = {};
    var _o = "";
    if (obj.entity !== undefined && obj.entity !== "") {
        ent.entity = obj.entity;
        _o += "ent_create " + (ent.entity) + "";
    } else {
        return "Error: Can't proccess; entity === undefined";
    }
    if (obj.keyvalues !== undefined && obj.keyvalues !== "") {
        ent.keyvalues = obj.keyvalues;
        _o += " " + (ent.keyvalues) + "";
    } else {}
    if (obj.classname !== undefined && obj.classname !== "") {
        ent.classname = obj.classname;
        _o += " " + "\"classname\" " + "\"" + (ent.classname) + "\"";
    } else {}
    if (obj.targetname !== undefined && obj.targetname !== "") {
        ent.targetname = obj.targetname;
        _o += " " + "\"targetname\" " + "\"" + (ent.targetname) + "\"";
    } else {}
    _o += ";";
    return (_o);
}

function f_entity(obj, inp) {
    var ent = {};
    var _o = "";
    var _do = function() {
        var obj = arguments[1];
        if (arguments[0] === 0) {
            return (obj);
        } else if (arguments[0] === 1) {
            return (obj.targetname);
        } else {
            return null;
        }
    };
    if (typeof(obj) === typeof(String(""))) {
        ent.targetname = _do(0, obj);
    } else if (typeof(obj) === typeof(Object({}))) {
        ent.targetname = _do(1, obj);
    } else {
        return (
            "Targetname is not present! in either the object or string holder! ?[ f_entity(obj, inp) ]?"
        );
    }
    _o += "ent_fire " + (ent.targetname) + " ";
    _o += (inp);
    _o += ";";
    return (_o);
}

function a_entity(obj, data) {
    var _o = "";
    if (typeof(data) !== typeof(Object({}))) {
        _o += "ent_fire " + ("targetname") + " addoutput \"" + "Trigger" + " " +
            "target" + ", " + "input" + ", " + "input args" + ", " + "delay" + ", " +
            "repeats" + "\";";
        _o += "\n";
        _o += "(argument 2 example)";
        _o += "\n";
        _o += "{\n\t\"delay\": \"?\",\n\t\"input\": \"?\",\n\t\"input_arg\": \"?\",\n\t\"repeats\": \"?\",\n\t\"target\": \"?\"\n}";
        console.info(_o)
        return
    } else {
        var ent = {};
        var _do = function() {
            var obj = arguments[1];
            if (arguments[0] === 0) {
                return (obj);
            } else if (arguments[0] === 1) {
                return (obj.targetname);
            } else {
                return null;
            }
        };
        if (typeof(obj) === typeof(String())) {
            ent.targetname = _do(0, obj);
        } else if (typeof(obj) === typeof(Object({}))) {
            ent.targetname = _do(1, obj);
        } else {
            return (
                "Targetname is not present! in either the object or string holder! ?[ f_entity(obj, inp) ]?"
            );
        }
        if (data.trigger === undefined) {
            data.trigger = "trigger"
        }
        if (data.target === undefined) {
            data.target = "target"
        }
        if (data.input === undefined) {
            data.input = "input"
        }
        if (data.input_arg === undefined) {
            data.input_arg = "args"
        }
        if (data.delay === undefined) {
            data.delay = "0.0"
        }
        if (data.repeats === undefined) {
            data.repeats = "1"
        }
        _o += "ent_fire " + (ent.targetname) + " addoutput \"";
        _o += (data.trigger);
        _o += " " + (data.target);
        _o += ", " + (data.input);
        _o += ", " + (data.input_arg);
        _o += ", " + (data.delay);
        _o += ", " + (data.repeats);
        _o += "\";";
        return (_o);
    }
}
// // // // Example
// var new_entity = n_entity({
// "entity": "prop_dynamic",
// "targetname": "Alyx",
// "classname": "props",
// "keyvalues": "\"model\" \"models/alyx.mdl\""
// });
// var _text = "";
// _text += c_entity(new_entity);
// _text += "\n";
// _text += f_entity(new_entity, "color \"255 0 0\"");
// _text += "\n";
// _text += a_entity(new_entity, {"target":"!self","trigger":"onuser1","input":"ignitelifetime","input_arg":"0.005","delay":"0.0","repeats":"-1"});
// _text += "\n";
// _text += a_entity(new_entity, {"target":"!self","trigger":"onuser1","input":"fireuser4","input_arg":"","delay":"0.05","repeats":"-1"});
// _text += "\n";
// _text += f_entity(new_entity, "fireuser1");
// console.log(_text);
// // // //