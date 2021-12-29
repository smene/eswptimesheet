(function(es, { EQUALS, ISNULL }, { ColorRedCancelledIcon, GroupBy, MapPinVisibility, ScaleKPIColor, Timer, TimesheetLineStatusIcon }) {
function fn_inline_TimesheetList_capTSInfo_caption_TSHourDate($args) { 
 var sDate = new Date($args.selectedDate);
var myD= sDate.getMonth()+1 ;
return sDate.getDate() + '/' + myD + '/'+  sDate.getFullYear(); 
}
es.Action.fn_inline_TimesheetList_capTSInfo_caption_TSHourDate = function(args) { return fn_inline_TimesheetList_capTSInfo_caption_TSHourDate.call(this, args || {}); };

function fn_inline_TimesheetList_capUtilizationValue_captionColor($args) { 
 if ($args.value < 0.6) 
    return 2
 else if ($args.value <0.8) 
    return 4
 else 
    return 3 
}
es.Action.fn_inline_TimesheetList_capUtilizationValue_captionColor = function(args) { return fn_inline_TimesheetList_capUtilizationValue_captionColor.call(this, args || {}); };

function fn_inline_TimesheetList_chrtKPIs_xAxis($args) { 
 return ""; 
}
es.Action.fn_inline_TimesheetList_chrtKPIs_xAxis = function(args) { return fn_inline_TimesheetList_chrtKPIs_xAxis.call(this, args || {}); };

})(window.es, window.es.AppHelpers || { }, window.es.Action || { });