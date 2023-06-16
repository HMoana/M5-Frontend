# Dockerized MERN Project

## Metro re-design of homepage and search listing page

---

### **Overview**

- Week 1: Will be setting up the infrastructure for UX Designer's application to run using docker containers, docker compose and MongoDB

- Week 2: Creating the application based on the version of prototype design received from UX Designers at the end of Week 1.

---

### **About our projects**

### _Metro Re-design_

(a) A redesigned home page at <https://metronz.co.nz/>, taking the customers feedback into consideration

- Metro Home page by Jin Zhang

(b) A redesigned search function and features page of property listings, using the company’s third party web page at <https://apply.tpsportal.co.nz/tps6175?> as a reference.

- Metro search listing page by Ricardo Diaz Rodriguez

(c) A complete redesign building upon the property listings page. This additional listing information page provides the user with more detailed information about the selected property(s). Where they have the options to enquire about the property, book a viewing of the property or make an application for the property.

- Metro listing information page by Heni Kimura

### **Purpose**

The purpose of this project is to assimilate a working environment, adopting an agile mindset and putting into practice. Collaborating as a development team to deliver the re-designed prototype.

### **Built with:**

- [React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo-react&logoColor=026e00 "React")
- [React-url](https://react.dev/ "Reacturl")
- [Javascript](https://img.shields.io/badge/Javascript-20232A?style=for-the-badge&logo-javascript&logoColor=026e00 "Javascript")
- [Javascript-url](https://www.javascript.com/ "Javascripturl")
- [CSS](https://img.shields.io/badge/CSS-20232A?style=for-the-badge&logo-css&logoColor=026e00 "CSS")
- [CSS-url](https://www.w3schools.com/css/ "CSSurl")

---

### **Getting started:**

### _Prerequisites -_

#### _The software needed to install -_

- _Dependencies:_

- React

  ```sh
  npx create-react-app .
  ```

- React Router Dom

  ```sh
  npm i react-router-dom
  ```

- Axios

  ```sh
  npm i axios
  ```

---

### **Project structure and installation:**

1. Root directory 

   ```sh
   Mission 5
   ```


2. Frontend directory

   ```sh
   M5-Frontend
   ```

3. Clone the frontend repo

   ```sh
   git clone https://github.com/HMoana/M5-Frontend.git
   ```

4. Install NPM packages

   ```sh
   npm install
   ```

5. Backend directory

   ```sh
   M5-Backend
   ```

6. Clone the backend repo

   ```sh
   git clone https://github.com/jinzh23/M5-Backend.git
   ```

7. Install NPM packages

   ```sh
   npm install
   ```   

---

### **Set-up to build, run & host project:**

- Install and open _docker desktop_ on your local machine
- Open integrated terminal on _M5-Backend_
- In the terminal use command _'docker-compose start'_ this will build, run & compose the docker containers
- After some time the terminal will show _mongo output & listening to the server port_
- In _docker desktop_ both mongo and server containers should appear as _'running'_
- Open another integrated terminal on _M5-Frontend_ and use command _'npm start'_
- To stop docker containers use command _'docker-compose stop'_

---

### **Features:**

- React app using javascript and css
- Using axios to fetch data from dockerized server and mongo containers in the M5-Backend repo

---

### **Future improvements:**

- Improve code smells and use partner reviews
- Future integration of sass styling
- Attempt to dockerize the M5-Frontend 

---

### **Contributors & our Contacts:**

_Developers:_

- Heni Kimura - <henik@missionreadyhq.com>
- Jin Zhang - <jinz@missionreadyhq.com>
- Ricardo Diaz Rodriguez <diiaz2910@gmail.com>

_UX Designers:_

- Aneesha Baidwan - <aneeshab@missionreadyhq.com>
- Myint Aung - <myint@missionreadyhq.com>

### **Project Link:**

- [Github frontend repository](https://github.com/HMoana/M5-Frontend.git "Github frontend repository")
- [Github backend repository](https://github.com/jinzh23/M5-Backend.git "Github backend repository")

### **License:**

Distributed under the MIT License. See LICENSE.txt for more information.
