function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
    var r = window.location.search.substr(1).match(reg)
    if (r != null) return unescape(r[2])
    return null
}

function getPageVersion() {
    var ts_href = window.location.href;
    var ts_indexof = ts_href.lastIndexOf("/");
    var ts_indexText = ts_href.substring(ts_indexof + 1);
    var ts_htmlBeforeText = ts_indexText.indexOf(".html");
    var ts_mainText = ts_indexText.substring(0, ts_htmlBeforeText);
    switch (ts_mainText) {
        case 'about':
            return '300'
        case 'article':
            return '200'
        case 'company-check':
            return '110'
        case 'enterprise-cancellation':
            return '113'
        case 'enterprise-change':
            return '112'
        case 'enterprise-registration':
            return '111'
        case 'financial-agent':
            return '121'
        case 'finance':
            return '122'
        case 'fund-social':
            return '150'
        case 'high-tech':
            return '140'
        case 'index':
            return '100'
        case 'news':
            return '200'
        case 'patent':
            return '132'
        case 'qualification':
            return '160'
        case 'tax-affairs':
            return '124'
        case 'trademark':
            return '131'
        case 'verification':
            return '123'
        default:
            return '100';
    }
}

window.baseUrl = 'http://82.157.26.10:8082'
$(function () {
    $.ajax({
        type: "POST",
        url: window.baseUrl + "/renren-fastplus/api/hy/getPageInfo",
        data: JSON.stringify({
            "pageType": 'P' + getPageVersion()
        }),
        headers: {
            "Content-Type": "application/json"
        },
        success: function (data) {
            if (data.code === 0) {
                var result = data.pageInfo
                result.forEach(element => {
                    if (element.key === 'TITLE_'+ getPageVersion().split('').join('_')) {
                        document.title = element.value
                    }
                    if (element.key === 'KEYWORD_' + getPageVersion().split('').join('_')) {
                        $("meta[name='keywords']").attr('content', element.value);
                    }
                    if (element.key === 'DESC_' + getPageVersion().split('').join('_')) {
                        $("meta[name='description']").attr('content', element
                            .value);
                    }
                });
            }
        }
    })
})