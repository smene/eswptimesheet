(function(es, { EQUALS, ISNULL }, { ColorRedCancelledIcon, GroupBy, MapPinVisibility, ScaleKPIColor, Timer, TimesheetLineStatusIcon }) {
function fn_inline_ProjectList_capPrjTimePeriod_caption_EndD($args) { 
 var sDate = new Date($args.selectedDate);
var myD = sDate.getMonth() + 1;
return sDate.getDate() + "/" + myD + "/" + sDate.getFullYear(); 
}
es.Action.fn_inline_ProjectList_capPrjTimePeriod_caption_EndD = function(args) { return fn_inline_ProjectList_capPrjTimePeriod_caption_EndD.call(this, args || {}); };

function fn_inline_ProjectList_capPrjTimePeriod_caption_StartD($args) { 
 var sDate = new Date($args.selectedDate);
var myD = sDate.getMonth() + 1;
return sDate.getDate() + "/" + myD + "/" + sDate.getFullYear(); 
}
es.Action.fn_inline_ProjectList_capPrjTimePeriod_caption_StartD = function(args) { return fn_inline_ProjectList_capPrjTimePeriod_caption_StartD.call(this, args || {}); };

function fn_inline_CustomerList2_capRepInfo_caption_WorkingHours($args) { 
 return $args.WrkHrs.toFixed(2); 
}
es.Action.fn_inline_CustomerList2_capRepInfo_caption_WorkingHours = function(args) { return fn_inline_CustomerList2_capRepInfo_caption_WorkingHours.call(this, args || {}); };

function fn_inline_ProjectList_capVariancePctValue_captionColor($args) { 
 if ($args.VariancePct < 0) {
  return 2;
} else if ($args.VariancePct > 0 && $args.Target > 0) {
  return 3;
} else {
  return null;
} 
}
es.Action.fn_inline_ProjectList_capVariancePctValue_captionColor = function(args) { return fn_inline_ProjectList_capVariancePctValue_captionColor.call(this, args || {}); };

function fn_inline_ProjectList_capVarianceValue_captionColor($args) { 
 if ($args.Variance < 0) {
  return 2;
} else if ($args.Variance > 0 && $args.Target > 0) {
  return 3;
} else {
  return null;
} 
}
es.Action.fn_inline_ProjectList_capVarianceValue_captionColor = function(args) { return fn_inline_ProjectList_capVarianceValue_captionColor.call(this, args || {}); };

})(window.es, window.es.AppHelpers || { }, window.es.Action || { });