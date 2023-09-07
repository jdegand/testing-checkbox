# Testing Checkbox

[Angular Challenges](https://github.com/tomalaforge/angular-challenges) #28 Checkbox Testing

## Built With

- [Angular](https://angular.io)
- [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

## Directions

This is the perfect example to get started with `Testing Library`.

You will need to only check if the button gets enabled when clicking on the checkbox

You can look into debug function to get full power of `Testing Library` like:

- logRoles(...);
- screen.debug(); // you can pass a element as input
- screen.logTestingPlaygroundURL(); // you can pass a element as input

## Thoughts

- You can add @testing-library to an angular app with karma and jasmine and it will work without extra configuration.  
- However, @testing-library/user-event appears to have issues.  
- userEvent may have an await bug.  See [Github](https://github.com/testing-library/user-event/issues/1103) for more. 
- fireEvent works no problem with same code structure.  
- I can't get userEvent to work.   
- I did not double install @testing-library/dom.
- I tried invoking view.detectChanges() after the click to no avail. (const view = await render(appComponent))
- I also tried wrapping the click event with waitFor but that failed as well.
- So I decided to install jest and remove karma and jasmine.  
- I think testing with jest is easier anyway as you don't have to cast to HTMLButtonElement with jest.
- jasmine doesn't have a toBeEnabled() equivalent ?
- I didn't have to rewrite tests after the switch and it seems to work fine.  
- I will try to mix user-event with testing-library, karma and jasmine in the future. 
- `Property 'toBeChecked' does not exist on type 'JestMatchers<HTMLElement>'` error when trying to use toBeChecked().  Need to add more dependencies for jest to fully work ? 
- Added @tesing-library/jest-dom and made other adjustments -> very flaky -> it initially worked until it errored out with no tests being run
- Something could be off.  Angular's official support for jest can't come soon enough.  Google needs to do a total overhaul of this.  As of now, it is a minefield of nagging issues.  Packages also need to be more explicit about if types are necessary or not.
- See [Github](https://github.com/testing-library/jest-dom/issues/442) for more.  
- ng test won't work -> need to use npm test.

## Useful Resources

- [YouTube](https://www.youtube.com/watch?v=OB-XAj6Ef_A) - Angular with testing-library
- [Stack Overflow](https://stackoverflow.com/questions/41382831/how-to-unit-test-the-checkbox-in-angular2) - how to unit test the checkbox in angular2
- [Github](https://github.com/testing-library/angular-testing-library/tree/main/apps/example-app/src/app/examples) - testing library angular examples
- [Stack Overflow](https://stackoverflow.com/questions/73232927/react-testing-userevent-click-does-not-work) - userEvent click does not work
- [Github](https://github.com/testing-library/user-event/issues/1103) - user event issues 
- [Testing Library Docs](https://testing-library.com/docs/ecosystem-jasmine-dom/) - ecosystem jasmine dom
- [Medium](https://medium.com/@megha.d.parmar2018/angular-unit-testing-with-jest-2023-2676faa2e564) - angular unit testing with jest -> error -> ts-node should be dev dependency  
- [Github](https://github.com/testing-library/jest-dom/issues/442) - toBeChecked() issues