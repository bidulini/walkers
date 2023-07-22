import React from "react";

const ShoppingList = () => {
  return (
    <div className="shopping-card-container">
      <div className="shopping-list-title">Shopping List:</div>
      <input
        type="text"
        className="meal-input"
        placeholder="Enter Grocery..."
        id="grocery-input"
      />
      <div id="suggested-options">
        <button class="suggested-option">
          <span class="bullet" />
          Milk
          <span class="minus-sign" />
        </button>
        <button class="suggested-option">
          <span class="bullet" />
          Sugar
          <span class="minus-sign" />
        </button>
        <button class="suggested-option">
          <span class="bullet" />
          Beverage
          <span class="minus-sign" />
        </button>
        <button class="suggested-option">
          <span class="bullet" />
          Oats
          <span class="minus-sign" />
        </button>
        <button class="suggested-option">
          <span class="bullet" />
          Eggs
          <span class="minus-sign" />
        </button>
      </div>
    </div>
  );
};

export default ShoppingList;
