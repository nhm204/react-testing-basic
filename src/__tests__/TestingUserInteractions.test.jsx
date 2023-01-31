import { render, screen } from '@testing-library/react';
import TestingUserInteractions from '../components/TestingUserInteractions'

test("User interaction", () => {
    render(<TestingUserInteractions />)

    // const inputElement = screen.getByRole('textbox')
    const nameInput = screen.getByPlaceholderText(/enter name/i);
    const descrInput = screen.getByPlaceholderText(/enter description/i);
    const passwordInput = screen.getByLabelText(/enter password/i);
    const submitButton = screen.getByRole('button', { name: /submit/i });
    const applyButton = screen.getByRole('button', { name: /apply/i });
})
