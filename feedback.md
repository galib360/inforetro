Feedback:

Motivate the topic in the introduction vs. eye tracking and clicking.
- In the introduction, the motivation for the tracking of users' mouse movements does not become very cleary; can't we track online behaviour through clicks? Or if we need fine-grained information, shouldn't we resort to eye-tracking? Why is mouse movement tracking attractive? (there are reasons that make it attractive, but you need to make those reasons explicit compared to the alternatives of clicks and eye-tracking).

The report should be self sufficient providing enough context for a reader to understand with basic IR.
- At this point in time, in order to understand the introduction the reader has to be familiar with the paper you reproduce (all of it or just some of it?). The report should be self-sufficient. Make sure that you provide enough context for a reader with general IR knowledge to understand your writing, arguments and description of experiments.

Must introduce document classification and mouse movements.
- "To establish a prototype that records mouse tracking from the user to other formats to better connect existing user
behavior to document classification." - What does it mean to change the format of the logged mouse movements? What does that have to do with document classification? Why is document classification mentioned here? It has not been introcued as being connected to the original paper.

What scientific angle should we not overlook or what is mising in our approach.
- The project goals are all very practical. What about the reproducibility aspect of the work? That is your scientific angle you should not overlook.

Move implementation material to approach section.
- The front-end/back-end paragraphs of the introduction contains practical information on the implementation of the necessary tool(s). This information should be moved to the approach section under the header "implementation" (or similar).

First paragraph of background to approach.
- The first paragraph of the background section does belong into the approach section (under "user study setup" or a similar header).

Make it easier to retrieve results.
- The statement "When the user completes the classification experiment, the system puts the data for the ten classifications in a .zip and sends this to our team for evaluation purposes" is a strange one. If the task is to classify a few documents why not just provide an online interface? Is this in line with the original paper you reproduce?

More context to make it clear that our study focuses on document classification.
- The background section contains the phrase "unlike this study which focuses on document classification" but up to this point, it is actually not clear to the reader that this is indeed the case.

The TREC dataset should be mentioned in the approach section.
- The TREC dataset in the background section belongs into the approach section when you describe the user study setup. In the background section we want to see "important works does this project build on" as stated in the description of this assignment.

Move distribution of documents from background to approach section.
- The statement "In other words a distribution of 6 relevant documents to 4 non-relevant documents for each category making 80 documents total." at the end of the background section does not make sense yet to your reader; where do the relevance judgments come from, what is the underlying search task? This kind of information belongs into the approach section.

Remove application requirements section and place in the readme.
- The application requirements section is not a common sight in papers reproducing prior works. Those requirements are good to have in mind when you code, but do not belong into a research report. Put them into the README of your code repository though, this is a good list.

Spend more time outlining the setup and findings of the original work you reproduce and how your setup differs.
- The approach section contains too many low-level technical details. Instead, more time should be spent on outlining the setup and findings of the original work you reproduce, how your setup differs from the original one and why.

Explain the classes used for topics.
- The evaluation section contains a list of classes; where do those classes come from? Did you decide those are are they coming from the paper you reproduce?

Good job with figures, show how setup differs from original paper.
- The figures showing off mouse movements are well done! I also suggest to describe the user study setup in a graphical form, marking (if this is the case) where your setup differs from the original paper.