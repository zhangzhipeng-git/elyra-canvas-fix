"use strict";var e=require("../createClass-826941b3.js"),n=require("immutable"),s=function(){function s(){e._classCallCheck(this,s);var t=new n.Record({undoCmnds:new n.List,redoCmnds:new n.Stack});this.rec=t()}return e._createClass(s,[{key:"do",value:function(e){this.rec=this.rec.merge({undoCmnds:this.rec.undoCmnds.push(e),redoCmnds:new n.Stack}),this.rec.undoCmnds.size>100&&(this.rec=this.rec.set("undoCmnds",this.rec.undoCmnds.shift())),e.do()}},{key:"undo",value:function(){if(this.canUndo()){var e=this.getPrevious();this.rec=this.rec.merge({undoCmnds:this.rec.undoCmnds.pop(),redoCmnds:this.rec.redoCmnds.push(e)}),e.undo()}}},{key:"redo",value:function(){if(this.canRedo()){var e=this.getNext();this.rec=this.rec.merge({undoCmnds:this.rec.undoCmnds.push(e),redoCmnds:this.rec.redoCmnds.pop()}),e.redo()}}},{key:"canUndo",value:function(){return!this.rec.undoCmnds.isEmpty()}},{key:"canRedo",value:function(){return!this.rec.redoCmnds.isEmpty()}},{key:"getPrevious",value:function(){return this.rec.undoCmnds.last()}},{key:"getNext",value:function(){return this.rec.redoCmnds.first()}},{key:"getUndoCommands",value:function(){return this.rec.undoCmnds}},{key:"getRedoCommands",value:function(){return this.rec.redoCmnds}}]),s}(),t=function(){function n(){e._classCallCheck(this,n),this.commands=new s}return e._createClass(n,[{key:"do",value:function(e){this.commands.do(e)}},{key:"undo",value:function(){this.commands.undo()}},{key:"redo",value:function(){this.commands.redo()}},{key:"getUndoCommand",value:function(){return this.commands.canUndo()?this.commands.getPrevious():null}},{key:"getRedoCommand",value:function(){return this.commands.canRedo()?this.commands.getNext():null}},{key:"getStack",value:function(){return{undos:this.commands.getUndoCommands(),redos:this.commands.getRedoCommands()}}},{key:"canUndo",value:function(){return this.commands.canUndo()}},{key:"canRedo",value:function(){return this.commands.canRedo()}},{key:"clearCommandStack",value:function(){this.commands=new s}}]),n}();module.exports=t;
//# sourceMappingURL=command-stack.js.map