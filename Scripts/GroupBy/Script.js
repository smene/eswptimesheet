let data = $dataprovider ? $dataprovider.originalData : null;

let groupedData = (data || []).reduce(function (rv, x) {
    (rv[x[$keyField]] = rv[x[$keyField]] || []).push(x);
    return rv;
}, {});

let result = [];
let group_id = 0;
for (let grp in groupedData) {
    let item = {};
    item['group_id'] = group_id++;
    item['group_name'] = grp;
    item[$keyField] = grp;
    let grpData = groupedData[grp];
    if ($topField && groupedData[grp]) item[$topField] = grpData[$topField];
    item['count'] = grpData.reduce((a, b) => a + 1, 0);
    if ($metrics) {
        for (let mi in $metrics) {
            let metric = $metrics[mi];
            item[metric + '_sum'] = grpData.reduce((a, b) => a + b[metric], 0);
        }
    }
    result.push(item);
}
if ($topField) {
    result.sort(function (a, b) { return a[$topField] < b[$topField] ? 1 : -1 });
    if ($topN && result.length > $topN) result.length = $topN;
}
return result;