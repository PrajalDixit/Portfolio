import { fireEvent, render, screen, within } from '@testing-library/react';
import App from './App';

test('shows the hero and hiring call to action', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/hold up in production/i);
  expect(screen.getByRole('heading', { name: /hiring a react native engineer/i })).toBeInTheDocument();
});

test('opens and closes a case study', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: /read the mfine case study/i }));
  const dialog = screen.getByRole('dialog');
  expect(within(dialog).getByText(/cult\.fit membership integration/i)).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: /close case study/i }));
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
});

test('featured cards keep the two-column grid free of gaps', () => {
  const { container } = render(<App />);
  const featured = () => [...container.querySelectorAll('.project-card.is-featured h3')].map((h) => h.textContent);
  // 8 projects: first and last span the row, 6 fill three full rows between them.
  expect(featured()).toEqual(['MFine', 'Solar Proposal Generator']);
  fireEvent.click(screen.getByRole('button', { name: /^mobile$/i }));
  expect(featured()).toEqual(['ZipSecure']);
});

test('contact form builds a prefilled email', () => {
  delete window.location;
  window.location = { href: '' };
  render(<App />);
  fireEvent.change(screen.getByLabelText(/your name/i), { target: { value: 'Asha' } });
  fireEvent.change(screen.getByLabelText(/work email/i), { target: { value: 'asha@acme.com' } });
  fireEvent.change(screen.getByLabelText(/company/i), { target: { value: 'Acme' } });
  fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'We have a role' } });
  fireEvent.click(screen.getByRole('button', { name: /send message/i }));
  expect(window.location.href).toMatch(/^mailto:vkdixit46@gmail\.com\?subject=Opportunity%20for%20Prajal%20at%20Acme/);
});
