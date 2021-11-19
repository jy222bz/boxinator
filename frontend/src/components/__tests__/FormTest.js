import React from 'react'
import ReactDOM from 'react-dom'
import FormComponent from '../Form/FormComponent'
import { render, screen, cleanup } from '@testing-library/react'
import { Provider } from 'react-redux';
import store from '../../redux/store'
import renderer from 'react-test-renderer'

/**
 * A Teste Suit.
 * @author Jacob Yousif
 *
 */

afterEach(() => {
 cleanup()
})


it('Renders without any faults.', () => {
 const sut = document.createElement('section')
 ReactDOM.render(<Provider store={store}>
  <FormComponent />
 </Provider>, sut)
})

test('It should have a main section.', () => {
 render(<Provider store={store}>
  <FormComponent />
 </Provider>);
 const sut = screen.getByTestId('id__section_main')
 expect(sut).toBeInTheDocument();

});

test('It should have a div in the section.', () => {
 render(<Provider store={store}>
  <FormComponent />
 </Provider>);
 const sut = screen.getByTestId('id__div')
 expect(sut).toBeInTheDocument();

});

test('It should have a headline and text in it.', () => {
 render(<Provider store={store}>
  <FormComponent />
 </Provider>);
 const sut = screen.getByTestId('id__headline');
 expect(sut).toBeInTheDocument();
 expect(sut).toHaveTextContent('The Required Info')
});


test('It should have a form', () => {
 render(<Provider store={store}>
  <FormComponent />
 </Provider>);
 const sut = screen.getByTestId('id__form')
 expect(sut).toBeInTheDocument();
});

test('It should have a label for the name.', () => {
 render(<Provider store={store}>
  <FormComponent />
 </Provider>);
 const sut = screen.getByTestId('id__label__name')
 expect(sut).toBeInTheDocument();
});


test('It should have a label for the weight.', () => {
 render(<Provider store={store}>
  <FormComponent />
 </Provider>);
 const sut = screen.getByTestId('id__label__weight')
 expect(sut).toBeInTheDocument();
});

test('It should have a label for the color.', () => {
 render(<Provider store={store}>
  <FormComponent />
 </Provider>);
 const sut = screen.getByTestId('id__label__color')
 expect(sut).toBeInTheDocument();
});

test('It should have a label for the country.', () => {
 render(<Provider store={store}>
  <FormComponent />
 </Provider>);
 const sut = screen.getByTestId('id__label__country')
 expect(sut).toBeInTheDocument();
});

test('It should have a div for the select.', () => {
 render(<Provider store={store}>
  <FormComponent />
 </Provider>);
 const sut = screen.getByTestId('id__div__select')
 expect(sut).toBeInTheDocument();
});

test('It should have an input for the name.', () => {
 render(<Provider store={store}>
  <FormComponent />
 </Provider>);
 const sut = screen.getByTestId('id__input__name')
 expect(sut).toBeInTheDocument();
});

test('It should have an input for the weight.', () => {
 render(<Provider store={store}>
  <FormComponent />
 </Provider>);
 const sut = screen.getByTestId('id__input__weight')
 expect(sut).toBeInTheDocument();
});

test('It should have a select.', () => {
 render(<Provider store={store}>
  <FormComponent />
 </Provider>);
 const sut = screen.getByTestId('id__select__country')
 expect(sut).toBeInTheDocument();
});

test('It should have a select option for option 1.', () => {
 render(<Provider store={store}>
  <FormComponent />
 </Provider>);
 const sut = screen.getByTestId('id__select__1')
 expect(sut).toBeInTheDocument();
 expect(sut).toHaveTextContent('Select a country')
});


test('It should have a select option for option 2.', () => {
 render(<Provider store={store}>
  <FormComponent />
 </Provider>);
 const sut = screen.getByTestId('id__select__2')
 expect(sut).toBeInTheDocument();
 expect(sut).toHaveTextContent('Sweden')
});

test('It should have a select option for option 3.', () => {
 render(<Provider store={store}>
  <FormComponent />
 </Provider>);
 const sut = screen.getByTestId('id__select__3')
 expect(sut).toBeInTheDocument();
 expect(sut).toHaveTextContent('China')
});

test('It should have a select option for option 4.', () => {
 render(<Provider store={store}>
  <FormComponent />
 </Provider>);
 const sut = screen.getByTestId('id__select__4')
 expect(sut).toBeInTheDocument();
 expect(sut).toHaveTextContent('Brazil')
});

test('It should have a select option for option 5.', () => {
 render(<Provider store={store}>
  <FormComponent />
 </Provider>);
 const sut = screen.getByTestId('id__select__5')
 expect(sut).toBeInTheDocument();
 expect(sut).toHaveTextContent('Australia')
});

test('It should have an input for submit.', () => {
 render(<Provider store={store}>
  <FormComponent />
 </Provider>);
 const sut = screen.getByTestId('id__input__submit')
 expect(sut).toBeInTheDocument();
});


test('It should have a placeholder for the name input.', () => {
 render(<Provider store={store}>
  <FormComponent />
 </Provider>);
 const sut = screen.queryByPlaceholderText(/name/i)
 expect(sut).toBeInTheDocument();
});

test('It should have a placeholder for the weight input.', () => {
 render(<Provider store={store}>
  <FormComponent />
 </Provider>);
 const sut = screen.queryByPlaceholderText(/weight/i)
 expect(sut).toBeInTheDocument();
});

test('It should match snapshot', () => {
 const sut = renderer.create(<Provider store={store}>
  <FormComponent />
 </Provider>).toJSON()
 expect(sut).toMatchSnapshot()
});


