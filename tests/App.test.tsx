import { fireEvent, render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from '../App';
import { contentRepository } from '../lib/content';

describe('EduTools 2026 homepage', () => {
  it('renders the complete Markdown-led frame', () => {
    render(<App reviewEnabled={false} />);
    expect(screen.getByRole('heading', { level: 1, name: contentRepository.homepage.data.title })).toBeInTheDocument();
    expect(screen.getAllByTestId('category')).toHaveLength(4);
    expect(screen.getByLabelText('Four ways to think wider')).toHaveClass('hero-side');
    expect(document.querySelector('.old-boundary')).not.toBeInTheDocument();
    expect(screen.getAllByTestId('relationship')).toHaveLength(3);
    expect(screen.getAllByText('WriteFlex Desktop').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Powered or augmented by AI').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Delegated to AI').length).toBeGreaterThan(0);
    expect(screen.queryByLabelText(/Edit in WriteFlex/)).not.toBeInTheDocument();
    expect(document.querySelector('.desktop')).toBeInTheDocument();
  });

  it('searches and filters the 57 catalogue entries', () => {
    render(<App reviewEnabled={false} />);
    const catalogue = screen.getByTestId('catalogue');
    expect(within(catalogue).getAllByTestId('catalogue-card')).toHaveLength(57);
    fireEvent.change(screen.getByLabelText('Search projects and skills'), { target: { value: 'Canvas Course Manager' } });
    expect(within(catalogue).getAllByTestId('catalogue-card')).toHaveLength(1);
    expect(within(catalogue).getByText('Canvas Course Manager')).toBeInTheDocument();
  });

  it('shows source edit controls in local review mode', () => {
    render(<App reviewEnabled />);
    expect(screen.getAllByLabelText(/Edit in WriteFlex/).length).toBeGreaterThan(57);
  });
});
