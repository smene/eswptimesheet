(function(es, { EQUALS, ISNULL }, { ColorRedCancelledIcon, GroupBy, MapPinVisibility, ScaleKPIColor, Timer, TimesheetLineStatusIcon }) {
function fn_inline_TimesheetWorkRejectionAnalysis_RejectedBillablePCT_captionColor1($args) { 
 if ($args.pct < 0.1)
    return 4;
else return 2; 
}
es.Action.fn_inline_TimesheetWorkRejectionAnalysis_RejectedBillablePCT_captionColor1 = function(args) { return fn_inline_TimesheetWorkRejectionAnalysis_RejectedBillablePCT_captionColor1.call(this, args || {}); };

function fn_inline_TimesheetWorkRejectionAnalysis_RejectedLabourPCT_captionColor1($args) { 
 if ($args.pct < 0.1)
    return 4;
else return 2; 
}
es.Action.fn_inline_TimesheetWorkRejectionAnalysis_RejectedLabourPCT_captionColor1 = function(args) { return fn_inline_TimesheetWorkRejectionAnalysis_RejectedLabourPCT_captionColor1.call(this, args || {}); };

function fn_inline_TimesheetWorkRejectionAnalysis_RejectedLines_dv_fRejectReasonGID($args) { 
 return ISNULL($args.reason,'*'); 
}
es.Action.fn_inline_TimesheetWorkRejectionAnalysis_RejectedLines_dv_fRejectReasonGID = function(args) { return fn_inline_TimesheetWorkRejectionAnalysis_RejectedLines_dv_fRejectReasonGID.call(this, args || {}); };

})(window.es, window.es.AppHelpers || { }, window.es.Action || { });