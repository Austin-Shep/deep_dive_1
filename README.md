#Wednesday 4/24 Project 1; Week 1: **Deep dive**
******
##TOPICS:
- Intro To Remote Servers
    -AJAX/APIs
- Intro To Remote Data Storage 
    - Firebase
- Intro To Javascript Libraries 
    - Moment.js

###Useful links
(https://www.sitepoint.com/dom-manipulation-vanilla-javascript-no-jquery/)[dom manipulation in vanilla javscript]

(https://www.w3schools.com/jsref/jsref_obj_string.asp)[string methods and manipulation]


#AJAX/APIs
###What Is a remote server?
A remote server is just someone elses computer running code or applications and managing data. 

###What makes a remote server different from your computer?
When you ask a server for data it will present you with data. 

###Who cares? What about APIS? 
APIs are how we communicate with servers and their applications (code)

##APIs
An **A**pplication **P**rogram **I**nterface is a way for us to trigger server side code using URL's. Usually to `GET` and `POST` data. (more on that later)

any questions before we get into the code?

Lets examine code.

#Remote data storage
###what is it and why do we do it?
"the cloud" is just another server (or servers). This allows us to manage larger data sets, and 
transmit data and interactions from users around the globe.

##Firebase
firebase is a simple, (mostly) free, real-time, cloud like data storage service. Firebase is compatable with Mobile, Web, OOP and unity based projects. Not quite a true database, but is a great introduction into the idea.

###how
Firebase is an API that comes with a code library, by way of a cdn(Much like jquery). We are provided with pre-defined Methods (functions within an object) to execute diferent bits of code (database.ref() for example)that will allow us to interface with bits of JSON data being stored in Googles servers. 

any questions before we get into the code?

Lets get into some code.

#Javascript Libraries (moment)
###What are Libraries?
Simply put, Libraries are absracted pieces of code written by somebody else so you dont have to. some popular examples:
- Jquery
- MomentJs
- lodash
- Express
- Cherio
- Request
- React

### How do we access these libraries?
Many ways! if you goto a library's website and look at their documentation, the first thing it will usually tell you is how to get acccess to their code. 
The most common ways are through the use of CDNs, downloading the file directly, Or through Package Managers(we wont discuss this option now but it will be vital once we get into NodeJs).

### Where does moment fit into this equation?
Moment is the leading library used to deal with time, timed events, dates and everything in between.
Our goal with introducing you to moment was to get you exposed to a library with comprehensive documentation before we started project 1, and ultimately before we start using multiple libraries and packages in each program.
As our programs get more and more complex, the amount of code required to get them working grows exponetialy, and it becomes un realistic for any developer to be responsible for writing 100% of an applications functionality. we offload the burden of heavily repeated and standardized code to these libraries. and moment occupies a very very small portion of that landscape. At this time I believe it is more critical that you understand how to navigate an unfamiliar documentation than it is to memorize Moment. In fact, JUST trying memorizing moments syntax will get you nowhere and occupy more time than its worth, All the answers are recorded online with numerous examples of how it works, specificaly to remove the burden of memorization.

