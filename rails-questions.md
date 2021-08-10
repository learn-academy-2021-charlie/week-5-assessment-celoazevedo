# ASSESSMENT 5: Database and Active Record Practical Questions

1. What is SQL?
    - Structured Query Lenguage - it is a domain specific programing language that is used to interact/query/edit with raltional databases.

2. What the PostgreSQL query that would return all the content in a particular table?
    - SELECT * FROM 'particular table'. 
    - the SELECT will take the columns that we want in the query. I forgot the proper Rails term that is used to refer to the asterisks * (splat?). But the * will allow us to SELECT all of the columns that are present in the table.

3. What is the command to create a new Rails application with a PostgreSQL database?
    - $ rails new < app-name > -d postgresql -T
        - here the -d flag is uninstalling the default database that comes with starting the new application with Rails and installing PostgreSQL. The -T flag is removing the default testing framework because we test with RSpec! And we install RSpec after we create our database but before we start creating our models. 

4. What is the command to generate a Rails model for a meals table with columns named breakfast, lunch, and dinner?
    - $ rails generate model Meal breakfast:string lunch:string dinner:string

5. What is a migration? Why would you use one?
    - Is the tool that we use to change the shape of our database. We can update the structure (adding, removing and changing column names) of our database by using migration. After we generate the model we need to migrate in order to create/update our schema and create a file for that model that was migrated. Every migration file will have a timestamp on its label and this will help us keep track of the changes (migrations) in our database.

6. What is the command to generate a migration file?
    - $ db:migrate
    - but before we migrate, we need something to migrate. We need to create our database and our models. By migrating we will start to create our tables!

7. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command?
    - Rails model name convention -> PascalCasing and singluar
    - Table that is generated upon the creation of the model -> snake_cased and plural

8. What is the schema file in a Rails application? Can you modify the schema directly? Why or why not?
    - The schema file have the structure of our database (our tables). We shoud not change the schema file directly. Rails is very opinionated and it likes to do everything for us. If we change the schema directly it will make Rails mad....

9. What is the Rails console?
    - The Rails console allow us to interact with our Rails application without leaving the IDE (integrated development environment). It has the super powers of Ruby and the Rails environment.

10. What is the Rails console command to see all the content in a particular table?
    - Name.all
        - This is an active record command that allow us to see an array in the console with all of the objects that are present in the table.
        - this is the same as making a SQL query SELECT * FROM names
