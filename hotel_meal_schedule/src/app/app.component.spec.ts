import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {MealSchedule} from './mealSchedule/mealSchedule.component';
import {GuestForm} from './guestForm/guestForm.component';
import {FormsModule} from "@angular/forms";
import {RouterTestingModule} from '@angular/router/testing';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let compiled;
  let nameInput;
  let startDateInput;
  let endDateInput;
  let submitButton;
  let mealSchedule;

  const getByTestId = (id, parentNode?) => {
    if (!parentNode) {
      parentNode = compiled;
    }
    return parentNode.querySelector(`[data-test-id="${id}"]`);
  };

  const getById = (id, parentNode?) => {
    if (!parentNode) {
      parentNode = compiled;
    }
    return parentNode.querySelector(`#${id}`);
  };

  const pushValueToInput = async (input, value) => {
    input.value = value;
    input.dispatchEvent(new Event('change'));
    input.dispatchEvent(new Event('input'));
    await fixture.whenStable();
    await fixture.detectChanges();
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule
      ],
      declarations: [
        AppComponent,
        MealSchedule,
        GuestForm
      ],
      providers: [],
      schemas : [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(async() => {
    fixture = TestBed.createComponent(AppComponent);
    fixture.autoDetectChanges(true);
    compiled = fixture.debugElement.nativeElement;
    component = fixture.componentInstance;
    await fixture.detectChanges();
    await fixture.whenStable();

    nameInput = getByTestId('name-input');
    startDateInput = getByTestId('start-date');
    endDateInput = getByTestId('end-date');
    submitButton = getByTestId('submit-button');
  });

  it('Adding single guest for single day prepares meal schedule correctly', async() => {
    await pushValueToInput(nameInput, 'John');
    await pushValueToInput(startDateInput, '2020-12-17');
    await pushValueToInput(endDateInput, '2020-12-17');

    await submitButton.click();

    mealSchedule = getByTestId('meal-schedule');
    expect(mealSchedule.children.length).toEqual(1);

    const firstDate = getById('schedule-0', mealSchedule);
    const date = getByTestId('date', firstDate);
    const breakfastList = getByTestId('breakfast-list', firstDate);
    const lunchList = getByTestId('lunch-list', firstDate);
    const dinnerList = getByTestId('dinner-list', firstDate);

    expect(date.textContent.trim()).toEqual('2020-12-17');
    expect(breakfastList.children.length).toEqual(1);
    expect(breakfastList.children[0].textContent.trim()).toEqual('John');

    expect(lunchList.children.length).toEqual(1);
    expect(lunchList.children[0].textContent.trim()).toEqual('John');

    expect(dinnerList.children.length).toEqual(1);
    expect(dinnerList.children[0].textContent.trim()).toEqual('John');
  });

  it('After adding a guest all input fields are reset', async() => {
    await pushValueToInput(nameInput, 'John');
    await pushValueToInput(startDateInput, '2020-12-17');
    await pushValueToInput(endDateInput, '2020-12-17');

    await submitButton.click();

    nameInput = getByTestId('name-input');
    startDateInput = getByTestId('start-date');
    endDateInput = getByTestId('end-date');

    expect(nameInput.value).toBeFalsy();
    expect(startDateInput.value).toBeFalsy();
    expect(endDateInput.value).toBeFalsy();
  });

  it('Adding single guest for multiple days prepares meal schedule correctly', async() => {
    await pushValueToInput(nameInput, 'John');
    await pushValueToInput(startDateInput, '2020-12-17');
    await pushValueToInput(endDateInput, '2020-12-18');

    await submitButton.click();

    mealSchedule = getByTestId('meal-schedule');
    expect(mealSchedule.children.length).toEqual(2);

    const firstDate = getById('schedule-0', mealSchedule);
    let date = getByTestId('date', firstDate);
    let breakfastList = getByTestId('breakfast-list', firstDate);
    let lunchList = getByTestId('lunch-list', firstDate);
    let dinnerList = getByTestId('dinner-list', firstDate);

    expect(date.textContent.trim()).toEqual('2020-12-17');
    expect(breakfastList.children.length).toEqual(1);
    expect(breakfastList.children[0].textContent.trim()).toEqual('John');

    expect(lunchList.children.length).toEqual(1);
    expect(lunchList.children[0].textContent.trim()).toEqual('John');

    expect(dinnerList.children.length).toEqual(1);
    expect(dinnerList.children[0].textContent.trim()).toEqual('John');

    const secondDate = getById('schedule-1', mealSchedule);
    date = getByTestId('date', secondDate);
    breakfastList = getByTestId('breakfast-list', secondDate);
    lunchList = getByTestId('lunch-list', secondDate);
    dinnerList = getByTestId('dinner-list', secondDate);

    expect(date.textContent.trim()).toEqual('2020-12-18');
    expect(breakfastList.children.length).toEqual(1);
    expect(breakfastList.children[0].textContent.trim()).toEqual('John');

    expect(lunchList.children.length).toEqual(1);
    expect(lunchList.children[0].textContent.trim()).toEqual('John');

    expect(dinnerList.children.length).toEqual(1);
    expect(dinnerList.children[0].textContent.trim()).toEqual('John');
  });

  it('Adding multiple guests for single day prepares meal schedule correctly', async() => {
    await pushValueToInput(nameInput, 'John');
    await pushValueToInput(startDateInput, '2020-12-17');
    await pushValueToInput(endDateInput, '2020-12-17');

    await submitButton.click();

    await pushValueToInput(nameInput, 'Erica');
    await pushValueToInput(startDateInput, '2020-12-17');
    await pushValueToInput(endDateInput, '2020-12-17');

    await submitButton.click();

    mealSchedule = getByTestId('meal-schedule');
    expect(mealSchedule.children.length).toEqual(1);

    const firstDate = getById('schedule-0', mealSchedule);
    const date = getByTestId('date', firstDate);
    const breakfastList = getByTestId('breakfast-list', firstDate);
    const lunchList = getByTestId('lunch-list', firstDate);
    const dinnerList = getByTestId('dinner-list', firstDate);

    expect(date.textContent.trim()).toEqual('2020-12-17');
    expect(breakfastList.children.length).toEqual(2);
    expect(breakfastList.children[0].textContent.trim()).toEqual('John');
    expect(breakfastList.children[1].textContent.trim()).toEqual('Erica');

    expect(lunchList.children.length).toEqual(2);
    expect(lunchList.children[0].textContent.trim()).toEqual('John');
    expect(lunchList.children[1].textContent.trim()).toEqual('Erica');

    expect(dinnerList.children.length).toEqual(2);
    expect(dinnerList.children[0].textContent.trim()).toEqual('John');
    expect(dinnerList.children[1].textContent.trim()).toEqual('Erica');
  });

  it('Adding multiple guests for multiple days prepares meal schedule correctly', async() => {
    await pushValueToInput(nameInput, 'John');
    await pushValueToInput(startDateInput, '2020-12-17');
    await pushValueToInput(endDateInput, '2020-12-18');

    await submitButton.click();

    await pushValueToInput(nameInput, 'Erica');
    await pushValueToInput(startDateInput, '2020-12-16');
    await pushValueToInput(endDateInput, '2020-12-19');

    await submitButton.click();

    mealSchedule = getByTestId('meal-schedule');
    expect(mealSchedule.children.length).toEqual(4);

    const firstDate = getById('schedule-0', mealSchedule);
    let date = getByTestId('date', firstDate);
    let breakfastList = getByTestId('breakfast-list', firstDate);
    let lunchList = getByTestId('lunch-list', firstDate);
    let dinnerList = getByTestId('dinner-list', firstDate);

    expect(date.textContent.trim()).toEqual('2020-12-16');
    expect(breakfastList.children.length).toEqual(1);
    expect(breakfastList.children[0].textContent.trim()).toEqual('Erica');

    expect(lunchList.children.length).toEqual(1);
    expect(lunchList.children[0].textContent.trim()).toEqual('Erica');

    expect(dinnerList.children.length).toEqual(1);
    expect(dinnerList.children[0].textContent.trim()).toEqual('Erica');

    const secondDate = getById('schedule-1', mealSchedule);
    date = getByTestId('date', secondDate);
    breakfastList = getByTestId('breakfast-list', secondDate);
    lunchList = getByTestId('lunch-list', secondDate);
    dinnerList = getByTestId('dinner-list', secondDate);

    expect(date.textContent.trim()).toEqual('2020-12-17');
    expect(breakfastList.children.length).toEqual(2);
    expect(breakfastList.children[0].textContent.trim()).toEqual('John');
    expect(breakfastList.children[1].textContent.trim()).toEqual('Erica');

    expect(lunchList.children.length).toEqual(2);
    expect(lunchList.children[0].textContent.trim()).toEqual('John');
    expect(lunchList.children[1].textContent.trim()).toEqual('Erica');

    expect(dinnerList.children.length).toEqual(2);
    expect(dinnerList.children[0].textContent.trim()).toEqual('John');
    expect(dinnerList.children[1].textContent.trim()).toEqual('Erica');

    const thirdDate = getById('schedule-2', mealSchedule);
    date = getByTestId('date', thirdDate);
    breakfastList = getByTestId('breakfast-list', thirdDate);
    lunchList = getByTestId('lunch-list', thirdDate);
    dinnerList = getByTestId('dinner-list', thirdDate);

    expect(date.textContent.trim()).toEqual('2020-12-18');
    expect(breakfastList.children.length).toEqual(2);
    expect(breakfastList.children[0].textContent.trim()).toEqual('John');
    expect(breakfastList.children[1].textContent.trim()).toEqual('Erica');

    expect(lunchList.children.length).toEqual(2);
    expect(lunchList.children[0].textContent.trim()).toEqual('John');
    expect(lunchList.children[1].textContent.trim()).toEqual('Erica');

    expect(dinnerList.children.length).toEqual(2);
    expect(dinnerList.children[0].textContent.trim()).toEqual('John');
    expect(dinnerList.children[1].textContent.trim()).toEqual('Erica');

    const fourthDate = getById('schedule-3', mealSchedule);
    date = getByTestId('date', fourthDate);
    breakfastList = getByTestId('breakfast-list', fourthDate);
    lunchList = getByTestId('lunch-list', fourthDate);
    dinnerList = getByTestId('dinner-list', fourthDate);

    expect(date.textContent.trim()).toEqual('2020-12-19');
    expect(breakfastList.children.length).toEqual(1);
    expect(breakfastList.children[0].textContent.trim()).toEqual('Erica');

    expect(lunchList.children.length).toEqual(1);
    expect(lunchList.children[0].textContent.trim()).toEqual('Erica');

    expect(dinnerList.children.length).toEqual(1);
    expect(dinnerList.children[0].textContent.trim()).toEqual('Erica');
  });
});
