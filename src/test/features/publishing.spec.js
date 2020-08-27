import User from '../../User';
import Timeline from '../../Timeline';

describe('Feature: Publishing', () => {

	describe('Scenario: Alice publishes messages to her personal timeline', () => {
		const name = "Alice"
		const message = "I love the weather today.";
		const alice = User(name);
		const aliceTimeline = Timeline(alice);

		describe('Given Alice has published "I love the weather today."', () => {
			aliceTimeline.publish(message);
		});

		describe('When Alice views her timeline', () => {
			const timelineMessage = aliceTimeline.view();

			it('Then Alice sees: "I love the weather today."', () => {
				expect(aliceTimeline.getUser().getName()).to.equal("Alice");
				expect(timelineMessage).to.equal(message);
			});
		});
	});
});