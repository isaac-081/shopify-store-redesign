/*
 * Shopify Storefront Redesign
 * Lightweight frontend interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  const categoryCards = document.querySelectorAll('.category-card');

  categoryCards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
      card.classList.add('is-hovered');
    });

    card.addEventListener('mouseleave', () => {
      card.classList.remove('is-hovered');
    });
  });
});
