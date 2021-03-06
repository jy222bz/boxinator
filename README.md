# Welcome to the Boxinator Application.

### Installation and Configurations:
1. #### Clone the repo:

~~~
clone https://github.com/jy222bz/boxinator.git
~~~

2. #### MYSQL:
    - Install MySQL in your local enviourment.
    - Configure your connection; username and password.

3. #### Backend:
    - Compile the source code.
    - Provide your datasource username and datasource password in the application.properties file that is located in the folder resouces under the source code folder.
    - Run the backend application. The application will create the database schema automatically.

4. #### Frontend:
    - Compile the source code.
    - Open the command line.
    - Change Directory to the root folder of the frontend.
    - Install dependencies; by running the command line: `npm install`
    - Run the application; by running the command line: `npm start` and it will run the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

5. #### Use the application:
    -  At this stage, the applications should be up and running. Thus, you can utilize the features of the application.

6. #### Test Suite in the frontend:
    - To run the test, run the command line `npm run test`

7. #### Test Suite in the backend:
    - To run the test, run the class `CostCalculatorTests` to execute the tests, the file is located in the Test Folder.

8. #### Further Information:
   - This application is reasonably small, and the objective is to demonstrate Full Stack Development, REST API Communication, MVC pattern, Clean Code, Unit Testing, Object-Oriented Programming Paradigm, and Utilizing different technologies, frameworks, and libraries.  For the frontend development, the following technologies, libraries, and frameworks were used: React, Axios, Redux, Less, CSS, eslint, Prettier, HTML, and JavaScript. As for the backend development, Java Spring with Maven was used for the development. Lastly, MySQL was utilized for data storage.
   - The solution is documented according to the conventions.
   - The solution follows the MVC pattern.
   - The AddBox View does not provide any type of blue color.
   - The Color Component can be expanded to contain a wide range of colors. 
   - The List View can sort the information according to any of these params: name, cost, and weight. The sorting can be conducted in both orders; Ascending order and Descending order. The latter can be achieved by clicking on the header column.
   - Redux is used in the following manner: the Listboxes View initially will make a Get request to get the data from the database and display it, and it will save the date in the store. The AddBox View will update the state of the Reducer when a new insertion occurs. Subsequently, the Listboxes View will check the state; if there is no update, it will display the data stored in the store, but if there is an update, it will make a new Get request to display the latest data and update the store also. The purpose is to avoid making costly and unnecessary Get requests when possible.
   - There are DEMO images along with the solution that show the application running and demonstrating its features and results.
   
9. #### DEMO:
   - The AddBox View that supports a hashed URL and it does not provide any blue colors. 
   ![image info](https://github.com/jy222bz/boxinator/blob/master/demo/addbox.png)
   - The Add Box View: showing the color picker (No Blue Color At ALL). 
   ![image info](https://github.com/jy222bz/boxinator/blob/master/demo/addbox-show-color.png)
   - The Add Box View: invalid input is provided and a toast message is shown displaying the source of error, for a brief amount of time. 
   ![image info](https://github.com/jy222bz/boxinator/blob/master/demo/addbox-invalid-name.png)
   - The Add Box View: another invalid input is provided and a toast message is shown displaying the source of error, for a brief amount of time. 
   ![image info](https://github.com/jy222bz/boxinator/blob/master/demo/addbox-invalid-weight.png)
    - The Add Box View: a successful insertion and a toast message is shown for a brief amount of time.
   ![image info](https://github.com/jy222bz/boxinator/blob/master/demo/addbox-insertion.png)
   - The List Boxes View: is displaying the results and it supports a hashed URL also. 
   ![image info](https://github.com/jy222bz/boxinator/blob/master/demo/listboxes.png)
   - The List Boxes View: sorting the result after the name in an ascending order. The same principle can be applied to weight and cost.
   ![image info](https://github.com/jy222bz/boxinator/blob/master/demo/listboxes-sorting-names-acs.png)
   - The List Boxes View: sorting the result after the name in an descending order. The same principle can be applied to weight and cost.
   ![image info](https://github.com/jy222bz/boxinator/blob/master/demo/listboxes-sorting-names-desc.png)
   - The Database schema. 
   ![image info](https://github.com/jy222bz/boxinator/blob/master/demo/db.png)

### Information:
Author: Jacob Yousif <br>
&copy; 2021 Jacob Yousif
