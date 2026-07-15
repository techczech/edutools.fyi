import { fireEvent, render, screen, within } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import App from '../App';
import { contentRepository } from '../lib/content';

describe('EduTools 2026 homepage', () => {
  afterEach(() => window.history.pushState({}, '', '/'));

  it('renders the complete Markdown-led frame', () => {
    render(<App reviewEnabled={false} />);
    expect(screen.getByRole('heading', { level: 1, name: contentRepository.homepage.data.title })).toBeInTheDocument();
    expect(screen.getAllByTestId('category')).toHaveLength(4);
    expect(screen.getByLabelText(contentRepository.interfaceCopy.ui.hero_categories_label)).toHaveClass('hero-side');
    expect(screen.getAllByTestId('relationship')).toHaveLength(3);
    expect(screen.getAllByText('WriteFlex Desktop').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Powered or augmented by AI').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Delegated to AI').length).toBeGreaterThan(0);
    expect(screen.queryByLabelText(/Edit in WriteFlex/)).not.toBeInTheDocument();
    expect(screen.getByTestId('featured-showcase')).toBeInTheDocument();
  });

  it('links every major homepage section from the top navigation', () => {
    render(<App reviewEnabled={false} />);
    const navigation = screen.getByRole('navigation');
    expect(navigation).toHaveClass('section-navigation');
    const links = within(navigation).getAllByRole('link');
    const destinations = links.map((link) => link.getAttribute('href'));

    expect(destinations).toEqual([
      '/#possibilities',
      '/#ai-involvement',
      '/#featured',
      '/#projects',
      '/about/',
    ]);

    for (const destination of destinations.filter((href) => href?.startsWith('/#'))) {
      expect(document.querySelector(destination!.slice(1))).toBeInTheDocument();
    }

    expect(document.getElementById('getting-started')).not.toBeInTheDocument();
  });

  it('opens the top navigation Markdown document from local review mode', () => {
    render(<App reviewEnabled />);
    expect(screen.getByLabelText('Edit in WriteFlex: Navigation')).toHaveAttribute(
      'href',
      '/__writeflex/open?source=content%2Finterface%2Fnavigation.md',
    );
  });

  it('places featured apps before the full catalogue', () => {
    render(<App reviewEnabled={false} />);
    const featured = document.getElementById('featured');
    const catalogue = document.getElementById('projects');

    expect(featured).toBeInTheDocument();
    expect(catalogue).toBeInTheDocument();
    expect(featured!.compareDocumentPosition(catalogue!)).toBe(Node.DOCUMENT_POSITION_FOLLOWING);
  });

  it('renders the three homepage Markdown sections as three columns', () => {
    render(<App reviewEnabled={false} />);
    const markdownHeadings = [...contentRepository.homepage.body.matchAll(/^## (.+)$/gm)].map((match) => match[1]);
    const summary = screen.getByTestId('homepage-summary');
    const columns = within(summary).getAllByTestId('homepage-summary-column');

    expect(columns).toHaveLength(3);
    expect(columns.map((column) => within(column).getByRole('heading', { level: 2 }).textContent)).toEqual(markdownHeadings);
    expect(columns.map((column) => within(column).getAllByRole('listitem').length)).toEqual([4, 3, 2]);
    expect(within(summary).getAllByTestId('summary-item-copy')).toHaveLength(9);
    expect(within(screen.getByTestId('ai-involvement-divider')).getByRole('heading', { level: 2 }))
      .toHaveTextContent('AI Involvement');
    expect(within(screen.getByTestId('ai-modes-section')).getAllByTestId('relationship')).toHaveLength(3);
  });

  it('renders the site evolution on an About page with both earlier versions', () => {
    window.history.pushState({}, '', '/about/');
    render(<App reviewEnabled={false} />);

    expect(screen.getByRole('heading', { level: 1, name: 'Evolution of this site' })).toBeInTheDocument();
    const visuals = screen.getByTestId('about-visuals');
    const links = within(visuals).getAllByRole('link');
    expect(links).toHaveLength(2);
    expect(links.every((link) => link.getAttribute('target') === '_blank')).toBe(true);
    expect(within(visuals).getAllByRole('img')).toHaveLength(2);
  });

  it('searches and filters the 57 catalogue entries', () => {
    render(<App reviewEnabled={false} />);
    const catalogue = screen.getByTestId('catalogue');
    expect(within(catalogue).getAllByTestId('catalogue-card')).toHaveLength(57);
    fireEvent.change(screen.getByLabelText('Search projects and skills'), { target: { value: 'Canvas Course Manager' } });
    expect(within(catalogue).getAllByTestId('catalogue-card')).toHaveLength(1);
    expect(within(catalogue).getByText('Canvas Course Manager')).toBeInTheDocument();
  });

  it('shows direct WriteFlex browser links in local review mode', () => {
    render(<App reviewEnabled />);
    const links = screen.getAllByLabelText(/Edit in WriteFlex/);
    expect(links.length).toBeGreaterThan(57);
    expect(links.every((link) => link.tagName === 'A')).toBe(true);
    expect(links[0].getAttribute('href')).toMatch(/^\/__writeflex\/open\?source=content%2F/);
  });

  it('opens catalogue destinations in a new tab', () => {
    render(<App reviewEnabled={false} />);
    const destinations = screen.getAllByRole('link', { name: 'Open skill' });
    expect(destinations.length).toBeGreaterThan(0);
    expect(destinations.every((link) => link.getAttribute('target') === '_blank')).toBe(true);
    expect(destinations.every((link) => link.getAttribute('rel') === 'noreferrer')).toBe(true);
  });

  it('renders a linked hero collage from the selected project Markdown', () => {
    render(<App reviewEnabled={false} />);
    const selectedProjects = contentRepository.projects.filter((item) => item.data.hero_collage);
    const collage = screen.getByTestId('hero-collage');
    const links = within(collage).getAllByRole('link');

    expect(selectedProjects).toHaveLength(5);
    expect(links).toHaveLength(selectedProjects.length);
    expect(links.every((link) => link.getAttribute('target') === '_blank')).toBe(true);
    expect(links.every((link) => link.getAttribute('rel') === 'noreferrer')).toBe(true);
  });

  it('gives every catalogue entry a screenshot or workflow graphic', () => {
    render(<App reviewEnabled={false} />);
    const catalogue = screen.getByTestId('catalogue');
    const cards = within(catalogue).getAllByTestId('catalogue-card');
    const entriesWithoutScreenshots = contentRepository.catalogue.filter((item) => !item.data.screenshot);

    expect(within(catalogue).getAllByTestId('card-media')).toHaveLength(cards.length);
    expect(within(catalogue).getAllByTestId('workflow-graphic')).toHaveLength(entriesWithoutScreenshots.length);
  });

  it('renders three featured entries from each category', () => {
    render(<App reviewEnabled />);
    const showcase = screen.getByTestId('featured-showcase');
    const sectionEdit = screen.getAllByLabelText('Edit in WriteFlex: Featured apps.')
      .find((link) => link.parentElement?.contains(showcase));
    expect(sectionEdit).toHaveAttribute(
      'href',
      '/__writeflex/open?source=content%2Finterface%2Ffeatured.md',
    );
    const groups = within(showcase).getAllByTestId('featured-category');
    const expectedCategories = contentRepository.categories.map((item) => item.data.title);

    expect(groups).toHaveLength(4);
    expect(groups.map((group) => within(group).getByRole('heading', { level: 3 }).textContent))
      .toEqual(expectedCategories);

    for (const group of groups) {
      expect(within(group).getAllByTestId('featured-card')).toHaveLength(3);
    }

    expect(within(showcase).getAllByTestId('featured-card')).toHaveLength(12);
    expect(within(showcase).getAllByTestId('workflow-graphic')).toHaveLength(4);
  });
});
