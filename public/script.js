const stripe = Stripe(
    'XXXXXXXXXXXXXXXXXXXXXXXXXXX'
);

document
    .getElementById('checkout-button')
    .addEventListener('click', async () => {
        const response = await fetch('/create-checkout-session', {
            method: 'POST',
        });
        const session = await response.json();

        // Redirecionar ao checkout
        const { error } = await stripe.redirectToCheckout({
            sessionId: session.id,
        });
        if (error) {
            console.error(
                'Erro no redirecionamento para o checkout:',
                error.message
            );
        }
    });
