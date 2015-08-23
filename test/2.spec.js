var eslint = require('./support/eslint-adapter');
var expect = require('chai').expect;


describe( '2. Beautiful Syntax', function() {

  describe( 'A. Parens, Braces, Linebreaks', function() {

    it( 'should fail when cramped syntax', function() {
      var report = eslint.executeOnText('while(true) i++;');

      expect(report.results[0].errorCount).to.equal(1);
      expect(report.results[0].messages[0].ruleId).to.equal('space-after-keywords');
    } );

    it( 'should show no errors or warnings on idomatic source', function() {

      var report = eslint.executeOnFiles(['./test/fixtures/2.A.1.1.js']);

      expect(report.results[0].errorCount).to.equal(0);
      expect(report.results[0].warningCount).to.equal(0);

    } );


    it( 'should show errors on non-idomatic source', function() {

      var report = eslint.executeOnFiles(['./test/fixtures/2.A.1.1.bad.js']);

      expect(report.results[0].errorCount).to.not.equal(0);
      expect(report.results[0].warningCount).to.equal(0);

    } );

  } );

} );
