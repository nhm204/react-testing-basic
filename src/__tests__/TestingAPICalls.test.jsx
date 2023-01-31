import { render, screen, waitFor } from '@testing-library/react';
import * as services from '../utils/Services';
import TestingAPICalls from '../components/TestingAPICalls';


test("Fetching API", async () => {
    const mockFetchData = jest.spyOn(services, 'FetchData')
        .mockImplementation(async () => {
            return [{
                name: 'kunal'
            }];
        })

    render(<TestingAPICalls />)
    expect(mockFetchData).toHaveBeenCalled();
    await waitFor(() => {
      expect(screen.getByText(/kunal/i)).toBeInTheDocument();
    })
})