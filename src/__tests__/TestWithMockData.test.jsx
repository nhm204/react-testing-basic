import { render, screen } from '@testing-library/react'
import TestWithMockData from '../components/TestWithMockData';
import { mockData } from '../constants/MockData';


test("List renders successfully", () => {
  render(<TestWithMockData data={mockData} />)
  expect(screen.getByText(/fletcher/i)).toBeInTheDocument();
})