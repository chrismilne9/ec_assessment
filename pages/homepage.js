var Homepage = function() {
	var featuresTab = element(by.xpath("//span[contains(text(),'Features')]"));
    var docsTab = element(by.xpath("//span[contains(text(),'Docs')]"));


    var open = function () {
    	return browser.get('http://angular.io');
    };

    var clickFeaturesTab = function() {
    	return featuresTab.click();
    };

    var clickDocsTab = function() {
    	return docsTab.click();
    };

    return {
    	clickFeaturesTab: clickFeaturesTab,
    	clickDocsTab: clickDocsTab,
    	open: open
    };
}();

module.exports = Homepage;