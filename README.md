# Stock Management System

## Overview

This project is a **basic Stock Management System** developed as part of an assignment. The application demonstrates common enterprise-level front-end patterns such as navigation, filtering, sorting, detail views, and CRUD-style updates. The solution is implemented as **two separate projects**:

* **Front-end**: React.js application
* **Back-end**: Independent API service

Both applications must be running simultaneously for full functionality.

---

## Features

### Product Management

* **Side Panel Navigation**

  * Navigate to the **Products** page using the side navigation panel.

* **Product Listing**

  * View products in a paginated/list format.
  * Use the **top filter panel** to filter products based on available criteria.
  * Navigate through the product list using the **arrow controls** located below the table.

* **Product Details & Update**

  * Open the **Product Detail View** by clicking the **Detail** button on any product record.
  * Update product information directly from the detail page.

---

### Order Management

* **Side Panel Navigation**

  * Navigate to the **Orders** page from the side panel.

* **Order Listing**

  * Filter orders using the **top filter panel**.
  * Sort orders by **order status** directly within the orders table.

---

## Project Structure

This assessment consists of **two separate repositories/projects**:

1. **Back-End Application**
2. **Front-End React Application**

Both must be set up and executed separately.

---

## Setup Instructions

### 1. Back-End Application Setup

1. Download the back-end application from the following URL:

   > **Back-End Repository URL:** *[Provide URL Here]*

2. Open the back-end project in **Visual Studio Code**.

3. Install dependencies and start the server using the following command:

   ```bash
   npm install
   npm run dev
   ```

   *(Command may vary depending on the back-end setup)*

4. Ensure the back-end server is running successfully before starting the front-end.

---

### 2. Front-End Application Setup

1. Download this React front-end project.

2. Open the project in a **separate Visual Studio Code instance**.

3. Install dependencies and run the application:

   ```bash
   npm install
   npm start
   ```

4. The application will be available in your browser at:

   ```
   http://localhost:3000
   ```

---

## Usage Flow

1. Start the **back-end server**.
2. Start the **front-end React application**.
3. Use the **side navigation panel** to access Products and Orders.
4. Apply filters and sorting as required.
5. View and update product details via the Product Detail page.

---

## Technologies Used

* **Front-End**: React.js
* **Back-End**: Node.js / API Service
* **UI Components**: Material UI (MUI)
* **State Management**: React Hooks / Redux (if applicable)

---

## Notes for Reviewers

* This project focuses on **functionality, structure, and usability** rather than advanced UI styling.
* The codebase is organized to reflect **real-world application architecture**.
* Clear separation between front-end and back-end allows independent development and testing.

---

## Author

**Udara Jayasumana**
Front-End Developer

---

Thank you for reviewing this assignment.
