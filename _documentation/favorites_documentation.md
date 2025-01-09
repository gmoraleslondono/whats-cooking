# Favorites Feature Documentation

## Overview
The Favorites feature allows users to save, view, and manage their favorite items .

---

## Backend Implementation

### Endpoints
1. **GET /favorites**
   - **Description**: Fetch all favorite items.
   - **Response**:
     ```json
     [
       { "id": 1, "name": "Pizza", "category": "Food" },
       { "id": 2, "name": "Coffee", "category": "Beverage" }
     ]
     ```

2. **POST /favorites**
   - **Description**: Add a new favorite item.
   - **Request Body**:
     ```json
     { "name": "Pizza", "category": "Food" }
     ```
   - **Response**:
     ```json
     { "message": "Favorite added successfully!" }
     ```

3. **DELETE /favorites/:id**
   - **Description**: Remove a favorite item by ID.
   - **Response**:
     ```json
     { "message": "Favorite removed successfully!" }
     ```

---

## Frontend Implementation

### Component: Favorites
- **Location**: `frontend/src/components/Favorites.js`
- **Description**: Displays the list of favorites and provides options to add or remove items.

### Key Features
1. **Fetching Favorites**: Retrieves the list of favorites from the backend.
2. **Adding Favorites**: Sends a POST request to save a new favorite.
3. **Removing Favorites**: Sends a DELETE request to remove an item.

---

## Week-by-Week Reflection

### Week 1 Reflection: Favorites Feature Development
**Key Tasks Completed**:
- Set up backend functionality using Express and PostgreSQL.
- Implemented POST, GET, and DELETE routes for handling favorite meals.
- Documented endpoints with Swagger.

**Challenges**:
- Debugging SQL queries for secure and efficient data handling.
- Ensuring proper error handling for API endpoints.

**Learnings**:
- Improved understanding of database operations and API design.

---

### Week 2 Reflection: Frontend Integration
**Key Tasks Completed**:
- Integrated backend API for fetching, adding, and removing favorite meals.

**Challenges**:
- Managing state updates dynamically after removing a favorite.
- Navigating between components with React Router.

**Learnings**:
- Strengthened skills in state management and frontend-backend integration.

---

### Week 3 Reflection: Testing and Debugging
**Key Tasks Completed**:
- Tested API calls for data consistency.
- Fixed bugs in the Favorites list update mechanism.
- Added error handling and visual feedback (loading states, alerts).

**Challenges**:
- Handling edge cases like empty favorites lists and failed API calls.
- Debugging asynchronous operations in React.

**Learnings**:
- Gained experience in testing and debugging React applications.
- Improved ability to handle asynchronous operations effectively.

---

## Challenges
1. **State Management**: Keeping the favorites list updated dynamically after adding or removing items.
2. **Error Handling**: Displaying user-friendly messages for failed API requests.
3. **Database Debugging**: Ensuring SQL queries are efficient and secure.

---

## Future Enhancements
- Add a search feature to filter favorites.
- Enable sorting by categories or names.
- Add user authentication to save favorites per user.

---

## Conclusion
The Favorites feature enhances user experience by allowing personalized content management. The week-by-week development process provided valuable insights into backend setup, frontend integration, and testing/debugging practices.
