# Social Networking Kata
[Original Repo](https://github.com/integral-io/katas/tree/master/social-networking)

Implement the core **domain logic** for a social networking application (similar to Twitter) satisfying the features below.

``` {.sourceCode .gherkin}
Feature: Publishing
   Scenario: Alice publishes messages to her personal timeline.   
      Given Alice has published "I love the weather today."
      When Alice views her timeline
      Then Alice sees:
         "I love the weather today."
      
Feature: Timeline
   Scenario: Alice views Bob's timeline.
      Given Bob has published "Darn! We lost!"
      And Bob has published "Good game though."
      When Alice views Bob's timeline
      Then Alice sees:
         Good game though. (1 minute ago)
         Darn! We lost! (2 minute ago)
      
Feature: Following
   Scenario: Charlie can follow Alice and Bob, and he views an aggregated list of all timelines.
      Given Alice has published "I love the weather today."
      And Bob has published "Darn! We lost!"
      And Bob has published "Good game though."
      And Charlie has published "I'm in New York today! Anyone wants to have a coffee?"
      When Charlie follows Alice
      And Charlie follows Bob
      And Charlie views his wall
      Then Charlie sees:
         Charlie - I'm in New York today! Anyone wants to have a coffee? (15 seconds ago)     
         Bob - Good game though. (1 minute ago)     
         Bob - Damn! We lost! (2 minutes ago)     
         Alice - I love the weather today (5 minutes ago)    
```
# Notes
The Domain Logic is using [JS factory functions](https://medium.com/javascript-scene/javascript-factory-functions-with-es6-4d224591a8b1) which uses JS Closure.  I Could have uses classes, but this is just my preference for katas; keep it simple.

I have also demonstrated a couple different styles:
- `publishing.spec.js` shows Gherkin in the tests (_without_ the Cucumber framework due to lack of time)
- `timeline.spec.js` shows the behavior without Gherkin but still gets the behavior across to the reader

# Getting Started
- `yarn` - install dependencies

# Tests
- `yarn test`