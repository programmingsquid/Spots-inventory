// src/services/lightspeedResources.mjs
import fetch from 'node-fetch';
import { getAccessToken } from './lightspeed.mjs'; // Assumes you have this function implemented
import { LIGHTSPEED_ACCOUNT_ID } from '../config/env.mjs';

/**
 * Generic function to fetch a resource from the Lightspeed X-Series API.
 * @param {string} resource - The resource name (e.g., 'Customer', 'Outlet').
 * @returns {Promise<any>} The JSON-parsed API response.
 * @throws {Error} if the API call is not successful.
 */
async function fetchResource(resource) {
  const token = await getAccessToken();
  const url = `https://x-series-api.lightspeedhq.com/API/Account/${LIGHTSPEED_ACCOUNT_ID}/${resource}.json`;
  
  const response = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });
  
  if (!response.ok) {
    throw new Error(`Error fetching ${resource}: ${response.statusText}`);
  }
  
  return response.json();
}


// Customers
export async function listCustomers() {
  return fetchResource('Customer');
}

// Outlets
export async function listOutlets() {
  return fetchResource('Outlet');
}

// Payment Types
export async function listPaymentTypes() {
  return fetchResource('PaymentType');
}

// Registers
export async function listRegisters() {
  return fetchResource('Register');
}

// Register Sales
export async function listRegisterSales() {
  return fetchResource('RegisterSale');
}

// Suppliers
export async function listSuppliers() {
  return fetchResource('Supplier');
}

// Taxes
export async function listTaxes() {
  return fetchResource('Tax');
}

// Users
export async function listUsers() {
  return fetchResource('User');
}

// Audit
export async function listAudit() {
  return fetchResource('Audit');
}

// Brands
export async function listBrands() {
  return fetchResource('Brand');
}

// Consignments
export async function listConsignments() {
  return fetchResource('Consignment');
}

// Consignment Products
export async function listConsignmentProducts() {
  return fetchResource('ConsignmentProduct');
}

// Channel Request Log
export async function listChannelRequestLog() {
  return fetchResource('ChannelRequestLog');
}

// Customer Groups
export async function listCustomerGroups() {
  return fetchResource('CustomerGroup');
}

// Fulfillment
export async function listFulfillment() {
  return fetchResource('Fulfillment');
}

// Inventory
export async function listInventory() {
  return fetchResource('Inventory');
}

// Outlet Product Taxes
export async function listOutletProductTaxes() {
  return fetchResource('OutletProductTax');
}

// Price Books
export async function listPriceBooks() {
  return fetchResource('PriceBook');
}

// Product Categories
export async function listProductCategories() {
  return fetchResource('ProductCategory');
}

// Product Images
export async function listProductImages() {
  return fetchResource('ProductImage');
}

// Product Types
export async function listProductTypes() {
  return fetchResource('ProductType');
}

// Products
export async function listProducts() {
  return fetchResource('Product');
}

// Promotions
export async function listPromotions() {
  return fetchResource('Promotion');
}

// Quotes
export async function listQuotes() {
  return fetchResource('Quote');
}

// Retailers
export async function listRetailers() {
  return fetchResource('Retailer');
}

// Sales
export async function listSales() {
  return fetchResource('Sale');
}

// Search
export async function listSearch() {
  return fetchResource('Search');
}

// Service Orders
export async function listServiceOrders() {
  return fetchResource('ServiceOrder');
}

// Tags
export async function listTags() {
  return fetchResource('Tag');
}

// Variant Attribution
export async function listVariantAttribution() {
  return fetchResource('VariantAttribution');
}

// Promo Codes
export async function listPromoCodes() {
  return fetchResource('PromoCode');
}

// Pick Lists
export async function listPickLists() {
  return fetchResource('PickList');
}

// Shifts
export async function listShifts() {
  return fetchResource('Shift');
}

// Gift Cards
export async function listGiftCards() {
  return fetchResource('GiftCard');
}

// Partner Billing
export async function listPartnerBilling() {
  return fetchResource('PartnerBilling');
}

// Store Credit
export async function listStoreCredit() {
  return fetchResource('StoreCredit');
}

// Webhooks
export async function listWebhooks() {
  return fetchResource('Webhook');
}

// Workflow
export async function listWorkflow() {
  return fetchResource('Workflow');
}
