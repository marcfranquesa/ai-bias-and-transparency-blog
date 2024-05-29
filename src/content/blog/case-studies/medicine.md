---
author: TAED G2
pubDatetime: 2024-05-26T00:00:00
title: "Case Studies: Medicine"
slug: case-studies/medicine
featured: false
description: "Exploring cases of bias and transparency: racial bias found in a major health care risk algorithm."
main: false
---

# Racial Bias Found in a Major Health Care Risk Algorithm

A risk prediction algorithm in the healthcare field presents a racial bias because it relies on a flawed metric to determine the need for treatment. This algorithm helps hospitals and insurance companies identify those patients who will benefit from a high-risk care management program. This scenario is based on a real case which references articles.

## Questions

1. Who are the different people affected in this scenario? What positions do they take?

2. Would it be beneficial to disclose the variables of the algorithm to enhance the interpretability and explainability of the results?

## Problem

The problem addressed in this scenario is the presence of racial bias in a risk prediction algorithm in the healthcare field. The intention was to use the algorithm to identify those patients who would benefit from high-risk care management programs. However, this algorithm showed a certain bias in its determination of need, particularly in the evaluation of Black patients. This bias arose from the algorithm's reliance on healthcare costs as a proxy for a person's medical needs, which clearly did not accurately capture the medical needs of Black patients, who typically tend to pay for more urgent interventions compared to White patients.

In this case, there are primarily four groups of people affected. First, Black patients. Second, the developers of the algorithm. Third, the hospital that used these algorithms. Lastly, the insurance companies that use the algorithm. Within the context of the problem, we can analyze the different perspectives of the involved groups.

1. **Black patients** → Black patients are negatively affected by racial bias. Even though they probably have the same or similar medical needs as white patients, they are less likely to be identified as candidates due to the flawed assessment of the algorithm. They are victims of the clear racial bias present in the algorithm. They deserve fair and equitable access to healthcare services and should not be disadvantaged by the poor design of an identification algorithm.

2. **Algorithm developers** → Responsible for the design of the algorithm and, therefore, for the problem. They are probably not the only ones responsible since it is the hospital's role to ensure that the algorithm's performance is correct and as expected. The data should possibly have been analyzed to avoid potential bias, as bias in the data can be amplified throughout the model. Their culpability depends on their awareness of the presence of this bias. In any case, they bear the responsibility of using bias mitigation techniques such as Fairness Aware Machine Learning or sensitivity analysis, among others.

3. **Hospital utilizing the algorithm** → They are the primary responsible parties for the use of technology within the hospital and concerning hospital-related matters. Commissioning the design of an algorithm to perform candidate identification tasks does not absolve them of the responsibility for any potential malfunction. They must verify that what is provided to them functions properly and does not perpetuate racial inequalities in decision-making. In the eyes of the patients, they are also the main accountable entity. They are equally at fault because, after using the algorithm and observing its behavior, they have not made any changes in their actions.

4. **Insurances using the algorithm** → Their role is quite similar to that of hospitals. Just as hospitals are accountable, they are too. They must be aware of all the technology they employ, which involves evaluating its performance and addressing potential bias cases. Ignorance does not imply a lack of responsibility. It is their responsibility to understand how the algorithm works.

## Laws related to the topic

There are several laws that could apply to this case.

1. BOE - Law 15/2022, of July 12, comprehensive for equal treatment and non-discrimination.

2. Title VI of the Civil Rights Act of 1964 (Title VI) → “No person in the United States shall, on the ground of race, color, or national origin, be excluded from participation in, be denied the benefits of, or be subjected to discrimination under any program or activity receiving Federal financial assistance.”

3. Section 504 of the Rehabilitation Act of 1973 → Prohibits discrimination against otherwise qualified individuals on the basis of disability in programs and activities receiving financial assistance from HHS (Department of Health and Human Services) and programs or activities conducted by HHS.

4. Section 1908 of the Public Health Service Act → Prohibits discrimination on the basis of age, race, color, national origin, disability, religion, or sex (including pregnancy, sexual orientation, and gender identity) in programs, services, and activities funded by Preventative Health

## Confrontation of the case with ethical principles

This situation can be related to the following codes of ethics.

1. **Principles of justice and equity**: The case highlights a situation where the algorithmic system fails to provide fair and equitable treatment among patients from different ethnic groups. This contradicts the principles of justice and equity often found in professional codes of ethics and AI, which aim to ensure that all individuals receive fair and unbiased treatment without discrimination based on race or other factors. This violation of justice and equity largely stems from socio-technical biases present in the data. The solution, however, does not lie in the data but in how we address bias. Biases are ubiquitous; we cannot expect algorithms to be completely bias-free. What we need to do is to be able to handle this bias in a way that minimizes it. To do so, we can employ various techniques to help mitigate the problem.

2. **Responsibility**: In this case, various affected groups are involved. The hospital, insurers, and algorithm developers bear different degrees of responsibility. It's important to be aware of the responsibility we may have for the different actions we carry out in our daily lives, ensuring that it doesn't have negative connotations. In this specific case, it's crucial to understand the importance that bias can have in each decision made by the algorithm, especially when dealing with such a sensitive issue as healthcare. Once identified, it's vital that as individuals, we try to correct these biases to resolve the implications they may have.

3. **Explainability and transparency**: Ethical codes underscore the importance of being transparent about the algorithms used and their implications, as well as promoting the interpretability of the algorithms we use. But to what extent? On one hand, it is clear that offering greater explainability and interpretability can promote understanding of many outcomes, as well as more powerful and rapid technological advancement. On the other hand, achieving complete transparency and interpretability opens up various debates. How would there be benefits for discoveries if everyone is capable of knowing how an idea was developed? What would be the point, for example, of a ranking, when we all know the criteria used for classification? What value would a person's work have if anyone could simply replicate it afterward?

Confronting this case with related articles on ethical codes allows identifying shortcomings in the implementation of ethical practices and highlighting the importance of ensuring that technology is developed and used in a way that promotes justice, fairness, and patient well-being.

## What is at stake?

Some of the values at stake include equity and justice, as mentioned in the previous section, as well as the integrity of the healthcare system and ensuring that the algorithms used reflect the best interests of patients and do not perpetuate biases or inequalities.

Regarding conflicts of interest, one significant concern is related to economic interests, as insurance companies and hospitals may have an interest in using algorithms that minimize their costs, even if this involves discrimination against certain patients. This is where different ethics and their hierarchical relationship come into play. There are primarily four ethics: civic ethics, community-organizational ethics, professional ethics, and personal ethics, ordered respectively by importance. In this specific case, it is evident how the potential economic benefit for hospitals and insurers can lead personal ethics to override any of the previous ethics, which represents a serious ethical breach.

Finally, the article prompts us to consider certain moral dilemmas, such as the balance between efficiency and equity. There is a moral dilemma between seeking efficiency in healthcare provision and ensuring equitable care for all patients. The algorithm in question may opt for an efficient approach, but at the same time, exclude patients who may require more intensive care.

## Suggested solution

The case is already closed, but we can propose a possible solution to avoid all the mentioned problems while still keeping the algorithm.

Firstly, we propose a review conducted by professional doctors, who, after the prediction, intensely evaluate the patient's case to assess whether they are a good candidate for the program or not. This would add a human component that would play in favor of civic ethics, while also allowing a possible reduction of biases included in the algorithm. On the other hand, improving the model with techniques such as those previously mentioned to reduce bias would generate much more robust predictions that are resistant to biases present in our society and, therefore, in the collected data.
