
## Day-Zero

3rd place for Ellipsis Goldman Sachs AWS Hackathon 2021

Done by: Lee Yu Hao, Aw Khai Loong, Richard Ng, Zhou Min Yuan, Ryan Tan


## Introduction
This repository contains the source programs for the Ellipsis Tech Series Hackathon 2021 (ETSH). Note that the IP for the solution will be owned by the Hackathon Presenting Partner, Goldman Sachs. 

## Summary

Allowing any user to start from "DayZero", an app that utilises deep learning, financial recommender system and credit score calculation that includes all users on their financial long-term journey.

## Directories
- `ETSH-deep-learning/` for training Deep Learning models for credit score percentile prediction
- `ETSH-terraform` for Terraform infrastructure as code, for deploying AWS service infrastructure onto the cloud
- `submission-flask` for dynamic real-time API and model prediction

## Deployment Instructions
Documentation linked because instructions are necessarily complex, and require multiple steps including setting up AWS accounts, IAM policies, etc 
- React app deployed using S3 and CloudFront
- Terraform: ensure AWS IAM credentials are added, then deploy Terraform infrastructure
- Deep Learning: model training


## Attribution and Documentation
- Terraform documentation: terraform.io
- AWS documentation: docs.aws.amazon.com
- Flask documentation: flask-doc.readthedocs.io
- React component styling: github.com/timcreative
- React Highcharts: github.com/highcharts/highcharts-react

# Main features of application

# Layman terms for financial inclusion using natural language prompts
Allow user to truly start from "Day Zero", a state with no financial literacy. Existing financial apps require users to understand what financial services they are seeking, e.g. if they are seeking either of insurance, loans or investments. However, when and what to use these financial services for may be foreign and unfamiliar to many laymen. To promote inclusiveness encompassing those with very little financial literacy, our app allows our user to tell us, simply and in the form of conversational questions, what major life event or issue they are going through, and it is our AI recommender system that will provide recommendations for financial services, further tailored to their long-term life goals. 

Furthermore, life events vary widely and financial services are complex and multi-faceted. For example, it may be best to recommend someone having a child to set up insurance, loans, as well as investment products. Using another app may cause a user to only consider setting up insurance, because they had no idea they needed other financial services, resulting in gaps in their long-term financial future.


# Long-term creation of habits and planning with AI recommender
Recommendations tailored to the user's long-term financial future, with the user's life goals in mind. Most apps will make recommendations that are not tailored to an individual's current needs or long-term goals, rather based on a snapshot in time and for the large masses. DayZero focuses on a user's journey, starting from any point throughout his entire life, tailoring a host of financial services based on the user's current life events and long-term life goals.

Inculcate their daily habits and dedicate a portion of what they spend into their financial future. Most individuals often adopt a dollar-cost averaging strategy where they invest a fixed amount of money into a particular investment at regular intervals, hoping to gain a profit. Yet, without knowledge of the markets or any financial literacy, they often lose out and become skeptical about engaging in financial activity. DayZero aims to revolutionise that by essentially recommending a variable amount to invest based on their spending habits, as well as the market movements. 

# Deep Learning to convert knowledge into actionable steps to tangibly improve lives
We concretely bridge the asymmetric knowledge gap between those with and without financial literacy, by using deep learning to offer a view into the inner workings of the credit score system and the educational part of the investments 

Tangible ways to convert financial literacy into gaining real economic opportunities to improve their lives, through actionable steps to improve credit score, offering access to capital in a way to transform their lives. We utilize a deep learning model to approximate the chance of loan approvals based on a user's credit score, calculated as a function of their loan history, work history, age, and income to provide users a realistic estimate of their credit score, and hence what their interest rates would be. We provide a percentile indication based on other users and their loan approval outcomes, and recommend actionable steps users can take to improve their credit rating.

