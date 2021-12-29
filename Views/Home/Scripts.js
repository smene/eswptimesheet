(function(es, { EQUALS, ISNULL }, { ColorRedCancelledIcon, GroupBy, MapPinVisibility, ScaleKPIColor, Timer, TimesheetLineStatusIcon }) {
function fn_inline_Home_cap_ProjectInfo_caption_From($args) { 
 return new Date($args.FromDate).toLocaleDateString(); 
}
es.Action.fn_inline_Home_cap_ProjectInfo_caption_From = function(args) { return fn_inline_Home_cap_ProjectInfo_caption_From.call(this, args || {}); };

function fn_inline_Home2_cap_ProjectInfo_caption_From1($args) { 
 var StartDate = new Date($args.SD);
return StartDate.getDay() +'/'+ StartDate.getMonth() +'/'+ StartDate.getFullYear(); 
}
es.Action.fn_inline_Home2_cap_ProjectInfo_caption_From1 = function(args) { return fn_inline_Home2_cap_ProjectInfo_caption_From1.call(this, args || {}); };

function fn_inline_Home2_cap_ProjectInfo_caption_To($args) { 
 var endDate = new Date($args.endD);
return endDate.getDay() + '/' + endDate.getMonth() + '/'+  endDate.getFullYear(); 
}
es.Action.fn_inline_Home2_cap_ProjectInfo_caption_To = function(args) { return fn_inline_Home2_cap_ProjectInfo_caption_To.call(this, args || {}); };

function fn_inline_Home_cap_WorkInfo_caption1($args) { 
 var customer = $args.CustomerData;
var prj = $args.ProjectData;

if (
  (customer === null || customer === "undefined") &&
  (prj === null || prj === "undefined")
) {
  return $args.OutOfWork;
} else {
  return $args.Expr;
} 
}
es.Action.fn_inline_Home_cap_WorkInfo_caption1 = function(args) { return fn_inline_Home_cap_WorkInfo_caption1.call(this, args || {}); };

function fn_inline_Home_ColorScale_filter($args) { 
 return row => $args.MyPerformance >= row.min && $args.MyPerformance < row.max ; 
}
es.Action.fn_inline_Home_ColorScale_filter = function(args) { return fn_inline_Home_ColorScale_filter.call(this, args || {}); };

function fn_inline_Home_MyProjectChart_xAxis($args) { 
 return ' '; 
}
es.Action.fn_inline_Home_MyProjectChart_xAxis = function(args) { return fn_inline_Home_MyProjectChart_xAxis.call(this, args || {}); };

function fn_inline_Home_MyTSLbyPrjConsolidated_filter($args) { 
 return row=>!row.RegistrationDate; 
}
es.Action.fn_inline_Home_MyTSLbyPrjConsolidated_filter = function(args) { return fn_inline_Home_MyTSLbyPrjConsolidated_filter.call(this, args || {}); };

function fn_inline_Home_MyTSLbyPrjDetailed_filter($args) { 
 return row=>row.RegistrationDate; 
}
es.Action.fn_inline_Home_MyTSLbyPrjDetailed_filter = function(args) { return fn_inline_Home_MyTSLbyPrjDetailed_filter.call(this, args || {}); };

function fn_inline_Home2_TimesheetLinesFilteredByState_Linestate_InterID($args) { 
 return ISNULL($args.State,'*'); 
}
es.Action.fn_inline_Home2_TimesheetLinesFilteredByState_Linestate_InterID = function(args) { return fn_inline_Home2_TimesheetLinesFilteredByState_Linestate_InterID.call(this, args || {}); };

})(window.es, window.es.AppHelpers || { }, window.es.Action || { });