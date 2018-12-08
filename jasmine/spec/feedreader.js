/* eslint-disable no-undef */

// feedreader.js
//
// This is the spec file that Jasmine will read and contains
// all of the tests that will be run against your application.

// We're placing all of our tests within the $() function,
// since some of these tests may require DOM elements. We want
// to ensure they don't run until the DOM is ready.
$(function test() {
  // This is our first test suite - a test suite just contains
  // a related set of tests. This suite is all about the RSS
  // feeds definitions, the allFeeds variable in our application.

  describe('RSS Feeds', function rssFeeds() {
    // This is our first test - it tests to make sure that the
    // allFeeds variable has been defined and that it is not
    // empty. Experiment with this before you get started on
    // the rest of this project. What happens when you change
    // allFeeds in app.js to be an empty array and refresh the
    // page?
    it('are defined', function areDefined() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    // TODO: Write a test that loops through each feed
    // in the allFeeds object and ensures it has a URL define
    // and that the URL is not empty.
    it('have non-empty URLs', function nonEmptyUrls() {
      allFeeds.forEach(function each(feed) {
        expect(feed.url).toBeDefined();
        expect(feed.url.length).not.toBe(0);
      });
    });

    // TODO: Write a test that loops through each feed
    // in the allFeeds object and ensures it has a name defined
    // and that the name is not empty.
    it('have non-empty names', function nonEmptyNames() {
      allFeeds.forEach(function each(feed) {
        expect(feed.name).toBeDefined();
        expect(feed.name.length).not.toBe(0);
      });
    });
  });

  // TODO: Write a new test suite named "The menu"
  describe('The Menu', function menu() {
    // TODO: Write a test that ensures the menu element is
    // hidden by default. You'll have to analyze the HTML and
    // the CSS to determine how we're performing the
    // hiding/showing of the menu element.
    it('is hidden by default', function hidden() {
      expect($('body')[0]).toHaveClass('menu-hidden');
    });

    // TODO: Write a test that ensures the menu changes
    // visibility when the menu icon is clicked. This test
    // should have two expectations: does the menu display when
    // clicked and does it hide when clicked again.
    it("displays when icon is clicked and hides when it's clicked again", function toggle() {
      menuIcon = $('.menu-icon-link');
      menuIcon.click();
      expect($('body')[0]).not.toHaveClass('menu-hidden');

      menuIcon.click();
      expect($('body')[0]).toHaveClass('menu-hidden');
    });
  });

  // TODO: Write a new test suite named "Initial Entries"
  describe('Initial Entries', function initialEntries() {
    beforeEach(function each(done) {
      loadFeed(0, function cb() {
        done();
      });
    });

    // TODO: Write a test that ensures when the loadFeed
    // function is called and completes its work, there is at least
    // a single .entry element within the .feed container.
    // Remember, loadFeed() is asynchronous so this test will require
    // the use of Jasmine's beforeEach and asynchronous done() function.
    it('should include at least one entry', function includeOneEntry(done) {
      expect($('.feed .entry').length).toBeGreaterThan(0);
      done();
    });
  });

  // TODO: Write a new test suite named "New Feed Selection"
  describe('New Feed Selection', function newFeedSelection() {
    beforeEach(function each(done) {
      loadFeed(0, function cb() {
        done();
      });
    });

    // TODO: Write a test that ensures when a new feed is loaded
    // by the loadFeed function that the content actually changes.
    // Remember, loadFeed() is asynchronous.
    it('content changes when new feed is loaded', function contentChanges(done) {
      const initialEntry = $('.feed .entry')[0].innerText;
      loadFeed(1, function cb() {
        expect(initialEntry).not.toEqual($('.feed .entry')[0].innerText);
        done();
      });
    });
  });
}());
