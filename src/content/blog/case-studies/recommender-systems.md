---
author: TAED G2
pubDatetime: 2024-05-26T00:00:00
title: "Case Studies: Recommender systems"
slug: case-studies/recommender-systems
featured: false
description: "Exploring cases of bias and transparency: political advertising."
main: false
---

# Political advertising

“**Recommender systems** are software tools and techniques **providing suggestions** for items to be of use to a user. The suggestions provided by a recommender system are aimed at **supporting their users** in various decision-making processes, such as what items to buy, what music to listen to, or what news to read. Recommender systems are valuable means for online users to **cope with information overload** and help them make better choices. They are now one of the most popular applications of artificial intelligence, supporting information discovery on the Web.” \
_(“Recommender Systems Handbook”, 2022 [1])_

In recent years, the level of antagonism between political groups has intensified, with supporters of one party increasingly disliking and avoiding interactions with members of the opposing party. One of the main culprits identified is social networks. The rise of fake news and the impact of social media filter bubbles have become significant topics of discussion.

The formation of homophilic social networks, where people preferentially connect with those who share many common connections, has helped foster opinion polarization, not because people intentionally seek to avoid opposing views, but due to the inadvertent creation of “echo chambers”. [2] In a world so full of content, recommender systems have further biased our thoughts and beliefs.

Recommender systems filter content to suggest tailored items to users. Several biases arise in recommender systems, and, in fact, they inherently introduce bias by favoring some content over others.

Apart from the inherent bias that comes with a system that in itself decides which content to filter, there are other present biases such as

- **Popularity Bias:** Popular items are recommended even more frequently than their popularity would warrant. A small amount of popular items accounts for the majority of interactions. This bias can cause a feedback loop where popular items become even more popular, overshadowing less-known content regardless of its quality. For example, on online platforms, a few trending products or viral videos often dominate the recommendations, limiting exposure to diverse content.
- **Unfairness:** On the one hand, the contents created by certain groups of individuals tend to be less recommended by the algorithms. On the other hand, some users tend to be shown some information or content more often. This is usually based on attributes like gender, ethnicity, age, education level, etc. A tool called AdFisher revealed issues of discrimination and opacity in Google's Ad Setting. Experiments showed that ads for high-paying jobs were shown significantly more to male users than female users. Additionally, visiting substance abuse websites resulted in targeted ads without changes in the Ad Settings profile, highlighting a lack of transparency. These findings suggest the need for deeper investigations into ad ecosystem biases by companies or regulatory bodies [3].

Moreover, the feedback loop amplifies bias (see Figure 1). Given an individual's tastes or ideology, these are exacerbated through continuous exposure to content that aligns with them. This generates a "bubble effect" or “echo chambers”, where individuals believe they live in a world where their ideology is shared by the majority, which has led to ideological polarization.

Companies have harnessed user profiling on social media to influence behavior, particularly during election periods, by targeting undecided individuals with personalized ads. This tactic, known as **micro-targeting**, uses consumer data and demographics to determine the interests of specific people or small groups, aiming to shape their opinions or actions. It's a common strategy in advertising and political campaigns to deliver highly specific messages that provoke desired responses from the audience.

<dev>
    <img
    src="/cases-recommender.png"
    alt="Bias loop"
    className="mx-auto"
    width=400
    />
    <p class="text-center">
        Figure 1. Bias Amplification Loop in Recommender Systems [4]
    </p>
</dev>

## The users

The main objective of recommendation systems is to enhance the user experience by helping them discover items they are likely to be interested in, thereby increasing engagement, satisfaction, and retention. Additionally, this benefits advertisers by increasing the effectiveness of ads, as they target people who are more likely to be interested in them. Ultimately, the most benefited party is the social media platform, which directly gains from increased user engagement, retention, and ad revenue.

In light of this win-win situation for all parties, one would think that recommender systems are welcomed by users. However, one must consider the cost of these systems: users' data. Knowing that the largest tech companies have detailed profiles of their users is undoubtedly concerning and has led to significant scandals in recent years. What is more alarming is not just the possession of this information, but how it is used.

In the realm of politics, the most well-known case is that of Cambridge Analytica. Cambridge Analytica used the profiles of millions of Facebook users to influence the results of the USA’s 2016 elections and the Brexit referendum through micro-targeting. The strategy was to target users deemed undecided or moldable to influence them to vote in a specific way. [5]

