import User from '../../User';
import Timeline from '../../Timeline';

describe('Feature: Publishing', () => {

	describe('Scenario: Alice publishes messages to her personal timeline', () => {
		const alice = User("Alice");
		const aliceTimeline = Timeline(alice);

		describe('Given Alice has published "I love the weather today."', () => {
			aliceTimeline.publish('I love the weather today.');
		});

		describe('When Alice views her timeline', () => {
			const timelineMessage = aliceTimeline.view();

			it('Then Alice sees: "I love the weather today."', () => {
				expect(alice.getName()).to.equal("Alice");
				expect(timelineMessage).to.equal("I love the weather today.");
			});
		});
	});
});