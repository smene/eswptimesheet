(function(es, { EQUALS, ISNULL }, { ColorRedCancelledIcon, GroupBy, MapPinVisibility, ScaleKPIColor, Timer, TimesheetLineStatusIcon }) {
function fn_inline_Orders_btn_qcb4_visible($args) { 
 return $args.trans == 0 & $args.cancel == 0; 
}
es.Action.fn_inline_Orders_btn_qcb4_visible = function(args) { return fn_inline_Orders_btn_qcb4_visible.call(this, args || {}); };

function fn_inline_Orders_btn_riu4_visible($args) { 
 return $args.trans != 0; 
}
es.Action.fn_inline_Orders_btn_riu4_visible = function(args) { return fn_inline_Orders_btn_riu4_visible.call(this, args || {}); };

function fn_inline_Orders_cap_4dwf_visible($args) { 
 return $args.cancel == 2; 
}
es.Action.fn_inline_Orders_cap_4dwf_visible = function(args) { return fn_inline_Orders_cap_4dwf_visible.call(this, args || {}); };

function fn_inline_Orders_cap_PartialyTrans_visible($args) { 
 return $args.trans == 1; 
}
es.Action.fn_inline_Orders_cap_PartialyTrans_visible = function(args) { return fn_inline_Orders_cap_PartialyTrans_visible.call(this, args || {}); };

function fn_inline_TimesheetInvoiceLabour_grdxLineItems_caption_DocDate($args) { 
 var sDate = new Date($args.selectedDate);
var myD = sDate.getMonth() + 1;
return sDate.getDate() + "/" + myD + "/" + sDate.getFullYear(); 
}
es.Action.fn_inline_TimesheetInvoiceLabour_grdxLineItems_caption_DocDate = function(args) { return fn_inline_TimesheetInvoiceLabour_grdxLineItems_caption_DocDate.call(this, args || {}); };

})(window.es, window.es.AppHelpers || { }, window.es.Action || { });