# React-Projects

These are a series of projects that includes my personal react projects. Most of the projects include react along with another technology. I will update the list time by time. 
1. Yelp-React-Exprss-Postgres project:
  ## Summary:
    A. On the front end , there are two input boxes asking about service and city you are interested then you click on search.
    B. A HTTP Post request will be sent to the server in form of JSON : {city:XX, food:YY} 
    C. Server.js, implemented using the Express.js, unpacks the user input and sends a HTTP request to Yelp API-end point.
    D. The return data will be return from Yelp end point to our server.js, and server.js serves the data for react to display
    E. The return data that the user sees is the name of appropriate businesses within the quried city.
  Adds-on:
    The server is now able to communicate with the Postgres database. 
    
