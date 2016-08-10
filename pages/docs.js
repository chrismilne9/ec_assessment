var DocsTab = function() {
    var searchBox = element(by.xpath("//*[@id='search-io']"));
    var result = element.all(by.xpath(`//div[contains(@class, 'autocomplete')]/ul/li/p/em`)).first();
    var heading = element(by.xpath(`//h1[contains(@class, 'hero-title')]`));
    var tutorial = element(by.xpath("//div/a[contains(text(), 'Tutorial')]"));

    var theHeroEditor = element(by.xpath("//div/a[contains(text(), 'The Hero Editor')]"));
    var masterDetail = element(by.xpath("//div/a[contains(text(), 'Master/Detail')]"));
    var multipleComponents = element(by.xpath("//div/a[contains(text(), 'Multiple Components')]"));
    var services = element(by.xpath("//div/a[contains(text(), 'Services')]"));
    var routing = element(by.xpath("//div/a[contains(text(), 'Routing')]"));
    var http = element(by.xpath("//div/a[contains(text(), 'Http')]"));

    var searchForAndClickFirstResult = function(term) {
    	searchBox.sendKeys(term);

    	//hate to use sleep here, but search results seem to just get mashed into a cloned DOM object, so protractor just tries to continue without waiting for XHRs to be handled
    	browser.sleep(3000);

    	browser.wait(result.isDisplayed);
    	result.click();

        //shouldn't be necessary, but protractor doesn't seem to wait for docs page to load before continuing
        return browser.sleep(1000);
    };

    var clickTutorial = function() {
    	return tutorial.click();
    }

    return {
    	searchForAndClickFirstResult: searchForAndClickFirstResult,
    	heading: heading,
    	clickTutorial: clickTutorial,

		theHeroEditor: theHeroEditor,
		masterDetail: masterDetail,
		multipleComponents: multipleComponents,
		services: services,
		routing: routing,
		http: http
    };
}();

module.exports = DocsTab;