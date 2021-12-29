(function(es, { EQUALS, ISNULL }, { ColorRedCancelledIcon, GroupBy, MapPinVisibility, ScaleKPIColor, Timer, TimesheetLineStatusIcon }) {
function fn_inline_TimesheetISUD_btnDeleteRow_disabled($args) { 
 if (
  $args.StateInterID == "ES.TSState_Draft" ||
  $args.StateInterID == "undefined" ||
  $args.StateInterID == null
) {
  return false;
} else {
  return true;
} 
}
es.Action.fn_inline_TimesheetISUD_btnDeleteRow_disabled = function(args) { return fn_inline_TimesheetISUD_btnDeleteRow_disabled.call(this, args || {}); };

function fn_inline_TimeSheetISUD_Button_Edit_disabled($args) { 
 if (
  $args.StateInterID == "ES.TSState_Draft" ||
  $args.StateInterID == "undefined" ||
  $args.StateInterID == null
) {
  return false;
} else {
  return true;
} 
}
es.Action.fn_inline_TimeSheetISUD_Button_Edit_disabled = function(args) { return fn_inline_TimeSheetISUD_Button_Edit_disabled.call(this, args || {}); };

function fn_inline_TimesheetISUD_capStartEndTime_visible($args) { 
 if ($args.WorkingHours >0 ) {
  return true;
} else {
  return false;
} 
}
es.Action.fn_inline_TimesheetISUD_capStartEndTime_visible = function(args) { return fn_inline_TimesheetISUD_capStartEndTime_visible.call(this, args || {}); };

function fn_inline_TimeSheetISUD_2_fCategoryValue1GID_visible($args) { 
 return $args.IsWorkHourType!=='0'; 
}
es.Action.fn_inline_TimeSheetISUD_2_fCategoryValue1GID_visible = function(args) { return fn_inline_TimeSheetISUD_2_fCategoryValue1GID_visible.call(this, args || {}); };

function fn_inline_TimeSheetISUD_2_fProjectGID_visibilityType($args) { 
 return $args.IsWorkHourType !== '0'; 
}
es.Action.fn_inline_TimeSheetISUD_2_fProjectGID_visibilityType = function(args) { return fn_inline_TimeSheetISUD_2_fProjectGID_visibilityType.call(this, args || {}); };

function fn_inline_TimeSheetISUD_2_fProjectGID_visible($args) { 
 return $args.IsWorkHourType!=='0'; 
}
es.Action.fn_inline_TimeSheetISUD_2_fProjectGID_visible = function(args) { return fn_inline_TimeSheetISUD_2_fProjectGID_visible.call(this, args || {}); };

function fn_inline_TimesheetISUD_pNumbers_visible($args) { 
 if ($args.WorkingHours >0 ) {
  return true;
} else {
  return false;
} 
}
es.Action.fn_inline_TimesheetISUD_pNumbers_visible = function(args) { return fn_inline_TimesheetISUD_pNumbers_visible.call(this, args || {}); };

function fn_inline_TimesheetISUD_pOverall_visible($args) { 
 if ($args.WorkingHours >0 ) {
  return true;
} else {
  return false;
} 
}
es.Action.fn_inline_TimesheetISUD_pOverall_visible = function(args) { return fn_inline_TimesheetISUD_pOverall_visible.call(this, args || {}); };

function fn_inline_TimeSheetISUD_2_pWorkInfo_visible($args) { 
 return $args.HourType ==1; 
}
es.Action.fn_inline_TimeSheetISUD_2_pWorkInfo_visible = function(args) { return fn_inline_TimeSheetISUD_2_pWorkInfo_visible.call(this, args || {}); };

function fn_inline_TimeSheetISUD_2_viewProps_title_Date($args) { 
 var regDate = new Date($args.registrationDate);
return regDate.getDay() + '/' + regDate.getMonth() + '/'+  regDate.getFullYear(); 
}
es.Action.fn_inline_TimeSheetISUD_2_viewProps_title_Date = function(args) { return fn_inline_TimeSheetISUD_2_viewProps_title_Date.call(this, args || {}); };

function fn_inline_TimesheetISUD_viewProps_title_Date1($args) { 
 if (!$args.selectedDate) return '';
var sDate = new Date($args.selectedDate);
var myMonth = sDate.getMonth() + 1;

return " | "  + sDate.getDate() + "/" + myMonth + "/" + sDate.getFullYear(); 
}
es.Action.fn_inline_TimesheetISUD_viewProps_title_Date1 = function(args) { return fn_inline_TimesheetISUD_viewProps_title_Date1.call(this, args || {}); };

})(window.es, window.es.AppHelpers || { }, window.es.Action || { });