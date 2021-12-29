(function(es, { EQUALS, ISNULL }, { ColorRedCancelledIcon, GroupBy, MapPinVisibility, ScaleKPIColor, Timer, TimesheetLineStatusIcon }) {
function fn_inline_TimesheetSubmitProcess_OrderKPIcolor_filter($args) { 
 return row => $args.qty>= row.min && $args.qty<row.max ; 
}
es.Action.fn_inline_TimesheetSubmitProcess_OrderKPIcolor_filter = function(args) { return fn_inline_TimesheetSubmitProcess_OrderKPIcolor_filter.call(this, args || {}); };

function fn_inline_TimesheetSubmitProcess_OrderQtyPCT_captionColor1($args) { 
 if ($args.value < 0.6) 
    return 2
 else if ($args.value <0.8) 
    return 4
 else 
    return 3 
}
es.Action.fn_inline_TimesheetSubmitProcess_OrderQtyPCT_captionColor1 = function(args) { return fn_inline_TimesheetSubmitProcess_OrderQtyPCT_captionColor1.call(this, args || {}); };

function fn_inline_TimesheetSubmitProcess_TurnoverKPIcolor_filter($args) { 
 return row => $args.turnover>= row.min && $args.turnover<row.max 
}
es.Action.fn_inline_TimesheetSubmitProcess_TurnoverKPIcolor_filter = function(args) { return fn_inline_TimesheetSubmitProcess_TurnoverKPIcolor_filter.call(this, args || {}); };

function fn_inline_TimesheetSubmitProcess_TurnoverPCT_captionColor($args) { 
 if ($args.value < 0.6) 
    return 2
 else if ($args.value <0.8) 
    return 4
 else 
    return 3 
}
es.Action.fn_inline_TimesheetSubmitProcess_TurnoverPCT_captionColor = function(args) { return fn_inline_TimesheetSubmitProcess_TurnoverPCT_captionColor.call(this, args || {}); };

})(window.es, window.es.AppHelpers || { }, window.es.Action || { });