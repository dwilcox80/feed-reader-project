/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    describe('RSS Feeds', function() {

        /* test to make sure that the allFeeds variable has
         * been defined and that it is not empty.
         */

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* loop through each feed in allFeeds object and 
         * ensures URL is defined and not empty.
         */

        it('url property is not null or undefined', function() {
            for(let i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });

        /* loop through each feed in allFeeds object and 
         * ensure name is defined and not empty.
         */

        it('name property is not null or undefined', function() {
            for(let i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });

    //Suite to test the Menu

    describe('The Menu', function() {

        //grab the <body> element

        let body = $('body');

        //test whether or not the menu starts off as hidden

        it('starts off hidden by default', function() {
            expect(body.attr('class')).hasClass('menu-hidden');
        });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('changes visiblity when clicked', function() {
            let icon = $('.icon-list');
            icon.click();
            expect(body.attr('class').not.hasClass('menu-hidden');
            icon.click();
            expect(body.attr('class').hasClass('menu-hidden');
        });
    });

    //suite to test inital feed load
    describe('Initial Entries', function() {

        //call loadFeed prior to running test
        //pass 'done' and index position
        beforeEach(function(done) {
            loadFeed(0, done);
        });
        
        it('has at least one entry after loadFeed', function(done) {
            let feed = document.querySelectorAll('.entry');
            expect(feed.length).not.toBe(0);
            done();
        });

    });

    //new suite to test contents of feed change when new feed is selected

    describe('Feed Changes', function() {
        let feed1,
            feed2;

        beforeEach(function(done) {
            loadFeed(0);
            feed1 = $('.header-title')[0].textContent;
            loadFeed(1, done);
        });

        it('content changes', function(done) {
            feed2 = $('.header-title')[0].textContent;
            expect(feed1).not.toBe(feed2);
            done();
        });
    });
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
