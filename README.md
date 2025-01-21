# Notice

## Newsletter Access Simulation

In this application, we fetch the same newsletter list for all users, meaning the list is shared and does not differ based on the user. The "Switch User" button is provided purely for simulating whether the user has access to certain newsletters. It does not trigger a re-fetch of the newsletter list since the data is identical for every user.

The purpose of the button is to make testing easier in the UI by allowing the simulation of different user access without needing to refresh the page or re-fetch the list.

However, when the page is refreshed, the entire newsletter list is re-fetched to ensure that the most up-to-date information is displayed.

## Architecture Choices

This project follows a layered architecture for clear separation of concerns, though other architectures like Feature-Based and Clean Architecture may be chosen depending on the project's needs, size, and maintainability goals.