Following that scandal, research has been conducted on recommender systems during elections [6][7]. Could these systems be biased towards certain political parties? The study on the Italian elections shows that:

- Users who like posts from a specific political orientation are more frequently recommended posts from Facebook pages of that same orientation and are less likely to be recommended posts from different orientations. This demonstrates the existence of the bubble effect.
- Users who are not biased towards any political orientation still receive a personalized experience, being shown more posts from a specific orientation over others.
- Some orientations are more likely to be recommended than others, even to users with different orientations.

These results are concerning for users. How can they trust recommender systems and feel comfortable using social networks?

## Legislation

Regarding applicable laws on this topic, we have focused on a new set of rules recently adopted by the European Parliament. On March 20, 2024, the European Union made public their EU Regulation dated March 13, 2024 [8], which aimed at boosting transparency and limiting targeted political adverts. These rules were put into effect from April 9, 2024, but will apply directly across all EU Member States as of October 10, 2025.

Online political advertising has gained notoriety for its impact on how people view political parties and candidates— particularly prior to election dates. In the past few decades, digital technologies together with social media have reshaped the realm of politics by making it possible for politicians to get their messages out to large numbers of people faster and cheaper than before. Although this trend has helped to hear out many different voices, it has equally given a platform for fake news, tearing apart political discussion and voter manipulation with an aim of controlling election outcomes.

In response to citizens' concerns about a secure and reliable digital society, the new rules define a "legislation and guidelines for online platforms and social media companies to address disinformation vulnerabilities and implement transparency measures" (proposal 33.5 [9]). As political advertising has largely moved online, existing national regulations have proven inadequate. Moreover, various member states have either legislated or plan to legislate in this area, causing a fragmented regulatory environment across the EU, which negatively affects voters and advertisers.

The new regulations seek a singular common regulatory framework to enhance the transparency of sponsored political advertising (both online and offline), reinforce the integrity of election campaigns, and countervail action against disinformation and foreign intervention. Sandro Gozi (Renew, France), the MEP in charge of steering the new rules through Parliament, said: “This is a major step in protecting our elections and achieving digital sovereignty in the EU. Citizens will be able to easily spot political advertising online and who stands behind it. The new rules will make it harder for foreign actors to spread disinformation and interfere in our free and democratic processes.”

Under these rules, any political ad must be clearly marked. Details regarding whether they are being targeted by an ad, who is paying for it, the amount paid, and to which elections or referendum it is linked to must be openly accessible to citizens, governing bodies, or reporters. Further, all political advertising and related information will be stored in a public online repository.
Additionally, to limit foreign interference in European democratic processes, sponsoring ads from outside the EU will be prohibited in the three months preceding any election or referendum.

To ensure voters are protected from manipulation, only personal information that has been explicitly given with consent for online political adverts can be used for targeting. Moreover, profiling through special categories of personal data (e.g., ethnicity, religion, sexual orientation) or data belonging to minors will be banned.

Sandro Gozi mentioned on the day the new law was passed: “The rules adopted today play a pivotal role in helping citizens discern who is behind a political message and make an informed choice when they head to the polls.”

In the end, there are consequences for violations. Under the Digital Services Act (DSA), penalties can amount to a maximum of 6% of an ad provider's yearly revenue or turnover.

## What's at stake

To better understand how legislation should approach the situation, it is essential to take a step back and consider what’s at stake. First, we must discuss the values of privacy, transparency, and autonomy. Privacy is fundamental in a world where information is constantly shared, making us feel perpetually exposed. User profiling infringes on this value, not only by relying on our personal data but also by constructing comprehensive personality profiles. Furthermore, it is crucial to distinguish between consented and non-consented infringements on privacy. While both types of infringements can be problematic, non-consented infringements are generally seen as more egregious because they violate an individual's autonomy and trust. However, even consented infringements can be undesirable if the terms are not clearly communicated or understood, highlighting the need for informed consent and our second value: transparency. Did any of the targeted users know what was going on? Did they know about their profiling and micro-targeting? The truth is, they did not; even after having agreed to the terms and conditions. Finally, while personalized interactions enhance the user's journey through social networks, there is a limit. Users want autonomy; they want to make independent choices without undue influence. That is, they want to make decisions based on their own values, preferences, and understanding, rather than being swayed or manipulated by external pressures, biases, or coercive tactics that might undermine their ability to think and choose freely.

The problems related to these three fundamental values originate from the conflicting objectives of social network companies and political parties:

