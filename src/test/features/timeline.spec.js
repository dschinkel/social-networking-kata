import User from '../../User';
import Timeline from '../../Timeline';

describe('Feature: Timeline', () => {

	it('Scenario: Alice views Bob\'s timeline', function (done){
		this.timeout(3000)
		const bob = User("Bob");
		const bobTimeline = Timeline(bob);
		let messages;

		bobTimeline.publish("Good game though.");

		setTimeout(()=> {
			messages = bobTimeline.view();
			expect(messages[0].elapsedText).to.equal('Good game though. (1 minute ago)');
		}, 1000);

		bobTimeline.publish("Darn! We lost!");

		setTimeout(()=> {
			messages = bobTimeline.view();
			expect(messages[1].elapsedText).to.equal('Darn! We lost! (2 minute ago)')
			done();
		}, 2000);
	});
});