import {render} from '@testing-library/react-native';
import ProductItem from './ProductItem';

// Mock navigation
const mockNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      navigate: mockNavigate,
    }),
  };
});

const product = {
  id: '1',
  name: 'Test Product',
};

describe('ProductItem Component', () => {
  it('renders correctly', () => {
    const {getByText} = render(<ProductItem product={product} />);

    expect(getByText('Test Product')).toBeTruthy();
    expect(getByText('ID: 1')).toBeTruthy();
  });

  it('navigates to the detail page on press', () => {
    render(<ProductItem product={product} />);

    expect(mockNavigate).not.toHaveBeenCalledWith('DetailProduct', {
      product: product,
    });
  });
});
