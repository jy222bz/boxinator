import React from 'react'
import ReactDOM from 'react-dom'
import FormComponent from '../Form/FormComponent'
import { render, screen, cleanup } from '@testing-library/react'
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
 ReactDOM.render(<FormComponent />, sut)
})

test('It should have a main section.', () => {
 render(<FormComponent />);
 const sut = screen.getByTestId('id__section_main')
 expect(sut).toBeInTheDocument();

});

test('It should have a div in the section.', () => {
 render(<FormComponent />);
 const sut = screen.getByTestId('id__div')
 expect(sut).toBeInTheDocument();

});

test('It should have a headline and text in it.', () => {
 render(<FormComponent />);
 const sut = screen.getByTestId('id__headline');
 expect(sut).toBeInTheDocument();
 expect(sut).toHaveTextContent('The Required Info')
});


test('It should have a form', () => {
 render(<FormComponent />);
 const sut = screen.getByTestId('id__form')
 expect(sut).toBeInTheDocument();
});

test('It should have a label for the name.', () => {
 render(<FormComponent />);
 const sut = screen.getByTestId('id__label__name')
 expect(sut).toBeInTheDocument();
});


test('It should have a label for the weight.', () => {
 render(<FormComponent />);
 const sut = screen.getByTestId('id__label__weight')
 expect(sut).toBeInTheDocument();
});

test('It should have a label for the color.', () => {
 render(<FormComponent />);
 const sut = screen.getByTestId('id__label__color')
 expect(sut).toBeInTheDocument();
});

test('It should have a label for the country.', () => {
 render(<FormComponent />);
 const sut = screen.getByTestId('id__label__country')
 expect(sut).toBeInTheDocument();
});

test('It should have a div for the select.', () => {
 render(<FormComponent />);
 const sut = screen.getByTestId('id__div__select')
 expect(sut).toBeInTheDocument();
});

test('It should have a div for the color picker', () => {
 render(<FormComponent />);
 const sut = screen.getByTestId('id__div__color')
 expect(sut).toBeInTheDocument();
});

test('It should have an input for the name.', () => {
 render(<FormComponent />);
 const sut = screen.getByTestId('id__input__name')
 expect(sut).toBeInTheDocument();
});

test('It should have an input for the weight.', () => {
 render(<FormComponent />);
 const sut = screen.getByTestId('id__input__weight')
 expect(sut).toBeInTheDocument();
});

test('It should have a select.', () => {
 render(<FormComponent />);
 const sut = screen.getByTestId('id__select__country')
 expect(sut).toBeInTheDocument();
});

test('It should have a select option for option 1.', () => {
 render(<FormComponent />);
 const sut = screen.getByTestId('id__select__1')
 expect(sut).toBeInTheDocument();
 expect(sut).toHaveTextContent('Select a country')
});


test('It should have a select option for option 2.', () => {
 render(<FormComponent />);
 const sut = screen.getByTestId('id__select__2')
 expect(sut).toBeInTheDocument();
 expect(sut).toHaveTextContent('Sweden')
});

test('It should have a select option for option 3.', () => {
 render(<FormComponent />);
 const sut = screen.getByTestId('id__select__3')
 expect(sut).toBeInTheDocument();
 expect(sut).toHaveTextContent('China')
});

test('It should have a select option for option 4.', () => {
 render(<FormComponent />);
 const sut = screen.getByTestId('id__select__4')
 expect(sut).toBeInTheDocument();
 expect(sut).toHaveTextContent('Brazil')
});

test('It should have a select option for option 5.', () => {
 render(<FormComponent />);
 const sut = screen.getByTestId('id__select__5')
 expect(sut).toBeInTheDocument();
 expect(sut).toHaveTextContent('Australia')
});

test('It should have an input for submit.', () => {
 render(<FormComponent />);
 const sut = screen.getByTestId('id__input__submit')
 expect(sut).toBeInTheDocument();
});


test('It should have a placeholder for the name input.', () => {
 render(<FormComponent />);
 const sut = screen.queryByPlaceholderText(/name/i)
 expect(sut).toBeInTheDocument();
});

test('It should have a placeholder for the weight input.', () => {
 render(<FormComponent />);
 const sut = screen.queryByPlaceholderText(/weight/i)
 expect(sut).toBeInTheDocument();
});


