# Lab 8 - Starter
Jack Multani

**1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.**
   
   You would fit automated tests within a GitHub action because the pipeline within the GitHub action will run the tests and notify the user who is pushing code whether their code passes the automated tests. If the code does not pass the automated tests, the GitHub action will not push the code and will instead notify the user that some sort of automated test failed, ultimatley preventing faulty code from being pushed to a repository. 


**2) Would you use an end to end test to check if a function is returning the correct output? (yes/no)**
   
   No.


**3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.**
   
   No, I would not use a unit test to test the "message" feature of a messaging application because there is no measureable or numerical data limit that can be tested within the message feature. In addition, the "message" feature of an app cannot be tested by using a set of data; the message either sends or it doesn't. Therefore, without any units to refer to, another type of test would be more efficient to test out the "message" feature of a messaging application.


**4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.**
   
   Yes, I would because the max message length feature is a certain functionality of the messaging application that serves to prevent users carrying out a certain action. Therefore, to ensure that no sort of user can send out a emssage langer than 80 characters, unit tests can be comprised of tests that focus on messages that are longer than 80 characters, thus informing the programmer of the accuracy and functionality of a unit feature that has a numerical limit when compared to other messages. Overall, as the max message length feature is has a unit limit, I would use a unit test to test the "max message length".