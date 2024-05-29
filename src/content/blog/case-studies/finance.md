---
author: TAED G2
pubDatetime: 2024-05-26T00:00:00
title: "Case Studies: Finance"
slug: case-studies/finance
featured: false
description: "Exploring cases of bias and transparency: bank loans."
main: false
---

# Bank loans

The widespread use of AI and massive amounts of data has brought these systems into all aspects of our society, including _banking systems_. While these technologies offer numerous benefits, they also carry significant consequences if not used appropriately or if their use is overly extensive without a _clear understanding_ of what these systems are doing and how they operate.

Currently, all major financial institutions use AI algorithms to make certain decisions. However, there are cases where the use of these algorithms has _introduced biases_, resulting in unexpected outcomes or discrimination against certain groups. Additionally, the _lack of explainability_ of these algorithms and the _lack of transparency_ from some entities make the situation even more distant and frustrating.

[The biases in AI banking are starkly illustrated by disparities in FICO® Scores](https://www.urban.org/sites/default/files/publication/101160/explaining_the_black-white_homeownership_gap_a_closer_look_at_disparities_across_local_markets_0.pdf), which summarize an individual's credit risk into a three-digit number and are used in 90% of lending decisions. Data reveals a significant racial gap: over 70% of white households in the U.S. have a FICO Score above 700, compared to only 20% of Black households. Additionally, one in three Black households with credit histories has insufficient credit, resulting in no credit score, almost double the rate of white households (17.9%).

In the case we have worked out below, we can see a representation of these problems, the primary affected parties, ethical considerations, and finally, what solutions can be applied, if any exist.

## Motivation

Bias and lack of transparency in data science are not new phenomena. These issues have deep historical roots, predating the advent of algorithms and AI. An example of this is the practice of redlining in Chicago during the 1930s.

#### Case Study: Redlining in Chicago, 1930s

In the 1930s, the lending industry in Chicago engaged in a discriminatory practice known as [redlining](http://www.encyclopedia.chicagohistory.org/pages/1050.html). This involved categorizing neighborhoods as suitable or unsuitable for mortgage loans based primarily on the racial and economic makeup of their residents. Predominantly Black and lower-income neighborhoods were marked in red on maps, indicating they were high-risk and not worthy of investment. This practice was not based on individual financial situations but rather on broad, prejudiced assumptions about entire communities.

<dev>
  <img
    src="/case-finance.png"
    alt="Chicago redlining"
    className="mx-auto"
    width=400
  />
  <p class="text-center">
      Figure 1: Paint on Chicago map used in for the redlining
  </p>
</dev>

#### Historical Bias and Its Consequences

The redlining practice clearly demonstrates human bias in lending decisions, resulting in significant barriers to financial progress for marginalized groups. By denying loans to entire neighborhoods based on race and income, redlining entrenched social and economic inequalities, preventing affected communities from building wealth and improving their living conditions.

#### Modern Parallels and the Role of Data Science

Today, while the tools and methods have evolved, the core issue of bias persists. Empirical data and algorithmic predictions now play a central role in decision-making processes, including credit lending. These predictions are often based on historical data, which inherently reflect past biases. For example, if data show few loans given to high-risk individuals, algorithms trained on this data may perpetuate this trend, continuing to deny loans to similar groups.

This raises critical ethical questions: If we ignore the human factor and lend more to high-risk individuals, could the perceived risk decrease over time as they gain access to financial resources? As a society, should we ensure that loans are provided to high-risk individuals to mitigate inequalities? Should we avoid making predictions based on harmful generalizations?

## Real cases

The case we developed is based on the following real cases where AI had a negative impact in people lifes, accentuating bias towards certain groups in financial concerns and due to the lack of transparency of the algorithms behind these implementations.

- **[Apple's 'sexist' credit card investigated by US regulator](https://www.bbc.com/news/business-50365609ç)**: Apple Card, issued by Goldman Sachs, faced scrutiny when several high-profile individuals, including tech entrepreneur David Heinemeier Hansson and Apple co-founder Steve Wozniak, reported significant disparities in credit limits between them and their spouses, despite similar financial profiles. Hansson's wife, for example, received a credit limit 20 times lower than his. This raised concerns about gender bias in the algorithm used to determine credit limits .
- **Wells Fargo's Auto Loans and Mortgage Lending (2020)**: Wells Fargo was accused of disproportionately denying African American and Hispanic applicants for auto loans and mortgages. While this case was primarily based on statistical disparities rather than direct evidence of biased AI, it highlighted how AI systems can perpetuate existing biases present in historical data and human decision-making processes.
- **[Amazon's AI Recruiting Tool (2018)](https://www.technologyreview.com/2018/10/10/139858/amazon-ditched-ai-recruitment-software-because-it-was-biased-against-women/)**: Although not directly related to credit giving, Amazon's AI recruiting tool was found to be biased against women. The system downgraded resumes that included the word "women's", such as "women's chess club captain", due to being trained on resumes submitted over a 10-year period, which were predominantly from men. This case illustrates how AI systems can inherit and amplify biases present in historical data.

## The case

The largest bank in the United States has integrated an AI algorithm from an external company to predict whether individuals are suitable candidates for credit loans. This algorithm considers various variables, including financial history, salary, properties, and additional attributes such as gender, race, and age.

After several months of using the algorithm, it became evident that the system was biased against women and Hispanic individuals. The majority of loan applications from these groups were denied. This revelation sparked concern and scrutiny from both the public and regulatory bodies.

When questioned about the bias, the bank shifted the blame to the external company that provided the algorithm. The company, in turn, admitted to not fully understanding the reasons behind the bias due to the complexity of the algorithm, which lacked transparency and explainability.

### Problem

The widespread use of AI in banking systems has highlighted significant issues related to bias and transparency. In this particular case, the largest bank in the United States has integrated an AI algorithm from an external company to predict whether individuals are suitable candidates for credit loans. This algorithm considers various variables, including financial history, salary, properties, and additional attributes such as gender, race, and age.

After several months of using the algorithm, it became evident that the system was biased against women and Hispanic individuals. The majority of loan applications from these groups were denied. This revelation sparked concern and scrutiny from both the public and regulatory bodies. The bank shifted the blame to the external company that provided the algorithm, which admitted to not fully understanding the reasons behind the bias due to the complexity of the algorithm, which lacked transparency and explainability.

### People involved

1. **Customers Applying for Credit**: Women and Hispanic individuals, who were disproportionately denied loans, raised complaints and demanded explanations for the rejections. Advocacy groups representing these communities also got involved, pushing for a thorough investigation and seeking justice for the affected parties.
2. **The Bank**: Senior management and compliance officers faced intense pressure from regulators and the public to address the bias. Customer service representatives and branch managers had to handle an influx of complaints and inquiries from dissatisfied customers.
3. **Associated Company (AI Algorithm Provider)**: Data scientists and engineers struggled to explain the inner workings of their complex algorithm.Company executives were involved in discussions with the bank and regulators, trying to mitigate the fallout and devise a plan to rectify the situation.
4. **Regulatory Bodies**: Federal and state regulators launched investigations to determine the extent of the bias and to ensure compliance with anti-discrimination laws. Legislators and policymakers considered new regulations to prevent similar issues in the future.
5. **Public and Media**: Journalists and media outlets covered the story extensively, increasing public awareness and scrutiny. Consumer advocacy organizations used the case to highlight broader issues with AI in finance and called for greater transparency and accountability.

### Points of view

#### From the Lender's Perspective

Lenders have a fundamental interest in mitigating the risks associated with loans to ensure the survival and profitability of their business. When someone with a high risk of default applies for a loan, the lender must consider mechanisms to reduce this risk. This might include using AI algorithms to better assess the applicant’s creditworthiness or requiring collateral. The ultimate goal is to balance credit availability with the financial security of the lender.

#### From the Borrower’s Perspective

Contrary to the stereotype of poor financial management, there are many legitimate reasons why a person might need a loan, even if they are considered high-risk:

1. **Debt Consolidation**: Combining multiple debts into a single loan can help manage payments and reduce overall interest rates.
2. **Home Improvements**: With or without collateral, improvements can increase property value and improve quality of life.
3. **Emergency Expenses**: Unexpected medical expenses, home or car repairs can be costly, and it might not be desirable to deplete savings.
4. **Vehicle Financing**: Necessary for personal and professional mobility.
5. **Moving Costs**: Changing residences can be a significant expense that requires financing.
6. **Weddings**: A major life event that often involves substantial costs.
7. **Vacations**: While less essential, vacations can be a psychological and emotional necessity.

#### The Social Function of Loans

Loans play an important social role by providing immediate access to funds that must be repaid later. In an egalitarian society, everyone should have access to a loan, regardless of their initial financial situation. Otherwise, it promotes the stagnation of poverty, as those with fewer resources cannot improve their financial situation without access to credit.

#### Growth of Lending Companies and Potential for Abuse

It's important to consider whether we should allow lending companies to grow indefinitely in a self-reinforcing manner. If these companies gain access to more funds, there is a risk they could exploit borrowers with higher interest rates. Regulating the growth and practices of these companies is essential to prevent abuse and ensure loans are fair and accessible to everyone.

#### A Business Based on Initial Inequality?

Finally, we must consider whether it is just that the loan business is based on the initial inequality in wealth distribution. Loans are often necessary for those who do not have direct access to large sums of money, meaning this business benefits from existing inequality. Ensuring that loan conditions are fair and do not perpetuate this inequality is crucial for a more just society.

In summary, giving loans to people with a high risk of default can be justified for various social and economic reasons. However, it is essential that lenders take measures to mitigate risk and that the growth of these companies is regulated to prevent abuse and perpetuation of inequality.

### Legislation

- **Equal Credit Opportunity Act (ECOA)**: Prohibits discrimination in credit transactions based on race, color, religion, national origin, sex, marital status, or age.
- **Fair Credit Reporting Act (FCRA)**: Ensures fairness, accuracy, and privacy of personal information contained in the files of credit reporting agencies.
- **Consumer Financial Protection Bureau (CFPB)** Guidelines: Provide standards for fair lending practices and the use of AI in financial services.
- **General Data Protection Regulation (GDPR)**: While primarily a European regulation, GDPR's principles of transparency, accountability, and fairness in data processing are relevant for global companies.

### Case confrontation with ethical principles

_Ethical Principles_

- **Autonomy**: Ensuring individuals have the right to fair treatment and access to credit.
- **Justice**: Providing equitable opportunities regardless of gender, race, or age.
- **Non-maleficence**: Avoiding harm through biased algorithms that perpetuate discrimination.
- **Beneficence**: Promoting the welfare of all individuals by ensuring fair lending practices.

_Conflicts of Interest_

- **Bank's Profit Motive vs. Fair Lending**: Balancing profitability with ethical lending practices.
- **Algorithm Provider's Complexity vs. Transparency**: The challenge of maintaining proprietary technology while ensuring transparency and accountability.

### Possible Solution

#### Solution Strategies

1. **Algorithm Audit and Retraining:** Conduct a thorough audit of the algorithm to identify sources of bias. Retrain the model using balanced data sets and exclude sensitive attributes that could lead to discrimination.
2. **Enhanced Explainability:** Implement explainable AI (XAI) techniques to make the decision-making process of the algorithm more transparent. This can involve using models that are inherently interpretable or adding layers of explanation to complex models.
3. **Regular Monitoring and Updates:** Establish a continuous monitoring system to detect and correct biases in real-time. Regularly update the algorithm to reflect changes in data and societal norms.
4. **Stakeholder Involvement:** Engage with affected communities, advocacy groups, and regulatory bodies to ensure the algorithm meets ethical standards and public expectations.
5. **Transparency in Communication:** Clearly communicate the findings, corrective actions, and improvements made to stakeholders, including customers, regulators, and the public.

#### Arguments for Solutions

1. **Deontological:** Ensuring fairness and justice in lending practices is a moral imperative.
2. **Procedural:** Implementing robust procedures for auditing and retraining algorithms ensures continuous improvement and adherence to ethical standards.
3. **Consequentialist:** Reducing bias and increasing transparency in credit decisions lead to better societal outcomes, promoting financial inclusion and reducing inequalities.

By addressing the biases and enhancing the explainability of AI systems, banks can better serve their customers and uphold ethical standards, thereby restoring trust and ensuring equitable access to financial resources. This approach aligns with the principles of autonomy, justice, non-maleficence, and beneficence, promoting a fair and transparent financial environment.
