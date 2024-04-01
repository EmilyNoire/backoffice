# GENERAL NOTES

This project is made as an exercise for Euris.
I noticed a bug in my program about the saving of the files when we try to insert a new Product. Beside that, everything seems to work fine.

I developed this dashboard as a landing page after a hypothetical login, so at the top there is the name of the store and the icon from which users should be able to choose functionalities based on their importance level.

Similarly, the sidebar only presents two components, but more could be added depending on the person who logged in, whether it's a store owner, an area manager, or some other managerial figure.

# the view
I chose a desktop-first approach for this project because the data input method for new products with modal opening doesn't quite fit a tablet structure, where you would likely need to scan a barcode for data input before a user verification for saving the data.

# the chart
Regarding the chart, I decided to group everything under the "Other" category that only had numbers or completely empty spaces, as they could be stock remnants or less important incorrect data. Similarly, things like "torta" or "Torta" should have been grouped together, but the same cannot be done for "Torte" and "Torta.". A category selection menu and the option to add/delete categories if needed could have been implemented, but it would have required additional backend calls that I didn't have access to.

# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
