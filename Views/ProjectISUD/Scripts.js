(function(es, { EQUALS, ISNULL }, { ColorRedCancelledIcon, GroupBy, MapPinVisibility, ScaleKPIColor, Timer, TimesheetLineStatusIcon }) {
function fn_inline_ProjectISUD_btnOpenRelDoc_caption($args) { 
 return ISNULL($args.DocTitle, $args.DocCaption); 
}
es.Action.fn_inline_ProjectISUD_btnOpenRelDoc_caption = function(args) { return fn_inline_ProjectISUD_btnOpenRelDoc_caption.call(this, args || {}); };

function fn_inline_ProjectISUD_capFileTypeIcon_captionIcon2($args) { 
 var iconFType = $args.ftype;

if ((iconFType === ".espak")) {
  return "fas fa-file";
} else if ((iconFType === ".zip")) {
  return "fas fa-file-archive";
} else if ((iconFType === ".ebl")) {
  return "fa fa-file-pdf";
} else if ((iconFType === ".pdf")) {
  return "fas fa-file-pdf";
} else if ((iconFType === ".pptx")) {
  return "fas fa-file-powerpoint";
} else if ((iconFType === ".png")) {
  return "fas fa-file-image";
} else if ((iconFType === ".json")) {
  return "fas fa-scroll";
} else if ((iconFType === ".docx")) {
  return "fas fa-file-word";
} else if ((iconFType === ".jpg")) {
  return "fas fa-file-image";
} else {
  return "fas fa-file-alt";
} 
}
es.Action.fn_inline_ProjectISUD_capFileTypeIcon_captionIcon2 = function(args) { return fn_inline_ProjectISUD_capFileTypeIcon_captionIcon2.call(this, args || {}); };

function fn_inline_CustomerList2_capRepInfo_caption_WorkingHours($args) { 
 return $args.WrkHrs.toFixed(2); 
}
es.Action.fn_inline_CustomerList2_capRepInfo_caption_WorkingHours = function(args) { return fn_inline_CustomerList2_capRepInfo_caption_WorkingHours.call(this, args || {}); };

function fn_inline_ProjectISUD_capVariancePctValue_captionColor($args) { 
 if ($args.VariancePct < 0) {
  return 2;
} else if ($args.VariancePct > 0 && $args.Target > 0) {
  return 3;
} else {
  return null;
} 
}
es.Action.fn_inline_ProjectISUD_capVariancePctValue_captionColor = function(args) { return fn_inline_ProjectISUD_capVariancePctValue_captionColor.call(this, args || {}); };

function fn_inline_ProjectISUD_capVarianceValue_captionColor($args) { 
 if ($args.Variance < 0) {
  return 2;
} else if ($args.Variance > 0 && $args.Target > 0) {
  return 3;
} else {
  return null;
} 
}
es.Action.fn_inline_ProjectISUD_capVarianceValue_captionColor = function(args) { return fn_inline_ProjectISUD_capVarianceValue_captionColor.call(this, args || {}); };

})(window.es, window.es.AppHelpers || { }, window.es.Action || { });