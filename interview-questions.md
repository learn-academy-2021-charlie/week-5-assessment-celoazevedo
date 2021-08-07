# ASSESSMENT 5: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. Rails follows an MVC pattern. What does that mean?

  Your answer: MVC stands for model, view and controller. This is a way to architech the application. The model will handle the data/database/schema that we will be working with in our app. The view will handle the display files, the files that will be rendered. And in the controller the app will handle the actions that will be directed by the routes. This pattern allows the app structure to be organized.

  Researched answer: MVC is a pattern for the architecture of a software application. The model will handle the data and business logic. The controler will handle the user interface and application. And the view will handle the graphical UI objects and presentation.
      - When the client accesses the web app, the browser will send a request to the controller. The controller will get the data that we requested from the model and will respond to the request with the retrieved data. The response will be sent to the view that will be rendered and sent back to the client (browswer) to be displayed.


2. What is a relational database? Are there other kinds of databases?

  Your answer: A relational database (in our case we are working with postgresql) allows us to relate different tables within the same database by using a unique identifier/ foreign key to relate them. And this allows us to keep our database code dry and our database scalable. 

  Researched answer: There are also non-relational databases (or NoSQL) like MongoDB where unlike the realational databases, they do not use tables with rows and columns to define the structure of their schema. The NoSQL databases have a very flexible data storage structure. 



3. What is object-relational mapping?

  Your answer: ORM allows us to write postgresql queries in the Rails console. It translates SQL into Rails and Rails into SQL. 

  Researched answer: We use the ORM -> Active Record framework in our Ruby on Rails application. It allows the developer to comunicate with the database using Ruby code in the Rails console (instead of manually writing the sql query statement). AAAND it lets you interact with the data as if it is a normal Ruby object.



4. What is a gem?

  Your answer: the gem file in a Rails app holds/have all of the code snipets for the dependencies that are beiing used in the app. A gem is a dependency listed in the gem file.

  Researched answer: Gems can be used to extend or modify functionality in a Ruby application. 



5. What are primary keys? Why are they important?

  Your answer: The primary key is a unique identifier for an instance on a database. It is used to make relations between two different data tables. Ex: We have a table of students and each student can have many books (we will also have a table for books). Every book in the books table will be connected to a student in the students table by a unique identifier / primary key (it is always in the belong_to side!). 

  Researched answer: a primary key is a specific choice of a column (attribute) that specifies a row in ralation with table. --> "which attributes identify a record"



## Looking Ahead: Terms for Next Week
Research and define the following terms to the best of your ability.

1. RESTful routes: - are Representational State Transfer routes that attempt to bring the operations that can be applied to an object into HTTP requests. AS CURD actions!

2. JSON: - it stands for JavaScript Object Notation. It is a lightweight data-interc, it is human readable and it is ease for the computer to parse and generate. 

3. ERB: - is a tamplate engine for Ruby. It allows us to write Ruby code in plain text files documents. It is used to generate document infor details and/or flow control.

4. Params: - aka URL parameters or query strings. Params is a way to pass in additional information into a controller method to query that databse or dinamicaly modify the view.

5. API: - Applicaiton Programming Interface - the way that I try to think of what an API is -> is a simple interface that can provide complex solutions. It abstracts the API user from all of the complexities that are happening under the hood. In our case we will be using URLs to communicate with the server and be able to perform CRUD operations.
