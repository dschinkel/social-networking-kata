import User from '../../User';
import Timeline from '../../Timeline';

describe('Feature: Timeline', () => {

	it('Scenario: Alice views Bob\'s timeline', () => {
		const bob = User("Bob");
		const bobTimeline = Timeline(bob);
		bobTimeline.publish("Darn! We lost!")
		bobTimeline.publish("Good game though.")

		const messages = bobTimeline.view();

		expect(messages[0]).to.equal('Good game though. (1 minute ago)')
		expect(messages[1]).to.equal('Darn! We lost! (2 minute ago)')
	});
});