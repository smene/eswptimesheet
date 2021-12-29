(function(es, { EQUALS, ISNULL }, { ColorRedCancelledIcon, GroupBy, MapPinVisibility, ScaleKPIColor, Timer, TimesheetLineStatusIcon }) {
function fn_inline_TimesheetInvoiceLabour_grdxLineItems_caption_DocDate($args) { 
 var sDate = new Date($args.selectedDate);
var myD = sDate.getMonth() + 1;
return sDate.getDate() + "/" + myD + "/" + sDate.getFullYear(); 
}
es.Action.fn_inline_TimesheetInvoiceLabour_grdxLineItems_caption_DocDate = function(args) { return fn_inline_TimesheetInvoiceLabour_grdxLineItems_caption_DocDate.call(this, args || {}); };

})(window.es, window.es.AppHelpers || { }, window.es.Action || { });