(function(es, { EQUALS, ISNULL }, { ColorRedCancelledIcon, GroupBy, MapPinVisibility, ScaleKPIColor, Timer, TimesheetLineStatusIcon }) {
function fn_inline_Invoices_btn_Cancel_visible($args) { 
 return $args.cancel == 0; 
}
es.Action.fn_inline_Invoices_btn_Cancel_visible = function(args) { return fn_inline_Invoices_btn_Cancel_visible.call(this, args || {}); };

function fn_inline_Invoices_btn_Show_visible1($args) { 
 return $args.cancel == 0; 
}
es.Action.fn_inline_Invoices_btn_Show_visible1 = function(args) { return fn_inline_Invoices_btn_Show_visible1.call(this, args || {}); };

function fn_inline_Invoices_btn_ShowPrint_visible($args) { 
 return $args.printed == 1; 
}
es.Action.fn_inline_Invoices_btn_ShowPrint_visible = function(args) { return fn_inline_Invoices_btn_ShowPrint_visible.call(this, args || {}); };

function fn_inline_Invoices_cap_Canceled_visible($args) { 
 return $args.cancel == 2; 
}
es.Action.fn_inline_Invoices_cap_Canceled_visible = function(args) { return fn_inline_Invoices_cap_Canceled_visible.call(this, args || {}); };

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