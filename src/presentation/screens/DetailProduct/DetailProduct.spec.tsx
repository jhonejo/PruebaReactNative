import {render, fireEvent} from '@testing-library/react-native';
import DetailProduct from './DetailProduct';

const product = {
  id: '1',
  name: 'Test Product',
  description: 'This is a test product.',
  logo: 'test-logo.png',
  releaseDate: '2023-01-01',
  reviewDate: '2023-06-01',
};

const route = {params: {product}};

describe('DetailProduct Component', () => {
  it('renders product details correctly', () => {
    const {getByText} = render(<DetailProduct route={route} />);

    expect(getByText('ID: 1')).toBeTruthy();
    expect(getByText('Nombre: Test Product')).toBeTruthy();
    expect(getByText('Descripción: This is a test product.')).toBeTruthy();
    expect(getByText('Logo: test-logo.png')).toBeTruthy();
    expect(getByText('Fecha de liberación: 2023-01-01')).toBeTruthy();
    expect(getByText('Fecha de revisión: 2023-06-01')).toBeTruthy();
  });

  it('calls the edit button handler', () => {
    const consoleLogSpy = jest.spyOn(console, 'log');
    const {getByText} = render(<DetailProduct route={route} />);

    fireEvent.press(getByText('Editar'));
    expect(consoleLogSpy).toHaveBeenCalledWith('Editar');
  });

  it('calls the delete button handler', () => {
    const consoleLogSpy = jest.spyOn(console, 'log');
    const {getByText} = render(<DetailProduct route={route} />);

    fireEvent.press(getByText('Eliminar'));
    expect(consoleLogSpy).toHaveBeenCalledWith('Eliminar');
  });
});
