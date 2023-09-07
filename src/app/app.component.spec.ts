/*

// original code that I had with karma, jasmine, testing-library, & user-event

import { fireEvent, render, screen } from '@testing-library/angular';
import { AppComponent } from './app.component';
import userEvent from '@testing-library/user-event'

describe('AppComponent', () => {
  describe('When checking the checkbox', () => {
    
    it('FireEvent', async () => {

      await render(AppComponent);

      const input = screen.getByLabelText('Agreed'); //screen.getByRole('checkbox');

      fireEvent.click(input);

      const submit = screen.getByRole('button', { name: 'Submit' }) as HTMLButtonElement;

      expect(submit.disabled).toBeFalsy();
    });

    it('UserEvent', async () => {

      const user = userEvent.setup();

      await render(AppComponent);

      const input = screen.getByLabelText('Agreed');
      const submit = screen.getByRole('button', { name: 'Submit' }) as HTMLButtonElement;

      //await waitFor(() => {
      //  user.click(input);
      //})

      await user.click(input);

      expect(submit.disabled).toBeFalsy();
    });

  });
});
*/

/*

// used to test jest installation

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should render the title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('testing-checkbox is running!');
  });
});
*/

import { fireEvent, render, screen } from '@testing-library/angular';
import { AppComponent } from './app.component';
import userEvent from '@testing-library/user-event'

describe('AppComponent', () => {
  describe('When checking the checkbox', () => {
    
    it('FireEvent', async () => {

      await render(AppComponent);

      const input = screen.getByLabelText('Agreed'); //screen.getByRole('checkbox');

      fireEvent.click(input);

      const submit = screen.getByRole('button', { name: 'Submit' }) as HTMLButtonElement;

      expect(submit.disabled).toBeFalsy();
    });

    it('UserEvent', async () => {

      const user = userEvent.setup();

      await render(AppComponent);

      const input = screen.getByLabelText('Agreed');
      const submit = screen.getByRole('button', { name: 'Submit' }) as HTMLButtonElement;

      await user.click(input);

      expect(submit.disabled).toBeFalsy();
    });

    it('UserEvent 2', async () => {

      const user = userEvent.setup();

      await render(AppComponent);

      const checkbox = screen.getByLabelText('Agreed');
      user.click(checkbox);
      const button = screen.getByRole('button', { name: 'Submit' });
      expect(button).toBeDisabled();
    });

    it('UserEvent 3', async () => {

      const user = userEvent.setup();

      await render(AppComponent);

      const checkbox = screen.getByLabelText('Agreed');
      await user.click(checkbox);
      expect(checkbox).toBeChecked();
    });

  });
});
