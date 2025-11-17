import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('renders with default placeholder', () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Search...');
    expect(input).toBeDefined();
  });

  it('renders with custom placeholder', () => {
    render(<SearchBar placeholder="Search items..." />);
    const input = screen.getByPlaceholderText('Search items...');
    expect(input).toBeDefined();
  });

  it('updates input value when typing', async () => {
    const user = userEvent.setup();
    render(<SearchBar />);

    const input = screen.getByPlaceholderText('Search...') as HTMLInputElement;
    await user.type(input, 'test query');

    expect(input.value).toBe('test query');
  });

  it('calls onSearch with query when form is submitted', async () => {
    const user = userEvent.setup();
    const onSearch = vi.fn();
    render(<SearchBar onSearch={onSearch} />);

    const input = screen.getByPlaceholderText('Search...');
    const button = screen.getByRole('button', { name: 'Search' });

    await user.type(input, 'test query');
    await user.click(button);

    expect(onSearch).toHaveBeenCalledWith('test query');
    expect(onSearch).toHaveBeenCalledTimes(1);
  });

  it('calls onSearch when pressing Enter', async () => {
    const user = userEvent.setup();
    const onSearch = vi.fn();
    render(<SearchBar onSearch={onSearch} />);

    const input = screen.getByPlaceholderText('Search...');

    await user.type(input, 'test query{Enter}');

    expect(onSearch).toHaveBeenCalledWith('test query');
  });

  it('does not throw error when onSearch is not provided', async () => {
    const user = userEvent.setup();
    render(<SearchBar />);

    const input = screen.getByPlaceholderText('Search...') as HTMLInputElement;
    const button = screen.getByRole('button', { name: 'Search' });

    await user.type(input, 'test query');
    await user.click(button);

    expect(input.value).toBe('test query');
  });
});
