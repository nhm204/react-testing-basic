import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TestWithMockDataCoverAllBranch from '../components/TestWithMockDataCoverAllBranch';
import { mockData } from '../constants/MockData';


test("Ordered list renders", () => {
  render(<TestWithMockDataCoverAllBranch data={mockData} displayUnorderedList={false} />)

  expect(screen.getByText(/McVanamy/i)).toBeInTheDocument()
})


test("Email link click handler called", async () => {
  const mockHandleClick = jest.fn();
  render(<TestWithMockDataCoverAllBranch data={mockData} displayUnorderedList={true} handleClick = {mockHandleClick} />)
  await userEvent.click(screen.getByText(/mmcvanamy0@e-recht24.de/i));
  expect(mockHandleClick).toHaveBeenCalled();
})