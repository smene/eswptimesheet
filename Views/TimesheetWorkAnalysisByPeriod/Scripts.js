(function(es, { EQUALS, ISNULL }, { GroupBy, ScaleKPIColor, Timer }) {
function fn_inline_TimesheetWorkAnalysisByPeriod_blt_0th4_color($args) { 
 if ($args.Utilization < 0.6) {
  return "#d9534f";
} else if ($args.Utilization >= 0.6  && $args.Utilization < 0.8) {
  return "#f0ad4e";
} else {
  return "#5cb85c";
} 
}
es.Action.fn_inline_TimesheetWorkAnalysisByPeriod_blt_0th4_color = function(args) { return fn_inline_TimesheetWorkAnalysisByPeriod_blt_0th4_color.call(this, args || {}); };

})(window.es, window.es.AppHelpers || { }, window.es.Action || { });