- **Platform profit vs. user privacy:** Social media platforms benefit financially from detailed user profiling and targeted advertising, creating a conflict with users' interest in maintaining their privacy.
- **Advertiser goals vs. user interaction:** Advertisers aim to reach specific audiences effectively, which can lead to invasive data practices and personalized ads that users find intrusive or manipulative.
- **Political influence vs. fair representation:** Political entities may exploit recommender systems to sway public opinion, conflicting with the democratic value of fair and unbiased information dissemination.

Looking to the future, we hope that companies and governments will learn from past scandals and avoid repeating them. However, they will still face ethical dilemmas, as these issues are not black and white. Recommendations will persist, but it is vital to differentiate between recommendations and manipulation and to clearly define limits to protect the values we have discussed. While defining the distinction is extremely challenging and might change in every situation, it is crucial to recognize it and do everything possible to address it, especially in the role of an engineer. Additionally, user consent is fundamental to the legality of these practices. But how many users read the terms and conditions? Many users do not fully understand or consent to the extent of data collection and usage, presenting an ethical dilemma where their data is exploited without their explicit, informed consent. Furthermore, having to forcefully/blindly accept the terms of use as a sine qua non condition to make use of the desired service reveals that said consent may be skewed; in terms of social justice advocate and philosopher Martha C. Nussbaum, we may have strayed from informed consent to an “adaptive preference”. [10]

In conclusion, addressing these challenges requires a nuanced approach that balances innovation with ethical considerations. Legislators, companies, and users must work together to create a digital ecosystem that respects privacy, ensures transparency, and upholds autonomy, fostering a fair and trustworthy online environment.

## Ethical positions

After considering the conflicts of interest, ethical dilemmas, and values at stake, we will analyze the positions of each involved party, users, political parties, social network administrators, and algorithm developers, from three ethical perspectives: deontological, procedural, and consequentialist.

Since the terms that refer to the three perspectives are not univocal, we will begin by establishing clear definitions of each term so that the reader has a precise understanding of what each refers to.

- **Deontological perspective:** Evaluation of our actions according to the coherence of these with our convictions and values. In a more restrictive sense, Kant's categorical imperative states: "_Act according to that maxim which you would wish to become a universal law. Act as if the maxim of your action could be willed to become a universal law of nature._" (AA IV:421)
- **Consequentialist perspective:** The actions are evaluated according to the outcomes they generate. An action is considered morally good if it leads to (overall) positive consequences. This perspective emphasizes the end result.
- **Procedural perspective:** Rather than focusing solely on the outcomes, this perspective also accounts for the procedures of the actions taken. The emphasis lies on the importance of adhering to established rules, protocols, and procedures, ensuring that all individuals are treated equitably and justly.

From the users' standpoint, biased algorithms raise significant ethical concerns, as principles like autonomy, justice, and transparency support their posture, emphasizing user control over information and the need for fair and transparent systems. Deontologically, these algorithms undermine user autonomy by influencing decisions and perceptions in non-transparent ways. Immanuel Kant would argue that individuals have a moral right to make informed choices based on rational deliberation, free from manipulation or coercion. By prioritizing certain content or viewpoints based on algorithmic biases, social media platforms restrict users' autonomy and inhibit their ability to access diverse perspectives.

Furthermore, Kantian ethics emphasize the importance of treating individuals as ends in themselves, rather than as means to an end. Biased algorithms that prioritize engagement or advertising revenue over the well-being and autonomy of users violate this principle by using individuals as means to achieve platform objectives. From a Kantian perspective, users should have equal access to information and opportunities on social networks, ensuring that their autonomy and dignity are respected. [11]

From a consequentialist perspective, the call for transparency is strong, with users demanding disclosure of algorithmic biases to make informed decisions about their participation on the platform. They argue for the option to opt-out of such algorithms, asserting that the social network's utility is compromised when biased algorithms distort the quality and impartiality of information. Furthermore, some users raise concerns about the long-term impact of these algorithms on society and democracy, noting that the most vulnerable users (more susceptible to manipulations) could be especially affected. This aligns with the ethical concerns raised by philosophers like Hans Jonas, who emphasized the importance of considering the long-term impact of human actions on the environment and society. Jonas's concept of "the ethics of responsibility" underscores the need for individuals and institutions to anticipate and mitigate potential harms, including those stemming from technological innovations such as biased algorithms. [12]

