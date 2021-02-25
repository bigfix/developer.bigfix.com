---
title: The BigFix SOAP API 
---

The SOAP API provides an easy and efficient way to get data about computers, inventory information, 
security information, recent actions, and so on, from the BES Web Reports into other systems.

## Benefits of using the SOAP API
- **Ease-of-Use:** Building basic applications or integrations that use the BigFix SOAP API are simple to make either by using example code provided by BigFix or by using SOAP libraries provided by most programming languages. Additionally, the SOAP API uses HTTP/HTTPS to transmit data, which makes network communications simple and reliable.
- **Efficiency:** The BigFix SOAP API connects directly to the BigFix Web Reports, which cache information locally, and so unlike database queries that will sometimes lock the database and cause performance problems, the SOAP API won't affect performance of the BigFix database.
- **Flexibility:** Queries to the BigFix SOAP API use session relevance, which allow you to get results about any object in BigFix and allow results in arbitrary formats.
- **And more:** The SOAP protocol is well known for robustness and versatility and there is a wealth of information on the Internet to assist with using the SOAP protocol.

## Sample Use Case Scenarios using the SOAP API
- Retrieve real-time BigFix data into company web portals and dashboards.
- Integrate BigFix data into third-party and custom security tools.
- Create interactive customized web pages that display specific information for users that don't need access to the BigFix Console or Web Reports.
- Create customized applications to make common BigFix reports and information analysis easier.

In a few words, the BigFix SOAP API can be useful in any situation where you might want to see data outside of the BigFix Console or Web Reports.



<!--To access the WSDL file that can be used to make the SOAP API call, you can access http://[webreports_url]/webreports?wsdl for your BigFix 7.0+ Web Reports.-->
