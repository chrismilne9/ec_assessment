var Homepage = require('./pages/homepage.js');
var FeaturesTab = require('./pages/features.js');
var DocsTab = require('./pages/docs.js');

describe('angular.io', function() {
  //  Click on “Features” Tab and then validate that the following words are displayed in the page “Cross Platform” and “Speed & Performance”.
  it('should contain the text "Cross Platform" and "Speed & Performance" on the Features tab', function() {
    Homepage.open().then(function() {
        Homepage.clickFeaturesTab().then(function() {

            expect(FeaturesTab.body.getText()).toContain("Cross Platform");
            expect(FeaturesTab.body.getText()).toContain("Speed & Performance");
            });    
        });
    });


  //  Click on “Docs” and search for the word “directive”, then validate that the title h1, says “Directive: DirectiveMetadataFactory”.
  it('should contain "Directive: DirectiveMetadataFactory" as title on the directive docs page', function() {
    Homepage.open().then(function() {
        Homepage.clickDocsTab().then(function() {
            DocsTab.searchForAndClickFirstResult("directive").then(function() {
                expect(DocsTab.heading.getText()).toEqual("Directive: DirectiveMetadataFactory");
                });
            });    
        });
    });


  //  Click on “Docs” and click “Tutorial” and then when list gets expanded, click on each of the items from 2 to 7 and validate that the content in the page contains the text of what you clicked in the title.
  it('should have a matching title for each tutorial subitem link', function() {
    Homepage.open().then(function() {
        Homepage.clickDocsTab().then(function() {
            DocsTab.clickTutorial().then(function() {
                DocsTab.theHeroEditor.click().then(function() {
                    expect(DocsTab.heading.getText()).toEqual("THE HERO EDITOR");
                });
                DocsTab.masterDetail.click().then(function() {
                    expect(DocsTab.heading.getText()).toEqual("MASTER/DETAIL");
                });
                DocsTab.multipleComponents.click().then(function() {
                    expect(DocsTab.heading.getText()).toEqual("MULTIPLE COMPONENTS");
                });
                DocsTab.services.click().then(function() {
                    expect(DocsTab.heading.getText()).toEqual("SERVICES");
                });
                DocsTab.routing.click().then(function() {
                    expect(DocsTab.heading.getText()).toEqual("ROUTING");
                });
                DocsTab.http.click().then(function() {
                    expect(DocsTab.heading.getText()).toEqual("HTTP");
                });
            });
        });
    });
  });

});