Political parties, on the other hand, may deontologically justify the use of biased algorithms as tools to effectively reach and engage their target audiences, thereby maximizing electoral participation and support. They believe that these actions are inherently justified because they are consistent with their convictions about effective political engagement and maximizing electoral participation. Political parties may regard these algorithms as proprietary to the social network, thus escaping external regulation and absolving themselves of responsibility for their deployment. This perspective resonates with Karl-Otto Apel's insights into the parasitization of discourse. Apel highlights how communication can be undermined when one party exploits or manipulates the discourse for its own interests, without regard for the ethical implications or the broader societal consequences. [13]

Moreover, considering that political parties are bound by ethical codes that prioritize integrity, honesty, and public responsibility [14], we see a clear ethical dilemma in the fact that they ignore algorithmic biases in recommender systems for the benefits these provide, prioritizing engagement and content over accuracy and impartiality. We can refer back to Apel and the performative contradiction he advocates, as this is inherently present in communication due to our freedom to state an action and end up not fulfilling it, something undesirable and immoral, as it parasitizes language to undermine its conditions of possibility. In this case, we can affirm that not every factual consensus (such as the ethical code of a political party) will be valid and normative, as it may not enjoy the informed consent of those affected. [15] We see how the discourse preached by political parties results in misinformation or the manipulation of public opinion, which ultimately also undermines trust in the political process.

Social network administrators defend their autonomy to design and adjust recommendation algorithms to align with commercial interests. From a consequentialist view, they argue that biased algorithms enhance user engagement and platform profitability by catering to individual preferences and behaviors. However, business ethics and corporate social responsibility codes mandate that companies act ethically and responsibly, considering the welfare of their users and the broader social impact. These principles of fairness, transparency, and accountability suggest that companies should avoid practices that could harm users or society, ensuring that their operations do not undermine public trust. [16]

Algorithm developers might argue that they focus on balancing autonomy and utility, adhering to their superiors' directives to optimize algorithm performance while mitigating negative impacts on company reputation and user experience. They could justify their behavior by saying that, although they follow coding and testing standards to maintain functionality and effectiveness, addressing specific biases is challenging due to system complexity. Developers may argue that as long as biases do not cause significant harm, their primary concern remains system efficiency and efficacy. Nevertheless, they are also bound by ethical codes that stress the importance of fairness, transparency, and responsible conduct, urging them to identify and reduce biases to ensure equitable and just systems. [17]

Finally, the ethical examination of biased recommender systems in political elections necessitates a consideration of the fundamental principles guiding responsible and fair behavior. Each party involved must reflect on how their actions affect users' rights and well-being, as well as the overall integrity and trust in the platform and society. This ethical analysis underscores the need for a balanced approach that respects autonomy, promotes transparency, and ensures fairness in the digital age.

## Conclusions

In conclusion, while recommender systems significantly enhance user experience by filtering vast amounts of information to suggest relevant content, they also introduce biases that can deepen polarization and influence public opinion. In particular, the techniques of ad micro-targeting to users during political elections have raised many concerns. Recognizing the issue, the European Union has implemented regulations to improve transparency and restrict data misuse in political advertising. Under these new rules, any political ad must be clearly marked and all the details must be provided.

In 2023, a study from MIT [18] found that while targeted political ads are more persuasive than generic ones, the added benefit of using multiple attributes for microtargeting is negligible. The research involved extensive survey experiments with over 23,000 participants, testing ads for specific policies. The results showed that ads targeted based on a single trait, like party affiliation, were significantly more effective than non-targeted ads, but adding more attributes did not increase their persuasiveness.

Nonetheless, the possible lack of effectiveness does not reduce the fault in trying to manipulate/bias voters through personalized ads. The lack of transparency, the intent to influence people’s beliefs and opinions, and the undermining of personal autonomy, all constitute a violation of personal rights and freedom of thought. Ultimately, drawing from Karl-Otto Apel's philosophy, which underscores the importance of an ideal communication community, where free and non-coercive deliberation is possible, it's essential to balance content personalization with exposure to diverse perspectives. [19] Applying these principles to social media would promote a more inclusive and reflective political dialogue, respecting user rights, promoting transparency and ensuring fairness.

Finally, in order to evaluate the opinion of our classmates on recommender systems, we sent a questionnaire that included various questions on them. The main conclusions extracted would be that:

