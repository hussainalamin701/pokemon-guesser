import { test, expect } from '@playwright/test';

test('awards points for a correct guess', async ({ page }) => {
    await page.route('https://pokeapi.co/api/v2/pokemon/*', async route => {
        await route.fulfill({
            json: {
                id: 25,
                name: 'pikachu',
                sprites: {
                    front_default: '/pokemonlogo.png',
                },
            },
        });
    });

    await page.goto('/');

    const guessInput = page.getByRole('textbox');
    await expect(guessInput).toBeVisible();
    await guessInput.fill('pikachu');

    const guessButton = page.getByRole('button', {
        name: 'Guess',
        exact: true,
    });

    await guessButton.click();

    await expect(
        page.getByText('Score: 200', { exact: true })
    ).toBeVisible();
});