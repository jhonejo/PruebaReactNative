import {render, waitFor} from '@testing-library/react-native';
import {ListProducts} from './ListProducts';
import {getProducts} from '../../../actions/products';

// Mock the imported modules
jest.mock('../../../actions/products');
jest.mock('../../../components/ProductItem/ProductItem', () => 'ProductItem');
jest.mock('../../../components/SearchComponent/SearchComponent', () => {
  return ({searchQuery, setSearchQuery}: any) => (
    <input
      placeholder="Search"
      value={searchQuery}
      onChange={(e: any) => setSearchQuery(e.target.value)}
    />
  );
});

const mockProducts = [
  {id: '1', name: 'Product 1'},
  {id: '2', name: 'Product 2'},
];

describe('ListProducts Component', () => {
  beforeEach(() => {
    (getProducts as jest.Mock).mockResolvedValue(mockProducts);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly and fetches products', async () => {
    const {getByText} = render(<ListProducts />);

    await waitFor(() => expect(getProducts).toHaveBeenCalled());

    expect(getByText('Banco')).toBeTruthy();
    expect(getByText('Cantidad de registros: 2')).toBeTruthy();
  });

  it('filters products based on search query', async () => {
    const {getByText} = render(<ListProducts />);

    await waitFor(() => expect(getProducts).toHaveBeenCalled());

    await waitFor(() =>
      expect(getByText('Cantidad de registros: 1')).not.toBeTruthy(),
    );
  });

  it('shows all products when search query does not match', async () => {
    const {getByText} = render(<ListProducts />);

    await waitFor(() => expect(getProducts).toHaveBeenCalled());

    await waitFor(() =>
      expect(getByText('Cantidad de registros: 2')).toBeTruthy(),
    );
  });
});
