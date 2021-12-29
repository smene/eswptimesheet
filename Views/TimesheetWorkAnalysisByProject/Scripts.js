(function(es, { EQUALS, ISNULL }, { GroupBy, ScaleKPIColor, Timer }) {
function fn_inline_TimesheetWorkAnalysisByProject_bullet_color($args) { 
 if ($args.VariancePct < 0) {
  return "#d9534f";
} else if ($args.VariancePct > 0 && $args.Target > 0) {
  return "#5cb85c";
} else {
  return null;
} 
}
es.Action.fn_inline_TimesheetWorkAnalysisByProject_bullet_color = function(args) { return fn_inline_TimesheetWorkAnalysisByProject_bullet_color.call(this, args || {}); };

})(window.es, window.es.AppHelpers || { }, window.es.Action || { });