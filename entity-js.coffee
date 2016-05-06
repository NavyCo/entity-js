###== Class/Constructor ==###
class ent
  _output: []
  output: -> @_output.join ';\n'
  trgt: -> @targetname or @kvs['targetname'] or @type
  constructor: ((@type="info_obselete",@kvs={},@targetname="unkown",@classname=null) ->
    trgt = (if @targetname then @targetname else if @kvs['targetname'] then @kvs['targetname'] else if @type then @type else null)
    if @kvs['targetname'] is null and @targetname isnt null then @kvs['targetname'] = @targetname
    if @kvs['classname'] is null and @classname isnt null then @kvs['classname'] = @classname
    kvs = for k,v of @kvs then """\"#{k}\" \"#{v}\""""
    @_output.push "ent_create #{@type}#{if kvs.length >= 1 then " #{kvs.join(' ')}" else ''}"
  ); addoutput: ((data) ->
    @_output.push "ent_fire #{do @trgt} addoutput \"#{data}\""
    "ent_fire #{do @trgt} addoutput \"#{data}\""
    return
  ); fire: ((inp,args="") ->
    @_output.push "ent_fire #{do @trgt} #{inp}#{if args isnt '' and (typeof args) is (typeof '') then ' '+args else if args.length isnt 0 and (typeof args) is (typeof []) then args.join(' ')}"
    "ent_fire #{do @trgt} #{inp}#{if args isnt '' and (typeof args) is (typeof '') then ' '+args else if args.length isnt 0 and (typeof args) is (typeof []) then args.join(' ')}"
  );


###==== Example ====###
###
Ent = new ent "prop_dynamic", {model:"models/headcrab.mdl"}, "t3st_N@m3"
Ent.fire "in", "arg"
Ent.addoutput "addoutput", "origin 0 0 0"
console.log do Ent.output
###