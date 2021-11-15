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
  -  At this stage, the applications should be up and running.
___

6. #### Further Information:
   - The solution is documented according to the conventions.
   - The solution follows the MVC pattern.
   - The AddBox View does not provide any type of blue color.
   - The Color Component can be expanded to contain a wide range of colors. 
   - The List View can sort the information according to any of these columns: name, cost, and weight. The sorting can be conducted in both orders; Ascending order and Descending order. The latter can be achieved by clicking on the header column.
   - The Reducer is used in the following manner: the Listboxes View initially will make a Get request to get the data from the database and display it, and it will save the same date in the store. The AddBox view will update the state of the Reducer when a new insertion occurs. Subsequently, the Listboxes View will check the state; if there is no update, it will display the data stored in the store, but if there is an update, it will make a new Get request to display the latest data and update the store also. The purpose is to avoid making costly and unnecessary Get requests when necessary.
   - There are two Test Suites; one in the backend soource file and the other in the frontend source file.
   - There are DEMO images along with the solution that show the application running and demonstrating its features and results.
   
7. #### DEMO:
   - The AddBox View that supports a hashed URL and it does not provide any blue colors. 
   ![image info](https://github.com/jy222bz/boxinator/blob/master/DemoImages/addbox.png)
   - The Add Box View: invalid input is provided and a toast message is shown displaying the source of error, for a brief amount of time. 
   ![image info](https://github.com/jy222bz/boxinator/blob/master/DemoImages/toast-message-when-the-weight-is-neg.png)
    - The Add Box View: a successful insertion and a toast message is shown for a brief amount of time.
   ![image info](https://github.com/jy222bz/boxinator/blob/master/DemoImages/toast-message-in-insertion.png)
   - The List Boxes View: is displaying the results and it supports a hashed URL also. 
   ![image info](https://github.com/jy222bz/boxinator/blob/master/DemoImages/listofboxes.png)
   - The List Boxes View: sorting the result after the name in an ascending order. The same principle can be applied to weight and cost.
   ![image info](https://github.com/jy222bz/boxinator/blob/master/DemoImages/listofboxes-sorting-names-in-acs.png)
   - The List Boxes View: sorting the result after the name in an descending order. The same principle can be applied to weight and cost.
   ![image info](https://github.com/jy222bz/boxinator/blob/master/DemoImages/listofboxes-sorting-names-in-des.png)
   - The Database schema. 
   ![image info](https://github.com/jy222bz/boxinator/blob/master/DemoImages/db.png)

### Information:
Author: Jacob Yousif <br>
&copy; 2021 Jacob Yousif
