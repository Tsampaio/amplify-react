import { describe, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('ChooseAndPlay', () => {
  it('display Hello World', () => {
    render(<App />);

    expect(screen.getByText(/Hello World/i)).toBeInTheDocument();
  });
});