- Most find that their feed is aligned with their personality and interests, whilst not as much with their opinions and beliefs. Young people primarily use social media to consume entertainment content rather than political content. This might diverge with older generations.
- Most have felt at times overwhelmed by seeing posts about the very same topics. It confirms that recommender systems may not show diverse enough content.
- The majority are comfortable with targeted advertisements, and 80% have bought something recommended online.

In general, there seems to be a lack of understanding or awareness of how impactful recommender systems are in our daily lives, and how filtered everything we interact with is.

## References

[1] Recommender Systems Handbook. (2022). In Springer eBooks. https://doi.org/10.1007/978-1-0716-2197-4 \
[2] Spohr, D. (2017). Fake news and ideological polarization. Business Information Review, 34(3), 150–160. https://doi.org/10.1177/0266382117722446 \
[3] AdFisher: Detecting Discrimination and Opacity in Online Behavioral advertising. (n.d.). https://fairlyaccountable.org/adfisher/ \
[4] Chen, J., Dong, H., Wang, X., Feng, F., Wang, M., & He, X. (2020, October 7). Bias and debias in Recommender System: A survey and future directions. arXiv.org. https://arxiv.org/pdf/2010.03240 \
[5] History of the Cambridge Analytica controversy. (2023, March 16). Bipartisan Policy Center. https://bipartisanpolicy.org/blog/cambridge-analytica-controversy/ \
[6] Hargreaves, E., Agosti, C., Menasche, D., Neglia, G., Reiffers-Masson, A., & Altman, E. (2018). Biases in the Facebook News Feed: A Case Study on the Italian Elections. 2018 IEEE/ACM International Conference on Advances in Social Networks Analysis and Mining (ASONAM). https://arxiv.org/pdf/1807.08346 \
[7] Political advertising exposed: tracking Facebook ads in the 2021 Dutch elections. (n.d.). Internet Policy Review. https://policyreview.info/articles/news/political-advertising-exposed-tracking-facebook-ads-2021-dutch-elections/1543 \
[8] EUROPEAN UNION. (2024, February 29). REGULATION OF THE EUROPEAN PARLIAMENT AND OF THE COUNCIL on the transparency and targeting of political advertising. https://data.consilium.europa.eu/doc/document/PE-90-2023-INIT/en/pdf \
[9] EUROPEAN UNION. (2022, May). Conference on the Future of Europe. REPORT ON THE FINAL OUTCOME. \
[10] Nussbaum, M. C. (2006). Frontiers of justice disability, nationality, species membership. Harvard University Press, 341. \
n.b. she describes “... the existence of “adaptive preferences,” preferences that simply adapt to the low level of living one has come to expect”. \
[11] Kranak, J. (2019, December 9). Kantian Deontology. Pressbooks. https://press.rebus.community/intro-to-phil-ethics/chapter/kantian-deontology/ \
https://conference-followup.europarl.europa.eu/cmsdata/267078/Report_EN.pdf \
[12] Barrero, A. F. (2024, April 4). Hans Jonas on Responsibility in the age of Artificial Intelligence. TheCollector. https://www.thecollector.com/hans-jonas-responsibility-age-artificial-intelligence/ \
[13] Alférez Jiménez, V. H. (2006, December). apel0607. https://www.lacavernadeplaton.com/articulosbis/apel0607.htm \
[14] Códigos de conducta para los partidos políticos. (n.d.). https://aceproject.org/main/espanol/ei/eif01a1.htm \
[15] Gastón, I. S. L. (s. f.). La existencia de contradicciones performativas y su importancia para la crítica al falibilismo ilimitado en Karl-Otto Apel. http://bibliotecadigital.uns.edu.ar/scielo.php?script=sci_arttext&pid=S1668-74342010001100007&lng=es&nrm=iso \
[16] Meta. (n.d.). Meta - code of conduct. meta.com. https://about.meta.com/code-of-conduct/ \
[17] The Code affirms an obligation of computing professionals to use their skills for the benefit of society. (n.d.). https://www.acm.org/code-of-ethics \
[18] Tappin, B. M., Wittenberg, C., Hewitt, L. B., Berinsky, A. J., & Rand, D. G. (2023). Quantifying the potential persuasive returns to political microtargeting. Proceedings of the National Academy of Sciences of the United States of America, 120(25). https://doi.org/10.1073/pnas.2216261120 \
[19] Kettner, M. (2011). Discourse Ethics beyond Apel and Habermas. A Realistic Relaunch. Nordicum-Mediterraneum, 6(1). https://doi.org/10.33112/nm.6.1.4
