(function(es, { EQUALS, ISNULL }, { ColorRedCancelledIcon, GroupBy, MapPinVisibility, ScaleKPIColor, Timer, TimesheetLineStatusIcon }) {
function fn_inline_CustomerList_btn_Map_visible($args) { 
 var Longitude = $args.Longitude;
var Latitude = $args.Latitude;

if ((Longitude == null || Longitude == 'undefined' || Longitude == 0) && (Latitude == null || Latitude == 'undefined' || Latitude == 0)) {
    return false;
} else {
    return true;
} 
}
es.Action.fn_inline_CustomerList_btn_Map_visible = function(args) { return fn_inline_CustomerList_btn_Map_visible.call(this, args || {}); };

function fn_inline_CustomerList2_capActivity_caption($args) { 
 return ISNULL($args.Act,' '); 
}
es.Action.fn_inline_CustomerList2_capActivity_caption = function(args) { return fn_inline_CustomerList2_capActivity_caption.call(this, args || {}); };

function fn_inline_CustomerList_capBuBa_caption_BA($args) { 
 return ISNULL($args.BU,' '); 
}
es.Action.fn_inline_CustomerList_capBuBa_caption_BA = function(args) { return fn_inline_CustomerList_capBuBa_caption_BA.call(this, args || {}); };

function fn_inline_CustomerList_capBuBa_caption_BU($args) { 
 return ISNULL($args.BA,' '); 
}
es.Action.fn_inline_CustomerList_capBuBa_caption_BU = function(args) { return fn_inline_CustomerList_capBuBa_caption_BU.call(this, args || {}); };

function fn_inline_CustomerList_capBuBa_caption_Sep($args) { 
 let bu = $args.BU;
let ba = $args.BA;

if ((bu == null && ba == null) || (bu == 'undefined' && ba == 'undefined'))  {
  return "";
} else {
  return " | ";
} 
}
es.Action.fn_inline_CustomerList_capBuBa_caption_Sep = function(args) { return fn_inline_CustomerList_capBuBa_caption_Sep.call(this, args || {}); };

function fn_inline_CustomerList_capBuBa_visible($args) { 
 let bu = $args.BU;
let ba = $args.BA;

if ((bu == null && ba == null) || (bu == 'undefined' && ba == 'undefined'))  {
 return 0;
} else {
  return 1;
} 
}
es.Action.fn_inline_CustomerList_capBuBa_visible = function(args) { return fn_inline_CustomerList_capBuBa_visible.call(this, args || {}); };

function fn_inline_CustomerList2_capRepInfo_caption_WorkingHours($args) { 
 return $args.WrkHrs.toFixed(2); 
}
es.Action.fn_inline_CustomerList2_capRepInfo_caption_WorkingHours = function(args) { return fn_inline_CustomerList2_capRepInfo_caption_WorkingHours.call(this, args || {}); };

function fn_inline_CustomerList2_capSalesPerson_caption_Code($args) { 
 return ISNULL($args.Code,' '); 
}
es.Action.fn_inline_CustomerList2_capSalesPerson_caption_Code = function(args) { return fn_inline_CustomerList2_capSalesPerson_caption_Code.call(this, args || {}); };

function fn_inline_CustomerList2_capSalesPerson_caption_Name($args) { 
 return ISNULL($args.Name,' '); 
}
es.Action.fn_inline_CustomerList2_capSalesPerson_caption_Name = function(args) { return fn_inline_CustomerList2_capSalesPerson_caption_Name.call(this, args || {}); };

function fn_inline_Home2_TimesheetLinesFilteredByState_Linestate_InterID($args) { 
 return ISNULL($args.State,'*'); 
}
es.Action.fn_inline_Home2_TimesheetLinesFilteredByState_Linestate_InterID = function(args) { return fn_inline_Home2_TimesheetLinesFilteredByState_Linestate_InterID.call(this, args || {}); };

})(window.es, window.es.AppHelpers || { }, window.es.Action || { });