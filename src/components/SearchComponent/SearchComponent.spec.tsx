import {render, fireEvent} from '@testing-library/react-native';
import SearchComponent, {PropsSearchComponent} from './SearchComponent';

const mockSetSearchQuery = jest.fn();

const props: PropsSearchComponent = {
  searchQuery: 'initial query',
  setSearchQuery: mockSetSearchQuery,
};

describe('SearchComponent', () => {
  it('renders correctly with initial value', () => {
    const {getByPlaceholderText} = render(<SearchComponent {...props} />);

    const input = getByPlaceholderText('Search');
    expect(input.props.value).toBe('initial query');
  });

  it('calls setSearchQuery on text input change', () => {
    const {getByPlaceholderText} = render(<SearchComponent {...props} />);

    const input = getByPlaceholderText('Search');
    fireEvent.changeText(input, 'new query');

    expect(mockSetSearchQuery).toHaveBeenCalledWith('new query');
  });
});
