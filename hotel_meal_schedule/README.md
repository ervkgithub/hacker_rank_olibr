# Hotel Meal Schedule

## Environment 

- Angular CLI Version: 10.0.4
- Angular Core Version: 10.0.4
- Node Version: v14 (LTS)
- Default Port: 8000

## Application Demo:

![](https://hrcdn.net/s3_pub/istreet-assets/FApUd0uv4t7QHDnRtAUBBQ/hotel-meal-scheduler.gif)

## Functionality Requirements

Create an Hotel Meal Scheduler application that generates the meal schedules for their guests.

The application has 2 components:
- The `GuestForm` component, which has inputs to add a guest's name, start date of the trip and end date of the trip.
- The `MealSchedule` component, which displays a table that lists the meal schedules of dates booked by the guests.

The application has the following functionalities:

- For the `GuestForm` component:
  - First is a text input to add guest name.
  - Second is a date input to add guest's start date of the trip.
  - Third is a date input to add guest's end date of the trip.
  - Clicking on `Add to Menu` button, adds this guest to the meal schedule. 
  - On clicking `Add to Menu` button, all input fields should reset.
  - Tests take care of testing with non-empty and valid inputs.
  - The dates entered in date picker are in YYYY-MM-DD format.

- For the `MealSchedule` component:
  - During their stay, each hotel guest gets three meals per day: breakfast, lunch, and dinner. 
  - The final meal schedule is displayed in table having `<tbody data-test-id="meal-schedule"></tbody>`.
  - For each booked date, the schedule is rendered as a separate row `<tr>`. The table rows should be sorted by date.
  - For each booked date, render 4 columns, date, breakfast, lunch and dinner.
  - First column `<td data-test-id="date">` renders the respective date.
  - Second column `<ul data-test-id="breakfast-list">` renders the list of guests staying on this date who will have breakfast in the order they were added where each guest name is rendered as a list item `<li>`.
  - Third column `<ul data-test-id="lunch-list">` renders the list of guests staying on this date who will have lunch in the order they were added where each guest name is rendered as a list item `<li>`.
  - Fourth column `<ul data-test-id="dinner-list">` renders the list of guests staying on this date who will have dinner in the order they were added where each guest name is rendered as a list item `<li>`.
  - Please note that all dates between start and end dates are dates for stay.
  - You can assume that start and end dates will always be in the same month.

## Testing Requirements

The following data-test-id attributes are required in the component for the tests to pass:

- The guest name input: `name-input`
- The start date input: `start-date`
- The end date input: `end-date`
- The table body containing meal schedule: `meal-schedule`
- Each date column: `date`
- Each breakfast column: `breakfast-list`
- Each lunch column: `lunch-list`
- Each dinner column: `dinner-list`

Please note that component has the above data-test-id attributes for test cases and certain classes and ids for rendering purposes. They should not be changed.

## Project Specifications

**Read-only Files**
- src/app/app.component.spec.ts

**Commands**
- run: 
```bash
npm start
```
- install: 
```bash
npm install
```
- test: 
```bash
npm test
```
